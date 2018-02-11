//在页面未加载完毕之前显示的loading Html自定义内容  
var _LoadingHtml = '<div id="load"><div class="load"><p>L</p><p>o</p><p>a</p><p>d</p><p>i</p><p>n</p><p>g</p></div></div>';  
//呈现loading效果  
document.write(_LoadingHtml);  
  
//window.onload = function () {  
//    var loadingMask = document.getElementById('loadingDiv');  
//    loadingMask.parentNode.removeChild(loadingMask);  
//};  
  
//监听加载状态改变  
document.onreadystatechange = completeLoading;  
  
//加载状态为complete时移除loading效果  
function completeLoading() {  
    if (document.readyState == "complete") {  
        var loadingMask = document.getElementById('load');  
        loadingMask.parentNode.removeChild(loadingMask);  
    }  
}  