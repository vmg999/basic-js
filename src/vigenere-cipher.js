const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mod) {
    if (mod == undefined || mod == true) {
      this.mod = "Direct";
    } else if (mod == false) {
      this.mod = "Reverse";
    }

    this.abc = [];
    for (let i = 65; i < 91; i++) {
      this.abc.push(String.fromCharCode(i));
    }
  }

  encrypt(message, key) {
    if (message && key) {
      //message array------------------------------------------
      let M = message.toUpperCase().split("");

      //key array----------------------------------------------
      let K = [],
        j = 0;

      for (let i = 0; i < M.length; i++) {
        if (this.abc.includes(M[i])) {
          K.push(key[j % key.length].toUpperCase());
        } else {
          j--;
          K.push(" ");
        }
        j++;
      }

      //encrypting----------------------------------------------
      let encryptedMessage = [];
      for (let i = 0; i < M.length; i++) {
        if (this.abc.includes(M[i])) {
          let ind = (this.abc.indexOf(M[i]) + this.abc.indexOf(K[i])) % 26;
          encryptedMessage.push(this.abc[ind]);
        } else {
          encryptedMessage.push(M[i]);
        }
      }
      //--------------------------------------------------------

      if (this.mod == "Direct") {
        return encryptedMessage.join("");
      } else if (this.mod == "Reverse") {
        return encryptedMessage.reverse().join("");
      }
    } else {
      throw "Error";
    }
  }

  decrypt(encMessage, key) {
    if (encMessage && key) {
      //encMessage array------------------------------------------
      let EM = encMessage.toUpperCase().split("");

      //key array-------------------------------------------------
      let K = [],
        j = 0;

      for (let i = 0; i < EM.length; i++) {
        if (this.abc.includes(EM[i])) {
          K.push(key[j % key.length].toUpperCase());
        } else {
          j--;
          K.push(" ");
        }
        j++;
      }

      //decrypting-------------------------------------------------
      let decryptedMessage = [];
      for (let i = 0; i < EM.length; i++) {
        if (this.abc.includes(EM[i])) {
          let ind =
            (this.abc.indexOf(EM[i]) + 26 - this.abc.indexOf(K[i])) % 26;
          decryptedMessage.push(this.abc[ind]);
        } else {
          decryptedMessage.push(EM[i]);
        }
      }
      //------------------------------------------------------------

      if (this.mod == "Direct") {
        return decryptedMessage.join("");
      } else if (this.mod == "Reverse") {
        return decryptedMessage.reverse().join("");
      }
    } else {
      throw "Error";
    }
  }
}

module.exports = VigenereCipheringMachine;