// var value = sessionStorage.getItem("key");console.log(value)
// if(value === null) {
// sessionStorage.setItem("key", 1); 
var _LoadingHtml = '<div id="load"><div class="load"><p>L</p><p>o</p><p>a</p><p>d</p><p>i</p><p>n</p><p>g</p></div><canvas id="d"></canvas></div>';  
document.write(_LoadingHtml);  
var anime=function(){var x={duration:1E3,delay:0,loop:!1,autoplay:!0,direction:"normal",easing:"easeOutElastic",elasticity:400,round:!1,begin:void 0,update:void 0,complete:void 0},M="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),e=function(){return{array:function(a){return Array.isArray(a)},object:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},html:function(a){return a instanceof NodeList||a instanceof
HTMLCollection},node:function(a){return a.nodeType},svg:function(a){return a instanceof SVGElement},number:function(a){return!isNaN(parseInt(a))},string:function(a){return"string"===typeof a},func:function(a){return"function"===typeof a},undef:function(a){return"undefined"===typeof a},"null":function(a){return"null"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},rgba:function(a){return/^rgba/.test(a)},hsl:function(a){return/^hsl/.test(a)},
color:function(a){return e.hex(a)||e.rgb(a)||e.rgba(a)||e.hsl(a)}}}(),y=function(){var a={},b={Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a,b){if(0===a||1===a)return a;var f=1-Math.min(b,998)/1E3,h=a/1-1;return-(Math.pow(2,10*h)*Math.sin(2*(h-f/(2*Math.PI)*Math.asin(1))*Math.PI/f))},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,f=4;a<((b=Math.pow(2,--f))-1)/11;);return 1/Math.pow(4,3-f)-7.5625*Math.pow((3*b-2)/
22-a,2)}};["Quad","Cubic","Quart","Quint","Expo"].forEach(function(a,d){b[a]=function(a){return Math.pow(a,d+2)}});Object.keys(b).forEach(function(c){var d=b[c];a["easeIn"+c]=d;a["easeOut"+c]=function(a,b){return 1-d(1-a,b)};a["easeInOut"+c]=function(a,b){return.5>a?d(2*a,b)/2:1-d(-2*a+2,b)/2}});a.linear=function(a){return a};return a}(),r=function(a){return e.string(a)?a:a+""},z=function(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},A=function(a){if(e.color(a))return!1;try{return document.querySelectorAll(a)}catch(b){return!1}},
t=function(a){return a.reduce(function(a,c){return a.concat(e.array(c)?t(c):c)},[])},n=function(a){if(e.array(a))return a;e.string(a)&&(a=A(a)||a);return e.html(a)?[].slice.call(a):[a]},B=function(a,b){return a.some(function(a){return a===b})},N=function(a,b){var c={};a.forEach(function(a){var f=JSON.stringify(b.map(function(b){return a[b]}));c[f]=c[f]||[];c[f].push(a)});return Object.keys(c).map(function(a){return c[a]})},C=function(a){return a.filter(function(a,c,d){return d.indexOf(a)===c})},u=
function(a){var b={},c;for(c in a)b[c]=a[c];return b},q=function(a,b){for(var c in b)a[c]=e.undef(a[c])?b[c]:a[c];return a},O=function(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,e){return b+b+c+c+e+e});var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);a=parseInt(b[1],16);var c=parseInt(b[2],16),b=parseInt(b[3],16);return"rgb("+a+","+c+","+b+")"},P=function(a){a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);var b=parseInt(a[1])/360,c=parseInt(a[2])/100,d=parseInt(a[3])/
100;a=function(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a};if(0==c)c=d=b=d;else var f=.5>d?d*(1+c):d+c-d*c,h=2*d-f,c=a(h,f,b+1/3),d=a(h,f,b),b=a(h,f,b-1/3);return"rgb("+255*c+","+255*d+","+255*b+")"},k=function(a){return/([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(a)[2]},D=function(a,b,c){return k(b)?b:-1<a.indexOf("translate")?k(c)?b+k(c):b+"px":-1<a.indexOf("rotate")||-1<a.indexOf("skew")?b+"deg":b},E=function(a,b){if((e.node(a)||
e.svg(a))&&B(M,b))return"transform";if((e.node(a)||e.svg(a))&&"transform"!==b&&v(a,b))return"css";if((e.node(a)||e.svg(a))&&(a.getAttribute(b)||a[b]))return"attribute";if(!e["null"](a[b])&&!e.undef(a[b]))return"object"},v=function(a,b){return getComputedStyle(a).getPropertyValue(z(b))},Q=function(a,b){var c=-1<b.indexOf("scale")?1:0,d=a.style.transform;if(!d)return c;for(var f=/(\w+)\((.+?)\)/g,h=[],e=[],p=[];h=f.exec(d);)e.push(h[1]),p.push(h[2]);d=p.filter(function(a,c){return e[c]===b});return d.length?
d[0]:c},F=function(a,b){switch(E(a,b)){case "transform":return Q(a,b);case "css":return v(a,b);case "attribute":return a.getAttribute(b)}return a[b]||0},G=function(a,b,c){if(e.color(b))return b=e.rgb(b)||e.rgba(b)?b:e.hex(b)?O(b):e.hsl(b)?P(b):void 0,b;if(k(b))return b;a=k(a.to)?k(a.to):k(a.from);!a&&c&&(a=k(c));return a?b+a:b},H=function(a){var b=/-?\d*\.?\d+/g;return{original:a,numbers:r(a).match(b)?r(a).match(b).map(Number):[0],strings:r(a).split(b)}},R=function(a,b,c){return b.reduce(function(b,
f,e){f=f?f:c[e-1];return b+a[e-1]+f})},S=function(a){a=a?t(e.array(a)?a.map(n):n(a)):[];return a.map(function(a,c){return{target:a,id:c}})},T=function(a,b){var c=[],d;for(d in a)if(!x.hasOwnProperty(d)&&"targets"!==d){var f=e.object(a[d])?u(a[d]):{value:a[d]};f.name=d;c.push(q(f,b))}return c},I=function(a,b,c,d){"transform"===c?(c=a+"("+D(a,b.from,b.to)+")",b=a+"("+D(a,b.to)+")"):(a="css"===c?v(d,a):void 0,c=G(b,b.from,a),b=G(b,b.to,a));return{from:H(c),to:H(b)}},U=function(a,b){var c=[];a.forEach(function(d,
f){var h=d.target;return b.forEach(function(b){var p=E(h,b.name);if(p){var k;k=b.name;var g=b.value,g=n(e.func(g)?g(h,f):g);k={from:1<g.length?g[0]:F(h,k),to:1<g.length?g[1]:g[0]};g=u(b);g.animatables=d;g.type=p;g.from=I(b.name,k,g.type,h).from;g.to=I(b.name,k,g.type,h).to;g.round=e.color(k.from)||g.round?1:0;g.delay=(e.func(g.delay)?g.delay(h,f,a.length):g.delay)/l.speed;g.duration=(e.func(g.duration)?g.duration(h,f,a.length):g.duration)/l.speed;c.push(g)}})});return c},V=function(a,b){var c=U(a,
b);return N(c,["name","from","to","delay","duration"]).map(function(a){var b=u(a[0]);b.animatables=a.map(function(a){return a.animatables});b.totalDuration=b.delay+b.duration;return b})},w=function(a,b){a.tweens.forEach(function(c){var d=c.from,f=a.duration-(c.delay+c.duration);c.from=c.to;c.to=d;b&&(c.delay=f)});a.reversed=a.reversed?!1:!0},J=function(a){var b=[],c=[];a.tweens.forEach(function(a){if("css"===a.type||"transform"===a.type)b.push("css"===a.type?z(a.name):"transform"),a.animatables.forEach(function(a){c.push(a.target)})});
return{properties:C(b).join(", "),elements:C(c)}},W=function(a){var b=J(a);b.elements.forEach(function(a){a.style.willChange=b.properties})},X=function(a){J(a).elements.forEach(function(a){a.style.removeProperty("will-change")})},Y=function(a,b){var c=a.path,d=a.value*b,f=function(f){f=f||0;return c.getPointAtLength(1<b?a.value+f:d+f)},e=f(),k=f(-1),f=f(1);switch(a.name){case "translateX":return e.x;case "translateY":return e.y;case "rotate":return 180*Math.atan2(f.y-k.y,f.x-k.x)/Math.PI}},Z=function(a,
b){var c=Math.min(Math.max(b-a.delay,0),a.duration)/a.duration,d=a.to.numbers.map(function(b,d){var e=a.from.numbers[d],k=y[a.easing](c,a.elasticity),e=a.path?Y(a,k):e+k*(b-e);return e=a.round?Math.round(e*a.round)/a.round:e});return R(d,a.to.strings,a.from.strings)},K=function(a,b){var c=void 0;a.time=Math.min(b,a.duration);a.progress=a.time/a.duration*100;a.tweens.forEach(function(a){a.currentValue=Z(a,b);var d=a.currentValue;a.animatables.forEach(function(b){var e=b.id;switch(a.type){case "css":b.target.style[a.name]=
d;break;case "attribute":b.target.setAttribute(a.name,d);break;case "object":b.target[a.name]=d;break;case "transform":c||(c={}),c[e]||(c[e]=[]),c[e].push(d)}})});if(c)for(var d in c)a.animatables[d].target.style.transform=c[d].join(" ");a.settings.update&&a.settings.update(a)},L=function(a){var b={};b.animatables=S(a.targets);b.settings=q(a,x);b.properties=T(a,b.settings);b.tweens=V(b.animatables,b.properties);b.duration=b.tweens.length?Math.max.apply(Math,b.tweens.map(function(a){return a.totalDuration})):
a.duration/l.speed;b.time=0;b.progress=0;b.running=!1;b.ended=!1;return b},m=[],l=function(a){var b=L(a),c={tick:function(){if(b.running){b.ended=!1;c.now=+new Date;c.current=c.last+c.now-c.start;K(b,c.current);var a=b.settings;a.begin&&c.current>=a.delay&&(a.begin(b),a.begin=void 0);c.current>=b.duration?(a.loop?(c.start=+new Date,"alternate"===a.direction&&w(b,!0),e.number(a.loop)&&a.loop--,c.raf=requestAnimationFrame(c.tick)):(b.ended=!0,a.complete&&a.complete(b),b.pause()),c.last=0):c.raf=requestAnimationFrame(c.tick)}}};
b.seek=function(a){K(b,a/100*b.duration)};b.pause=function(){b.running=!1;cancelAnimationFrame(c.raf);X(b);var a=m.indexOf(b);-1<a&&m.splice(a,1)};b.play=function(a){a&&(b=q(L(q(a,b.settings)),b));b.pause();b.running=!0;c.start=+new Date;c.last=b.ended?0:b.time;a=b.settings;"reverse"===a.direction&&w(b);"alternate"!==a.direction||a.loop||(a.loop=1);W(b);m.push(b);c.raf=requestAnimationFrame(c.tick)};b.restart=function(){b.reversed&&w(b);b.pause();b.seek(0);b.play()};b.settings.autoplay&&b.play();
return b};l.speed=1;l.list=m;l.remove=function(a){a=t(e.array(a)?a.map(n):n(a));for(var b=m.length-1;0<=b;b--)for(var c=m[b],d=c.tweens.length-1;0<=d;d--)for(var f=c.tweens[d],h=f.animatables.length-1;0<=h;h--)B(a,f.animatables[h].target)&&(f.animatables.splice(h,1),f.animatables.length||c.tweens.splice(d,1),c.tweens.length||c.pause())};l.easings=y;l.getValue=F;l.path=function(a){a=e.string(a)?A(a)[0]:a;return{path:a,value:a.getTotalLength()}};l.random=function(a,b){return Math.floor(Math.random()*
(b-a+1))+a};return l}();

var c = document.getElementById("d");
var ctx = c.getContext("2d");
var cH;
var cW;
var bgColor = "#078ddc";
var animations = [];
var circles = [];
var ratio;
var pointer = ("ontouchstart" in window || navigator.msMaxTouchPoints) ? "touchstart" : "mousedown";

var colorPicker = (function() {
	var colors = ["#72cdf4", "#bff3ff", "#078ddc"];
	var index = 0;

	function next() {
		index = index++ < colors.length - 1 ? index : 0;
		return colors[index];
	}

	function current() {
		return colors[index]
	}
	return {
		next: next,
		current: current
	}
})();

var removeAnimation = function(animation) {
		var index = animations.indexOf(animation);
		if (index > -1) animations.splice(index, 1);
	}

function calcPageFillRadius(x, y) {
	var l = Math.max(x - 0, cW - x);
	var h = Math.max(y - 0, cH - y);
	return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}

var addClickListeners = function() {
    document.addEventListener(pointer, function(e) {
        if (e.touches && !e.pageX) { // fixes android issue that broke... everything, basically
            e.pageX = e.touches[0].pageX;
            e.pageY = e.touches[0].pageY;
        }
        var currentColor = colorPicker.current();
        var nextColor = colorPicker.next();
        var targetR = calcPageFillRadius(e.pageX, e.pageY);
        var rippleSize = Math.min(200, (cW * .4));
        var minCoverDuration = 750;

        var pageFill = new Circle({
            x: e.pageX,
            y: e.pageY,
            r: 0,
            fill: nextColor
        });
        var fillAnimation = anime({
            targets: pageFill,
            r: targetR,
            duration: Math.max(targetR / 2, minCoverDuration),
            easing: "easeOutCubic",
            complete: function() {
                bgColor = pageFill.fill;
                removeAnimation(fillAnimation);
            }
        });

        var ripple = new Circle({
            x: e.pageX,
            y: e.pageY,
            r: 0,
            fill: currentColor,
            stroke: {
                width: 3,
                color: currentColor
            },
            opacity: 1
        });
        var rippleAnimation = anime({
            targets: ripple,
            r: rippleSize,
            opacity: 0,
            easing: "easeOutExpo",
            duration: 900,
            complete: removeAnimation
        });

        var particles = [];
        for (var i = 0; i < 32; i++) {
            var particle = new Circle({
                x: e.pageX,
                y: e.pageY,
                fill: currentColor,
                r: anime.random(24, 48)
            })
            particles.push(particle);
        }
        var particlesAnimation = anime({
            targets: particles,
            x: function(particle) {
                return particle.x + anime.random(rippleSize, -rippleSize);
            },
            y: function(particle) {
                return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
            },
            r: 0,
            easing: "easeOutExpo",
            duration: anime.random(1000, 1300),
            complete: removeAnimation
        });
        animations.push(fillAnimation, rippleAnimation, particlesAnimation);
    });
};

function extend(a, b) {
	for (var key in b) {
		if (b.hasOwnProperty(key)) {
			a[key] = b[key];
		}
	}
	return a;
}

var Circle = function(opts) {
    extend(this, opts);
}

Circle.prototype.draw = function() {
	ctx.globalAlpha = this.opacity || 1;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
	if (this.stroke) {
		ctx.strokeStyle = this.stroke.color;
		ctx.lineWidth = this.stroke.width;
		ctx.stroke();
	}
	if (this.fill) {
		ctx.fillStyle = this.fill;
		ctx.fill();
	}
	ctx.closePath();
	ctx.globalAlpha = 1;
}

var animate = anime({
	duration: Infinity,
	update: function() {
		ctx.fillStyle = bgColor;
		ctx.fillRect(0, 0, cW, cH);
		animations.forEach(function(anim) {
			anim.animatables.forEach(function(animatable) {
				animatable.target.draw();
			});
		});
	}
});

var resizeCanvas = function() {
    var devicePixelRatio = window.devicePixelRatio || 1;
    var backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;

    ratio = devicePixelRatio / backingStoreRatio;
    cW = window.innerWidth;
    cH = window.innerHeight;
    c.width = cW * ratio;
    c.height = cH * ratio;
    ctx.scale(ratio, ratio);
};

var init = (function() {
	window.addEventListener("resize", resizeCanvas);
	addClickListeners();
	resizeCanvas();
	if ( !! window.location.pathname.match(/fullcpgrid/)) {
		startFauxClicking();
	}
	var inactive = setTimeout(function() {
		fauxClick(cW / 2 / ratio, cH / 2 / ratio);
	}, 2000);
	document.addEventListener(pointer, function() {
		clearTimeout(inactive);
	})
})();

function startFauxClicking() {
	setInterval(function() {
		fauxClick(anime.random(cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
	}, 700);
}

function fauxClick(x, y) {
	var fclick = new Event("mousedown");
	fclick.pageX = x;
	fclick.pageY = y;
	document.dispatchEvent(fclick);
}

document.onreadystatechange = completeLoading;
  
function completeLoading() {  
    if (document.readyState == "complete") {  
        var loadingMask = document.getElementById('load');  
        loadingMask.className = 'disappear';
        setTimeout(function disappear(){
            loadingMask.parentNode.removeChild(loadingMask); 
        }, 500)
    }  
}  