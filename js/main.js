$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', 'whitesmoke', 'whitesmoke', '#ccddff'],
        anchors: ['home', 'projects', 'about', 'lastPage'],
        menu: '#menu',
        scrollingSpeed: 1000
    });
});

window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));

document.getElementById('shareBtn').onclick = function() {
    FB.ui({
        method: 'share',
        display: 'popup',
        href: 'google.com',
    }, function(response) {});
}


(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));