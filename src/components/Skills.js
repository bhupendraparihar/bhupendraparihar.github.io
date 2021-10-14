const Skills = (props) => {
    return (
        <section id="skills">
            <h1>Skills / Languages</h1>
            <ul data-content="skills" className="double">
                {props.skills.map(function(skill){
                    return <li>{skill}</li>
                })}
            </ul>
        </section>
    );
}

export default Skills;