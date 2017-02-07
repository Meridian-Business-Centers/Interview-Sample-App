# Interview Sample App
_built by [a kind soul](//github.com/robbiemu)_

For this project I choose to take the vue option, since I recently completed a udemy class certification on vue2/vuex2. I've only completed one [other project](https://github.com/robbiemu/cmst385-accessibility) since that class with vue, and this was with a koa-2 back-end. So I went about searching for a nice checklist to follow with node and vue, and stumpled upon the [Vue 2 Starter Kit Server Side Rendering](https://github.com/afrianjunior/vue2-ssr-starter-kit) kit. It looked great, so I decided to give it a go.

Since using scaffolding like this can leave a lot of pieces to configure, I felt hesitant about what I was getting into. Especially in this case, as the documentation is very bare. For that reason I cloned the repo and starrted on my own, rather than working from the project here. Unfortunately, that means you have to look at file times to see that I worked on the project from about 8am to 11am, except for this readme and the pull request. I also had breakfast during this time - therefore, there perhaps is a lack of polish but I think the work is fitting for the detail in the project. Sorry about the lack of git pushes.

An example of an unconfigured option is the vue auth routing. This project didnt require routing controls (even the api is open, but to see an example with middelware using jwt see the koa project above), so it isn't much of an oversite. A second example is that the project comes with axios, something that I didn't know before completing it and looking back at the package.json, so although I could perhaps have used it, I did not.

On the back end, GET, PUSH, and DELETE are fleshed out. GET and PUSH are even manually (lightly) tested.

The name of the app is 'Friendly Item App'

## Project Modules

The typical suspects were involved in the creation of the Friendly Item App:

* node & express
* firebase (backend, my choice of nosql and login facilities)
* vue2
* vuex2
* bootstrap 3

In this case, because it was easy to reuse structure from elsewhere, I also used bootstrap-material-design.