# EthProofBeginner_Project
## MyToken
MyToken is a Solidity smart contract that implements a basic token functionality. It allows users to mint and burn tokens, thereby increasing or decreasing the total supply and individual token balances.

## Requirements
1. The contract has public variables that store the details about the token:
    * **TokenName**: A string representing the name of the token.                                                     
    * **TokenAbbrv**: A string representing the abbreviation of the token.
    * **TotalSupply**: An unsigned integer representing the total supply of the token.
2. The contract has a mapping of addresses to balances:
    * **balances**: A mapping that associates addresses with their corresponding token balances.
3. The contract provides a **mint** function:
    * Parameters: **address _address** - the address to receive the minted tokens.
      **uint _value** - the amount of tokens to mint.
    * Functionality: Increases the total supply by the specified amount (_value) and increases the balance of the specified address (_address) by the same amount.
4. The contract provides a **burn** function:
    * Parameters: **address _address** - the address from which to burn tokens.
      **uint _value** - the amount of tokens to burn.
    * Functionality: Decreases the total supply by the specified amount (_value) and decreases the balance of the specified address (_address) by the same amount. The burn        operation is only executed if the balance of the address is greater than or equal to the amount to be burned.
## Usage
To use the MyToken contract, follow these steps:

1. Deploy the contract on a compatible Ethereum Virtual Machine (EVM) such as the Ethereum mainnet, testnet, or a local development network.
2. Interact with the contract using a compatible wallet or by calling its functions from another contract.
   * Get token details:
      * Call the **TokenName()** function to retrieve the name of the token.
      * Call the **TokenAbbrv()** function to retrieve the token abbreviation.
      * Call the **TotalSupply()** function to retrieve the total supply of the token.
   * Mint tokens:
      * Call the **mint(address _address, uint _value)** function, specifying the address to receive the minted tokens **(_address)** and the amount of tokens to mint      
        **(_value)**.
   * Burn tokens:
      * Call the **burn(address _address, uint _value)** function, specifying the address from which to burn tokens **(_address)** and the amount of tokens to burn
        **(_value)**.
3. Ensure proper access control:
    * The contract does not include any access control mechanisms, so make sure to implement appropriate access restrictions based on your specific requirements.
4. Test thoroughly:
    * Before deploying the contract in a production environment, thoroughly test its functionality to ensure it behaves as expected and meets your project's requirements.
## License
This contract is released under the [MIT License]. See LICENSE file for more information.
Feel free to update and customize this README file to suit your specific project and requirements.
