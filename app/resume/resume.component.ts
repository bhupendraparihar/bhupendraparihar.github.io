import { Component } from '@angular/core';
import { ResumeService } from './resume.service';

@Component({
    selector:'resume',
    moduleId: module.id,
    templateUrl: 'resume.component.html'
})

export class Resume{
    resume: any = {}
    errorMessage: string;

    constructor(private _resumeService: ResumeService){}

    ngOnInit(): void{
        this._resumeService.getResume()
            .subscribe(
                resume => this.resume = resume,
                error => this.errorMessage = <any>error
            );
    }
    
}