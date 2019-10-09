## Noda

Noda is api driven node js package for api first development with configurable dashboard for your models. You, as a developer, provide database models (like posts, comments, stores, products or whatever else your application uses), and Noda generates UI which allows you (or other trusted users) to manage content.

Inspired by: [django admin](https://docs.djangoproject.com/)

Dashboard will provide all features right of the box, if additional features are need you can create using react based components. thanks to software brothers for publishing awesome admin panel as open source. this package is heavliy build on [admin bro.](https://github.com/SoftwareBrothers/admin-bro/)

## Getting started

Manage your project with manage.js file

**Create a Admin user**

    npm run manage createAdmin

**Create a App**

    npm run manage createapp

**Start server**

    node start

check out http://localhost:3000/admin

**config.js**
this file holds all configurations for project.

## Features

- CRUD any data in any resource
- Custom actions
- Form validation based on schema in your resources
- Full featured dashboard with widgets
- Custom resource decorators
