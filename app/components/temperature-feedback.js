import Ember from 'ember';
import { alias, default as computed } from 'ember-computed-decorators';

export default Ember.Component.extend({
  automation: Ember.inject.service(),

  invertOpacity: false,
  min: 0,
  max: 0,
  classNames: ['temperature-feedback'],
  attributeBindings: ['style'],
  @alias('automation.house.temperature') temperature: null,

  @computed('invertOpacity', 'min', 'max', 'temperature')
  style(invertOpacity, min, max, temperature) {
    let opacity = temperature / max;

    if (invertOpacity) {
      opacity = 1 - opacity;
    }

    return Ember.String.htmlSafe('opacity: ' + opacity);
  }

});
