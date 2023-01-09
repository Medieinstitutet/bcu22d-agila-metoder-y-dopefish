// contracts/DopsFish.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";




contract DOPEFISHTOKEN is ERC20Burnable, ERC20Capped{
    // using SafeMath for uint256;
    address payable public owner;


    constructor(uint256 cap) ERC20("DOPEFISHTOKEN", "DOPE") ERC20Capped(cap * (10 ** decimals())) {
        owner = payable(msg.sender);
        _mint(owner, 7000000 * (10 ** decimals()));
        _burn(owner, 1000000 * (10 ** decimals()));
    }

    function burn() internal {
        
        uint burnAmount = totalSupply() * 10 / 100;
        _burn(owner, burnAmount);
    }

//  function setPercentageFee(uint256 fee) external onlyOwner {
//     percentage = fee;
//   }

//   function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool) { 
//     uint256 percentageFee = (amount.mul(percentage)).div(10000);
//     address spender = _msgSender();
//     _spendAllowance(from, spender, amount);
//     uint256 total = amount.sub(percentageFee);
//     transfer(address(this), percentageFee);
//     transfer(to ,total);
//     return true;
//   }
    

    function _mint (address account, uint256 amount) internal override(ERC20, ERC20Capped) {
        require(ERC20.totalSupply() + amount <= cap(), "ERC20Capped: cap exceeded" );
        super._mint(account, amount);
    }

    function destroy() public onlyOwner {
        selfdestruct(owner);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }
}


