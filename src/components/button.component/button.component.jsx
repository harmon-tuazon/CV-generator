
const buttonStyleTypes = {
    add: 'add-button',
    clear: 'clear',
}

const Button = ({children, buttonStyleType, onClick, type}) => {
    return (
       <div>
        <button className={`${buttonStyleTypes[buttonStyleType]}`} onClick={onClick} type={type}>
            {children}
        </button>
       </div>
    )
}

export default Button;