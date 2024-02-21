import './style.css'

function ProjectCard(props) {
  return <>
    <div className="card mb-4 ms-1" style={{ width: '23rem' }}>
      <img src={props.fig} className="card-img-top" alt={props.title + " screenshot"}></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.git} className="card-link">
          <img className="mx-2 me-4" width="70px"
            src="/React-Portfolio-ICT/src/assets/GitHub-Logo.png">
          </img>
        </a>
        <a href={props.deploy} className="card-link">
          <img className="mx-2 me-4" width="40px"
            src="/React-Portfolio-ICT/src/assets/deploy.png">
          </img>
        </a>
      </div>
    </div>
  </>
}

export default ProjectCard;