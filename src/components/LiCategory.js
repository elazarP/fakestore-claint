
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { ListCar } from "../App";


export default function LiCategory(props) {
    const Navigate = useNavigate()
    const [list, setList] = useContext(ListCar)


    function add(item, id) {
        let a = list.find(v => v.id == id)
        if (!a) {
            setList([...list, item])
        }
        else {
            console.log(id);
        }

        // console.log(list);
    }



    return (<li >
        <div onClick={(e) => { if (e.target.localName !== "button") { Navigate(`../item/${props.id}`) } }}>
            <div className="divItem" data-valeu={props.id}>
                <img className="imgCategory" src={props.itemImg} />
                <h1>{props.itemName}</h1>
                <button onClick={() => add(props, props.id)} > Add To cart</button>
                <h2>{props.itemPrice}$</h2>
            </div>
        </div>
    </li>
    )
}

