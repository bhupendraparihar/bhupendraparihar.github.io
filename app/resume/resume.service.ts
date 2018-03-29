import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ResumeService{
    private _resumeUrl = 'api/resume.json';

    constructor(private _http: Http) {}

    getResume(): Observable<any> {
        return this._http.get(this._resumeUrl)
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}