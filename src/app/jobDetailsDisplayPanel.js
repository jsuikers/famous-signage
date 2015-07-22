var DOMElement = require('famous/dom-renderables/DOMElement');

var LayoutManager = require('./layoutManager.js');
var JobDisplayPanel = require('./jobDisplayPanel.js');


var jobTitlePre = '<div> \
                  <span style="font-weight:bold"> Job Title : </span> \
                  <span>';
var jobTitlePost = ' </span> \
                </div>';

var jobEmployerPre = '<div> \
                    <span style="font-weight:bold"> Employer : </span> \
                    <span>';

var jobEmployerPost = '</span> \
                   </div>';


var jobFunctionPre = '<div> \
                       <span style="font-weight:bold"> Job Function Brief : </span> \
                       <span>';

var jobFunctionPost = '</span> \
                     </div>';

var jobDetailsPre = '<div> \
                        <span style="font-weight:bold"> Job Details : </span> \
                        <span>';

var jobDetailsPost = '</span> \
                        </div>';


var jobLocationPre = '<div> \
                        <span style="font-weight:bold"> Job Location : </span> \
                        <span>';

var jobLocationPost = '</span> \
                        </div>';



function JobDetailsDisplayPanel(pnode,pcontext){

  this.parentNode = pnode;

  this.parentNode.el = new DOMElement(this.parentNode,{
    id: 'cat-jobs',
    properties : {
     'background-color' : 'rgb(218, 214, 214)'
    }

  });

  this.parentNode.titleNode = this.parentNode.addChild();

  this.parentNode.titleNode.setProportionalSize(0.5,0.05);
  this.parentNode.titleNode.setAlign(0.05,0.1);

  this.parentNode.employerNode = this.parentNode.addChild();
  this.parentNode.employerNode.setProportionalSize(0.5,0.05);
  this.parentNode.employerNode.setAlign(0.05,0.2);


  this.parentNode.jobFunctionNode = this.parentNode.addChild();
  this.parentNode.jobFunctionNode.setProportionalSize(0.7,0.1);
  this.parentNode.jobFunctionNode.setAlign(0.05,0.3);

  this.parentNode.jobDetailsNode = this.parentNode.addChild();
  this.parentNode.jobDetailsNode.setProportionalSize(0.7,0.1);
  this.parentNode.jobDetailsNode.setAlign(0.05,0.5);

  this.parentNode.jobLocationNode = this.parentNode.addChild();
  this.parentNode.jobLocationNode.setProportionalSize(0.5,0.05);
  this.parentNode.jobLocationNode.setAlign(0.05,0.7);

  this.titleDOM = new DOMElement(this.parentNode.titleNode,{

    classes : ['jobparticulars']

  });

  this.employerDOM = new DOMElement(this.parentNode.employerNode,{

    classes : ['jobparticulars']

  });

  this.jobFunctionDOM = new DOMElement(this.parentNode.jobFunctionNode,{

    classes : ['jobparticulars']

  });

  this.jobDetailsDOM = new DOMElement(this.parentNode.jobDetailsNode,{

    classes : ['jobparticulars']

  });

  this.jobLocationDOM = new DOMElement(this.parentNode.jobLocationNode,{

    classes : ['jobparticulars']

  });


}

JobDetailsDisplayPanel.prototype.getParentNode = function() {

  return this.parentNode;
}


JobDetailsDisplayPanel.prototype.updatePanel = function(jobobj){

  this.titleDOM.setContent(jobTitlePre + jobobj["Title"] + jobTitlePost );
  this.employerDOM.setContent(jobEmployerPre + jobobj["Employer"] + jobEmployerPost);
  this.jobFunctionDOM.setContent(jobFunctionPre + jobobj["Job Function Brief"] + jobFunctionPost);
  this.jobDetailsDOM.setContent(jobDetailsPre + jobobj["Details"] + jobDetailsPost);
  this.jobLocationDOM.setContent(jobDetailsPre + jobobj["Location"] + jobLocationPost);

}

module.exports = JobDetailsDisplayPanel;
