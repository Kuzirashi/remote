import Ember from 'ember';

export default Ember.Route.extend({
  automation: Ember.inject.service(),
  store: Ember.inject.service(),

  model(params) {
    return this.get('store').findRecord('house', params.house_id);
  },

  setupController(controller, model) {
    this._super(...arguments);

    this.get('automation').set('house', model);
  }
 });
