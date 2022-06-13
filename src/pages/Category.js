import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LiCategory from "../components/LiCategory"



export default function Category(){
    const params = useParams().categoryname
    const [cat,setCat]=useState()
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params}`)
        .then(res=>setCat(res.data))
    },[])
if(cat){
// console.log(cat)
    return  (
        <div className="cating">
            <h1 className="param">{params}</h1>
            <div className="CatList">

            <ul >
                {cat.map(v=>{return <LiCategory key={v.id} id={v.id} itemName={v.title} itemPrice={v.price} itemImg={v.image}/>})}
            </ul>

            </div>
        </div>
    )}
    else { return <h1>loading.....</h1>}
    
}