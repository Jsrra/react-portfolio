import Nav from "./nav"
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="font">Joseph Serrato</h1>
      <div className="navStyle"><Nav /></div>
      
    </header> 
  );
}

export default Header;
