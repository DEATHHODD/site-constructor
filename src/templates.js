import {row, col, css} from './utils'

function title(block){
    
    const {tag = 'h1', styles} = block.options
    return row(col(`<h1>${block.value}</h1>`), css(styles))
}

function text(block) {
    return row(col(`<p>${block.value}</p>`), css(block.options.styles))
}

function columns(block) {
    const html = block.value.map(item => col(item));
    return row(html.join(''), css(block.options.styles))
    
}

function image(block) {
    const {imageStyles: is, alt = '', styles} = block.options
    return row(`<img src="${block.value}" alt="${alt}" style="${css(is)}"/>`, css(styles))
}

export const templates = {
    title,
    text,
    columns, 
    image
}