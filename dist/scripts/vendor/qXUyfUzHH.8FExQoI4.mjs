import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { H as t, K as n, b as r } from "./framer.DGJFnpg_.mjs";
import { i, t as a } from "./QPz26w_mL.Bloxq0OJ.mjs";
function o(e, t) {
  let n = e?.b0IRHKgVb,
    r = e?.OpEkAxGrS,
    i = e?.JOHVT7b7i;
  return {
    breakpoints: [
      { hash: `15qn0bc`, mediaQuery: `(min-width: 1200px)` },
      { hash: `6bwdaz`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1t3ch4k`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{OpEkAxGrS}}` : l(r)}`,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-2hwVv`,
    socialImage: u(i),
    title: `${n === void 0 ? `{{b0IRHKgVb}}` : l(n)}`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `qXUyfUzHH`, data: a, type: `Collection` },
      select: [
        { collection: `qXUyfUzHH`, name: `b0IRHKgVb`, type: `Identifier` },
        { collection: `qXUyfUzHH`, name: `OpEkAxGrS`, type: `Identifier` },
        { collection: `qXUyfUzHH`, name: `JOHVT7b7i`, type: `Identifier` },
      ],
      where: t(e, `qXUyfUzHH`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `qXUyfUzHH`, data: a, type: `Collection` },
      select: [
        { collection: `qXUyfUzHH`, name: `b0IRHKgVb`, type: `Identifier` },
        { collection: `qXUyfUzHH`, name: `OpEkAxGrS`, type: `Identifier` },
        { collection: `qXUyfUzHH`, name: `JOHVT7b7i`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `qXUyfUzHH`, name: t, type: `Identifier` });
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
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { o as a, p as i, c as n, d as o, s as r, f as t };
//# sourceMappingURL=qXUyfUzHH.8FExQoI4.mjs.map
