// progress bar function
var progress = document.querySelectorAll('.progress-list');
var prevBtn = document.querySelector('#prev-btn');
var nextBtn = document.querySelector('#next-btn');

counter = 1;
nextBtn.addEventListener('click', function (){
  counter++;
  
  if (counter <= progress.length) {
    update();
  }
})
prevBtn.addEventListener('click', function (){
  counter--;
  
  if (counter <= progress.length) {
    update();
  }
})

function update() {
  progress.forEach(function (li , index) {
    if (index < counter) {
      li.classList.add('progress-list-active');
      li.classList.remove('remove-animation');
    } else {
      li.classList.add('remove-animation');
    }
  });

  if (counter === 1) {
    prevBtn.setAttribute('disabled',true);
  } else if (counter === progress.length) {
    nextBtn.setAttribute('disabled',true);
  } else {
    prevBtn.removeAttribute('disabled');
    nextBtn.removeAttribute('disabled');
  }
}























