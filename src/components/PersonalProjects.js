const PersonalProjects = (props) => {

    return (
        <section id="personalProjects">
            <h1>Personal Projects</h1>
            <ul data-content="projects">
                {props.personalProjects.map(function(project){
                return (<li>
                    <section>
                        <ul>
                            <li>
                                <div className="label">Name:</div>
                                <div className="content">{project.title}</div>
                            </li>
                            <li ng-show="project.link">
                                <div className="label">URL:</div>
                                <div className="content"><a href="{project.link}">{project.link}</a></div>
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

export default PersonalProjects;