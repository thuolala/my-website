let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
    const table = document.getElementById("noteTable");
    table.innerHTML = "";

    const noteCount = document.getElementById("noteCount");
    noteCount.textContent = `Nombre de notes: ${notes.length}`;

    notes.forEach((note, index) => {
        const row = document.createElement("tr");

        ["note", "french", "english", "vietnamese"].forEach((lang) => {
            const cell = document.createElement("td");
            cell.textContent = note[lang];

            // Make cell editable on click
            cell.onclick = () => {
                const input = document.createElement("input");
                input.value = note[lang];
                input.style.width = "99%";
                input.style.border = "none";
                input.style.outline = "none";
                input.style.padding = "0px";
                input.style.borderRadius = "0";

                // Save on blur or Enter
                const save = () => {
                    note[lang] = input.value.trim();
                    localStorage.setItem("notes", JSON.stringify(notes));
                    renderNotes();
                };

                input.onblur = save;
                input.onkeydown = (e) => {
                    if (e.key === "Enter") input.blur();
                };

                cell.innerHTML = "";
                cell.appendChild(input);
                input.focus();
            };

            row.appendChild(cell);
        });

        // Delete button
        const deleteCell = document.createElement("td");
        deleteCell.style.padding = "5px";
        deleteCell.style.textAlign = "center";
        deleteCell.innerHTML = `
        <button 
          onclick="deleteNote(${index})" 
          style="
            width: 100%;
            border-radius: 10px;
            color: #F0EBE3;
            cursor: pointer;
            background-color: transparent;
            border: none;
            transition: background-color 0.2s;"
          onmouseover="this.style.border='1px dashed #F0EBE3'"
          onmouseout="this.style.border='none'"
        >
          <i class="fa-solid fa-trash-can"></i>
        </button>
      `;

        row.appendChild(deleteCell);

        table.appendChild(row);
    });
}

function addNote() {
    const note = document.getElementById("note").value.trim();
    const french = document.getElementById("french").value.trim();
    const english = document.getElementById("english").value.trim();
    const vietnamese = document.getElementById("vietnamese").value.trim();

    // Make note optional
    let finalNote = note === "" ? " " : note;

    if (french && english && vietnamese) {
        notes.push({ note: finalNote, french, english, vietnamese });
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes();

        document.getElementById("note").value = "";
        document.getElementById("french").value = "";
        document.getElementById("english").value = "";
        document.getElementById("vietnamese").value = "";
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
}

let ascending = true;
function toggleSort() {
    notes.sort((a, b) => {
        return ascending
            ? a.french.localeCompare(b.french)
            : b.french.localeCompare(a.french);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();

    // Update button text
    const btn = document.querySelector("th button");
    btn.textContent = ascending ? "Trier Z-A" : "Trier A-Z";
    ascending = !ascending;
}

function filterNotes() {
    const keyword = document.getElementById("searchInput").value.trim().toLowerCase();

    if (keyword === "") {
        renderNotes(); // Show all notes if search is empty
        return;
    }

    const filteredNotes = notes.filter((note) => {
        return Object.values(note).some(value =>
            value.toLowerCase().includes(keyword)
        );
    });

    renderNotes(filteredNotes);
}

window.onload = renderNotes;
document.getElementById("searchInput").addEventListener("input", filterNotes);

