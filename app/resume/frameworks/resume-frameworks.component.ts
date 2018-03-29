import { Component, Input } from '@angular/core';

@Component({
    selector: 'resume-frameworks',
    moduleId: module.id,
    templateUrl: 'resume-frameworks.component.html'
})

export class ResumeFrameworks{
    @Input() frameworks: string[];
}