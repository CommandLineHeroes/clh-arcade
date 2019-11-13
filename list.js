import Vue from "./node_modules/vue/dist/vue.esm.browser.min.js";
import PfeIcon from "./node_modules/@patternfly/pfe-icon/dist/pfe-icon.min.js";
import "./node_modules/@patternfly/pfe-cta/dist/pfe-cta.min.js";
import "./node_modules/@patternfly/pfe-number/dist/pfe-number.min.js";
import "./node_modules/@patternfly/pfe-card/dist/pfe-card.min.js";

PfeIcon.addIconSet(
  "far",
  "/icons/font-awesome/regular",
  (iconName, setName, path) => {
    const name = iconName.replace("far-", "");
    return `${path}/${name}.svg`;
  }
);

PfeIcon.addIconSet(
  "fas",
  "/icons/font-awesome/solid",
  (iconName, setName, path) => {
    const name = iconName.replace("fas-", "");
    return `${path}/${name}.svg`;
  }
);

PfeIcon.addIconSet(
  "fab",
  "/icons/font-awesome/brands",
  (iconName, setName, path) => {
    const name = iconName.replace("fab-", "");
    return `${path}/${name}.svg`;
  }
);



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
            let isCustomProtocol = !/^http/.test(url) && /:\/\//.test(url);

            console.log('list.nav clicked: ', url, isRemote, isCustomProtocol);

            // send click event to google analytics
            window.ga('send', 'event', 'games', 'play', url);

		console.log(url);

		if (isCustomProtocol) {
			window.location = url;
		}
		else if (isRemote) {
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
            const gamesWebroot = `http://localhost:8766`;
            const gamesJsonUrl = `${gamesWebroot}/games.json`;
            this.games = await fetch(gamesJsonUrl).then(rsp => rsp.json());
            this.games.forEach(game => {
                game.thumb = `${gamesWebroot}/${game.thumb}`;
            });
		console.log(this.games)
        }
    },
    mounted: function() {
        document.body.classList.add("ready");
    }
});


listApp.populateGames();

// window.addEventListener("load", () => window.top.nav(window.location.href));
