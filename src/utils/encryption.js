const crypto = require('crypto');
const AES_KEY = 'bdd0e4fe5ae0e30e7967cfb23d849de5dfd424c98798ef7662e526638af828c0';
const AES_IV = '988b9f57db013d17e3877862a905013a';
export default {
    encryptAES: (text) => {
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(AES_KEY, 'hex'), Buffer.from(AES_IV, 'hex'));
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return (encrypted.toString('hex'));
    },
    decryptAES: (encryptedTEXT) => {
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(AES_KEY, 'hex'), Buffer.from(AES_IV, 'hex'));
        let encryptedText = Buffer.from(encryptedTEXT, 'hex');
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
};