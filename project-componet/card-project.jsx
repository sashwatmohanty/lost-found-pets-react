import { useEffect, useState,useRef } from 'react'
import './card.css'
import axios from 'axios'

export function Cart()
{
      let count = useRef(1);
          let thread = useRef(null); 
    const[carget,setcard]=useState({ model:'',image:''})


    useEffect(()=>{

         
            axios.get(`https://fakestoreapi.com/products/1`)
            .then(response=>{
            setcard(response.data)
             cardchange()
         
            })
       

    },[])


    function stoproduct()
    {
        clearInterval(thread.current)
    }


    function cardchange()
    {
        
         thread.current = setInterval(playauto,4000)
    }


    function playauto() 
    {
    count.current = count.current + 1;
    if (count.current > 20) count.current = 1; 

    axios.get(`https://fakestoreapi.com/products/${count.current}`)
      .then(response => {
        setcard(response.data);
      });
     }
     


    return(


    <div className='d-flex flex-wrap p-2 gap-1 justify-content-center p-2 bg-danger-subtle' style={{height:'30rem'}}>
    
        <div className='card shadow shadow-sm rounded rounded-4 p-2 m-2'style={{width:'15rem ',height:'24rem'}} >
            <img src={carget.image} className=' card-img-top rounded-top-4' alt="API Product" style={{height:'10rem'}} />
             <div className=' card-body'>
            <h5 className='card-title'>hello jarvish</h5>
            <h6 className='card-subtitle'>subtitle</h6>
            <p className='card-text'>
                Lorem ipsum dol Praesentium repudiandae corrupti mollitia ab.
            </p>
            <a href="#" className='btn btn-danger'>Explore</a>
            <button className='btn btn-primary m-2 p-2' onClick={stoproduct}>stop</button>
             </div>

        </div>
        
      
             
        <div className='card shadow shadow-sm rounded rounded-4 p-2 m-2' style={{width:'15rem',height:'24rem'}}>
            <img src="story.jpg" className='card-card-img rounded-top-3' alt="" style={{height:'10rem'}} />
            <div className='card-body'>
                <h5 className='card-title'>heloooo</h5>
                <h6 className='card-subtitle'>subtitle</h6>
                <p className='card-text overflow-x-hidden'>Lorem ipsum dolor,hhdjdjd hjdjdd sit amet consectetur </p>
                <a href="#" className='btn btn-danger'>Explore</a>
            </div>

        </div>


        <div className='card shadow shadow-sm rounded rounded-4 p-2 m-2'style={{width:'15rem',height:'24rem'}}>
            <img src="story.jpg" className='card-img rounded-top-3' alt="" style={{height:'10rem'}} />
            <div className='card-body'>
                 <h5 className='card-title'>heloooo</h5>
                <h6 className='card-subtitle'>subtitle</h6>
                <p className='card-text'>Lorem consequuntur aspernatur,  harum cupiditate explicabo?</p>
                <a href="#" className='btn btn-primary'>Explore</a>
                


            </div>

        </div>
            <div className='card shadow shadow-sm rounded rounded-4 p-2 m-2'style={{width:'15rem',height:'24rem'}}>
            <img src="story.jpg" className='card-img rounded-top-3' alt="" style={{height:'10rem'}} />
            <div className='card-body'>
                 <h5 className='card-title'>heloooo</h5>
                <h6 className='card-subtitle'>subtitle</h6>
                <p className='card-text'>Lorem ipsum dolor, ,  harum cupiditate explicabo?</p>
                <a href="#" onClick={cardchange} className='btn btn-primary'>Explore</a>
                


            </div>

        </div>

        
        
        
        

    </div>
    




    )

};     
          
    
