const hre = require("hardhat");

async function main() {
  const VideoHashRegistry = await hre.ethers.getContractFactory("VideoHashRegistry");
  const videoHashRegistry = await VideoHashRegistry.deploy();

  await videoHashRegistry.deployed();

  console.log("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", videoHashRegistry.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
