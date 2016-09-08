import Ember from 'ember';

const CHANGE_ACTIONS = {
  LIGHTS: 'lightsChanged',
  CURTAINS: 'curtainsChanged',
  TEMPERATURE: 'temperatureChanged'
};

export default Ember.Controller.extend({
  automation: Ember.inject.service(),
  settings: Ember.inject.service(),

  CHANGE_ACTIONS,

  _loadAutomation: Ember.on('init', function() {
    const automation = this.get('automation');

    // you can of course bind various methods (not the same) to events but I don't have need to do this'
    automation.on(CHANGE_ACTIONS.LIGHTS, () => this._saveModel());
    automation.on(CHANGE_ACTIONS.CURTAINS, () => this._saveModel());
    automation.on(CHANGE_ACTIONS.TEMPERATURE, () => this._saveModel());
  }),

  _saveModel() {
    const model = this.get('model');
    model.save();
  }
});
