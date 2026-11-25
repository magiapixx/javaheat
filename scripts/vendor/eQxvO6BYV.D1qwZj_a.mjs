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
  Et as y,
  K as b,
  _t as x,
  ct as S,
  k as C,
  o as w,
  wt as T,
  z as E,
} from "./framer.DGJFnpg_.mjs";
import { _ as D, b as O, v as k, y as A } from "./toplevel-deps.XDVeXK4X.mjs";
function j(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J;
function Y() {
  return (Y = e(() => {
    (l(),
      b(),
      m(),
      r(),
      O(),
      (M = y(d.div)),
      (N = { KDwZBxwgB: { hover: !0 }, YIwdktslB: { hover: !0, pressed: !0 } }),
      (P = [
        `YIwdktslB`,
        `EtIUVt7LP`,
        `ClvYSc8lX`,
        `IFQxxrxzl`,
        `owBSx32k4`,
        `KDwZBxwgB`,
        `kEvA0hCcc`,
        `ZmGBQ2dxB`,
      ]),
      (F = `framer-Xl8HS`),
      (I = {
        ClvYSc8lX: `framer-v-61m1cb`,
        EtIUVt7LP: `framer-v-1rmlsmd`,
        IFQxxrxzl: `framer-v-1k3zwmw`,
        KDwZBxwgB: `framer-v-17qp13w`,
        kEvA0hCcc: `framer-v-1c2gkgo`,
        owBSx32k4: `framer-v-opz86w`,
        YIwdktslB: `framer-v-1nrc8xz`,
        ZmGBQ2dxB: `framer-v-7vh3nn`,
      }),
      (L = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (R = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (z = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (B = (e, t) => `translateX(-50%) ${t}`),
      (V = ({ value: e, children: t }) => {
        let r = a(p),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(p.Provider, { value: o, children: t });
      }),
      (H = d.create(t)),
      (U = {
        "Default - Desktop": `YIwdktslB`,
        "Default - Phone": `kEvA0hCcc`,
        "Orange - Desktop": `KDwZBxwgB`,
        "Orange - Phone": `ZmGBQ2dxB`,
        Disabled: `ClvYSc8lX`,
        Error: `owBSx32k4`,
        Loading: `EtIUVt7LP`,
        Success: `IFQxxrxzl`,
      }),
      (W = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        kdgzJfDTS: n ?? i.kdgzJfDTS ?? `Submit`,
        variant: U[i.variant] ?? i.variant ?? `YIwdktslB`,
      })),
      (G = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = u(),
          { activeLocale: l, setLocale: p } = x();
        S();
        let { style: m, className: _, layoutId: v, variant: y, kdgzJfDTS: b, ...w } = W(e),
          {
            baseVariant: T,
            classNames: E,
            clearLoadingGesture: O,
            gestureHandlers: k,
            gestureVariant: A,
            isLoading: U,
            setGestureState: K,
            setVariant: q,
            variants: J,
          } = g({
            cycleOrder: P,
            defaultVariant: `YIwdktslB`,
            enabledGestures: N,
            ref: a,
            variant: y,
            variantClassNames: I,
          }),
          Y = G(e, J),
          X = C(F, D),
          Z = () => T !== `EtIUVt7LP`,
          Q = () => ![`ClvYSc8lX`, `IFQxxrxzl`, `owBSx32k4`, `kEvA0hCcc`, `ZmGBQ2dxB`].includes(T),
          $ = () => T === `EtIUVt7LP`;
        return /*#__PURE__*/ s(f, {
          id: v ?? c,
          children: /*#__PURE__*/ s(H, {
            animate: J,
            initial: !1,
            children: /*#__PURE__*/ s(V, {
              value: L,
              children: /*#__PURE__*/ o(d.button, {
                ...w,
                ...k,
                className: C(X, `framer-1nrc8xz`, _, E),
                "data-framer-name": `Default - Desktop`,
                "data-reset": `button`,
                layoutDependency: Y,
                layoutId: `YIwdktslB`,
                ref: a,
                style: {
                  backgroundColor: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 14,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  opacity: 1,
                  ...m,
                },
                variants: {
                  "YIwdktslB-hover": { opacity: 1 },
                  "YIwdktslB-pressed": { opacity: 1 },
                  ClvYSc8lX: { opacity: 0.5 },
                  IFQxxrxzl: { opacity: 1 },
                  KDwZBxwgB: {
                    backgroundColor: `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                    opacity: 1,
                  },
                  kEvA0hCcc: { opacity: 1 },
                  owBSx32k4: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                  ZmGBQ2dxB: {
                    backgroundColor: `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                    opacity: 1,
                  },
                },
                ...j(
                  {
                    "KDwZBxwgB-hover": { "data-framer-name": void 0 },
                    "YIwdktslB-hover": { "data-framer-name": void 0 },
                    "YIwdktslB-pressed": { "data-framer-name": void 0 },
                    ClvYSc8lX: { "data-framer-name": `Disabled` },
                    EtIUVt7LP: { "data-framer-name": `Loading` },
                    IFQxxrxzl: { "data-framer-name": `Success` },
                    KDwZBxwgB: { "data-framer-name": `Orange - Desktop` },
                    kEvA0hCcc: { "data-framer-name": `Default - Phone` },
                    owBSx32k4: { "data-framer-name": `Error` },
                    ZmGBQ2dxB: { "data-framer-name": `Orange - Phone` },
                  },
                  T,
                  A
                ),
                children: [
                  Z() &&
                    /*#__PURE__*/ o(d.div, {
                      className: `framer-1aj6t7o`,
                      "data-framer-name": `Title`,
                      layoutDependency: Y,
                      layoutId: `vaYAXr1eZ`,
                      children: [
                        /*#__PURE__*/ s(h, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ s(t, {
                            children: /*#__PURE__*/ s(d.div, {
                              className: `framer-styles-preset-ecqg04`,
                              "data-styles-preset": `CkbU37qav`,
                              style: {
                                "--framer-text-color": `var(--extracted-tcooor, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                              },
                              children: `Submit`,
                            }),
                          }),
                          className: `framer-1qbemm`,
                          "data-framer-name": `Title`,
                          fonts: [`Inter`],
                          layoutDependency: Y,
                          layoutId: `G19oXMAfR`,
                          style: {
                            "--extracted-tcooor": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            opacity: 1,
                          },
                          text: b,
                          variants: {
                            "KDwZBxwgB-hover": { opacity: 0 },
                            "YIwdktslB-hover": { opacity: 0 },
                            "YIwdktslB-pressed": { opacity: 1 },
                            KDwZBxwgB: {
                              "--extracted-tcooor": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                            },
                            owBSx32k4: { "--extracted-tcooor": `rgb(255, 34, 68)` },
                            ZmGBQ2dxB: {
                              "--extracted-tcooor": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...j(
                            {
                              IFQxxrxzl: {
                                children: /*#__PURE__*/ s(t, {
                                  children: /*#__PURE__*/ s(d.div, {
                                    className: `framer-styles-preset-ecqg04`,
                                    "data-styles-preset": `CkbU37qav`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-tcooor, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                    },
                                    children: `Message sent. Thank you!`,
                                  }),
                                }),
                                text: void 0,
                              },
                              KDwZBxwgB: {
                                children: /*#__PURE__*/ s(t, {
                                  children: /*#__PURE__*/ s(d.div, {
                                    className: `framer-styles-preset-ecqg04`,
                                    "data-styles-preset": `CkbU37qav`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-tcooor, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                                    },
                                    children: `Submit`,
                                  }),
                                }),
                              },
                              owBSx32k4: {
                                children: /*#__PURE__*/ s(t, {
                                  children: /*#__PURE__*/ s(d.div, {
                                    className: `framer-styles-preset-ecqg04`,
                                    "data-styles-preset": `CkbU37qav`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-tcooor, rgb(255, 34, 68))`,
                                    },
                                    children: `Something went wrong`,
                                  }),
                                }),
                                text: void 0,
                              },
                              ZmGBQ2dxB: {
                                children: /*#__PURE__*/ s(t, {
                                  children: /*#__PURE__*/ s(d.div, {
                                    className: `framer-styles-preset-ecqg04`,
                                    "data-styles-preset": `CkbU37qav`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-tcooor, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                                    },
                                    children: `Submit`,
                                  }),
                                }),
                              },
                            },
                            T,
                            A
                          ),
                        }),
                        Q() &&
                          /*#__PURE__*/ s(h, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(d.div, {
                                className: `framer-styles-preset-ecqg04`,
                                "data-styles-preset": `CkbU37qav`,
                                style: {
                                  "--framer-text-color": `var(--extracted-tcooor, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                },
                                children: `Submit`,
                              }),
                            }),
                            className: `framer-171l7wd`,
                            "data-framer-name": `Hover Title`,
                            fonts: [`Inter`],
                            layoutDependency: Y,
                            layoutId: `Z9cb5sJQK`,
                            style: {
                              "--extracted-tcooor": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                              opacity: 0,
                            },
                            text: b,
                            variants: {
                              "KDwZBxwgB-hover": { opacity: 1 },
                              "YIwdktslB-hover": { opacity: 1 },
                              KDwZBxwgB: {
                                "--extracted-tcooor": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...j(
                              {
                                KDwZBxwgB: {
                                  children: /*#__PURE__*/ s(t, {
                                    children: /*#__PURE__*/ s(d.div, {
                                      className: `framer-styles-preset-ecqg04`,
                                      "data-styles-preset": `CkbU37qav`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-tcooor, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                                      },
                                      children: `Submit`,
                                    }),
                                  }),
                                },
                              },
                              T,
                              A
                            ),
                          }),
                      ],
                    }),
                  $() &&
                    /*#__PURE__*/ s(d.div, {
                      className: `framer-wiuq0y`,
                      "data-framer-name": `Spinner`,
                      layoutDependency: Y,
                      layoutId: `MlbkHuXCN`,
                      style: {
                        mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                      },
                      children: /*#__PURE__*/ s(M, {
                        __framer__loop: z,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: `loop`,
                        __framer__loopTransition: R,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1dbh2gz`,
                        "data-framer-name": `Conic`,
                        layoutDependency: Y,
                        layoutId: `fcZJo64X5`,
                        style: {
                          background: `conic-gradient(from 0deg at 50% 50%, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                          mask: `none`,
                          WebkitMask: `none`,
                        },
                        variants: {
                          EtIUVt7LP: {
                            mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          },
                        },
                        children: /*#__PURE__*/ s(d.div, {
                          className: `framer-hrovh7`,
                          "data-framer-name": `Rounding`,
                          layoutDependency: Y,
                          layoutId: `bkIF3mt7d`,
                          style: {
                            backgroundColor: `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                            borderBottomLeftRadius: 1,
                            borderBottomRightRadius: 1,
                            borderTopLeftRadius: 1,
                            borderTopRightRadius: 1,
                          },
                          transformTemplate: B,
                        }),
                      }),
                    }),
                ],
              }),
            }),
          }),
        });
      })),
      (q = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Xl8HS.framer-obnib8, .framer-Xl8HS .framer-obnib8 { display: block; }`,
        `.framer-Xl8HS.framer-1nrc8xz { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Xl8HS .framer-1aj6t7o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Xl8HS .framer-1qbemm { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
        `.framer-Xl8HS .framer-171l7wd { -webkit-user-select: none; bottom: -30px; flex: none; height: auto; left: 0px; position: absolute; right: 0px; user-select: none; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-Xl8HS .framer-wiuq0y { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
        `.framer-Xl8HS .framer-1dbh2gz { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
        `.framer-Xl8HS .framer-hrovh7 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
        `.framer-Xl8HS.framer-v-1rmlsmd.framer-1nrc8xz, .framer-Xl8HS.framer-v-61m1cb.framer-1nrc8xz, .framer-Xl8HS.framer-v-1k3zwmw.framer-1nrc8xz, .framer-Xl8HS.framer-v-opz86w.framer-1nrc8xz, .framer-Xl8HS.framer-v-1c2gkgo.framer-1nrc8xz, .framer-Xl8HS.framer-v-7vh3nn.framer-1nrc8xz { cursor: unset; }`,
        `.framer-Xl8HS.framer-v-1rmlsmd .framer-1dbh2gz { overflow: hidden; }`,
        `.framer-Xl8HS.framer-v-1nrc8xz.hover .framer-1qbemm, .framer-Xl8HS.framer-v-17qp13w.hover .framer-1qbemm { left: 0px; position: absolute; right: 0px; top: -30px; white-space: pre-wrap; width: unset; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-Xl8HS.framer-v-1nrc8xz.hover .framer-171l7wd, .framer-Xl8HS.framer-v-17qp13w.hover .framer-171l7wd { bottom: unset; left: unset; position: relative; right: unset; white-space: pre; width: auto; }`,
        ...k,
      ]),
      (J = T(K, q, `framer-Xl8HS`)),
      (J.displayName = `Submit Button`),
      (J.defaultProps = { height: 39, width: 73 }),
      _(J, {
        variant: {
          options: [
            `YIwdktslB`,
            `EtIUVt7LP`,
            `ClvYSc8lX`,
            `IFQxxrxzl`,
            `owBSx32k4`,
            `KDwZBxwgB`,
            `kEvA0hCcc`,
            `ZmGBQ2dxB`,
          ],
          optionTitles: [
            `Default - Desktop`,
            `Loading`,
            `Disabled`,
            `Success`,
            `Error`,
            `Orange - Desktop`,
            `Default - Phone`,
            `Orange - Phone`,
          ],
          title: `Variant`,
          type: w.Enum,
        },
        kdgzJfDTS: { defaultValue: `Submit`, displayTextArea: !0, title: `Title`, type: w.String },
      }),
      v(
        J,
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
          ...E(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { Y as n, J as t };
//# sourceMappingURL=eQxvO6BYV.D1qwZj_a.mjs.map
