
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import 'rxjs/add/operators/map';
import { Observable } from 'rxjs/Rx';

const URL_WORKOUT = 'app/workouts.json';
@Injectable()
export class WorkoutService {
    constructor(private _http: Http) { }

    getWorkouts() {
        return this._http.get(URL_WORKOUT)
            .map((response: Response) => response.json())
            .toPromise()
            .catch((err: any) => {
                console.log(err);
                return Promise.reject(err);
            });
    }

    getWorkouts_RxObservable() {
        return this._http.get(URL_WORKOUT)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    _handleError(err: any) {
        console.log(err);
        return Observable.throw(err);
    }

}