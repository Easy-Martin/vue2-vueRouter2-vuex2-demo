export const refresh = (title) => {
  document.title = title
  let iframe = document.createElement('iframe')
  iframe.src = require('../assets/logo.png')
  iframe.setAttribute('style', 'display:none;')
  let loadFn = function () {
    setTimeout(function () {
      iframe.removeEventListener('load', loadFn)
      document.body.removeChild(iframe)
      console.info('Page Title IS ' + title)
      iframe = null
      loadFn = null
    }, 10)
  }
  iframe.addEventListener('load', loadFn)
  document.body.appendChild(iframe)
}

export const Ajax =  function (options){
    return $.ajax({
        type:options.type,
        data:options.data,
        url:options.url,
        dataType:'json',
        beforeSend:function(){
            $.showLoading();
        }
    })
}
export const http = (options) => {
  if (!options.url) {
    throw new Error('缺少必要参数')
  }
  let xhr = new XMLHttpRequest()
 
  let type = options.type.toLowerCase() || 'get';
  

  xhr.addEventListener('progress', options.progress, false);
  xhr.upload.addEventListener('progress', options.progress, false);
  xhr.addEventListener('load', function(evt){
      options.success(JSON.parse(evt.target.responseText));
  }, false)
  xhr.addEventListener('error', options.error, false)
  xhr.addEventListener('abort', options.abort, false)
  
  if (options.data) {
    if(type == 'post'){
        let myForm = new FormData();
        for (let key in options.data) {
            myForm.append(key, options.data[key]);
        }
        xhr.open(type, options.url);
        xhr.send(myForm);
    }else{
        var str = '?';
        for (let key in options.data) {
            str += (key + '=' + options.data[key] + '&');
        }
        xhr.open(type, options.url + str);
        xhr.send();
    }
  }else{
    xhr.open(type, options.url);
    xhr.send();
  }

  
}
