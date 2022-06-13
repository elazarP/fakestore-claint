import { Link } from "react-router-dom";

export default function CategoryNav(props){
    return(
        <Link to={`/category/${props.valeu}` }>
        <div className="categ" >
        <span>{props.valeu}</span>
        </div>
            </Link>
    )
}