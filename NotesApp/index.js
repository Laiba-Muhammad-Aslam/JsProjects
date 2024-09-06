let createNotes = document.getElementById("createNotes");
let notesContainer = document.getElementById("notes-container");

createNotes.addEventListener("click", function(){
    let note = document.createElement("div");
    note.innerHTML = `<p contenteditable="true" id="note" class="p-3 my-3 rounded"><i class="bi bi-trash-fill fs-5 deleteBtn"></i></p>`;
    notesContainer.appendChild(note);

    let deleteBtn = note.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function(event){
        notesContainer.removeChild(note);
    });
});
