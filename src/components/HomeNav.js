import CategoryNav from "./CategoryNav";

export default function HomeNav(props) {
    
    return (
        <div className="main">

        <nav className="navCategory">
            {props.arr.map(v => {
                return <CategoryNav key={v} valeu={v} />
            })}
        </nav>
            </div>
    )
}