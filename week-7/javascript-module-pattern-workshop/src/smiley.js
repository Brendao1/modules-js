(function(exports) {
    var string = "hello" 
    function Smiley(string) {
        return string + " :)";
    };
    // console.log(this)
    // console.log(Smiley("hello"))
    exports.Smiley = Smiley
})(this);


    
    
// (function smiley(string) {
//     return string + " :)";
// })(); 
