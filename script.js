function stars() {
    let count = 150;
    let scene = document.querySelector('.scene');
    let i = 0;
    while (i < count) {
        let stars = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        stars.style.left = x + 'px';
        stars.style.width = 1 + 'px';
        stars.style.height = h + 'px';
        stars.style.animationDuration = duration + 's';

        scene.appendChild(stars);
        i++
    }
}

stars()