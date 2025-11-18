let initialState={
    viewCounter:0
}
function reduce(state,action)
{
    switch(action.type)
    {
         case  "join":
     return {viewCounter:state.viewCounter+1}

       case  "exit":
     return {viewCounter:state.viewCounter-1}

        
    }
    

}


export function RedduseThree()
{
    

    return(
        <div>
            <h2>video library</h2>
            <iframe width="500px" height="200px"src="https://www.youtube.com/embed/ejAderbUHNM" ></iframe>
              <div className="bi bi-eye" >
                <pre>   Viewers</pre>
                </div>
                <div className="row">
                    <div className="col">
                         <button  className=" bi bi-camera-video btn btn-primary m-1">Join</button>
                        <button  className=" bi bi-door-closed btn btn-danger">Exit</button>


                    </div>
                      <div className="col">
                         <button  className=" bi bi-camera-video btn btn-primary m-1">Join</button>
                        <button  className=" bi bi-door-closed btn btn-danger">Exit</button>


                    </div>

                </div>

        </div>
    )
}