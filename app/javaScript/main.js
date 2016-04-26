var taskListRef = new Firebase("https://dgm-todo-app.firebaseio.com");

var taskField = $('#taskInput');
var noteField = $('#noteInput');
var dueField = $('#dateInput');
var taskList = $('#example');

function addtask(){
  var task = taskField.val();
      var note = noteField.val();
      var due = dueField.val();

      //console.log(task, note, due);
    taskListRef.push({task: task, note: note, due: due})
    dueField.val('');
    noteField.val('');
    taskField.val('');
}

taskListRef.on("child_added", function(snapshot, prevChildkey){

  var newTask = snapshot.val();

  var taskOutput = newTask.task;
  var noteOutput = newTask.note;
  var dueOutput = newTask.due;

  console.log(taskOutput, noteOutput, dueOutput);

  // var taskElement = $("<paper-material></paper-material>");
  // var noteElement = $("<i></i>");
  // // var dueElement = $("<strong></strong>");
  // //
  // // dueElement.text(dueOutput);
  // noteElement.text(noteOutput);
  // taskElement.text(taskOutput).prepend(noteElement);
  // // taskElement.prepend(dueElement);
  //
  // taskList.append(taskOutput);
  // // taskList[0].scrollTop = taskList[0].scrollHeight;
});
