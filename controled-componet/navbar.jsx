import './nav.css'

export function Navbar(props) {
    return (
        
        <nav className={`d-flex justify-content-between p-3 border border-1 ${props.theam}`}>
            <div className="text-danger fs-5 fw-bold">{props.title}</div>

            <div className="fs-3 fw-medium">
                {
                    props.menuitem.map(iteam => (
                        <span className="mx-3" key={iteam}>{iteam}</span>
                    ))
                }
            </div>

            <div>
                {
                    props.rishi.map(logo => (
                        <button className={logo}key={logo}></button>
                    ))
                }
            </div>
        </nav>
    );
}
