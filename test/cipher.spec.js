describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  //---------------------------newCharCodeAt-----------------------------

  describe('cipher.newCharCodeAt',()=>{
    
    it('debería ser una función',()=>{
      assert.equal(typeof cipher.newCharCodeAt, 'function');
    });
    
    it('debería retornar "á" para "200" con status 1',() =>{
      assert.equal(cipher.newCharCodeAt(200,1),'á');
    });
    
    it('debería retornar "200" para "á" con status 0',() =>{
      assert.equal(cipher.newCharCodeAt('á',0),'200');
    });

  });

  //--------------------------operationEncodeCipher---------------------------------

  describe('cipher.operationEncodeCipher',()=>{

    it('debería ser función',()=>{
      assert.equal(typeof cipher.operationEncodeCipher,'function');
    });
    
    it('debería retornar "H" para "A" con offset 33',()=>{
      assert.equal(cipher.operationEncodeCipher(65,65,33,26),'H');
    });

    it('debería retornar "h" para "a" con offset 33', ()=>{
      assert.equal(cipher.operationEncodeCipher(97,97,33,26),'h');
    });

    it('debería retornar """ para "!" con offset 33',()=>{
      assert.equal(cipher.operationEncodeCipher(33,33,33,32),'"');
    });

    it('debería retornar "H" para "A" con offset -33',()=>{
      assert.equal(cipher.operationEncodeCipher(65,65,-33,26),'H');
    });

    it('debería retornar "h" para "a" con offset -33', ()=>{
      assert.equal(cipher.operationEncodeCipher(97,97,-33,26),'h');
    });

    it('debería retornar """ para "!" con offset -33',()=>{
      assert.equal(cipher.operationEncodeCipher(33,33,-33,32),'"');
    });

  });

  //-------------------------------operationDecodeCipher--------------------------

  describe('cipher.operationDecodeCipher',()=>{
    
    it('debería ser una función',()=>{
      assert.equal(typeof cipher.operationDecodeCipher,'function');
    });
  
    it('debería retornar "A" para "H" con offset 33',()=>{
      assert.equal(cipher.operationDecodeCipher(72,90,33,26),'A');
    });
    
    it('debería retornar "a" para "h" con offset 33',()=>{
      assert.equal(cipher.operationDecodeCipher(104,122,33,26),'a');
    });
    
    it('debería retornar "!" para """ con offset 33',()=>{
      assert.equal(cipher.operationDecodeCipher(34,64,33,32),'!');
    });

    it('debería retornar "A" para "H" con offset 33',()=>{
      assert.equal(cipher.operationDecodeCipher(72,90,-33,26),'A');
    });

    it('debería retornar "a" para "h" con offset 33',()=>{
      assert.equal(cipher.operationDecodeCipher(104,122,-33,26),'a');
    });

    it('debería retornar "!" para """ con offset 33',()=>{
      assert.equal(cipher.operationDecodeCipher(34,64,-33,32),'!');
    });

  });

  //-------------------------------------encode------------------------------------
  
  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ',33), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ',-33), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',()=>{
      assert.equal(cipher.encode('abcdefghijklmnopqrstuvwxyz',33),'hijklmnopqrstuvwxyzabcdefg');
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset -33',()=>{
      assert.equal(cipher.encode('abcdefghijklmnopqrstuvwxyz',-33),'hijklmnopqrstuvwxyzabcdefg');
    });
    
    it('debería retornar "$" para "#" con offset 33',()=>{
      assert.equal(cipher.encode('#',33),'$');
    });
    
    it('debería retornar "$" para "#" con offset -33',()=>{
      assert.equal(cipher.encode('#',-33),'$');
    });
    
    it('debería retornar "ÍÓÚ¿ñÑáéíóúÁÉ" para "áéíóúÁÉÍÓÚ¿ñÑ" con offset 33',()=>{
      assert.equal(cipher.encode('áéíóúÁÉÍÓÚ¿ñÑ',33),'ÍÓÚ¿ñÑáéíóúÁÉ');
    });
   
    it('debería retornar "ÍÓÚ¿ñÑáéíóúÁÉ" para "áéíóúÁÉÍÓÚ¿ñÑ" con offset -33',()=>{
      assert.equal(cipher.encode('áéíóúÁÉÍÓÚ¿ñÑ',-33),'ÍÓÚ¿ñÑáéíóúÁÉ');
    });
    
    it('debería retornar " " para " " con   offset 33', () => {
      assert.equal(cipher.encode(' ',33), ' ');
    });
 
  });

  //---------------------------------decode---------------------------------------
 
  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG',33),'ABCDEFGHIJKLMNOPQRSTUVWXYZ'  );
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset -33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG',-33), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
  
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',()=>{
        assert.equal(cipher.decode('hijklmnopqrstuvwxyzabcdefg',33),'abcdefghijklmnopqrstuvwxyz');
    });
  
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset -33',()=>{
      assert.equal(cipher.decode('hijklmnopqrstuvwxyzabcdefg',-33),'abcdefghijklmnopqrstuvwxyz');
    });
    
    it('debería retornar "#" para "$" con offset 33',()=>{
      assert.equal(cipher.decode('$',33),'#');
    });
    
    it('debería retornar "#" para "$" con offset -33',()=>{
      assert.equal(cipher.decode('$',-33),'#');
    });
  
    it('debería retornar "áéíóúÁÉÍÓÚ¿ñÑ" para "ÍÓÚ¿ñÑáéíóúÁÉ" con offset 33',()=>{
      assert.equal(cipher.decode('ÍÓÚ¿ñÑáéíóúÁÉ',33),'áéíóúÁÉÍÓÚ¿ñÑ');
    });
  
    it('debería retornar "áéíóúÁÉÍÓÚ¿ñÑ" para "ÍÓÚ¿ñÑáéíóúÁÉ" con offset -33',()=>{
      assert.equal(cipher.decode('ÍÓÚ¿ñÑáéíóúÁÉ',-33),'áéíóúÁÉÍÓÚ¿ñÑ');
    });

    it('debería retornar " " para " " con offset 33', () => {
      assert.equal(cipher.decode(' ',33),' '  );
    });

  });
  
});

