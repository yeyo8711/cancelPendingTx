const { ethers } = require("ethers");
// INSERT PK HERE
const privateKey = "";
const rpc = "https://rpc.ankr.com/eth";
const provider = new ethers.JsonRpcProvider(rpc);
const wallet = new ethers.Wallet(privateKey, provider);

const send = async () => {
  try {
    const currentGas = await provider.getFeeData();
    const newGas = Number(
      ethers.formatUnits(currentGas.gasPrice, 9) * 1.05
    ).toFixed(2);
    console.log(newGas);
    const params = {
      to: "vitalik.eth",
      value: 0,
      // Change NONCE HERE
      nonce: 7,
      gasLimit: 22000,
      gasPrice: currentGas.gasPrice, //ethers.parseUnits(newGas.toString(), 9),
    };
    await wallet.sendTransaction(params);
  } catch (error) {
    console.log(error);
  }
};

send().catch((e) => console.log(e));
