import './ButtonControl.css'

const ButtonControl = ({selected, label, onClick}) => {
    return (
        <button 
            className={`button ${selected === label ? 'selected' : ''}`}
            onClick={() => onClick(label)}
        >
            {label}
        </button>
    )
}

export default ButtonControl