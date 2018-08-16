var projectsList = ['zeyadetman/Calculator', 'HassanAzzam/mysql-no-query', 'zeyadetman/Stars-Todolist', 'zeyadetman/STOPfacebook',
    'zeyadetman/NotifyTweet', 'Fcmam5/mini-express-boilerplate',
    'zeyadetman/RemoveDuplicateFiles', 'lordadamson/Journal', 'lordadamson/latexCalculator', 'hima-Megahed/Online-Shopping-Management-System', 'hima-Megahed/Image-Quantization' /*'ketabuk/Start-Here'*/
]

var avatars = [
    {}
]



const url = 'https://api.github.com/search/repositories?q=topic%3Acounteributors';
fetch(url, {
    "async": true,
    "crossDomain": true,
    "method": "GET",
    "headers": {
        "authorization": "Basic emV5YWRldG1hbjomIzEzNmMxMDI2ODEwN205Nzc0MTA0NzVt"
    }
}).then(res => res.json())
    .then(response => {
        console.log(response);
        for (var to = 0; to < response["items"].length; to++) {
            projectsList.push(response["items"][to].full_name);
            console.log(response["items"][to].owner.avatar_url);
            avatars[response["items"][to].full_name] = response["items"][to].owner.avatar_url;

        }
    })
    .then(() => {
        for (var index = 0; index < projectsList.length; index++) {
            projectData(projectsList[index]);
        }
    });



function projectData(params) {
    const url = `https://api.github.com/repos/${params}`;
    fetch(url, {
        "async": true,
        "crossDomain": true,
        "method": "GET",
        "headers": {
            "authorization": "Basic emV5YWRldG1hbjomIzEzNmMxMDI2ODEwN205Nzc0MTA0NzVt"
        }
    }).then(response => response.json()).then(response => {
        var lan = response.language;
        var ava = "";
        if (avatars[params] == undefined)
            ava = `./assets/avatars/${(Math.floor(Math.random() * 8) + 1)}.png`;
        else ava = avatars[params];
        if (lan == 'C++') lan = 'cpp';
        else if (lan == 'C#') lan = 'csharp';
        if (avatars[params] !== undefined) {
            $('.container').append(`
        <div class="col-md-2 proj ${lan}">
        <img src="${ava}" class="profi">
        <h4><a href="${response.html_url}" target="_blank">${response.name}</a></h4>
        <span>${response.language}</span>
        <p>${response.description}</p>
        <ul class="text-center social">
        <li><a class="twitter-share-button" href="https://twitter.com/share" data-text="Check this project" data-url="${ response.html_url}" data-hashtags="counteributors" data-via="counteributors">Tweet</a>
        </li>
        <li><a class="github-button" href="${response.html_url + '/fork'}" data-icon="octicon-repo-forked" data-show-count="false" target="_blank">Fork</a>
        </li>
        </ul>
        </div>
        `);
            try {
                twttr.widgets.load();
            } catch (err) {}
        }
    });
}

setTimeout(function () {
    $('<script />', {type: 'text/javascript', src: "https://buttons.github.io/buttons.js"}).appendTo('body');
}, 3000);