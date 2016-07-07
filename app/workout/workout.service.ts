
import { Injectable } from '@angular/core';

@Injectable()
export class WorkoutService {
    constructor() { }

    getWorkouts() {
        return [
            {id: 1, description: "First workout"},
            {id: 2, description: "Went for a run, 2.12 miles."},
            {id: 3, description: "Went for a run, 2.5 miles"},
            {id: 4, description: "P90X3 Total Synergistics"},
            {id: 5, description: "Hiked Tumamoc"},
        ];
    }

}