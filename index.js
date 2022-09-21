const keythereum = require("keythereum");
const prompt = require("prompt-sync")();

function main() {
    const address = prompt("Please enter the public address: ");
    const path = prompt("Please enter the path to the keystore directory: ");
    const keyObject = keythereum.importFromFile(address, path);
    const password = prompt("Please enter your password: ");
    try {
        const privateKey = keythereum.recover(password, keyObject);
        console.log("private key: ", privateKey.toString("hex"));
        console.log("private key length: ", privateKey.length);
    } catch (error) {
        console.log(error.message);
    }
}

main();