import { Component } from '@angular/core';
import { WorkoutsComponent } from './workout/workouts.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [WorkoutsComponent]
})
export class AppComponent {

    title = "Workout App";
    name = "Scott";
    scottsColor = 'green';

    changeSuitColor() {
        this.scottsColor =  this.scottsColor === 'green' ? 'red' : 'green';
    }
 }
