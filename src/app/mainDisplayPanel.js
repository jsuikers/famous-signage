var DOMElement = require('famous/dom-renderables/DOMElement');

//var AllJobDisplayPanel = require('./allJobDisplayPanel.js');
//var CatJobDisplayPanel = require('./catJobDisplayPanel.js');
//var JobDetailsDisplayPanel = require('./jobDetailsDisplayPanel.js');


function MainDisplayPanel(pnode){

  this.parentNode = pnode;

  this.parentNode.setProportionalSize(1,0.8);

  this.menuDIV = new DOMElement(this.parentNode);


}

MainDisplayPanel.prototype.getParentNode = function(){
  return this.parentNode;
}


module.exports = MainDisplayPanel;
