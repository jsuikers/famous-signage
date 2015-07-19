var DOMElement = require('famous/dom-renderables/DOMElement');

var LayoutManager = require('./layoutManager.js');
var CatDisplayPanel = require('./catDisplayPanel.js');

function CatMenuDisplayPanel(pnode){

  this.parentNode = pnode;
  this.catPanelArray = ["Customer Relations","Manufacturing","Software","Hotel Mgmt.","Civil Engg.","Hardware/Embedded"];

  this.parentNode.setProportionalSize(0.6,0.6,1).setPosition(0,0,-150).setAlign(0.2,0.25,1);

  this.parentNode.el = new DOMElement(this.parentNode,{
    id: 'all-cats',
    properties : {
      'background-color' : 'rgb(45, 50, 68)',
      'border-radius' : '10px',

    }

  });


  this.drawPanel();

}

CatMenuDisplayPanel.prototype.getParentNode = function() {

  return this.parentNode;
}


CatMenuDisplayPanel.prototype.drawPanel = function(){

  var currPos;

  for(var i = 0; i < this.catPanelArray.length;i++){


    var cat = new CatDisplayPanel(this.parentNode.addChild(),this.catPanelArray[i]);
    currPos = LayoutManager.getCatPanelPosition(i+1);
    cat.getParentNode().setPosition(currPos[0],currPos[1],currPos[2]);

  }

}

module.exports = CatMenuDisplayPanel;
