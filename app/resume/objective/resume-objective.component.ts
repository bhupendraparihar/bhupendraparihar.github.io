import { Component, Input } from '@angular/core';
@Component({
    selector:'resume-objective',
    moduleId: module.id,
    templateUrl: 'resume-objective.component.html'
})

export class ResumeObjective {
    @Input() objective: string;
}