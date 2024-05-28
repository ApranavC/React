function List({items}){
    return(
        <>
        <ul>
        {items.map((values,index)=>(
            <li key = {index}>{values}</li>
        ))}
        </ul>
        </>
    )
}
export default List;