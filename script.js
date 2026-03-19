let xp = 0;
let nivel = 1;
let usos = 0;
let premium = false;

// LOGIN
function login(){
  let user = document.getElementById("user").value;
  if(user){
    localStorage.setItem("user", user);
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";
  }
}

// POPUP
function cerrar(){
  document.getElementById("popup").style.display = "none";
}

function premiumOn(){
  premium = true;
  alert("Ahora eres premium 🔥");
  cerrar();
}

// IA SIMULADA
function generarPlan(meta, tiempo){
  if(premium){
    return `Plan PRO para "${meta}": dedica ${tiempo} min diarios. Si eres constante, lo lograrás en pocas semanas 🔥`;
  } else {
    return `Plan básico: ${meta}, ${tiempo} min diarios. Versión limitada 😈`;
  }
}

// FORM
document.getElementById("metaForm").addEventListener("submit", function(e){
  e.preventDefault();

  let meta = document.getElementById("meta").value;
  let tiempo = document.getElementById("tiempo").value;

  if(!premium && usos >= 1){
    document.getElementById("mensaje").innerText = "Solo 1 meta en gratis 😈";
    return;
  }

  usos++;

  xp += 50;

  if(xp >= nivel * 200){
    nivel++;
    document.getElementById("mensaje").innerText = "Subiste de nivel 🔥";
  } else {
    document.getElementById("mensaje").innerText = generarPlan(meta, tiempo);
  }

  document.getElementById("xp").innerText = xp;
  document.getElementById("nivel").innerText = nivel;

  // efecto dopamina
  document.body.style.background = "#d4edda";
  setTimeout(() => {
    document.body.style.background = "#f5f6fa";
  }, 200);
});
