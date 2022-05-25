const PunksNftContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "author",
                        "type": "address"
                    },
                    {
                        "name": "sendGasTo",
                        "type": "address"
                    },
                    {
                        "name": "remainOnNft",
                        "type": "uint128"
                    },
                    {
                        "name": "json",
                        "type": "string"
                    },
                    {
                        "name": "royalty",
                        "type": "map(address,uint8)"
                    },
                    {
                        "name": "indexDeployValue",
                        "type": "uint128"
                    },
                    {
                        "name": "indexDestroyValue",
                        "type": "uint128"
                    },
                    {
                        "name": "codeIndex",
                        "type": "cell"
                    },
                    {
                        "name": "rank",
                        "type": "uint32"
                    },
                    {
                        "name": "punkType",
                        "type": "string"
                    },
                    {
                        "name": "attributes",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getPunkInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "punkId",
                        "type": "uint256"
                    },
                    {
                        "name": "rank",
                        "type": "uint32"
                    },
                    {
                        "name": "punkType",
                        "type": "string"
                    },
                    {
                        "name": "attributes",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "burn",
                "inputs": [
                    {
                        "name": "sendGasTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "royaltyInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "royalty",
                        "type": "map(address,uint8)"
                    }
                ]
            },
            {
                "name": "author",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "indexCode",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "indexCodeHash",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveIndex",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "collection",
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "index",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getJson",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "json",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "transfer",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "sendGasTo",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "name": "value",
                                "type": "uint128"
                            },
                            {
                                "name": "payload",
                                "type": "cell"
                            }
                        ],
                        "name": "callbacks",
                        "type": "map(address,tuple)"
                    }
                ],
                "outputs": []
            },
            {
                "name": "changeOwner",
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    },
                    {
                        "name": "sendGasTo",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "name": "value",
                                "type": "uint128"
                            },
                            {
                                "name": "payload",
                                "type": "cell"
                            }
                        ],
                        "name": "callbacks",
                        "type": "map(address,tuple)"
                    }
                ],
                "outputs": []
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "newManager",
                        "type": "address"
                    },
                    {
                        "name": "sendGasTo",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "name": "value",
                                "type": "uint128"
                            },
                            {
                                "name": "payload",
                                "type": "cell"
                            }
                        ],
                        "name": "callbacks",
                        "type": "map(address,tuple)"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "collection",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "supportsInterface",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "interfaceID",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_id",
                "type": "uint256"
            }
        ],
        "events": [
            {
                "name": "NftTransferred",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "NftCreated",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "collection",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "OwnerChanged",
                "inputs": [
                    {
                        "name": "oldOwner",
                        "type": "address"
                    },
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "ManagerChanged",
                "inputs": [
                    {
                        "name": "oldManager",
                        "type": "address"
                    },
                    {
                        "name": "newManager",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "NftBurned",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "collection",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_supportedInterfaces",
                "type": "optional(cell)"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_collection",
                "type": "address"
            },
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_json",
                "type": "string"
            },
            {
                "name": "_indexDeployValue",
                "type": "uint128"
            },
            {
                "name": "_indexDestroyValue",
                "type": "uint128"
            },
            {
                "name": "_codeIndex",
                "type": "cell"
            },
            {
                "name": "_royalty",
                "type": "map(address,uint8)"
            },
            {
                "name": "_author",
                "type": "address"
            },
            {
                "name": "_rank",
                "type": "uint32"
            },
            {
                "name": "_punkType",
                "type": "string"
            },
            {
                "name": "_attributes",
                "type": "string"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "0a69261e03676e90e1f48d102eed2480e226713f3f643baaa3d572a8ef97d555",
};
module.exports = { PunksNftContract };