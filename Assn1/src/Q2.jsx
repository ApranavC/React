function Button(props){
    return(
        <>
        <button onClick={props.OnClick}>{props.text}</button></>
    )
}
export default Button