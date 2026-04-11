gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.idToCallbackMap = new Map();
gdjs.Game_32OverCode.GDGame_9595OverObjects1= [];
gdjs.Game_32OverCode.GDGame_9595OverObjects2= [];
gdjs.Game_32OverCode.GDgrassObjects1= [];
gdjs.Game_32OverCode.GDgrassObjects2= [];
gdjs.Game_32OverCode.GDHouseObjects1= [];
gdjs.Game_32OverCode.GDHouseObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDGame_9595OverObjects1.length = 0;
gdjs.Game_32OverCode.GDGame_9595OverObjects2.length = 0;
gdjs.Game_32OverCode.GDgrassObjects1.length = 0;
gdjs.Game_32OverCode.GDgrassObjects2.length = 0;
gdjs.Game_32OverCode.GDHouseObjects1.length = 0;
gdjs.Game_32OverCode.GDHouseObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDGame_9595OverObjects1.length = 0;
gdjs.Game_32OverCode.GDGame_9595OverObjects2.length = 0;
gdjs.Game_32OverCode.GDgrassObjects1.length = 0;
gdjs.Game_32OverCode.GDgrassObjects2.length = 0;
gdjs.Game_32OverCode.GDHouseObjects1.length = 0;
gdjs.Game_32OverCode.GDHouseObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
