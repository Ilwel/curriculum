import './styles.css'
import icons from '../../icons'

function BusinessCard({ name, email, phone, local, github, linkedin, instagram }){

    return (
        <div className="business-card">
            <div className="text-field">

                <h1>{name}</h1>
                <div className="dashed"></div>
                <h2>Web developer</h2>

                <div className="infos">
                    <div className="field">
                        
                        <img src={icons.email} alt="email icon" />
                        {email}

                        
                    </div>
                    <div className="field">
                        
                        <img src={icons.phone} alt="phone icon" />
                        {phone}

                    </div>
                    <div className="field">
                        
                        <img src={icons.pin} alt="pin icon" />
                        {local}

                    </div>
                   
                </div>

                <div className="links">

                    <a href={github} target="blanck"><img src={icons.github} alt="github icon" /></a>
                    <a href={linkedin} target="blanck"><img src={icons.linkedin} alt="linkedin icon" /></a>
                    <a href={instagram} target="blanck"><img src={icons.instagram} alt="instagram icon" /></a>

                </div>

            </div>
            <div className="image-field">

                <button>Mais Informações</button>

            </div>
        </div>
    )

}

export default BusinessCard;