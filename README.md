Overview
This project contains a React component named Modal that displays a modal dialog with a form for users to fill in their details. The modal includes fields for username, email address, phone number, and date of birth. It also includes basic validation for email, phone number, and date of birth inputs.

Features
Modal Display: A modal window that can be opened and closed.
Form Handling: Captures user input for username, email, phone number, and date of birth.
Validation:
Email must be in a valid format.
Phone number must be exactly 10 digits long.
Date of birth must be entered.
Close Modal: The modal can be closed by clicking a close button or clicking outside the modal content.
Files
Modal.js
This file contains the main component for the modal.

Key Functions:

handleSubmit: Validates the form data and logs it to the console.
handleChange: Updates form data as the user types.
handleOutsideClick: Closes the modal if the user clicks outside the modal content.
Modal.css
This file contains the CSS for styling the modal. Ensure that this file is included to style the modal properly.
