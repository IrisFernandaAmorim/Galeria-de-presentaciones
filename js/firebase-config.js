// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwr9xM1s_pcSOKnI0UQfzqL_k6kBCg5X0",
  authDomain: "gallery-presentations.firebaseapp.com",
  databaseURL: "https://gallery-presentations-default-rtdb.firebaseio.com",
  projectId: "gallery-presentations",
  storageBucket: "gallery-presentations.firebasestorage.app",
  messagingSenderId: "948639081222",
  appId: "1:948639081222:web:d38465da2241c9281e7487"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const likeRef = database.ref("likes/count");


/* === Codigo likes reserva ===
const btn = document.getElementById("likeBtn");
const count = document.getElementById("likeCount");

// 🔍 Verifica se o usuário já curtiu antes
let userLiked = localStorage.getItem("userLiked") === "true";
if (userLiked) {
  btn.classList.add("liked");
  btn.textContent = "❤️ Você já curtiu";
}

// 🔁 Atualiza o contador em tempo real
likeRef.on("value", (snapshot) => {
  const valor = snapshot.val();
  count.textContent = valor ?? 0;
});

// 🎯 Clique no botão
btn.addEventListener("click", () => {
  if (userLiked) {
    alert("Ya has dado me gusta en esa publicacion ❤️");
    return;
  }

  // Aumenta o contador global no Firebase
  likeRef.transaction((valorAtual) => {
    return (valorAtual || 0) + 1;
  });

  // Atualiza estado local
  userLiked = true;
  localStorage.setItem("userLiked", "true");

  // Atualiza o visual do botão
  btn.classList.add("liked");
  btn.textContent = "❤️ Você já curtiu";

  // Feedback rápido
  alert("Obrigado pelo like! 🌟");
});*/
