const AboutMe = (props) => {
    return (
        <section id="aboutme">
            <h1>Executive Summary</h1>
            <p data-content="aboutme">{props.aboutme}</p>
        </section>
    );
}

export default AboutMe;