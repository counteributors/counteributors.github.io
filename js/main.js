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
        Name: "Calculator",
        Description: "Calculator",
        Link: "https://github.com/zeyadetman/Calculator",
        Language: "javascript"
    },
    {
        Name: "Image-TextSteganography",
        Description: "An image steganography by converting the image into text of pixels and use the LSB to hide the ciphered text that encrypted by The Caesar cipher Algorithm (Cryptography). The project decrypt the image by loading it, converting the pixels’ digits and break the LSB.",
        Link: "https://github.com/zeyadetman/Image-TextSteganography",
        Language: "csharp"
    },
    {
        Name: "Stars-Todolist",
        Description: "Convert your stars list to Todo List.",
        Link: "https://github.com/zeyadetman/Stars-Todolist",
        Language: "python"
    },
    {
        Name: "STOPfacebook",
        Description: "ChromeExtension to disable pics and videos to save your time",
        Link: "https://github.com/zeyadetman/STOPfacebook",
        Language: "javascript"
    },
    {
        Name: "NotifyTweet",
        Description: "Chrome Extension will notify you if you get a new notification or message on twitter when you on another tab.",
        Link: "https://github.com/zeyadetman/NotifyTweet",
        Language: "javascript"
    },
    {
        Name: 'RemoveDuplicateFiles',
        Description: 'Remove Duplicated files.',
        Link: 'https://github.com/zeyadetman/RemoveDuplicateFiles',
        Language: 'python'
    }, {
        Name: 'Journal',
        Description: 'A note taking application that is heavily inspired by OneNote.',
        Link: 'https://github.com/lordadamson/Journal',
        Language: 'cpp'
    },
    {
        Name: "latexCalculator",
        Description: "This is a calculator that formats mathmatical expressions in the way you would normally write them down with pen and paper",
        Link: "https://github.com/lordadamson/latexCalculator",
        Language: "javascript"
    }, {
        Name: "Ketabuk",
        Description: "This is a website based on a philosophy.",
        Link: "https://github.com/ketabuk/Start-Here",
        Language: "javascript"
    }, {
        Name: "mini-express-boilerplate",
        Description: "A minimal Express boilerplate with passport user authentication, mongoose and some security setup configured",
        Link: "https://github.com/Fcmam5/mini-express-boilerplate",
        Language: "javascript"
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