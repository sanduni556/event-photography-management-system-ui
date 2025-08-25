## Blueprint: Interactive Code Snippet Generator

**Goal:** Create a web-based application that allows users to input code snippets, apply various formatting options, and generate styled output suitable for sharing or embedding.

**Key Features:**

*   **Code Input Area:** A multi-line text area for users to paste or type code.
*   **Language Selection:** A dropdown or set of buttons to choose the programming language for syntax highlighting.
*   **Formatting Options:** Checkboxes or toggles for options like line numbers, dark/light theme, font style, etc.
*   **Preview Area:** A read-only section displaying the formatted code snippet in real-time as options are changed.
*   **Copy to Clipboard Button:** A button to easily copy the generated HTML or image of the code snippet.
*   **Download Button:** Option to download the formatted snippet as an image or HTML file.

**Technical Stack:**
*   **Color Palette:** Implement the provided color palette with CSS variables for consistency and easy management.
*   **Frontend:** Utilize the custom color palette throughout the UI by overriding Bootstrap's default color classes with the theme colors in the CSS file.
    *   A new CSS file `/css/variables.css` has been created to store CSS variables and common styles.
*   `/css/style.css` has been moved into the `css` folder.
    *   HTML5: Structure of the web page.
    *   CSS3: Styling and layout, utilizing Bootstrap for responsive design and pre-built components. All custom CSS files are located in the `css` folder.
    *   JavaScript: Handling user interactions, applying formatting logic, communicating with backend (if necessary), and generating the final output.
    *   Bootstrap: Frontend framework for responsive design and UI components.
    *   Syntax Highlighting Library (e.g., Prism.js, highlight.js): To apply syntax highlighting to the code.
*   **Backend (Optional - for future enhancements like saving/sharing):**
    *   Node.js/Python/Ruby/etc.: To handle user accounts, saving snippets, or generating images on the server side.
    *   Database (Optional): To store user data and saved snippets.

**Project Structure:**

```
interactive-code-generator/
├── index.html          // Main HTML file
├── css/
│   └── style.css       // Custom CSS styles
├── js/
│   └── script.js       // JavaScript logic
└── lib/                // External libraries (Bootstrap, Syntax Highlighting)
    ├── bootstrap/
    │   └── ...
    └── syntax-highlighter/
        └── ...
```
**Development Plan:**

1.  **Set up Project Structure:** Create the necessary folders and initial files (`index.html`, `css/style.css`, `js/script.js`).
2.  **Include Bootstrap:** Download or link to the Bootstrap CSS and JavaScript files in `index.html`.
3.  **Design Basic Layout (HTML & Bootstrap):**
    *   Create a container div to hold the main content.
    *   Add a header for the application title.
    *   Create sections for the code input area, options panel, and preview area. Use Bootstrap grid classes for responsive layout.
    *   Implement the code input textarea.
    *   Design the options panel with checkboxes, dropdowns, and buttons using Bootstrap forms and components.
    *   Create the preview area (likely a `<code>` block within a `<pre>` tag).
4.  **Implement Basic Styling (CSS):**
    *   Add custom styles in `css/style.css` to refine the appearance beyond Bootstrap's defaults, ensuring a visually appealing and user-friendly interface.
    *   Focus on spacing, font choices, and basic color schemes.
5.  **Add Syntax Highlighting Library:** Include the chosen syntax highlighting library (e.g., Prism.js) in `/index.html` and initialize it in `/main.js`.
6.  **Implement JavaScript Logic (`js/script.js`):**
    *   Get references to the HTML elements (input area, options, preview area, buttons).
    *   Add event listeners to the input area and options to trigger updates to the preview.
    *   Implement the logic to apply syntax highlighting based on the selected language.
    *   Implement the logic to apply formatting options (line numbers, theme, etc.) to the preview. This might involve manipulating the HTML structure or applying CSS classes dynamically.
    *   Implement the "Copy to Clipboard" functionality using the Clipboard API.
    *   Implement the "Download" functionality (this might be more complex and could involve server-side processing for image generation).
7.  **Refine Responsiveness:** Test the application on different screen sizes and use Bootstrap's responsive utilities to ensure a seamless experience across devices.
8.  **Add Advanced Formatting Options:** Implement more advanced options as needed (e.g., font size, indentation, word wrap).
9.  **Testing and Debugging:** Thoroughly test all features and fix any bugs.
10. **Documentation (Optional but Recommended):** Create a README file explaining how to use the application and its features.

**UI Inspiration (Based on provided image):**
- Remove social media links from the footer as they are not in the design and not specified in the requirements.

- Call to Action Section Styling:
    - Removed background color.
    - Changed button background to the primary color defined in the color palette.
    - Made the `h2` heading bold.
    - Made the `p` font size slightly smaller.

*   The layout should be clean and organized, with a clear separation between the input area, options, and preview.
*   Utilize a color scheme that is easy on the eyes, especially for the code preview (consider both light and dark themes).
*   Use icons or clear labels for formatting options.
*   Ensure buttons are easily clickable and have clear actions.
*   The preview area should accurately reflect the chosen formatting options.

**Future Enhancements:**

*   Implement server-side image generation for higher-quality downloads.
*   Add user accounts and the ability to save and share snippets.
*   Integrate with code repositories (e.g., GitHub) to fetch snippets directly.
*   Allow users to customize themes.
*   Add support for more programming languages.

This blueprint provides a solid foundation for building the interactive code snippet generator with a focus on generating the UI based on the provided image, using Bootstrap for responsiveness, and creating the necessary HTML, CSS, and JavaScript files.