var DOMElement = require('famous/dom-renderables/DOMElement');

var LayoutManager = require('./layoutManager.js');



var catContentPre = '<div class="jobentry"> \
                <div class="jobtitle"> \
                  <div> \
                    <span style="font-weight:bold;"> ';


var catContentPost = '</span> \
                  </div> \
                </div> \
              </div>';

function CatDisplayPanel(pnode,pcat,pcontext){

  this.parentNode = pnode;

  this.parentNode.panelwidth = LayoutManager.getAppCatDisplayWidth();
  this.parentNode.panelheight = LayoutManager.getAppCatDisplayHeight();

  this.parentNode.setSizeMode(1,1,1).setAbsoluteSize(this.parentNode.panelwidth,this.parentNode.panelheight,1);

  this.parentNode.el = new DOMElement(this.parentNode,{
    id :'cat-disp',
    content : catContentPre + pcat + catContentPost,
    properties : {
      'background-color' : 'rgb(0, 139, 255)',
      '-webkit-box-shadow':'rgb(17, 131, 114) 0px 0px 20px',
      'color' : 'rgb(231, 218, 218)',
      'text-align':'center',
      'font-size' : '1.5em',
      'cursor' : 'pointer'
    }

  });

  this.parentNode.context = pcontext;

  this.parentNode.addUIEvent('click');

  this.parentNode.onReceive = function(event,payload){

    if(event==='click'){

      this.context.appscene.emit("triggercat",pcat);

    }

  }


}

CatDisplayPanel.prototype.getParentNode = function() {

  return this.parentNode;
}



module.exports = CatDisplayPanel;
