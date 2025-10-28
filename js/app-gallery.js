// Seleciona todos os botões de like
const likeButtons = document.querySelectorAll(".like-btn");

// Para cada card da galeria
likeButtons.forEach((button, index) => {
  const countSpan = button.querySelector(".like-count");
  const projectId = "project_" + index; // identificador único do card
  const likeRef = database.ref("likes/" + projectId);

  // --- 🔹 Mostrar os likes em tempo real ---
  likeRef.on("value", (snapshot) => {
    const likes = snapshot.val() || 0;
    countSpan.textContent = likes;
  });

  // --- 🔹 Controlar se o usuário já curtiu ---
  const userLikedKey = `liked_${projectId}`;
  const alreadyLiked = localStorage.getItem(userLikedKey);

  if (alreadyLiked) {
    button.classList.add("liked");
    button.innerHTML = `❤️ Me gusta <span class="like-count">${countSpan.textContent}</span>`;
  }

  // --- 🔹 Evento de clique ---
  button.addEventListener("click", () => {
    const liked = button.classList.toggle("liked");

    if (liked) {
  // Incrementa no Firebase
  likeRef.transaction((likes) => (likes || 0) + 1);
  localStorage.setItem(userLikedKey, "true");
  button.innerHTML = `❤️ Me gusta <span class="like-count">${countSpan.textContent}</span>`;
} else {
  // Decrementa no Firebase
  likeRef.transaction((likes) => Math.max((likes || 0) - 1, 0));
  localStorage.removeItem(userLikedKey);
  button.innerHTML = `♡ Me gusta <span class="like-count">${countSpan.textContent}</span>`;
}
});
});