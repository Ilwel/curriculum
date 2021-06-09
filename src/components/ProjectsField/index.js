import './styles.css'
import ProjectCard from '../ProjectCard'
import projects from '../../projects';

function ProjectsField(){

    return (
        <div className="projects-field">
            
            <h2>Projetos</h2>
            <p>Meus projetos pessoais onde eu apliquei meus conhecimentos para criar</p>
            <div className="content">

                {projects.map(project => <ProjectCard {...project}/>)}

            </div>
        </div>
    )

}

export default ProjectsField;