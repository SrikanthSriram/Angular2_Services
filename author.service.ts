import {Component} from 'angular2/core'

export class AuthorService {
    getAuthors (): string[]{
       return ["Kim Parik", "Shyam Sharma", "Deepak Sharma"];
    }
}
