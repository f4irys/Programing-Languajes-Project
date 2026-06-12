// Logical Program: Career Path Advisor using Prolog rules through Tau Prolog.
// The program uses facts selected by the user, then Prolog rules infer a career path.
const prologProgram = `
career('Data Analytics / NLP Research') :- likes(data), likes(research).
career('Financial Technology / FinTech Analytics') :- likes(finance), likes(data).
career('Business Analytics') :- likes(business), likes(data).
career('Cybersecurity Ethics') :- likes(security), likes(ethics).
career('Digital Humanities') :- likes(humanities), likes(data).
career('UX / UI Design') :- likes(art), likes(design).
career('Creative Technology') :- likes(art), likes(programming).
career('Computational Social Science') :- likes(psychology), likes(data).
career('Human-Computer Interaction') :- likes(psychology), likes(design).
career('Science Communication') :- likes(education), likes(communication).
career('Technical Writing') :- likes(writing), likes(technology).
career('Educational Technology') :- likes(education), likes(programming).
career('Ethics in Technology / Tech Policy') :- likes(ethics), likes(humanities).
career('Software Development') :- likes(programming), likes(technology).
career('Interdisciplinary Technology Research') :- likes(research), likes(ethics).
career('General Computer Science') :- likes(programming).
`;

function selectedCareerInterests() {
  return Array.from(document.querySelectorAll('.career-interest:checked')).map(box => box.value);
}

function runCareerAdvisor() {
  const interests = selectedCareerInterests();
  const result = document.getElementById('careerResult');

  if (interests.length === 0) {
    result.textContent = 'Please select at least one interest.';
    return;
  }

  if (!window.pl) {
    result.textContent = fallbackCareerAdvice(interests);
    return;
  }

  const session = pl.create(1000);
  const facts = interests.map(item => `likes(${item}).`).join('\n');
  session.consult(prologProgram + '\n' + facts, {
    success: function () {
      session.query('career(Career).', {
        success: function () {
          session.answers(
            function (answer) {
              if (answer === false) {
                result.textContent = fallbackCareerAdvice(interests);
                return;
              }
              const careers = [];
              let current = answer;
              while (current !== false && current !== null && careers.length < 3) {
                const formatted = session.format_answer(current)
                  .replace('Career = ', '')
                  .replace(/'/g, '');
                if (!careers.includes(formatted)) careers.push(formatted);
                current = session.answer();
              }
              result.textContent = careers.length
                ? 'Suggested path(s): ' + careers.join(' | ')
                : fallbackCareerAdvice(interests);
            },
            3
          );
        },
        error: function () {
          result.textContent = fallbackCareerAdvice(interests);
        }
      });
    },
    error: function () {
      result.textContent = fallbackCareerAdvice(interests);
    }
  });
}

function fallbackCareerAdvice(interests) {
  const suggestions = [];

  const has = item => interests.includes(item);

  if (has('finance') && has('data')) suggestions.push('Financial Technology / FinTech Analytics');
  if (has('business') && has('data')) suggestions.push('Business Analytics');
  if (has('data') && has('research')) suggestions.push('Data Analytics / NLP Research');
  if (has('security') && has('ethics')) suggestions.push('Cybersecurity Ethics');
  if (has('humanities') && has('data')) suggestions.push('Digital Humanities');
  if (has('art') && has('design')) suggestions.push('UX / UI Design');
  if (has('art') && has('programming')) suggestions.push('Creative Technology');
  if (has('psychology') && has('data')) suggestions.push('Computational Social Science');
  if (has('psychology') && has('design')) suggestions.push('Human-Computer Interaction');
  if (has('education') && has('communication')) suggestions.push('Science Communication');
  if (has('writing') && has('technology')) suggestions.push('Technical Writing');
  if (has('ethics') && has('humanities')) suggestions.push('Ethics in Technology / Tech Policy');
  if (has('programming') && has('technology')) suggestions.push('Software Development');
  if (has('programming')) suggestions.push('General Computer Science');

  const unique = [...new Set(suggestions)].slice(0, 3);
  return unique.length
    ? 'Suggested path(s): ' + unique.join(' | ')
    : 'Suggested path: Interdisciplinary Technology Research';
}
