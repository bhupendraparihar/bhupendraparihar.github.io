import { Component, Input } from '@angular/core';

@Component({
    selector: 'resume-personal-projects',
    moduleId: module.id,
    templateUrl: 'resume-personal-projects.component.html'
})

export class ResumePersonalProjects{
    @Input() personalProjects: any[];
}