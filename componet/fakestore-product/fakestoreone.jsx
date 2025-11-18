// import axios from "axios"
// import { useEffect, useReducer, useState } from "react"

// let storeinitialstate={
//     cardcount:0
// }
// function Reducer(state, action) {
//     switch (action.type) {
//         case "click":
//             return { cardcount: state.cardcount + 1 };
//         default:
//             return state;
//     }
// }






// export function Fakestoreone()
// {
//     const[state,dispatch]=useReducer(Reducer,storeinitialstate)
   
//     const[fakeapi,setapi]=useState([])
//     const[fakeapiall,setapiall]=useState([{id:0,title:'',price:0,image:''}])
//       const[carditem,setcarditeam]=useState([])
//         //const[cardcount,setcardcount]=useState(carditem.length)
    

 
//     function Handelfakestore()
//     {
//          axios.get("https://fakestoreapi.com/products/categories")
//         .then(response=>{
//             response.data.unshift('All')
//             setapi(response.data)
//         })

//     }
//        function HandelFakestoreall(url)
//     {
//         axios.get(url)
//         .then(response=>{
//             setapiall(response.data)
//         })
//     }

//     function HandelSelectsesson(e)
//     {
//         if(e.target.value ==='All')
//         {
//         HandelFakestoreall('https://fakestoreapi.com/products');
//         }
//         else{
//         HandelFakestoreall(`https://fakestoreapi.com/products/category/${e.target.value}`);
//         }

//     }
// //  function HandelClick(item)
// // {
// //     alert(`cart to iteam ${item.title}`)
// //     carditem.push(item)
// //     setcardcount(carditem.length)
// // }

//     function HandelClick(item) {
//         alert(`cart to item ${item.title}`);
//         setcarditeam([...carditem, item]); // Avoid direct mutation
//         dispatch({ type: "click" });      // Increase count
//     }

   
  

//     useEffect(()=>{
//         HandelFakestoreall('https://fakestoreapi.com/products');
//         Handelfakestore();
//           // setcardcount(carditem.length);
//     },[])
   


//     return(
//         <div>
//             <header className="d-flex justify-content-between align-items-center m-0 fw-bold fs-5 bg-info-subtle">
//                 <div className="text-danger">
//                     <h2>Fakesite..</h2>

//                 </div>
//                 <div className="text-black fw-medium">
//                     <span>home</span>
//                     <span className=" mx-3" >menu</span>
//                     <span>contact</span>

//                 </div>
//                 <div>
//                     <button data-bs-toggle="modal" data-bs-target="#cart"  className=" fs-6 btn bi bi-cart4 position-relative">click
//                      <span className="badge bg-danger position-absolute rounded rounded-circle">{state.cardcount}</span>
                             
//                     </button>
//                     <div className="modal fade" id="cart">
//                         <div className="modal-dialog">
//                             <div className="modal-content">
//                                 <div className="modal-header">
//                                     <h2>your card iteams</h2>
//                                     <button className="btn btn-close " data-bs-dismiss="modal"></button>
//                                 </div>
//                                 <div className="modal-body">
//                                     <table className="table table-hover">
//                                         <thead>
//                                             <tr>
//                                                 <th>Title</th>
//                                                 <th>Propery</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {
//                                                 carditem.map(iteamm=><tr key={iteamm.id}>
//                                                     <td>{iteamm.title}</td>
//                                                     <td><img style={{height:'50px',width:'50px'}} src={iteamm.image}></img></td>
//                                                     <td>{iteamm.price}</td>
//                                                 </tr>)
//                                             }
//                                         </tbody>

//                                     </table>
                               

//                                 </div>
//                             </div>

//                         </div>

//                     </div>

//                 </div>
//             </header>
//             <section className="mt-4 row m-1">
//                 <label className="form-label fw-bold">Select</label>
//                 <nav className="col-2">
//                      <select onChange={HandelSelectsesson} className="form-select" name="" id="">
//                     {
//                         fakeapi.map((product)=><option key={product}>{product}</option>)
//                     }
//                 </select>
                    
//                 </nav>
           

//             <main className="col-10 d-flex flex-wrap overflow-auto " style={{height:'600px'}}>
//                 {
//                     fakeapiall.map(item=>
//                         <div key={item.id} className="card m-2 p-2 bg-danger-subtle" style={{width:'300px'}}>
//                             <img src={item.image} alt="" className="card-img-top"style={{height:'140px'}}/>
//                             <div className="card-header" style={{height:'100px'}}>
//                                 {item.title}

//                             </div>
//                             <div className="card-body">
//                                 <dl>
//                                     <dt>price</dt>
//                                     <dd>{item.price}</dd>
//                                 </dl>

//                             </div>
//                             <div className=" card-footer">
//                                 <button onClick={()=> HandelClick(item)} className="bi bi-cart-4 btn btn-warning w-100">Add to cart
                              

//                                 </button>
                                

//                             </div>
//                         </div>
//                     )
//                 }

//             </main>

//             </section>
       

//         </div>
//     )
// }