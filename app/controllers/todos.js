import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {

    clearCompleted: function() {
        var completed = this.filterBy('isCompleted', true);
        completed.invoke('deleteRecord');
        completed.invoke('save');
    },

    createTodo: function(newTitle) {
    // Create the new ToDo model
      var todo = this.store.createRecord('todo', {
        title: newTitle,
        isCompleted: false
      });

      // Clear the "New Todo" text field, then save new ones
      this.set('newTitle', '');
      todo.save();
    }
  },

  hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),
   
  completed: function() {
      return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),
 
  inflection: function() {
    var remaining = this.get('remaining');
    return (remaining === 1) ? 'item' : 'items';
  }.property('remaining')
});
