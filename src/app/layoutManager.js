
var __MAX_LAYOUT_COLUMN_ = 3;
var __HEADER_SIZE_PERCENT_ = 0.1;

var __LOGINPANEL_WIDTH_SIZE_PERCENT_ = 0.25;
var __LOGINPANEL_HEIGHT_SIZE_PERCENT_ = 0.2;

var __POSTITBASEPANEL_HEIGHT_SIZE_PERCENT_ = 0.8;


var appDimensionObject = {

  //Application Dimensions
  appWidth : 0,
  appHeight : 0,

  //Application Header Height
  appHeaderHeight : 0,

  //Application Menu Height
  appMenuHeight : 0
}

var appLayoutObject = {

  postitXOffset : 50,
  postitYOffset : 50,

  postitInterXOffset : 20,

  postitInterYOffset : 50,

  postitPerRow : 0,

  postitInterColOffset : 100,

  postitWidth : 250,
  postitHeight : 250,

  postitInterXOffsetActual : 0,

}



var LayoutManager = {}


LayoutManager.calcAppDimensions = function calcAppDimensions(){

  appDimensionObject.appWidth  = window.innerWidth;
  appDimensionObject.appHeight = window.innerHeight;

  appDimensionObject.appHeaderHeight = appDimensionObject.appHeight * 0.1;
  appDimensionObject.appMenuHeight = appDimensionObject.appHeight * 0.1;

}

LayoutManager.getAppDimensionWidth = function getAppDimensionWidth(){

  return appDimensionObject.appWidth;

}

LayoutManager.getAppDimensionHeight = function getAppDimensionHeight(){

  return appDimensionObject.appHeight;

}

LayoutManager.getAppHeaderHeight = function getAppHeaderHeight(){

  return appDimensionObject.appHeaderHeight;

}

LayoutManager.getAppMenuHeight = function getAppMenuHeight(){

  return appDimensionObject.appMenuHeight;

}



module.exports = LayoutManager;
