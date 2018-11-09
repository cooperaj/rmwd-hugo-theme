'use strict';

/**
 * Class that handles everything related to the navbar on the website.
 * 
 * Currently handles;
 *   1) The change of styles from transparent to not when page is scrolled.
 *   2) The opening and closing of the menu on mobile devices.
 *   3) The offsetting of anchor links so the navbar does not occlude them.
 */
export default class {
    constructor(element) {
        this.navbar = element;

        if (this.navbar !== null) {
            this._navbarInit();
        }
    }

    _navbarInit() {
        window.addEventListener('hashchange', evt => this._anchorOffset(evt));
        window.addEventListener('load', evt => {
            if (window.location.hash) this._anchorOffset(evt);
            this._scrollEvent(evt);
        });
        window.addEventListener('scroll', evt => this._scrollEvent(evt));
        document.addEventListener('DOMContentLoaded', evt => this._navbarEvent(evt));
    }

    _scrollEvent(evt) {
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            this.navbar.classList.add('is-scrolled');
        } else {
            this.navbar.classList.remove('is-scrolled');
        }
    }

    _anchorOffset(evt) {
        var hh = this.navbar.clientHeight;
        scrollBy(0, hh - (hh*2));
    }

    _navbarEvent(evt) {
        // Get the "navbar-burger" element
        const navbarBurger = document.querySelector('.navbar-burger');

        // Check if there is a navbar burger
        if (navbarBurger !== undefined) {
            navbarBurger.addEventListener('click', evt => {

                // Get the target from the "data-target" attribute
                var target = document.getElementById(navbarBurger.dataset.target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                navbarBurger.classList.toggle('is-active');
                target.classList.toggle('is-active');
            });
        }
    }
}