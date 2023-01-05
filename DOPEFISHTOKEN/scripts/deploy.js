
const hre = require("hardhat");

async function main() {
  const DOPEFISHTOKEN = await hre.ethers.getContractFactory("DOPEFISHTOKEN");
  const dopefishtoken = await DOPEFISHTOKEN.deploy(10000000);

  await dopefishtoken.deployed();

  console.log(
    `L deployed to ${dopefishtoken.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
