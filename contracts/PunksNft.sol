pragma ton-solidity = 0.58.1;

pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import './Nft.sol';
import './interfaces/INftCreation.sol';

contract PunksNft is Nft {
    uint32 _rank;
    string _punkType;
    string _attributes;

    constructor(
        address owner,
        address author,
        address sendGasTo,
        uint128 remainOnNft,
        string json,
        mapping (address => uint8) royalty,
        uint128 indexDeployValue,
        uint128 indexDestroyValue,
        TvmCell codeIndex,
        uint32 rank,
        string punkType,
        string attributes
    ) Nft(
        owner,
        author,
        sendGasTo,
        remainOnNft,
        json,
        royalty,
        indexDeployValue,
        indexDestroyValue,
        codeIndex
    ) 
        public 
    {
        tvm.accept();

        _rank = rank;
        _punkType = punkType;
        _attributes = attributes;
        INftCreation(_collection).confirmNftCreation{value: 0.1 ever}(_id, owner, author);
    }

    function getPunkInfo() external responsible view returns (uint punkId, uint32 rank, string punkType, string attributes) {
        return {value: 0, flag: 64, bounce: false}(_id, _rank, _punkType, _attributes);
    }
}