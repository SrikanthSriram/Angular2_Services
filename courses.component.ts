import {Component} from 'angular2/core';
import {CourseService} from './course.service';

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
    {{ title }}<br/>
    <input type="button" (click)="showCourses()" value="Courses"/>
    <ul *ngIf="showCourses()">
    <li *ngFor="#course of courses">
    {{ course }}</li>
    </ul>
    `,
    providers: [CourseService];
})

export class CoursesComponent {
    title = "NPU List Course";
    courses;
    showCourses = true;
        showCourses() {
        this.showCourses = !this.showCourses; 
    }

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}
