import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function FakestoteHomimmie() {
  const [catagories, setcatagories] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then(response => {
        setcatagories(response.data)
      })
  }, [])

  return (
    <div>
      <div>
        <ul className="w-25">
          {catagories.map(item => (
            <li className="bg-danger-subtle p-1 my-1 list-unstyled" key={item}>
              <Link to={`/product/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
