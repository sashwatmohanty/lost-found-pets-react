
import axios from "axios"
import { useCallback, useEffect, useReducer, useState } from "react"

let storeinitialstate = {
    cardcount: 0
}
function Reducer(state, action) {
    switch (action.type) {
        case "click":
            return { cardcount: state.cardcount + 1 };
        default:
            return state;
    }
}

export function Fakesite() {
    const [state, dispatch] = useReducer(Reducer, storeinitialstate)
    const [fakeapi, setapi] = useState([])
    const [fakeapiall, setapiall] = useState([{ id: 0, title: '', price: 0, image: '' }])
    const [carditem, setcarditeam] = useState([])

    function Handelfakestore() {
        axios.get("https://fakestoreapi.com/products/categories")
            .then(response => {
                response.data.unshift('All')
                setapi(response.data)
            })
    }

    // function Handelfakestore()
    // {
    //     axios.get("https://fakestoreapi.com/products/categories")
    //     .then(async response=>{
    //         response.data.unshift("All")
    //         setapi(await response.data)
    //     })
    // } 


    // const Handelfakestore = useCallback(async ()=>{
    //     const response =  axios.get("https://fakestoreapi.com/products/categories")
    //     console.log((await response).data);

    //    (await response).data.unshift("All")
    //     setapi((await response).data)

    // },[]) 




    function HandelFakestoreall(url) {
        axios.get(url)
            .then(response => {
                setapiall(response.data)
            })
    }

    function HandelSelectsesson(e) {
        if (e.target.value === 'All') {
            HandelFakestoreall('https://fakestoreapi.com/products');
        } else {
            HandelFakestoreall(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    function HandelClick(item) {
        alert(`Cart added: ${item.title}`);
        setcarditeam([...carditem, item]);
        dispatch({ type: "click" });
    }
    function Orderconform() {
        alert(`Conform Order`)
    }

    useEffect(() => {
        HandelFakestoreall('https://fakestoreapi.com/products');
        Handelfakestore();
    }, [])

    return (
        <div style={{ background: 'linear-gradient(to right, #f0f2f5, #dbeafe)', minHeight: '100vh' }}>
            <header className="d-flex justify-content-between align-items-center px-4 py-3 shadow bg-primary text-white">
                <h2 className="text-warning">Fakesite</h2>
                <nav className="d-flex justify-content-center">
                    <span className="mx-3">Home</span>
                    <span className="mx-3">Menu</span>
                    <span className="mx-3">Contact</span>
                </nav>
                <div>
                    <button data-bs-toggle="modal" data-bs-target="#cart" className="btn btn-light position-relative">
                        <i className="bi bi-cart4"></i>
                        <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">{state.cardcount}</span>
                    </button>
                </div>
            </header>

            <section className="p-3">
                <div className="row mb-3">
                    <label className="form-label fw-bold">Select Category:</label>
                    <div className="col-3">
                        <select onChange={HandelSelectsesson} className="form-select">
                            {
                                fakeapi.map((product) => <option key={product}>{product}</option>)
                            }
                        </select>
                    </div>
                </div>

                <div className="row d-flex flex-wrap justify-content-start">
                    {
                        fakeapiall.map(item =>
                            <div key={item.id} className="card m-2 shadow-sm border border-1 border-info" style={{ width: '18rem', backgroundColor: "#fff", borderRadius: '15px' }}>
                                <img src={item.image} alt="" className="card-img-top p-2" style={{ height: '180px', objectFit: 'contain' }} />
                                <div className="card-header fw-bold" style={{ height: '60px', overflow: 'hidden' }}>{item.title}</div>
                                <div className="card-body">
                                    <p className="text-muted">Price: <span className="fw-semibold text-success">${item.price}</span></p>
                                </div>
                                <div className="card-footer bg-transparent border-top-0">
                                    <button onClick={() => HandelClick(item)} className="btn btn-outline-primary w-100">
                                        <i className="bi bi-cart4 me-2"></i>Add to cart
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>

            {/* Modal */}
            <div className="modal fade" id="cart">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Your Cart Items</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-striped table-bordered">
                                <thead className="table-info">
                                    <tr>
                                        <th>Title</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        carditem.map(iteamm => <tr key={iteamm.id}>
                                            <td>{iteamm.title}</td>
                                            <td><img src={iteamm.image} style={{ height: '50px', width: '50px' }} alt="" /></td>
                                            <td>${iteamm.price}</td>
                                        </tr>)
                                    }
                                </tbody>
                                <div className="d-flex justify-content-center align-items-center">
                                    <button onClick={Orderconform} className="btn btn-primary w-100 mx-5 shadow shadow-sm  ">Order</button>

                                </div>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
