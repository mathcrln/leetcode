
export function intToRoman(s) {
    return "IV";
}

// const Numeral = {
//     I : 1,
//     V : 5,
//     X : 10,
//     L : 50,
//     C : 100,
//     D : 500,
//     M : 1000
// }
// function romanToInt(s) {
//     let result = 0;
//     let prev = 0;
//     for(let i = 0; i < s.length; i++) {
//         switch(s[i]) {
//             case 'I':
//                 result += Numeral.I;
//                 prev = Numeral.I;
//                 break;
//             case 'V':
//                 if(prev == Numeral.I) result += (Numeral.V - Numeral.I) - Numeral.I;
//                 else result += Numeral.V;
//                 prev = Numeral.V;
//                 break;
//             case 'X':
//                 if(prev == Numeral.I) result += (Numeral.X - Numeral.I) - Numeral.I;
//                 else result += Numeral.X;
//                 prev = Numeral.X;
//                 break;
//             case 'L':
//                 if(prev == Numeral.X) result += (Numeral.L - Numeral.X) - Numeral.X;
//                 else result += Numeral.L;
//                 prev = Numeral.L;
//                 break;
//             case 'C':
//                 if(prev == Numeral.X) result += (Numeral.C - Numeral.X) - Numeral.X;
//                 else result += Numeral.C;
//                 prev = Numeral.C;
//                 break;
//             case 'D':
//                 if(prev == Numeral.C) result += (Numeral.D - Numeral.C) - Numeral.C;
//                 else result += Numeral.D;
//                 prev = Numeral.D;
//                 break;
//             case 'M':
//                 if(prev == Numeral.C) result += (Numeral.M - Numeral.C) - Numeral.C;
//                 else result += Numeral.M;
//                 prev = Numeral.M;
//                 break;
//             default:
//                 break;
//         }
//     }
//     return result;
// };
// module.exports = romanToInt;
