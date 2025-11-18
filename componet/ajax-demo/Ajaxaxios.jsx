import axios from "axios";
import { useEffect, useState } from "react";
export function BindingAxios()
{
   const[course,setproduct]=useState([{title:'',name:'',Dur:'',image:''}])

    

    useEffect(()=>{

        axios.get('course.json')
        .then(response=>{
            setproduct(response.data)
        })
  
    
   },[]);

   return(
   
    <div className="container-fluid">
        <main className="d-flex flex-wrap mt-4">
            {
                course.map((course,index)=>
                    <div key={index} className="card  mt-2 p-2 w-25">
                        <img src={course.image} className="card-img-top" height="100px" />
                        <div className="card-header">
                            <div className="fw-bold">
                               {course.title} 
                            </div>


                        </div>
                        <div className="card-body">
                            <div>
                                <dl>
                                    <dt>Faculty</dt>
                                    <dd>{course.name}</dd>
                                       <dt>Dur</dt>
                                    <dd>{course.Dur}</dd>
                                </dl>
                            </div>

                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger w-100">join course</button>


                        </div>

                    </div>
                )

            }
            

        </main>

    </div>
   )
  



}