"use strict";
document.addEventListener("DOMContentLoaded", function () {
  let tabla = document.getElementById("tabla");
  loadUsersFromCollection();

  function loadUsersFromCollection() {
    let dataUsuarios = [];
    dataUsuarios = fetch("./users.json")
      .then((response) => response.json())
      .then((data) => {
        dataUsuarios = data;
        for (const dataUsuario of dataUsuarios) {
          addUserToTable(dataUsuario.nombre,
            dataUsuario.apellido,
            dataUsuario.email,
            dataUsuario.imagen);
        }
      })
      .catch((err) => console.log(err));
  }

  function addUserToTable(nombre, apellido, email, imagen) {
    const newRow = tabla.tBodies[0].insertRow();
    let nameCell = newRow.insertCell();
    let lastNameCell = newRow.insertCell();
    let emailCell = newRow.insertCell();
    nameCell.textContent = nombre;
    lastNameCell.textContent = apellido;
    emailCell.textContent = email;
    let imageCell = document.createElement("img");
    imageCell.src = imagen;
    newRow.append(nameCell, lastNameCell, emailCell, imageCell);
  }
});
