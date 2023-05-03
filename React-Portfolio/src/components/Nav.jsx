import "../styles/header.css";

function Nav() {
  return (
    <nav >
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
                Resume
            </a>
          </li>
        </ul>
    </nav>
  );
}

export default Nav;