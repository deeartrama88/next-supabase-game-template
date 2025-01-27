'use client';

import { NearContext } from '@/wallets/near';
import { HelloNearContract } from '@/wallets/config';
import { useContext, useState, useEffect } from 'react';
import { Stack, Typography, Button, Box, Divider } from '@mui/material';
import { colors } from '@/lib/theme/colors';
import { walletApi, nftContractApi, checkNFTOwnershipRPC } from '@/wallets/web3api';

const Shop = () => {
  // const { signedAccountId, wallet } = useContext(NearContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoggedIn(walletApi.accountId ? true : false);
  }, [walletApi.accountId]);

  const handleConnectWallet = async () => {
    if (loggedIn) {
      await walletApi.wallet.signOut().then(() => {
        setLoggedIn(false);
      });
    } else {
      await walletApi.signInModal();
    }
  };

  const fetchNFTs = async () => {
    try {
      const response = await nftContractApi.view('nft_tokens', {
        from_index: '0',
        limit: 50,
      });
      setNfts(response || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getAccountData = async () => {
    console.log(walletApi);
  };

  const checkNFTOwnership = async (tokenId = 'token-1') => {
    const tokens = await nftContractApi.view('nft_tokens');
    const token = tokens.find((token) => token.token_id === 'token-1');
    const isOwner = token && token.owner_id === walletApi.accountId;
    console.log(isOwner);
    return isOwner;
  };

  const handleCheckNFTRPC = async () => {
    const tokenId = 'token-1';
    const token = await checkNFTOwnershipRPC(tokenId);

    if (token) {
      console.log(`Token owner: ${token.owner_id}`);
      console.log(`Is owned by current account: ${token.owner_id === walletApi.accountId}`);
    } else {
      console.log(`Token ${tokenId} not found`);
    }
  };

  // Example usage
  const handleCheckNFT = async (tokenId) => {};

  return (
    <Stack>
      <Box bgcolor={colors.background.actionBg} width={'fit-content'}>
        <Button onClick={handleConnectWallet}>{loggedIn ? 'Disconnect' : 'Connect wallet'}</Button>
      </Box>

      <Typography variant="body2">
        {loggedIn ? `Connected to ${walletApi.accountId}` : 'Connect wallet'}
      </Typography>

      <Button onClick={fetchNFTs}>Load NFTs</Button>
      <Button onClick={getAccountData}>Get Account Data</Button>
      <Button onClick={checkNFTOwnership}>Check Specific NFT</Button>
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
