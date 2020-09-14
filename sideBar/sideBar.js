const toggleBtn = document.querySelector('.sidebar_toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function() {
    toggleBtn.classList.toggle("show-sidebar");
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove("show-sidebar");
});