const Education = (props) => {

    return(
        <section id="education">
            <h1>Education</h1>
            <ul data-content="education">
                {props.education.map(function(item){
                return (<li>
                    <section>
                        <ul>
                            <li>
                                <div className="label">School:</div>
                                <div className="content">{item.school}</div>
                            </li>
                            <li>
                                <div className="label">Program:</div>
                                <div className="content">{item.program}</div>
                            </li>
                            <li>
                                <div className="label">Dates Attended:</div>
                                <div className="content">{item.startDate} - {item.endDate}</div>
                            </li>
                            <li>
                                <div className="label">Achievements:</div>
                                <div className="content">{item.achievements}</div>
                            </li>
                        </ul>
                    </section>
                </li>)
                })}
            </ul>
        </section>
    );
}

export default Education;