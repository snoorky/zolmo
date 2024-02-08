document.addEventListener('DOMContentLoaded', function () {
    var toggleMenu = document.querySelector('.navMobile img');
    var menu = document.querySelector('.menu');

    toggleMenu.addEventListener('click', function () {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
            unlockScroll(); // Chamada para desbloquear o scroll
        } else {
            menu.style.display = 'block';
            lockScroll(); // Chamada para travar o scroll
        }
    });

    function lockScroll() {
        // Salva a posição atual do scroll
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        // Adiciona estilos para travar o scroll
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
    }

    function unlockScroll() {
        // Recupera a posição do scroll antes de ser bloqueado
        var scrollPosition = parseInt(document.body.style.top, 10) || 0;
        // Remove estilos para desbloquear o scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        // Retorna para a posição original do scroll
        window.scrollTo(0, scrollPosition);
    }
});
