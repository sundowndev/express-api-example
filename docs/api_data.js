define({ "api": [
  {
    "type": "get",
    "url": "/note",
    "title": "Request all notes",
    "name": "GetNotes",
    "group": "Note",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of Note objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/note/index.js",
    "groupTitle": "Note"
  },
  {
    "type": "get",
    "url": "/note/:id",
    "title": "Request Note information",
    "name": "GetNotes",
    "group": "Note",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Notes unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the note.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the note.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/note/index.js",
    "groupTitle": "Note"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Request all Users information",
    "name": "GetUsers",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of User objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/user/index.js",
    "groupTitle": "User"
  }
] });