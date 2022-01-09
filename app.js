const RSA=require('node-rsa')
const fs=require('fs')
const publicKey=new RSA()
const privateKey=new RSA()

const public=fs.readFileSync('./keys/public.pem', 'utf8')
const private=fs.readFileSync('./keys/private.pem', 'utf8')

publicKey.importKey(public)
privateKey.importKey(private)

function createLicense(mail){
const salt1='bnfkeoeoritgjbncxmz,l;weproifgjj'
const salt2='#$%^&*()(*&Rtyjk vmfkdodkfgmfkll,'

let encrypted=privateKey.encryptPrivate(salt1+mail+salt2, 'base64')
return encrypted
}

function checkValidity(license){
  const decrypted=publicKey.decryptPublic(license, 'utf8')
  if('bnfkeoeoritgjbncxmz,l;weproifgjja@example.com#$%^&*()(*&Rtyjk vmfkdodkfgmfkll,' ==decrypted){
      return true
  }else{
    return false

  }
}
  const licenseNumber=createLicense(('a@example.com'))
 console.log('License  '+licenseNumber)
 console.log(checkValidity(licenseNumber))