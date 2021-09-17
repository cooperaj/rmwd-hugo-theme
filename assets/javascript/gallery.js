'use strict';

import Viewer from 'viewerjs';

/**
 * Create a mobile friendly lightbox browser around image galleries.
 */
export default class {
    constructor(element) {
        this.gallery = element;

        if (this.gallery !== null) {
            this._galleryInit();
        }
    }

    _galleryInit() {
        this.gallery = new Viewer(this.gallery, {
            navbar: false,
            title: false,
            movable: false,
            toolbar: {
                zoomIn: 1,
                zoomOut: 1
            },
            inheritedAttributes: ['crossOrigin', 'decoding', 'isMap', 'loading', 'referrerPolicy', 'useMap'],
            filter: image => this._filterImage(image),
        });
    }
    
    /**
     * Processes a passed in img HTMLELement and checks we would want to
     * "lightboxify" it. 
     * 
     * Also ensure the image's link does not work since we don't want to follow
     * it anymore.
     */
    _filterImage(image) {
        var figure = this._findParentElement(image, "FIGURE");
        if (figure !== null && ! figure.classList.contains('video')) {
            var link = this._findParentElement(image, "A");
            link.addEventListener('click', evt => {
                evt.preventDefault();
            })
            return true;
        }
    }

    /**
     * Traverse up the DOM when given an element to find the parent that matches 
     * the passed in tag.
     */
    _findParentElement(element, tag) {
        while (element.parentNode) {
            element = element.parentNode;
            if (element.tagName === tag) return element;
        }

        return null;
    }
}