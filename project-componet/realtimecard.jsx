
import { createContext, useContext, useState } from 'react'
import './real.css'

let clickcontext = createContext(null)

export function Clickcompo() {
  let click = useContext(clickcontext)
  return (
    <div>
      {click === 'home' && (
        <div>
          <h1>Welcome to Home Page</h1>
        </div>
      )}
      {click === 'about' && (
        <div>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      )}
      {click === 'contact' && (
        <div>
          <h1>Get in Touch</h1>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      )}
      {click === 'gallery' && (
        <div>
          <h1>Our Gallery</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      )}
      {!click && (
        <div>
          <h1><span className="text-danger fs-1 fw-bolder">C</span>hoose ur section </h1>
          <h3><span className="fs-1 fw-bolder">Y</span>ou can more detail<span className="text-danger bi bi-search">s</span></h3>
        </div>
      )}
    </div>
  )
}

export function CardprojectReaaltime() {
  const [clickHome, setHome] = useState(null)

  function Handelclick(page) {
    setHome(page)
  }

  return (
    <div className=" " style={{ height: '70px' }}>
      <nav className="d-flex justify-content-around align-items-center text fs-4 ">
        <div className="text-danger fw-bolder fs-3">
          <span><span className="text-dark fs-1">P</span>rofile..</span>
        </div>
        <div className=" d-flex text-primary gap-4">
          <span><a onClick={() => Handelclick('home')} href="#" className="text-decoration-none">Home</a></span>
          <span> <a onClick={() => Handelclick('gallery')} href="#" className="text-decoration-none">Gallery</a></span>
          <span><a onClick={() => Handelclick('about')} href="#" className="text-decoration-none">About</a></span>
          <span><a onClick={() => Handelclick('contact')} href="#" className="text-decoration-none">Contact</a></span>
          <span><a onClick={() => Handelclick(null)} href="#" className="text-decoration-none">Default</a></span>
        </div>
        <div>
          <button className="btn btn-outline-danger fs-5">click it</button>
        </div>
      </nav>
      <section className="" id='sec'>
        <clickcontext.Provider value={clickHome}>
          <Clickcompo />
        </clickcontext.Provider>
      </section>
    </div>
  )
}


//In this code, each link in the navigation bar calls the Handelclick function with a different page name. The Clickcompo component then uses the click context to determine which page to render. If click is null, it renders the default content.