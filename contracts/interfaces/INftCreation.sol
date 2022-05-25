pragma ton-solidity = 0.58.1;

interface INftCreation {
    function confirmNftCreation(uint256 id, address nftOwner, address nftAuthor) external;
}