// Imports
import Layout from "@components/Layout"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles
import img1 from "./1.svg"
import img2 from "./2.svg"
import img3 from "./3.svg"
// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  // Quicklinks to render
  const quicklinks: Record<string, string>[] = [
    { name: "Artion(Not alive)", url: "https://artion.io/" },
    { name: "Opensea", url: "https://opensea.io/assets/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7/1337"},
    {
      name: "Twitter",
      url: "https://twitter.com/FantomLoot",
    },
    {
      name: "Discord",
      url: "https://discord.gg/2u3CNm5t",
    }
    // {
    //   name: "Contract",
    //   url: "https://ftmscan.com/address/0x0360a4fc13a0be64089e08f999e6d335832ada9f#code",
    // },
  ];

  /**
   * Selects 3 random bags from defaultBags
   * @returns {Record<string, string>[]} randomized bags
   */
  const getRandomThreeBags = () => {
    const shuffled = defaultBags.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  return (
    <Layout>
      <div>
        <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>Fantom Loot</h1>

          {/* Quicklinks */}
          <ul>
            {quicklinks.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA Description */}
          <p>
            Fantom Loot is randomized adventurer gear generated and stored on Fantom chain.
            You can not only create your own Loot on Ethereum but also on Fantom.
            <br /> Stats, images, and other functionality are intentionally
            omitted for others to interpret. <br /> Feel free to use Fantom Loot in any
            way you want.
          </p>
        </div>

        {/* Rendering sample loot bags */}
        <div className={styles.home__feature}>
          <span>Example Bags:</span>
          <img style={{width:"400px"}} src={img1.src} alt="" />
          <img style={{width:"400px", marginLeft:"20px"}} src={img2.src} alt="" />
          <img style={{width:"400px", marginLeft:"20px"}} src={img3.src} alt="" />
          {/* {getRandomThreeBags().map(({ id, attributes }, i) => (
            // For each loot bag, render item and link to OpenSea
            <a
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className={styles.home__bag}
            >
              <div className={styles.home__bag_attributes}>
                <span>#{id}</span>
                <ul>
                  {attributes.map((attribute, i) => (
                    <li key={i}>
                      <span>{attribute}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))} */}
        </div>
      </div>
    </Layout>
  );
}
