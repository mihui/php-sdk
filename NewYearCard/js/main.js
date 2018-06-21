var loadAudio = function (url) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var source = document.createElement('source');
            source.type = 'audio/mp3';
            source.src = url;
            var audio = new Audio();
            audio.appendChild(source);
            audio.load();
            audio.play();
        }
    };
    xhttp.open("GET", "css/style.css", true);
    xhttp.send();

};

var initializeAudio = function () {

    var audio = document.createElement('audio');
    var source = document.createElement('source');
    source.src = 'audio/siji.mp3';
    source.type = 'audio/mp3';
    audio.appendChild(source);

    audio.addEventListener("ended", function (e) {
        // music.setAttribute('');
        this.style.animationPlayState = "paused";//兼容性比较差
    }, false);
    audio.addEventListener("loadeddata", function (e) {
        console.log('loaded');
        var button = document.getElementById('button');
        var event = document.createEvent('HTMLEvents');
        event.initEvent('click', true, true);
        button.dispatchEvent(event);
        // audio.play();
    });
    audio.load();

    return audio;
};

window.onload = function () {
    var music = document.getElementsByClassName("music")[0];
    // var audio = document.getElementsByTagName("audio")[0];
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');
    var container = document.getElementById('playerContainer');
    loadAudio('audio/siji.mp3');
    var audio = initializeAudio();




    // <audio autoplay>
    //     <source src="audio/siji.mp3" type="audio/mp3">
    // </audio>

    // music.onclick = function () {
    //     if (audio.paused) {
    //         audio.play();
    //         this.style.animationPlayState = "running";//兼容性比较差
    //         // this.setAttribute("class", "play");
    //     } else {
    //         audio.pause();
    //         this.style.animationPlayState = "paused";//兼容性比较差
    //         // this.setAttribute("class", "");
    //     }
    // };
    music.addEventListener('touchstart', function (e) {
        console.log('music touch');
        e.preventDefault();
        e.stopImmediatePropagation();
        var self = this;
        window.setTimeout(function () {
            if (audio.paused) {
                audio.play();
                self.style.animationPlayState = "running";//兼容性比较差
                // this.setAttribute("class", "play");
            } else {
                audio.pause();
                self.style.animationPlayState = "paused";//兼容性比较差
                // this.setAttribute("class", "");
            }
        }, 100);
    });
    page1.addEventListener("touchstart", function (event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top = "100%";
        // console.log('touch start.');

        setTimeout(() => {
            console.log('timeout function');
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        }, 5500);

    }, false);

};
