import VideoHashRegistryABI from './blockchain/artifacts/contracts/VideoHashRegistry.sol/VideoHashRegistry.json';

const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, VideoHashRegistryABI.abi, signer);
