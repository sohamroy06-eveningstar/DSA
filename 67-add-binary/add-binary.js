/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
//    let i = a.length-1;
//     let j = b.length-1;
//     let carry = 0;
//     const result = [];
//     while (i >= 0 || j >= 0 || carry > 0) {
//           const bitA = i >= 0 ? Number(a[i]) : 0;
//         const bitB = j >= 0 ? Number(b[j]) : 0;

//         const sum = bitA + bitB + carry;

//         result.push(String(sum % 2));
//         carry = Math.floor(sum / 2);

//         i--;
//         j--;
//     }
//     return result.reverse().join("");

var addBinary = function(a, b) {
   return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};