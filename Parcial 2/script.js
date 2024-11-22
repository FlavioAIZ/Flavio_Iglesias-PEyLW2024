document.getElementById("nextButton").addEventListener("click", function() {
    const edad = document.getElementById("edad").value;
    const extraFields = document.getElementById("extraFields");

  if (!document.getElementById("submitButton")) {
        if (edad < 18) {
            extraFields.innerHTML = `
                <label for="emailResponsable">Email del/la responsable:</label>
                <input type="email" id="emailResponsable" name="emailResponsable" required>
            `;
        } else {
            extraFields.innerHTML = `
                <label for="dni">DNI:</label>
                <input type="number" id="dni" name="dni" min="100000" max="99999999" required>
            `;
        }

        const nextButton = document.getElementById("nextButton");
        nextButton.innerText = "Enviar";
        nextButton.id = "submitButton";
        nextButton.type = "submit";
    }
});

document.getElementById("ageForm").addEventListener("submit", function(event) {
    const edad = document.getElementById("edad").value;
    const emailResponsable = document.getElementById("emailResponsable");
    const dni = document.getElementById("dni");

    if ((edad < 18 && (!emailResponsable || !emailResponsable.value)) ||
        (edad >= 18 && (!dni || !dni.value))) {
        event.preventDefault();
        alert("Por favor, completa todos los campos antes de enviar.");
    }
});