import Vue from "./node_modules/vue/dist/vue.esm.browser.min.js";

const LIST_PAGE = "list.html";

let arcadeApp = new Vue({
    el: "#arcade-container",
    data: {
        listPage: LIST_PAGE,
        url: LIST_PAGE, // url for the iframe
        onList: true, // are we on the list page?
    },
    methods: {
        toList: function(ev) {
            ev.preventDefault();
            this.url = this.listPage;
        }
    },
    watch: {
        url: function (url, oldUrl) {
            this.onList = url.indexOf(this.listPage) === url.length - this.listPage.length;

            console.log(`navigating to ${url}, onList? ${this.onList}`);
        },
    },
    mounted: function() {
        document.body.classList.add("ready");
    }
});

window.nav = (url) => {
    arcadeApp.url = url;
};
