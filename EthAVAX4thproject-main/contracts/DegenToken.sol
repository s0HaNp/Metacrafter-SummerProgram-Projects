// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract DegenToken is ERC20, Ownable {

    constructor() ERC20("Degen", "DGN") {

    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    function TransferToken(address _reciever,uint amount) external  {
        require(balanceOf(msg.sender)>=amount,"Sorry, Not enough degan tokens available");
        approve(msg.sender, amount);
        transferFrom(msg.sender, _reciever, amount);
    }

    function redeem(uint256 item) external payable {
        uint amount;
        if (item ==1){
            amount=500;
        }
        else if(item ==2){
            amount=250;
        }
        else {
            amount=100;
        }
        require(amount > 0, "Invalid redeem amount");
        _burn(msg.sender, amount);
    }

    function showStore() external pure returns (string memory) {
        return "---1---.Degan Gaming PremiumUser NFT(500)---2---.Degan Gaming Tshirt NFT(250)---3---.Degan Gaming Spiderman NFT(100)---";
    }

}