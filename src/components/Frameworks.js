const Frameworks = (props) => {
    return (
        <section id="frameworks">
            <h1>Frameworks / Libraries / Data Formats</h1>
            <ul data-content="frameworks" className="double">
                {props.frameworks.map(function(framework){
                    return <li>{framework}</li>
                })}
            </ul>
        </section>
    );
}

export default Frameworks;