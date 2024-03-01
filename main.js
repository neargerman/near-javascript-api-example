(async () => {

    //import modules
    const nearAPI = require("near-api-js");

    // set up key store
    const { keyStores, KeyPair } = nearAPI;
    const myKeyStore = new keyStores.InMemoryKeyStore();
    const PRIVATE_KEY = "xxx";
    
    // creates a public / private key pair using the provided private key
    const keyPair = KeyPair.fromString(PRIVATE_KEY);

    // adds the keyPair you created to keyStore
    await myKeyStore.setKey("mainnet", "example-account.mainnet", keyPair);

    //connect to Near 
    const { connect } = nearAPI;

    const connectionConfig = {
    networkId: "mainnet",
    keyStore: myKeyStore, // first create a key store
    nodeUrl: "https://rpc.mainnet.near.org",
    walletUrl: "https://wallet.mainnet.near.org",
    helperUrl: "https://helper.mainnet.near.org",
    explorerUrl: "https://nearblocks.io",
    };

    //connect with the Near mainnet
    const nearConnection = await connect(connectionConfig);

    //test connection and retrieve account details
    const account = await nearConnection.account("example-account.near");
    console.log(await account.getAccountDetails());

 })()