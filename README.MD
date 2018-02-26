# Nodejs Express API with TS working with serverless

## First things to do
  * get Linux or MINGW !
  * Get node, best get nvm then node
  * ```npm install```
  * Copy .env.example -> .env
  * Use tslint to keep codebase consistent
  * Fill README.MD if you encounter any trouble!
  * Last resort contact the dev team for help

## Usefull command
* clean: Remove package-lock.json & node_modules folder 
* clean-all: Execute clean & clean-build,
* clean-build: Remove .build & build folder,
* deploy: deploy on the cloud ! Remeber to set your access key & secret with
  ```bash
    $ serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY
  ```
* dev: Compile Tyescript file & Run offline instance of serveless to debug on local
* test: For now nothing, but we will run jest test in the future
* tsc: Run typescript compiler
* tslint: Run ts linter
* Also husky is setted and will run somme cmd on merge, rebase and pre-commit check package.json for info

## TODO
 * [X] Switch to yarn
 * [X] ReShape archi
 * [X] Fix dependency version, no '^'!
 * [X] Set prettier.io config
 * [ ] Save to DynamoDb
 * [ ] Set Test
 * [ ] Make things work with APP!

## /!\ WARNING /!\
> Before adding any libs, you must check that the type exist.

> Else contribute to https://github.com/DefinitelyTyped/DefinitelyTyped project.

> Or forgot using this lib.

## Doc followed to bootstrap:
https://blog.shovonhasan.com/deploying-a-typescript-node-aws-lambda-function-with-serverless/
https://serverless.com/blog/serverless-express-rest-api/