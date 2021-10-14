const Certifications = (props) => {

    return(
        <section id="education">
            <h1>Certifications</h1>
            <ul data-content="certifications">
                {props.certifications.map(function(item){
                return (<li>
                    <section>
                        <ul>
                            <li>
                                <div className="label">Title:</div>
                                <div className="content">{item.name}</div>
                            </li>
                            <li>
                                <div className="label">Organization:</div>
                                <div className="content">{item.issuingOrganization}</div>
                            </li>
                            {/* <li>
                                <div className="label">Dates Attended:</div>
                                <div className="content">{item.startDate} - {item.endDate}</div>
                            </li>
                            <li>
                                <div className="label">Achievements:</div>
                                <div className="content">{item.achievements}</div>
                            </li> */}
                        </ul>
                    </section>
                </li>)
                })}
            </ul>
        </section>
    );
}

export default Certifications;