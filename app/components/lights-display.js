import Ember from 'ember';

export default Ember.Component.extend({
  automation: Ember.inject.service(),

  classNames: ['lights-display'],
  classNameBindings: ['automation.house.lights::off']
});
