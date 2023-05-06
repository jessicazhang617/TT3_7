import './Button.css'

const Button = ({className, buttonText}) => {
    return (<button type='submit' class={className}>{buttonText}</button>)
}
export default Button