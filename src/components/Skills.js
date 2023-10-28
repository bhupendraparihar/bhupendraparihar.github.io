const Skills = (props) => {
  return (
    <section id="skills">
      <h1>Skills / Languages</h1>
      <div data-content="skills" className="skills">
        {props.skills.map(function (skill) {
          return <div className="skill-item">{skill}</div>;
        })}
      </div>
    </section>
  );
};

export default Skills;
