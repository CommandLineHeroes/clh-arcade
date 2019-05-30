import Vue from "./node_modules/vue/dist/vue.esm.browser.min.js";

let listApp = new Vue({
    el: "#arcade-list-container",
    data: {
        games: []
    },
    methods: {
        nav: function(ev) {
            ev.preventDefault();

            let url = ev.currentTarget.getAttribute('data-href');

            let isRemote = /^http/.test(url);

            console.log('list.nav clicked: ', url, isRemote);

            // send click event to google analytics
            window.ga('send', 'event', 'games', 'play', url);


            if (isRemote) {
                let proxyUrl = url.replace(/^https?:\/\//, `${location.origin}/`);
		console.log(`game hosted at remote URL, proxying via ${proxyUrl}`);
                window.location = proxyUrl;
            }
            else {
                let nonProxyUrl = location.href.replace(/\/[^/]*$/, '/') + url + '/';
                window.location = nonProxyUrl;
            }
        },
        populateGames: async function() {
            this.games = await fetch("games.json").then(rsp => rsp.json());
        }
    },
    mounted: function() {
        document.body.classList.add("ready");
    }
});


listApp.populateGames();

// window.addEventListener("load", () => window.top.nav(window.location.href));
