const scrollText = document.querySelector('.scroll');
const profileDiv = document.querySelector('.profile');

if (profileDiv.scrollHeight - profileDiv.scrollTop == profileDiv.clientHeight) {
  scrollText.id = 'hidden';
} else {
  scrollText.id = 'show';
}

profileDiv.addEventListener('scroll', () => {  
  if (profileDiv.scrollHeight - profileDiv.scrollTop == profileDiv.clientHeight) {
    scrollText.id = 'hidden';
  } else {
    scrollText.id = 'show';
  }
});