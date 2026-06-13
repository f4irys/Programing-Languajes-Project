// JavaScript fallback for the Python/PyScript imperative GPA calculator.
// The official imperative program source is in src/python/gpa_calculator.py.
// This fallback makes sure the app still works in the browser if PyScript loads slowly.

let gpaCourseCount = 0;

function createGradeSelect(id) {
  return `
    <select id="${id}" aria-label="Course grade">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="F">F</option>
    </select>
  `;
}

function addGPACourse(defaultCredits = "") {
  gpaCourseCount += 1;
  const courseList = document.getElementById("gpaCourses");
  const row = document.createElement("div");
  row.className = "gpa-course-row";
  row.dataset.courseId = String(gpaCourseCount);

  row.innerHTML = `
    <label>Course ${gpaCourseCount} Grade
      ${createGradeSelect(`grade-${gpaCourseCount}`)}
    </label>
    <label>Credits
      <input id="credits-${gpaCourseCount}" type="number" min="1" step="1" placeholder="3" value="${defaultCredits}" />
    </label>
    <button type="button" class="remove-btn" onclick="removeGPACourse(this)">Remove</button>
  `;

  courseList.appendChild(row);
}

function removeGPACourse(button) {
  const rows = document.querySelectorAll(".gpa-course-row");
  if (rows.length <= 1) {
    document.getElementById("gpaResult").innerText = "At least one course is required.";
    return;
  }
  button.closest(".gpa-course-row").remove();
}

function clearGPACourses() {
  const courseList = document.getElementById("gpaCourses");
  courseList.innerHTML = "";
  gpaCourseCount = 0;
  addGPACourse(3);
  addGPACourse(3);
  addGPACourse(4);
  document.getElementById("gpaResult").innerText = "Estimated GPA will appear here.";
}

function calculateGPAFallback() {
  const points = { A: 4.0, B: 3.0, C: 2.0, D: 1.0, F: 0.0 };
  const rows = document.querySelectorAll(".gpa-course-row");

  if (rows.length === 0) {
    document.getElementById("gpaResult").innerText = "Please add at least one course.";
    return;
  }

  let totalPoints = 0;
  let totalCredits = 0;

  for (const row of rows) {
    const courseId = row.dataset.courseId;
    const grade = document.getElementById(`grade-${courseId}`).value;
    const credits = Number(document.getElementById(`credits-${courseId}`).value);

    if (!credits || credits <= 0) {
      document.getElementById("gpaResult").innerText = "Please complete every credit field with a positive number.";
      return;
    }

    totalPoints += points[grade] * credits;
    totalCredits += credits;
  }

  const gpa = totalPoints / totalCredits;
  document.getElementById("gpaResult").innerText =
    `Estimated GPA: ${gpa.toFixed(2)} | Total Credits: ${totalCredits}`;
}

window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("gpaCourses")) {
    clearGPACourses();
  }
});
