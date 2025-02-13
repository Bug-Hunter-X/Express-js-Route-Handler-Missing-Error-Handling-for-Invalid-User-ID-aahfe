# Express.js Route Handler Missing Error Handling for Invalid User ID

This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling for invalid input.  Specifically, the provided code attempts to parse a user ID from the request parameters but fails to handle cases where the ID is not a valid number.

## Bug Description

The `/users/:id` route handler fetches a user based on their ID.  It uses `parseInt()` to convert the ID from a string to an integer. However, if the `id` parameter is not a number (e.g., a string or undefined), `parseInt()` will return `NaN`, leading to a potential error.  The code lacks error handling for such cases, causing crashes or unexpected behavior.

## Solution

The solution involves adding error handling to check if the parsed ID is a valid number. If it's not, the handler should return an appropriate error response (e.g., a 400 Bad Request).

## How to Reproduce the Bug

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run the app using `node bug.js`.
4. Send a GET request to `/users/abc` (or any non-numeric ID).

You will likely observe an error or unexpected behavior. 