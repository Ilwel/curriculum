import './styles.css'

function ProjectCard({name, about, img, tags, link}) {

    return (
        <div className="project-card">

            <div className="infos">
                <h3>{ name }</h3>
                <p>{ about }</p>

                <div className="tags">
                    
                    {tags.map(tag => <span className={tag.type}>{tag.text}</span> )}
                    
                    {/* <span className="js">Javascript</span>
                    <span className="css">CSS</span>
                    <span className="html">HTML</span>
                    <span className="node">NodeJS</span>
                    <span className="react">React</span> */}

                </div>
            </div>
            <a href={link} target="blanck">
                
               <img src={img} alt="project img" />
               Clique e Veja
                
            </a>
             

        </div>
    )

}

export default ProjectCard;