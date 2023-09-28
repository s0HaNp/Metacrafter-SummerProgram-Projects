# Eth_Avax_intermediateModule3Project

This project demonstrates the creation of a custom token on a local HardHat network using a Solidity smart contract. The contract allows the contract owner to mint new tokens, while any user can burn and transfer tokens between addresses.

## MyToken Solidity Contract

The MyToken contract represents a token called MyToken. It allows the contract owner to mint new tokens, burn existing tokens, and transfer tokens between addresses.

### Prequisites
1. In Command prompt type npm -v(to get the npm version). If you get error you have to install nodejs.
2. To install hardhat go to ur project directly and oper terminal.
3. Then type npm install --save-dev hardhat.
4. Then after installation of hardhat now run npx hardhat node in your directly to run the hardhat network locally.
5. The follow the required steeps in Steps section.

### Functionality of smart contract

The contract provides the following functionality:
1. Constructor
The constructor function sets the contract owner as the address that deployed the contract.
2. mint functoin
The mint function allows the contract owner to create new tokens and assign them to a specified address.
3. burn function
The burn function allows any user to burn their own tokens, reducing the total supply and their token balance.
4. transfer function
The transfer function enables users to transfer tokens from one address to another.

## Steps

To use this contract:

1. Open a terminal on your system.
2. Deploy a local HardHat network by running npx hardhat node for the local blockchain where you will get the test accounts.
3. Deploy your Smart contract on Remix ide.
4. Set the environment to dev-Hardhat provider since we will deploy using our local hardhat network.
5. Set the contract owner as the desired address.
6. Call the mint function to create new tokens and assign them to an address.
7. Call the burn function to burn existing tokens from an address.
8. Call the transfer function to transfer tokens from one address to another.

## License

This contract is licensed under the MIT License. See the [LICENSE] file for more details.
