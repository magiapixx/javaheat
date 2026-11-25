import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  j as a,
  l as o,
  o as s,
  p as c,
  s as l,
  w as u,
} from "./react.DfujhmXs.mjs";
import { T as d, i as f, o as p, t as m } from "./motion.BoJ_50qN.mjs";
import {
  C as h,
  Ct as g,
  D as _,
  E as v,
  K as y,
  _t as b,
  ct as x,
  k as S,
  o as C,
  wt as w,
  z as T,
} from "./framer.DGJFnpg_.mjs";
import { a as E, i as D, o as O, r as k } from "./toplevel-deps.XDVeXK4X.mjs";
function A(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var j, M, N, P, F, I, L, R, z, B, V, H;
function U() {
  return (U = e(() => {
    (l(),
      y(),
      m(),
      r(),
      O(),
      (j = [`R_XotlKFx`, `l2EqAU8kn`, `q30NCeu6K`, `hi1tTl8yF`]),
      (M = `framer-h51Vf`),
      (N = {
        hi1tTl8yF: `framer-v-89if5x`,
        l2EqAU8kn: `framer-v-1hxtm2i`,
        q30NCeu6K: `framer-v-eyoenk`,
        R_XotlKFx: `framer-v-1l7ei1p`,
      }),
      (P = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (F = ({ value: e, children: t }) => {
        let r = a(p),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(p.Provider, { value: o, children: t });
      }),
      (I = d.create(t)),
      (L = {
        "Default - Pre Title": `R_XotlKFx`,
        Black: `q30NCeu6K`,
        Fill: `hi1tTl8yF`,
        White: `l2EqAU8kn`,
      }),
      (R = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        RX1q43PHo: n ?? i.RX1q43PHo ?? `Insights & Article`,
        variant: L[i.variant] ?? i.variant ?? `R_XotlKFx`,
      })),
      (z = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (B = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = u(),
          { activeLocale: l, setLocale: p } = b();
        x();
        let { style: m, className: _, layoutId: v, variant: y, RX1q43PHo: C, ...w } = R(e),
          {
            baseVariant: T,
            classNames: E,
            clearLoadingGesture: D,
            gestureHandlers: O,
            gestureVariant: L,
            isLoading: B,
            setGestureState: V,
            setVariant: H,
            variants: U,
          } = g({
            cycleOrder: j,
            defaultVariant: `R_XotlKFx`,
            ref: a,
            variant: y,
            variantClassNames: N,
          }),
          W = z(e, U),
          G = S(M, k);
        return /*#__PURE__*/ s(f, {
          id: v ?? c,
          children: /*#__PURE__*/ s(I, {
            animate: U,
            initial: !1,
            children: /*#__PURE__*/ s(F, {
              value: P,
              children: /*#__PURE__*/ o(d.div, {
                ...w,
                ...O,
                className: S(G, `framer-1l7ei1p`, _, E),
                "data-border": !0,
                "data-framer-name": `Default - Pre Title`,
                layoutDependency: W,
                layoutId: `R_XotlKFx`,
                ref: a,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-79ab7225-42eb-4a86-ad64-3b3241d197f9, rgb(209, 209, 209))`,
                  "--border-left-width": `1px`,
                  "--border-right-width": `1px`,
                  "--border-style": `solid`,
                  "--border-top-width": `1px`,
                  backgroundColor: `rgba(0, 0, 0, 0)`,
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  borderTopLeftRadius: 100,
                  borderTopRightRadius: 100,
                  ...m,
                },
                variants: {
                  hi1tTl8yF: {
                    backgroundColor: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                  },
                  l2EqAU8kn: {
                    "--border-color": `var(--token-8a340fdb-6130-4c0f-a9c3-a3cb5b6bd529, rgba(92, 92, 92, 0.5))`,
                  },
                  q30NCeu6K: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                  },
                },
                ...A(
                  {
                    hi1tTl8yF: { "data-framer-name": `Fill` },
                    l2EqAU8kn: { "data-framer-name": `White` },
                    q30NCeu6K: { "data-framer-name": `Black` },
                  },
                  T,
                  L
                ),
                children: [
                  /*#__PURE__*/ s(d.div, {
                    className: `framer-bky78`,
                    "data-framer-name": `Square`,
                    layoutDependency: W,
                    layoutId: `WXuv63gF5`,
                    style: {
                      background: `linear-gradient(46deg, var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11)) 0%, var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52)) 100%)`,
                    },
                  }),
                  /*#__PURE__*/ s(h, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ s(t, {
                      children: /*#__PURE__*/ s(d.p, {
                        className: `framer-styles-preset-15frtqy`,
                        "data-styles-preset": `P89o9sRK1`,
                        style: {
                          "--framer-text-alignment": `center`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                        },
                        children: `Insights & Article`,
                      }),
                    }),
                    className: `framer-1gekl1m`,
                    "data-framer-name": `Pre Title`,
                    fonts: [`Inter`],
                    layoutDependency: W,
                    layoutId: `NOBu1zR1o`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                    },
                    text: C,
                    variants: {
                      l2EqAU8kn: {
                        "--extracted-r6o4lv": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                      },
                      q30NCeu6K: {
                        "--extracted-r6o4lv": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...A(
                      {
                        l2EqAU8kn: {
                          children: /*#__PURE__*/ s(t, {
                            children: /*#__PURE__*/ s(d.p, {
                              className: `framer-styles-preset-15frtqy`,
                              "data-styles-preset": `P89o9sRK1`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                              },
                              children: `Insights & Article`,
                            }),
                          }),
                        },
                        q30NCeu6K: {
                          children: /*#__PURE__*/ s(t, {
                            children: /*#__PURE__*/ s(d.p, {
                              className: `framer-styles-preset-15frtqy`,
                              "data-styles-preset": `P89o9sRK1`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                              },
                              children: `Insights & Article`,
                            }),
                          }),
                        },
                      },
                      T,
                      L
                    ),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (V = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-h51Vf.framer-158dwuc, .framer-h51Vf .framer-158dwuc { display: block; }`,
        `.framer-h51Vf.framer-1l7ei1p { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 8px 14px 8px 14px; position: relative; width: min-content; }`,
        `.framer-h51Vf .framer-bky78 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 7px; }`,
        `.framer-h51Vf .framer-1gekl1m { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...D,
        `.framer-h51Vf[data-border="true"]::after, .framer-h51Vf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (H = w(B, V, `framer-h51Vf`)),
      (H.displayName = `Title Badge`),
      (H.defaultProps = { height: 33, width: 152 }),
      _(H, {
        variant: {
          options: [`R_XotlKFx`, `l2EqAU8kn`, `q30NCeu6K`, `hi1tTl8yF`],
          optionTitles: [`Default - Pre Title`, `White`, `Black`, `Fill`],
          title: `Variant`,
          type: C.Enum,
        },
        RX1q43PHo: {
          defaultValue: `Insights & Article`,
          displayTextArea: !0,
          title: `Title`,
          type: C.String,
        },
      }),
      v(
        H,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...T(E),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { U as n, H as t };
//# sourceMappingURL=q98WlWaa9.DeV4Bwei.mjs.map
