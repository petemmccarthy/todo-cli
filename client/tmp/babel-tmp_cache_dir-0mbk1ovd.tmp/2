import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    editTodo: function editTodo() {
      this.set('isEditing', true);
    },
    acceptChanges: function acceptChanges() {
      // Remove is editing property
      this.set('isEditing', false);

      // If the todo is empty, delete it
      // otherwise save it with the new title
      if (Ember.isEmpty(this.get('model.title'))) {
        this.send('removeTodo');
      } else {
        this.get('model').save();
      }
    },
    removeTodo: function removeTodo() {
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  }
});