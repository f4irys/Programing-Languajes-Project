# Multi-Paradigm Programming Project

This project is an interactive webpage created for a Programming Languages course. Its purpose is to explore different programming paradigms through small browser-based programs.

The webpage includes seven programs developed with Python, Elm, Prolog, TypeScript, JavaScript, and JSON. These programs demonstrate imperative, functional, logical, and object-oriented programming. The project also includes a dynamic résumé that can be customized and downloaded as a PDF.

## Programs Included

* **UPRM GPA Calculator** — Python / PyScript
* **Study Session Timer** — Elm
* **Career Path Advisor** — Prolog / Tau Prolog
* **Mini Smart Academic Task Planner** — TypeScript
* **Flashcard Generator** — JavaScript
* **Internship Application Tracker** — JavaScript
* **Dynamic Résumé Generator** — JavaScript and JSON

## How to Run the Project

### Option 1: Clone the repository

1. Open a terminal.
2. Clone the repository:

```bash
git clone https://github.com/f4irys/Programing-Languajes-Project.git
```

3. Open the project folder:

```bash
cd Programing-Languajes-Project
```

4. Open the folder in Visual Studio Code:

```bash
code .
```

### Option 2: Download the ZIP file

1. Open the GitHub repository.
2. Click the green **Code** button.
3. Select **Download ZIP**.
4. Extract the downloaded file.
5. Open the extracted folder in Visual Studio Code.

## Running the Webpage

The recommended method is to use the **Live Server** extension in Visual Studio Code.

1. Install **Live Server** from the Extensions section in VS Code.
2. Open the project folder.
3. Open `index.html`.
4. Right-click inside the file.
5. Select **Open with Live Server**.

The webpage should open automatically in the browser.

An internet connection is required because some external libraries are used for PyScript, Tau Prolog, and PDF generation.

## Using the Programs

All programs are available from the main webpage.

* The **GPA Calculator** allows users to enter letter grades and course credits to estimate a GPA.
* The **Study Session Timer** provides study and break modes.
* The **Career Path Advisor** recommends possible career paths based on selected interests.
* The **Academic Task Planner** organizes academic tasks by priority.
* The **Flashcard Generator** creates simple study cards.
* The **Internship Tracker** stores internship application information in the browser.
* The **Résumé Generator** allows users to include or remove résumé entries and download the final résumé as a PDF.

## Project Structure

```text
Programing-Languajes-Project/
├── index.html
├── README.md
├── cv
├── elm.json
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── cv.js
│       ├── flashcards.js
│       ├── gpa-fallback.js
│       ├── internship-tracker.js
│       └── prolog-career.js
├── data/
│   └── cv.json
├── src/
│   ├── elm/
│   │   └── StudySessionTimer.elm
│   ├── python/
│   │   └── gpa_calculator.py
│   └── typescript/
│       └── task-planner.ts
└── dist/
    ├── elm/
    │   └── study-session-timer.js
    └── typescript/
        └── task-planner.js
```

The `src` folder contains the original source files. The `dist` folder contains compiled files used by the browser. The `assets` folder contains the CSS and JavaScript files used by the webpage.

## Important Notes

* Run the project through Live Server or another local web server.
* Do not open the ZIP file directly.
* Keep the file named `cv` in the root folder because it is required by the project instructions.
* Keep an internet connection active while testing the webpage.

## Author

Deborah M. Perez González
