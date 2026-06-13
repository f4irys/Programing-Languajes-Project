// Free-choice program: Internship Application Tracker (JavaScript)
// Applications are saved in localStorage so they remain after refreshing.
const INTERNSHIP_STORAGE_KEY = "deborahInternshipApplications";

function getInternshipApplications() {
  try {
    return JSON.parse(localStorage.getItem(INTERNSHIP_STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function saveInternshipApplications(applications) {
  localStorage.setItem(INTERNSHIP_STORAGE_KEY, JSON.stringify(applications));
}

function addInternshipApplication() {
  const company = document.getElementById("internshipCompany").value.trim();
  const position = document.getElementById("internshipPosition").value.trim();
  const date = document.getElementById("internshipDate").value;
  const status = document.getElementById("internshipStatus").value;

  if (!company || !position || !date) {
    document.getElementById("internshipMessage").textContent =
      "Please enter a company, position, and application date.";
    return;
  }

  const applications = getInternshipApplications();
  applications.push({ id: Date.now(), company, position, date, status });
  saveInternshipApplications(applications);

  document.getElementById("internshipCompany").value = "";
  document.getElementById("internshipPosition").value = "";
  document.getElementById("internshipDate").value = "";
  document.getElementById("internshipMessage").textContent = "Application saved.";
  renderInternshipApplications();
}

function updateInternshipStatus(id, status) {
  const applications = getInternshipApplications().map(application =>
    application.id === id ? { ...application, status } : application
  );
  saveInternshipApplications(applications);
  renderInternshipApplications();
}

function deleteInternshipApplication(id) {
  const applications = getInternshipApplications().filter(application => application.id !== id);
  saveInternshipApplications(applications);
  renderInternshipApplications();
}

function renderInternshipApplications() {
  const output = document.getElementById("internshipOutput");
  if (!output) return;

  const filter = document.getElementById("internshipFilter")?.value || "All";
  const applications = getInternshipApplications()
    .filter(application => filter === "All" || application.status === filter)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (applications.length === 0) {
    output.innerHTML = '<p class="empty-state">No applications match this view yet.</p>';
    return;
  }

  output.innerHTML = applications.map(application => `
    <div class="internship-item">
      <div>
        <strong>${escapeTrackerHTML(application.position)}</strong>
        <span>${escapeTrackerHTML(application.company)} · ${escapeTrackerHTML(application.date)}</span>
      </div>
      <div class="internship-actions">
        <select aria-label="Update application status" onchange="updateInternshipStatus(${application.id}, this.value)">
          ${["Applied", "Interview", "Offer", "Rejected"].map(status =>
            `<option value="${status}" ${status === application.status ? "selected" : ""}>${status}</option>`
          ).join("")}
        </select>
        <button type="button" class="icon-button" onclick="deleteInternshipApplication(${application.id})" aria-label="Delete application">×</button>
      </div>
    </div>
  `).join("");
}

function escapeTrackerHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

window.addEventListener("DOMContentLoaded", renderInternshipApplications);
