// // import { useEffect, useState } from "react"
// // export function Statedemo()
// // {
// //     const [title,setdata]= useState('componet usess')

import { useState } from "react"



// // import { useState } from "react"

   
// //     useEffect(()=>{
// //          setdata('wellcome');

// //     },[])

// //     return(
// //         <div>
// //             <h1>hello</h1>
// //            <p>{title}</p>

// //         </div>
// //     )

// // }

// import { useEffect, useState } from "react"   
// export function Statedemo()
// {

//     const[title,setdata]=useState('hello ')    //USESTATE :===> IT COBNFIGURE A LOCAL STATE U CAN STOORE THE VALUES ANMD USE IT
//   //             :======> useState('wellcome to the ') u cant assign this type u can use hook call useeffect

//   //              :>====HOOK IS FUNCTION  HOOKS ACCESS SERVICES MEANM IT IS ALREADY THERE U CAN USE IT
//   useEffect(()=>{   //::>>>>>>USEEFFECT() PERPOSE IS TO DEFINE A ACTION TO PERFORM COMPONET MOUNT AND UNMONUNT 
//     setdata('wllcome to the home ')

//   },[])
//     return(
//         <div>

//       <h1>heloooo</h1>
//       <p>{title}</p>
//         </div>
     
//     )
// }

 export function Statedemo()
 {
  const[product,setproduct]=useState(['sam','tv','sony','micro'])
  return(
    <div>
      <h1>product is</h1>
      <ul>
        {
          product.map(product=><li key={product}>{product}</li>)
        }
      </ul>

      <h2>new product</h2>
      <ol>
        {
          product.map(product=><li key={product}>{product}</li>)
        }
      </ol>
      <h3>select product</h3>
      <select>
       
           {
              product.map((product,index)=>{
                return <option key={index} value={index}>{product}</option>
              })
            }
         
      
          
           
          
      
      </select>

      <h3>button</h3>
      
        {
          product.map(product=><button key={product} className="btn btn-danger p-2 m-1">{product}</button>)
        }

        <h4>checkvbox</h4>
        {
         product.map(product=> <li> <input  type="checkbox"  value={product} /> <label >{product}</label></li>)
        }
      

    </div>
  )
 }
