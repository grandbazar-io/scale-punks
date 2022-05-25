pragma ton-solidity = 0.58.1;

pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import '@itgold/everscale-tip/contracts/TIP4_1/TIP4_1Nft.sol';
import '@itgold/everscale-tip/contracts/TIP4_2/TIP4_2Nft.sol';
import '@itgold/everscale-tip/contracts/TIP4_3/TIP4_3Nft.sol';
import './interfaces/IAuthor.sol';
import './interfaces/ITokenBurned.sol';
import './interfaces/IRoyalty.sol';
import './libraries/BaseErrors.sol';

contract Nft is TIP4_1Nft, TIP4_2Nft, TIP4_3Nft, IRoyalty, IAuthor {
    event NftTransferred(address to);

    mapping (address => uint8) _royalty;
    address _author;

    constructor(
        address owner,
        address author,
        address sendGasTo,
        uint128 remainOnNft,
        string json,
        mapping (address => uint8) royalty,
        uint128 indexDeployValue,
        uint128 indexDestroyValue,
        TvmCell codeIndex
    ) TIP4_1Nft(
        owner,
        sendGasTo,
        remainOnNft
    ) TIP4_2Nft (
        json
    ) TIP4_3Nft (
        indexDeployValue,
        indexDestroyValue,
        codeIndex
    ) public {
        tvm.accept();

        _royalty = royalty;
        _author = author;

        _supportedInterfaces[ bytes4(tvm.functionId(IRoyalty.royaltyInfo)) ] = true;
        _supportedInterfaces[ bytes4(tvm.functionId(IAuthor.author)) ] = true;
    }

    function _beforeChangeOwner(
        address oldOwner, 
        address newOwner,
        address sendGasTo, 
        mapping(address => CallbackParams) callbacks
    ) internal virtual override(TIP4_1Nft, TIP4_3Nft) {
        TIP4_3Nft._beforeChangeOwner(oldOwner, newOwner, sendGasTo, callbacks);
    }   

    function _afterChangeOwner(
        address oldOwner, 
        address newOwner,
        address sendGasTo, 
        mapping(address => CallbackParams) callbacks
    ) internal virtual override(TIP4_1Nft, TIP4_3Nft) {
        TIP4_3Nft._afterChangeOwner(oldOwner, newOwner, sendGasTo, callbacks);
    }

    function _beforeTransfer(
        address to, 
        address sendGasTo, 
        mapping(address => CallbackParams) callbacks
    ) internal virtual override(TIP4_1Nft, TIP4_3Nft) {
        TIP4_3Nft._beforeTransfer(to, sendGasTo, callbacks);
    }

    function _afterTransfer(
        address to, 
        address sendGasTo, 
        mapping(address => CallbackParams) callbacks
    ) internal virtual override(TIP4_1Nft, TIP4_3Nft) {
        TIP4_3Nft._afterTransfer(to, sendGasTo, callbacks);
        emit NftTransferred(to);
    }

    function burn(address sendGasTo) external virtual onlyManager {
        require(msg.value >= 0.5 ever, BaseErrors.not_enough_value);
        _destructIndex(sendGasTo);
        ITokenBurned(_collection).onTokenBurned{
            value: 0.4 ever,
            flag: 0 + 1,
            bounce: false
        }(_id, _owner, _manager, sendGasTo);
        selfdestruct(sendGasTo);
    }

    function royaltyInfo() external view responsible override returns(mapping(address => uint8) royalty) {
        return {value: 0, flag: 64, bounce: false}(_royalty);
    }

    function author() external view responsible override returns(address addr) {
        return {value: 0, flag: 64, bounce: false}(_author);
    }
}