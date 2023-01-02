const statsExtractor = (content) => {
    let els = JSON.parse(content).htmlElements;
    return els.tags.concat(els.classes, els.ids);
}

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [ './hugo_stats.json' ],
    safelist: {
        standard: ['is-active', 'is-scrolled', 'highlight', 'notification'],
        deep: [/content$/, /viewer-.*/, /chroma$/]
    },
    extractors: [
        { 
            extractor: statsExtractor,
            extensions: ['json']
        }
    ]
});

module.exports = {
     plugins: [
         ...(process.env.HUGO_ENVIRONMENT === 'production' ? [ purgecss ] : [])
     ]
 };
