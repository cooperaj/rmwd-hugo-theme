'use strict';

import NavBar from './navbar.js';
import Gallery from './gallery.js';

const nav = new NavBar(document.querySelector('nav.is-fixed-top'));

var postImages = Array.prototype.slice.call(document.querySelectorAll('article.post .post-image, article.post .post-body'), 0);
postImages.forEach(imageDiv => {
    var image = new Gallery(imageDiv);
});