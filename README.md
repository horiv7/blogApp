# BlogApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

 
Live preview: [BlogApp/](https://blogapp-6a9d6.web.app/)
<br>
<br>
I wanted to make an application with CRUD operations using Angular and Ngrx.
Additionally, I wanted Auth implemented. I searched Public Apis. I found a [Realworld.io](https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints/) project.

I decided to use the Realworld project as Rest Api to achieve my goal.
My task was to make something like a classic Blog.
Therefore, it has a Home page with global feed, My posts page, New post, Delete post, and Auth pages

I used Angular, Bootstrap 5, and NgRx for the project.
Auth is made with simple Login / Sign up pages.
Authentication was performed using JWT tokens.

I created a form for submitting and editing articles.
I also build a page to list posts.

This is a prototype for CRUD operations.
It's not a big app. It is possible to do a lot with this Rest Api.
For now, I keep it simple, but I'll add features as time goes on.

<br>
<br>
<br>

![App](https://github.com/horiv7/portfolio/blob/main/src/assets/img/blogApp.png)
<br>

<br>
<br>

Live preview: [BlogApp](https://blogapp-6a9d6.web.app/)

Backend docs: https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints/
 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
