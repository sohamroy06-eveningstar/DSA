/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function(num) {
//     const values = [
//         [1000, "M"],
//         [900, "CM"],
//         [500, "D"],
//         [400, "CD"],
//         [100, "C"],
//         [90,"XC"],
//         [50, "L"],
//         [40, "XL"],
//         [10, "X"],
//         [9, "IX"],
//         [5, "V"],
//         [4, "IV"],
//         [1, "I"]
//     ];
//      let result = "";

//      for (const [value,symbol] of values){
//         while(num >= value){
//             result += symbol;
//             num -= value;
//         }
//      }
//       return result;
 
// };

var intToRoman = function(num) {
    const thousands= ["","M","MM","MMM"];
    const hundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    const tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    const ones = ["","I","II","III","IV","V","VI","VII","VIII","IX"];


    return (
    thousands[(num/1000) | 0] +
         hundreds[(num%1000)/100 | 0] +
         tens[(num %100)/ 10 | 0] +
         ones[num%10]
    )
}


