import Ember from 'ember';

export default Ember.Mixin.create({
  automation: Ember.inject.service(),

  automationAction: null,
  disabled: false,
  model: null,

  isDisabled() {
    return this.get('disabled');
  },

  modelDidChange: Ember.observer('model', function() {
    if (this.isDisabled()) {
      return;
    }

    const automationAction = this.get('automationAction');

    if (!automationAction) {
      return;
    }

    if (this.get('disabled')) {
      return;
    }

    this.get('automation').trigger(automationAction);
  })
});
