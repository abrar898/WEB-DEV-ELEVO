const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  sidebar.classList.toggle("open");
  document.body.classList.toggle("sidebar-open");
});

// Close sidebar when clicking outside
document.addEventListener("click", (event) => {
  const clickedInsideSidebar = sidebar.contains(event.target);
  const clickedMenuButton = menuBtn.contains(event.target);

  if (!clickedInsideSidebar && !clickedMenuButton) {
    sidebar.classList.remove("open");
    document.body.classList.remove("sidebar-open");
  }
});
