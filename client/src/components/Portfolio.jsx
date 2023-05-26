import Project from "./Project"
import yardsale from "../assets/Capture.png"
import booze from "../assets/booze.png"
import team from "../assets/team.png"
import weather from "../assets/weather.png"
import "../styles/portfolio.css"

function Portfolio(){
    return (
        <>
        <div className="img-containers">
        <Project imgs={yardsale} title= "Yard Sale"/>
        <Project imgs={booze} title="Booze Hound"/>
        </div>
        <div className="img-containers">
        <Project imgs={team} title="Team Profile Generator"/>
        <Project imgs={weather} title="Weather Forecast"/>
        </div>
        </>
    )
}

export default Portfolio