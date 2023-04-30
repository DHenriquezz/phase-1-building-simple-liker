// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll(".like-glyph")
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    mimicServerCall()
      .then(resp => {
        button.classList.add('activated-heart')
        button.textContent = FULL_HEART
      })
      .catch(error => {
        const errorMessage = error.message;
        const errorDom = document.createElement('p')
        errorDom.textContent = ` ${errorMessage}`
        document.body.appendChild(errorDom)
        document.querySelector('#modal').classList.remove('hidden');
        setTimeout(() => {
          document.querySelector('#modal').classList.add('hidden');
        }, 3000);
      })
  })
  
  button.addEventListener('click', () => {
    if (button.classList.contains('activated-heart')) {
      button.classList.remove('activated-heart');
      button.textContent = EMPTY_HEART;
    }
  });
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
