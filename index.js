var Wallet = require('ethereumjs-wallet');
let hdkey = require('ethereumjs-wallet/hdkey');
var EthUtil = require('ethereumjs-util');
let bip39 = require("bip39");

// private key
console.log('=== private key ===')
const privateKeyBuffer = EthUtil.toBuffer('0xb3daa3c32f6f6c71a3fc0c3af081e971c78706459f358b43451a1ba0d4ef3dba');
const wallet = Wallet.fromPrivateKey(privateKeyBuffer);

// public key from private key
const publicKey = wallet.getPublicKeyString();                                                                                                                                                                                                                                                               
console.log('public key : ' + publicKey);

// address from wallet
const address = wallet.getAddressString()
console.log('addres     : ' + address);
console.log();

// from mnemonic
console.log('=== mnemonic ===')
const mnemonic = "soldier clump basket brain suit wire whisper equip aim neck kangaroo rely";

// hd wallet from mnemonic
let hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeedSync(mnemonic));

// master key
console.log('master private key: ' + hdwallet.privateExtendedKey())
let wallet_hdpath = "m/44'/60'/0'/0/";

console.log();

// generate wallets
for (let i = 0; i < 10; i++) {
  let wallet = hdwallet.derivePath(wallet_hdpath + i).getWallet();
  let privateKey = wallet.getPrivateKeyString();
  let address = wallet.getAddressString();
  console.log('private key ' + i + ': ' + privateKey);
  console.log('address     ' + i + ': ' + address);
  console.log();
}
