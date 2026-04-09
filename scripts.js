const taskInput = document.getElementById("task-input");
const btnAjouter = document.getElementById("add-task");
const liste = document.getElementById("task-list");
const tache = document.getElementById("task-count");
const nettoyer = document.getElementById("clear-all");
const dateDisplay = document.getElementById("date-display");
let total = 0;

// Affichage de la date
const d = new Date();
dateDisplay.innerHTML = d.toLocaleDateString("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

// 1. Fonction pour changer le statut au clic
function changerStatut(element) {
  if (element.classList.contains("doing")) {
    element.classList.replace("doing", "completed");
  } else {
    element.classList.replace("completed", "doing");
  }
}

// 2. Logique d'ajout
function ajouterTache() {
  const recupInput = taskInput.value;

  if (recupInput !== "") {
    total += 1;
    tache.innerHTML = `${total} tâche${total > 1 ? "s" : ""} au total`;

    // On ajoute la classe 'doing' (jaune) par défaut
    liste.innerHTML += `<li class="doing" onclick="changerStatut(this)">${recupInput}</li>`;

    taskInput.value = "";
  } else {
    alert("Veuillez mettre une tâche !");
  }
  taskInput.focus();
}

btnAjouter.addEventListener("click", ajouterTache);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    ajouterTache();
  }
});

nettoyer.addEventListener("click", () => {
  tache.innerHTML = "0 tâche en cours";
  liste.innerHTML = "";
  total = 0;
});
