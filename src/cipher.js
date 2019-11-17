window.cipher = {

    newCharCodeAt: (letter,status=0) => {
        const specialChar = ['á','é','í','ó','ú','Á','É','Í','Ó','Ú','¿','ñ','Ñ'];
        const myAsciiChar = [200,201,202,203,204,205,206,207,208,209,210,211,212]
        let result = '';
        if ( status ) {
            const indexChar = myAsciiChar.indexOf(letter);
            result = specialChar[indexChar]
        }else{
            const indexAscii = specialChar.indexOf(letter);
            result = myAsciiChar[indexAscii]
        }
        return result;
    },

    /*
    * @asciiPosition (number) - obtiene el número de la posición en ascii
    * @range (number) - rango del bloque le letras en ascii
    * @number (number) - número de desplazamiento
    * @mod (number) - módulo 
    * return (string) La letra cifrada
    */
    operationEncodeCipher: (asciiPosition, range, number, mod=26) => {
        let result='';
        if(parseInt(number)>0){
            result = (asciiPosition - range + parseInt(number)) % mod + range;
        }else{
           result = (asciiPosition - range - parseInt(number)) % mod + range;
        }
        return String.fromCharCode(result)
    },

    operationDecodeCipher:(asciiPosition, range, number, mod=26) => {
        let result;
        if(parseInt(number)>0){
            result = (asciiPosition - range - parseInt(number)) % mod + range;
        }else{
            result = (asciiPosition - range + parseInt(number)) % mod + range;
        }
        return String.fromCharCode(result)
    },

    //-----------------------------------CIFRAR--------------------------------------------

    encode:(string,number)=>{
    
        let stringCode = '';
 
        for (let i=0; i<string.length; i++){

            const specialEncodeChar = ['á','é','í','ó','ú','Á','É','Í','Ó','Ú','¿','ñ','Ñ'];
            let asciiPosition= string.charCodeAt(i);
            //let newAsciiPosition;
        
            // -------------Cifra letras mayúsculas -----------------

            if (asciiPosition >= 65 && asciiPosition <=90){
                stringCode += cipher.operationEncodeCipher(asciiPosition, 65, number);
            }
        
            // ------------Cifra letras minúsculas ------------------

            if (asciiPosition >= 97 && asciiPosition <= 122){
                stringCode += cipher.operationEncodeCipher(asciiPosition, 97, number);
            }
        
            // ------------Cifra caracteres especiales ---------------

            if (asciiPosition >= 33 && asciiPosition <= 64){
                stringCode += cipher.operationEncodeCipher(asciiPosition, 33, number, 32);
            } 

            // ------------Agrega espacios ----------------------------
        
            if ( asciiPosition === 32) {
                stringCode += ' ';
            }

            // -----------Cifrar letras con acento -------------------------

            for (let j=0; j<specialEncodeChar.length; j++){
            
                let newSpecialPosition;

                if( string[i] === specialEncodeChar[j] ){

                    let specialAsciiChar = cipher.newCharCodeAt(specialEncodeChar[j],0);
                    if (specialAsciiChar >= 200 && specialAsciiChar <= 212){     
                        if (parseInt(number) > 0){  
                            newSpecialPosition = (specialAsciiChar - 200 + parseInt(number)) % 13 + 200;
                            stringCode += cipher.newCharCodeAt(newSpecialPosition,1);
                        }else{
                            newSpecialPosition = (specialAsciiChar - 200 - parseInt(number)) % 13 + 200;
                            stringCode += cipher.newCharCodeAt(newSpecialPosition,1);
                        }
                    }
                }
            }
        }
   
        return stringCode;
    },

    //----------------------------------DESCIFRAR---------------------------------------

    decode: (string, number)=>{

        let stringDecode = ''; 

        for (let i=0; i<string.length; i++){

            const specialDecodeChar = ['á','é','í','ó','ú','Á','É','Í','Ó','Ú','¿','ñ','Ñ'];
            let asciiPosition= string.charCodeAt(i);
            //let newAsciiPosition;

            //-------------------Descifrar letras mayúsculas-----------------------

            if (asciiPosition >= 65 && asciiPosition <=90){
                stringDecode += cipher.operationDecodeCipher(asciiPosition, 90, number);
            }

            //------------------Descifrar letras minúsculas------------------------

            if (asciiPosition >= 97 && asciiPosition <= 122){
                stringDecode += cipher.operationDecodeCipher(asciiPosition, 122, number);
            }

            //-----------------Descifrar caracteres especiales------------------------

            if (asciiPosition >= 33 && asciiPosition <= 64){
                stringDecode += cipher.operationDecodeCipher(asciiPosition, 64, number,32);
            }

            //-----------------Agregar espacios-------------------------------------
        
            if ( asciiPosition === 32) {
                stringDecode += ' ';
            }

            //-----------------Descifrar letras con acento---------------------------

            for (let j=0; j<specialDecodeChar.length; j++){
            
                let newSpecialPosition;

                if( string[i] === specialDecodeChar[j] ){

                    let specialAsciiChar = cipher.newCharCodeAt(specialDecodeChar[j],0);
                    if (specialAsciiChar >= 200 && specialAsciiChar <= 212){
                        if(parseInt(number)>0){
                            newSpecialPosition = (specialAsciiChar - 212 - parseInt(number)) % 13 + 212;
                            stringDecode += cipher.newCharCodeAt(newSpecialPosition,1);
                        }else{
                            newSpecialPosition = (specialAsciiChar - 212 + parseInt(number)) % 13 + 212;
                            stringDecode += cipher.newCharCodeAt(newSpecialPosition,1);
                        }
                    }
                }
            }
        }
   
        return stringDecode;
    }

}
