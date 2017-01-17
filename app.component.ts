import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './author.component';
import {FormSubmission} from './form.component';

@Component({
    selector: 'my-app',
    template:`
    <courses></courses><authors></authors><forms></forms>
    `,
    directives: [CoursesComponent, AuthorsComponent, FormSubmission]
})

export class AppComponent {
    
}