import "../styles/header.css";

function Nav() {
  return (
    <nav >
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href= "/Resume" > 
                Resume
            </a>
          </li>
        </ul>
    </nav>
  );
}

export default Nav;
