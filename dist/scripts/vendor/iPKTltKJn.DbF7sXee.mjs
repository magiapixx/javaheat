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
  w as ee,
  y as u,
} from "./react.DfujhmXs.mjs";
import { T as d, i as f, o as p, t as m } from "./motion.BoJ_50qN.mjs";
import {
  A as h,
  C as g,
  Ct as _,
  D as v,
  E as y,
  Et as b,
  K as x,
  Mt as S,
  _t as te,
  ct as ne,
  k as C,
  o as w,
  st as re,
  wt as ie,
  z as T,
} from "./framer.DGJFnpg_.mjs";
import { c as E, l as D, s as O, u as k } from "./toplevel-deps.XDVeXK4X.mjs";
function A({ direction: e, style: t }) {
  let n = S.current() === S.canvas,
    r = i(null),
    a = i(),
    o = e === `vertical` || e === `both`,
    c = e === `horizontal` || e === `both`;
  return (
    u(() => {
      if (n) return;
      let e = r.current?.parentElement?.parentElement;
      if (!e) return;
      let t = e.parentElement;
      if (!t) return;
      let i = () => {
        let n = e.getBoundingClientRect();
        (c && (t.style.width = `${n.width}px`),
          o && (t.style.height = `${n.height}px`),
          (a.current = requestAnimationFrame(i)));
      };
      return (
        (a.current = requestAnimationFrame(i)),
        () => {
          (a.current && cancelAnimationFrame(a.current),
            t && (c && (t.style.width = ``), o && (t.style.height = ``)));
        }
      );
    }, [e]),
    /*#__PURE__*/ s(`div`, { ref: r, style: { ...t } })
  );
}
function j() {
  return (j = e(() => {
    (l(),
      x(),
      r(),
      (A.displayName = `Layout Jump Preventer`),
      v(A, {
        direction: {
          type: w.Enum,
          defaultValue: `vertical`,
          options: [`vertical`, `horizontal`, `both`],
          optionTitles: [`Vertical`, `Horizontal`, `Both`],
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          optionIcons: [`direction-vertical`, `direction-horizontal`, `direction-all`],
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }))();
}
var M, N, P;
function F() {
  return (F = e(() => {
    (x(),
      h.loadFonts([`GF;Mona Sans-600`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-SemiBoldItalic`]),
      (M = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Mona Sans`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Mona Sans`,
              url: `../../assets/fonts/o-0mIpQmx24alC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAjBN9Y41P6zHtY.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/zSsEuoJdh8mcFVk976C05ZfQr8.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/6FI2EneKzM3qBy5foOZXey7coCA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/fuyXZpVvOjq8NesCOfgirHCWyg.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2`,
              weight: `600`,
            },
          ],
        },
      ]),
      (N = [
        `.framer-yzGBk .framer-styles-preset-1yngv0g:not(.rich-text-wrapper), .framer-yzGBk .framer-styles-preset-1yngv0g.rich-text-wrapper h6 { --framer-font-family: "Mona Sans", "Mona Sans Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, #151515); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-yzGBk .framer-styles-preset-1yngv0g:not(.rich-text-wrapper), .framer-yzGBk .framer-styles-preset-1yngv0g.rich-text-wrapper h6 { --framer-font-family: "Mona Sans", "Mona Sans Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, #151515); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-yzGBk .framer-styles-preset-1yngv0g:not(.rich-text-wrapper), .framer-yzGBk .framer-styles-preset-1yngv0g.rich-text-wrapper h6 { --framer-font-family: "Mona Sans", "Mona Sans Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, #151515); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (P = `framer-yzGBk`));
  }))();
}
function I(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (l(),
      x(),
      m(),
      r(),
      F(),
      k(),
      (L = b(g)),
      (R = [`S4L9JrDzp`, `SuiYGkd8O`, `YnqgTuJWV`, `OEbz5vlal`]),
      (z = `framer-T55TM`),
      (B = {
        OEbz5vlal: `framer-v-o4s7ih`,
        S4L9JrDzp: `framer-v-1stl52h`,
        SuiYGkd8O: `framer-v-l2ibr0`,
        YnqgTuJWV: `framer-v-a8b0pw`,
      }),
      (V = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (H = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (U = { damping: 40, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (W = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: U,
        x: 0,
        y: 20,
      }),
      (G = ({ value: e, children: t }) => {
        let r = a(p),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(p.Provider, { value: o, children: t });
      }),
      (K = d.create(t)),
      (q = {
        "Desktop - Close": `S4L9JrDzp`,
        "Desktop - Open": `SuiYGkd8O`,
        "Phone - Close": `YnqgTuJWV`,
        "Phone - Open": `OEbz5vlal`,
      }),
      (J = ({ answer: e, height: t, id: n, question: r, width: i, ...a }) => ({
        ...a,
        Cem09IVM0: r ?? a.Cem09IVM0 ?? `What are common manufacturing processes?`,
        NV3c2dGIv:
          e ??
          a.NV3c2dGIv ??
          `The most common manufacturing processes include CNC machining, injection molding, 3D printing (additive manufacturing), sheet metal fabrication, casting, and automated assembly.`,
        variant: q[a.variant] ?? a.variant ?? `S4L9JrDzp`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = ee(),
          { activeLocale: l, setLocale: u } = te();
        ne();
        let {
            style: p,
            className: m,
            layoutId: h,
            variant: v,
            Cem09IVM0: y,
            NV3c2dGIv: b,
            ...x
          } = J(e),
          {
            baseVariant: S,
            classNames: w,
            clearLoadingGesture: ie,
            gestureHandlers: T,
            gestureVariant: E,
            isLoading: D,
            setGestureState: k,
            setVariant: A,
            variants: j,
          } = _({
            cycleOrder: R,
            defaultVariant: `S4L9JrDzp`,
            ref: a,
            variant: v,
            variantClassNames: B,
          }),
          M = Y(e, j),
          { activeVariantCallback: N, delay: F } = re(S),
          q = N(async (...e) => {
            A(`SuiYGkd8O`);
          }),
          X = N(async (...e) => {
            A(`S4L9JrDzp`);
          }),
          Z = N(async (...e) => {
            A(`OEbz5vlal`);
          }),
          Q = N(async (...e) => {
            A(`YnqgTuJWV`);
          }),
          $ = C(z, P, O),
          ae = () => !![`SuiYGkd8O`, `OEbz5vlal`].includes(S);
        return /*#__PURE__*/ s(f, {
          id: h ?? c,
          children: /*#__PURE__*/ s(K, {
            animate: j,
            initial: !1,
            children: /*#__PURE__*/ s(G, {
              value: V,
              children: /*#__PURE__*/ o(d.div, {
                ...x,
                ...T,
                className: C($, `framer-1stl52h`, m, w),
                "data-framer-name": `Desktop - Close`,
                layoutDependency: M,
                layoutId: `S4L9JrDzp`,
                ref: a,
                style: {
                  backgroundColor: `var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, rgb(246, 246, 246))`,
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  ...p,
                },
                variants: {
                  OEbz5vlal: {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  },
                  YnqgTuJWV: {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  },
                },
                ...I(
                  {
                    OEbz5vlal: { "data-framer-name": `Phone - Open` },
                    SuiYGkd8O: { "data-framer-name": `Desktop - Open` },
                    YnqgTuJWV: { "data-framer-name": `Phone - Close` },
                  },
                  S,
                  E
                ),
                children: [
                  /*#__PURE__*/ o(d.div, {
                    className: `framer-1wv7ni5`,
                    "data-framer-name": `Question`,
                    "data-highlight": !0,
                    layoutDependency: M,
                    layoutId: `BJoEaTeLJ`,
                    onTap: q,
                    style: {
                      backgroundColor: `var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, rgb(246, 246, 246))`,
                    },
                    ...I(
                      { OEbz5vlal: { onTap: Q }, SuiYGkd8O: { onTap: X }, YnqgTuJWV: { onTap: Z } },
                      S,
                      E
                    ),
                    children: [
                      /*#__PURE__*/ s(g, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ s(t, {
                          children: /*#__PURE__*/ s(d.h2, {
                            className: `framer-styles-preset-1yngv0g`,
                            "data-styles-preset": `prOpMcG3Y`,
                            style: {
                              "--framer-text-color": `var(--extracted-1of0zx5, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                            },
                            children: `What are common manufacturing processes?`,
                          }),
                        }),
                        className: `framer-pehq9b`,
                        "data-framer-name": `Text`,
                        fonts: [`Inter`],
                        layoutDependency: M,
                        layoutId: `YctxggW9A`,
                        style: {
                          "--extracted-1of0zx5": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: y,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      /*#__PURE__*/ o(d.div, {
                        className: `framer-7im1a`,
                        "data-framer-name": `Icon`,
                        layoutDependency: M,
                        layoutId: `MSdLhT98r`,
                        style: {
                          background: `linear-gradient(45deg, var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11)) 0%, var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52)) 100%)`,
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                          rotate: 0,
                        },
                        variants: {
                          OEbz5vlal: { rotate: 45 },
                          SuiYGkd8O: { rotate: 135 },
                          YnqgTuJWV: { rotate: 0 },
                        },
                        children: [
                          /*#__PURE__*/ s(d.div, {
                            className: `framer-fuhmc5`,
                            "data-framer-name": `Divider`,
                            layoutDependency: M,
                            layoutId: `Wy4nIBXBV`,
                            style: {
                              backgroundColor: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                              borderBottomLeftRadius: 3,
                              borderBottomRightRadius: 3,
                              borderTopLeftRadius: 3,
                              borderTopRightRadius: 3,
                            },
                          }),
                          /*#__PURE__*/ s(d.div, {
                            className: `framer-1luqtfq`,
                            "data-framer-name": `Divider`,
                            layoutDependency: M,
                            layoutId: `No_vbOUSu`,
                            style: {
                              backgroundColor: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                              borderBottomLeftRadius: 3,
                              borderBottomRightRadius: 3,
                              borderTopLeftRadius: 3,
                              borderTopRightRadius: 3,
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  ae() &&
                    /*#__PURE__*/ s(d.div, {
                      className: `framer-1d3h0x8`,
                      "data-framer-name": `Answer`,
                      layoutDependency: M,
                      layoutId: `MJ0aFeWWo`,
                      style: {
                        backgroundColor: `var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, rgb(246, 246, 246))`,
                      },
                      variants: {
                        OEbz5vlal: {
                          backgroundColor: `var(--token-5ddb09af-0ede-409d-9c81-36b9e30e6d4b, rgba(154, 89, 153, 0))`,
                        },
                      },
                      children: /*#__PURE__*/ s(L, {
                        __framer__animate: { transition: U },
                        __framer__animateOnce: !0,
                        __framer__enter: H,
                        __framer__exit: W,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __fromCanvasComponent: !0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 0.8,
                        children: /*#__PURE__*/ s(t, {
                          children: /*#__PURE__*/ s(d.p, {
                            className: `framer-styles-preset-gf9yid`,
                            "data-styles-preset": `XorWCRDBg`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, rgb(25, 25, 25)))`,
                            },
                            children: `The most common manufacturing processes include CNC machining, injection molding, 3D printing (additive manufacturing), sheet metal fabrication, casting, and automated assembly.`,
                          }),
                        }),
                        className: `framer-15crbdr`,
                        "data-framer-name": `Text`,
                        fonts: [`Inter`],
                        layoutDependency: M,
                        layoutId: `dJiOqI0jO`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, rgb(25, 25, 25))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          opacity: 0.8,
                        },
                        text: b,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
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
        `.framer-T55TM.framer-b3xjhj, .framer-T55TM .framer-b3xjhj { display: block; }`,
        `.framer-T55TM.framer-1stl52h { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 800px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-T55TM .framer-1wv7ni5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 28px; position: relative; width: 100%; }`,
        `.framer-T55TM .framer-pehq9b { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-T55TM .framer-7im1a { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); overflow: visible; position: relative; width: 20px; }`,
        `.framer-T55TM .framer-fuhmc5 { flex: none; height: 2px; left: 4px; overflow: visible; position: absolute; right: 4px; top: calc(50.00000000000002% - 2px / 2); }`,
        `.framer-T55TM .framer-1luqtfq { flex: none; height: 10px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 10px / 2); width: 2px; }`,
        `.framer-T55TM .framer-1d3h0x8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 28px 28px 28px; position: relative; width: 100%; }`,
        `.framer-T55TM .framer-15crbdr { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; max-width: 800px; position: relative; width: 1px; }`,
        `.framer-T55TM.framer-v-l2ibr0 .framer-fuhmc5 { left: 5px; right: 5px; }`,
        `.framer-T55TM.framer-v-a8b0pw .framer-1wv7ni5, .framer-T55TM.framer-v-o4s7ih .framer-1wv7ni5 { padding: 16px; }`,
        `.framer-T55TM.framer-v-a8b0pw .framer-7im1a { height: var(--framer-aspect-ratio-supported, 20px); width: 18px; }`,
        `.framer-T55TM.framer-v-o4s7ih .framer-7im1a { height: var(--framer-aspect-ratio-supported, 22px); width: 18px; }`,
        `.framer-T55TM.framer-v-o4s7ih .framer-1d3h0x8 { padding: 0px 16px 16px 16px; }`,
        ...N,
        ...E,
      ]),
      (Q = ie(X, Z, `framer-T55TM`)),
      (Q.displayName = `Accordion`),
      (Q.defaultProps = { height: 78, width: 800 }),
      v(Q, {
        variant: {
          options: [`S4L9JrDzp`, `SuiYGkd8O`, `YnqgTuJWV`, `OEbz5vlal`],
          optionTitles: [`Desktop - Close`, `Desktop - Open`, `Phone - Close`, `Phone - Open`],
          title: `Variant`,
          type: w.Enum,
        },
        Cem09IVM0: {
          defaultValue: `What are common manufacturing processes?`,
          displayTextArea: !0,
          title: `Question`,
          type: w.String,
        },
        NV3c2dGIv: {
          defaultValue: `The most common manufacturing processes include CNC machining, injection molding, 3D printing (additive manufacturing), sheet metal fabrication, casting, and automated assembly.`,
          displayTextArea: !0,
          title: `Answer`,
          type: w.String,
        },
      }),
      y(
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
          ...T(M),
          ...T(D),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { M as a, j as c, N as i, $ as n, F as o, P as r, A as s, Q as t };
//# sourceMappingURL=iPKTltKJn.DbF7sXee.mjs.map
