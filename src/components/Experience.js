const Experience = (props) => {
    
    return (
        <section id="experience">
            <h1>Experience</h1>
            <ul data-content="experience">
                {props.experience.map(function(item){
                return (<li>
                    <section>
                        <ul>
                            <li>
                                <div className="label">Company:</div>
                                <div className="content">{item.company}</div>
                            </li>
                            <li>
                                <div className="label">Title:</div>
                                <div className="content">{item.title}</div>
                            </li>
                            <li>
                                <div className="label">Tenure:</div>
                                <div className="content">{item.startDate} - {item.endDate}</div>
                            </li>
                            <li>
                                <div className="label">Responsibilities:</div>
                                <div className="content">{item.responsibilities}</div>
                            </li>
                            <li ng-if="item.achievements">
                                <div className="label">Achievements:</div>
                                <div className="content">{item.achievements}</div>
                            </li>
                        </ul>
                    </section>
                </li>);
                })}
            </ul>
        </section>
    );
}

export default Experience;