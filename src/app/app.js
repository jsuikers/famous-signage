
var FamousEngine = require('famous/core/FamousEngine');
var DOMElement = require('famous/dom-renderables/DOMElement');

var Size = require('famous/components/Size');
var Position = require('famous/components/Position');

var Rotation = require('famous/components/Rotation');
var Position = require('famous/components/Position');


var MenuPanel = require('./menuPanel.js');
var LayoutManager = require('./layoutManager.js');
var MainDisplayPanel = require('./mainDisplayPanel.js');
var CatMenuDisplayPanel = require('./catMenuDisplayPanel.js');





function App(scene) {

    LayoutManager.calcAppDimensions();

    var APP_WIDTH  = LayoutManager.getAppDimensionWidth();
    var APP_HEIGHT = LayoutManager.getAppDimensionHeight();;
    var APP_DEPTH = 100;



    var that = this;

    this.rootNode = scene.addChild();
    this.rootNode.selElement = null;

    this.rootNode.setProportionalSize(1,1,1)
        .setAlign(0,0);

    this.rootWidth = APP_WIDTH ;
    this.rootHeight = APP_HEIGHT;

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
    this.rootNode.headerNode.setProportionalSize(1,0.1).setPosition(0,0,100);

    this.headerDIV = new DOMElement(this.rootNode.headerNode, {
       content : "JobRiver",
       properties:{
         /*'background-color':'rgb(96, 87, 212)',*/
         'background': '-webkit-linear-gradient(left, rgb(36, 48, 151), rgb(142, 142, 217))',
         'color' : 'white',
         'font-size' : '8vh',
         'font-style': 'italic'
       }
    });

    this.rootNode.menuPanel = new MenuPanel(this.rootNode.addChild(),this.context);
    this.rootNode.mainDisplayPanel = new MainDisplayPanel(this.rootNode.addChild(),this.context);

    this.rootNode.catSelPanel = new CatMenuDisplayPanel(this.rootNode.addChild(),this.context);



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

          //this.node.menuPanel.getParentNode().setPosition(0, LayoutManager.getAppHeaderHeight());
          //this.node.mainDisplayPanel.getParentNode().setPosition(0, LayoutManager.getAppHeaderHeight() + LayoutManager.getAppMenuHeight());

        }
    });



    this.backgroundNode.onReceive = function(event,payload){

      if(event==='click'){
          that.context.appscene.emit("deselect");
      }



    }


    this.rootNode.onReceive = function(event,payload){

      console.log(event,payload);
      if(event==='menuchange'){
        if(payload == 1){
          that.activateCatMenu();
        } else if (payload == 0){
          that.activateMainDisplay();
          that.rootNode.menuPanel.changeCaption("All Categories");
        }
      } else if(event==='triggercat') {
        that.activateCatDisplay(payload);
        that.rootNode.menuPanel.changeCaption(payload);

      } else if(event==='jobdetails') {
        that.activateJobDetailsDisplay(payload);

      } else if(event==='removeoverlay') {
        that.deactivateJobDetailsDisplay();
      }

    }

}

App.prototype.activateCatMenu = function(){

  this.rootNode.mainDisplayPanel.halt();
  this.rootNode.catSelPanel.show();

}


App.prototype.activateMainDisplay = function(){

  this.rootNode.mainDisplayPanel.activateMainDisplay();

}


App.prototype.activateCatDisplay = function(catname){

  this.rootNode.mainDisplayPanel.activateCatDisplay(catname);
  this.rootNode.catSelPanel.hide();
}

App.prototype.activateJobDetailsDisplay = function(jobcode){



  for(var i = 0; i < jobList.jobs.length;i++){

    if(jobList.jobs[i]['Code'] == jobcode){

        this.rootNode.mainDisplayPanel.activateJobDetailsDisplay(jobList.jobs[i]);
        this.rootNode.menuPanel.setOverlayMode(jobcode);
        break;
    }

  }

}

App.prototype.deactivateJobDetailsDisplay = function(){

  this.rootNode.mainDisplayPanel.deactivateJobDetailsDisplay();
  this.rootNode.menuPanel.unsetOverlayMode();
}



module.exports = App;
