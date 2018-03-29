import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { Resume } from './resume/resume.component';
import { ResumeHeader } from './resume/header/resume-header.component';
import { ResumeObjective } from './resume/objective/resume-objective.component'; 
import { ResumeAboutMe } from './resume/aboutme/resume-aboutme.component';
import { ResumeSkills } from './resume/skills/resume-skills.component';
import { ResumeFrameworks } from './resume/frameworks/resume-frameworks.component';
import { ResumeProjects } from './resume/projects/resume-projects.component';
import { ResumePersonalProjects } from './resume/personal-projects/resume-personal-projects.component';
import { ResumeExperience } from './resume/experience/resume-experience.component';
import { ResumeEducation } from './resume/education/resume-education.component';


@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    Resume,
    ResumeHeader,
    ResumeObjective,
    ResumeAboutMe,
    ResumeSkills,
    ResumeFrameworks,
    ResumeProjects,
    ResumePersonalProjects,
    ResumeExperience,
    ResumeEducation
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
