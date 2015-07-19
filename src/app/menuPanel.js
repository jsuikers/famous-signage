var DOMElement = require('famous/dom-renderables/DOMElement');

var LayoutManager = require('./layoutManager.js');

function MenuPanel(pnode){

  this.parentNode = pnode;

  this.parentNode.setProportionalSize(1,0.1).setPosition(0,70);

  this.menuDIV = new DOMElement(this.parentNode,{

    properties : {
      'background-color' : 'rgb(121, 121, 166)'

    }

  });

  _setupMenuPanel.call(this);

}

MenuPanel.prototype.getParentNode = function(){
  return this.parentNode;
}

function _setupMenuPanel(){

  this.parentNode.leftDisplayNode = this.parentNode.addChild();
  this.parentNode.rightDisplayNode = this.parentNode.addChild();

  this.parentNode.leftDisplayNode.setProportionalSize(0.7,1).setPosition(0,0);
  this.parentNode.rightDisplayNode.setProportionalSize(0.3,1).setPosition(LayoutManager.getAppDimensionWidth() - (LayoutManager.getAppDimensionWidth()*0.3),0);

  this.parentNode.leftDisplayDOM = new DOMElement(this.parentNode.leftDisplayNode,{
    content : '<div class="menudisplay">All Categories</div>',
    properties : {
      'color' : 'white'

    }

  });
  this.parentNode.rightDisplayDOM = new DOMElement(this.parentNode.rightDisplayNode,{
    content : '<div class="menubutton">Category</div>',
    properties : {
      'color' : 'white',
      'font-size' : '5vh'

    }

  });

}

module.exports = MenuPanel;
