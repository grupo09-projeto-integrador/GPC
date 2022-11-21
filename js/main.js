/* 
Autores:
 - Boushra Akl
 - Gustavo Piegat
 - Jean Moschen
 - Tiago Guillande
 - Vinicius Aquino
*/
const head = document.querySelector("head");
const body = document.querySelector("body");

head.insertAdjacentHTML(
  "beforeend",
  `<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css'>
<link rel='stylesheet' href='../../css/main.css'>
<link rel='stylesheet' href='../../css/notifications.css'>
<link rel='shortcut icon' href='../../assets/favicon.svg' type='image/x-icon'>
`
);

body.insertAdjacentHTML(
  "afterbegin",
  `<sidebar class="navMenu">
<figure><img class="logo-sidebar" src="../../assets/imgs/logo-rt-int-2.png" alt="Sistema GPC Rotary"></figure>
<nav>
    <ul>
        <li><a href="../home/home.html"><i class="bi bi-house-fill"></i> Início</a></li>
        <li><a href="../usuarios/usuarios.html"><i class="bi bi-people-fill"></i> Usuários</a></li>
        <li><a href="../ativos/ativos.html"><i class="bi bi-archive-fill"></i> Ativos</a></li>
        <li><a href="../relatorios/relatorios.html"><i class="bi bi-archive-fill"></i> Relatórios</a></li>
        <li><a href="../ajustes/ajustes.html"><i class="bi bi-gear-fill"></i> Ajustes</a></li>
        <li><a href="#"><i class="bi bi-bell-fill"></i><button class="btnOpenModal" onclick="openModal()">Notificações</button></a></li>
    </ul>
</nav>
<div class="modal-container">
        <div class="modal">
        
            <h2>Notificações</h2>
            <span>
            Texto teste
            </span>
            <div class="btns">
                <button class="btnClose" onclick="closeModal()">Close</button>
            </div>
        </div> 
     </div>
<nav class="logout">
    <ul>
        <li><a href="../../index.html"><i class="bi bi-box-arrow-right"></i> Deslogar</a></li>
    </ul>
</nav>
</sidebar>`
);

const modal = document.querySelector(".modal-container");

function openModal() {
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

