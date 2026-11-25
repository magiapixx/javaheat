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
  s as ee,
  w as l,
} from "./react.DfujhmXs.mjs";
import { T as u, i as te, o as d, t as f } from "./motion.BoJ_50qN.mjs";
import {
  B as p,
  C as m,
  Ct as ne,
  D as h,
  E as g,
  K as _,
  L as v,
  _t as re,
  ct as ie,
  f as y,
  i as ae,
  j as b,
  k as x,
  m as oe,
  o as S,
  w as se,
  wt as C,
  z as w,
} from "./framer.DGJFnpg_.mjs";
import { i as T, n as E, r as D, t as ce } from "./GzMbxD0G0.KqlKB3xq.mjs";
import { i as O, n as k, r as A, t as le } from "./CkbU37qav.BqWyj--f.mjs";
import { i as ue, n as j, r as M, t as de } from "./prOpMcG3Y.2F0Qj1qz.mjs";
import { n as fe, t as N } from "./GRYfLB066.1cR48V0E.mjs";
function P(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (ee(),
      _(),
      f(),
      r(),
      O(),
      T(),
      ue(),
      fe(),
      (F = v(N)),
      (I = { fXTT0XQVd: { hover: !0 } }),
      (L = [`fXTT0XQVd`, `FtbjFRTO3`, `SHNqLHdNg`]),
      (R = `framer-s15l9`),
      (z = {
        FtbjFRTO3: `framer-v-ieblnx`,
        fXTT0XQVd: `framer-v-175ah9n`,
        SHNqLHdNg: `framer-v-lihqk5`,
      }),
      (B = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (V = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (H = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (U = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (W = (e, t) => `translate(-50%, -50%) ${t}`),
      (G = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(d.Provider, { value: o, children: t });
      }),
      (K = { Desktop: `fXTT0XQVd`, Phone: `SHNqLHdNg`, Tablet: `FtbjFRTO3` }),
      (q = u.create(t)),
      (J = ({
        category: e,
        clientLogo: t,
        height: n,
        id: r,
        image: i,
        link: a,
        scope: o,
        scopeText: s,
        title: c,
        width: ee,
        ...l
      }) => ({
        ...l,
        cIx_IJNIR: i ??
          l.cIx_IJNIR ?? {
            alt: `Case Study Image`,
            pixelHeight: 404,
            pixelWidth: 761,
            src: `../../assets/images/vmDI6OhtvdrUzZdCKxTTjToIeI.webp`,
            srcSet: `../../assets/images/vmDI6OhtvdrUzZdCKxTTjToIeI-8e8995.webp 512w,../../assets/images/vmDI6OhtvdrUzZdCKxTTjToIeI.webp 761w`,
          },
        enmW0lZlE: a ?? l.enmW0lZlE,
        gwO5NAlgC: e ?? l.gwO5NAlgC ?? `Materials engineering`,
        na1mgkHQT: s ?? l.na1mgkHQT ?? `Heavy-duty machinery`,
        OrhXXid_A: t ??
          l.OrhXXid_A ?? {
            alt: `Client Logo`,
            pixelHeight: 24,
            pixelWidth: 115,
            src: `../../assets/images/TqbYVzg7ybZyZdS0f5Kul8k3qE.svg`,
          },
        swALXvpK7: o ?? l.swALXvpK7 ?? `35%`,
        swJLO07rV: c ?? l.swJLO07rV ?? `Lightweight castings for Industrial equipment`,
        variant: K[l.variant] ?? l.variant ?? `fXTT0XQVd`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = l(),
          { activeLocale: ee, setLocale: d } = re(),
          f = ie(),
          {
            style: h,
            className: g,
            layoutId: _,
            variant: v,
            cIx_IJNIR: b,
            swJLO07rV: S,
            gwO5NAlgC: C,
            swALXvpK7: w,
            na1mgkHQT: T,
            OrhXXid_A: E,
            enmW0lZlE: D,
            ...O
          } = J(e),
          {
            baseVariant: k,
            classNames: A,
            clearLoadingGesture: ue,
            gestureHandlers: j,
            gestureVariant: M,
            isLoading: fe,
            setGestureState: F,
            setVariant: K,
            variants: X,
          } = ne({
            cycleOrder: L,
            defaultVariant: `fXTT0XQVd`,
            enabledGestures: I,
            ref: a,
            variant: v,
            variantClassNames: z,
          }),
          Z = Y(e, X),
          Q = x(R, de, ce, le),
          $ = V(C),
          pe = V(w),
          me = V(T),
          he = V(E);
        return /*#__PURE__*/ s(te, {
          id: _ ?? c,
          children: /*#__PURE__*/ s(q, {
            animate: X,
            initial: !1,
            children: /*#__PURE__*/ s(G, {
              value: B,
              children: /*#__PURE__*/ s(oe, {
                href: D,
                motionChild: !0,
                nodeId: `fXTT0XQVd`,
                openInNewTab: !1,
                scopeId: `vYZRaGVcX`,
                smoothScroll: !0,
                children: /*#__PURE__*/ o(u.a, {
                  ...O,
                  ...j,
                  className: `${x(Q, `framer-175ah9n`, g, A)} framer-zrezwb`,
                  "data-framer-name": `Desktop`,
                  layoutDependency: Z,
                  layoutId: `fXTT0XQVd`,
                  ref: a,
                  style: {
                    backgroundColor: `var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, rgb(246, 246, 246))`,
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    ...h,
                  },
                  ...P(
                    {
                      "fXTT0XQVd-hover": { "data-framer-name": void 0 },
                      FtbjFRTO3: { "data-framer-name": `Tablet` },
                      SHNqLHdNg: { "data-framer-name": `Phone` },
                    },
                    k,
                    M
                  ),
                  children: [
                    /*#__PURE__*/ o(u.div, {
                      className: `framer-1iymn3m`,
                      "data-framer-name": `Info`,
                      layoutDependency: Z,
                      layoutId: `SBSmKW2Vc`,
                      children: [
                        /*#__PURE__*/ o(u.div, {
                          className: `framer-18u0g9d`,
                          "data-framer-name": `Top`,
                          layoutDependency: Z,
                          layoutId: `uZaPcBtzd`,
                          children: [
                            $ !== !1 &&
                              /*#__PURE__*/ s(ae, {
                                height: 29,
                                y:
                                  (f?.y || 0) +
                                  (0 +
                                    ((f?.height || 280) - 0 - ((f?.height || 280) - 0) * 1) / 2) +
                                  16 +
                                  (0 + ((((f?.height || 280) - 0) * 1 - 32 - 215.4) / 1) * 0) +
                                  0 +
                                  0,
                                ...P(
                                  { SHNqLHdNg: { y: (f?.y || 0) + 0 + 91 + 16 + 0 + 0 + 0 } },
                                  k,
                                  M
                                ),
                                children: /*#__PURE__*/ s(se, {
                                  className: `framer-f7xiqh-container`,
                                  layoutDependency: Z,
                                  layoutId: `wCyaMAKl1-container`,
                                  nodeId: `wCyaMAKl1`,
                                  rendersWithMotion: !0,
                                  scopeId: `vYZRaGVcX`,
                                  children: /*#__PURE__*/ s(N, {
                                    height: `100%`,
                                    id: `wCyaMAKl1`,
                                    layoutId: `wCyaMAKl1`,
                                    variant: H(`PZwqHmdSi`),
                                    vOUUEJJrj: C,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            /*#__PURE__*/ s(m, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ s(u.h2, {
                                  className: `framer-styles-preset-1yngv0g`,
                                  "data-styles-preset": `prOpMcG3Y`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1of0zx5, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                  },
                                  children: `Lightweight castings for Industrial equipment`,
                                }),
                              }),
                              className: `framer-fenl46`,
                              "data-framer-name": `Title`,
                              fonts: [`Inter`],
                              layoutDependency: Z,
                              layoutId: `C8uf1R4QD`,
                              style: {
                                "--extracted-1of0zx5": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                              },
                              text: S,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        /*#__PURE__*/ o(u.div, {
                          className: `framer-lq6bcx`,
                          "data-framer-name": `Bottom`,
                          layoutDependency: Z,
                          layoutId: `RsbfMpAA8`,
                          children: [
                            pe !== !1 &&
                              /*#__PURE__*/ s(m, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ s(t, {
                                  children: /*#__PURE__*/ s(u.h3, {
                                    className: `framer-styles-preset-1f8or04`,
                                    "data-styles-preset": `GzMbxD0G0`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-a0htzi, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                    },
                                    children: `35%`,
                                  }),
                                }),
                                className: `framer-klwr6g`,
                                "data-framer-name": `Scope`,
                                fonts: [`Inter`],
                                layoutDependency: Z,
                                layoutId: `hejsPBXHW`,
                                style: {
                                  "--extracted-a0htzi": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                },
                                text: w,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            me !== !1 &&
                              /*#__PURE__*/ s(m, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ s(t, {
                                  children: /*#__PURE__*/ s(u.p, {
                                    className: `framer-styles-preset-ecqg04`,
                                    "data-styles-preset": `CkbU37qav`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, rgb(25, 25, 25)))`,
                                    },
                                    children: `Heavy-duty machinery`,
                                  }),
                                }),
                                className: `framer-k6avt2`,
                                "data-framer-name": `Scope Text`,
                                fonts: [`Inter`],
                                layoutDependency: Z,
                                layoutId: `LfyKOCA5v`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, rgb(25, 25, 25))`,
                                },
                                text: T,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ o(u.div, {
                      className: `framer-1ykuk2r`,
                      "data-framer-name": `Image`,
                      layoutDependency: Z,
                      layoutId: `pbO_Q1V1B`,
                      style: {
                        borderBottomRightRadius: 4,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 4,
                      },
                      variants: {
                        "fXTT0XQVd-hover": { borderTopLeftRadius: 0 },
                        SHNqLHdNg: { borderBottomRightRadius: 0, borderTopLeftRadius: 4 },
                      },
                      children: [
                        he !== !1 &&
                          /*#__PURE__*/ s(y, {
                            background: {
                              alt: `Client Logo`,
                              fit: `fit`,
                              loading: p(
                                (f?.y || 0) +
                                  (0 +
                                    ((f?.height || 280) - 0 - ((f?.height || 280) - 0) * 1) / 2) +
                                  (((f?.height || 280) - 0) * 1 * 0.5000000000000002 - 16.5)
                              ),
                              pixelHeight: 24,
                              pixelWidth: 115,
                              sizes: `160px`,
                              ...U(E),
                              positionX: `center`,
                              positionY: `center`,
                            },
                            className: `framer-5r77jx`,
                            "data-framer-name": `Client Logo`,
                            fitImageDimension: `height`,
                            layoutDependency: Z,
                            layoutId: `jQhu_gJY6`,
                            style: { opacity: 0 },
                            transformTemplate: W,
                            variants: {
                              "fXTT0XQVd-hover": { opacity: 1 },
                              FtbjFRTO3: { opacity: 1 },
                              SHNqLHdNg: { opacity: 1 },
                            },
                            ...P(
                              {
                                FtbjFRTO3: {
                                  background: {
                                    alt: `Client Logo`,
                                    fit: `fit`,
                                    loading: p(
                                      (f?.y || 0) +
                                        (0 +
                                          ((f?.height || 280) - 0 - ((f?.height || 280) - 0) * 1) /
                                            2) +
                                        (((f?.height || 280) - 0) * 1 * 0.5000000000000002 - 12.5)
                                    ),
                                    pixelHeight: 24,
                                    pixelWidth: 115,
                                    sizes: `120px`,
                                    ...U(E),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                },
                                SHNqLHdNg: {
                                  background: {
                                    alt: `Client Logo`,
                                    fit: `fit`,
                                    loading: p((f?.y || 0) + 0 + 0 + 33),
                                    pixelHeight: 24,
                                    pixelWidth: 115,
                                    sizes: `120px`,
                                    ...U(E),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                },
                              },
                              k,
                              M
                            ),
                          }),
                        /*#__PURE__*/ s(u.div, {
                          className: `framer-1mifp0f`,
                          "data-framer-name": `Overlay`,
                          layoutDependency: Z,
                          layoutId: `IOtTssprX`,
                          style: {
                            backgroundColor: `var(--token-ebbb66ec-f9dd-4c04-b8a5-9b5e92ddfe90, rgba(21, 21, 21, 0.3))`,
                            opacity: 0,
                          },
                          variants: {
                            "fXTT0XQVd-hover": { opacity: 1 },
                            FtbjFRTO3: { opacity: 1 },
                            SHNqLHdNg: { opacity: 1 },
                          },
                        }),
                        /*#__PURE__*/ s(y, {
                          background: {
                            alt: `Case Study Image`,
                            fit: `fill`,
                            loading: p(
                              (f?.y || 0) +
                                (0 + ((f?.height || 280) - 0 - ((f?.height || 280) - 0) * 1) / 2) +
                                (0 +
                                  (((f?.height || 280) - 0) * 1 -
                                    0 -
                                    (((f?.height || 280) - 0) * 1 - 0) * 1) /
                                    2)
                            ),
                            pixelHeight: 404,
                            pixelWidth: 761,
                            sizes: `max((${f?.width || `100vw`} - 20px) / 2, 1px)`,
                            ...U(b),
                          },
                          className: `framer-1sdaska`,
                          "data-framer-name": `Image`,
                          layoutDependency: Z,
                          layoutId: `AoyALFaVI`,
                          style: { scale: 1 },
                          variants: { "fXTT0XQVd-hover": { scale: 1.05 } },
                          ...P(
                            {
                              SHNqLHdNg: {
                                background: {
                                  alt: `Case Study Image`,
                                  fit: `fill`,
                                  loading: p((f?.y || 0) + 0 + 0 + 0),
                                  pixelHeight: 404,
                                  pixelWidth: 761,
                                  sizes: `max(${f?.width || `100vw`}, 1px)`,
                                  ...U(b),
                                },
                                fitImageDimension: `height`,
                              },
                            },
                            k,
                            M
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Z = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-s15l9.framer-zrezwb, .framer-s15l9 .framer-zrezwb { display: block; }`,
        `.framer-s15l9.framer-175ah9n { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 280px; justify-content: flex-start; min-height: 280px; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 540px; }`,
        `.framer-s15l9 .framer-1iymn3m { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; padding: 16px; position: relative; width: 1px; }`,
        `.framer-s15l9 .framer-18u0g9d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-s15l9 .framer-f7xiqh-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-s15l9 .framer-fenl46 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-s15l9 .framer-lq6bcx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 10px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-s15l9 .framer-klwr6g, .framer-s15l9 .framer-k6avt2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-s15l9 .framer-1ykuk2r { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-s15l9 .framer-5r77jx { flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 50%; width: 160px; z-index: 2; }`,
        `.framer-s15l9 .framer-1mifp0f { -webkit-user-select: none; flex: none; height: 100%; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 1; }`,
        `.framer-s15l9 .framer-1sdaska { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `.framer-s15l9.framer-v-ieblnx.framer-175ah9n { cursor: unset; }`,
        `.framer-s15l9.framer-v-ieblnx .framer-5r77jx, .framer-s15l9.framer-v-lihqk5 .framer-5r77jx { width: 120px; }`,
        `.framer-s15l9.framer-v-lihqk5.framer-175ah9n { cursor: unset; flex-direction: column; gap: 0px; height: min-content; min-height: unset; width: 390px; }`,
        `.framer-s15l9.framer-v-lihqk5 .framer-1iymn3m { flex: none; gap: 30px; height: min-content; justify-content: flex-start; order: 1; width: 100%; }`,
        `.framer-s15l9.framer-v-lihqk5 .framer-1ykuk2r { flex: none; height: min-content; order: 0; width: 100%; }`,
        `.framer-s15l9.framer-v-lihqk5 .framer-1sdaska { height: auto; }`,
        ...j,
        ...E,
        ...k,
      ]),
      (Q = C(X, Z, `framer-s15l9`)),
      (Q.displayName = `Case Study Card`),
      (Q.defaultProps = { height: 280, width: 540 }),
      h(Q, {
        variant: {
          options: [`fXTT0XQVd`, `FtbjFRTO3`, `SHNqLHdNg`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: S.Enum,
        },
        cIx_IJNIR: {
          __defaultAssetReference: `data:framer/asset-reference,vmDI6OhtvdrUzZdCKxTTjToIeI.webp?originalFilename=Case+Study+Image+1.webp&width=761&height=404`,
          __vekterDefault: {
            alt: `Case Study Image`,
            assetReference: `data:framer/asset-reference,vmDI6OhtvdrUzZdCKxTTjToIeI.webp?originalFilename=Case+Study+Image+1.webp&width=761&height=404`,
          },
          description: `Recommended size 400px X 400px`,
          title: `Image`,
          type: S.ResponsiveImage,
        },
        swJLO07rV: {
          defaultValue: `Lightweight castings for Industrial equipment`,
          displayTextArea: !0,
          title: `Title`,
          type: S.String,
        },
        onswJLO07rVChange: { changes: `swJLO07rV`, type: S.ChangeHandler },
        gwO5NAlgC: {
          defaultValue: `Materials engineering`,
          displayTextArea: !0,
          title: `Category`,
          type: S.String,
        },
        ongwO5NAlgCChange: { changes: `gwO5NAlgC`, type: S.ChangeHandler },
        swALXvpK7: { defaultValue: `35%`, title: `Scope`, type: S.String },
        onswALXvpK7Change: { changes: `swALXvpK7`, type: S.ChangeHandler },
        na1mgkHQT: {
          defaultValue: `Heavy-duty machinery`,
          displayTextArea: !0,
          title: `Scope Text`,
          type: S.String,
        },
        onna1mgkHQTChange: { changes: `na1mgkHQT`, type: S.ChangeHandler },
        OrhXXid_A: {
          __defaultAssetReference: `data:framer/asset-reference,TqbYVzg7ybZyZdS0f5Kul8k3qE.svg?originalFilename=Client+Image.svg&width=115&height=24`,
          __vekterDefault: {
            alt: `Client Logo`,
            assetReference: `data:framer/asset-reference,TqbYVzg7ybZyZdS0f5Kul8k3qE.svg?originalFilename=Client+Image.svg&width=115&height=24`,
          },
          title: `Client Logo`,
          type: S.ResponsiveImage,
        },
        enmW0lZlE: { title: `Link`, type: S.Link },
      }),
      g(
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
          ...F,
          ...w(M),
          ...w(D),
          ...w(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([b(N, {}, t)])) }));
  }))();
}
export { $ as n, Q as t };
//# sourceMappingURL=vYZRaGVcX.CgT4L3ri.mjs.map
