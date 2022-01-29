# Solution explainer

#### Any particular callouts/notable design decisions?

The application was developed using React/Typescript with React Container View Design Pattern<br/>
The structure of the application is broken down into;
- Components: contains a global component.<br/>
- Fixtures: contains sample/test data.<br/>
- Hooks: contains custom hooks.<br/>
- Screens: contains the view which has container for the logic and view for the presentational.<br/>
- Utils - contains helper function.<br/>

#### If this project continued, anything else you would like to add?

I believe this project will serve the main purpose.

#### Anything else of note you'd like the interviewers to know about?

The home url contains params (org_name) this was done to make the homepage route dynamic.<br/>
Also, the user can use the url params to validate they are viewing the correct organization, <br/>
if a user modify the route params and the org_name is not valid, it redirect to the default organization (Qatalog).<br/>
[Project demo video](https://www.loom.com/share/4de7bf5e8e9441429a20681e5a40b47b)


