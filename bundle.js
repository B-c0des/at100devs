
const fs = require('fs');
const {Collection} = require('@iconify/json-tools');

let icons = [
    // Few Material Design icons
    'mdi-account', 'mdi-home-account',
    // Few FontAwesome 5 icons
    'fa-solid:arrow-alt-circle-down', 'fa-solid:arrow-alt-circle-left', 'fa-solid:arrow-alt-circle-right',
    // Few emojis
    'emojione-cat-face-with-wry-smile', 'emojione:clapping-hands'
];

let output = 'output.js';
let pretty = false;

// Sort icons by collections: filtered[prefix][array of icons]
let filtered = {};
icons.forEach(icon => {
    let parts = icon.split(':'),
        prefix;

    if (parts.length > 1) {
        prefix = parts.shift();
        icon = parts.join(':');
    } else {
        parts = icon.split('-');
        prefix = parts.shift();
        icon = parts.join('-');
    }
    if (filtered[prefix] === void 0) {
        filtered[prefix] = [];
    }
    if (filtered[prefix].indexOf(icon) === -1) {
        filtered[prefix].push(icon);
    }
});

// Parse each collection
let code = '';
Object.keys(filtered).forEach(prefix => {
    let collection = new Collection();
    if (!collection.loadIconifyCollection(prefix)) {
        console.error('Error loading collection', prefix);
        return;
    }

    code += collection.scriptify({
        icons: filtered[prefix],
        optimize: true,
        pretty: pretty
    });
});

// Save code
fs.writeFileSync(output, code, 'utf8');
console.log('Saved bundle to', output, ' (' + code.length + ' bytes)');