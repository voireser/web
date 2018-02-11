// var value = sessionStorage.getItem("key");console.log(value)
// if(value === null) {
    // sessionStorage.setItem("key", 1); 
    var _LoadingHtml = '<div id="load"><div class="load"><p>L</p><p>o</p><p>a</p><p>d</p><p>i</p><p>n</p><p>g</p></div></div>';  
    document.write(_LoadingHtml);  
    document.onreadystatechange = completeLoading;
// }
  
function completeLoading() {  
    if (document.readyState == "complete") {  
        var loadingMask = document.getElementById('load');  
        loadingMask.className = 'disappear';
        setTimeout(function disappear(){
            loadingMask.parentNode.removeChild(loadingMask); 
        }, 500)
    }  
}  