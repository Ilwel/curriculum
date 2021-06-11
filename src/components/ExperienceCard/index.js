import './styles.css'

function ExperienceCard({name, time_course, level, details, position, isjob}) {

    return (

        <div className="experience-card">

            <h3>{name}</h3>
            <p>{time_course}</p>

            <div className="about">

                {isjob ?  <p>{ position }</p> : <p>{level} <span>{details}</span></p>}
                


            </div>

        </div>

    )

}

export default ExperienceCard;