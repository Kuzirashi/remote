import Ember from 'ember';
import SwitchableComponentMixin from '../mixins/switchable-component';

export default Ember.Component.extend(SwitchableComponentMixin, {
  step: 1,

  actions: {
    increase() {
      if (this.isDisabled()) {
        return;
      }

      this.set('model', this.get('model') + this.get('step'));
    },

    decrease() {
      if (this.isDisabled()) {
        return;
      }

      this.set('model', this.get('model') - this.get('step'));
    }
  }
});
