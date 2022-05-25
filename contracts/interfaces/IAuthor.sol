pragma ton-solidity = 0.58.1;

interface IAuthor {
    function author() external view responsible returns(address addr);
}