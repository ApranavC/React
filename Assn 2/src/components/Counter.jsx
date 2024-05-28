import { useState } from "react"
function Counter()
{
    const [count , setCount] = useState(0);
    return(
        <>
        <div>count : {count}
        <br />
        <div>
        <button className="operatorbtn"onClick={()=> setCount(count+1)}>+</button>
        <button className="operatorbtn" onClick={()=> setCount(count-1)}>-</button>
        <br />
        <button className="resetbtn" onClick={()=> setCount(0)}> Reset</button>
        </div>
        </div>
        </>
    )
}
export default Counter