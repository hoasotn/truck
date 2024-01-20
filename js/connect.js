document.getElementById('connectWallet').addEventListener('click', async () => {
  try {
    if (window.solana && window.solana.isPhantom) {
      const response = await window.solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
    } else if (window.solflare) {
      const response = await window.solflare.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
    } else {
      console.log('Solana object not found! Get a Phantom Wallet 👻');
    }
  } catch (err) {
    console.error(err);
  }
});

window.addEventListener('load', async () => {
  if (window.solana && window.solana.isPhantom) {
    console.log('Phantom wallet found!');
  } else {
    console.log('No Phantom wallet detected.');
  }
});
