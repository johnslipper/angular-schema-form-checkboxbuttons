Angular Schema Form Checkbox Buttons Addon
==========================================

This addon provides a Bootstrap button group UI for the Angular Schema Form "array" field type instead of a list of checkboxes. This is essentially a checkbox version of the inbuilt "radiobuttons" field type.

The project was built using the yeoman [Angular Schema Form Add-on Generator](https://github.com/json-schema-form/generator-angular-schema-form-add-on).

Usage
-----

In the schema:
```javascript
"things": {
  "type": "array",
  "title": "I like...",
  "items": {
    "type": "string",
    "enum": [
      "clowns",
      "compiling",
      "sleeping"
    ]
  }
}
```

In the form:
```javascript
{
  key: 'things',
  type: 'checkboxbuttons',
}
```

Development
-----------
Install dev dependencies:
```bash
npm install
```

Install project dependencies:
```bash
bower install
```

Run gulp to generate output:
```bash
gulp
```