
var FamousEngine = require('famous/core/FamousEngine');
var DOMElement = require('famous/dom-renderables/DOMElement');

var Size = require('famous/components/Size');
var Position = require('famous/components/Position');

var Rotation = require('famous/components/Rotation');
var Position = require('famous/components/Position');


var MenuPanel = require('./menuPanel.js');
var LayoutManager = require('./layoutManager.js');
var MainDisplayPanel = require('./mainDisplayPanel.js');
//var CategorySelPanel = require('./catSelPanel.js');




function App(scene) {

    LayoutManager.calcAppDimensions();

    var APP_WIDTH  = LayoutManager.getAppDimensionWidth();
    var APP_HEIGHT = LayoutManager.getAppDimensionHeight();;
    var APP_DEPTH = 100;



    var that = this;

    this.rootNode = scene.addChild();
    this.rootNode.selElement = null;

    this.rootNode.setProportionalSize(1,1,1)
        .setPosition(0,0);

    this.rootWidth = APP_WIDTH ;
    this.rootHeight = APP_HEIGHT;

    //var rootCam = new Camera(scene);
    //rootCam.setDepth(100000);
    //rootCam.setFlat();
    this.context = {
      appscene : scene,
      approot  : this
    }



    //Create the background Node and Div for the Signage
    this.backgroundNode = this.rootNode.addChild();
    this.backgroundDIV = new DOMElement(this.backgroundNode, {
       //content : "Famous Collaboration",
       properties:{
         'background-color':'rgb(218, 214, 214)',


       }
    });

    this.rootNode.headerNode = this.rootNode.addChild();
    this.rootNode.headerNode.setProportionalSize(1,0.1);

    this.headerDIV = new DOMElement(this.rootNode.headerNode, {
       content : "SourceRiver",
       properties:{
         /*'background-color':'rgb(96, 87, 212)',*/
         'background': '-webkit-linear-gradient(left, rgb(36, 48, 151), rgb(142, 142, 217))',
         'color' : 'white',
         'font-size' : '8vh',
         'font-style': 'italic'
       }
    });

    this.rootNode.menuPanel = new MenuPanel(this.rootNode.addChild());
    this.rootNode.mainDisplayPanel = new MainDisplayPanel(this.rootNode.addChild());

    //Add size change component to RootNode
    this.rootNode.addComponent({
        id : null,
        node : null,
        onMount: function (node) {
            this.id = node.addComponent(this);
            node.requestUpdate(this.id);
            this.node = node;
        },
        onSizeChange: function(sizew,sizeh){
          console.log(sizew,sizeh);

          LayoutManager.calcAppDimensions();
          console.log("LayoutManager width " + LayoutManager.getAppDimensionWidth());



          APP_WIDTH  = window.innerWidth;
          APP_HEIGHT = window.innerHeight;

          this.node.menuPanel.getParentNode().setPosition(0, LayoutManager.getAppHeaderHeight());
          this.node.mainDisplayPanel.getParentNode().setPosition(0, LayoutManager.getAppHeaderHeight() + LayoutManager.getAppMenuHeight());

        }
    });



    this.backgroundNode.onReceive = function(event,payload){

      if(event==='click'){
          that.context.appscene.emit("deselect");
      }



    }


    this.rootNode.onReceive = function(event,payload){



    }

}



module.exports = App;
