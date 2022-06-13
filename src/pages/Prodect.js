import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Prodect() {
    const [item, setItem] = useState()
    const params = useParams().id

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params}`)
            .then(res => setItem(res.data))
    }, [])

    
    if (item) {
        // console.log(item);

        return (
            <div className="rdiv" >
                <div className="itemList">
                <span><img src={item.image} /></span>
                <h2>{item.title}</h2>
                <span className="sps">price - {item.price}$</span>
                <h2>{item.description}</h2>
                </div>
            </div>
        )
    }
    else {return <h1>loading...</h1> }
}