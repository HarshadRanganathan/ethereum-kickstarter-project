import web3 from './web3';
import CampaignFactory from '../contracts/CampaignFactory.json';

const contractAddress = '0xf96ffD18Cfe646692b192cAd5753c459e009380c';
const { abi } = CampaignFactory;
export default new web3.eth.Contract(abi, contractAddress);