import React from 'react';
import Image from 'next/image';

const Chip: React.FC<ChipProps> = ({ label, className = '', removable, icon, image, onRemove }) => {
    return (
        <span className={`chip ${className}`}>
            {image && <Image src={image} alt={label} className="chip-image" width={40} height={40} />}
            {icon && <i className={`${icon} chip-icon`} />}
            <span className="chip-text">{label}</span>
            {removable && (
                <span className="chip-remove" onClick={onRemove}>
                    ×
                </span>
            )}
        </span>
    );
};

export default Chip;
