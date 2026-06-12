// CV Program: Dynamic Résumé Generator using JavaScript + JSON
class CurriculumVitae {
  constructor(data) {
    this.data = data;
    this.includedEntries = new Set();
    this.initializeIncludedEntries();
  }

  initializeIncludedEntries() {
    this.data.categories.forEach((category, categoryIndex) => {
      category.entries.forEach((entry, entryIndex) => {
        if (entry.includeInResume) this.includedEntries.add(`${categoryIndex}-${entryIndex}`);
      });
    });
  }

  createControls() {
    const controls = document.getElementById('cvControls');
    controls.innerHTML = '';

    this.data.categories.forEach((category, categoryIndex) => {
      const title = document.createElement('strong');
      title.textContent = category.name;
      controls.appendChild(title);

      category.entries.forEach((entry, entryIndex) => {
        const key = `${categoryIndex}-${entryIndex}`;
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = this.includedEntries.has(key);
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) this.includedEntries.add(key);
          else this.includedEntries.delete(key);
          this.printHTML();
        });
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(entry.title || entry.name || entry.degree || category.name));
        controls.appendChild(label);
      });
    });
  }

  createResume() {
    return {
      personal: this.data.personal,
      categories: this.data.categories.map((category, categoryIndex) => ({
        ...category,
        entries: category.entries.filter((entry, entryIndex) => this.includedEntries.has(`${categoryIndex}-${entryIndex}`))
      })).filter(category => category.entries.length > 0)
    };
  }

  printHTML() {
    const resume = this.createResume();
    const output = document.getElementById('cvOutput');
    output.innerHTML = `
      <h1>${resume.personal.name}</h1>
      <p class="resume-meta">${resume.personal.email} | ${resume.personal.phone} | ${resume.personal.location}</p>
      ${resume.categories.map(category => `
        <section class="resume-section">
          <h2>${category.name}</h2>
          ${category.entries.map(entry => this.entryToHTML(entry)).join('')}
        </section>
      `).join('')}
    `;
  }

  entryToHTML(entry) {
    const subtitleParts = [entry.organization, entry.institution, entry.location, entry.dates, entry.year].filter(Boolean);
    return `
      <div class="resume-entry">
        <strong>${entry.title || entry.role || entry.degree || entry.name || ''}</strong>
        ${subtitleParts.length ? `<p class="resume-meta">${subtitleParts.join(' · ')}</p>` : ''}
        ${entry.description ? `<p>${entry.description}</p>` : ''}
        ${entry.details ? `<ul>${entry.details.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
        ${entry.items ? `<ul>${entry.items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
      </div>
    `;
  }
}

let cvApp = null;

async function loadCV() {
  try {
    const response = await fetch('cv');
    const data = await response.json();
    cvApp = new CurriculumVitae(data);
    cvApp.createControls();
    cvApp.printHTML();
  } catch (error) {
    document.getElementById('cvOutput').innerHTML = '<p>Unable to load CV data. Please run this project with Live Server.</p>';
  }
}

function getJsPDFConstructor() {
  if (window.jspdf && window.jspdf.jsPDF) return window.jspdf.jsPDF;
  if (window.jsPDF) return window.jsPDF;
  return null;
}

function addWrappedText(doc, text, x, y, maxWidth, lineHeight) {
  const lines = doc.splitTextToSize(String(text), maxWidth);
  lines.forEach(line => {
    if (y > 10.4) {
      doc.addPage();
      y = 0.7;
    }
    doc.text(line, x, y);
    y += lineHeight;
  });
  return y;
}

function downloadCVPDF() {
  if (!cvApp) {
    alert('Please wait for the résumé to load before downloading.');
    return;
  }

  const JsPDF = getJsPDFConstructor();

  // Main method: generate the PDF directly from the CV JSON data.
  // This is more reliable than screenshot-based PDF generation and prevents blank downloads.
  if (JsPDF) {
    const resume = cvApp.createResume();
    const doc = new JsPDF({ unit: 'in', format: 'letter', orientation: 'portrait' });
    const left = 0.7;
    const rightWidth = 7.1;
    let y = 0.75;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text(resume.personal.name, left, y);
    y += 0.25;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`${resume.personal.email} | ${resume.personal.phone} | ${resume.personal.location}`, left, y);
    y += 0.3;

    resume.categories.forEach(category => {
      if (y > 9.9) {
        doc.addPage();
        y = 0.7;
      }

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text(category.name.toUpperCase(), left, y);
      y += 0.08;
      doc.setLineWidth(0.01);
      doc.line(left, y, left + rightWidth, y);
      y += 0.2;

      category.entries.forEach(entry => {
        if (y > 10.1) {
          doc.addPage();
          y = 0.7;
        }

        const entryTitle = entry.title || entry.role || entry.degree || entry.name || '';
        const subtitleParts = [entry.organization, entry.institution, entry.location, entry.dates, entry.year].filter(Boolean);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        y = addWrappedText(doc, entryTitle, left, y, rightWidth, 0.16);

        if (subtitleParts.length) {
          doc.setFont('helvetica', 'italic');
          doc.setFontSize(9.5);
          y = addWrappedText(doc, subtitleParts.join(' · '), left, y, rightWidth, 0.15);
        }

        if (entry.description) {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9.5);
          y = addWrappedText(doc, entry.description, left, y, rightWidth, 0.15);
        }

        const bullets = entry.details || entry.items || [];
        bullets.forEach(item => {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9.2);
          y = addWrappedText(doc, `• ${item}`, left + 0.15, y, rightWidth - 0.15, 0.15);
        });

        y += 0.08;
      });

      y += 0.08;
    });

    doc.save('Deborah_Perez_Resume.pdf');
    return;
  }

  // Fallback: if jsPDF does not load, open a clean print window.
  const printableWindow = window.open('', '_blank');
  const resumeHTML = document.getElementById('cvOutput').innerHTML;
  printableWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Deborah Perez Resume</title>
        <style>
          body { font-family: Arial, sans-serif; color: #20263a; padding: 40px; line-height: 1.35; }
          h1 { margin-bottom: 4px; }
          h2 { margin-top: 18px; border-bottom: 1px solid #d9def7; padding-bottom: 4px; font-size: 16px; }
          .resume-meta { color: #4c5573; margin: 4px 0; }
          ul { margin-top: 4px; }
        </style>
      </head>
      <body>${resumeHTML}</body>
    </html>
  `);
  printableWindow.document.close();
  printableWindow.focus();
  printableWindow.print();
}

window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('cvOutput')) {
    loadCV();
  }
});
