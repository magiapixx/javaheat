import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { H as t, K as n, b as r } from "./framer.DGJFnpg_.mjs";
import { n as i, t as a } from "./shared-lib.C0OaH8ZN.mjs";
import { i as o, n as s } from "./WCK9shr5c.Bc8TDwXw.mjs";
function c(e, t) {
  let n = e?.pvLiZHd_J;
  return {
    breakpoints: [
      { hash: `1uxhofq`, mediaQuery: `(min-width: 1200px)` },
      { hash: `l6u3de`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `6baa1`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-yg8UD`,
    socialImage: `../../assets/misc/ZvECMVW6QMX9YPhcKDk0abxFIc.jpg`,
    title: `${n === void 0 ? `{{pvLiZHd_J}}` : d(n)}`,
    viewport: `width=device-width`,
  };
}
async function l(e, n) {
  let i = new r(),
    a = {
      from: { alias: `WW4UflwWd`, data: s, type: `Collection` },
      select: [{ collection: `WW4UflwWd`, name: `pvLiZHd_J`, type: `Identifier` }],
      where: t(e, `WW4UflwWd`),
    },
    o = await i.query(a, n);
  if (o.length === 0) throw Error(`No data matches pathVariables`);
  let l = o[0];
  return c(l, n);
}
async function u(e, t) {
  let n = new r(),
    i = {
      from: { alias: `WW4UflwWd`, data: s, type: `Collection` },
      select: [{ collection: `WW4UflwWd`, name: `pvLiZHd_J`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `WW4UflwWd`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: c(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var d, f, p;
function m() {
  return (m = e(() => {
    (n(),
      o(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = 1),
      (p = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { c as a, m as i, u as n, f as o, l as r, p as t };
//# sourceMappingURL=WW4UflwWd.Crqhgfpu.mjs.map
