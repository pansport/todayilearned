// https://docs.google.com/spreadsheets/d/1eeldcA_OwP4DHYEvjG0kDe0cRys-cDPhc_E9P9G1e3I/edit#gid=0
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
const btnShare = document.querySelector(".btn-share");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");
const categories = document.querySelector(".category-list");

// render data from mockapi and display it on the page
factsList.innerHTML = "";
async function loadFacts() {
  const res = await fetch("https://63e0df8765b57fe6064b5cb0.mockapi.io/fact", {
    method: "GET",
    headers: {
      "Content-Type": "application.json",
    },
  });

  const data = await res.json();

  data.forEach((fact) => {
    let html = `
      <li class="fact">
        <p>
          ${fact.text}
        <a
        class="source"
        href="${fact.source}"
        target="_blank"
        >(Source)</a
        >
        </p>
        <span class="tag" style="background-color: #eab308"
        >${fact.category}</span>
      <div class="vote-buttons">
        <button>👍 ${fact.votesInteresting}</button>
        <button>🤯 ${fact.votesMindblowing}</button>
        <button>⛔️ ${fact.votesFalse}</button>
      </div>
      </li>
    `;

    factsList.insertAdjacentHTML("afterbegin", html);
  });
}
loadFacts();

// display the category list
CATEGORIES.forEach((category) => {
  const html = `
    <li class="category">
      <button
      class="btn btn-category"
      style="background-color: #3b82f6"
      >
        ${category.name}
      </button>
      </li>
  `;

  categories.insertAdjacentHTML("beforeend", html);
});

// show/hide form
btnShare.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btnShare.textContent = "close";
  } else {
    form.classList.add("hidden");
    btnShare.textContent = "share a fact";
  }
});
