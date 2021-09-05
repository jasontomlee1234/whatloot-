// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import { default as HTMLHead } from "next/head"; // Meta
import styles from "@styles/components/Layout.module.scss"; // Styles
import { useState } from 'react'
import { Contract } from '@ethersproject/contracts'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

// Types
import type { ReactElement } from "react";
import abi from './fantomloot.json'

const injected = new InjectedConnector({ supportedChainIds: [250] })

function getContract(address: any, abi: any, library: any) {
  return new Contract(address, abi, library)
}

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <div>
      {/* Meta */}
      <Head />
      {/* Top header */}
      <Header />

      {/* Page content */}
      <div className={styles.content}>{children}</div>
      {/* Bottom footer */}
      <Footer />
    </div>
  );
}

/**
 * Meta HTML Head
 * @returns {ReactElement} HTML Head component
 */
function Head(): ReactElement {
  return (
    <HTMLHead>
      {/* Primary Meta Tags */}
      <title>Fantom Loot</title>
      <meta name="title" content="Loot" />
      <meta
        name="description"
        content="Fantom Loot is randomized adventurer gear generated and stored on Fantom chain."
      />

      {/* OG + Faceook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.fantomloot.com/" />
      <meta property="og:title" content="Fantom Loot" />
      <meta
        property="og:description"
        content="Fantom Loot is randomized adventurer gear generated and stored on Fantom chain."
      />
      <meta property="og:image" content="https://www.fantomloot.com/meta.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.fantomloot.com/" />
      <meta property="twitter:title" content="Fantom Loot" />
      <meta
        property="twitter:description"
        content="Fantom Loot is randomized adventurer gear generated and stored on Fantom chain."
      />
      <meta property="twitter:image" content="https://www.fantomloot.com/meta.png" />

      {/* Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </HTMLHead>
  );
}

/**
 * Header
 * @returns {ReactElement} Header
 */
function Header() {
  // Collect current path for active links
  const { pathname } = useRouter();
  // All links
  const links = [
    { name: "FAQ", path: "/faq" }
    // { name: "Resources", path: "/resources" },
  ];

  return (
    <div className={styles.header}>
      {/* Main logo */}
      <div className={styles.header__logo}>
        <Link href="/">
          <a>Fantom Loot</a>
        </Link>
      </div>

      {/* Navigation */}
      <div className={styles.header__links}>
        <ul>
          {links.map(({ name, path }, i) => {
            // For each link, render link
            return (
              <li key={i}>
                <Link href={path}>
                  <a
                    className={
                      pathname === path
                        ? // Active class if pathname matches current path
                          styles.header__links_active
                        : undefined
                    }
                  >
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}


function mintLoot(contract: any, tokenId: any) {
  console.log(contract)
  contract.claim(tokenId,{ value:"49000000000000000000"}).catch((e: any) => {
    try {
      console.log(e)
      alert(e.data.message)
    } catch (e) {
      console.log(e)
    }
  })
}

async function ownerOf(contract: any , tokenId: any){
  try{
    const owner = await contract.ownerOf(tokenId)
    return owner
  }catch(e){
    return ''
  }
}

async function tokenUri(contract: any , tokenId: any){
  const base64JSON = await contract.tokenURI(tokenId)
  return tokenUriToBase64(base64JSON)
}

function tokenUriToBase64(base64JSON: any){
  const jsonString = atob(base64JSON.split(',')[1])
  const json = JSON.parse(jsonString)
  return json.image
}

async function getCollection(contract: any, addr: any) {
  let promiseList: any = []
  const balance = parseInt((await contract.balanceOf(addr)).toString())
  for (let i = 0; i < balance; i++) {
    promiseList.push(await contract.tokenOfOwnerByIndex(addr, i))
  }

  // const tokenIds = await Promise.all(promiseList)


  let promiseList2 = []
  for (let i = 0; i < promiseList.length; i++) {
    promiseList2.push(await tokenUri(contract,promiseList[i]))
  }

  // const tokenUrls = await Promise.all(promiseList2)
  return promiseList2.map((e,i)=>{
    return {
      tokenId: promiseList[i],
      image: e
    }
  })
}

/**
 * Footer component
 * @returns {ReactElement} Footer
 */
function Footer(): ReactElement {
  const { account, chainId } = useWeb3React()
  const { connector, library, activate, deactivate, active, error } = useWeb3React()
  const _contract = getContract("0x0360A4fC13A0BE64089E08F999E6D335832aDA9f", abi, library ? library.getSigner(account).connectUnchecked() : library)

  const [tokenId, setTokenId] = useState()
  const [owner, setOwner] = useState('')
  const [imageData, setImageData] = useState()
  const [tokenUris, setTokenUris] = useState([])
  const [open, setOpen] = useState(false);
  function handleChange(e:any){
    
    let _tokenId = e.target.value
    if (_tokenId<1){
      _tokenId = 1
    }
    if(_tokenId>8000){
      _tokenId = 8000
    }
    setTokenId(_tokenId)

    if (1630857599000>Date.now()){
      return
    }

    ownerOf(_contract,_tokenId).then(rst=>{
      console.log(rst)
      setOwner(rst)
      tokenUri(_contract, _tokenId).then(rst=>{
        console.log(rst)
        setImageData(rst)
      })
    }).catch(e=>{
      setOwner('')
    })
  }

  const handleClickOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.footer}>
      {account?<div><input style={{margin:"30px", width:"245px", height:"25px"}} type="number" placeholder="your lucky number #1~#7777
" onChange={handleChange} value={tokenId}></input></div>:null}
      {owner!=''?<div><img style={{width:"400px"}} src={imageData} /><div style={{color: "red"}}>owner: {owner}</div></div>:null}
      <button style={{padding:"10px 30px 10px 30px", cursor:"pointer"}} onClick={()=>{
        if(!account){
          activate(injected)
        } else {
          // mint NFT
          if (1630857599000>Date.now()){
            alert("Minting will start at 16:00 GMT")
          }else{

            mintLoot(_contract, tokenId)
          }
        }
      }}>{
      account ?
      "Mint My Fantom Loot at 49 FTM":"Connect"
      }</button>
      {
            account ? <div style={{margin: "30px"}}><button
              style={{background: "transparent", border: "none", color: "white", fontSize:"30px", cursor: "pointer"}}
              onClick={async () => {
                const _tokenUris = await getCollection(_contract, account)
                setTokenUris(_tokenUris as any)
                console.log(_tokenUris)
                handleClickOpen()
              }}
            >
              My Collection
            </button></div> : null
          }
      <p>
      </p>
      {account ? <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} PaperProps={{
        style: {
          backgroundColor: 'transparent',
          padding: "30px",
          backdropFilter: "blur(10px)",
          maxWidth: "1000px"
        },
      }} style={{
        backdropFilter: "blur(10px)"
      }}>
        <DialogTitle id="simple-dialog-title" style={{color:"white"}}>Collection</DialogTitle>
        <div style={{
          display: "flex",
          flexWrap: "wrap"
        }}>
          {
            tokenUris.length > 0 ? tokenUris.map(x => {
              return <div>
                        <img src={(x as any).image} style={{ width: "300px", margin: "10px"}} />
                        <div style={{textAlign:"center", color:"white"}}>#{(x as any).tokenId.toString()}</div>
                     </div>
              
            }) : <div>No Loot yet</div>
          }
        </div>
      </Dialog> : null}
    </div>
  );
}
