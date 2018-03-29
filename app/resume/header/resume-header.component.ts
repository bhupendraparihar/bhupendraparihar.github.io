import { Component, Input } from '@angular/core';

@Component({
    selector:'resume-header',
    moduleId:module.id,
    templateUrl: 'resume-header.component.html'
})

export class ResumeHeader{
    @Input() resume: any;

}