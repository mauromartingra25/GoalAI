let xp = localStorage.getItem("xp") || 0;
let nivel = localStorage.getItem("nivel") || 1;
let usos = localStorage.getItem("usos") || 0;
let fecha = localStorage.getItem("fecha") || "";

let hoy = new Date().toDateString();
if(fecha !== hoy){
  usos = 0;
  localStorage.setItem("fecha", hoy);
}

let premium = false;

document.getElementById("cerrar").onclick = () => {
  document.getElementById("popup").style.display = "none";
  document.getElementById("metaForm").style.display = "flex";
};

document.getElementById("premium").onclick = () => {
  premium = true;
  alert("Ahora eres premium 🔥");
  document.getElementById("popup").style.display = "none";
  document.getElementById("metaForm").style.display = "flex";
};

function actualizar(){
  document.getElementById("xp").innerText = xp;
  document.getElementById("nivel").innerText = nivel;
}

document.getElementById("metaForm").addEventListener("submit", function(e){
  e.preventDefault();

  let meta = document.getElementById("meta").value;
  let tiempo = document.getElementById("tiempo").value;

  if(!premium && usos >= 1){
    document.getElementById("mensaje").innerText = "Solo 1 meta en versión gratis 😈";
    return;
  }

  usos++;
  localStorage.setItem("usos", usos);

  xp = parseInt(xp) + 50;

  if(xp >= nivel * 200){
    nivel++;
    document.getElementById("mensaje").innerText = "Subiste de nivel 🔥";
  } else {
    document.getElementById("mensaje").innerText =
      premium
      ? `Plan PRO: ${meta}, ${tiempo} min diarios`
      : `Plan básico: ${meta}, ${tiempo} min diarios`;
  }

  localStorage.setItem("xp", xp);
  localStorage.setItem("nivel", nivel);

  actualizar();

  document.body.style.background = "#2ecc71";
  setTimeout(() => {
    document.body.style.background = "#1e1e2f";
  }, 200);
});

actualizar();
