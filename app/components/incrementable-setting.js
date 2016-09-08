import Ember from 'ember';
import SwitchableComponentMixin from '../mixins/switchable-component';

export default Ember.Component.extend(SwitchableComponentMixin, {
  step: 1,
  min: 0,
  max: 0,

  _isInBounds(desiredValue) {
    const { min, max } = this.getProperties('min', 'max');

    return desiredValue >= min && desiredValue <= max;
  },

  actions: {
    increase() {
      if (this.isDisabled()) {
        return;
      }

      const desiredValue = this.get('model') + this.get('step');

      if (!this._isInBounds(desiredValue)) {
        return;
      }

      this.set('model', desiredValue);
    },

    decrease() {
      if (this.isDisabled()) {
        return;
      }

      const desiredValue = this.get('model') - this.get('step');

      if (!this._isInBounds(desiredValue)) {
        return;
      }

      this.set('model', desiredValue);
    },

    setToMaximum() {
      if (this.isDisabled()) {
        return;
      }

      this.set('model', this.get('max'));
    },

    setToMinimum() {
      if (this.isDisabled()) {
        return;
      }

      this.set('model', this.get('min'));
    }
  }
});
