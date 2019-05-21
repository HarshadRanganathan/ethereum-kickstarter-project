# ethereum-kickstarter-project

Allows you to create and manage campaigns in Rinkeby network using ethereum smart contracts.

This is based on Stephen Grider's Udemy Course.

Packages utilized:
  - [Next JS](https://nextjs.org/) - Server Rendered Apps
  - [Web3 JS](https://web3js.readthedocs.io/en/1.0/) - Ethereum Javascript API
  - [Semantic UI](https://react.semantic-ui.com/) - User Interface

![Ethereum Kickstarter Project](https://i.imgur.com/ZJnIbFN.gif)

## Pre-Requisites

You need to install [metamask browser extension](https://metamask.io/) and create an account.

Once your account is ready, you need to add some ether balance using [Rinkeby Authenticated Faucet](https://faucet.rinkeby.io/).

In the absence of metamask, the project will fallback to using [Infura node](https://infura.io/) to access Rinkeby network.

## Smart Contract

Campaign contract is deployed at address `0x2280cB3780CACe8da81dF119f9af16F3aF73c02A` and is available inside the contracts folder.

Our app will interact with the deployed contract to create campaigns.

## Running the project

```
npm run dev
```

Go to browser at address http://localhost:3000 to access the web page.

Next JS performs server side rendering of the pages and hot reloading as you make any changes to the code.

## Operations

### Create Campaign

You can create a campaign by specifying a minimum contribution required. 

Once the campaign is created, you become the manager of the campaign and will be able to create requests which needs to be approved by the contributors.

Any user who contributes below the requirement for the campaign will have their transaction rejected.

### View Campaign

Shows details of the campaign such as address of the account which created the campaign, minimum contribution required, campaign balance, number of people who have donated for the campaign and number of requests created by the manager.

### Contribute

Allows you to contribute to the campaign.

### View Requests

List the requests created by the manager for the campaign.

Contributors can approve the requests.

Once the approval criteria is met, the manager can finalize the request for payment to the recipient.

### Add Request

Manager of a campaign can create a request which will be fulfilled by the recipient.

Once more than 50% of the campaign contributors approve the request, the manager can finalize the payment to the vendor. 