import { TextField } from "@mui/material";
import Button from "@mui/material/Button";


export function MuiForm()
{
    return(
        <div className="d-flex justify-content-center align-items-center">
            <div className="row">
                 <div className="col">
                 <h2>mui form</h2>
            <div className="w-100 p-4 border rounded shadow">
                <div>
                    <TextField label ="userName"variant="standard"></TextField>
                </div>
                 <div className="my-3">
                    <TextField label ="password"variant="standard"></TextField>
                </div>

                 <div className="">
                <Button variant="contained" color="warning">start</Button>


                </div>

            </div>

            </div>

           
        </div>

            </div>
           
    )
}