:root {
  --navy: #3f2a23;
  --text: #4d3830;
  --muted: #826d64;
  --card: rgba(255, 252, 247, 0.94);
  --line: rgba(111, 78, 66, 0.18);
  --purple: #c9899e;
  --blue: #d9a8b8;
  --teal: #b98f80;
  --pink: #efb8c8;
  --orange: #d9a486;
  --yellow: #e8cf9f;
  --green: #9eaa8a;
  --cream: #fff7ea;
  --soft-pink: #f9dce4;
  --brown: #3f2a23;
  --rose: #b96f85;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(239, 184, 200, 0.42), transparent 34rem),
    radial-gradient(circle at top right, rgba(232, 207, 159, 0.35), transparent 30rem),
    linear-gradient(135deg, #fff9ef 0%, #fdf2ed 48%, #f8e4e8 100%);
}

a { color: inherit; text-decoration: none; }

.hero {
  min-height: 92vh;
  padding: 28px clamp(18px, 5vw, 70px);
  position: relative;
  overflow: hidden;
}

.hero::after {
  content: "";
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(239, 184, 200, 0.34), rgba(232, 207, 159, 0.28));
  right: -90px;
  bottom: -80px;
  z-index: -1;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 249, 239, 0.78);
  border: 1px solid var(--line);
  backdrop-filter: blur(16px);
  padding: 14px 18px;
  border-radius: 28px;
  box-shadow: 0 16px 50px rgba(63, 42, 35, 0.10);
}

.logo {
  width: 46px;
  height: 46px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--rose), var(--pink));
  color: white;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 1px;
}

.nav-links { display: flex; gap: 18px; font-weight: 700; color: var(--navy); }
.nav-links a { opacity: 0.75; }
.nav-links a:hover { opacity: 1; }

.hero-content {
  padding-top: 13vh;
  max-width: 880px;
}

.eyebrow {
  color: var(--rose);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

h1 {
  font-size: clamp(3rem, 7vw, 6.8rem);
  line-height: 0.96;
  margin: 0 0 22px;
  color: var(--navy);
  letter-spacing: -0.035em;
  font-family: "Playfair Display", Georgia, serif;
}

h1 span {
  background: linear-gradient(90deg, #8f5e50, #b96f85, #d59aab);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-text {
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  max-width: 720px;
  color: var(--muted);
  line-height: 1.7;
}

.hero-buttons, .cv-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 28px; }
.btn {
  border: 0;
  border-radius: 999px;
  padding: 12px 20px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn:hover { transform: translateY(-2px); }
.primary, .card-btn {
  background: linear-gradient(135deg, var(--rose), var(--pink));
  color: white;
  box-shadow: 0 14px 26px rgba(92, 95, 255, 0.22);
}
.secondary {
  background: var(--cream);
  color: var(--navy);
  border: 1px solid var(--line);
}

main { padding: 0 clamp(18px, 5vw, 70px) 60px; }
section { margin: 52px auto; max-width: 1180px; }
h2 { font-size: clamp(2rem, 4vw, 3rem); color: var(--navy); margin-bottom: 10px; font-family: "Playfair Display", Georgia, serif; letter-spacing: -0.025em; }
.section-intro, .overview p { color: var(--muted); line-height: 1.7; font-size: 1.05rem; }

.overview, .cv-section {
  background: rgba(255, 249, 239, 0.80);
  border: 1px solid var(--line);
  border-radius: 34px;
  padding: clamp(22px, 4vw, 42px);
  box-shadow: 0 20px 60px rgba(63, 42, 35, 0.10);
}

.paradigm-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 14px;
}
.paradigm-grid article {
  background: #fffaf2;
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 18px;
}
.paradigm-grid strong { display: block; color: var(--navy); }
.paradigm-grid span { color: var(--muted); font-size: 0.92rem; }

.programs-section {
  display: grid;
  gap: 22px;
}
.program-card {
  position: relative;
  overflow: hidden;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 30px;
  padding: clamp(20px, 3.5vw, 34px);
  box-shadow: 0 18px 50px rgba(63, 42, 35, 0.09);
}
.program-card::before {
  content: "";
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 9px;
}
.accent-blue::before { background: var(--blue); }
.accent-purple::before { background: var(--purple); }
.accent-green::before { background: var(--green); }
.accent-pink::before { background: var(--pink); }
.accent-yellow::before { background: var(--yellow); }
.accent-orange::before { background: var(--orange); }

.tag {
  display: inline-flex;
  background: #f8dfe6;
  color: #7a4a56;
  border-radius: 999px;
  padding: 7px 12px;
  font-weight: 800;
  font-size: 0.82rem;
}
h3 { color: var(--navy); font-size: 1.55rem; margin: 12px 0 8px; font-family: "Playfair Display", Georgia, serif; }
.program-card p { color: var(--muted); }

.form-grid { display: grid; gap: 12px; margin: 18px 0; }
.form-grid.two { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.form-grid.three { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); }
label { font-weight: 700; color: var(--navy); }
input, select, textarea {
  width: 100%;
  margin-top: 7px;
  border: 1px solid rgba(102, 112, 133, 0.24);
  border-radius: 16px;
  padding: 12px 14px;
  font: inherit;
  color: var(--text);
  background: #fffaf2;
}
.result-box, .list-output, .ordered-output, .flashcard-container {
  margin-top: 18px;
  padding: 16px;
  border-radius: 18px;
  background: rgba(255, 247, 238, 0.94);
  border: 1px solid var(--line);
}
.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
  margin: 18px 0;
}
.checkbox-grid label, .cv-controls label { background: white; border: 1px solid var(--line); border-radius: 16px; padding: 12px; }

.flashcard {
  display: inline-block;
  width: min(100%, 300px);
  margin: 8px;
  padding: 18px;
  border-radius: 20px;
  background: linear-gradient(135deg, #fff4dc, #f8dce5);
  border: 1px solid rgba(185, 111, 133, 0.24);
}
.flashcard strong { display: block; color: var(--navy); margin-bottom: 8px; }
.task-item {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: center;
  background: #fffaf2;
  border: 1px solid var(--line);
  padding: 12px 14px;
  border-radius: 16px;
  margin: 8px 0;
}
.pill { padding: 5px 10px; border-radius: 999px; color: white; font-size: 0.82rem; font-weight: 800; }
.High { background: var(--pink); }
.Medium { background: var(--orange); }
.Low { background: var(--teal); }

.cv-layout {
  margin-top: 26px;
  display: grid;
  grid-template-columns: minmax(240px, 320px) 1fr;
  gap: 24px;
}
.cv-layout aside, .resume-paper {
  background: #fffaf2;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px;
}
.cv-controls { display: grid; gap: 10px; }
.cv-controls label { display: flex; align-items: center; gap: 8px; font-weight: 700; }
.resume-paper { color: #20263a; }
.resume-paper h1 { font-size: 2rem; letter-spacing: -0.03em; margin-bottom: 4px; }
.resume-paper h2 { font-size: 1.1rem; border-bottom: 2px solid #e8e8ff; padding-bottom: 5px; margin-top: 20px; }
.resume-paper ul { margin-top: 6px; }
.resume-paper li { margin-bottom: 5px; }
.resume-meta { color: var(--muted); font-size: 0.95rem; }

footer {
  text-align: center;
  padding: 42px 18px;
  color: var(--muted);
}
footer a { color: var(--purple); font-weight: 800; }

.elm-budget-box {
  background: rgba(248, 250, 255, 0.95);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 18px;
  margin-top: 16px;
}

@media (max-width: 760px) {
  .nav-links { display: none; }
  .cv-layout { grid-template-columns: 1fr; }
  .hero { min-height: auto; padding-bottom: 70px; }
}

@media print {
  body { background: white; }
  header, .overview, .programs-section, footer, .cv-actions, .cv-layout aside, .section-intro { display: none !important; }
  main { padding: 0; }
  .cv-section { box-shadow: none; border: none; padding: 0; margin: 0; }
  .cv-layout { display: block; }
  .resume-paper { border: none; }
}

.gpa-course-list {
  display: grid;
  gap: 12px;
  margin: 18px 0;
}

.gpa-course-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr auto;
  gap: 12px;
  align-items: end;
  background: rgba(255, 247, 238, 0.94);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 14px;
}

.inline-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0 18px;
}

.small-btn {
  padding: 10px 14px;
  font-size: 0.92rem;
}

.remove-btn {
  border: 1px solid rgba(255, 111, 174, 0.35);
  background: #fce8ed;
  color: #8b4f5f;
  border-radius: 14px;
  padding: 12px 14px;
  font-weight: 800;
  cursor: pointer;
}

.remove-btn:hover {
  background: #f7d7df;
}

@media (max-width: 760px) {
  .gpa-course-row {
    grid-template-columns: 1fr;
  }
}

/* Elm Study Session Timer */
.elm-timer-box {
  background: linear-gradient(145deg, #fffaf2, #fbe8ee);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px;
  margin-top: 16px;
  box-shadow: 0 14px 32px rgba(76, 48, 42, 0.08);
}

.timer-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.timer-mode,
.session-count {
  padding: 7px 12px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 0.86rem;
}

.timer-mode {
  background: #f4cbd7;
  color: #4c302a;
}

.session-count {
  background: #f3e7d4;
  color: #60473f;
}

.timer-display {
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(3.4rem, 8vw, 5.8rem);
  line-height: 1;
  text-align: center;
  color: #4c302a;
  margin: 26px 0;
  letter-spacing: 0.04em;
}

.timer-settings {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 16px;
}

.timer-settings label {
  font-weight: 700;
}

.timer-note {
  color: var(--muted);
  margin: 12px 0 0;
}

@media (max-width: 620px) {
  .timer-settings {
    grid-template-columns: 1fr;
  }
}

/* Internship tracker */
.internship-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1rem;
  margin-top: 0.75rem;
  border: 1px solid rgba(83, 55, 45, 0.16);
  border-radius: 16px;
  background: rgba(255, 250, 244, 0.78);
}

.internship-item > div:first-child {
  display: grid;
  gap: 0.2rem;
}

.internship-item span {
  color: var(--muted, #7a6258);
  font-size: 0.92rem;
}

.internship-actions {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.icon-button {
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  border-radius: 999px;
  background: #5a372f;
  color: #fffaf4;
  font-size: 1.25rem;
  cursor: pointer;
}

.empty-state {
  color: var(--muted, #7a6258);
  font-style: italic;
}

@media (max-width: 650px) {
  .internship-item {
    align-items: flex-start;
    flex-direction: column;
  }
}
