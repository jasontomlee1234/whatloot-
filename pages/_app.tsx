// Imports
import "@styles/global.scss";
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
// Types
import type { AppProps } from "next/app";

function getLibrary(provider: any) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 1000
  return library
}

// Export application
export default function LootRNG({ Component, pageProps }: AppProps) {
  return<Web3ReactProvider getLibrary={getLibrary}> <Component {...pageProps} /></Web3ReactProvider>;
}
