function createQuestionMarks() {
  const container = document.getElementById('container');
  const screenWidth = window.innerWidth; 
  const screenHeight = window.innerHeight;

  for (let i = 0; i < 5; i++) { 
    const questionMark = document.createElement('div');
    questionMark.textContent = '?';
    questionMark.classList.add('questionMark');

    const randomX = (Math.random() - 0.5) * screenWidth * 2; 
    const randomY = (Math.random() - 0.5) * screenHeight * 2; 

        questionMark.style.setProperty('--x', `${randomX}px`);
    questionMark.style.setProperty('--y', `${randomY}px`);

    const duration = Math.random() * 30 + 45; 
    questionMark.style.animationDuration = `${duration}s`;

    questionMark.style.left = '50%';
    questionMark.style.top = '50%';
    questionMark.style.transform = 'translate(-50%, -50%)';

    container.appendChild(questionMark);

    questionMark.addEventListener('animationend', () => {
      questionMark.remove();
    });
  }
}

setInterval(createQuestionMarks, 1000);

window.addEventListener('resize', () => {
  createQuestionMarks();
});