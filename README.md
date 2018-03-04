# The Test

## Introduction

This repo is a small Angular 5 web app that connects to a node service via web sockets. However, I’ve not included the node service in this repo.

## The Task

The task is to write one or more small node.js service that, alone or together, provide messages to the web app.  

## Requirements

1.	The web app is expecting messages from the node service (real-time) so it can display them in a dashboard.
2.	The service should be written to listen on a local IP and port 8181.
3.	The messages are expected to just be samples, not real data.
4.	The format of the messages can be gleaned from the code in the web app. This will require some investigation on your part and will help me ascertain your knowledge of a modern Angular app.
5.	There should not be any changes needed in the web app, but if you do make some it’s no problem. You can cleanup any UI pieces that you don’t like, etc.

## Resources

1.	You can use whatever tools you have in order to learn the technologies during or prior to completing this.

## Deliverables

1.	One or more node.js services in the /services folder that provide messages in a particular format for other clients to consume.
2.	A functioning client-server app that simply exhibits the flow of messages via the existing dashboard.
3. Submit a pull-request to GitHub with your changes.


# Some Angular CLI info:

## Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
