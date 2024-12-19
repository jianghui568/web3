// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "./ZombieBattle.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/// @title 一个ERC721
/// @author shuke
/// @notice 基本的交易
contract ZombieOwnership is ZombieBattle, ERC721 {
    

    mapping(uint => address) zombieApprovals;

    constructor() ERC721("MyNFT", "MNFT") {
    }

    function balanceOf(address _owner) public view virtual override returns (uint256 _balance) {
        return ownerZombieCount[_owner];
    }
    function ownerOf(uint256 tokenId) public view virtual override returns (address) {
        require(zombieToOwner[tokenId] != address(0), "Token does not exist");
        return zombieToOwner[tokenId];
    }

    function transfer(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
        _transfer(msg.sender, _to, _tokenId);
    }

    function approve(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
        zombieApprovals[_tokenId] = _to;
        Approve(msg.sender, _to, _tokenId);
    }

    function takeOwnership(uint256 _tokenId) public {
        require(msg.sender == zombieApprovals[_tokenId]);
        address owner = ownerOf(_tokenId);
        _transfer(owner, msg.sender, _tokenId);
    }

    function _transfer(address _from, address _to, uint256 _tokenId) private {
        ownerZombieCount[_to]++;
        ownerZombieCount[_from]--;
        zombieToOwner[_tokenId] = _to;
        Transfer(_from, _to, _tokenId);
    }
}