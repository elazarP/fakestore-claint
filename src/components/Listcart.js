export default function ListCart(props){
    return(
        <div className="listCart">
            <img className="imgCategory" src={props.arr.itemImg} />
            <h2>{props.arr.itemName}</h2>
            <h2>{props.arr.itemPrice}$</h2>
        </div>

    )
}