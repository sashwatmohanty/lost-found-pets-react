import React from "react";

export class Cardtitle extends React.PureComponent
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="card" style={{width:'200px'}}>
                <div className="card-title">
                    {this.props.cardti}

                </div>
                 <div className=" card-body">
                    <ol>
                        {
                            this.props.cardbody.map(item=><li key={item}>{item}</li>)
                        }
                    </ol>
                 

                    </div>

            </div>
        )
    }
}