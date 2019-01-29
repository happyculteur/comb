# [HappyCulteur](https://www.happyculteur.co/) &middot; COMB &middot; ![Twitter Follow](https://img.shields.io/twitter/follow/happyculteur_.svg?style=social&label=Follow)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/happyculteur/comb/blob/master/LICENSE.md)
[![Coverage Status](https://coveralls.io/repos/github/happyculteur/comb/badge.svg?branch=master)](https://coveralls.io/github/happyculteur/comb?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5abf1e5b493140b79797ccc307fe9b3c)](https://www.codacy.com/app/happyculteur/comb?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=happyculteur/comb&amp;utm_campaign=Badge_Grade)
<a href="https://david-dm.org/happyculteur/comb"><img src="https://david-dm.org/happyculteur/comb.svg" alt="Dependency Status"></a>
<a href="https://david-dm.org/happyculteur/comb/?type=dev"><img src="https://david-dm.org/happyculteur/comb/dev-status.svg" alt="devDependency Status"></a>
[![Known Vulnerabilities](https://snyk.io/test/github/happyculteur/comb/badge.svg)](https://snyk.io/test/github/happyculteur/comb)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![BCH compliance](https://bettercodehub.com/edge/badge/happyculteur/comb?branch=master)](https://bettercodehub.com/)

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