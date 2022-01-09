const RSA=require('node-rsa')
const fs=require('fs')
function generatePair(){
    const key=new RSA().generateKeyPair()
    const publicKey=key.exportKey('public')
    const privateKey=key.exportKey('private')

    // Public keys
    fs.openSync('./keys/public.pem', 'w')
    fs.writeFileSync('./keys/public.pem', publicKey, 'utf-8')
// Private keys
    fs.openSync('./keys/private.pem', 'w')
    fs.writeFileSync('./keys/private.pem', privateKey, 'utf-8')
}
generatePair()