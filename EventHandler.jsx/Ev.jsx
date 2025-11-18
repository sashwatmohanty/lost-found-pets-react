import { useState } from "react"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css";
import { data } from "react-router-dom";
import { useEffect } from "react";



export function EventProject() {
    const [showPopup, setPopup] = useState(false)
    const [eventName, setEventname] = useState("")
    const [event, setEvent] = useState([])
    const [option, setOption] = useState("")
    const [day, setDay] = useState("")
    const [startDate, setStartDate] = useState("");
    const [endDate, setEnddate] = useState("")
    const [radio, setRadio] = useState("")
    const [select, setSelect] = useState("")

    useEffect(() => {
  console.log("option changed:", option);
debugger;
  // you can write any logic here
  // like API call, validation, update another state
}, [option]); 






    const [colDef] = useState([
        {
            headerName: "Name", field: 'name', flex: 1

        },
        {

            headerName: 'Action', field: 'action', flex: 1
        }
    ])


    const formatAction = () => {
        if (option === "one") {
            if (!day || !startDate || !endDate) return " ";
            const s = new Date(startDate);
            const e = new Date(endDate);
            return `Option DailySet ${day} ${s.getDate()}/${s.getMonth() + 1}/${s.getFullYear()} - ${e.getDate()}/${e.getMonth() + 1}/${e.getFullYear()}`;
        }

        if (option === "two") {
            if (!radio) return " ";
            return `Option RadioSet -- ${radio}`;
        }

        if (option === "three") {
            if (!select) return " ";
            return `Option selectSet -- ${select}`;
        }


    }



    const addEvent = () => {
        if (!eventName) {
            alert("Enter your Event name");
            return;
        }


        if (option === "one" && (!day || !startDate || !endDate)) {
            alert("Select day, start date and end date");
            return;
        }

        const newEvent = {
            name: eventName,
            action: formatAction()
        };

        setEvent([...event, newEvent]);
        setEventname("");
        setPopup(false);
        setDay("");
        setStartDate("");
        setEnddate("");
        setOption("");
    }





    return (
        <div>




            <div className=" card shadow-lg w-75 mx-auto m-5" style={{ height: 500 }}>


                <div className="m-3">
                    <button className="btn btn-primary" onClick={() => setPopup(true)}>
                        + Add
                    </button>
                </div>

                <div className="ag-theme-alpine m-5" style={{ height: 300, }}>
                    <AgGridReact rowData={event} columnDefs={colDef} />
                </div>

            </div>



            {showPopup && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.4)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    <div
                        style={{
                            background: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            width: "350px",
                            position: "relative",
                        }}
                    >


                        <button
                            onClick={() => setPopup(false)}
                            style={{
                                position: "absolute",
                                right: 10,
                                top: 10,
                                border: "none",
                                background: "transparent",
                                fontSize: "20px",
                                cursor: "pointer",
                            }}
                        >

                            ×
                        </button>

                        <h3>Add New Event</h3>

                        <div className=" mb-3">
                            <label className=" form-label">Event Name</label>
                            <input type="text" className=" form-control" value={eventName} onChange={(e) => setEventname(e.target.value)} placeholder="Enter Event Name"></input>

                            <div className=" mb-3">
                                <label className=" form-label">Select your Option</label>
                                <select className=" form-select" onChange={(e) => { setOption(e.target.value) }}>

                                    <option value="">Chose Option..</option>
                                    <option value="one">option DailySet</option>
                                    <option value="two">option RadioSet</option>
                                    <option value="three">option Selector</option>

                                </select>

                                {option === "one" && (
                                    <div className=" mt-3">
                                        <label><p>Select Day</p></label>
                                        <select onChange={(e) => { setDay(e.target.value) }} style={{ width: "80%" }} className=" form-select mb-3" value={day}>
                                            <option value="">--select day--</option>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thursday</option>
                                            <option>Friday</option>
                                            <option>Saturday</option>
                                            <option>Sunday</option>
                                        </select>


                                        <label><p>Start date</p></label>
                                        <div className=" d-flex gap-2 mb-3">

                                            <input type="date" className=" form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)}></input>

                                        </div>

                                        <label><p>End date</p></label>
                                        <div className="d-flex gap-2 mb-3 ">
                                            <input type="date" className=" form-control" value={endDate} onChange={(e) => setEnddate(e.target.value)}></input>


                                        </div>
                                        <button onClick={addEvent} className=" btn btn-primary">AddEvent</button>

                                    </div>
                                )}


                                {
                                    option === "two" && (
                                        <div className=" mt-3">
                                            <label><p>Select the Radio</p></label>
                                            <div className="selector-box">
                                                <label className="selector-option">
                                                    <input type="radio" name="city" value="pune" checked={radio == "pune"} onChange={(e) => setRadio(e.target.value)} />
                                                    Pune
                                                </label>

                                                <label className="selector-option">
                                                    <input type="radio" name="city" value="Delhi" checked={radio == "Delhi"} onChange={(e) => setRadio(e.target.value)} />
                                                    Delhi
                                                </label>

                                                <label className="selector-option m-1">
                                                    <input type="radio" name="city" value="mumbai" checked={radio == "mumbai"} onChange={(e) => setRadio(e.target.value)} />
                                                    mumbai
                                                </label>

                                                <label className="selector-option m-1">
                                                    <input type="radio" name="city" value="Odisha" checked={radio == "Odisha"} onChange={(e) => setRadio(e.target.value)} />
                                                    Odisha
                                                </label>

                                            </div>

                                            <button onClick={addEvent} className=" btn btn-primary">Add Event</button>

                                        </div>
                                    )
                                }


                                {option === "three" && (
                                    <div>

                                        <select className=" form-select mb-3" value={select} onChange={(e) => setSelect(e.target.value)}>

                                            <option>--Select ur car</option>
                                            <option>Audi</option>
                                            <option>Bmw</option>
                                            <option>Suzuki</option>
                                            <option>Alto</option>
                                        </select>


                                        <button onClick={addEvent} className=" btn btn-primary">Add Event</button>




                                    </div>

                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

