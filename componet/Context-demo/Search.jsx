import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
let usessSection = createContext(null)

export function Sectionbbody()
{
    let data = useContext(usessSection);
    const[fashonget,setstore]=useState([{image:'',title:'',id:0,category:'',price:0}])

    function Handelfashonstore(category)
    {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then(response=>{
            setstore(response.data)
        })
        

    }
    useEffect(()=>{
        if(data==="")
        {
           Handelfashonstore('jewelery');  
        }
        else{
             Handelfashonstore(data);  


        }
     

    },[data])
    

      
      
    
    return(
        <div className="text-dark">
            <h1>resultt</h1>
            <div className="d-flex">
                 {
               fashonget.map(item=>
               <div key={item.id} className="card m-2 p-2 bg-dark-subtle shadow-sm" style={{widows:'200px'}}>
                <img className="card-img-top" src={item.image} style={{height:'140px'}}></img>

                <div className="card-header p-2">
                    {item.title}

                </div>
               </div>)

            }

            </div>

           
       
           

        
        </div>
    )
}

export function Search()
{

    const[hanser,setsearch]=useState('')
    const[btns,setbtn]=useState('')
    function Handelsearch(e)
    {
      
      setsearch(e.target.value)

    }
     
    function Btnclick()
    {
        setbtn(hanser)

    }


   
       





    return(
        <div>
            <header className="d-flex justify-content-around m-2 bg-info-subtle text-white">
               
                    <div className="text-danger">
                        <h3>Shopppy</h3>
                    </div>
                    <div>
                        <div className="input-group">
                            <input onChange={Handelsearch} type="text" placeholder="search" className=" " />
                            <button  onClick={Btnclick} className="bi bi-search btn btn-danger"></button>
                        </div>
                    </div>
                    <div>
                       
                        <button className="bi bi-cart btn btn-danger m-1"></button>
                        <button className="bi bi-person btn btn-danger m-1"></button>

                    </div>
              
            </header>

            <section>
                <div className=" bg-body-secondary" style={{height:'700px'}}>
                    <usessSection.Provider value={btns}>
                          <Sectionbbody/>

                    </usessSection.Provider>
                  

                </div>
            </section>
        </div>
    )
}