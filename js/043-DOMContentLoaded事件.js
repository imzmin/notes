//window的load事件会在页面完全加载后触发，因为要等待很多外部资源加载完成，所以花费较长时间
//DOMContentLoaded事件会在DOM树构建完成后立即触发，而不用等待图片、js、css文件或其他资源加载完成
//相对于load事件，DOMContentLoaded可以让开发者在外部资源下载的同时就能指定事件处理程序，从而让用户能够更快的与页面交互
//要处理DOMContentLoaded事件，需要给document或者window添加事件处理程序（实际的事件目标是document，但是会冒泡到window）
document.addEventListener('DOMContentLoaded',(event)=>{
    console.log('content loaded')
})
//DOMContentLoaded事件的event对象中不包括你任何额外信息（除了target等于document）
//DOMContentLoaded事件通常用于添加事件处理程序或执行其他DOM操作，这个事件始终在load事件之前触发

//对于不支持DOMContentLoaded事件的浏览器，可以使用超时为0的setTimeout()函数，通过其回调来设置事件处理程序

setTimeout(()=>{
    //在这里添加事件处理程序
},0)

