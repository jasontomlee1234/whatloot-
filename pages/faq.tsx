// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        {/* What is loot ? */}
        <div className={styles.faq__item}>
          <h3>What is Fantom Loot?</h3>
          <p>
            <b>Loot</b> is a collection of 8,000 unique bags of adventurer gear,
            originally released by{" "}
            <a
              href="https://twitter.com/dhof/status/1431316631934967815"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dom Hofmann
            </a>
            with a floor price of 13.5 ETH(till website release)
            . <b style={{color:"white"}}>Fantom Loot</b> brings Loot to Fantom. Each loot bag contains <b style={{color:"white"}}>8 items</b>:
            a piece for an adventurer&apos;s chest, foot, hand, head, neck, ring,
            waist, and weapon.
          </p>
          <p>
            Unlike Loot who reserved #7778 to #8000 for the contract
            deployer. Fantom Loot will reserve none. All will be minted by Fantom
            users.
          </p>
        </div>

        {/* Why is loot special? */}
        <div className={styles.faq__item}>
          <h3>Why is Fantom Loot special?</h3>
          <p>
            Fantom Loot is unique—the first project of its kind on Fantom. With no company, art,
            team, or attributes, Fantom Loot makes it impossible to gate-keep any
            creative decisions.
          </p>
          <p>
            Fantom Loot is the unfiltered, uncensorable building block for stories,
            experiences, games, and more, in the hands of the community, at no
            cost. Loot pursues complete decentralization from day one.
          </p>
        </div>

        {/* Can I build with loot? */}
        <div className={styles.faq__item}>
          <h3>Can I build with Fantom Loot?</h3>
          <p>
            Yes, you are free to use Fantom Loot in any way you want. For inspiration,
            see existing{" "}
            <Link href="/resources">
              <a>resources</a>
            </Link>{" "}
            put together by the community.
          </p>
        </div>

        {/* How do I value fantom loot bags? */}
        <div className={styles.faq__item}>
          <h3>How do I value Fantom Loot bags?</h3>
          <p>
            They say that value is always in the eye of the beholder. Fantom Loot is no
            different, with no explicit rarities specified at launch. How you
            value a loot bag is up to you.
          </p>
          <p>
            Still, the community has begun to devise many mechanisms by which to
            assess the rarity of bags and their items. Some of these include{" "}
            <a
              href="https://github.com/Anish-Agnihotri/dhof-loot/blob/master/output/rare.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              rarity by occurence
            </a>{" "}
            or{" "}
            <a
              href="https://0xinventory.app/help"
              target="_blank"
              rel="noopener noreferrer"
            >
              item score
            </a>
            .
          </p>
          <p>Remember, use your own discretion when valuing a loot bag.</p>
        </div>
      </div>
    </Layout>
  );
}
