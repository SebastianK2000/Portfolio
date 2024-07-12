import '../../styles/Technology.css'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/javascript.svg'
import ts from '../../assets/typescript.svg'
import react from '../../assets/react.svg'
import figma from '../../assets/figma.svg'
import postgres from '../../assets/postgresql.svg'
import bootstrap from '../../assets/bootstrap.svg'
import netlify from '../../assets/netlify.svg'

const Technology = () => {
    return (
            <div className="tech-stack-container">
                <div className="technology">
                    <p className="tech-icon"><img src={html} alt="icon HTML5" /></p>
                    <p className="tech-icon"><img src={css} alt="icon CSS3" /></p>
                    <p className="tech-icon"><img src={js} alt="icon JS" /></p>
                    <p className="tech-icon"><img src={ts} alt="icon TS" /></p>
                    <p className="tech-icon"><img src={react} alt="icon React" /></p>
                    <p className="tech-icon"><img src={bootstrap} alt="icon Bootstrap" /></p>
                    <p className="tech-icon"><img src={figma} alt="icon Figma" /></p>
                    <p className="tech-icon"><img src={postgres} alt="icon PostgreSQL" /></p>
                    <p className="tech-icon"><img src={netlify} alt="icon Netlify" /></p>
                    
                </div>
            </div>
    )
}

export default Technology;