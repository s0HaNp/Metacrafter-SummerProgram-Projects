# Eth_Avax_intermediateModule1Project
Write a smart contract that implements the require(), assert() and revert() statements.

## ErrorHandling Contract
The ErrorHandling contract is a Solidity smart contract that demonstrates error handling using different mechanisms such as **require**, **revert**, and **assert**. It provides three functions to showcase each error handling mechanism individually.

## Requirements
* Solidity version 0.8.18 or higher
  
## Usage
1. Deploy the **ErrorHandling** contract on a compatible Ethereum Virtual Machine (EVM) such as the Ethereum mainnet, testnet, or a local development network.
2. Interact with the contract using a compatible wallet or by calling its functions from another contract.
   *  **testRequire(uint _x):** This function demonstrates error handling using the require statement. Pass an unsigned integer **_x** as an input parameter. The function         checks if **_x** is greater than 10. If the condition is not met, the transaction reverts with an error message stating that **_x** is less than 10. Otherwise, the          **y** variable is incremented by one.
   *  **testRevert(uint _b):** This function demonstrates error handling using the revert statement. Pass an unsigned integer **_b** as an input parameter. The function           checks if **_b** is less than 10 using an **if** statement. If the condition is true, indicating that **_b** is indeed less than 10, the transaction reverts with an         error message stating that **_b** is greater than 10. Otherwise, the **y** variable is incremented by one.
   *  **testAssert():** This function demonstrates error handling using the assert statement. It does not take any input parameters. The function asserts that the value of        the **s** variable is equal to zero. If the assertion fails, indicating that **s** is not zero, the transaction reverts. Otherwise, the **j** variable is incremented        by one.
3. Ensure proper access control: The contract does not include any access control mechanisms, so make sure to implement appropriate access restrictions based on your       
   specific requirements.
4. Test thoroughly: Before deploying the contract in a production environment, thoroughly test its functionality to ensure it behaves as expected and meets your project's   
   requirements.

## License
This contract is released under the MIT License. See **LICENSE** for more information. Feel free to update and customize this README file to suit your specific project and requirements.
