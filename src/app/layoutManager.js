
var __MAX_LAYOUT_COLUMN_ = 2;

var __JOB_DISPLAY_SIDE_OFFSET = 0.05;
var __JOB_DISPLAY_CENTER_OFFSET = 0.1;
var __JOB_DISPLAY_INTERROW_OFFSET = 0.05;

var __CAT_DISPLAY_SIDE_OFFSET = 0.05;
var __CAT_DISPLAY_CENTER_OFFSET = 0.1;
var __CAT_DISPLAY_INTERROW_OFFSET = 0.15;


var __JOB_PANEL_HEIGHT = 50;
var __CAT_PANEL_HEIGHT = 50;

var appDimensionObject = {

  //Application Dimensions
  appWidth : 0,
  appHeight : 0,

  jobPanelWidth : 0,
  jobPanelHeight : __JOB_PANEL_HEIGHT,

  catPanelWidth : 0,
  catPanelHeight : __CAT_PANEL_HEIGHT,

}

var appLayoutObject = {

  joblistXOffset : 0,
  joblistYOffset : 0,

  joblistInterXOffset : 0,
  joblistInterYOffset : 0,

  catXOffset : 0,
  catYOffset : 0,

  catInterXOffset : 0,
  catInterYOffset : 0,


}



var LayoutManager = {}


LayoutManager.calcAppDimensions = function calcAppDimensions(){

  appDimensionObject.appWidth  = window.innerWidth;
  appDimensionObject.appHeight = window.innerHeight;

  appDimensionObject.catPanelWidth = (appDimensionObject.appWidth * 0.6) * 0.4;

  appDimensionObject.jobPanelWidth = appDimensionObject.appWidth * 0.4;

  appLayoutObject.joblistXOffset = appDimensionObject.appWidth * __JOB_DISPLAY_SIDE_OFFSET;
  appLayoutObject.joblistInterXOffset = appDimensionObject.appWidth * __JOB_DISPLAY_CENTER_OFFSET;

  appLayoutObject.joblistYOffset = appDimensionObject.appWidth * __JOB_DISPLAY_SIDE_OFFSET;
  appLayoutObject.joblistInterYOffset = appDimensionObject.appHeight * __JOB_DISPLAY_INTERROW_OFFSET;

  appLayoutObject.catXOffset = (appDimensionObject.appWidth * 0.6) * __CAT_DISPLAY_SIDE_OFFSET;
  appLayoutObject.catInterXOffset = (appDimensionObject.appWidth * 0.6) * __CAT_DISPLAY_CENTER_OFFSET;

  appLayoutObject.catYOffset = (appDimensionObject.appWidth * 0.6) * __CAT_DISPLAY_SIDE_OFFSET;
  appLayoutObject.catInterYOffset = (appDimensionObject.appHeight * 0.6) * __CAT_DISPLAY_INTERROW_OFFSET;


}

LayoutManager.getAppDimensionWidth = function getAppDimensionWidth(){

  return appDimensionObject.appWidth;

}

LayoutManager.getAppDimensionHeight = function getAppDimensionHeight(){

  return appDimensionObject.appHeight;

}

LayoutManager.getAppJobDisplaySideOffset = function getAppJobDisplaySideOffset(){
  return __JOB_DISPLAY_SIDE_OFFSET;
}

LayoutManager.getAppJobDisplayCenterOffset = function getAppJobDisplayCenterOffset(){
  return __JOB_DISPLAY_CENTER_OFFSET;
}

LayoutManager.getAppJobDisplayWidth = function getAppJobDisplayWidth(){
  return appDimensionObject.jobPanelWidth;
}

LayoutManager.getAppJobDisplayHeight = function getAppJobDisplayHeight(){
  return appDimensionObject.jobPanelHeight;
}

LayoutManager.getAppCatDisplayWidth = function getAppCatDisplayWidth(){
  return appDimensionObject.catPanelWidth;
}

LayoutManager.getAppCatDisplayHeight = function getAppCatDisplayHeight(){
  return appDimensionObject.catPanelHeight;
}


LayoutManager.getAppJobDisplayPanelHeight = function getAppJobDisplayPanelHeight(numOfJobs){

  var numOfRows =  Math.ceil(numOfJobs / __MAX_LAYOUT_COLUMN_);

  var YSpan =  appLayoutObject.joblistInterYOffset + appDimensionObject.jobPanelHeight;

  return (YSpan * numOfRows) + (appLayoutObject.joblistYOffset * 2);

}



LayoutManager.getJobPanelPosition = function getJobPanelPosition(pSeq){

  var rowPos =  Math.ceil(pSeq / __MAX_LAYOUT_COLUMN_);

  var colPos = pSeq % __MAX_LAYOUT_COLUMN_ ? pSeq % __MAX_LAYOUT_COLUMN_ : __MAX_LAYOUT_COLUMN_;

  var XPos =  appLayoutObject.joblistXOffset + ((colPos - 1) * appLayoutObject.joblistInterXOffset) + ((colPos - 1) * appDimensionObject.jobPanelWidth);

  var YPos =  appLayoutObject.joblistYOffset + ((rowPos - 1) * appLayoutObject.joblistInterYOffset) + ((rowPos - 1) * appDimensionObject.jobPanelHeight);

  return [XPos , YPos , 50];

}


LayoutManager.getCatPanelPosition = function getCatPanelPosition(pSeq){

  var rowPos =  Math.ceil(pSeq / __MAX_LAYOUT_COLUMN_);

  var colPos = pSeq % __MAX_LAYOUT_COLUMN_ ? pSeq % __MAX_LAYOUT_COLUMN_ : __MAX_LAYOUT_COLUMN_;

  var XPos =  appLayoutObject.catXOffset + ((colPos - 1) * appLayoutObject.catInterXOffset) + ((colPos - 1) * appDimensionObject.catPanelWidth);

  var YPos =  appLayoutObject.catYOffset + ((rowPos - 1) * appLayoutObject.catInterYOffset) + ((rowPos - 1) * appDimensionObject.catPanelHeight);

  return [XPos , YPos , 200];

}



module.exports = LayoutManager;
