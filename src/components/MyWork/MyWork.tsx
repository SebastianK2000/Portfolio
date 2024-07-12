import '../../styles/MyWork.css'
import theme_pattern from '../../assets/theme.svg'
import mywork_data from '../../data/mywork_data'

interface WorkerType {
    w_img: string;
    w_link: string;
}

const MyWork = () => {
    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="theme" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work: WorkerType, index: number) => (
                    <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
                    <img src={work.w_img} alt="project" />
                </a>
                ))}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default MyWork