const Card = ({ title, subTitle, children, className = '', header }: CardProps) => {
    return (
        <div className={`card ${className}`}>
            {header}
            {title && <h3 className="card-title">{title}</h3>}
            {subTitle && <div className="card-subtitle">{subTitle}</div>}
            <div className="card-content">{children}</div>
        </div>
    );
};

export default Card;