// Selecciona todos los botones de like
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const countSpan = button.querySelector(".like-count");
    let count = parseInt(countSpan.textContent);

    // Alternar estado de "like"
    if (button.classList.contains("liked")) {
      button.classList.remove("liked");
      button.innerHTML = `♡ Me gusta <span class="like-count">${count - 1}</span>`;
    } else {
      button.classList.add("liked");
      button.innerHTML = `❤️ Me gusta <span class="like-count">${count + 1}</span>`;
    }
  });
});
