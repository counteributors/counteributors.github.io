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

function projectData(params) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://api.github.com/repos/${params}`,
        "method": "GET",
        "headers": {
            "authorization": "Basic emV5YWRldG1hbjomIzEzNmMxMDI2ODEwN205Nzc0MTA0NzVt"
        }
    }

    $.ajax(settings).done(function(response) {
        //console.log(response);
        var lan = response.language;
        if (lan == 'C++') lan = 'cpp';
        else if (lan == 'C#') lan = 'csharp';
        $('.container').append(`
        <div class="col-md-2 proj ${lan}">
        <h4><a href="${response.html_url}" target="_blank">${response.name}</a></h4>
        <span>${response.language}</span>
        <p>${response.description}</p>
        <ul class="text-center social">
        <li><a class="twitter-share-button" href="https://twitter.com/share" data-text="Check this project" data-url="${ response.html_url}" data-hashtags="counteributors" data-via="counteributors">Tweet</a>
        </li>
        <li><a class="github-button" href="${response.html_url+'/fork'}" data-icon="octicon-repo-forked" data-show-count="false" target="_blank">Fork</a>
        </li>
        </ul>
        </div>
        `);
        try {
            twttr.widgets.load();
        } catch (err) {}
    });
}

var projectsList = ['zeyadetman/Calculator', 'HassanAzzam/mysql-no-query', 'zeyadetman/Image-TextSteganography', 'zeyadetman/Stars-Todolist', 'zeyadetman/STOPfacebook',
    'zeyadetman/NotifyTweet', 'Fcmam5/mini-express-boilerplate',
    'zeyadetman/RemoveDuplicateFiles', 'lordadamson/Journal', 'lordadamson/latexCalculator' /*'ketabuk/Start-Here'*/
]

function start() {
    for (var index = 0; index < projectsList.length; index++) {
        projectData(projectsList[index]);
    }
}
setTimeout(function() {
    $('<script />', { type: 'text/javascript', src: "https://buttons.github.io/buttons.js" }).appendTo('body');
}, 1000);

start();