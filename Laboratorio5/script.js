document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactoForm");
    const tableBody = document.querySelector("table tbody");
    const fields = form.querySelectorAll("input, textarea, select");

    function updateTable() {
        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        tableBody.innerHTML = `
        <tr>
            <td>Nombres</td>
            <td>${data.nombre || ''}</td>
        </tr>
        <tr>
            <td>Apellidos</td>
            <td>${data.apellido || ''}</td>
        </tr>
        <tr>
            <td>Correo Electrónico</td>
            <td>${data.email || ''}</td>
        </tr>
        <tr>
            <td>Teléfono</td>
            <td>${data.telefono || ''}</td>
        </tr>
        <tr>
            <td>Edad</td>
            <td>${data.edad || ''}</td>
        </tr>
        <tr>
            <td>Dirección</td>
            <td>${data.direccion || ''}</td>
        </tr>
        <tr>
            <td>Provincias</td>
            <td>${data.provincia || ''}</td>
        </tr>
        <tr>
            <td>Código Postal</td>
            <td>${data.codigoPostal || ''}</td>
        </tr>
        <tr>
            <td>Método de Contacto</td>
            <td>${data.medioContacto || ''}</td>
        </tr>
        <tr>
            <td>Tipo de suscripción</td>
            <td>${getSuscripciones(formData)}</td>
        </tr> `;
    }

    function getSuscripciones(formData) {
        const suscripciones = [];
        formData.forEach((value, key) => {
            if (key === "suscripcion") {
                suscripciones.push(value);
            }
        });
        return suscripciones.join(", ");
    }

    fields.forEach(field => {
        field.addEventListener("input", updateTable);
    });

    updateTable();
});
