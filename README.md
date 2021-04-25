# Angular Fundamentals

- [Angular Fundamentals](#angular-fundamentals)
  - [Introduction](#introduction)
    - [Typescript](#typescript)
    - [AngularJS vs ANGULAR](#angularjs-vs-angular)
    - [ANGULAR conceptual view](#angular-conceptual-view)
      - [Angular Modules](#angular-modules)
      - [Angular Template Expressions](#angular-template-expressions)
        - [Structural directives](#structural-directives)
        - [Attribute directives](#attribute-directives)
      - [Angular Services](#angular-services)
      - [Angular Routing](#angular-routing)
      - [Angular Forms and validations](#angular-forms-and-validations)

## Introduction

### Typescript

- Superset of javascript
- Typescript is transpiled to javascript
- syntactic sugar of javascript
- Features
  - static typing
    - ex:- *let name:string or number or date* this basically enforcing typings to js variables which aresnt usually available in js.
    - this provides compile time safety
  - intefaces
    - Intefaces for object representation
    - for optionaly properties you basically add **?**  
  - class properties
  - public private accessibility
  
### AngularJS vs ANGULAR

- view+ctrl but in Angular component are the basic building block
- angularjs directive is   component in Angular

### ANGULAR conceptual view

- Root component **APP** is loaded first -> which encapsulate component --> which intern loads component inside component --> basically leading to a tree structure
- when you got next route the **APP** remains but at the router provider the component to be displayed for the router is decalred.
- Now too many routes the no of components loaded into the UI increase causing memory overload to avoid this we use **Angular Modules**
- **Angular Modules** basically containers which group a set of componets,routes,codeds etc encapsulating into modules that can be loaded independently of each other.
- when you define services,pipes,directives and pipes you register then in a module and incase you want to use them in another module you need to register them there as well expect services as there are injected at root provider level
- when we run **ng serve** the angular.json specifies the main entry point --> main.ts --> which specifies bootstrap module --> AppModule --> which bootstraps the component --> AppComponent

#### Angular Modules

- As said earlier module encapsulates the components,pipes and directives of angular as one seprate module
- A module is represented by annotation @NgModule({declarations:[],imports:[],providers:[],bootstrap:[]})
- the components/pipes/directives needs to be declared in **declarations**, services are added into **providers[]**

>Note: - Angular view encapsulation - the css selectors of a component are restricted to component specify
> if you want to override view encapsulation you can use **::ng-deep** over css properties so that the styles are propogated into child components as well
> Template variables can be used to access child component proberties by parent.. 

#### Angular Template Expressions

- Interpolation - is used when you want to display element - ex - {{user.name}}
- Property binding - ` <img [src]="user.image"/> `
  > Expression restriction - assignment operators, new keyword, expression channning with ;, global namespace
  > Expression Recommendation - No side effects like no altering state of application, should be fast, simple, idempotent(each time same result must be returned)

- Event binding - use () brackets - ex:- ` <button (click)="doSomething()"></button> `

##### Structural directives

- They basiscally alter the structure of the html . They add new elements or remove from the HTML and they are represented by * infront of it.
  ex: - *ngFor , *ngIf, *ngSwitch
- safe navigator operation - ? is used in case if we miss some properties - ex - {{events?.name}}
  
##### Attribute directives

- [hidden],[ngClass],[ngStyle]

#### Angular Services

- Why services?
  - Sharing data between components
  - common fuctionality across modules.
  - reusability.
  - Singleton

#### Angular Routing

- Why Routing
  - 
- Define Routes for Pages
  - `<router-outlet><router-outlet>`
  - define routes array [{path:,component,canactivate...}]
  - configure Router.toRoot(routes)
  - specifying the variable in path in routes ex:- {path:'/events/:id'} - here id is variable
  - accesing variable inside component , import **activatedRoute** into component and use **route.snapshot.param['id']**
  - ways to routing
    - Link to Routes
      - [routerLink]="[events.id]" this makes the div a routable links
    - Navigate From Code
      - routing via code - here we use **Router** service is injected into component and the **router.navigate(['path'])** method is used . 
- Route Guards
  - canActivate - checks you would validae before entering into page
  - canDeactivate - checks you would validate before leaving the page
  - Resolve
    - This is mainly used to perform/resolve some actions before loading component
    - resolve:{dataName:ResolverService}
    - the reolver service implements resolve and returns observable
    - the data now resolved would be part of **ActivatedRoute** and is fecthed by injecting into component and retrived by route.snapshot.data['dataName']
- Route based link styling
  - routerLinkActive - is used to add a class to routerlink thats active
  - user [routerLinkActiveOptions]="{exact:true}" in case if parent route class i always activated
- Lazy loading

#### Angular Forms and validations

- Usind Data Models for Type safety
- Template-Based Forms
  - They are used for creating simple forms where it not model driven.
  - Its kind of difficult to have unit test case designed for the template based forms to test validations
  - The logics for validation needs to be custom built
  - You need to import **FormsModule** into your appmodule
- Model-driven forms or Reactive forms
  - Here you are defining fields, model and validation in the component and binding it to html template
  - The forms and validations are built more dynamically in this case.
  - Makes all your validations unit testable
  - You need to import **ReativeFormsModule** into your appModule
- Two-way data bindings
- Custom Validators