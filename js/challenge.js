document.addEventListener('DOMContentLoaded', function() {
    // Counter variables
    let count = 0;
    let timer;
  
    // DOM elements
    const counterDisplay = document.getElementById('counter');
    const minusBtn = document.getElementById('minus');
    const plusBtn = document.getElementById('plus');
    const heartBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const likeList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('list');
  
    // Timer incrementation
    function startTimer() {
      timer = setInterval(() => {
        count++;
        counterDisplay.textContent = count;
      }, 1000);
    }
  
    // Counter incrementation and decrementation
    minusBtn.addEventListener('click', () => {
      count--;
      counterDisplay.textContent = count;
    });
  
    plusBtn.addEventListener('click', () => {
      count++;
      counterDisplay.textContent = count;
    });
  
    // "Like" functionality
    heartBtn.addEventListener('click', () => {
      const li = document.createElement('li');
      li.textContent = `${count} has been liked`;
      likeList.appendChild(li);
    });
  
    // Pause and Resume functionality
    pauseBtn.addEventListener('click', () => {
      if (pauseBtn.textContent === 'pause') {
        clearInterval(timer);
        minusBtn.disabled = true;
        plusBtn.disabled = true;
        heartBtn.disabled = true;
        pauseBtn.textContent = 'resume';
      } else {
        startTimer();
        minusBtn.disabled = false;
        plusBtn.disabled = false;
        heartBtn.disabled = false;
        pauseBtn.textContent = 'pause';
      }
    });
  
    // Leave Comments functionality
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const commentText = commentInput.value;
      const comment = document.createElement('p');
      comment.textContent = commentText;
      commentList.appendChild(comment);
      commentInput.value = '';
    });
  
    // Start the timer when the page loads
    startTimer();
  });
  