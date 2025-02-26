import { FC } from 'react';
const Checkbox: FC<CheckboxProps> = ({ inputId, id, name, value, checked, onChange, className = '' }) => {
    const handleChange = (e: CheckboxChangeEvent): void => {
        if (onChange) {
            if (onChange.length === 1) {
                (onChange as (value: boolean) => void)(e.target.checked);
            } else {
                (onChange as (e: CheckboxChangeEvent) => void)(e);
            }
        }
    };

    return (
        <div className={`checkbox-wrapper ${className}`}>
            <input id={inputId || id} type="checkbox" name={name} value={value} checked={checked} onChange={handleChange} className="checkbox-input" />
            <span className="checkbox-custom"></span>
        </div>
    );
};

export default Checkbox;
