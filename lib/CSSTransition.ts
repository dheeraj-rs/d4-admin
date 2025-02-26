import React, { useCallback, useEffect, useRef, useState, ReactElement } from 'react';

// Define proper types for the component
interface CSSTransitionProps {
  in: boolean;
  timeout: {
    enter: number;
    exit: number;
  };
  classNames: string;
  children: ReactElement;
  onEnter?: () => void;
  onExit?: () => void;
}

const CSSTransition: React.FC<CSSTransitionProps> = ({ in: inProp, timeout, classNames, children, onEnter, onExit }) => {
  const nodeRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  // Fixed: Provide initial value to useRef
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const updateClasses = useCallback(
    (node: HTMLElement, addClasses: string[], removeClasses: string[]) => {
      removeClasses.forEach((cls) => node.classList.remove(`${classNames}-${cls}`));
      addClasses.forEach((cls) => node.classList.add(`${classNames}-${cls}`));
    },
    [classNames]
  );

  const cleanup = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    setMounted(true);
    return () => {
      cleanup();
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    if (!mounted || !nodeRef.current) return;
    
    const node = nodeRef.current;
    cleanup();

    const performTransition = async () => {
      if (inProp) {
        node.style.display = '';
        updateClasses(node, ['enter'], ['exit', 'exit-active', 'exit-done']);
        await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
        // Force reflow
        void node.scrollTop;
        updateClasses(node, ['enter-active'], []);
        onEnter?.();
        // timeoutRef.current = setTimeout(() => {
        //   updateClasses(node, ['enter-done'], ['enter', 'enter-active']);
        // }, timeout.enter);
      } else {
        updateClasses(node, ['exit'], ['enter', 'enter-active', 'enter-done']);
        await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
        // Force reflow
        void node.scrollTop;
        updateClasses(node, ['exit-active'], []);
        onExit?.();
        timeoutRef.current = setTimeout(() => {
          updateClasses(node, ['exit-done'], ['exit', 'exit-active']);
        }, timeout.exit);
      }
    };

    performTransition();
  }, [inProp, mounted, classNames, timeout.enter, timeout.exit, onEnter, onExit, updateClasses]);

  // Type-safe version of cloneElement
  return React.cloneElement(children, {
    ref: nodeRef,
    onMouseEnter: () => {
      if (nodeRef.current) {
        cleanup();
        updateClasses(nodeRef.current, ['enter-done'], ['exit', 'exit-active', 'exit-done']);
      }
    },
    className: `${(children.props as { className?: string }).className || ''} ${classNames}`.trim(),
    style: {
      ...((children.props as { style?: React.CSSProperties }).style || {}),
      display: mounted ? undefined : 'none',
    },
  } as React.HTMLAttributes<HTMLElement>);
};

export { CSSTransition };