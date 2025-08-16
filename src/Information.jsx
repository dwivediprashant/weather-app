import "./Information.css";
import InfoTemplate from "./InfoTemplate";
export default function Information({response}){
        // ☀️ Summer (warm, bright, energetic)
        let summerStyles = {
        transition: "all 10s ",
        background: "linear-gradient(135deg, #FF512F, #F09819)", // orange → yellow
        color: "white"
        };

        // 🌧️ Rainy (cool, calm, cloudy)
        let rainyStyles = {
            transition: "all 10s ",
        background: "linear-gradient(135deg, #2C3E50, #3498DB)", // dark grey → blue
        color: "white"
        };

        // ❄️ Winter (chilly, frosty)
        let winterStyles = {
            transition: "all 10s ",
        background: "linear-gradient(135deg, #83a4d4, #b6fbff)", // icy blue shades
        color: "black"
        };
    
    return(
        <div className="info" style={response.temp>26 ? summerStyles : response.humidity>70 ? rainyStyles : winterStyles }>
            <InfoTemplate response={response}/>
        </div>
    )
}