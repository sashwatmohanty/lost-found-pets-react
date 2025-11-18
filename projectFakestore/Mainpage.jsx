import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { LogConform } from "./LogConform";

import { Homepagees } from "./Homepage";



export function Mainpage()
{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogConform/>}></Route>
                <Route path=""element={<Homepagees/>}></Route>
                {/* <Route path="/catagories" element={<ProfakeCatagories/>}></Route> */}
            </Routes>
            
            
            </BrowserRouter>
            
        </div>
    )
}