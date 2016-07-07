
import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-workout',
    templateUrl: 'workout.component.html'
})
export class WorkoutComponent implements OnInit {
    @Input() workout: {id: number, description: string};
    myColor = "gray";

    constructor() { }

    ngOnInit() { }

}

