import { Mainnavi } from "./mainnav"
export function Subnav()
{
    return(
        <div className="container-fluid">
            <header>
                <Mainnavi  title="shppper." menu={['manu','hello','core']} vutton={['sign','click']}/>

            </header>
        </div>
    )
}