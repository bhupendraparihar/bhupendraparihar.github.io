import { Component, Input } from '@angular/core';

@Component({
    selector: 'resume-projects',
    moduleId: module.id,
    templateUrl: 'resume-projects.component.html'
})

export class ResumeProjects{
    @Input() projects: any[];
}