// var i = 4;
// console.log(1)
// $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
//   console.log(3)
//   peopleResponse.forEach(function(person) {
//     console.log(i++)
//     console.log(person.name);
//     console.log(i++)
//   });
//   console.log(12)
// });
// console.log(2)

console.log(1);
$(document).click(function(clickEvent) {
  console.log(10);
  console.log("The click event:", clickEvent);
  console.log(11);
});
console.log(2);

console.log(3)
$.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  console.log(7)
  console.log("People response:", peopleResponse);
  console.log(8)
});
console.log(4)

console.log(5)
var getReturnValue = $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  console.log(9);
  return peopleResponse; // this will never happen. you don't return out of a get response. You can comment this out.
  console.log(12); // this never happens
})
console.log(6);
