

export function Mainnavi(props)
{
    return(
        <nav className="d-flex justify-content-between align-items-center">
            <div className="fs-3">
                {props.title}

            </div>
            <div>
             
                    {props.menu.map(item=><span className="mx-4" key={item}>{item}</span>)}
                

            </div>
            <div>
                {props.vutton.map(btn=><button className="btn btn-danger" key={btn}>{btn}</button>)}

            </div>
        </nav   >
    )
}