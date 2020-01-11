import Web3 from '../Web3';
import CarStorage from '../../build/contracts/CarToken.json'
import contract from 'truffle-contract';

const CarStorageContract = contract(CarStorage);
let carInstance = new Web3.eth.Contract(CarStorageContract.abi, CarStorageContract.networks[100].address);

let mintToken = async (to,tokenURI) => {
    try {
   
        const accounts = await Web3.eth.getAccounts();
        const res = await carInstance.methods.mintTo(to,tokenURI)
            .send({
                from: accounts[1],
                gas: 8000000
            });
        return Promise.resolve(res);
    } catch (err) {
        return Promise.reject(err);
    }
};




// eslint-disable-next-line import/prefer-default-export
export {
   mintToken
};