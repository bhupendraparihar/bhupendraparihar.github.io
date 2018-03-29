<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import resumeData from './resume.js';

class ResumeHeader extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div style={{display: 'flex'}} >
                <div style={{position: 'fixed', width: '250px'}}>
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
                    <Objective objective={this.props.resume.objective} />
                    
                    <AboutMe aboutme={this.props.resume.aboutme} />
                </div>
                <div style={{marginLeft:'280px'}}>
                    <Skills skills={this.props.resume.skills} />

                    <Frameworks frameworks={this.props.resume.frameworks} />

                    <Projects projects={this.props.resume.projects} />
                    
                    <PersonalProjects personalProjects={this.props.resume.personalProjects} />

                    <Experience experience={this.props.resume.experience} />
                    
                    <Education education={this.props.resume.education} />
                </div>
            </div>
        );
    }
}

const Objective = (props) => {
    return (
        <section id="objective">
            <h1>Objective</h1>
            <p style={{fontSize: '13px'}} data-content="objective">{props.objective}</p>
        </section>
    );
}

const AboutMe = (props) => {
    return (
        <section id="aboutme">
            <h1>Executive Summary</h1>
            <p style={{fontSize: '13px'}} data-content="aboutme">{props.aboutme}</p>
        </section>
    );
}

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
        this.setState({
            resume: resumeData
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