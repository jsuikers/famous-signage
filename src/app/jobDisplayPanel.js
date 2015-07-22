var DOMElement = require('famous/dom-renderables/DOMElement');

var LayoutManager = require('./layoutManager.js');



var jobcontentTitlePre = '<div class="jobentry"> \
                <div class="jobtitle"> \
                  <div> \
                    <span style="font-weight:bold;">Job Title : </span><span>';

var jobcontentEmpPre = '</span> \
                  </div> \
                </div> \
                <div> \
                  <div class="jobemployer" style="float:left;"> \
                    <span style="font-weight:bold;">Employer : </span><span>';

var jobcontentCodePre = '</span> \
                  </div> \
                  <div class="jobcode" style="float:right;"> \
                    <span style="font-weight:bold;">Job Code : </span><span>';

var jobcontentCodePost = '</span> \
                  </div> \
                </div> \
              </div>';

function JobDisplayPanel(pnode,pcontext,ptitle,pemployer,pcode,pclickable){

  this.parentNode = pnode;

  this.parentNode.context = pcontext;

  this.parentNode.panelwidth = LayoutManager.getAppJobDisplayWidth();
  this.parentNode.panelheight = LayoutManager.getAppJobDisplayHeight();

  this.parentNode.setSizeMode(1,1,1).setAbsoluteSize(this.parentNode.panelwidth,this.parentNode.panelheight,1);

  this.parentNode.el = new DOMElement(this.parentNode,{

    content : jobcontentTitlePre + ptitle + jobcontentEmpPre + pemployer + jobcontentCodePre + pcode + jobcontentCodePost,
    properties : {
      'background-color' : 'rgb(63, 63, 145)',
      '-webkit-box-shadow':'0 0 20px blue',
      'color' : 'rgb(231, 218, 218)'
    }

  });

  if(pclickable){
    this.parentNode.el.setProperty('cursor','pointer');
    this.parentNode.addUIEvent('click');

    this.parentNode.onReceive = function(e,p){

      if(e==='click'){

        this.context.appscene.emit("jobdetails",pcode);

      }


    }
  }

}

JobDisplayPanel.prototype.getParentNode = function() {

  return this.parentNode;
}


JobDisplayPanel.prototype.drawPanel = function(){

}

module.exports = JobDisplayPanel;
