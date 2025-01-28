'use client';

import { NearContext } from '@/wallets/near';
// import { HelloNearContract } from '@/wallets/config';
import { useContext, useState, useEffect } from 'react';
import { Stack, Typography, Button, Box, Divider } from '@mui/material';
import { colors } from '@/lib/theme/colors';
// import naxios from '@wpdas/naxios';
// import { walletApi, nftContractApi, checkNFTOwnershipRPC } from '@/wallets/web3api';

const Shop = () => {
  const { signedAccountId, wallet } = useContext(NearContext);
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState('0');

  useEffect(() => {
    if (signedAccountId) {
      fetchBalance();
    }
  }, [signedAccountId]);

  const fetchBalance = async () => {
    try {
      const account = await wallet.getAccountData(signedAccountId);
      console.log(account);
      // Convert yoctoNEAR to NEAR (1 NEAR = 10^24 yoctoNEAR)
      const nearBalance = (Number(account.amount) / 10 ** 24).toFixed(2);
      setBalance(nearBalance);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  const handleConnectWallet = async () => {
    if (signedAccountId) {
      await wallet.signOut();
      setBalance('0');
    } else {
      await wallet.signIn();
    }
  };

  const fetchNFTs = async () => {
    const res = await wallet.viewMethod({
      contractId: signedAccountId,
      method: 'nft_tokens_for_owner',
      args: {
        from_index: '0',
        limit: 50,
        account_id: signedAccountId,
      },
    });
    setNfts(res);
  };

  const getAccountData = async () => {
    const res = await wallet.getAccountData(signedAccountId);
    const balance = await wallet.getBalance(signedAccountId);
    console.log(res, balance);
  };

  const checkNFTOwnership = async (tokenId = 'token-1') => {
    const tokens = await nftContractApi.view('nft_tokens');
    const token = tokens.find((token) => token.token_id === 'token-1');
    const isOwner = token && token.owner_id === signedAccountId;
    console.log(isOwner);
    return isOwner;
  };

  const handleCheckNFTRPC = async () => {
    const tokenId = 'token-1';
    const token = await checkNFTOwnershipRPC(tokenId);
    if (token) {
      console.log(`Token owner: ${token.owner_id}`);
      console.log(`Is owned by current account: ${token.owner_id === signedAccountId}`);
    } else {
      console.log(`Token ${tokenId} not found`);
    }
  };

  // Example usage
  const handleCheckNFT = async (tokenId) => {};

  return (
    <Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box bgcolor={colors.background.actionBg} width={'fit-content'}>
          <Button onClick={handleConnectWallet}>
            {signedAccountId ? 'Disconnect' : 'Connect wallet'}
          </Button>
        </Box>
        {signedAccountId && (
          <Typography variant="body2" sx={{ color: colors.text.primary }}>
            {balance} NEAR
          </Typography>
        )}
      </Stack>

      <Typography variant="body2">
        {signedAccountId ? `Connected to ${signedAccountId}` : 'Connect wallet'}
      </Typography>

      <Button onClick={fetchNFTs}>Load NFTs</Button>
      <Button onClick={getAccountData}>Get Account Data</Button>
      <Button onClick={checkNFTOwnership}>Check Specific NFT</Button>
      <Button onClick={() => handleCheckNFTRPC()}>Check NFT via RPC</Button>
      {nfts?.length > 0 && (
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
