import { Factory } from 'ember-cli-mirage';

const HOUSES_AVAILABLE = [
  'House in Florida',
  'House in San Francisco'
];

export default Factory.extend({
  name(i) {
    return HOUSES_AVAILABLE[i];
  },
  temperature: 20,
  lights: false,
  curtains: false
});
