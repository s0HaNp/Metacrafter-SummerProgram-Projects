// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MyToken {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    string public TokenName = "Sohan";
    string public TokenAbbrv = "Skp";
    uint256 public TotalSupply = 0;

    mapping(address => uint256) public balances;

    function mint(address _address, uint256 _value) public {
        require(_address == owner, "Only the contract owner can mint tokens");
        TotalSupply += _value; //TotalSupply=TotalSupply+_value
        balances[_address] += _value;
    }

    function burn(address _address, uint256 _value) public {
        if (balances[_address] >= _value) {
            TotalSupply -= _value; //TotalSupply=TotalSupply-_value
            balances[_address] -= _value;
        }
    }

    function transfer( address _from,address _to,uint256 value) public {
        if (balances[_from] >= value) {

            balances[_from] -= value;
            balances[_to] += value;

        }
    }
}
