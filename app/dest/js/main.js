function addtask(){var e=taskField.val(),t=noteField.val(),a=dueField.val();taskListRef.push({task:e,note:t,due:a}),dueField.val(""),noteField.val(""),taskField.val("")}var taskListRef=new Firebase("https://dgm-todo-app.firebaseio.com"),taskField=$("#taskInput"),noteField=$("#noteInput"),dueField=$("#dateInput"),taskList=$("#example");taskListRef.on("child_added",function(e,t){var a=e.val(),d=a.task,l=a.note,s=a.due;console.log(d,l,s)});