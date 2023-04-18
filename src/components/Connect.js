import React from 'react';
import {ethers} from 'ethers'
import detectEthereumProvider from '@metamask/detect-provider'

const provider =  detectEthereumProvider()

// if (provider) {

//   console.log('Ethereum successfully detected!')

//   // From now on, this should always be true:
//   // provider === window.ethereum

//   // Access the decentralized web!

//   // Legacy providers may only have ethereum.sendAsync
  const chainId =  provider.request({
    method: 'eth_chainId'
  })

  console.log(chainId)
// } else {

//   // if the provider is not detected, detectEthereumProvider resolves to null
//   console.error('Please install MetaMask!')
// }



// const provider = new ethers.Web3Provider(window.ethereum)
    let accounts;
  ;

export const ConnectToMetamask = async () => {
  console.log(provider)

    if (window.ethereum ) {

           try {
             accounts = await window.ethereum.request({method: "eth_requestAccounts"})
            //  await provider.send("eth_requestAccounts", [])
              // const {chainId} = await window.ethereum.getNetwork();
            // const chainId = await provider.request({
            //   method: 'eth_chainId'
            // })
              const chainId = await window.ethereum.request({method: "eth_chainId"})

              console.log(chainId);

              if (chainId != 5) {
                console.log("Changing network to mumbai")
                try {
                  await window.ethereum.request({method: 'wallet_switchEthereumChain', params: [{ chainId: 5}]})
                }catch(switcherror){
                    
                  if(switcherror.code === 4902){
                    try{
                        console.log("adding chain")
                      await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                          {
                            chainId: '0x13881',
                            chainName: 'Mumbai- Testnet',
                            nativeCurrency: {
                              name: 'Polygon',
                              symbol: 'MATIC', // 2-6 characters long
                              decimals: 18
                            },
                            blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
                            rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
                          },
                        ],
                      });

                     

                    }catch(addError){
                       console.log(addError)
                    }
                  }

                }
              }

              window.ethereum.on('chainChanged', (chainId) => {
                        window.location.reload();
                      });
                            
              var ethbal = await window.ethereum.request({method: "eth_getBalance",params:[accounts[0]]})
              //  ethbal = await parseInt(ethbal);
              //  ethbal = ethbal / Math.pow(10, 18)
               ethbal = ethers.formatEther(ethbal)
               const data = {address: accounts[0],
                 balance: ethbal,
                  status: "connected"}
                return data;
           }catch(err){
              return {
                  address: " ",
                  wallatBalance:  " ",
                  status: err.message
              }
            
        }
  }else{
    return {
        address: " ", 
        wallatBalance: " ",
        status: (<span>
            <p>{" "}</p>
            metamask not installed on browser
            click <a  href={`https://metamask.io/download.html`}>here</a> to install metamask
        </span>)
    }
  }
}


 


export async function getWalletConnected () {
      if (window.ethereum) {
        try {
             
            let addressArray = await window.ethereum({method: "eth_accounts"})
            
             if (addressArray.length > 0){
                return {
                address: addressArray[0],
                status: "type in the field "
             }
            
            }else{
                return {
                    address: " ",
                    status : "connect to metamask using the top right button"
                }
            }
        }catch(err){
            return {
                address : "",
                status  : "failure" + err.message
            }

        }
        
      }else{
        return {
            adddres: "",
            status : (<span>
                Meatamask not install,click on link to install
                <a href={`https://metamask.io/download.html`}>  metamask</a>
            </span>)
        }
      }
  }

  //  function addWalletlistener () {

  //       if (window.ethereum) {
  //       window.ethereum.on("accountsChanged", (accounts)=> {
  //           if (accounts.length > 0 ) {
  //              setWalletAddress(accounts[0]);
  //              setStatus("Connected")
  //                 }else{
  //                     setStatus("not Connected") 
  //                 }
  //             })  
  //             }
  //         }

 

  // useEffect(() => { 
    //     async function fetchdata (){
    //         const {address, status} = await getWalletConnected()
    //         // setWalletAddress(address);
    //         setStatus(status);
    //     }
       
    //     fetchdata ();
    //     addWalletlistener();
    //  }, [])

    // const items = await Promise.all(
// 	allnfts.map(async (i) => {
// 		const tokenURI = await contract.tokenURI(i.tokenId);
// 		let meta = await axios.get(tokenURI);
// 		meta = meta.data;

// 		let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
// 		let item = {
// 			name: meta.name,
// 			title: meta.title,
// 			description: meta.description,
// 			image: meta.url,
// 			price: price,
// 			tokenId: i.tokenId.toNumber(),
// 			seller: i.seller,
// 			owner: i.owner,
// 		};

// 		return item;
// 	})
// );
  




function ConnectButton() {
    return ( 
        <button onClick={ConnectToMetamask}>
            ConnectWallet
        </button>
     );
}

export default ConnectButton;