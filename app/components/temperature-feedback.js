import Ember from 'ember';
import { alias, default as computed } from 'ember-computed-decorators';

export default Ember.Component.extend({
  automation: Ember.inject.service(),

  invertOpacity: false,
  min: 0,
  max: 0,
  maxOpacity: 1,
  classNames: ['temperature-feedback'],
  attributeBindings: ['style'],
  @alias('automation.house.temperature') temperature: null,

  _keepInBounds(number, minimum, maximum) {
    if (number < minimum) {
      return minimum;
    }

    if (number > maximum) {
      return maximum;
    }

    return number;
  },

  @computed('invertOpacity', 'min', 'max', 'temperature', 'maxOpacity')
  style(invertOpacity, min, max, temperature, maxOpacity) {
    let opacity = temperature / max;

    if (invertOpacity) {
      opacity = 1 - opacity;
    }

    return Ember.String.htmlSafe('opacity: ' + this._keepInBounds(opacity, 0, maxOpacity));
  }

});
