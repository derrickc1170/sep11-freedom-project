
gdjs.evtsExt__UntitledExtension__grasss = gdjs.evtsExt__UntitledExtension__grasss || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__UntitledExtension__grasss.grasss = class grasss extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
}

// Methods:

gdjs.evtsExt__UntitledExtension__grasss.grasss.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("UntitledExtension::grasss", gdjs.evtsExt__UntitledExtension__grasss.grasss);
