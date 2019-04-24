import web3 from './web3';

const contractAddress = '0xf96ffD18Cfe646692b192cAd5753c459e009380c';
const abi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"deployedCampaigns","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getDeployedCampaigns","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"minimum","type":"uint256"}],"name":"createCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

export default new web3.eth.Contract(abi, contractAddress);