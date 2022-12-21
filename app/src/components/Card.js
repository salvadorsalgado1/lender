
const Card = (props)=>{
    const style = {
        width:'18rem'
    }
    return(
        <div className="card" styles={style}>
            {props.children}
        </div>
    )
}
export default Card