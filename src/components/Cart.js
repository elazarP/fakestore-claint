import { useContext,useEffect } from "react"
import { ListCar } from "../App"
import ListCart from "./Listcart"

export default function Cart() {

    const [list, setListS] = useContext(ListCar)
    // console.log(list);

    // useEffect(()=>console.log(list),[list])


    return (
        <div className="cart">
            <h1>cart...</h1>
            {list.map((v) => {
                return <ListCart key={v.id} arr={v} />
            })}
        </div>
    )
}