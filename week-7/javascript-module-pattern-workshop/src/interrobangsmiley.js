"use strict";

// (function(exports) {
//   function interrobangsmiley(Smiley, exclaim, question, string) {
//     return Smiley(exclaim(question(string)));
//   };
//   exports.interrobangsmiley = interrobangsmiley;
// })(this);


(function(exports) {
  var string = "david"
  console.log(string+ "1")
  function interrobangsmiley(Smiley, exclaim, question, string) {
    console.log(string + "2");
    return Smiley(exclaim(question(string)));
  };
  console.log(string + "3")
  // exports.interrobangsmiley = interrobangsmiley;
  // console.log(interrobangsmiley(Smiley(exclaim(question(string)))))
  // exports.string = string;
})(this);


(function(exports) {
  var string = "david"
  console.log(string+ "1")
  function interrobangsmiley(Smiley, exclaim, question, string) {
    console.log(string + "2");
    return Smiley(exclaim(question(string)));
  };
  console.log(string + "3")
  exports.interrobangsmiley = interrobangsmiley;
  // console.log(interrobangsmiley(Smiley(exclaim(question(string)))))
  // exports.string = string;
})(this);