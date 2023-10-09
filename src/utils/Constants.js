export const ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "NewsMap",
        "outputs": [
            {
                "internalType": "string",
                "name": "infoUri",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "author",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "infoUri",
                "type": "string"
            }
        ],
        "name": "addNews",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "position",
                "type": "uint256"
            }
        ],
        "name": "deleteNewsByPosition",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "returnedCount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "position",
                "type": "uint256"
            }
        ],
        "name": "getNewsByPosition",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "infoUri",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "author",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct NewsUri",
                "name": "uri",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lastId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "newsIdArray",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

export const CHAIN_ID = parseInt(process.env.REACT_APP_CHAIN_ID)
export const CHAIN_RPC = process.env.REACT_APP_CHAIN_RPC

export const IPFS_GET_LINK = process.env.REACT_APP_IPFS_GATEWAY

export const CONTRACT = process.env.REACT_APP_CONTRACT_ADDRESS
export const CONTRACT_OWNER = process.env.REACT_APP_CONTRACT_OWNER

export const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;


