# AngularUniversalBasicApp
 Steps to convert an application to angular universal.

 1) ng add @nguniversal/express-engine

 // if adding universal is getting failed then follow these commands

 ng update @angular/cli

git add . && git commit -m 'nguniversal fix 1 - update @angular/cli'

ng update @angular/core

git add . && git commit -m 'nguniversal fix 2 - update @angular/core'

ng add @nguniversal/express-engine

2) Once nguniversal added, you can run folling commands 

npm run dev:ssr - this will run your SSR app inside dev server

3)Building Angular Universal for production

npm run build:ssr


