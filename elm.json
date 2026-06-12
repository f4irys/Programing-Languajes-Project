// Browser build for the Elm Study Session Timer.
// The original functional source is included in src/elm/StudySessionTimer.elm.
(function () {
  window.Elm = window.Elm || {};
  window.Elm.StudySessionTimer = {
    init: function ({ node }) {
      const model = {
        studyMinutes: 25,
        breakMinutes: 5,
        secondsLeft: 25 * 60,
        running: false,
        mode: "study",
        completedSessions: 0,
        intervalId: null
      };

      const durationForMode = () =>
        (model.mode === "study" ? model.studyMinutes : model.breakMinutes) * 60;

      const formatTime = totalSeconds => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${String(seconds).padStart(2, "0")}`;
      };

      function stopTimer() {
        model.running = false;
        if (model.intervalId !== null) {
          clearInterval(model.intervalId);
          model.intervalId = null;
        }
      }

      function finishMode() {
        stopTimer();
        if (model.mode === "study") {
          model.completedSessions += 1;
          model.mode = "break";
        } else {
          model.mode = "study";
        }
        model.secondsLeft = durationForMode();
        render();
      }

      function startTimer() {
        if (model.running) return;
        model.running = true;
        model.intervalId = setInterval(() => {
          if (model.secondsLeft > 1) {
            model.secondsLeft -= 1;
            render();
          } else {
            finishMode();
          }
        }, 1000);
        render();
      }

      function pauseTimer() {
        stopTimer();
        render();
      }

      function resetTimer() {
        stopTimer();
        model.secondsLeft = durationForMode();
        render();
      }

      function switchMode() {
        stopTimer();
        model.mode = model.mode === "study" ? "break" : "study";
        model.secondsLeft = durationForMode();
        render();
      }

      function render() {
        node.innerHTML = `
          <div class="elm-timer-box">
            <div class="timer-topline">
              <span class="timer-mode">${model.mode === "study" ? "Focus Session" : "Break Time"}</span>
              <span class="session-count">Completed: ${model.completedSessions}</span>
            </div>
            <div class="timer-display">${formatTime(model.secondsLeft)}</div>
            <div class="timer-settings">
              <label>Study minutes
                <input id="elmStudyMinutes" type="number" min="1" value="${model.studyMinutes}" ${model.running ? "disabled" : ""}>
              </label>
              <label>Break minutes
                <input id="elmBreakMinutes" type="number" min="1" value="${model.breakMinutes}" ${model.running ? "disabled" : ""}>
              </label>
            </div>
            <div class="inline-actions">
              <button id="elmStart" class="btn card-btn" ${model.running ? "disabled" : ""}>Start</button>
              <button id="elmPause" class="btn secondary small-btn" ${model.running ? "" : "disabled"}>Pause</button>
              <button id="elmReset" class="btn secondary small-btn">Reset</button>
              <button id="elmSwitch" class="btn secondary small-btn">Switch Mode</button>
            </div>
            <p class="timer-note">Finish a focus session to add it to your completed-session count.</p>
          </div>
        `;

        node.querySelector("#elmStudyMinutes").addEventListener("change", event => {
          model.studyMinutes = Math.max(1, Number(event.target.value) || 25);
          if (model.mode === "study" && !model.running) model.secondsLeft = durationForMode();
          render();
        });
        node.querySelector("#elmBreakMinutes").addEventListener("change", event => {
          model.breakMinutes = Math.max(1, Number(event.target.value) || 5);
          if (model.mode === "break" && !model.running) model.secondsLeft = durationForMode();
          render();
        });
        node.querySelector("#elmStart").addEventListener("click", startTimer);
        node.querySelector("#elmPause").addEventListener("click", pauseTimer);
        node.querySelector("#elmReset").addEventListener("click", resetTimer);
        node.querySelector("#elmSwitch").addEventListener("click", switchMode);
      }

      render();
      return { stop: stopTimer };
    }
  };
})();
