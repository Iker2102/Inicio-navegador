function actualizarReloj() {
  let hora = new Date();
  let horaActual = hora.getHours();
  let minutosActual = hora.getMinutes();
  let segundosActual = hora.getSeconds();
  horaActual = hora.getHours();
  minutosActual = hora.getMinutes();
  segundosActual = hora.getSeconds();

  document.getElementById("hora").innerHTML = horaActual.toString().padStart(2, "0") + ":";
  document.getElementById("minutos").innerHTML = minutosActual.toString().padStart(2, "0") + ":";
  document.getElementById("segundos").innerHTML = segundosActual.toString().padStart(2, "0");

  setTimeout(actualizarReloj, 1000);
  }

  actualizarReloj();
