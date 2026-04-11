gdjs.WInnerCode = {};
gdjs.WInnerCode.localVariables = [];
gdjs.WInnerCode.idToCallbackMap = new Map();
gdjs.WInnerCode.GDwinnerObjects1= [];
gdjs.WInnerCode.GDwinnerObjects2= [];
gdjs.WInnerCode.GDgrassObjects1= [];
gdjs.WInnerCode.GDgrassObjects2= [];
gdjs.WInnerCode.GDHouseObjects1= [];
gdjs.WInnerCode.GDHouseObjects2= [];


gdjs.WInnerCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Start", false);
}
}

}


};

gdjs.WInnerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WInnerCode.GDwinnerObjects1.length = 0;
gdjs.WInnerCode.GDwinnerObjects2.length = 0;
gdjs.WInnerCode.GDgrassObjects1.length = 0;
gdjs.WInnerCode.GDgrassObjects2.length = 0;
gdjs.WInnerCode.GDHouseObjects1.length = 0;
gdjs.WInnerCode.GDHouseObjects2.length = 0;

gdjs.WInnerCode.eventsList0(runtimeScene);
gdjs.WInnerCode.GDwinnerObjects1.length = 0;
gdjs.WInnerCode.GDwinnerObjects2.length = 0;
gdjs.WInnerCode.GDgrassObjects1.length = 0;
gdjs.WInnerCode.GDgrassObjects2.length = 0;
gdjs.WInnerCode.GDHouseObjects1.length = 0;
gdjs.WInnerCode.GDHouseObjects2.length = 0;


return;

}

gdjs['WInnerCode'] = gdjs.WInnerCode;
