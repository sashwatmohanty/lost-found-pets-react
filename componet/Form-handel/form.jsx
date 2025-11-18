import { useState } from "react";


export function FormHandel()
{

    const[product,setproduct]=useState({id:0,name:'',price:0,stuck:false,city:''})
    const [nameerror,setnameerror]=useState('');
    const[cityerror,setcityerror]=useState('');

    function errornamemsg(e)
    {
      if(e.target.value==="")
      {
        setnameerror('FILL in the balanks');
      }
    }


    function handelidchage(e)
    {
      setproduct({
        id:e.target.value,
        name:product.name,
        price:product.price,
        stuck:product.stuck,
        city:product.city,
      })
    }

     function handelNamechage(e)
    {
       setproduct({
        id:product.id,
        name:e.target.value,
        price:product.price,
        stuck:product.stuck,
        city:product.city,
      })
    }

     function handelPrice(e)
    {
       setproduct({
        id:product.id,
        name:product.name,
        price:e.target.value,
        stuck:product.stuck,
        city:product.city,
      })
    }
    
    function handeStuck(e)
    {
       setproduct({
        id:product.id,
        name:product.name,
        price:product.price,
        stuck:e.target.checked,
        city:product.city,
      })
    }

    function handelCity(e)
    {
       setproduct({
        id:product.id,
        name:product.name,
        price:product.price,
        stuck:product.stuck,
        city:e.target.value,
      })
    }

    function handenelresister(e)
    {
        e.preventDefault();
        console.log(product);
        


 
    }


    return(
        <div className="container-fluid">
            <form onSubmit={handenelresister}>
                <h2>Resister form</h2>
                <dl>
                    <dd>enter ur id</dd>
                    <dt><input value={product.id} type="number" onChange={handelidchage}/></dt>
                    <dd>Enter ur name</dd>
                    <dt><input onBlur={errornamemsg} value={product.name} type="text" onChange={handelNamechage}/></dt>
                    <dd>{nameerror}</dd>
                    <dd>Enter ur price</dd>
                    <dt><input value={product.price} type="number" onChange={handelPrice} /></dt>
                    <dd>stuck</dd>
                    <dt><input checked={product.stuck} type="checkbox"onChange={handeStuck}/>Avalble</dt>

                    <select  value={product.city} onChange={handelCity}>
                        <option value="">Select city</option>
                        <option value="">hyd</option>
                        <option value="">pune</option>
                    </select>

                    
                </dl>
                <button type="submit">submit</button>




            </form>
        </div>
    )
}