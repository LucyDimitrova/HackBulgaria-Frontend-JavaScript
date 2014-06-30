"use strict";

var json = {
  "students": [
    {
      "name" : "Daniel Taskoff",
      "course" : "Frontend JavaScript"
    }, {
      "name" : "Elena Jeleva",
      "course" : "Programming 101"
    }, {
      "name" : "Luboslava Dimitrova",
      "course" : "Frontend JavaScript"
    }, {
      "name" : "Anton Antonov",
      "course" : "Core Java"
    }, {
      "name" : "Nikola Dichev",
      "course" : "Core Java"
    }
  ]
};
$(document).ready(function(){
    var js = json.students.filter(function (element){
      return element.course === "Frontend JavaScript";
    });
    var coreJava = json.students.filter(function (element){
      return element.course === "Core Java";
    });
    var pr101 = json.students.filter(function (element){
      return element.course === "Programming 101";
    });
    var populateTable = function (neshtosi, id){
      neshtosi.forEach(function (element){
        var arr = ["<tr>",
                    "<td>",
                      element.name,
                    "</td>",
                    "<td>",
                      element.course,
                    "</td>",
                  "</tr>"];
       $("#"+id).append(arr.join(""));
      });
    };
    populateTable(json.students, "tablicu");
    populateTable(js, "tablicu1");
    populateTable(coreJava, "tablicu2");
    populateTable(pr101, "tablicu3");
});
