pragma ton-solidity = 0.58.1;

interface IRoyalty {
    function royaltyInfo() external view responsible returns(mapping (address => uint8) royalty);
}