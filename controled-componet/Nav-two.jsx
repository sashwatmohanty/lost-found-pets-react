

export function Navtwo(props)
{
    return(
        <nav className="container-fluid d-flex justify-content-between align-items-center m-1  w-100 ">
            <div className="text-danger fs-5 fw-bold">{props.title}</div>
            <div className="fs-3 fw-medium">
               {
                props.Listiteam.map(iteam=><span className="mx-3" key={iteam}>{iteam}</span>)
               }
            </div>
            <div>
                {
                    props.btn.map(checkbtn=><button className={checkbtn}  key={checkbtn}></button>)
                }
            </div>

        </nav>
        
    )
}