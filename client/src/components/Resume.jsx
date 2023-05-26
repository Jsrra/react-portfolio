import resume from "../assets/ResumeSS.png"
import "../styles/home.css"

// const styles = {
//     resume: {
//         minHeight: '30rem'
//     },
// }

function Resume(){
    return (
        <div className="resume-container">
    <img src={resume} alt="resume" className="resume"/>
    </div>
    )
}

export default Resume;