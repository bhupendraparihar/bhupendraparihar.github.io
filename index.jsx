import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class ResumeHeader extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div>
                <section>
                    <h1 data-content="name" className="name">{this.props.resume.name}</h1>
                    <h2 data-content="title">{this.props.resume.title}</h2>
                    <section id="contact">
                        <div className="social"><i className="fa fa-phone fa-fw" aria-hidden="true"></i>&nbsp;<a href="tel:{this.props.resume.phoneNumber}">{this.props.resume.phoneNumber}</a></div>
                        <div className="social">
                            <i className="fa fa-envelope fa-fw" aria-hidden="true"></i>&nbsp;<a href="mailto:{this.props.resume.email}">{this.props.resume.email}</a></div>
                        <div className="social">
                            <i className="fa fa-link fa-fw" aria-hidden="true"></i>&nbsp;<a href="{this.props.resume.website}">{this.props.resume.website}</a>
                        </div>
                        <div className="social">
                            <i className="fa fa-github fa-fw" aria-hidden="true"></i>&nbsp;<a href="{this.props.resume.github}">{this.props.resume.github}</a>
                        </div>
                        <div className="social">
                            <i className="fa fa-linkedin fa-fw" aria-hidden="true"></i>&nbsp;<a href="{this.props.resume.linkedin}">{this.props.resume.linkedin}</a>
                        </div>
                    </section>
                </section>

                <section id="objective">
                    <h1>Objective</h1>
                    <p data-content="objective">{this.props.resume.objective}</p>
                </section>
                
                <section id="aboutme">
                    <h1>Executive Summary</h1>
                    <p data-content="aboutme">{this.props.resume.aboutme}</p>
                </section>

                <section id="skills">
                    <h1>Skills / Languages</h1>
                    <ul data-content="skills" className="double">
                        {this.props.resume.skills.map(function(skill){
                            return <li>{skill}</li>
                        })}
                    </ul>
                </section>

                <section id="frameworks">
                    <h1>Frameworks / Libraries / Data Formats</h1>
                    <ul data-content="frameworks" className="double">
                        {this.props.resume.frameworks.map(function(framework){
                            return <li>{framework}</li>
                        })}
                    </ul>
                </section>

                <section id="projects">
                    <h1>Projects</h1>
                    <ul data-content="projects">
                        {this.props.resume.projects.map(function(project){
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

                <section id="personalProjects">
                    <h1>Personal Projects</h1>
                    <ul data-content="projects">
                        {this.props.resume.personalProjects.map(function(project){
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

                <section id="experience">
                    <h1>Experience</h1>
                    <ul data-content="experience">
                        {this.props.resume.experience.map(function(item){
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

                <section id="education">
                    <h1>Education</h1>
                    <ul data-content="education">
                        {this.props.resume.education.map(function(item){
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
            </div>
        );
    }
}

class Application extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            resume : {
                skills : [],
                frameworks: [],
                projects: [],
                personalProjects: [],
                training: [],
                education: [],
                experience: []
            }
        };
    }

    

    componentDidMount(){
        axios.get('resume.json')
        .then(res => {
            const resume = res.data;
            console.log(resume);
            this.setState({
                resume: resume
            });
        });
    }

    render() {
        return (
            <section>
                <ResumeHeader resume={this.state.resume}/>
            </section>
        );
    }
}
    
ReactDOM.render(
    <Application />, 
    document.getElementById('content') 
);