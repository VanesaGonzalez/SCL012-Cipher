window.cipher = {
  encode: (string, number) => {
    
    let stringCode = '';
 
    for (let i=0; i<string.length; i++){

        let upperCaseLetter = string.toUpperCase();
        let asciiPosition= upperCaseLetter.charCodeAt(i);
        let newAsciiPosition;

        if (asciiPosition >= 65 && asciiPosition <=90){
            newAsciiPosition = (asciiPosition - 65 + parseInt(number)) % 26 + 65;
            stringCode += String.fromCharCode(newAsciiPosition);
        }else if (asciiPosition === 32){
            stringCode += ' ';
        }else{
            break;
        }
    }
   
    //output.innerHTML = stringCode;
    return stringCode;
  
  },
  decode: (string, number) => {

      let stringDecode = ''; 
  
      for (let i=0; i<string.length; i++){
  
          let upperCaseLetter = string.toUpperCase();
          let asciiPosition= upperCaseLetter.charCodeAt(i);
          let newAsciiPosition;
  
          if (asciiPosition >= 65 && asciiPosition <=90){
              newAsciiPosition = (asciiPosition - 90 - parseInt(number)) % 26 + 90;
              stringDecode += String.fromCharCode(newAsciiPosition);
          }else if (asciiPosition === 32){
              stringDecode += ' ';
          }else{
              break;
          }
      }
     
     //output.innerHTML = stringDecode;
     return stringDecode;
  } 
}
