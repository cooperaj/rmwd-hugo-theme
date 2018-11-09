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
            navbar: 0,
            title: 0,
            toolbar: {
                zoomIn: 1,
                zoomOut: 1
            },
            filter: image => this._filterImage(image)
        });
    }
    
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

    _findParentElement(element, tag) {
        while (element.parentNode) {
            element = element.parentNode;
            if (element.tagName === tag) return element;
        }

        return null;
    }
}