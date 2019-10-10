global.window = global
require('../src/cipher')

describe('cipher', () => {
  it('debería ser un object', () => {
    expect(typeof cipher).toBe('object')
  })
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      expect(typeof window.cipher.encode).toBe('function')
    })
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(window.cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33)).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG')
    })
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(window.cipher.encode('abcdefghijklmnopqrstuvwxyz', 33)).toBe('hijklmnopqrstuvwxyzabcdefg')
    })

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    //
    it('debería retornar " !@" para " !@"', () => {
      expect(window.cipher.encode(' !@', 33)).toBe(' !@')
    })
  })
  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      expect(typeof window.cipher.decode).toBe('function')
    })
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      expect(window.cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33)).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    })
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    //
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
      expect(window.cipher.decode('hijklmnopqrstuvwxyzabcdefg', 33)).toBe('abcdefghijklmnopqrstuvwxyz')
    })

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    //
    it('debería retornar " !@" para " !@"', () => {
      expect(window.cipher.decode(' !@', 33)).toBe(' !@')
    })
  })
})
