function displayData() {
    const form = document.getElementById("registrationForm");
    const outputTable = document.getElementById("outputTable");
    const table = outputTable.querySelector("table");

    table.innerHTML = "";

    for (let i = 0; i < form.elements.length; i++) {
        const field = form.elements[i];
        if (field.type !== "button") {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = field.id || field.name;
            cell2.textContent = field.value;
        }
    }

    form.style.display = "none";
    outputTable.style.display = "block";
}