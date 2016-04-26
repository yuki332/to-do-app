// (function(document) {

function test(){
  console.log("todojs");
};

var app = document.querySelector('#to-do-app');

function updateItems (snapshot){
  console.log("update");
var foo = snapshot.val();
var task = foo.task;
console.log(foo);
}
//
//   // 'use strict';
//   //
//   // var app = document.querySelector('#to-do-app');
//   // app.firebaseURL = 'https://dgm-todo-app.firebaseio.com';
//   //
//   // app.items = [];
//   //
//   // app.updateItems = function(snapshot) {
//   //   this.items = [];
//   //   snapshot.forEach(function(childSnapshot) {
//   //     var item = childSnapshot.val();
//   //     item.uid = childSnapshot.key();
//   //     this.push('items', item);
//   //   }.bind(this));
//   // };
//   //
//   // app.addItem = function(event) {
//   //   event.preventDefault(); // Don't send the form!
//   //   this.ref.push({
//   //     done: false,
//   //     text: app.newItemValue
//   //   });
//   //   app.newItemValue = '';
//   // };
//   //
//   // app.toggleItem = function(event) {
//   //   this.ref.child(event.model.item.uid).update({done: event.model.item.done});
//   // };
//   //
//   // app.deleteItem = function(event) {
//   //   this.ref.child(event.model.item.uid).remove();
//   // };
//   //
//   // app.onFirebaseError = function(e) {
//   //   this.$.errorToast.text = e.detail.message;
//   //   this.$.errorToast.show();
//   // };
//   // app.onFirebaseLogin = function(e) {
//   //   this.ref = new Firebase(this.firebaseURL + '/user/' + e.detail.user.uid);
//   //   this.ref.on('value', function(snapshot) {
//   //     app.updateItems(snapshot);
//   //   });
//   // };
//   //
// })(document);
