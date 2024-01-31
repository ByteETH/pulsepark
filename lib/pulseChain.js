export const pulseChain = {
    id: 369,
    name: 'PulseChain',
    network: 'PulseChain',
    nativeCurrency: {
      decimals: 18,
      name: 'PLS',
      symbol: 'PLS',
    },
    rpcUrls: {
      default: { http: ['https://rpc.pulsechain.com'] },
      public: { http: ['https://rpc.pulsechain.com'] },
    },
    blockExplorers: {
      etherscan: { name: 'PulseScan', url: 'https://otter.pulsechain.com' },
      default: { name: 'PulseScan', url: 'https://otter.pulsechain.com' },
    },
    contracts: {
      multicall3: {
        address: '0x0000000000000000000000000000000000000000', 
        blockCreated: 0,
      },
    },
  };