import '../../styles/Profile.css'
import profile_img from '../../assets/profile.png'
import cv from '../../assets/cv.pdf'

const Profile = () => {
    return (
        <div id='home' className="profile">
            <img src={profile_img} alt="Profile photo" />
            <h1><span>My name is Sebastian, </span>I'm frontend developer based in Poland (Cracow).</h1>
            <p>I have been learning frontend programming since December 2021.</p>
            <div className="profile-action">
                <div className="profile-connect">Connect with me</div>
                <div className="profile-resume"><a className="text-resume" href={cv}>My resume</a></div>
            </div>
        </div>
    )
}

export default Profile;