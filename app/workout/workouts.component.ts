
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { WorkoutComponent } from './workout.component';
import { WorkoutService } from './workout.service';

@Component({
    moduleId: module.id,
    selector: 'app-workouts',
    templateUrl: 'workouts.component.html',
    directives: [WorkoutComponent],
    providers: [WorkoutService]
})
export class WorkoutsComponent implements OnInit {
    workouts: any[];

    constructor(private _workoutService: WorkoutService) { 
    }

    ngOnInit() { 
        this._workoutService.getWorkouts_RxObservable()
            .subscribe((workouts) => {
                this.workouts = workouts;
            },
            (err) => {
                console.log(err);
            });

        // this._workoutService.getWorkouts()
        //     .then((workouts) => {
        //         this.workouts = workouts;
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

}