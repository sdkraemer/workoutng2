import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html' 
})
export class AppComponent {
    title = "Workout App";
    name = "Scott";
    scottsColor = 'blue';

    changeSuitColor() {
        this.scottsColor =  this.scottsColor === 'blue' ? 'red' : 'blue';
    }
 }
