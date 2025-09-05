// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract VideoHashRegistry {
    mapping(string => bool) private videoHashes;

    event HashRegistered(string hash);

    function addVideoHash(string memory _hash) public {
        require(!videoHashes[_hash], "Hash already exists");
        videoHashes[_hash] = true;
        emit HashRegistered(_hash);
    }

    function checkHashExistence(string memory _hash) public view returns (bool) {
        return videoHashes[_hash];
    }
}
