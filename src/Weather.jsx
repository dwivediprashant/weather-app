import Header from "./Header"
import Information from "./Information"
import Search from "./Search"
import "./Weather.css";
export default function Weather(){
    return (
        <div className="weather">
            <Header title="Weather App"/>
            <Search/>
        </div>
    )
}