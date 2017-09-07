$(window).load(function() {
    $('.preloader').fadeOut(5000); // set duration in brackets 
});

$(document).ready(function() {
    $('#fullpage').fullpage({
        //sectionsColor: ['#1bbc9b', '#4BBFC3', '#B92B27', 'whitesmoke', '#ccddff'],
        anchors: ['home', 'projects', 'send-project', 'about'],
        menu: '#menu',
        scrollingSpeed: 1000
    });
});


var text = "";
var res = [];
var res2 = [];
var project = [{
        Name: "ImageQuantization",
        Description: "Quantize images , Reducing their size effectively without affect image Quality",
        Link: "https://github.com/hassangamal/ImageQuantization",
        Language: "csharp"
    },
    {
        Name: "Chess",
        Description: "Chess Game",
        Link: "https://github.com/hassangamal/ImageQuantization",
        Language: "cpp"
    },
    {
        Name: "Mario",
        Description: "Mario Game",
        Link: "https://github.com/hassangamal/ImageQuantization",
        Language: "java"
    },
    {
        Name: "JavaScriptProject",
        Description: "JS Game",
        Link: "https://github.com/hassangamal/ImageQuantization",
        Language: "javascript"
    },
    {
        Name: "ImageQuantization1",
        Description: "Quantize images , Reducing their size effectively without affect image Quality",
        Link: "https://github.com/hassangamal/ImageQuantization",
        Language: "csharp"
    },
    {
        Name: "Chess1",
        Description: "Chess Game",
        Link: "https://github.com/hassangamal/ImageQuantization",
        Language: "cpp"
    },
    {
        Name: "Mario1",
        Description: "Mario Game",
        Link: "https://github.com/hassangamal/ImageQuantization",
        Language: "java"
    },
    {
        Name: "elasticsearch",
        Description: "Open Source, Distributed, RESTful Search Engine",
        Link: "https://github.com/elastic/elasticsearch",
        Language: "java"
    },
    {
        Name: "Leaflet",
        Description: "🍃 JavaScript library for mobile-friendly interactive maps http://leafletjs.com",
        Link: "https://github.com/Leaflet/Leaflet",
        Language: "javascript"
    },
    {
        Name: "pdf.js",
        Description: "PDF Reader in JavaScript",
        Link: "https://github.com/mozilla/pdf.js",
        Language: "javascript"
    },
    {
        Name: 'kinto',
        Description: 'A generic JSON document store with sharing and synchronisation capabilities. http://docs.kinto-storage.org/',
        Link: 'https://github.com/Kinto/kinto',
        Language: 'python'
    },
    {
        Name: 'catapult',
        Description: 'Catapult home for performance tools.',
        Link: 'https://github.com/catapult-project/catapult',
        Language: 'python'
    }
];


selectt();

var javascriptlist = [];
var javalist = [];
var csharplist = [];
var pythonlist = [];
var cpplist = [];

organize(project);

function organize(projects) {
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].Language == 'javascript') {
            javascriptlist.push(projects[i]);
        } else if (projects[i].Language == 'java') {
            javalist.push(projects[i]);
        } else if (projects[i].Language == 'csharp') {
            csharplist.push(projects[i]);
        } else if (projects[i].Language == 'cpp') {
            cpplist.push(projects[i]);
        } else if (projects[i].Language == 'python') {
            pythonlist.push(projects[i]);
        }
    }
    console.log(javascriptlist, javalist, csharplist, pythonlist, cpplist);
}


res2 = project;
var curproj = 0;


function next(lang) {
    console.log(javascriptlist, javalist, csharplist, pythonlist, cpplist);
    var language = lang + 'list';
    var prolist = [];
    if (language == 'javascriptlist') prolist = javascriptlist;
    else if (language == 'javalist') prolist = javalist;
    else if (language == 'csharplist') prolist = csharplist;
    else if (language == 'pythonlist') prolist = pythonlist;
    else if (language == 'cpplist') prolist = cpplist;
    var tweet = `#tweet${lang}`;
    var ii = Math.floor(Math.random() * (prolist.length - 0) + 0);
    //console.log(prolist, prolist.length, ii);
    $(`#${lang}a`).attr('href', prolist[ii]['Link']);
    $(`#${lang}a`).html(prolist[ii]['Name']);
    $(`#${lang}p`).html(prolist[ii]['Description']);
    while (document.getElementsByClassName(`twitter${lang}`)[0].hasChildNodes()) {
        document.getElementsByClassName(`twitter${lang}`)[0].removeChild(document.getElementsByClassName(`twitter${lang}`)[0].lastChild);
    }
    $(`.twitter${lang}`).append(`<a id="tweet${lang}" class="twitter-share-button" href="https://twitter.com/share" data-text="Check this project" data-url="${ prolist[ii].Link}" data-hashtags="counteributors" data-via="counteributors">Tweet</a>`);
    twttr.widgets.load();

    while (document.getElementsByClassName(`github${lang}`)[0].hasChildNodes()) {
        document.getElementsByClassName(`github${lang}`)[0].removeChild(document.getElementsByClassName(`github${lang}`)[0].lastChild);
    }
    $(`.github${lang}`).append(`<a class="github-button" href="${prolist[ii].Link+'/fork'}" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork ${prolist[ii].Name} on GitHub" target="_blank">Fork</a>`);
    (function() {
        var js = document.createElement("script");
        js.src = (/^http:/.test(document.location) ? "http" : "https") + "://buttons.github.io/buttons.js";
        $(js).attr('async defer');
        document.getElementsByTagName("head")[0].appendChild(js);
    })();
    //console.log(prolist[ii].Link);
}

function selectt() {
    var jsflag = false;
    var jflag = false;
    var pythonflag = false;
    var cppflag = false;
    var csflag = false;
    for (var i = 0; i < project.length; i++) {
        if (project[i].Language == 'javascript' && jsflag == false) {
            $('#javascripta').attr('href', project[i]['Link']);
            $('#javascripta').html(project[i]['Name']);
            $('#javascriptp').html(project[i]['Description']);
            $(".twitterjavascript").append('<a id="tweetjavscript" class="twitter-share-button" href="https://twitter.com/share" data-text="Check this project" data-url="' + project[i].Link + '" data-hashtags="counteributors" data-via="counteributors">Tweet</a>');
            $('.githubjavascript').append(`<a class="github-button" href="${project[i].Link+'/fork'}" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork ${project[i].Name} on GitHub">Fork</a>`);
            jsflag = true;
        } else if (project[i].Language == 'java' && jflag == false) {
            $('#javaa').attr('href', project[i]['Link']);
            $('#javaa').html(project[i]['Name']);
            $('#javap').html(project[i]['Description']);
            $(".twitterjava").append('<a id="tweetjava" class="twitter-share-button" href="https://twitter.com/share" data-text="Check this project" data-url="' + project[i].Link + '" data-hashtags="counteributors" data-via="counteributors">Tweet</a>');
            $('.githubjava').append(`<a class="github-button" href="${project[i].Link+'/fork'}" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork ${project[i].Name} on GitHub">Fork</a>`);
            jflag = true;
        } else if (project[i].Language == 'csharp' && csflag == false) {
            $('#csharpa').attr('href', project[i]['Link']);
            $('#csharpa').html(project[i]['Name']);
            $('#csharpp').html(project[i]['Description']);
            $(".twittercsharp").append('<a id="tweetcsharp" class="twitter-share-button" href="https://twitter.com/share" data-text="Check this project" data-url="' + project[i].Link + '" data-hashtags="counteributors" data-via="counteributors">Tweet</a>');
            $('.githubcsharp').append(`<a class="github-button" href="${project[i].Link+'/fork'}" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork ${project[i].Name} on GitHub">Fork</a>`);
            csflag = true;
        } else if (project[i].Language == 'python' && pythonflag == false) {
            $('#pythona').attr('href', project[i]['Link']);
            $('#pythona').html(project[i]['Name']);
            $('#pythonp').html(project[i]['Description']);
            $(".twitterpython").append('<a id="tweetpython" class="twitter-share-button" href="https://twitter.com/share" data-text="Check this project" data-url="' + project[i].Link + '" data-hashtags="counteributors" data-via="counteributors">Tweet</a>');
            $('.githubpython').append(`<a class="github-button" href="${project[i].Link+'/fork'}" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork ${project[i].Name} on GitHub">Fork</a>`);
            pythonflag = true;
        } else if (project[i].Language == 'cpp' && cppflag == false) {
            $('#cppa').attr('href', project[i]['Link']);
            $('#cppa').html(project[i]['Name']);
            $('#cppp').html(project[i]['Description']);
            $(".twittercpp").append('<a id="tweetcpp" class="twitter-share-button" href="https://twitter.com/share" data-text="Check this project" data-url="' + project[i].Link + '" data-hashtags="counteributors" data-via="counteributors">Tweet</a>');
            $('.githubcpp').append(`<a class="github-button" href="${project[i].Link+'/fork'}" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork ${project[i].Name} on GitHub">Fork</a>`);
            cppflag = true;
        }
    }
    (function() {
        var js = document.createElement("script");
        js.src = (/^http:/.test(document.location) ? "http" : "https") + "://buttons.github.io/buttons.js";
        $(js).attr('async defer');
        document.getElementsByTagName("head")[0].appendChild(js);
    })();
}