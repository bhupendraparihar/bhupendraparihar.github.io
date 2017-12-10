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
                    <ul data-content="skills" class="double">
                        {this.props.resume.skills.map(function(skill){
                            return <li>{skill}</li>
                        })}
                    </ul>
                </section>

                <section id="frameworks">
                    <h1>Frameworks / Libraries / Data Formats</h1>
                    <ul data-content="frameworks" class="double">
                        {this.props.resume.frameworks.map(function(framework){
                            return <li>{framework}</li>
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
                frameworks: []
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