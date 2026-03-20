<!-- Git & GitHub are different -->

<!-- till episode 1, we can't push that code to production
    this is bcz it isn't optimized code, we need to minify it(no consoles, no comments, etc), bundle the code files, chunking , image optimization
-->


<!-- ***Episode 2 - Part 1***  -->

<!-- we'll learn how to create own react app, prod ready app 
*NPM* Full Form isn't *Node Package Manager* but just manages packages
use npm by adding npm init, don't do npm init -y,it will skip some things this way 
ans the ques, use jest for testing

package.json is a configuration for npm

Diff btwn package & dependency
our project is depend on packages, those packages are the dependencies, npm will manage that, thier versions, npm will take care of it , where? in package.json

2 types of dependencies:
1. dev dep(-D): generally req in dev phase
2. normal dep: used in prod also

now install packages
*our app is just a skeleton right now
1. bundler(webpack, parcel, vite): packages ur app , so it can be shipped to prod
*parcel/ any bundler will give our app muscles/strength

*caret & tilde in package.json
if the symbol is there & new version comes up , then automatically package gets updated
caret(^): minor version (always recommended-safe)
tilde(~): major version
if no sign , no update

diff btwn package.json & package-lock.json
package.json keeps track of approx version
package-lock.json keeps track/record of exact version of the dependency i.e. installed
in package-lock.json, inside package, there's "integrity" which keeps hash, sometimes when it works on local but fails on prod, to avoid that situation, hash is kept to verify, whatever is on my machine is having same version ass in prod 

**node modules folder is also created
they contain all the code that we fetched from npm
it fetches all the code of all the dependencies into our system & we can now use it 
ervything is fetched instead of only parcel cz it can have it's own dep and they further can have...(called transitive dependencies)

**every dependency in node modules has its own package.json & own dev, normal dependencies
we dont want to push then as it's too bulky, so not in git , not prod
so put name of folder/file in .gitignore

package & package-lock, both should get pushed as they maintain which dep we need
if we have package & package-lock these both, then we can recreate node modules via them(if got deleted or whatever)
just do npm install

so whatever we can regenerate, don't put it on git
we should push only what is essential
-->




<!-- ***Episode 2 - Part 2***  -->

<!-- *Igniting our App
do npx parcel index.html(source file)
our app is now hosted on to a server/ localhost:1234 port
earlier url was ugly like: file:///C:/Users/rjan0/OneDrive/Desktop/namaste-react/index.html
parcel has done this for us
*npx* : executing a package
*npm* : installing a package

main in package.json is not required when using parcel

what happens is:
parcel goes to src file -> it build a development build for app -> then it host dev build to port

So we saw CDN links is a way to inject react into our app (but not preferred way bcz: fetching from CDN is costly operation)
other way is via npm
as react is a JS piece which is hosted over npm as well
so we will install react as package (npm install react) -> normal dependency
*npm i -> short form(npm install)
then do (npm i react-dom) 
now, remove CDN links

we'll do import react & react-dom in App.js, which comes from node modules


we have a *dist* folder
when parcel generates dev built , it puts it into dist folder
then uses cache & dist to update page , HMR
npx parcel index.html -> dev build
npx parcel build index.html -> prod build ---- takes more time
then will give 3 minified files, of each html, css, js i.e. prod ready code
cache & dist can be regenerated , put them in .gitignore

browsersList: tll what all browsers our app can support , add them in package.json
// "last 10 Chrome version",
// "last 2 Firefox version"
"last 2 version"


-->