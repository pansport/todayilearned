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

// render data from supabase
async function loadFacts() {
  const res = await fetch(
    "https://qsnidtsrryfmdmfqtiqq.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmlkdHNycnlmbWRtZnF0aXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyNTE2MTEsImV4cCI6MTk5MDgyNzYxMX0.h0WHJ2NH3av90hw_sZ2cKl3K3-vZHD677Ozi2V6qDxg",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmlkdHNycnlmbWRtZnF0aXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyNTE2MTEsImV4cCI6MTk5MDgyNzYxMX0.h0WHJ2NH3av90hw_sZ2cKl3K3-vZHD677Ozi2V6qDxg",
      },
    }
  );

  const data = await res.json();

  createFactsList(data);
}
loadFacts();

// render facts in a list
factsList.innerHTML = "";

function createFactsList(factList) {
  const htmlArr = factList.map((fact) => {
    return `<li class="fact">
    <p>
      ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
        >(Source)</a
      >
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }"
      >${fact.category}</span
    >
    <div class="vote-buttons">
      <button>👍 ${fact.votesInteresting}</button>
      <button>🤯 ${fact.votesMindblowing}</button>
      <button>⛔️ ${fact.votesFalse}</button>
    </div>
    </li>`;
  });

  const html = htmlArr.join("");

  factsList.insertAdjacentHTML("afterbegin", html);
}

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
