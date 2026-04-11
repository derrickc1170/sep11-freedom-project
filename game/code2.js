gdjs.Game_32StartCode = {};
gdjs.Game_32StartCode.localVariables = [];
gdjs.Game_32StartCode.idToCallbackMap = new Map();
gdjs.Game_32StartCode.GDStartObjects1= [];
gdjs.Game_32StartCode.GDStartObjects2= [];
gdjs.Game_32StartCode.GDgrassObjects1= [];
gdjs.Game_32StartCode.GDgrassObjects2= [];
gdjs.Game_32StartCode.GDHouseObjects1= [];
gdjs.Game_32StartCode.GDHouseObjects2= [];


gdjs.Game_32StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}
}

}


};

gdjs.Game_32StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32StartCode.GDStartObjects1.length = 0;
gdjs.Game_32StartCode.GDStartObjects2.length = 0;
gdjs.Game_32StartCode.GDgrassObjects1.length = 0;
gdjs.Game_32StartCode.GDgrassObjects2.length = 0;
gdjs.Game_32StartCode.GDHouseObjects1.length = 0;
gdjs.Game_32StartCode.GDHouseObjects2.length = 0;

gdjs.Game_32StartCode.eventsList0(runtimeScene);
gdjs.Game_32StartCode.GDStartObjects1.length = 0;
gdjs.Game_32StartCode.GDStartObjects2.length = 0;
gdjs.Game_32StartCode.GDgrassObjects1.length = 0;
gdjs.Game_32StartCode.GDgrassObjects2.length = 0;
gdjs.Game_32StartCode.GDHouseObjects1.length = 0;
gdjs.Game_32StartCode.GDHouseObjects2.length = 0;


return;

}

gdjs['Game_32StartCode'] = gdjs.Game_32StartCode;
