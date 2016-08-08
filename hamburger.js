var menus = document.getElementsByClassName('hamburger-menu');

[].forEach.call(menus, function (m) {
    m.addEventListener('click', function () {
        m.classList.toggle('open');
    });
});
