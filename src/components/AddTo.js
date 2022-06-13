// import axios from "axios"


// import { useEffect, useState } from "react"
let items=[]

export default function AddTo(props) {
    // const [link, setLink] = useState()
    // const [i, seti] = useState()

    // useEffect(() => {
    //     axios.get(`https://fakestoreapi.com/products/${link}`)
    //         .then(res => seti(res.data))
    // }, [])


    // useEffect( console.log(items),[])
    return (
        <button onClick = {(e)=> items.push(e.target.parentElement.dataset.valeu)} > Add To cart</button>
        )
}