var DOMElement = require('famous/dom-renderables/DOMElement');

var LayoutManager = require('./layoutManager.js');
var JobDisplayPanel = require('./jobDisplayPanel.js');

function AllJobDisplayPanel(pnode){

  this.parentNode = pnode;
  this.jobPanelArray = [];


  this.parentNode.el = new DOMElement(this.parentNode,{
    id: 'all-jobs',
    properties : {
//     'background-color' : 'yellow'
    }

  });


  this.drawPanel();

}

AllJobDisplayPanel.prototype.getParentNode = function() {

  return this.parentNode;
}


AllJobDisplayPanel.prototype.drawPanel = function(){

  var jobpanel = null;
  var posArray = null;

  for(var i = 0; i < jobList.jobs.length;i++){
    console.log(jobList.jobs[i]);

    jobpanel = new JobDisplayPanel(this.parentNode.addChild(),jobList.jobs[i]['Title'] , jobList.jobs[i]['Employer'], jobList.jobs[i]['Code']);

    posArray = LayoutManager.getJobPanelPosition(i+1);

    jobpanel.getParentNode().setPosition(posArray[0],posArray[1],posArray[2]);


  }

  this.parentNode.setSizeMode(1,1,1).setAbsoluteSize(LayoutManager.getAppDimensionWidth(),LayoutManager.getAppJobDisplayPanelHeight(jobList.jobs.length));

}

module.exports = AllJobDisplayPanel;
