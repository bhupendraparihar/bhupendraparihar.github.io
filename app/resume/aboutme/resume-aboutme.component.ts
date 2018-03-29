import { Component, Input } from '@angular/core';

@Component({
    selector: 'resume-aboutme',
    moduleId: module.id,
    templateUrl: 'resume-aboutme.component.html'
})

export class ResumeAboutMe{
    @Input() aboutme: string;
}