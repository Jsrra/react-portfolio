import "../styles/portfolio.css"

function Project(props){
return (
<>
<div className = "head-text">
    <div className = "head-image">
        <img src = {props.imgs} alt = {props.alts} />
    </div>
        <div class='text-on-image'>
            <h3> {props.title} </h3>
            <p> FREEEEDOM </p>
        </div>
</div>
</> 
)
}

export default Project;

{/* <img src={props.imgs} alt={props.alts}></img>
    <h2></h2> */}
    