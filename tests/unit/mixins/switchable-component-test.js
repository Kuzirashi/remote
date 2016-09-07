import Ember from 'ember';
import SwitchableComponentMixin from 'remote/mixins/switchable-component';
import { module, test } from 'qunit';

module('Unit | Mixin | switchable component');

// Replace this with your real tests.
test('it works', function(assert) {
  let SwitchableComponentObject = Ember.Object.extend(SwitchableComponentMixin);
  let subject = SwitchableComponentObject.create();
  assert.ok(subject);
});
