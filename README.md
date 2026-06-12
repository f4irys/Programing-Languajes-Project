# Multi-Paradigm Programming Project

This project is an interactive webpage created to explore different programming languages and programming paradigms. It includes seven browser-based programs developed using Python, Elm, Prolog, TypeScript, JavaScript, and JSON.

The programs demonstrate imperative, functional, logical, and object-oriented programming. The project also includes a dynamic résumé that can be customized and downloaded as a PDF.

## Programs Included

* UPRM GPA Calculator — Python / PyScript
* Study Session Timer — Elm
* Career Path Advisor — Prolog / Tau Prolog
* Mini Smart Academic Task Planner — TypeScript
* Flashcard Generator — JavaScript
* Internship Application Tracker — JavaScript
* Dynamic Résumé Generator — JavaScript and JSON

## How to Run the Project

### Option 1: Clone the repository

1. Open a terminal.
2. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/multi-paradigm-programming-project.git
```

3. Open the project folder:

```bash
cd multi-paradigm-programming-project
```

4. Open the folder in Visual Studio Code:

```bash
code .
```

Replace `YOUR-USERNAME` with the correct GitHub username.

### Option 2: Download the ZIP file

1. Open the GitHub repository.
2. Select **Code**.
3. Select **Download ZIP**.
4. Extract the downloaded file.
5. Open the extracted folder in Visual Studio Code.

## Running the Webpage

The recommended method is to use the Live Server extension in Visual Studio Code.

1. Install **Live Server** from the Extensions section in Visual Studio Code.
2. Open the project folder.
3. Open `index.html`.
4. Right-click inside the file.
5. Select **Open with Live Server**.

The webpage should open automatically in the browser.

An internet connection is required because some external libraries are used for PyScript, Tau Prolog, and PDF generation.

## Using the Programs

Each program is available from the main webpage.

* The GPA Calculator allows the user to enter letter grades and course credits.
* The Study Session Timer includes study and break modes.
* The Career Path Advisor recommends possible careers based on selected interests.
* The Academic Task Planner organizes tasks by priority.
* The Flashcard Generator creates study cards.
* The Internship Tracker stores application information in the browser.
* The Résumé Generator allows entries to be selected or removed before downloading the résumé as a PDF.

## Project Structure

```text
multi-paradigm-programming-project/
├── index.html
├── README.md
├── cv
├── elm.json
├── assets/
├── data/
├── src/
└── dist/
```

The `src` folder contains the original source files, while the `dist` folder contains the compiled files used by the browser.

## Important Notes

* Run the project through Live Server or another local web server.
* Do not open the ZIP file directly.
* Keep the file named `cv` in the root folder.
* Keep an internet connection active while testing the programs.

## Author

Deborah M. Perez González
