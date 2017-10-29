var projectsList = ['zeyadetman/Calculator', 'HassanAzzam/mysql-no-query', 'zeyadetman/Stars-Todolist', 'zeyadetman/STOPfacebook',
    'zeyadetman/NotifyTweet', 'Fcmam5/mini-express-boilerplate',
    'zeyadetman/RemoveDuplicateFiles', 'lordadamson/Journal', 'lordadamson/latexCalculator', 'hima-Megahed/Online-Shopping-Management-System', 'hima-Megahed/Image-Quantization' /*'ketabuk/Start-Here'*/
]


getterpro();

function getterpro() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.github.com/search/repositories?q=topic%3Acounteributors",
        "method": "GET",
        "headers": {
            "authorization": "Basic emV5YWRldG1hbjomIzEzNmMxMDI2ODEwN205Nzc0MTA0NzVt"
        }
    }

    $.ajax(settings).done(function(response) {
        for (var to = 0; to < response["items"].length; to++) {
            projectsList.push(response["items"][to].full_name);
        }
    });

}


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



function start() {
    setTimeout(function() {
        for (var index = 0; index < projectsList.length; index++) {
            projectData(projectsList[index]);
        }
    }, 1000);
}

setTimeout(function() {
    $('<script />', { type: 'text/javascript', src: "https://buttons.github.io/buttons.js" }).appendTo('body');
}, 2000);

start();