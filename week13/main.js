$(document).ready(function () {
  $(".add-to-cart").on("click", function () {

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 }
    });
    
   
    let $notification = $("<div class='notification'></div>").text("Item has been added to cart!");
    

    $("body").append($notification);
    $notification.fadeIn(300).delay(1500).fadeOut(300, function () {
      $(this).remove();
    });
  });
  

  $(".Proceed-to-checkout").on("click", function (event) {
    event.preventDefault(); 
     
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 }
    });
    
    let $notification = $("<div class='notification'></div>").text("Thank you for your purchase, we will contact you soon for more details");
    
    $("body").append($notification);
    $notification.fadeIn(300).delay(1500).fadeOut(300, function () {
      $(this).remove();
    });
  });
});

function shakeScreen() {
  document.body.classList.add('shake');
  setTimeout(() => {
    document.body.classList.remove('shake');
  }, 300);
}

function toggleDropdown() {
  const dropdown = document.getElementById("genreDropdown");
  if (dropdown.style.display === "flex") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "flex";
  }
}

