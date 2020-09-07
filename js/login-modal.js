

jQuery(document).ready(function(){
    
     jQuery('.contact-seller').click(function(){
        $(".confirm-number-modal").show();
    })
    
    
     jQuery('#login-btn').click(function(){
        $(".login-btn-modal").show();
    })
    
   jQuery('.close').click(function(){
        $(".modal").hide();
    })
   


    // Get the Login modal
var modal = document.getElementById('login_mymodal');
var modal2 = document.getElementById('confirm_phone');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
     else if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

$(document).keydown(function(e) {        
    if (e.keyCode == 27) {
        $(".modal").hide();
    }
});
    
});

