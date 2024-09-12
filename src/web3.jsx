import Web3 from "web3"

const getWeb3 = () => {
    return new Promise(async (resolve, reject) => {
      window.addEventListener("load", async () => {
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          try {
            await window.ethereum.enable(); // Request account access
            resolve(web3);
          } catch (error) {
            reject(error);
          }
        } else if (window.web3) {
          resolve(new Web3(window.web3.currentProvider));
        } else {
          reject(new Error("Must install MetaMask"));
        }
      });
    });
  };
  
  export default getWeb3;