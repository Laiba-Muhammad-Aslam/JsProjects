let createNotes = document.getElementById("createNotes");
let notesContainer = document.getElementById("notes-container");

createNotes.addEventListener("click", function(){
    let note = document.createElement("div");
    // note.innerHTML = `<p contenteditable="true" id="note" class="p-3 my-3 rounded"><i class="bi bi-trash-fill fs-5 deleteBtn"></i></p>`;
    note.innerHTML = `<p contenteditable="true" id="note" class="p-3 my-3 rounded"><img src="images/delete.png" alt="deleteBtn" class="deleteBtn"></p>`;
    notesContainer.appendChild(note);
    updateStorage();

    attachDeleteListener(note.querySelector(".deleteBtn"));
});

function updateStorage(){
    localStorage.setItem("Notes", notesContainer.innerHTML);
}

function showNotes() {
    let savedNotes = localStorage.getItem("Notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;

        let deleteButtons = document.querySelectorAll(".deleteBtn");
        deleteButtons.forEach(function (deleteBtn) {
            attachDeleteListener(deleteBtn);
        });
    }
}

function attachDeleteListener(deleteBtn) {
    deleteBtn.addEventListener("click", function () {
        deleteBtn.parentElement.parentElement.remove();
        updateStorage();
    });
}

showNotes();
