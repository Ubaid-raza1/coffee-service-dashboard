function openSidebar() {
    var barOpen = document.getElementById("sidebar");
    barOpen.style.visibility = "visible"; // Make the sidebar visible
    barOpen.style.transform = "translateX(0)"; // Slide it into view
  }
  
  function closeSidebar() {
    var crosClose = document.getElementById("sidebar");
    crosClose.style.visibility = "hidden"; // Hide the sidebar
    crosClose.style.transform = "translateX(100%)"; // Move it off-screen
  }
