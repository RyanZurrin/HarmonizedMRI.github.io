document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchBox");
  const categoryFilter = document.getElementById("categoryFilter");
  const projectItems = document.querySelectorAll(".project-item");

  searchBox.addEventListener("input", filterProjects);
  categoryFilter.addEventListener("change", filterProjects);

  function filterProjects() {
    const searchText = searchBox.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    projectItems.forEach((item) => {
      const title = item.querySelector("h3").textContent.toLowerCase();
      const category = item.dataset.category;

      if (
        (title.includes(searchText) || searchText === "") &&
        (category === selectedCategory || selectedCategory === "all")
      ) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
});
