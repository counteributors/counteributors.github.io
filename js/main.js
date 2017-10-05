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
    addProjs(javascriptlist, 'javascript');
    addProjs(javalist, 'java');
    addProjs(csharplist, 'csharp');
    addProjs(pythonlist, 'python');
    addProjs(cpplist, 'cpp');


}

res2 = project;
var curproj = 0;

function addProjs(arr, lang) {
    for (var i = 0; i < arr.length; i++) {
        $('.container').append(`
        <div class="col-md-2 proj ${lang}">
        <h4><a href="${arr[i].Link}" target="_blank">${arr[i].Name}</a></h4>
        <span>${arr[i].Language}</span>
        <p>${arr[i].Description}</p>
        <ul class="text-center social">
        <li><a class="twitter-share-button" href="https://twitter.com/share" data-text="Check this project" data-url="${ arr[i].Link}" data-hashtags="counteributors" data-via="counteributors">Tweet</a>
        </li>
        <li><a class="github-button" href="${arr[i].Link+'/fork'}" data-icon="octicon-repo-forked" data-show-count="false" aria-label="Fork ${arr[i].Name} on GitHub" target="_blank">Fork</a>
        </li>
        </ul>
        </div>
        `);
    }
};