export const refresh = (title) => {
    document.title = title;
    let iframe = document.createElement('iframe');
    iframe.src = require('../assets/logo.png');
    iframe.setAttribute('style', 'display:none;');
    let loadFn = function () {
        setTimeout(function () {
            iframe.removeEventListener('load', loadFn);
            document.body.removeChild(iframe);
            console.info('Page Title IS ' + title);
            iframe = null;
            loadFn = null;
        }, 10)
    }
    iframe.addEventListener('load', loadFn);
    document.body.appendChild(iframe);
};