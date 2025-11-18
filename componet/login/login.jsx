import './login.css'
export function Log()
{
    var tiltle = prompt("enter ur name");
    return(
        <>
     
            <form className="fromm">
                 <h2>login page {tiltle}</h2>
        <dl>
            <dt>user name</dt>
            <dd> <input type="text" /></dd>
            <dt>ur password</dt>
            <dd><input type="password" /></dd>
        </dl>
        <button>click</button>

            </form>
       
     
        </>
    )
}