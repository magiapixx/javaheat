import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { H as t, K as n, b as r } from "./framer.DGJFnpg_.mjs";
import { i, t as a } from "./zBTWiSfRK.CBeXZjSN.mjs";
function o(e, t) {
  let n = e?.RcjclLkIy,
    r = e?.okl2KJaEX,
    i = e?.kIllSH8oL;
  return {
    breakpoints: [
      { hash: `1xnclli`, mediaQuery: `(min-width: 1200px)` },
      { hash: `uljlvy`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `wn9nnk`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{okl2KJaEX}}` : l(r)}`,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-67cL4`,
    socialImage: u(i),
    title: `${n === void 0 ? `{{RcjclLkIy}}` : l(n)}`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `bSiIVuvYs`, data: a, type: `Collection` },
      select: [
        { collection: `bSiIVuvYs`, name: `RcjclLkIy`, type: `Identifier` },
        { collection: `bSiIVuvYs`, name: `okl2KJaEX`, type: `Identifier` },
        { collection: `bSiIVuvYs`, name: `kIllSH8oL`, type: `Identifier` },
      ],
      where: t(e, `bSiIVuvYs`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `bSiIVuvYs`, data: a, type: `Collection` },
      select: [
        { collection: `bSiIVuvYs`, name: `RcjclLkIy`, type: `Identifier` },
        { collection: `bSiIVuvYs`, name: `okl2KJaEX`, type: `Identifier` },
        { collection: `bSiIVuvYs`, name: `kIllSH8oL`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `bSiIVuvYs`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l, u, d, f;
function p() {
  return (p = e(() => {
    (n(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (d = 1),
      (f = {
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
export { o as a, p as i, c as n, d as o, s as r, f as t };
//# sourceMappingURL=bSiIVuvYs.BptW1q43.mjs.map
