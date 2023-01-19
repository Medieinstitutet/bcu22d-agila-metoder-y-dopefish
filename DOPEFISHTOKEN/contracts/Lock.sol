// contracts/DopsFish.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";




contract DOPEFISHTOKEN is ERC20Burnable, ERC20Capped{
    using SafeMath for uint256;
    address payable public owner;

    uint256 public Marketing_Fee = 3;
    address public Marketing_Wallet = 0x20186216A1BB9C850838455Bd0A51FDcE31930ea;


    constructor(uint256 cap) ERC20("DOPEFISHTOKEN", "DOPE") ERC20Capped(cap * (10 ** decimals())) {
        owner = payable(msg.sender);
        _mint(owner, 7000000 * (10 ** decimals()));
        _burn(owner, 1000000 * (10 ** decimals()));
    }

    function burn() internal {
        
        uint burnAmount = totalSupply() * 10 / 100;
        _burn(owner, burnAmount);
    }


    function _transfer (address sender, address recipient, uint256 amount) internal override {
        require(recipient != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(sender, recipient, amount);

        uint256 marketingAmount = amount.mul(Marketing_Fee).div(100);
        uint256 sendAmount = amount.sub(marketingAmount);

        require(balanceOf(sender) >= sendAmount, "ERC20: transfer amount exceeds balance");

        super._transfer(sender, recipient, sendAmount);
        super._transfer(sender, Marketing_Wallet, marketingAmount);



        _afterTokenTransfer(sender, recipient, sendAmount);
    }
    

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


