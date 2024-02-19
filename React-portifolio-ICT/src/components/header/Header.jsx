import './style.css'

function Header () {
  return <>
    <nav className="navbar fixed-top navbar-expand-lg ">
    <div className="container-fluid d-flex">
      <h1 className="navbar-brand fw-bolder"><img src='./src/assets/logo.JPG' width='50px' alt='logo'></img> Igor Traspadini </h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav fw-bolder">
          <li className="nav-item">
            <a className="nav-link" href="#about" role="button" aria-label="about session">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work" role="button" aria-label="work session">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" role="button" aria-label="contact session">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
  </>
}

export default Header;