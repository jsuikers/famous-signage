var DOMElement = require('famous/dom-renderables/DOMElement');
var GestureHandler = require('famous/components/GestureHandler');
var Position = require('famous/components/Position');

var LayoutManager = require('./layoutManager.js');
var AllJobDisplayPanel = require('./allJobDisplayPanel.js');

var CatJobDisplayPanel = require('./catJobDisplayPanel.js');
//var JobDetailsDisplayPanel = require('./jobDetailsDisplayPanel.js');


function MainDisplayPanel(pnode){

  var that = this;

  this.parentNode = pnode;

  this.parentNode.setProportionalSize(1,0.8,1).setAlign(0,0.2,-1);
/*
  this.menuDIV = new DOMElement(this.parentNode,{
    properties : {
      'background-color' : 'red'
    }
  });
*/
  this.panels = [];
  this.panelpos = [];


  this.panels[0] = new AllJobDisplayPanel(this.parentNode.addChild());
  this.panelpos[0] = new Position(this.panels[0].getParentNode());
  this.panelpos[0].setY(0);

  this.panels[1] = new CatJobDisplayPanel(this.parentNode.addChild());
  this.panelpos[1] = new Position(this.panels[1].getParentNode());
  this.panelpos[1].setY(0).setX(LayoutManager.getAppDimensionWidth());



  this.currActivePanel = this.panels[0];
  this.currActivePanelPos = this.panelpos[0];
/*
  this.gestures = new GestureHandler(this.currActivePanel.getParentNode());
    this.gestures.on({
        event: 'drag',
        points: 2,
        threshold: 10
    }, function(e){

        //console.log(e);

        if(e.status == "move"){

            var tempY = that.currActivePanelPos.getY() + e.centerDelta.y;
            that.currActivePanelPos.set(0, tempY );
          //  console.log("New y pos " + tempY);

        }

    });
*/
    var posY = -(this.panels[0].getParentNode().getAbsoluteSize()[1]);


    //create a loop for scroll animation
    function togglePosition() {
      posY = LayoutManager.getAppDimensionHeight();

      that.currActivePanelPos.set(0,posY,1);

      posY = -(that.panels[0].getParentNode().getAbsoluteSize()[1]);

      //note how Position.set() accepts a
      //duration and callback after X,Y,Z values
      that.currActivePanelPos.set(0,posY,1, {
        duration:30000}, togglePosition);
    }

    that.currActivePanelPos.set(0,posY,1, {
      duration:30000}, togglePosition);


}

MainDisplayPanel.prototype.getParentNode = function(){
  return this.parentNode;
}


MainDisplayPanel.prototype.halt = function(){
  this.currActivePanelPos.halt();
}

MainDisplayPanel.prototype.resume = function(){
  var that = this;

  var posY = -(this.panels[0].getParentNode().getAbsoluteSize()[1]);


  //create a loop for scroll animation
  function togglePosition() {
    posY = LayoutManager.getAppDimensionHeight();

    that.currActivePanelPos.set(0,posY,1);

    posY = -(that.panels[0].getParentNode().getAbsoluteSize()[1]);

    //note how Position.set() accepts a
    //duration and callback after X,Y,Z values
    that.currActivePanelPos.set(0,posY,1, {
      duration:30000}, togglePosition);
  }

  that.currActivePanelPos.set(0,posY,1, {
    duration:30000}, togglePosition);

}

MainDisplayPanel.prototype.activateCatDisplay = function(catname){

  this.panels[1].updatePanel(catname);
  this.panelpos[0].setX(LayoutManager.getAppDimensionWidth(),{duration:500});
  this.panelpos[1].setX(0,{duration:500});

  this.currActivePanel = this.panels[1];


}

MainDisplayPanel.prototype.activateMainDisplay = function(catname){

  var that = this;

  this.panelpos[1].setX(LayoutManager.getAppDimensionWidth(),{duration:500});
  this.panelpos[0].setX(0,{duration:500},function(){
    that.resume();
  });

  this.currActivePanel = this.panels[0];


}




module.exports = MainDisplayPanel;
