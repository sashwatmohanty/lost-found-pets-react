export function ProOne(props) {
    return (
        <nav className="d-flex justify-content-between align-items-center m-2 px-4">
            {/* Logo or Title */}
            <div className="text-danger fs-5 fw-bolder flex-grow-1">
                {props.title}
            </div>

            {/* Menu Items */}
            <div className="flex-grow-1 d-flex justify-content-center fs-2 fw-medium">
                <ul className="list-unstyled d-flex gap-4 mb-0 ">
                    {props.menu.map((value) => (
                        <li key={value}>{value}</li>
                    ))}
                </ul>
            </div>

            {/* Buttons */}
            <div className="flex-grow-1 d-flex justify-content-end">
                {props.btn.map((bt) => (
                    <button id="Resi" onClick={props.handelresisterclick} 
                    className="btn btn-primary mx-1" key={bt}>
                        {bt} 
                    </button>
                ))}
            </div>
        </nav>
    );
}
