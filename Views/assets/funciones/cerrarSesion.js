function CerrarSesion() {
    $.ajax({
        url: '/Portafolio_Ambiente_web/Controllers/HomeController.php',
        method: 'POST',
        dataType: 'json',
        data: { btnCerrarSesion: true },
        success: function (response) {
            window.location.href = '/Portafolio_Ambiente_web/Views/vHome/login.php';
        }
    });
};
