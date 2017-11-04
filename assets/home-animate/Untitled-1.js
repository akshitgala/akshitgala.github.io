(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Untitled_1_atlas_", frames: [[223,0,184,506],[0,508,204,506],[206,508,204,506],[0,0,221,506]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.jump1pngcopy2 = function() {
	this.spriteSheet = ss["Untitled_1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jump2 = function() {
	this.spriteSheet = ss["Untitled_1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.jump2pngcopy = function() {
	this.spriteSheet = ss["Untitled_1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.jump3 = function() {
	this.spriteSheet = ss["Untitled_1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jump3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.851,0.858);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,188.2,434), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jump1pngcopy2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,146.1,401.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jump2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,204,506), null);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_118 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(118).call(this.frame_118).wait(118));

	// Layer 7
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(576.7,354.2,1,1,0,0,0,73,200.8);

	this.instance_1 = new lib.jump2pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(848,49);

	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1292.1,370.4,1,1,0,0,0,94,217);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},118).to({state:[]},15).wait(103));

	// Layer 5
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(2031,370,1,1,0,0,0,94,217);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).wait(1).to({regX:94.1,x:2018.4},0).wait(1).to({x:2005.6},0).wait(1).to({x:1992.9},0).wait(1).to({x:1980.1},0).wait(1).to({x:1967.4},0).wait(1).to({x:1954.7},0).wait(1).to({x:1941.9},0).wait(1).to({x:1929.2,y:370.1},0).wait(1).to({x:1916.4},0).wait(1).to({x:1903.7},0).wait(1).to({x:1891},0).wait(1).to({x:1878.2},0).wait(1).to({x:1865.5},0).wait(1).to({x:1852.7},0).wait(1).to({x:1840},0).wait(1).to({x:1827.3},0).wait(1).to({x:1814.5},0).wait(1).to({x:1801.8},0).wait(1).to({x:1789},0).wait(1).to({x:1776.3},0).wait(1).to({x:1763.6},0).wait(1).to({x:1750.8,y:370.2},0).wait(1).to({x:1738.1},0).wait(1).to({x:1725.3},0).wait(1).to({x:1712.6},0).wait(1).to({x:1699.9},0).wait(1).to({x:1687.1},0).wait(1).to({x:1674.4},0).wait(1).to({x:1661.7},0).wait(1).to({x:1648.9},0).wait(1).to({x:1636.2},0).wait(1).to({x:1623.4},0).wait(1).to({x:1610.7},0).wait(1).to({x:1598},0).wait(1).to({x:1585.2},0).wait(1).to({x:1572.5},0).wait(1).to({x:1559.7,y:370.3},0).wait(1).to({x:1547},0).wait(1).to({x:1534.3},0).wait(1).to({x:1521.5},0).wait(1).to({x:1508.8},0).wait(1).to({x:1496},0).wait(1).to({x:1483.3},0).wait(1).to({x:1470.6},0).wait(1).to({x:1457.8},0).wait(1).to({x:1445.1},0).wait(1).to({x:1432.3},0).wait(1).to({x:1419.6},0).wait(1).to({x:1406.9},0).wait(1).to({x:1394.1},0).wait(1).to({x:1381.4,y:370.4},0).wait(1).to({x:1368.6},0).wait(1).to({x:1355.9},0).wait(1).to({x:1343.2},0).wait(1).to({x:1330.4},0).wait(1).to({x:1317.7},0).wait(1).to({x:1304.9},0).wait(1).to({x:1292.2},0).to({_off:true},1).wait(118));

	// Layer 4
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-102,353.8,1,1,0,0,0,73,200.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).wait(1).to({x:-90.2},0).wait(1).to({x:-78.5},0).wait(1).to({x:-66.8},0).wait(1).to({x:-55.1},0).wait(1).to({x:-43.4},0).wait(1).to({x:-31.7},0).wait(1).to({x:-20},0).wait(1).to({x:-8.3,y:353.9},0).wait(1).to({x:3.4},0).wait(1).to({x:15.1},0).wait(1).to({x:26.8},0).wait(1).to({x:38.5},0).wait(1).to({x:50.2},0).wait(1).to({x:61.9},0).wait(1).to({x:73.5},0).wait(1).to({x:85.2},0).wait(1).to({x:96.9},0).wait(1).to({x:108.6},0).wait(1).to({x:120.3},0).wait(1).to({x:132},0).wait(1).to({x:143.7},0).wait(1).to({x:155.4,y:354},0).wait(1).to({x:167.1},0).wait(1).to({x:178.8},0).wait(1).to({x:190.5},0).wait(1).to({x:202.2},0).wait(1).to({x:213.9},0).wait(1).to({x:225.6},0).wait(1).to({x:237.3},0).wait(1).to({x:249},0).wait(1).to({x:260.7},0).wait(1).to({x:272.4},0).wait(1).to({x:284.1},0).wait(1).to({x:295.8},0).wait(1).to({x:307.5},0).wait(1).to({x:319.2},0).wait(1).to({x:330.9,y:354.1},0).wait(1).to({x:342.6},0).wait(1).to({x:354.3},0).wait(1).to({x:366},0).wait(1).to({x:377.7},0).wait(1).to({x:389.4},0).wait(1).to({x:401.1},0).wait(1).to({x:412.8},0).wait(1).to({x:424.5},0).wait(1).to({x:436.2},0).wait(1).to({x:447.9},0).wait(1).to({x:459.6},0).wait(1).to({x:471.3},0).wait(1).to({x:483},0).wait(1).to({x:494.7,y:354.2},0).wait(1).to({x:506.4},0).wait(1).to({x:518.1},0).wait(1).to({x:529.8},0).wait(1).to({x:541.5},0).wait(1).to({x:553.2},0).wait(1).to({x:564.9},0).wait(1).to({x:576.7},0).to({_off:true},1).wait(118));

	// Layer 3
	this.instance_5 = new lib.jump2pngcopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(848,49);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({_off:true},59).wait(118));

	// Layer 1
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(948,908,1,1,0,0,0,102,253);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({y:897.8},0).wait(1).to({y:887.5},0).wait(1).to({y:877.3},0).wait(1).to({y:867.1},0).wait(1).to({y:856.8},0).wait(1).to({y:846.6},0).wait(1).to({y:836.3},0).wait(1).to({y:826.1},0).wait(1).to({y:815.9},0).wait(1).to({y:805.6},0).wait(1).to({y:795.4},0).wait(1).to({y:785.2},0).wait(1).to({y:774.9},0).wait(1).to({y:764.7},0).wait(1).to({y:754.5},0).wait(1).to({y:744.2},0).wait(1).to({y:734},0).wait(1).to({y:723.7},0).wait(1).to({y:713.5},0).wait(1).to({y:703.3},0).wait(1).to({y:693},0).wait(1).to({y:682.8},0).wait(1).to({y:672.5},0).wait(1).to({y:662.3},0).wait(1).to({y:652.1},0).wait(1).to({y:641.8},0).wait(1).to({y:631.6},0).wait(1).to({y:621.4},0).wait(1).to({y:611.1},0).wait(1).to({y:600.9},0).wait(1).to({y:590.6},0).wait(1).to({y:580.4},0).wait(1).to({y:570.2},0).wait(1).to({y:559.9},0).wait(1).to({y:549.7},0).wait(1).to({y:539.5},0).wait(1).to({y:529.2},0).wait(1).to({y:519},0).wait(1).to({y:508.7},0).wait(1).to({y:498.5},0).wait(1).to({y:488.3},0).wait(1).to({y:478},0).wait(1).to({y:467.8},0).wait(1).to({y:457.6},0).wait(1).to({y:447.3},0).wait(1).to({y:437.1},0).wait(1).to({y:426.8},0).wait(1).to({y:416.6},0).wait(1).to({y:406.4},0).wait(1).to({y:396.1},0).wait(1).to({y:385.9},0).wait(1).to({y:375.7},0).wait(1).to({y:365.4},0).wait(1).to({y:355.2},0).wait(1).to({y:344.9},0).wait(1).to({y:334.7},0).wait(1).to({y:324.5},0).wait(1).to({y:314.2},0).wait(1).to({y:304},0).to({_off:true},1).wait(176));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1806,953.5,204,506);
// library properties:
lib.properties = {
	id: '3D13931F5245694EAF0F2EAE22536262',
	width: 1920,
	height: 597,
	fps: 60,
	color: "#424242",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/Untitled_1_atlas_.png", id:"Untitled_1_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3D13931F5245694EAF0F2EAE22536262'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;