const Projects = (props) => {

    return (
        <section id="projects">
            <h1>Projects</h1>
            <ul data-content="projects">
                {props.projects.map(function(project){
                return (<li>
                    <section>
                        <ul>
                            <li>
                                <div className="label">Name:</div>
                                <div className="content">{project.name}</div>
                            </li>
                            {project.url?(<li>
                                <div className="label">URL:</div>
                                <div className="content"><a href="{project.url}">{project.url}</a></div>
                            </li>):null}
                            <li>
                                <div className="label">Technologies:</div>
                                <div className="content">{project.technologies}</div>
                            </li>
                            <li>
                                <div className="label">Description:</div>
                                <div className="content">{project.description}</div>
                            </li>
                        </ul>
                    </section>
                </li>);
                })}
            </ul>
        </section>
    );
}

export default Projects;