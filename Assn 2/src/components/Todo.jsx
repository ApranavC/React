import { useState } from "react"
let done = 0;
let todo = 0;
function Todo() {
    const [tasks] = useState([]);
    return(
        <>
            <h1>Hello Dear!</h1> <br />
            <div className="tasknumber">Assigned Tasks: {done} 
                Completed Tasks : {todo}
            </div>
            <button>Add Task</button>

        </>

    )
}
export default Todo