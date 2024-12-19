// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "./Ownable.sol";


contract ZombieFactory is Ownable {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** 16; // **乘方操作, 5 ** 2 =  25

    uint cooldownTime = 1 days;
    struct Zombie {
        string name;
        uint dna;
        uint32 level;
        uint32 readyTime;
        uint16 winCount;
        uint16 lossCount;
    }
    Zombie[] public zombies;

    mapping(uint => address) public zombieToOwner;
    mapping(address => uint) ownerZombieCount;

    event NewZombie(uint zombieId, string name, uint dna);

    function  _createZombie(string memory _name, uint _dna) internal {
        zombies.push(Zombie(_name,_dna,1, uint32(block.timestamp + cooldownTime), 0, 0));
        uint zombieId = zombies.length - 1;
        zombieToOwner[zombieId] = msg.sender;
        ownerZombieCount[msg.sender] ++;
        
        emit NewZombie(zombieId, _name, _dna);
    }

    function _generateRandomDna(string memory _str) private view returns (uint) {
        uint rand = uint(keccak256(abi.encode(_str)));
        return rand % dnaModulus;
    }

    function createRandomZombie(string memory _str) public {
        // 保证用户只创建一个zombie
        require(ownerZombieCount[msg.sender] == 0);
        uint dna = _generateRandomDna(_str);
        _createZombie(_str, dna);
    }
}

