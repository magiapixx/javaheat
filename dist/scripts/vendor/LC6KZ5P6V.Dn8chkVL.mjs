import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { H as t, K as n, b as r } from "./framer.DGJFnpg_.mjs";
import { i, t as a } from "./n0JwbvZ2A.BJNPcq3v.mjs";
function o(e, t) {
  let n = e?.IAu1rJT3C,
    r = e?.tsXG2nqrK,
    i = e?.Io3xnY3qJ;
  return {
    breakpoints: [
      { hash: `1kdprl5`, mediaQuery: `(min-width: 1200px)` },
      { hash: `rpfejv`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `r7m4w0`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{tsXG2nqrK}}` : l(r)}`,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-Zeyrb`,
    socialImage: u(i),
    title: `${n === void 0 ? `{{IAu1rJT3C}}` : l(n)}`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `LC6KZ5P6V`, data: a, type: `Collection` },
      select: [
        { collection: `LC6KZ5P6V`, name: `IAu1rJT3C`, type: `Identifier` },
        { collection: `LC6KZ5P6V`, name: `tsXG2nqrK`, type: `Identifier` },
        { collection: `LC6KZ5P6V`, name: `Io3xnY3qJ`, type: `Identifier` },
      ],
      where: t(e, `LC6KZ5P6V`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `LC6KZ5P6V`, data: a, type: `Collection` },
      select: [
        { collection: `LC6KZ5P6V`, name: `IAu1rJT3C`, type: `Identifier` },
        { collection: `LC6KZ5P6V`, name: `tsXG2nqrK`, type: `Identifier` },
        { collection: `LC6KZ5P6V`, name: `Io3xnY3qJ`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `LC6KZ5P6V`, name: t, type: `Identifier` });
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
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { o as a, p as i, c as n, d as o, s as r, f as t };
//# sourceMappingURL=LC6KZ5P6V.Dn8chkVL.mjs.map
