# Job Application Tracker

This project is a **Job Application Tracker** built with **Vue.js**, **Tailwind CSS**, and **DaisyUI**. It allows users to manage job applications by creating, viewing, editing, and deleting entries, all while storing data locally in the browser's `localStorage`.

## Features

- **Add New Application**: Users can add a new job application entry with details like company name, contact method, and, if applicable, contact name and LinkedIn profile URL.
- **Expandable Cards**: Each job entry is presented as a card showing the company name and application status. Details are hidden by default and can be expanded by clicking the card.
- **Status Tracking**: Track the status of each application with options like `pending`, `contacted`, `responded`, `rejected`, `accepted`, and `interviewed`. Status is color-coded for easy identification.
- **Edit and Delete**: Users can edit an existing application entry or delete it. Editing opens the entry in a modal with pre-filled data.

## Technology Stack

- **Vue.js**: A progressive JavaScript framework used for building the user interface.
- **Tailwind CSS**: A utility-first CSS framework used for styling the application.
- **DaisyUI**: A component library for Tailwind CSS that provides pre-styled UI components.

## Components

### `EntryCard.vue`

- **Purpose**: Displays each job application as a card with the ability to show/hide details.
- **Features**:
  - Displays the company name and current application status.
  - Status is color-coded and can be updated via a dropdown.
  - Clicking the card toggles the display of detailed information.
  - Includes "Edit" and "Delete" buttons when details are expanded.

### `EntryForm.vue`

- **Purpose**: Handles the form used for adding or editing job application entries.
- **Features**:
  - Includes fields for company name, contact method, contact name, and LinkedIn profile URL (if applicable).
  - Displays additional fields based on the selected contact method.
  - Can be used for both creating new entries and editing existing ones.
  - Opens as a modal when triggered.

### `App.vue`

- **Purpose**: The main component that ties together the `EntryCard` and `EntryForm` components.
- **Features**:
  - Manages the list of job application entries.
  - Handles adding, editing, deleting entries, and updating status in `localStorage`.
  - Controls the display of the form modal.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/job-application-tracker.git
   cd job-application-tracker
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run serve
   ```

4. **Build for production**:

   ```bash
   npm run build
   ```

## Usage

- **Add a New Entry**: Click the "Add Entry" button on the top right to open the form modal and enter the job application details.
- **View Details**: Click on a card to expand it and view the details of the job application.
- **Change Status**: Use the dropdown menu on the card to change the status of an application.
- **Edit an Entry**: After expanding a card, click the "Edit" button to modify the entry's details.
- **Delete an Entry**: After expanding a card, click the "Delete" button to remove the entry.

## Customization

- **Styling**: The application is styled with Tailwind CSS and DaisyUI. You can customize the styles by modifying the Tailwind configuration or adding custom CSS.
- **Components**: The components (`EntryCard.vue`, `EntryForm.vue`, `App.vue`) are modular and can be extended or modified to fit your needs.

## Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
