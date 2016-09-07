import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  name: attr('string'),
  lights: attr('boolean'),
  curtains: attr('boolean'),
  temperature: attr('number')
});
