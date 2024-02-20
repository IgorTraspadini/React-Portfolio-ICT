import './style.css'

function ProjectCard(props) {
  return <>
    <div className="card mb-5 ms-4" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.test}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="card-link">
          <img className="mx-2 me-4" width="70px"
            src="./src/assets/GitHub-Logo.png">
          </img>
        </a>
        <a href="#" className="card-link">
          <img className="mx-2 me-4" width="40px"
            src="./src/assets/deploy.png">
          </img>
        </a>
      </div>
    </div>
  </>
}

export default ProjectCard;