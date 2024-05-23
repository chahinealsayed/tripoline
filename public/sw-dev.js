/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-4b7c5883'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "fonts/Almarai-Regular.ttf",
    "revision": "4fcf563640cefe40b7474aec4f966c0a"
  }, {
    "url": "images/ar.png",
    "revision": "6a8cb241d1586e973a21ef40954ccb7e"
  }, {
    "url": "images/ar.svg",
    "revision": "9046c87c6481feeb6585558999952199"
  }, {
    "url": "images/background.jpg",
    "revision": "53d26b5590d17b18df7d1497908b25e5"
  }, {
    "url": "images/border-bottom.svg",
    "revision": "a4679ccf357d4067f712fc2c0a900e75"
  }, {
    "url": "images/border-image.png",
    "revision": "20c04b56730e61c4480579c361f1bacc"
  }, {
    "url": "images/border-noshadow.svg",
    "revision": "15ca2cd88b8a9652d6790396ed97c140"
  }, {
    "url": "images/border-svg.svg",
    "revision": "06d222bc07232095e3d3ae0de1972c16"
  }, {
    "url": "images/bus.png",
    "revision": "ea79d968734d044b26273ff03db98e84"
  }, {
    "url": "images/carts.svg",
    "revision": "21e941ffb9d2a23d43ba2126d01e4698"
  }, {
    "url": "images/cercel-line.png",
    "revision": "a450b5f0c7ace12b02db7546604773be"
  }, {
    "url": "images/cercel-line.svg",
    "revision": "ffde1c844f458da16125ebc4355816dd"
  }, {
    "url": "images/email.svg",
    "revision": "5a6e1a1a1f0c9c99cdf518b72cf1e210"
  }, {
    "url": "images/en.png",
    "revision": "8a50ef5ed57961de8781f4660cb33986"
  }, {
    "url": "images/en.svg",
    "revision": "8da73064cd1447e132ca6a737fdbf2ca"
  }, {
    "url": "images/facebook.svg",
    "revision": "b10461c552ff01897b34273fbd0568f4"
  }, {
    "url": "images/Favicon.png",
    "revision": "a97f3e962d157c0c1fae20e3ef68a1e5"
  }, {
    "url": "images/horizontal.svg",
    "revision": "ff328ab09dbe2976efa6412af47b46ee"
  }, {
    "url": "images/instagram.png",
    "revision": "b3c9ce60dd1d75ed3f597202c82c05e7"
  }, {
    "url": "images/instagram.svg",
    "revision": "f6f85992d549a3defe347fe002429da8"
  }, {
    "url": "images/LB Uni Stations 1.png",
    "revision": "36692b97663e672a441449029269d7b9"
  }, {
    "url": "images/lebanon.png",
    "revision": "0ee78d58a480508bb675b2e55ea702d6"
  }, {
    "url": "images/logo-h.svg",
    "revision": "2b312ccbe2375cfe1d05523af7d645c8"
  }, {
    "url": "images/logo-h2.svg",
    "revision": "3257cee301a477714dbfefe5b421b282"
  }, {
    "url": "images/logo.png",
    "revision": "ac2f6b55dded594370e1bd64201f2500"
  }, {
    "url": "images/logo.svg",
    "revision": "54abd6d76ac98ef2feb79fd0ddc64e8e"
  }, {
    "url": "images/logo2.png",
    "revision": "46befaf35ca185da8f798f5898894caf"
  }, {
    "url": "images/logo4.svg",
    "revision": "1b8ef1d1bed1c3313fb10b4622c48388"
  }, {
    "url": "images/mobile_background.jpg",
    "revision": "a44fd170d2b26efbb01cb779816c65f1"
  }, {
    "url": "images/new_rout.svg",
    "revision": "a5ce543d46c41b26fa0775a75b97c152"
  }, {
    "url": "images/price.png",
    "revision": "09cfeccff4a2bc7c763f4ee0086b926a"
  }, {
    "url": "images/Rectangle.png",
    "revision": "bba083f3b0ae33977f6d7d0f0630b3e4"
  }, {
    "url": "images/red-border.png",
    "revision": "e76976d129726e5e93c4721b43df69e5"
  }, {
    "url": "images/rounded_border.svg",
    "revision": "49297a767e75812c756e1b0735c2b39a"
  }, {
    "url": "images/rout.png",
    "revision": "d7c1b65aea5b297ecc1c228d601219a6"
  }, {
    "url": "images/route.svg",
    "revision": "bcdf7bdcaeeadf8fab43dc14a27241c0"
  }, {
    "url": "images/thin-lane.svg",
    "revision": "43b3ca09192e70769dd52de1411e5d34"
  }, {
    "url": "images/Tripoline-LogoPNG.png",
    "revision": "005b6787a5064cb9ba1c9c01d768e14a"
  }, {
    "url": "images/usa.png",
    "revision": "575b2f16951e05a53c896ebc94a36184"
  }, {
    "url": "images/vertical-border.svg",
    "revision": "524ca3d4e58a6175fb6b57966d44c179"
  }, {
    "url": "images/verticall.svg",
    "revision": "32d3fefe5c20f1152e7dd0754b4f706b"
  }, {
    "url": "manifest.json",
    "revision": "9e00d3d643c8e73256f7fe3919d84c13"
  }], {});
  workbox.cleanupOutdatedCaches();

}));
//# sourceMappingURL=sw-dev.js.map
