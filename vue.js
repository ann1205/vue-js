var app = new Vue({
  el: '#app',
  data: {
    message: 'Post Trucks'
  }
})
// var app3 = new Vue({
//   el: '#app3',
//   methods: {
//     addNew: function (tableID){

//       var table = document.getElementById(tableID);

// 			var rowCount = table.rows.length;
// 			var row = table.insertRow(rowCount);

// 			var cell1 = row.insertCell(0);
// 			var element1 = document.createElement("input");
// 			element1.type = "text";
// 			element1.name = "txtbox[]";
// 			cell1.appendChild(element1);

// }
// }
// })

function addNew(tableID) {

  var table = document.getElementById(tableID);

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  var cell1 = row.insertCell(0);
  var element1 = document.createElement("input");
  element1.type = "text";
  element1.name = "txtbox[]";
  cell1.appendChild(element1);

  var cell2 = row.insertCell(1);
  var element2 = document.createElement("input");
  element2.type = "text";
  element2.name = "txtbox[]";
  cell2.appendChild(element2);

  var cell3 = row.insertCell(2);
  var element3 = document.createElement("input");
  element3.type = "text";
  element3.name = "txtbox[]";
  cell3.appendChild(element3);

  var cell4 = row.insertCell(3);
  var element4 = document.createElement("input");
  element4.type = "text";
  element4.name = "txtbox[]";
  cell4.appendChild(element4);

  var cell5 = row.insertCell(4);
  var element5 = document.createElement("input");
  element5.type = "text";
  element5.name = "txtbox[]";
  cell5.appendChild(element5);

  var cell6 = row.insertCell(5);
  var element6 = document.createElement("input");
  element6.type = "text";
  element6.name = "txtbox[]";
  cell6.appendChild(element6);

  var cell7 = row.insertCell(6);
  var element7 = document.createElement("input");
  element7.type = "text";
  element7.name = "txtbox[]";
  cell7.appendChild(element7);

  var cell8 = row.insertCell(7);
  var element8 = document.createElement("input");
  element8.type = "text";
  element8.name = "txtbox[]";
  cell8.appendChild(element8);

  var cell9 = row.insertCell(8);
  var element9 = document.createElement("input");
  element9.type = "text";
  element9.name = "txtbox[]";
  cell9.appendChild(element9);
  
  var cell10 = row.insertCell(9);
  var element10 = document.createElement("input");
  element10.type = "text";
  element10.name = "txtbox[]";
  cell10.appendChild(element10);
  
  var cell11 = row.insertCell(10);
  var element11 = document.createElement("input");
  element11.type = "text";
  element11.name = "txtbox[]";
  cell11.appendChild(element11);
  
  var cell12 = row.insertCell(11);
  var element12 = document.createElement("input");
  element12.type = "text";
  element12.name = "txtbox[]";
  cell12.appendChild(element12);
  
  var cell13 = row.insertCell(12);
  var element13 = document.createElement("input");
  element13.type = "text";
  element13.name = "txtbox[]";
  cell13.appendChild(element13);
  
  var cell14 = row.insertCell(13);
  var element14 = document.createElement("input");
  element14.type = "text";
  element14.name = "txtbox[]";
  cell14.appendChild(element14);
  
  var cell15 = row.insertCell(14);
  var element15 = document.createElement("input");
  element15.type = "button";
  element15.value = "Delete";
  cell15.appendChild(element15);
  
}
