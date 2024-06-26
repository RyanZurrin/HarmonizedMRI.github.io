document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".project-item img");

  images.forEach((image) => {
    image.onload = function () {
      const width = image.naturalWidth;
      const height = image.naturalHeight;

      if (width > height) {
        image.style.width = "100px"; // Adjust this value as needed
        image.style.height = "auto";
      } else {
        image.style.width = "auto";
        image.style.height = "100px"; // Adjust this value as needed
      }
    };
  });
});
