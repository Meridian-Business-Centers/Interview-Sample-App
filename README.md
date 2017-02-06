# Interview-Sample-App
This is the front-end portion of a microservice application utilizing two separate Rails 5 RESTful APIs in JSON format that I plan to push for the backend along with this Angular 2 front end. I am using Bootstrap 4 using Angular’s version, meaning Ng-Bootstrap, it gives us access to Bootstrap 4 components but this is an Angular way of being able to integrate this in. If you go to proposal/app.module.ts you will see under @NgModule, NgbModule.forRoot() and this demonstrates the function that lets NgBootstrap know that this is being placed on the root of my application.

Also if you look at the file systemjs.config.js under map: you will see ‘@ng-bootstrap/ng-bootstrap’: ‘node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js’, I have this because map needs to tell the System loader where to look for ng-bootstrap:

Last but not least in index.html I pull in the CDN file

Observables:

Observables come from the Rxjs library that follow the Observer pattern which allows you to setup streams of data in your application. Observables allow multiple things to happen at the same time. With Observables we can call the API every 5 seconds without having to do a page refresh and this just keeps on happening. This is a high level explanation of Observables. Observer patterns have an entire lifecycle all to itself. I have implemented observables in this application.

Next, you see a constructor that creates our connection with Http.

I have also utilized an Injectable to inject a dependency, in this case being Http.

When it comes to Vuejs, I have a basic understanding on how to construct components and nested components and see how Vue reactively keeps the DOM up to date when data is changed.
