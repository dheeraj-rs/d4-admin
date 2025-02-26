interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label?: string;
  icon?: string;
  iconPos?: "left" | "right";
  severity?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "help"
    | "danger"
    | "info";
  size?: "small" | "medium" | "large" | "icon";
  outlined?: boolean;
  text?: boolean;
  raised?: boolean;
  rounded?: boolean;
  link?: boolean;
  loading?: boolean;
  className?: string;
  tooltip?: string;
  children?: React.ReactNode;
  variant?:
    | "outline"
    | "ghost"
    | "raised"
    | "text"
    | "link"
    | "rounded"
    | "raised-rounded"
    | "raised-outline"
    | "raised-ghost"
    | "raised-text"
    | "raised-link"
    | "raised-rounded-outline"
    | "raised-rounded-ghost"
    | "raised-rounded-text"
    | "raised-rounded-link"
    | "raised-outline-ghost"
    | "raised-outline-text"
    | "raised-outline-link"
    | "raised-ghost-text"
    | "raised-ghost-link"
    | "raised-text-link"
    | "raised-rounded-outline-ghost"
    | "raised-rounded-outline-text"
    | "raised-rounded-outline-link"
    | "raised-rounded-ghost-text"
    | "raised-rounded-ghost-link"
    | "raised-rounded-text-link"
    | "raised-outline-ghost-text"
    | "raised-outline-ghost-link"
    | "raised-outline-text-link"
    | "raised-ghost-text-link"
    | "raised-rounded-ghost-text-link"
    | "raised-rounded-outline-ghost-text"
    | "raised-rounded-outline-ghost-link"
    | "raised-rounded-outline-text-link"
    | "raised-rounded-ghost-text-link"
    | "raised-rounded-ghost-text-link"
    | "raised-rounded-outline-ghost-text-link"
    | "secondary";
}

interface CardProps {
  title?: string;
  subTitle?: string;
  children?: ReactNode;
  className?: string;
  header?: ReactNode;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fullWidth?: boolean;
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal";
}

interface ToastMessage {
  severity: "success" | "error" | "info" | "warning" | "warn";
  summary: string;
  detail?: string;
  life?: number;
}

interface ToastRef {
  show: (message: ToastMessage) => void;
  clear: () => void;
}

type CheckboxChangeEvent = ChangeEvent<HTMLInputElement>;

interface CheckboxProps {
    id?: string;
    inputId?: string;
    name?: string;
    value?: string;
    checked: boolean;
    onChange: ((e: CheckboxChangeEvent) => void) | ((value: boolean) => void);
    className?: string;
}

interface ChipProps {
    label: string;
    className?: string;
    removable?: boolean;
    icon?: string;
    image?: string;
    onRemove?: () => void;
}

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    tooltip?: string;
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
}

interface BlockViewerProps {
  header: string;
  code: string;
  new?: boolean;
  free?: boolean;
  containerClassName?: string;
  previewStyle?: React.CSSProperties;
  children: React.ReactNode;
}

interface TooltipProps {
  target: React.RefObject<HTMLElement>;
  position?: 'top' | 'bottom' | 'left' | 'right';
  content: string;
  event?: 'hover' | 'focus';
}


