import web3 from './web3';
import CampaignFactory from '../contracts/CampaignFactory.json';

const contractAddress = '0x2280cB3780CACe8da81dF119f9af16F3aF73c02A';
const { abi } = CampaignFactory;
export default new web3.eth.Contract(abi, contractAddress);