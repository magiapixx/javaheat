import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  j as a,
  o,
  p as s,
  s as c,
  w as l,
} from "./react.DfujhmXs.mjs";
import { T as u, i as d, o as f, t as p } from "./motion.BoJ_50qN.mjs";
import {
  C as m,
  Ct as h,
  D as g,
  E as _,
  K as v,
  _t as y,
  ct as b,
  k as x,
  o as S,
  wt as C,
  z as w,
} from "./framer.DGJFnpg_.mjs";
import {
  _ as T,
  a as E,
  b as D,
  i as O,
  o as k,
  r as A,
  v as j,
  y as M,
} from "./toplevel-deps.XDVeXK4X.mjs";
function N(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var P, F, I, L, R, z, B, V, H, U, W, G;
function K() {
  return (K = e(() => {
    (c(),
      v(),
      p(),
      r(),
      D(),
      k(),
      (P = [`Qc5Z9fZHw`, `rrUoy8uQo`, `PZwqHmdSi`]),
      (F = `framer-c3YWd`),
      (I = {
        PZwqHmdSi: `framer-v-11cmrmh`,
        Qc5Z9fZHw: `framer-v-4nf12y`,
        rrUoy8uQo: `framer-v-13u3hoz`,
      }),
      (L = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (R = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          s = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ o(f.Provider, { value: s, children: t });
      }),
      (z = u.create(t)),
      (B = { Default: `Qc5Z9fZHw`, LG: `PZwqHmdSi`, Light: `rrUoy8uQo` }),
      (V = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        variant: B[i.variant] ?? i.variant ?? `Qc5Z9fZHw`,
        vOUUEJJrj: n ?? i.vOUUEJJrj ?? `Materials engineering`,
      })),
      (H = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (U = /*#__PURE__*/ s(function (e, n) {
        let r = i(null),
          a = n ?? r,
          s = l(),
          { activeLocale: c, setLocale: f } = y();
        b();
        let { style: p, className: g, layoutId: _, variant: v, vOUUEJJrj: S, ...C } = V(e),
          {
            baseVariant: w,
            classNames: E,
            clearLoadingGesture: D,
            gestureHandlers: O,
            gestureVariant: k,
            isLoading: j,
            setGestureState: M,
            setVariant: B,
            variants: U,
          } = h({
            cycleOrder: P,
            defaultVariant: `Qc5Z9fZHw`,
            ref: a,
            variant: v,
            variantClassNames: I,
          }),
          W = H(e, U),
          G = x(F, A, T);
        return /*#__PURE__*/ o(d, {
          id: _ ?? s,
          children: /*#__PURE__*/ o(z, {
            animate: U,
            initial: !1,
            children: /*#__PURE__*/ o(R, {
              value: L,
              children: /*#__PURE__*/ o(u.div, {
                ...C,
                ...O,
                className: x(G, `framer-4nf12y`, g, E),
                "data-framer-name": `Default`,
                layoutDependency: W,
                layoutId: `Qc5Z9fZHw`,
                ref: a,
                style: {
                  backgroundColor: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  ...p,
                },
                variants: {
                  rrUoy8uQo: {
                    backgroundColor: `var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, rgb(246, 246, 246))`,
                  },
                },
                ...N(
                  {
                    PZwqHmdSi: { "data-framer-name": `LG` },
                    rrUoy8uQo: { "data-framer-name": `Light` },
                  },
                  w,
                  k
                ),
                children: /*#__PURE__*/ o(m, {
                  __fromCanvasComponent: !0,
                  children: /*#__PURE__*/ o(t, {
                    children: /*#__PURE__*/ o(u.p, {
                      className: `framer-styles-preset-15frtqy`,
                      "data-styles-preset": `P89o9sRK1`,
                      style: {
                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11)))`,
                      },
                      children: `Materials engineering`,
                    }),
                  }),
                  className: `framer-1au8b2l`,
                  "data-framer-name": `Title`,
                  fonts: [`Inter`],
                  layoutDependency: W,
                  layoutId: `jryvAztux`,
                  style: {
                    "--extracted-r6o4lv": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                  },
                  text: S,
                  verticalAlignment: `top`,
                  withExternalLayout: !0,
                  ...N(
                    {
                      PZwqHmdSi: {
                        children: /*#__PURE__*/ o(t, {
                          children: /*#__PURE__*/ o(u.p, {
                            className: `framer-styles-preset-ecqg04`,
                            "data-styles-preset": `CkbU37qav`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11)))`,
                            },
                            children: `Materials engineering`,
                          }),
                        }),
                      },
                    },
                    w,
                    k
                  ),
                }),
              }),
            }),
          }),
        });
      })),
      (W = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-c3YWd.framer-1ufpwhi, .framer-c3YWd .framer-1ufpwhi { display: block; }`,
        `.framer-c3YWd.framer-4nf12y { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 6px 8px 6px 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-c3YWd .framer-1au8b2l { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...O,
        ...j,
      ]),
      (G = C(U, W, `framer-c3YWd`)),
      (G.displayName = `Badge`),
      (G.defaultProps = { height: 29, width: 158 }),
      g(G, {
        variant: {
          options: [`Qc5Z9fZHw`, `rrUoy8uQo`, `PZwqHmdSi`],
          optionTitles: [`Default`, `Light`, `LG`],
          title: `Variant`,
          type: S.Enum,
        },
        vOUUEJJrj: {
          defaultValue: `Materials engineering`,
          displayTextArea: !0,
          title: `Title`,
          type: S.String,
        },
      }),
      _(
        G,
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
          ...w(E),
          ...w(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { K as n, G as t };
//# sourceMappingURL=GRYfLB066.1cR48V0E.mjs.map
