'use strict';

export default class {
    constructor(element) {
        this.navbar = element;

        if (this.navbar !== null) {
            this._scrollInit();
        }
    }

    _scrollInit() {
        window.onscroll = evt => this._scrollEvent(evt)
        document.addEventListener('DOMContentLoaded', evt => this._navbarEvent(evt))
    }

    _scrollEvent(evt) {
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            this.navbar.classList.add("is-scrolled");
        } else {
            this.navbar.classList.remove("is-scrolled");
        }
    }

    _navbarEvent(evt) {
        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(function ($el) {
                $el.addEventListener('click', function () {

                    // Get the target from the "data-target" attribute
                    var target = $el.dataset.target;
                    var $target = document.getElementById(target);

                    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                    $el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    }
}