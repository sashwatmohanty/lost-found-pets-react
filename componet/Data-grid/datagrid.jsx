import { object } from "yup"


export function Datagrid(props)
{
    return(

        <table className={`table table-hover caption-top ${props.theam}`}>
            <caption>{props.caption}</caption>
            <thead>
                <tr>
                   {
                     props.fields.map(field=><th key={field}>
                        
                        <div className="dropdown" id="filter">
                            <button data-bs-target="#filter" data-bs-toggle="dropdown" className="bi bi-three-dots-vertical btn btn-light ms-3">
                            {field.toUpperCase()}

                            </button>
                            <button>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <span className="dropdown-item-text">Sort Assending <sapn className="bi bi-sort-alpha-down"></sapn></span>


                                    </li>
                                    <li className="dropdown-item">
                                        <span className="dropdown-item-text">Sort desc <sapn className="bi bi-sort-alpha-up"></sapn></span>

                                    </li>

                                </ul>
                            </button>
                                


                        </div>
                   
                     
                     
                     
                     </th>)
                   
                   }
                </tr>

            </thead>

            <tbody>
                {
                  props.data.map(record=>{
                    return <tr key={record}>
                        {

                          Object.keys(record).map(field=>
                        <td key={field}>{record[field]}

        
                        </td>
                         )
                        }
                    </tr>
                  })

                
                }
                
            </tbody>

            <tfoot>
                {props.footer}

            </tfoot>
            
        </table>
    )
}