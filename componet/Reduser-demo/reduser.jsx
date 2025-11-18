import { useReducer } from "react"

let initialState={
    viewCounter:0,
}
function reduser(state,action)
{
    switch(action.type)
    {  
     case  "join":
     return {viewCounter:state.viewCounter+1}

       case  "exit":
     return {viewCounter:state.viewCounter-1}
     
        
    }

}




export function Reduserdemo()
{
    const[state,dispach]=useReducer(reduser,initialState)

    function Handeljoinview()
    {
        dispach({type:'join'})
       
    }

    function Handelexitclick()
    {
        dispach({type:'exit'})
    } 


    return(
        <div className="m-5">
            <h2>Watch live</h2>
            <iframe width="500px" height="200px"src="https://www.youtube.com/embed/ejAderbUHNM" ></iframe>
            <div className="mt-4">
                <div className="bi bi-eye" >
                    {state.viewCounter}<pre>   Viewers</pre>

                </div>
                <div className="row">
                    <div className="col">
                        <h2> user 1</h2>
                        <button onClick={Handeljoinview} className=" bi bi-camera-video btn btn-primary m-1">Join</button>
                        <button onClick={Handelexitclick} className=" bi bi-door-closed btn btn-danger">Exit</button>

                    </div>
                    <div className="col">
                        <h2> user 2</h2>
                          <button onClick={Handeljoinview} className=" bi bi-camera-video btn btn-primary m-1">Join</button>
                        <button onClick={Handelexitclick}  className=" bi bi-door-closed btn btn-danger">Exit</button>


                    </div>
                    

                </div>

            </div>
        </div>
    )
}