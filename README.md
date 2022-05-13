# Lyft Apprenticeship

This is a personal project by Shannan Lowe for the Lyft apprenticeship program

## What is this project?

This is a JavaScript (Express.js) project that allows you to post a JSON object to
the /test endpoint and returns a JSON object that contains a string with
every third character from the posted string.

## How to run this project

Navigate to the project root directory and run the following lines:

`npm install`

`node app.js`

## Example POST body

```JSON
{
    "string_to_cut": "iamyourlyftdriver"
}
```

## Example output

```JSON
{
    "return_string": "muydv"
}
```
