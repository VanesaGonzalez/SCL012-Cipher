const cipherEncode = () => {
    const offset = document.getElementById('number').value;
    const text = document.getElementById('inputMessage').value;
    const output = document.getElementById('outputMessage');
    const result = window.cipher.encode(text, offset);
    output.innerHTML = result;
}

cipherEncode();

const cipherDecode = () => {
    const offset = document.getElementById('number').value;
    const text = document.getElementById('inputMessage').value;
    const output = document.getElementById('outputMessage');
    const result = window.cipher.decode(text, offset);
    output.innerHTML = result;
}

cipherDecode();

function clean(){
    document.getElementById('outputMessage').innerHTML = '';
}

clean();