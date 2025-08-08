const insertMainHeader = (header) => {

    header.innerHTML = `
  <div class="container">
        <nav class="navbar navbar-expand-lg px-4 py-4" role="navigation" aria-label="Menú principal">
            <!-- Logo -->
            <a class="navbar-brand" href="#">
                <img src="../../public/img/logo.png" alt="El logo es la palabra sneakers">
            </a>

            <!-- Botón para vista responsive-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Menú hamburguesa -->
            <div class="collapse navbar-collapse" id="menuContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#">Collections</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Men</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Women</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                </ul>

                <!-- Iconos de carrito y foto de perfil-->
                <div class="ms-auto d-flex align-items-center gap-3">
                <a href="#" class="text-body-secondary"><i class="bi bi-cart3 fs-5"></i></a>
                <img src="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="foto de perfil del usuario" class="profile-img">
            </div>

            </div>

        </nav>
    </div>
     `;
}

export default insertMainHeader;

