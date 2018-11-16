# API node

<a href="https://travis-ci.org/sundowndev/api-js-mooc"><img src="https://api.travis-ci.org/sundowndev/api-js-mooc.svg?branch=master" alt="Build status"></a>

RESTful API based on Expressjs.

WARNING: This is for demo purposes. You should not run this in production (no cors, unit tests ...).

## Features

- Sign up/sign in (JWT, bcrypt)
- Create, update, delete, read your notes
- Manage your account: update, delete

## Call the API

As best practice, use these headers to make requests to the API:

```
Content-Type:application/x-www-form-urlencoded
Accept:application/json
```

When signed in, you must provide the access token:

```
Authorization: <Access_token>
```

**Note: The token is valid for 3 hours. After that delay you have to sign in again to get another one.**

## API response

The response code will never be in the response.

**Make operations** (create, update, delete ...)

Validation error example:

```json
{
    "success": false,
    "message": "Form is invalid.",
    "errors": [
        {
            "message": "\"password\" is required",
            "path": [
                "password"
            ],
            "type": "any.required",
            "context": {
                "key": "password",
                "label": "password"
            }
        }
    ]
}
```

**Getting objects** (read)

```json
{
    "_id": "5bec2fed257ab94172cd3874",
    "firstname": "Raphael",
    "lastname": "NA",
    "username": "sundown",
    "createdAt": "2018-11-14T14:23:41.581Z",
    "updatedAt": "2018-11-14T14:23:41.581Z",
    "__v": 0
}
```

## Installation

#### Requirements

- npm
- node >= 8
- MongoDB ~3.6

```
git clone https://github.com/sundowndev/api-js-mooc/
cd api-js-mooc
npm install
```

Run application

```
node index.js
```

Say hello!

```
curl 127.0.0.1:8080
```
