import { Component, Input } from '@angular/core';

@Component({
    selector: 'resume-experience',
    moduleId: module.id,
    templateUrl: 'resume-experience.component.html'
})

export class ResumeExperience{
    @Input() experience: any[];
}