function handleYes(){
    alert("Yay!💕 I knew that!!");
}

function handleNo() {
  const noButton = document.querySelector('.no-button');
  noButton.innerText = "Are you sure?";
  noButton.style.position = 'absolute';
  noButton.style.top = Math.random() * window.innerHeight + 'px';
  noButton.style.left = Math.random() * window.innerWidth + 'px';
}
function handleYesclick(){
    window.location.href = "yes_page.html"
}