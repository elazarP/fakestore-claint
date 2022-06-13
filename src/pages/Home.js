import axios from "axios"
import { useEffect, useState } from "react"
import HomeNav from "../components/HomeNav"
export default function Home() {

    const [category, setCategory] = useState()

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res=>setCategory(res.data))
    }, [])

// console.log(category)



if (category){   return (

        <div className="body">
            <HomeNav arr={category  } />
        </div>
    )}
    else { return <h1>loading.....</h1>}
} 