'use client';

import { NearContext } from '@/wallets/near';
import { HelloNearContract } from '@/wallets/config';
import { useContext, useState, useEffect } from 'react';
import { Stack, Typography, Button, Box, Divider } from '@mui/material';
import { colors } from '@/lib/theme/colors';

// Contract that the app will interact with
const CONTRACT = HelloNearContract;

const Shop = () => {
  const { signedAccountId, wallet } = useContext(NearContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoggedIn(!!signedAccountId);
  }, [signedAccountId]);

  const handleConnectWallet = async () => {
    if (loggedIn) {
      await wallet.signOut();
    } else {
      await wallet.signIn();
    }
  };

  const fetchNFTs = async () => {
    if (!signedAccountId) {
      alert('Please login first');
      return;
    }

    setLoading(true);
    try {
      // Fetch NFT contracts that the account has interacted with
      const result = await wallet.viewMethod({
        contractId: CONTRACT,
        method: 'nft_tokens_for_owner',
        args: {
          account_id: signedAccountId,
        },
      });
      console.log(result);

      setNfts(result);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
      alert('Error fetching NFTs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getAccountData = async () => {
    const accountData = await wallet.getAccountData(signedAccountId);
    console.log(accountData);
  };

  const checkNFTOwnership = async (tokenId) => {
    if (!signedAccountId) {
      alert('Please login first');
      return false;
    }

    try {
      const token = await wallet.viewMethod({
        contractId: CONTRACT,
        method: 'nft_token',
        args: {
          token_id: tokenId,
        },
      });

      // Check if token exists and belongs to the signed account
      return token && token.owner_id === signedAccountId;
    } catch (error) {
      console.error('Error checking NFT ownership:', error);
      return false;
    }
  };

  const checkNFTOwnershipRPC = async (accountId, tokenId) => {
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
            account_id: CONTRACT,
            method_name: 'nft_token',
            args_base64: Buffer.from(JSON.stringify({ token_id: tokenId })).toString('base64'),
          },
        }),
      });

      const result = await response.json();
      if (result.error) {
        throw new Error(result.error.message);
      }

      // Parse the result from base64
      const token = JSON.parse(Buffer.from(result.result.result).toString());
      return token && token.owner_id === accountId;
    } catch (error) {
      console.error('Error checking NFT ownership via RPC:', error);
      return false;
    }
  };

  const handleCheckNFTRPC = async () => {
    const accountToCheck = 'denthai2.testnet';
    const tokenToCheck = 'token-1';
    const hasNFT = await checkNFTOwnershipRPC(accountToCheck, tokenToCheck);
    console.log(
      `Account ${accountToCheck} ${hasNFT ? 'owns' : 'does not own'} NFT ${tokenToCheck}`
    );
  };

  // Example usage
  const handleCheckNFT = async (tokenId) => {
    const hasNFT = await checkNFTOwnership(tokenId);
    console.log(`User ${hasNFT ? 'owns' : 'does not own'} NFT ${tokenId}`);
  };

  return (
    <Stack>
      <Box bgcolor={colors.background.actionBg} width={'fit-content'}>
        <Button onClick={handleConnectWallet}>{loggedIn ? 'Disconnect' : 'Connect wallet'}</Button>
      </Box>

      <Typography variant="body2">
        {loggedIn ? `Connected to ${signedAccountId}` : 'Connect wallet'}
      </Typography>

      <Button onClick={fetchNFTs}>Load NFTs</Button>
      <Button onClick={getAccountData}>Get Account Data</Button>
      <Button onClick={() => handleCheckNFT(nfts[0]?.token_id)}>Check Specific NFT</Button>
      <Button onClick={() => handleCheckNFTRPC()}>Check NFT via RPC</Button>
      {nfts.length > 0 && (
        <>
          <h3>Your NFTs:</h3>
          <Stack>
            {nfts.map((nft, index) => (
              <Stack
                key={index}
                gap={1}
                p={1}
                width={'200px'}
                bgcolor={'#3c4958'}
                color={'black'}
                borderRadius={1}
              >
                {nft.metadata?.media && <img src={nft.metadata.media} alt={nft.metadata.title} />}
                <Divider />
                <Typography variant="body2">{nft.metadata?.title || 'Unnamed NFT'}</Typography>
                <Divider />
                <Typography variant="body2">
                  {nft.metadata?.description || 'No description'}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default Shop;
