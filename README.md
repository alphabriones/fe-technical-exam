# Frontend Technical Exam for MYBOS

## Requirements
- PHP CLI (v8.x)
- Composer
- NPM

---

## Initialise and start the API Server
- `$ cd api`
- `$ composer install`
- `$ php artisan serve --port=8000`

With the above, take note of your available routes
- http://localhost:8000/api/cases
- http://localhost:8000/api/cases/{id}

The Cases Endpoint supports `page` and `per_page` query string parameters

---

## Initialise and start the APP Server
- `$ cd app`
- `$ npm install`
- `$ npm start -- --port 9000`

With the above, take note of your availble route
- http://localhost:9000/

---

# Exam Instructions
Fork this repository to a personal public repository on GitHub.

This personal repository will be provided to MYBOS at the end of the Exam.

## Task

The objective of this task is to create 2 components that are data bound to the provided API Endpoints

[MYBOS - Figma Design](https://www.figma.com/file/aHDakjzdHMW4NJEfUSjXAo/Task?type=design&node-id=0%3A1&mode=design&t=TWNGPKJ0axJluWzy-1)

---

The first component is to create a paginated Grid List. This component should be bound to the following API Endpoint

http://localhost:8000/api/cases

Please note, you can set the `per_page` and `page` values using query string parameters

http://localhost:8000/api/cases?per_page=20&page=2

---

The second component is a Cases Details page. This component should be bound to the following API Endpoint

http://localhost:8000/api/cases/30

---

Please feel free to utilise any publicly availble components or assets that you feel will help produce the desired outcome.

Any packages installed should be listed here in your version of the Projects README.md file.
