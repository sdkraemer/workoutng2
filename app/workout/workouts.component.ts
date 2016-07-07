
import { Component, OnInit } from '@angular/core';
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
        this.workouts = this._workoutService.getWorkouts();
    }

}