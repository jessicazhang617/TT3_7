import './Button.css'

const Button = ({className, buttonText, ...rest}) => {
    return (<button type='submit' class={className} {...rest}>{buttonText}</button>)
}
export default Button