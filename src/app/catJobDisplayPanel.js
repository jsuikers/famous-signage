var DOMElement = require('famous/dom-renderables/DOMElement');

var LayoutManager = require('./layoutManager.js');
var JobDisplayPanel = require('./jobDisplayPanel.js');

function CatJobDisplayPanel(pnode,pcontext){

  this.parentNode = pnode;
  this.parentNode.context = pcontext;
  this.jobPanelArray = [];


  this.parentNode.el = new DOMElement(this.parentNode,{
    id: 'cat-jobs',
    properties : {
//     'background-color' : 'yellow'
    }

  });


}

CatJobDisplayPanel.prototype.getParentNode = function() {

  return this.parentNode;
}


CatJobDisplayPanel.prototype.updatePanel = function(catname){

  var jobpanel = null;
  var posArray = null;

  var actualSeq = 0;

  while(this.jobPanelArray.length > 0){

    this.parentNode.removeChild(this.jobPanelArray[0].getParentNode());
    this.jobPanelArray.splice(0,1);

  }

  for(var i = 0; i < jobList.jobs.length;i++){
    console.log(jobList.jobs[i]);

    if(jobList.jobs[i]['Category'] == catname){

      actualSeq++;

      jobpanel = new JobDisplayPanel(this.parentNode.addChild(),this.parentNode.context,jobList.jobs[i]['Title'] , jobList.jobs[i]['Employer'], jobList.jobs[i]['Code'],true);

      posArray = LayoutManager.getJobPanelPosition(actualSeq);

      jobpanel.getParentNode().setPosition(posArray[0],posArray[1],posArray[2]);

      this.jobPanelArray.push(jobpanel);

    }



  }

  this.parentNode.setSizeMode(1,1,1).setAbsoluteSize(LayoutManager.getAppDimensionWidth(),LayoutManager.getAppJobDisplayPanelHeight(jobList.jobs.length));

}

module.exports = CatJobDisplayPanel;
