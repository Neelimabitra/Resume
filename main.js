function loadJson(file,callback){
   var xhr=new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange=function(){
     if(xhr.readyState===4 && xhr.status=="200"){
       callback(xhr.responseText);
     }
   }
   xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_career(data.career);
  fun_education(data.education);
  fun_achievements(data.achievements);
  fun_technicalskills(data.technicalskills);
});
var div2=document.getElementById("child2");
function  fun_career(car){
  var h1=document.createElement("h2");
  h1.textContent="Career Objective";
  div2.appendChild(h1);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var carinfo=document.createElement("p");
  carinfo.textContent=car.info;
  div2.appendChild(carinfo);
}
function  fun_education(edu){
  var h1=document.createElement("h2");
  h1.textContent="Educational qualifications";
  div2.appendChild(h1);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var list=document.createElement("ul");
  div2.appendChild(list);
    for(var i=0; i<edu.length; i++){
    var listItem=document.createElement("li");
    listItem.textContent=edu[i].degree;
    list.appendChild(listItem);
    var listItem=document.createElement("p");
    listItem.textContent=edu[i].institute;
    list.appendChild(listItem);
    var listItem=document.createElement("p");
    listItem.textContent=edu[i].data;
    list.appendChild(listItem);
}
}
function fun_achievements(ach){
  var h1=document.createElement("h2");
  h1.textContent="Achievements";
  div2.appendChild(h1);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var list=document.createElement("ul");
  div2.appendChild(list);
  for(var i=0; i<ach.length; i++){
     var listItem=document.createElement("li");
     listItem.innerHTML=ach[i].name;
     list.appendChild(listItem);
}
}
function fun_technicalskills(tec){
  var h1=document.createElement("h2");
  h1.textContent="Technical Skills";
  div2.appendChild(h1);
  var hr=document.createElement("hr");
  h1.appendChild(hr);
  var tr=" ";
  table=document.createElement("table");
  div2.appendChild(table);
  for(var i=0; i<tec.length; i++){
    tr+="<tr><td>"+tec[i].name+"</td><td>"+tec[i].data+"</td></tr>";
}
 table.innerHTML=tr;
 table.border="1";
}
