var DOMElement = require('famous/dom-renderables/DOMElement');

var LayoutManager = require('./layoutManager.js');

function MenuPanel(pnode,pcontext){

  this.context = pcontext;

  this.parentNode = pnode;

  this.parentNode.setProportionalSize(1,0.1).setPosition(0,0,100).setAlign(0,0.1,1);
  //this.parentNode.setSizeMode(1,1,1).setAbsoluteSize(100,50).setAlign(0,0.1,1);

  this.menuDIV = new DOMElement(this.parentNode,{

    properties : {
      'background-color' : 'rgb(121, 121, 166)'

    }

  });

  this.currMenuState = 0;
  /*
  0 - Default State (Displayed as 'Category')
  1 - Category selected state (Displayed as 'Back')
  2 - Job Selected state (Displayed as 'Back')
  */

  _setupMenuPanel.call(this);

}

MenuPanel.prototype.getParentNode = function(){
  return this.parentNode;
}

MenuPanel.prototype.changeCaption = function(caption){

  this.currMenuState ? this.parentNode.rightDisplayDOM.setContent('<div class="menubutton">Back</div>') : this.parentNode.rightDisplayDOM.setContent('<div class="menubutton">Category</div>');
  this.parentNode.leftDisplayDOM.setContent('<div class="menudisplay">' + caption + '</div>');

}




function _setupMenuPanel(){

  var that = this;

  this.parentNode.leftDisplayNode = this.parentNode.addChild();
  this.parentNode.rightDisplayNode = this.parentNode.addChild();

  this.parentNode.leftDisplayNode.setProportionalSize(0.7,1).setAlign(0,0,1);
  this.parentNode.rightDisplayNode.setProportionalSize(0.3,1).setAlign(0.7,0,1);

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

  this.parentNode.rightDisplayNode.addUIEvent('click');
  this.parentNode.rightDisplayNode.onReceive = function(event,payload){

    if(event==='click'){

        that.currMenuState ? that.currMenuState = 0 : that.currMenuState = 1;

        that.currMenuState ? that.context.appscene.emit("menuchange",1) : that.context.appscene.emit("menuchange",0);




    }

  }

}

module.exports = MenuPanel;
