import { useState } from "react"
import './binding.css';


// export function Databinding()   //:>>>>>DATA BINDING IS A TECHNIQUE OF ACCESING DATA FROM THE SOURECE
                                     // AND UPDATING INTO UI
// {                                // REACT SUPPORT ONE WAY BINDING IT CAN ACCESS FORM SOUCE AND BIND TO UI  ELEMENT
                                    // REACT USE BINDING EXPRECTION {}
//     const[effect]=useState("txtstyle")
//     return(
//         <div>
//             <h1 className={`bgclor ${effect}`}>hello</h1>
//         </div>
//     )
// }



// export function Databinding()
// {
//     const [price]=useState(4500);
//    return(
//     <div>
//         <h2>data binding</h2>
//         <p>price:{price.toPrecision(2)}</p>
//         <p>price::{price.toLocaleString('en-IN',{style:'currency',currency:'INR'})}</p>
//         <input type="text" value={price} />
//     </div>
//    )
// }




// export function Databinding()
// {
//     const [stockl]=useState(true)
//     const[price]=useState(9878678n);

//     return(
//         <div>
//             <header>
//                 <span>shopping</span>
//                 {(sessionStorage.getItem("uname")===null)?<button>Signin</button>:<span>{sessionStorage}<button>signout</button></span>}
//             </header>
//             <p>{price}</p>
       
            

//         </div>
//     )
// }

// export function Databinding()
// {
//     const[catagories]=useState(["caption","ironman","thor","spider man"])
//     return(
//         <div>
//             <h3>{catagories}</h3>
//             <ol>
//                 {
//                     catagories.map(function(catagories){
//                         return <li key={catagories}>{catagories}</li>

//                     })
//                 }
//             </ol>

//             {/* <nav>
//                 {
//                     catagories.map((catagories,index)=><a key={index} href="#">{catagories}</a>,{

//                     })
//                 }
//             </nav> */}

//             <nav>
//                 {
//                    catagories.map(function(catagories,index){
//                     return
//                     <a key={index} href="#">{catagories}</a>
//                    })
//                 }
//             </nav>
//             <section>
//                 {
//                     catagories.map((catagories,index)=> <option key={index}>{catagories}</option>,{

//                     })
//                 }
                
               

                 
                  
                
//             </section>

//         </div>
//     )
// }






// export function Databinding()
// {
//     const[produduct]=useState({name:"mi",price:50000,stock:true,city:['Delhi','hyd']})
//     return(
//         <div>
//             <dl>
//                 <dt>product details</dt>
//                 <dd>{produduct.name}</dd>
//                  <dt>your price</dt>
//                 <dd>{produduct.price.toLocaleString('en-in',{style:'currency',currency:'INR'})}</dd>
//                 <dt>stock</dt>
//                 <dd>{(produduct.stock===true)?"avalable":"out of stock"}</dd>
//                 <dt>city</dt>
//                 <dd>
//                     <ul>,
//                       {/* {produduct.city.map((city,index)=> <li key={index}>{city}</li>)} */}
//                       {produduct.city.map((city,index)=><li key={index}>{city}</li>)}
//                     </ul>
//                 </dd>

//             </dl>
//         </div>
//     )
// }


export function Databinding()
{
    const [product,setproduct] = useState({name:'iphone',price:'40000',stock:'true',city:['bbsr','hyd']})

    return(
        <div>
            <dl>
                <dt>product name</dt>
                <dd>{product.name}</dd>
                 <dt>product price</dt>
                <dd>{product.price}</dd>
                 <dt>product stock</dt>
                <dd>{(product.stock===true)?"avaleble":"not avalevel"}</dd>
                <dt>product city</dt>
                <dd>
                    <ul>
                     {
                        // product.city.map((city,index)=>{         ///FIRST WAY
                        //     return <li key={index}>{city}</li>

                        // })

                        product.city.map((city,index)=><li key={index}>{city}</li>)  /// 2ND WAY
                     }



                     


                    </ul>

                </dd>
               
                
            </dl>
        </div>
    )
}


