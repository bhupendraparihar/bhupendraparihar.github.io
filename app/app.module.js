"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var resume_component_1 = require("./resume/resume.component");
var resume_header_component_1 = require("./resume/header/resume-header.component");
var resume_objective_component_1 = require("./resume/objective/resume-objective.component");
var resume_aboutme_component_1 = require("./resume/aboutme/resume-aboutme.component");
var resume_skills_component_1 = require("./resume/skills/resume-skills.component");
var resume_frameworks_component_1 = require("./resume/frameworks/resume-frameworks.component");
var resume_projects_component_1 = require("./resume/projects/resume-projects.component");
var resume_personal_projects_component_1 = require("./resume/personal-projects/resume-personal-projects.component");
var resume_experience_component_1 = require("./resume/experience/resume-experience.component");
var resume_education_component_1 = require("./resume/education/resume-education.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            resume_component_1.Resume,
            resume_header_component_1.ResumeHeader,
            resume_objective_component_1.ResumeObjective,
            resume_aboutme_component_1.ResumeAboutMe,
            resume_skills_component_1.ResumeSkills,
            resume_frameworks_component_1.ResumeFrameworks,
            resume_projects_component_1.ResumeProjects,
            resume_personal_projects_component_1.ResumePersonalProjects,
            resume_experience_component_1.ResumeExperience,
            resume_education_component_1.ResumeEducation
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map