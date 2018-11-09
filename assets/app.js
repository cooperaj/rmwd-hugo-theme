'use strict';

import NavBar from './javascript/navbar.js';
import Gallery from './javascript/gallery.js';

const nav = new NavBar(document.querySelector('nav.is-fixed-top'));

var instaImages = Array.prototype.slice.call(document.querySelectorAll('.post .post-image'), 0);
instaImages.forEach(imageDiv => {
    var image = new Gallery(imageDiv);
});

var galleries = Array.prototype.slice.call(document.querySelectorAll('div.gallery'), 0);
galleries.forEach(galleryDiv => {
    var gallery = new Gallery(galleryDiv);
});