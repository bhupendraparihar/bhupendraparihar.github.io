import { Component, Input } from '@angular/core';

@Component({
    selector: 'resume-education',
    moduleId: module.id,
    templateUrl: 'resume-education.component.html'
})

export class ResumeEducation{
    @Input() education: any[];
}