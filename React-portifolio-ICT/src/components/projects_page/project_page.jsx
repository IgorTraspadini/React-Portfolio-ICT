import './style.css'
import ProjectCard from '../projects_card/project-card'
import Projects from '../../projects.json'

function ProjectP() {
  return <>
    <div className="container-fluid justify-content-center p-5 mt-4">
      <h3 className='pb-4'>My Projects</h3>
      <div className='mt-20 d-flex justify-content-evenly flex-wrap'>
        {Projects.map(i => <div key={i.id}><ProjectCard test={i.title} /></div>)}
        <div><ProjectCard test="test" /></div>
        <div><ProjectCard test="test" /></div>
        <div><ProjectCard test="test" /></div>
        <div><ProjectCard test="test" /></div>
        <div><ProjectCard test="test" /></div>
      </div>
    </div>
  </>
}

export default ProjectP