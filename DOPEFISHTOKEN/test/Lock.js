
const {expect} = require("chai");
const hre = require("hardhat");


describe("DOPEFISHTOKEN contract", function() {
  //global vars
  let Token;
  let DopeFishToken;
  let owner;
  let addr1;
  let addr2;
  let TotalCap = 10000000;
  

  beforeEach(async function() {
    Token = await hre.ethers.getContractFactory("DOPEFISHTOKEN");
    [owner, addr1, addr2] = await hre.ethers.getSigners();
    DopeFishToken = await Token.deploy(TotalCap);
  });

  describe("Deployment", function() {
    it("Should set the right owner", async function() {
      expect(await DopeFishToken.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function() {
      const ownerBalance = await DopeFishToken.balanceOf(owner.address);
      expect(await DopeFishToken.totalSupply()).to.equal(ownerBalance);
    });

    it("should set the max supply to the argument provided during deployment", async function() {
      const cap = await DopeFishToken.cap();
      expect(Number(hre.ethers.utils.formatEther(cap))).to.equal(TotalCap);
    });
  });

  describe("Transactions", function() {
    it("Should transfer tokens between accounts", async function() {
      // Transfer 50 tokens from owner to addr1
      await DopeFishToken.transfer(addr1.address, 50);
      const addr1Balance = await DopeFishToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(48);

      // Transfer 50 tokens from addr1 to addr2
      await DopeFishToken.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await DopeFishToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(48);
    });

    it("Should fail if sender doesn’t have enough tokens", async function() {
      const initialOwnerBalance = await DopeFishToken.balanceOf(owner.address);

      // Try to send 1 token from addr1 (0 tokens) to owner (1000000 tokens).
      // `require` will evaluate false and revert the transaction.
      await expect(DopeFishToken.connect(addr1).transfer(owner.address, 1)).to.be.revertedWith("ERC20: transfer amount exceeds balance");

      // Owner balance shouldn't have changed.
      expect(await DopeFishToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    });

    it("Should update balances after transfers", async function() {
      const initialOwnerBalance = await DopeFishToken.balanceOf(owner.address);

      // Transfer 100 tokens from owner to addr1.
      await DopeFishToken.transfer(addr1.address, 100);

      // Transfer another 50 tokens from owner to addr2.
      await DopeFishToken.transfer(addr2.address, 50);

      // Check balances.
      const finalOwnerBalance = await DopeFishToken.balanceOf(owner.address);
      expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(150));

      const addr1Balance = await DopeFishToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(97);

      const addr2Balance = await DopeFishToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(49);

    });
  });
  describe("Tax", function() {
    it("Should tax 3% on transfers", async function() {
      // Transfer 100 tokens from owner to addr1.
      await DopeFishToken.transfer(addr1.address, 100);
      const addr1Balance = await DopeFishToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(97);
    });

});
});
