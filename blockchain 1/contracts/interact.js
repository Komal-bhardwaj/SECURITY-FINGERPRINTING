const hre = require("hardhat");

async function main() {
  const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
  const VideoHashRegistry = await hre.ethers.getContractFactory("VideoHashRegistry");
  const videoHashRegistry = VideoHashRegistry.attach(contractAddress);

  // Add a hash
  const tx = await videoHashRegistry.addVideoHash("example_video_hash");
  await tx.wait();
  console.log("Hash added!");

  // Check if hash exists
  const exists = await videoHashRegistry.checkHashExistence("example_video_hash");
  console.log("Hash exists:", exists);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });