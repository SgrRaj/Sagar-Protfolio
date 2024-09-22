// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block"; // Show button
    } else {
        scrollBtn.style.display = "none";  // Hide button
    }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("scrollBtn").onclick = function() {
   
    document.documentElement.scrollTop = 0; 
};





