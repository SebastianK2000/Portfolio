import '../../styles/Contact.css'
import theme_pattern from '../../assets/theme.svg'
import mail_icon from '../../assets/mail.svg'
import location_icon from '../../assets/location.svg'
import call_icon from '../../assets/call.svg'

const Contact = () => {

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "3bce80c1-0afd-490b-904e-96b72cf662f9");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="theme" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">

                        <div className="contact-detail">
                            <img src={mail_icon} alt="email icon" /> <p>sebastian.kosciolek2000@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src={call_icon} alt="phone icon" /> <p>533794499</p>
                        </div>

                        <div className="contact-detail">
                            <img src={location_icon} alt="location icon" /> <p>Cracow, PL</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;