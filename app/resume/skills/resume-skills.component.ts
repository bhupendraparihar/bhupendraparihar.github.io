import { Component, Input } from '@angular/core';

@Component({
    selector: 'resume-skills',
    moduleId: module.id,
    templateUrl: 'resume-skills.component.html'
})

export class ResumeSkills{
    @Input() skills: string[];
}