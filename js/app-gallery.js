// Selecciona todos los botones de like
/*const likeButtons = document.querySelectorAll(".like-btn");

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
});*/


// Logica boton like

document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach((button, index) => {
    const countSpan = button.querySelector(".like-count");

    // Cria uma referência única no Firebase para cada card
    const likeRef = database.ref(`likes/card_${index + 1}`);

    // Atualiza o contador em tempo real
    likeRef.on("value", (snapshot) => {
      const count = snapshot.val() ?? 0;
      countSpan.textContent = count;
    });

    // Identificador local para saber se o usuário já curtiu este card
    const likedKey = `liked_card_${index + 1}`;
    const alreadyLiked = localStorage.getItem(likedKey) === "true";

    if (alreadyLiked) {
      button.classList.add("liked");
      button.innerHTML = `❤️ Me gusta <span class="like-count">${countSpan.textContent}</span>`;
    }

    // Clique no botão
    button.addEventListener("click", () => {
      if (localStorage.getItem(likedKey) === "true") {
        alert("Ya le diste like a este proyecto ❤️");
        return;
      }

      // Incrementa o contador global no Firebase
      likeRef.transaction((currentCount) => (currentCount || 0) + 1);

      // Marca que o usuário curtiu
      localStorage.setItem(likedKey, "true");

      // Atualiza o visual
      button.classList.add("liked");
      button.innerHTML = `❤️ Me gusta <span class="like-count">${parseInt(countSpan.textContent) + 1}</span>`;

      alert("¡Gracias por tu like! 🌸");
    });
  });
});

