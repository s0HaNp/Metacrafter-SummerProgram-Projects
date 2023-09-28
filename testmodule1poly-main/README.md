# Polygon Module 1 project
You will deploy an NFT collection on the Ethereum blockchain, Map the collection to Polygon, and Transfer assets over via the Polygon Bridge. To put a twist on the project, use an image generation tool - like DALLE 2 or Midjourney - to the images for your NFTs.

## Description
Project aim:
1. Generate a 5-item collection using DALLE 2 or Midjourney
2. Store items on IPFS using pinata.cloud
3. Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
4. You should have a promptDescription function on the contract that returns the prompt you used to generate the images
5. Map Your NFT Collection using Polygon network token mapper. Note: this isn’t necessary but helpful for visualization.
6. Write a hardhat script to batch mint all NFTs. Hint: ERC721A is optimal here.
7. Write a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge
8. Approve the NFTs to be transferred
9. Deposit the NFTs to the Bridge
10. Test balanceOf on Mumbai.

## Steps
Prequisites; generate 5 item collection using Dalle2 or midjourney or using Gencraft(free source) and upload in pinta.cloud and store the url.
1. First clone this project.
2. For this project I have used sepolia testnet and Mumbai Testnet. In order to execute properly you need have to test ethers you can get in your account from here: https://sepoliafaucet.com/
3. Then keep your private key which has test ethers in your hardhat config.
4. Now run this command `npx hardhat run scripts/deploy.js --network sepolia`.
5. Once the above command is runned successfully copy the deployed contract address and paste it in the batchMint.js file and approvedDeposit.js file.
6. And now run this in your terminal `npx hardhat run scripts/batchMint.js --network sepolia`.
7. Finally run this command `npx hardhat run scripts/approvedDeposit.js --network sepolia`.
8. That's it if you executed all the commands successfully you will get a output stating mumbai test net balance for the nubmer of NFT's received from sepolia test net.

## Authors
Sohan Kumar Potti
[sohanpotti@gmail.com,21BCS3514@cuchd.in]

## LICENSE 
This contract is released under the [MIT License]. See LICENSE file for more information. Feel free to update and customize this README file to suit your specific project and requirements.
