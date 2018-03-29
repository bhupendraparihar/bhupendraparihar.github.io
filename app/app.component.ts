import  { Component } from '@angular/core';
import  { ResumeService } from './resume/resume.service';

@Component({
    selector: 'resume-app',
    template: `
        <resume></resume>
    `,
    providers: [ ResumeService ]
})

export class AppComponent{
    pageTitle: string = "Resume Project";
}
