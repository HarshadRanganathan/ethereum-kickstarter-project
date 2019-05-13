import web3 from './web3';
import Campaign from '../contracts/Campaign.json';

const { abi } = Campaign;
export default (address) => {
    return new web3.eth.Contract(abi, address);
}