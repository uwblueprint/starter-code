# UWBlueprint Starter-Code

The starter code for UWBlueprint projects! Made with love by the project-infra team!

## Introduction

We are UW Blueprint, a student-run organization at the University of Waterloo. We
build technology for non-profit organizations free of charge! We've found that it
takes several weeks for each team to setup the boilerplate code for their projects
and that projects independently converge to very similar tech stacks. To solve
this issue, we've created the starter-code project! The starter-code project allows
teams to setup, develop, and deploy projects faster which allows UW Blueprint to
better serve our non-profit partners.

## The Tech Stack

These technologies are proven, popular, easy to learn, and provide fast development speeds.

- React + Redux
- Python + Flask
- PostgreSQL
- Firebase

## Example Project

The starter-code project shows how to build on top of the boilerplate code using
the following scenario:

### Recycling Race!!!

A local elementary school is running a recycling race between all of the classes!
Each class is fiercely competing to recycle the most items! They’ve asked UW
Blueprint to build an app that can help keep track of each class’ recycling progress.

## Setup

On the backend we use Python3, Flask, PostgreSQL or Firebase. The server is dockerized so all you need to do is run the instructions below. Make sure you have Docker desktop installed.

## Commands

To first setup the backend run the following commands:

```
$ docker-compose up --build
```

On subsequent runs you can omit the --build tag.

```
$ docker-compose up
```

### Running After Code Changes

If you have new pip dependencies or you have changed the Dockerfile you need to run:

```
$ docker-compose build
$ docker-compose up -d --force-recreate
```

If you only made code changes run:

```
$ docker-compose up -d --force-recreate
```
