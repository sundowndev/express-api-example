define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Get access token",
    "name": "Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
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
            "field": "access_token",
            "description": "<p>Access token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "Register",
    "name": "Register",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
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
            "description": "<p>Array of Note objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/note",
    "title": "Create note",
    "name": "CreateNote",
    "group": "Note",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"<Access_Token>\"\n}",
          "type": "json"
        }
      ]
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
    "type": "delete",
    "url": "/note/:id",
    "title": "Delete note",
    "name": "DeleteNote",
    "group": "Note",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"Note successfully deleted.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"success\": false,\n  \"message\": \"Access forbidden.\",\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Note unique ID.</p>"
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
    "title": "Get note",
    "name": "GetNotes",
    "group": "Note",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Note unique ID.</p>"
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
    "type": "put",
    "url": "/note/:id",
    "title": "Update note",
    "name": "UpdateNote",
    "group": "Note",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Note unique ID.</p>"
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
    "type": "delete",
    "url": "/user/me",
    "title": "Delete account",
    "name": "DeleteUser",
    "group": "User",
    "version": "0.0.0",
    "filename": "app/routes/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/me",
    "title": "Get user information",
    "name": "GetUser",
    "group": "User",
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
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/me",
    "title": "Update account information",
    "name": "UpdateUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User object.</p>"
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
    "url": "/user/me/notes",
    "title": "Get all notes",
    "name": "GetNotesByUserId",
    "group": "User_notes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>Notes of the user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/user/index.js",
    "groupTitle": "User_notes"
  }
] });
