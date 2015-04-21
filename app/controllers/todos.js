import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createTodo: function(newTitle) {
    // Create the new ToDo model
      var todo = this.store.createRecord('todo', {
        title: newTitle,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  },

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),
 
  inflection: function() {
    var remaining = this.get('remaining');
      return (remaining === 1) ? 'item' : 'items';
  }.property('remaining')
});
