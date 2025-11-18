import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Spider } from "./spider";

export function Maionslider() {
    return (

        <div>
            <BrowserRouter>
                <header className="d-flex justify-content-between bg-danger-subtle p-3">


                    <div>
                        <span className="fs-3 fw-bolder text-danger">Finder..</span>
                    </div>
                    <div>
                        <span className="mx-4"><Link to={'home'}>home</Link></span>
                        <span className="mx-4"> <Link to={'spider'}>spider</Link></span>
                        <span className="mx-4">thor</span>
                        <span className="mx-4">ironman</span>
                    </div>
                    <div>
                        <button className="btn btn-outline-primary">Check it</button>
                    </div>
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={''}/>
                         <Route path="spider" element={<Spider/>}/>
                    </Routes>
                </section>





            </BrowserRouter>
        </div>
    )
}