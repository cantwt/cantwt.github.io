'use strict';

var display;

function init() {
    display = document.getElementById("status");
    display.addEventListener("click", handleClick, false);
    display.innerHTML = "Touch to Start";
}

function handleClick(event) {
    display.removeEventListener("click", handleClick, false);
    var myApp = new myNameSpace.MyApp();
}



this.myNameSpace = this.myNameSpace || {};
(function() {
    // the application
    function MyApp() {
        this.init();
    }

    MyApp.prototype = {
        displayMessage:null,
        
        instance: null,

        init: function() {
            this.displayMessage = document.getElementById("status");

            //if (!createjs.Sound.initializeDefaultPlugins()) {return;}
            
            var queue = new createjs.LoadQueue();
            var loadProxy = createjs.proxy(this.handleLoad, this);
            var instance;
            
            queue.installPlugin(createjs.Sound);
            createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.WebAudioPlugin]);
            queue.addEventListener('complete', loadProxy);
            queue.loadManifest([
                { id: 'Horn', src: 'AirHorn5.ogg', data: 1 }
            ]);

            this.displayMessage.innerHTML = "loading audio";
            
            document.addEventListener('keydown', createjs.proxy(function(event) {
                if(event.keyCode == 81) {
                    this.instance.pause();
                }
            }, this));
        },

        handleLoad: function(event) {
            createjs.Sound.play('Horn');
            this.displayMessage.innerHTML = "Playing Horn";
            this.displayMessage.addEventListener('click', createjs.proxy(this.handlePlayback, this));
        },
        
        handlePlayback: function(event) {
            this.instance = createjs.Sound.play('Horn', createjs.Sound.INTERRUPT_EARLY);
            console.log(this.instance);
        }
        
    }

    myNameSpace.MyApp = MyApp;
}());