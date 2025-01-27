import naxios from '@wpdas/naxios';
import { HelloNearContract } from './config';

export const walletApi = new naxios({
  contractId: 'denthai2.testnet',
  network: 'testnet',
}).walletApi();

export const nftContractApi = new naxios({
  contractId: 'denthai2.testnet',
  network: 'testnet',
}).contractApi();

export const checkNFTOwnershipRPC = async (tokenId: string) => {
  try {
    const response = await fetch('https://rpc.testnet.near.org', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'dontcare',
        method: 'query',
        params: {
          request_type: 'call_function',
          finality: 'final',
          account_id: HelloNearContract,
          method_name: 'nft_token',
          args_base64: Buffer.from(JSON.stringify({ token_id: tokenId })).toString('base64'),
        },
      }),
    });

    const result = await response.json();
    console.log('RPC Response:', result);

    if (result.error) {
      throw new Error(result.error.message);
    }

    if (!result.result?.result) {
      console.log('No token found');
      return null;
    }

    // Parse the result from base64
    const token = JSON.parse(Buffer.from(result.result.result).toString());
    console.log('Token data:', token);
    return token;
  } catch (error) {
    console.error('Error checking NFT ownership:', error);
    return null;
  }
};
