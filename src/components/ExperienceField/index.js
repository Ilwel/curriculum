import './styles.css'
import ExperienceCard from '../ExperienceCard';
import experience from '../../experience';

function ExperienceField() {

    const schoolExperience = experience.filter(x => !x.isjob);
    const jobExperience = experience.filter(x => x.isjob);

    return (
        <div className="experience-field">
            <h2>Formação</h2>
            <p>O que estudei</p>


            <div className="formation">

                {schoolExperience.map(item => <ExperienceCard{...item} />)}

            </div>

            <h2>Experiência</h2>
            <p>Onde trabalhei</p>
            
            <div className="experience">

                {jobExperience.map(item => <ExperienceCard {...item} />)}

            </div>

        </div>
    )

}

export default ExperienceField;