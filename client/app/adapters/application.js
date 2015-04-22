// old Fixture serving static data no longer needed
// import DS from 'ember-data';

// export default DS.FixtureAdapter.extend({
// });

// new persistent data
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:1337'
});
