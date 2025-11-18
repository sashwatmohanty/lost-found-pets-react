import { useState } from "react"

export function CounterApp() {

    const [count, setCount] = useState(0)

    const [fname, setfName] = useState("")
    const [mname, setMName] = useState("")
    const [lname, setlName] = useState("")

    const fullName = `${fname} ${mname} ${lname}`.trim();
    


    const HandelCount = (e) => {
        const value = Number(e.target.value);
        setCount(value);

    }


    //only allow letters and spaces
      const handleNameChange = (setter) => (e) => {
        const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // remove numbers/symbols
        setter(onlyLetters);
      };







    // function to display color logic
    const getStyledCount = () => {
        const color = count > 10 ? "green" : "red";
        return <span style={{ color, fontSize: "24px", fontWeight: "bold" }}>{count}</span>;
    };
    

    return (
        <div>
            <h1>Counter:{getStyledCount()}</h1>
            <button onClick={() => setCount(count + 1)} className=" btn btn-primary p-1 m-1">Add</button>
            <button onClick={() => setCount(count - 1)} className=" btn btn-danger p-1 m-1">Remove</button>
            <button onClick={() => setCount(0)} className=" btn btn-success m-2">Reset</button>


            <br />
            <label for="costomCount">
                Change count
            </label>

            <input id="costomCount" type="number" value={count} onChange={HandelCount} />


            <label for="costomCountOne">
                Change count1

            </label>
            <input id="costomCountOne" type="number" value={count} onChange={HandelCount}></input>
            <br />



            <label className="m-2" for="fName">
                First name

            </label>
            <input onChange={handleNameChange(setfName)} className="m-2" id="fName" type="text" value={fname} />
            <br />


            <label className="m-2" for="Mname">
                Mid Name

            </label>
            <input onChange={handleNameChange(setMName)} className="m-2" id="Mname" type="text" value={mname} />
            <br />

            <label className="m-2" for="lName">
                Last Name

            </label>
            <input onChange={handleNameChange(setlName)} className="m-2" id="lName" type="text" value={lname} />



            <label className="m-2" for="fullName">
                Full Name

            </label>
            <input value={fullName} className="m-2" id="fullName" readonly="true" type="text"></input>


        </div>
    )
}