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
  Ot as x,
  _t as S,
  ct as C,
  k as w,
  o as T,
  st as E,
  wt as D,
  z as O,
} from "./framer.DGJFnpg_.mjs";
import { _ as k, b as A, v as j, y as M } from "./toplevel-deps.XDVeXK4X.mjs";
function N(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (l(),
      b(),
      m(),
      r(),
      A(),
      (P = y(d.div)),
      (F = x(y(d.div))),
      (I = { pApV0HJIQ: { hover: !0 } }),
      (L = [`pApV0HJIQ`, `oaVyXD_VX`, `E0EsXwZLV`, `m3ANS7lXw`, `XiJFaMxJs`]),
      (R = `framer-GhD3b`),
      (z = {
        E0EsXwZLV: `framer-v-1c0ktnf`,
        m3ANS7lXw: `framer-v-xcbz10`,
        oaVyXD_VX: `framer-v-i5p00h`,
        pApV0HJIQ: `framer-v-1vjdnby`,
        XiJFaMxJs: `framer-v-1x2dby4`,
      }),
      (B = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (V = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (H = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (U = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (W = {
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
      (G = ({ value: e, children: t }) => {
        let r = a(p),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(p.Provider, { value: o, children: t });
      }),
      (K = d.create(t)),
      (q = {
        "After Load": `m3ANS7lXw`,
        Desktop: `pApV0HJIQ`,
        Hidden: `E0EsXwZLV`,
        Loading: `oaVyXD_VX`,
        Phone: `XiJFaMxJs`,
      }),
      (J = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: q[i.variant] ?? i.variant ?? `pApV0HJIQ`,
        Wld3NDzSj: e ?? i.Wld3NDzSj,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = u(),
          { activeLocale: l, setLocale: p } = S();
        C();
        let { style: m, className: _, layoutId: v, variant: y, Wld3NDzSj: b, ...x } = J(e),
          {
            baseVariant: T,
            classNames: D,
            clearLoadingGesture: O,
            gestureHandlers: A,
            gestureVariant: j,
            isLoading: M,
            setGestureState: q,
            setVariant: X,
            variants: Z,
          } = g({
            cycleOrder: L,
            defaultVariant: `pApV0HJIQ`,
            enabledGestures: I,
            ref: a,
            variant: y,
            variantClassNames: z,
          }),
          Q = Y(e, Z),
          { activeVariantCallback: $, delay: ee } = E(T),
          te = $(async (...e) => {
            if ((q({ isPressed: !1 }), b && (await b(...e)) === !1)) return !1;
          }),
          ne = [k],
          re = () => T !== `E0EsXwZLV`,
          ie = w(R, ...ne),
          ae = () => T !== `oaVyXD_VX`,
          oe = () => ![`m3ANS7lXw`, `XiJFaMxJs`].includes(T),
          se = () => T === `oaVyXD_VX`;
        return /*#__PURE__*/ s(f, {
          id: v ?? c,
          children: /*#__PURE__*/ s(K, {
            animate: Z,
            initial: !1,
            children:
              re() &&
              /*#__PURE__*/ s(G, {
                value: B,
                children: /*#__PURE__*/ o(d.button, {
                  ...x,
                  ...A,
                  className: w(ie, `framer-1vjdnby`, _, D),
                  "data-framer-name": `Desktop`,
                  "data-highlight": !0,
                  "data-reset": `button`,
                  layoutDependency: Q,
                  layoutId: `pApV0HJIQ`,
                  onTap: te,
                  ref: a,
                  style: {
                    backgroundColor: `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    ...m,
                  },
                  variants: { m3ANS7lXw: { backgroundColor: `rgba(0, 0, 0, 0)` } },
                  ...N(
                    {
                      "pApV0HJIQ-hover": { "data-framer-name": void 0 },
                      m3ANS7lXw: {
                        "data-framer-name": `After Load`,
                        "data-highlight": void 0,
                        onTap: void 0,
                      },
                      oaVyXD_VX: { "data-framer-name": `Loading` },
                      XiJFaMxJs: { "data-framer-name": `Phone` },
                    },
                    T,
                    j
                  ),
                  children: [
                    ae() &&
                      /*#__PURE__*/ o(d.div, {
                        className: `framer-17f9txr`,
                        "data-framer-name": `Title`,
                        layoutDependency: Q,
                        layoutId: `Js27HrQNf`,
                        children: [
                          /*#__PURE__*/ s(h, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(d.div, {
                                className: `framer-styles-preset-ecqg04`,
                                "data-styles-preset": `CkbU37qav`,
                                style: {
                                  "--framer-text-color": `var(--extracted-tcooor, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                                },
                                children: `Load more`,
                              }),
                            }),
                            className: `framer-1n477kk`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: Q,
                            layoutId: `My_yxrtc6`,
                            style: {
                              "--extracted-tcooor": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                              opacity: 1,
                            },
                            variants: {
                              "pApV0HJIQ-hover": { opacity: 0 },
                              m3ANS7lXw: {
                                "--extracted-tcooor": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...N(
                              {
                                m3ANS7lXw: {
                                  children: /*#__PURE__*/ s(t, {
                                    children: /*#__PURE__*/ s(d.div, {
                                      className: `framer-styles-preset-ecqg04`,
                                      "data-styles-preset": `CkbU37qav`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-tcooor, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                      },
                                      children: `That’s everything for now!`,
                                    }),
                                  }),
                                },
                              },
                              T,
                              j
                            ),
                          }),
                          oe() &&
                            /*#__PURE__*/ s(h, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ s(d.div, {
                                  className: `framer-styles-preset-ecqg04`,
                                  "data-styles-preset": `CkbU37qav`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-tcooor, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                                  },
                                  children: `Load more`,
                                }),
                              }),
                              className: `framer-pom305`,
                              "data-framer-name": `Hover Text`,
                              fonts: [`Inter`],
                              layoutDependency: Q,
                              layoutId: `r9dFS_fG0`,
                              style: {
                                "--extracted-tcooor": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                opacity: 0,
                              },
                              variants: { "pApV0HJIQ-hover": { opacity: 1 } },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                        ],
                      }),
                    se() &&
                      /*#__PURE__*/ s(F, {
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: V,
                        className: `framer-mtl3gt`,
                        "data-framer-appear-id": `mtl3gt`,
                        "data-framer-name": `Spinner`,
                        initial: H,
                        layoutDependency: Q,
                        layoutId: `Pv2f0baTa`,
                        optimized: !0,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: /*#__PURE__*/ s(P, {
                          __framer__loop: W,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: U,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-1ksa8nd`,
                          "data-framer-name": `Conic`,
                          layoutDependency: Q,
                          layoutId: `ZJ42mwylC`,
                          style: {
                            background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, rgb(255, 255, 255) 342deg)`,
                          },
                          children: /*#__PURE__*/ s(d.div, {
                            className: `framer-bbmdnq`,
                            "data-framer-name": `Round`,
                            layoutDependency: Q,
                            layoutId: `LmGhro2qN`,
                            style: {
                              backgroundColor: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                          }),
                        }),
                      }),
                  ],
                }),
              }),
          }),
        });
      })),
      (Z = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-GhD3b.framer-8evdmg, .framer-GhD3b .framer-8evdmg { display: block; }`,
        `.framer-GhD3b.framer-1vjdnby { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-GhD3b .framer-17f9txr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-GhD3b .framer-1n477kk { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
        `.framer-GhD3b .framer-pom305 { -webkit-user-select: none; bottom: -30px; flex: none; height: auto; left: 0px; position: absolute; right: 0px; user-select: none; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-GhD3b .framer-mtl3gt { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }`,
        `.framer-GhD3b .framer-1ksa8nd { bottom: 0px; flex: none; gap: 10px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
        `.framer-GhD3b .framer-bbmdnq { flex: none; height: 2px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; }`,
        `.framer-GhD3b.framer-v-i5p00h.framer-1vjdnby { height: min-content; }`,
        `.framer-GhD3b.framer-v-xcbz10.framer-1vjdnby { cursor: unset; height: min-content; }`,
        `.framer-GhD3b.framer-v-1vjdnby.hover .framer-1n477kk { left: 0px; position: absolute; right: 0px; top: -30px; white-space: pre-wrap; width: unset; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-GhD3b.framer-v-1vjdnby.hover .framer-pom305 { bottom: unset; left: unset; position: relative; right: unset; white-space: pre; width: auto; }`,
        ...j,
      ]),
      (Q = D(X, Z, `framer-GhD3b`)),
      (Q.displayName = `Load More`),
      (Q.defaultProps = { height: 40, width: 99 }),
      _(Q, {
        variant: {
          options: [`pApV0HJIQ`, `oaVyXD_VX`, `E0EsXwZLV`, `m3ANS7lXw`, `XiJFaMxJs`],
          optionTitles: [`Desktop`, `Loading`, `Hidden`, `After Load`, `Phone`],
          title: `Variant`,
          type: T.Enum,
        },
        Wld3NDzSj: { title: `Click`, type: T.EventHandler },
      }),
      v(
        Q,
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
          ...O(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { $ as n, Q as t };
//# sourceMappingURL=zk2k_vuc_.Ctfk4hXK.mjs.map
