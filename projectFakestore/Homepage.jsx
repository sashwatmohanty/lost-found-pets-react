

export function Homepagees()
{
    return(
        <div>
            <header className=" d-flex justify-content-between bg-warning-subtle">
                <div className="text-danger fs-1 fw-bold"><span>ShopBear...</span></div>
                <div>
                    <span className="fs-4 mx-4 text-black fw-medium">Home</span>
                    <span className="fs-4 mx-4 text-black fw-medium">Menu</span>
                    <span className="fs-4 mx-4 text-black fw-medium">Contact</span>
                </div>
                <div>
                    <span className="bi bi-person mx-5"></span>
                    <button className="bi bi-stars btn btn-outline-danger shadow-lg">Login</button>
                </div>
                
            </header>
        </div>
    )
}