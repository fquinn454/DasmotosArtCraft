// Write class below
class ShiftCipher{
  constructor(num){
    this.shift = num;
  }
  encrypt(word){
    let output = "";
    for (let i = 0; i < word.length; i++){
        if(word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122){
            let newChar = word.charCodeAt(i);
            newChar += this.shift;
            if (newChar > 122 ){
                newChar = 96 + (newChar - 122);
            } 
            output += String.fromCharCode(newChar).toUpperCase();
        }
        else if ((word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90)) {
            let newChar = word.charCodeAt(i);
            newChar += this.shift;
            if (newChar > 90 ){
                newChar = 64 + (newChar - 90);
            } 
            output += String.fromCharCode(newChar).toUpperCase();
        }
        else{
            output += String.fromCharCode(word.charCodeAt(i));
        }
    }
    console.log(output);
    return output;
  }

  decrypt(word){
    word = word.toLowerCase();
    let output = "";
    for(let i = 0; i < word.length; i++){
        if(word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122){
            let newChar = word.charCodeAt(i);
            newChar -= this.shift;
            if (newChar < 97){
                newChar = 123 - (97 - newChar); 
            }
            output += String.fromCharCode(newChar);
        }
       else{
        output += String.fromCharCode(word.charCodeAt(i));
       } 
    }
    console.log(output);
    return output;
  }
  
}

const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'
const cipher1 = new ShiftCipher(1);
cipher1.encrypt("Z");// returns A;
cipher1.encrypt("z");// returns A;
const cipher2 = new ShiftCipher(25);
cipher2.encrypt('abcdefg'); //expected 'ZABCDEF'