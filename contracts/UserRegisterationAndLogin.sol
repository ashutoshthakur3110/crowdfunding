// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserRegistrationAndLogin{
    struct User {
        string username;
        string email;
        bytes32 passwordHash;
        bool isRegistered;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed userAddress, string username, string email);
    event LoginSuccessful(address indexed userAddress);

    // Register a new user
    function registerUser(string memory _username, string memory _email, string memory _password) public {
        require(!users[msg.sender].isRegistered, "User already registered!");

        bytes32 passwordHash = keccak256(abi.encodePacked(_password));

        users[msg.sender] = User({
            username: _username,
            email: _email,
            passwordHash: passwordHash,
            isRegistered: true
        });

        emit UserRegistered(msg.sender, _username, _email);
    }

    
    function loginUser(string memory _password) public view returns (bool) {
        require(users[msg.sender].isRegistered, "User is not registered!");

        bytes32 inputPasswordHash = keccak256(abi.encodePacked(_password));
        return inputPasswordHash == users[msg.sender].passwordHash;
    }
}
