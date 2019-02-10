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
            window.location = url;
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
