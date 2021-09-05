exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 3969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/components/Layout.module.scss
var Layout_module = __webpack_require__(4894);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@ethersproject/contracts"
var contracts_ = __webpack_require__(4440);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(417);
// EXTERNAL MODULE: external "@web3-react/injected-connector"
var injected_connector_ = __webpack_require__(7290);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js + 1 modules
var DialogTitle = __webpack_require__(4313);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js + 29 modules
var Dialog = __webpack_require__(8674);
;// CONCATENATED MODULE: ./components/fantomloot.json
const fantomloot_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"isMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getWeapon","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getChest","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getHead","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getWaist","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getFoot","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getHand","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getNeck","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRing","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerClaim","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./components/Layout.tsx


// Imports
 // Routing

 // Routing

 // Meta

 // Styles






 // Types


const injected = new injected_connector_.InjectedConnector({
  supportedChainIds: [250]
});

function getContract(address, abi, library) {
  return new contracts_.Contract(address, abi, library);
}

function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Head, {}), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Layout_module_default()).content,
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}
/**
 * Meta HTML Head
 * @returns {ReactElement} HTML Head component
 */

function Head() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: "Fantom Loot"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "title",
      content: "Loot"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: "Fantom Loot is randomized adventurer gear generated and stored on Fantom chain."
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:url",
      content: "https://www.fantomloot.com/"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:title",
      content: "Fantom Loot"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:description",
      content: "Fantom Loot is randomized adventurer gear generated and stored on Fantom chain."
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:image",
      content: "https://www.fantomloot.com/meta.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:card",
      content: "summary_large_image"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:url",
      content: "https://www.fantomloot.com/"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:title",
      content: "Fantom Loot"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:description",
      content: "Fantom Loot is randomized adventurer gear generated and stored on Fantom chain."
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:image",
      content: "https://www.fantomloot.com/meta.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap",
      rel: "stylesheet"
    })]
  });
}
/**
 * Header
 * @returns {ReactElement} Header
 */


function Header() {
  // Collect current path for active links
  const {
    pathname
  } = (0,router_.useRouter)(); // All links

  const links = [{
    name: "FAQ",
    path: "/faq"
  } // { name: "Resources", path: "/resources" },
  ];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Layout_module_default()).header,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Layout_module_default()).header__logo,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "Fantom Loot"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Layout_module_default()).header__links,
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        children: links.map(({
          name,
          path
        }, i) => {
          // For each link, render link
          return /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: path,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: pathname === path ? // Active class if pathname matches current path
                (Layout_module_default()).header__links_active : undefined,
                children: name
              })
            })
          }, i);
        })
      })
    })]
  });
}

function mintLoot(contract, tokenId) {
  console.log(contract);
  contract.claim(tokenId, {
    value: "49000000000000000000"
  }).catch(e => {
    try {
      console.log(e);
      alert(e.data.message);
    } catch (e) {
      console.log(e);
    }
  });
}

async function ownerOf(contract, tokenId) {
  try {
    const owner = await contract.ownerOf(tokenId);
    return owner;
  } catch (e) {
    return '';
  }
}

async function tokenUri(contract, tokenId) {
  const base64JSON = await contract.tokenURI(tokenId);
  return tokenUriToBase64(base64JSON);
}

function tokenUriToBase64(base64JSON) {
  const jsonString = atob(base64JSON.split(',')[1]);
  const json = JSON.parse(jsonString);
  return json.image;
}

async function getCollection(contract, addr) {
  let promiseList = [];
  const balance = parseInt((await contract.balanceOf(addr)).toString());

  for (let i = 0; i < balance; i++) {
    promiseList.push(await contract.tokenOfOwnerByIndex(addr, i));
  } // const tokenIds = await Promise.all(promiseList)


  let promiseList2 = [];

  for (let i = 0; i < promiseList.length; i++) {
    promiseList2.push(await tokenUri(contract, promiseList[i]));
  } // const tokenUrls = await Promise.all(promiseList2)


  return promiseList2.map((e, i) => {
    return {
      tokenId: promiseList[i],
      image: e
    };
  });
}
/**
 * Footer component
 * @returns {ReactElement} Footer
 */


function Footer() {
  const {
    account,
    chainId
  } = (0,core_.useWeb3React)();
  const {
    connector,
    library,
    activate,
    deactivate,
    active,
    error
  } = (0,core_.useWeb3React)();

  const _contract = getContract("0x0360A4fC13A0BE64089E08F999E6D335832aDA9f", fantomloot_namespaceObject, library ? library.getSigner(account).connectUnchecked() : library);

  const {
    0: tokenId,
    1: setTokenId
  } = (0,external_react_.useState)();
  const {
    0: owner,
    1: setOwner
  } = (0,external_react_.useState)('');
  const {
    0: imageData,
    1: setImageData
  } = (0,external_react_.useState)();
  const {
    0: tokenUris,
    1: setTokenUris
  } = (0,external_react_.useState)([]);
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);

  function handleChange(e) {
    let _tokenId = e.target.value;

    if (_tokenId < 1) {
      _tokenId = 1;
    }

    if (_tokenId > 8000) {
      _tokenId = 8000;
    }

    setTokenId(_tokenId);
    ownerOf(_contract, _tokenId).then(rst => {
      console.log(rst);
      setOwner(rst);
      tokenUri(_contract, _tokenId).then(rst => {
        console.log(rst);
        setImageData(rst);
      });
    }).catch(e => {
      setOwner('');
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Layout_module_default()).footer,
    children: [account ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("input", {
        style: {
          margin: "30px",
          width: "245px",
          height: "25px"
        },
        type: "number",
        placeholder: "your lucky number #1~#7777\r\n",
        onChange: handleChange,
        value: tokenId
      })
    }) : null, owner != '' ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        style: {
          width: "400px"
        },
        src: imageData
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          color: "red"
        },
        children: ["owner: ", owner]
      })]
    }) : null, /*#__PURE__*/jsx_runtime_.jsx("button", {
      style: {
        padding: "10px 30px 10px 30px",
        cursor: "pointer"
      },
      onClick: () => {
        if (!account) {
          activate(injected);
        } else {
          // mint NFT
          mintLoot(_contract, tokenId);
        }
      },
      children: account ? "Mint My Fantom Loot at 49 FTM" : "Connect"
    }), account ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        margin: "30px"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        style: {
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "30px"
        },
        onClick: async () => {
          const _tokenUris = await getCollection(_contract, account);

          setTokenUris(_tokenUris);
          console.log(_tokenUris);
          handleClickOpen();
        },
        children: "My Collection"
      })
    }) : null, /*#__PURE__*/jsx_runtime_.jsx("p", {}), account ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Dialog/* default */.Z, {
      onClose: handleClose,
      "aria-labelledby": "simple-dialog-title",
      open: open,
      PaperProps: {
        style: {
          backgroundColor: 'transparent',
          padding: "30px",
          backdropFilter: "blur(10px)",
          maxWidth: "1000px"
        }
      },
      style: {
        backdropFilter: "blur(10px)"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(DialogTitle/* default */.Z, {
        id: "simple-dialog-title",
        style: {
          color: "white"
        },
        children: "Collection"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: "flex",
          flexWrap: "wrap"
        },
        children: tokenUris.length > 0 ? tokenUris.map(x => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: x.image,
              style: {
                width: "300px",
                margin: "10px"
              }
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                textAlign: "center",
                color: "white"
              },
              children: ["#", x.tokenId.toString()]
            })]
          });
        }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "No Loot yet"
        })
      })]
    }) : null]
  });
}

/***/ }),

/***/ 4894:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Layout_header__2iLWX",
	"header__logo": "Layout_header__logo__2Zu-m",
	"header__links": "Layout_header__links__2tkmn",
	"header__links_active": "Layout_header__links_active__2DGAB",
	"footer": "Layout_footer__2GYdL"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;