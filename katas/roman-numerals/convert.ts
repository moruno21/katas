export function convert(number: number): String {
  let roman: String = '';

  roman = createUglyRomanNumeral(number);

  roman = check4repeated(roman);

  roman = checkHigherNum(roman);

  return roman;
}

function createUglyRomanNumeral(number: number): String {
  //This function create the roman numeral itself, but then it has to be corrected
  let uglyRomanNumeral = '';

  let romanNumerals = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  while (number > 0) {
    //We iterate again and again until the number is fully transform to a roman numeral
    for (let value in romanNumerals) {
      let ordinaryNumber = romanNumerals[value];
      if (number - ordinaryNumber >= 0) {
        number -= ordinaryNumber;
        uglyRomanNumeral += value;
        break; //We stop the loop to check whether the number is 0 or not. If not, we start again
      }
    }
  }
  return uglyRomanNumeral;
}

function check4repeated(roman: String): String {
  //This function replace any imposible combination, for instance IIII or XXXX
  if (roman.includes('IIII')) roman = roman.replace('IIII', 'IV');

  if (roman.includes('XXXX')) roman = roman.replace('XXXX', 'XL');

  if (roman.includes('CCCC')) roman = roman.replace('CCCC', 'CD');

  return roman;
}

function checkHigherNum(roman: String): String {
  //When the above function applied, there may be others unvalid combination (VIV doesn't exist, it should be IX). Here we fix that
  if (roman.includes('VIV')) roman = roman.replace('VIV', 'IX');

  if (roman.includes('LXL')) roman = roman.replace('LXL', 'XC');

  if (roman.includes('DCD')) roman = roman.replace('DCD', 'CM');

  return roman;
}
