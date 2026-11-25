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
  B as h,
  C as g,
  Ct as _,
  D as v,
  E as y,
  K as b,
  L as x,
  _t as S,
  ct as ee,
  f as C,
  i as w,
  k as T,
  o as E,
  w as D,
  wt as O,
  z as k,
} from "./framer.DGJFnpg_.mjs";
import { g as A, h as j } from "./toplevel-deps.XDVeXK4X.mjs";
import { i as M, n as N, r as P, t as F } from "./l__4UHlzt.74k9u9BQ.mjs";
function I(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var L, R, z, B, V, H, U, W, G, K, q, J, Y, X;
function Z() {
  return (Z = e(() => {
    (l(),
      b(),
      m(),
      r(),
      M(),
      A(),
      (L = x(j)),
      (R = [`phecyeq0O`, `SDRL6ENgf`, `fMopB7F65`]),
      (z = `framer-Us49O`),
      (B = {
        fMopB7F65: `framer-v-7cu8v4`,
        phecyeq0O: `framer-v-1do4upp`,
        SDRL6ENgf: `framer-v-167nl90`,
      }),
      (V = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (H = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (U = ({ value: e, children: t }) => {
        let r = a(p),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(p.Provider, { value: o, children: t });
      }),
      (W = d.create(t)),
      (G = { Desktop: `phecyeq0O`, Phone: `fMopB7F65`, Tablet: `SDRL6ENgf` }),
      (K = ({
        buttonTitle: e,
        height: t,
        id: n,
        link: r,
        newTab: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        F9Alxl5fC: i ?? s.F9Alxl5fC,
        oW2m16Ewg: a ?? s.oW2m16Ewg ?? `Ready to start your next project?`,
        PrYHp3zjy: e ?? s.PrYHp3zjy ?? `Schedule now`,
        variant: G[s.variant] ?? s.variant ?? `phecyeq0O`,
        Y9FG_7OXx: r ?? s.Y9FG_7OXx,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = u(),
          { activeLocale: l, setLocale: p } = S(),
          m = ee(),
          {
            style: v,
            className: y,
            layoutId: b,
            variant: x,
            oW2m16Ewg: E,
            PrYHp3zjy: O,
            Y9FG_7OXx: k,
            F9Alxl5fC: A,
            ...M
          } = K(e),
          {
            baseVariant: N,
            classNames: P,
            clearLoadingGesture: L,
            gestureHandlers: G,
            gestureVariant: J,
            isLoading: Y,
            setGestureState: X,
            setVariant: Z,
            variants: Q,
          } = _({
            cycleOrder: R,
            defaultVariant: `phecyeq0O`,
            ref: a,
            variant: x,
            variantClassNames: B,
          }),
          $ = q(e, Q),
          te = T(z, F);
        return /*#__PURE__*/ s(f, {
          id: b ?? c,
          children: /*#__PURE__*/ s(W, {
            animate: Q,
            initial: !1,
            children: /*#__PURE__*/ s(U, {
              value: V,
              children: /*#__PURE__*/ s(d.div, {
                ...M,
                ...G,
                className: T(te, `framer-1do4upp`, y, P),
                "data-framer-name": `Desktop`,
                layoutDependency: $,
                layoutId: `phecyeq0O`,
                ref: a,
                style: { ...v },
                ...I(
                  {
                    fMopB7F65: { "data-framer-name": `Phone` },
                    SDRL6ENgf: { "data-framer-name": `Tablet` },
                  },
                  N,
                  J
                ),
                children: /*#__PURE__*/ s(d.div, {
                  className: `framer-1u22csc`,
                  "data-framer-name": `Container`,
                  layoutDependency: $,
                  layoutId: `UMuf7zDF0`,
                  style: {
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  },
                  children: /*#__PURE__*/ o(C, {
                    background: {
                      alt: `CTA BG`,
                      fit: `fill`,
                      loading: h((m?.y || 0) + (0 + ((m?.height || 200) - 0 - 152) / 2) + 0),
                      pixelHeight: 178,
                      pixelWidth: 1078,
                      sizes: `max(min(max(${m?.width || `100vw`}, 1px), 1100px), 1px)`,
                      src: `../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png`,
                      srcSet: `../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4-90d48d.png 512w,../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4-915c04.png 1024w,../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png 1078w`,
                    },
                    className: `framer-11lnjof`,
                    "data-framer-name": `Content`,
                    layoutDependency: $,
                    layoutId: `akEtL5alr`,
                    style: {
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                    ...I(
                      {
                        fMopB7F65: {
                          background: {
                            alt: `CTA BG`,
                            fit: `fill`,
                            loading: h((m?.y || 0) + (0 + ((m?.height || 200) - 0 - 190) / 2) + 0),
                            pixelHeight: 178,
                            pixelWidth: 1078,
                            sizes: `max(${m?.width || `100vw`}, 1px)`,
                            src: `../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png`,
                            srcSet: `../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4-90d48d.png 512w,../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4-915c04.png 1024w,../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png 1078w`,
                          },
                        },
                      },
                      N,
                      J
                    ),
                    children: [
                      /*#__PURE__*/ s(g, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ s(t, {
                          children: /*#__PURE__*/ s(d.h2, {
                            className: `framer-styles-preset-ujbs82`,
                            "data-styles-preset": `l__4UHlzt`,
                            style: {
                              "--framer-text-color": `var(--extracted-1of0zx5, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                            },
                            children: `Ready to start your next project?`,
                          }),
                        }),
                        className: `framer-19noin8`,
                        "data-framer-name": `Title`,
                        fonts: [`Inter`],
                        layoutDependency: $,
                        layoutId: `yM7f9PcZH`,
                        style: {
                          "--extracted-1of0zx5": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: E,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      /*#__PURE__*/ s(d.div, {
                        className: `framer-k0wfic`,
                        "data-framer-name": `Button`,
                        layoutDependency: $,
                        layoutId: `oXK6pPE1z`,
                        children: /*#__PURE__*/ s(w, {
                          height: 52,
                          y: (m?.y || 0) + (0 + ((m?.height || 200) - 0 - 152) / 2) + 0 + 50 + 0,
                          ...I(
                            {
                              fMopB7F65: {
                                y:
                                  (m?.y || 0) +
                                  (0 + ((m?.height || 200) - 0 - 190) / 2) +
                                  0 +
                                  30 +
                                  78 +
                                  0,
                              },
                            },
                            N,
                            J
                          ),
                          children: /*#__PURE__*/ s(D, {
                            className: `framer-1eifbw6-container`,
                            layoutDependency: $,
                            layoutId: `lZEq_NqB2-container`,
                            nodeId: `lZEq_NqB2`,
                            rendersWithMotion: !0,
                            scopeId: `iy216z1H2`,
                            children: /*#__PURE__*/ s(j, {
                              gr8i9ifqK: k,
                              height: `100%`,
                              id: `lZEq_NqB2`,
                              layoutId: `lZEq_NqB2`,
                              LkRCOsI08: O,
                              variant: H(`pWspeyDyb`),
                              width: `100%`,
                              xgHJht2Sv: A,
                              ...I(
                                {
                                  fMopB7F65: { variant: H(`N7uhFy2RI`) },
                                  SDRL6ENgf: { variant: H(`N7uhFy2RI`) },
                                },
                                N,
                                J
                              ),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (Y = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Us49O.framer-10xvo5i, .framer-Us49O .framer-10xvo5i { display: block; }`,
        `.framer-Us49O.framer-1do4upp { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Us49O .framer-1u22csc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1100px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Us49O .framer-11lnjof { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 50px; position: relative; width: 1px; }`,
        `.framer-Us49O .framer-19noin8 { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-Us49O .framer-k0wfic { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Us49O .framer-1eifbw6-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Us49O.framer-v-167nl90.framer-1do4upp { width: 810px; }`,
        `.framer-Us49O.framer-v-7cu8v4.framer-1do4upp { width: 390px; }`,
        `.framer-Us49O.framer-v-7cu8v4 .framer-1u22csc { max-width: unset; }`,
        `.framer-Us49O.framer-v-7cu8v4 .framer-11lnjof { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; justify-content: center; padding: 30px; }`,
        `.framer-Us49O.framer-v-7cu8v4 .framer-19noin8 { flex: none; width: 100%; }`,
        `.framer-Us49O.framer-v-7cu8v4 .framer-k0wfic { flex: none; justify-content: flex-start; width: 100%; }`,
        ...N,
      ]),
      (X = O(J, Y, `framer-Us49O`)),
      (X.displayName = `CTA BG`),
      (X.defaultProps = { height: 196, width: 1200 }),
      v(X, {
        variant: {
          options: [`phecyeq0O`, `SDRL6ENgf`, `fMopB7F65`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: E.Enum,
        },
        oW2m16Ewg: {
          defaultValue: `Ready to start your next project?`,
          displayTextArea: !0,
          title: `Title`,
          type: E.String,
        },
        PrYHp3zjy: {
          defaultValue: `Schedule now`,
          displayTextArea: !0,
          title: `Button Title`,
          type: E.String,
        },
        Y9FG_7OXx: { title: `Link`, type: E.Link },
        F9Alxl5fC: { defaultValue: !1, title: `New Tab`, type: E.Boolean },
      }),
      y(
        X,
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
          ...L,
          ...k(P),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { Z as n, X as t };
//# sourceMappingURL=iy216z1H2.RkE08bQ8.mjs.map
