import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as n,
  S as r,
  T as i,
  _ as a,
  b as o,
  j as s,
  k as c,
  l,
  o as u,
  p as d,
  s as f,
  w as p,
  y as m,
} from "./react.DfujhmXs.mjs";
import { B as h, S as g, T as _, i as v, m as y, o as b, t as x } from "./motion.BoJ_50qN.mjs";
import {
  B as S,
  C,
  Ct as w,
  D as T,
  E,
  K as D,
  L as ee,
  Mt as O,
  St as k,
  V as A,
  _t as te,
  ct as j,
  f as M,
  i as N,
  j as ne,
  k as P,
  o as F,
  pt as I,
  st as L,
  w as R,
  wt as z,
  z as B,
} from "./framer.DGJFnpg_.mjs";
import { c as V, l as re, s as H, u as U } from "./toplevel-deps.XDVeXK4X.mjs";
import {
  d as ie,
  f as ae,
  i as oe,
  l as se,
  m as W,
  n as G,
  o as ce,
  s as le,
  t as K,
} from "./OIjZRBmWDcIE2B6qgG1j.BAVd3HYt.mjs";
function ue() {
  return typeof document > `u` || !!document.querySelector(pe);
}
function q(e) {
  let { styleOptions: t, hoverOptions: n, iconOptions: r, trackingId: i, onClick: a } = e,
    {
      backgroundColor: o,
      color: s,
      borderRadius: c,
      padding: d,
      paddingPerSide: f,
      paddingTop: p,
      paddingRight: m,
      paddingBottom: h,
      paddingLeft: g,
      gap: v,
    } = t,
    y = k(),
    b = ue(),
    x;
  b && (e.srcType === `URL` && (x = e.srcURL), e.srcType === `Upload` && (x = e.srcFile));
  let S = f ? `${p}px ${m}px ${h}px ${g}px` : `${d}px`,
    C = () => {
      if (!r) return;
      let e = { order: r.alignment === `start` ? 0 : 2, flexShrink: 0 };
      return r.type === `Custom` && r.image?.src
        ? /*#__PURE__*/ u(`img`, {
            style: e,
            alt: r.image?.alt && r.image.alt.length > 0 ? r.image.alt : `download icon`,
            src: r.image.src,
            width: r.size,
            height: r.size,
          })
        : /*#__PURE__*/ u(`svg`, {
            style: e,
            xmlns: `http://www.w3.org/2000/svg`,
            width: r.size,
            height: r.size,
            fill: r.color,
            viewBox: `0 0 256 256`,
            children: /*#__PURE__*/ u(`path`, {
              d: `M228 152v56a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-56a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0Zm-108.49 8.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0-17-17L140 123V40a12 12 0 0 0-24 0v83l-19.51-19.49a12 12 0 0 0-17 17Z`,
            }),
          });
    },
    w = () =>
      (e.srcType === `URL` && e.srcURL) || (e.srcType === `Upload` && e.srcFile)
        ? `pointer`
        : `auto`,
    T = b ? `Download File` : `Publish to Download`,
    E = (e) => {
      (i && y(i), a?.(e));
    };
  return /*#__PURE__*/ l(_.a, {
    target: `_blank`,
    href: x,
    download: e.downloadName ?? `file.txt`,
    title: T,
    style: {
      gap: v,
      fontSize: 16,
      lineHeight: 1,
      fontFamily: `Inter`,
      fontWeight: 500,
      width: `max-content`,
      ...e.style,
      ...me,
      ...e.fontControl,
      padding: S,
      color: s,
      backgroundColor: o,
      borderRadius: c,
      userSelect: `none`,
      placeContent: he(e.fontControl),
      whiteSpace: `nowrap`,
      cursor: w(),
    },
    whileHover: n,
    transition: n?.transition,
    onClick: E,
    children: [C(), e.text],
  });
}
var de, fe, pe, me, he;
function ge() {
  return (ge = e(() => {
    (f(),
      D(),
      x(),
      (function (e) {
        ((e.Default = `Default`), (e.Custom = `Custom`));
      })((de ||= {})),
      (function (e) {
        ((e.Upload = `Upload`), (e.URL = `URL`));
      })((fe ||= {})),
      (pe = `meta[name="framer-search-index"]`),
      (q.displayName = `Download`),
      T(q, {
        text: { title: `Text`, type: F.String, defaultValue: `Download` },
        srcType: {
          type: F.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`Upload`, `URL`],
        },
        srcURL: {
          type: F.String,
          title: ` `,
          placeholder: `../example.pdf`,
          hidden: (e) => e.srcType === `Upload`,
        },
        srcFile: {
          type: F.File,
          title: ` `,
          allowedFileTypes: [`*`],
          hidden: (e) => e.srcType === `URL`,
        },
        fontControl: { type: F.Font, title: `Font`, controls: `extended` },
        trackingId: { title: `Tracking`, type: F.TrackingId, placeholder: `ID` },
        iconOptions: {
          type: F.Object,
          optional: !0,
          title: `Icon`,
          buttonTitle: `Size, Color`,
          controls: {
            type: {
              title: `Type`,
              type: F.Enum,
              options: Object.values(de),
              optionTitles: Object.values(de),
              displaySegmentedControl: !0,
            },
            color: {
              title: `Color`,
              type: F.Color,
              defaultValue: `#FFF`,
              hidden: (e) => e.type === `Custom`,
            },
            image: {
              title: `File`,
              type: F.ResponsiveImage,
              allowedFileTypes: [`jpg`, `png`, `svg`],
              hidden: (e) => e.type === `Default`,
            },
            size: { type: F.Number, displayStepper: !0, min: 5, defaultValue: 16, max: 250 },
            alignment: {
              title: `Align`,
              type: F.Enum,
              displaySegmentedControl: !0,
              options: [`start`, `end`],
              optionTitles: [`Start`, `End`],
            },
          },
        },
        styleOptions: {
          type: F.Object,
          title: `Styles`,
          buttonTitle: `Button, Font`,
          controls: {
            backgroundColor: { type: F.Color, title: `Fill`, defaultValue: `#111` },
            color: { type: F.Color, defaultValue: `#FFF` },
            borderRadius: { type: F.Number, title: `Radius`, displayStepper: !0, defaultValue: 50 },
            padding: {
              title: `Padding`,
              type: F.FusedNumber,
              toggleKey: `paddingPerSide`,
              toggleTitles: [`Padding`, `Padding per side`],
              defaultValue: 10,
              valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
              valueLabels: [`T`, `R`, `B`, `L`],
              min: 0,
            },
            gap: { title: `Gap`, type: F.Number, displayStepper: !0, defaultValue: 5 },
          },
        },
        hoverOptions: {
          type: F.Object,
          title: `Hover`,
          buttonTitle: `Effect`,
          optional: !0,
          controls: {
            scale: {
              type: F.Number,
              title: `Scale`,
              min: 0,
              max: 10,
              displayStepper: !0,
              step: 0.01,
              defaultValue: 1.1,
            },
            backgroundColor: { type: F.Color, title: `Fill`, defaultValue: `#333`, optional: !0 },
            color: { type: F.Color, title: `Color`, defaultValue: `#FFF`, optional: !0 },
            transition: {
              type: F.Transition,
              title: `Transition`,
              defaultValue: { type: `spring`, stiffness: 400, damping: 30 },
            },
          },
        },
      }),
      (me = {
        display: `flex`,
        placeItems: `center`,
        placeContent: `center`,
        textDecoration: `none`,
      }),
      (he = (e) =>
        e?.textAlign
          ? e.textAlign === `left`
            ? `flex-start`
            : e.textAlign === `right`
              ? `flex-end`
              : `center`
          : `left`));
  }))();
}
function _e(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ve, ye, be, xe, J, Se, Ce, we, Te, Ee, De, Oe, Y;
function ke() {
  return (ke = e(() => {
    (f(),
      D(),
      x(),
      i(),
      U(),
      (ve = [
        `Yh1RI_Dm8`,
        `VJjIj4IuP`,
        `S7N1QrU7l`,
        `GqNC55u34`,
        `pBXYULulL`,
        `BIRbV3LAU`,
        `x7NfOy7ak`,
        `XDTRZ1Gi6`,
        `BgIREeWdx`,
      ]),
      (ye = `framer-Nw1V5`),
      (be = {
        BgIREeWdx: `framer-v-9ffo1m`,
        BIRbV3LAU: `framer-v-o6ynb6`,
        GqNC55u34: `framer-v-1qokb2l`,
        pBXYULulL: `framer-v-sh41jj`,
        S7N1QrU7l: `framer-v-10nwf54`,
        VJjIj4IuP: `framer-v-15dwdrk`,
        x7NfOy7ak: `framer-v-cch8rs`,
        XDTRZ1Gi6: `framer-v-1nxaqra`,
        Yh1RI_Dm8: `framer-v-1qs6in3`,
      }),
      (xe = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (J = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Se = ({ value: e, children: t }) => {
        let r = s(b),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ u(b.Provider, { value: a, children: t });
      }),
      (Ce = _.create(t)),
      (we = {
        "Count - Phone": `x7NfOy7ak`,
        "Default - Phone": `BIRbV3LAU`,
        "Orange - Phone": `BgIREeWdx`,
        "Round - Phone": `XDTRZ1Gi6`,
        Count: `VJjIj4IuP`,
        Default: `Yh1RI_Dm8`,
        Orange: `pBXYULulL`,
        Round: `GqNC55u34`,
        White: `S7N1QrU7l`,
      }),
      (Te = ({ amount: e, avatar: t, click: n, height: r, id: i, width: a, ...o }) => ({
        ...o,
        aEbvs76M6: t ??
          o.aEbvs76M6 ?? {
            alt: `Avatar`,
            pixelHeight: 121,
            pixelWidth: 120,
            src: `../../assets/images/4joakeBMa5GHrq9uyQPg0bnmko.png`,
          },
        gqcGLt8l2: n ?? o.gqcGLt8l2,
        N1uOc8q4J: e ?? o.N1uOc8q4J ?? `10+`,
        variant: we[o.variant] ?? o.variant ?? `Yh1RI_Dm8`,
      })),
      (Ee = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (De = /*#__PURE__*/ d(function (e, n) {
        let r = o(null),
          i = n ?? r,
          a = p(),
          { activeLocale: s, setLocale: c } = te(),
          d = j(),
          {
            style: f,
            className: m,
            layoutId: h,
            variant: g,
            aEbvs76M6: y,
            N1uOc8q4J: b,
            gqcGLt8l2: x,
            ...T
          } = Te(e),
          {
            baseVariant: E,
            classNames: D,
            clearLoadingGesture: ee,
            gestureHandlers: O,
            gestureVariant: k,
            isLoading: A,
            setGestureState: N,
            setVariant: ne,
            variants: F,
          } = w({
            cycleOrder: ve,
            defaultVariant: `Yh1RI_Dm8`,
            ref: i,
            variant: g,
            variantClassNames: be,
          }),
          I = Ee(e, F),
          { activeVariantCallback: R, delay: z } = L(E),
          B = R(async (...e) => {
            if ((N({ isPressed: !1 }), x && (await x(...e)) === !1)) return !1;
          }),
          V = P(ye, H),
          re = () => ![`VJjIj4IuP`, `x7NfOy7ak`].includes(E),
          U = () => !![`VJjIj4IuP`, `x7NfOy7ak`].includes(E);
        return /*#__PURE__*/ u(v, {
          id: h ?? a,
          children: /*#__PURE__*/ u(Ce, {
            animate: F,
            initial: !1,
            children: /*#__PURE__*/ u(Se, {
              value: xe,
              children: /*#__PURE__*/ l(_.div, {
                ...T,
                ...O,
                className: P(V, `framer-1qs6in3`, m, D),
                "data-framer-name": `Default`,
                "data-highlight": !0,
                layoutDependency: I,
                layoutId: `Yh1RI_Dm8`,
                onTap: B,
                ref: i,
                style: {
                  "--border-bottom-width": `0px`,
                  "--border-color": `rgba(0, 0, 0, 0)`,
                  "--border-left-width": `0px`,
                  "--border-right-width": `0px`,
                  "--border-style": `solid`,
                  "--border-top-width": `0px`,
                  backgroundColor: `rgba(0, 0, 0, 0)`,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  ...f,
                },
                variants: {
                  BgIREeWdx: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  },
                  BIRbV3LAU: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  },
                  GqNC55u34: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  },
                  pBXYULulL: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  },
                  S7N1QrU7l: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  },
                  VJjIj4IuP: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  },
                  x7NfOy7ak: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  },
                  XDTRZ1Gi6: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  },
                },
                ..._e(
                  {
                    BgIREeWdx: { "data-framer-name": `Orange - Phone` },
                    BIRbV3LAU: { "data-framer-name": `Default - Phone` },
                    GqNC55u34: { "data-framer-name": `Round` },
                    pBXYULulL: { "data-framer-name": `Orange` },
                    S7N1QrU7l: { "data-framer-name": `White` },
                    VJjIj4IuP: { "data-border": !0, "data-framer-name": `Count` },
                    x7NfOy7ak: { "data-border": !0, "data-framer-name": `Count - Phone` },
                    XDTRZ1Gi6: { "data-framer-name": `Round - Phone` },
                  },
                  E,
                  k
                ),
                children: [
                  re() &&
                    /*#__PURE__*/ u(M, {
                      background: {
                        alt: `Avatar`,
                        fit: `fill`,
                        loading: S((d?.y || 0) + 0 + 0),
                        pixelHeight: 121,
                        pixelWidth: 120,
                        sizes: `50px`,
                        ...J(y),
                      },
                      className: `framer-125v9x4`,
                      "data-border": !0,
                      layoutDependency: I,
                      layoutId: `ifQxnxSjd`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                      },
                      variants: {
                        BgIREeWdx: {
                          "--border-bottom-width": `2px`,
                          "--border-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                          "--border-left-width": `2px`,
                          "--border-right-width": `2px`,
                          "--border-top-width": `2px`,
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                        GqNC55u34: {
                          "--border-bottom-width": `2px`,
                          "--border-left-width": `2px`,
                          "--border-right-width": `2px`,
                          "--border-top-width": `2px`,
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                        pBXYULulL: {
                          "--border-bottom-width": `2px`,
                          "--border-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                          "--border-left-width": `2px`,
                          "--border-right-width": `2px`,
                          "--border-top-width": `2px`,
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                        S7N1QrU7l: {
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                        XDTRZ1Gi6: {
                          "--border-bottom-width": `2px`,
                          "--border-left-width": `2px`,
                          "--border-right-width": `2px`,
                          "--border-top-width": `2px`,
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                      },
                      ..._e(
                        {
                          BgIREeWdx: {
                            background: {
                              alt: `Avatar`,
                              fit: `fill`,
                              loading: S((d?.y || 0) + 0 + 0),
                              pixelHeight: 121,
                              pixelWidth: 120,
                              sizes: d?.width || `100vw`,
                              ...J(y),
                            },
                            fitImageDimension: `height`,
                          },
                          BIRbV3LAU: {
                            background: {
                              alt: `Avatar`,
                              fit: `fill`,
                              loading: S((d?.y || 0) + 0 + 0),
                              pixelHeight: 121,
                              pixelWidth: 120,
                              sizes: `40px`,
                              ...J(y),
                            },
                          },
                          GqNC55u34: {
                            background: {
                              alt: `Avatar`,
                              fit: `fill`,
                              loading: S((d?.y || 0) + 0 + 0),
                              pixelHeight: 121,
                              pixelWidth: 120,
                              sizes: d?.width || `100vw`,
                              ...J(y),
                            },
                            fitImageDimension: `height`,
                          },
                          pBXYULulL: {
                            background: {
                              alt: `Avatar`,
                              fit: `fill`,
                              loading: S((d?.y || 0) + 0 + 0),
                              pixelHeight: 121,
                              pixelWidth: 120,
                              sizes: d?.width || `100vw`,
                              ...J(y),
                            },
                            fitImageDimension: `height`,
                          },
                          S7N1QrU7l: {
                            background: {
                              alt: `Avatar`,
                              fit: `fill`,
                              loading: S((d?.y || 0) + 0 + 0),
                              pixelHeight: 121,
                              pixelWidth: 120,
                              sizes: `60px`,
                              ...J(y),
                            },
                          },
                          XDTRZ1Gi6: {
                            background: {
                              alt: `Avatar`,
                              fit: `fill`,
                              loading: S((d?.y || 0) + 0 + 0),
                              pixelHeight: 121,
                              pixelWidth: 120,
                              sizes: d?.width || `100vw`,
                              ...J(y),
                            },
                            fitImageDimension: `height`,
                          },
                        },
                        E,
                        k
                      ),
                    }),
                  U() &&
                    /*#__PURE__*/ u(C, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ u(t, {
                        children: /*#__PURE__*/ u(_.p, {
                          className: `framer-styles-preset-gf9yid`,
                          "data-styles-preset": `XorWCRDBg`,
                          style: {
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                          },
                          children: `10+`,
                        }),
                      }),
                      className: `framer-ygqt3l`,
                      "data-framer-name": `Counter`,
                      fonts: [`Inter`],
                      layoutDependency: I,
                      layoutId: `Kwge4tCva`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ..._e({ VJjIj4IuP: { text: b } }, E, k),
                    }),
                ],
              }),
            }),
          }),
        });
      })),
      (Oe = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Nw1V5.framer-iro9ki, .framer-Nw1V5 .framer-iro9ki { display: block; }`,
        `.framer-Nw1V5.framer-1qs6in3 { align-content: flex-start; align-items: flex-start; cursor: default; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: 50px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 30px; }`,
        `.framer-Nw1V5 .framer-125v9x4 { flex: none; height: 50px; overflow: visible; position: relative; width: 50px; }`,
        `.framer-Nw1V5 .framer-ygqt3l { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Nw1V5.framer-v-15dwdrk.framer-1qs6in3 { justify-content: center; padding: 6px; width: 50px; }`,
        `.framer-Nw1V5.framer-v-15dwdrk .framer-ygqt3l { order: 0; }`,
        `.framer-Nw1V5.framer-v-10nwf54.framer-1qs6in3 { height: 60px; }`,
        `.framer-Nw1V5.framer-v-10nwf54 .framer-125v9x4 { height: 60px; width: 60px; }`,
        `.framer-Nw1V5.framer-v-1qokb2l.framer-1qs6in3, .framer-Nw1V5.framer-v-sh41jj.framer-1qs6in3 { cursor: pointer; height: 70px; width: 70px; }`,
        `.framer-Nw1V5.framer-v-1qokb2l .framer-125v9x4, .framer-Nw1V5.framer-v-sh41jj .framer-125v9x4, .framer-Nw1V5.framer-v-1nxaqra .framer-125v9x4, .framer-Nw1V5.framer-v-9ffo1m .framer-125v9x4 { height: auto; width: 100%; }`,
        `.framer-Nw1V5.framer-v-o6ynb6.framer-1qs6in3 { height: 40px; width: 28px; }`,
        `.framer-Nw1V5.framer-v-o6ynb6 .framer-125v9x4 { height: 40px; width: 40px; }`,
        `.framer-Nw1V5.framer-v-cch8rs.framer-1qs6in3 { align-content: center; align-items: center; height: 40px; justify-content: center; padding: 6px; width: 40px; }`,
        `.framer-Nw1V5.framer-v-cch8rs .framer-ygqt3l { order: 0; white-space: pre; width: auto; }`,
        `.framer-Nw1V5.framer-v-1nxaqra.framer-1qs6in3, .framer-Nw1V5.framer-v-9ffo1m.framer-1qs6in3 { cursor: pointer; width: 50px; }`,
        ...V,
        `.framer-Nw1V5[data-border="true"]::after, .framer-Nw1V5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Y = z(De, Oe, `framer-Nw1V5`)),
      (Y.displayName = `Avatar`),
      (Y.defaultProps = { height: 50, width: 30 }),
      T(Y, {
        variant: {
          options: [
            `Yh1RI_Dm8`,
            `VJjIj4IuP`,
            `S7N1QrU7l`,
            `GqNC55u34`,
            `pBXYULulL`,
            `BIRbV3LAU`,
            `x7NfOy7ak`,
            `XDTRZ1Gi6`,
            `BgIREeWdx`,
          ],
          optionTitles: [
            `Default`,
            `Count`,
            `White`,
            `Round`,
            `Orange`,
            `Default - Phone`,
            `Count - Phone`,
            `Round - Phone`,
            `Orange - Phone`,
          ],
          title: `Variant`,
          type: F.Enum,
        },
        aEbvs76M6: {
          __defaultAssetReference: `data:framer/asset-reference,4joakeBMa5GHrq9uyQPg0bnmko.png?originalFilename=Avatar+Image+%282%29.png&width=120&height=121`,
          __vekterDefault: {
            alt: `Avatar`,
            assetReference: `data:framer/asset-reference,4joakeBMa5GHrq9uyQPg0bnmko.png?originalFilename=Avatar+Image+%282%29.png&width=120&height=121`,
          },
          title: `Avatar`,
          type: F.ResponsiveImage,
        },
        N1uOc8q4J: { defaultValue: `10+`, displayTextArea: !1, title: `Amount`, type: F.String },
        gqcGLt8l2: { title: `Click`, type: F.EventHandler },
      }),
      E(
        Y,
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
          ...B(re),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Ae(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function X(e) {
  let t = Ae(e);
  return /*#__PURE__*/ u(Re, { ...t });
}
function je(e) {
  let t = I(),
    n = o(!1),
    r = o(!1),
    i = c((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: c(() => {
      let i = e.current;
      i &&
        ((i.preload = `auto`),
        !(
          i.currentTime > 0 &&
          i.onplaying &&
          !i.paused &&
          !i.ended &&
          i.readyState >= i.HAVE_CURRENT_DATA
        ) &&
          i &&
          !n.current &&
          t &&
          ((n.current = !0),
          (r.current = !0),
          i
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: c(() => {
      e.current && !n.current && (e.current.pause(), (r.current = !1));
    }, []),
    setProgress: i,
    isPlaying: r,
  };
}
function Me({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [o] = a(e),
    [s, c] = a(!1);
  e !== o && !s && c(!0);
  let l = o && t && n && r && !i && !s,
    u;
  return ((u = l ? `on-viewport` : o ? `on-mount` : `no-autoplay`), u);
}
function Ne(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Pe(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(Ne).join(` `);
}
var Fe, Ie, Le, Re, ze;
function Be() {
  return (Be = e(() => {
    (f(),
      D(),
      x(),
      K(),
      i(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((Fe ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((Ie ||= {})),
      (Le = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (Re = /*#__PURE__*/ r(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: r,
            srcFile: i = ``,
            posterEnabled: a = !1,
            controls: s = !1,
            playing: c = !0,
            loop: l = !0,
            muted: d = !0,
            playsinline: f = !0,
            restartOnEnter: p = !1,
            objectFit: _ = `cover`,
            backgroundColor: v = `rgba(0,0,0,0)`,
            radius: y = 0,
            volume: b = 25,
            startTime: x = 0,
            poster: S,
            playing: C,
            progress: w,
            onSeeked: T,
            onPause: E,
            onPlay: D,
            onEnd: ee,
            onClick: k,
            onMouseEnter: A,
            onMouseLeave: te,
            onMouseDown: j,
            onMouseUp: M,
          } = e,
          N = o(),
          ne = se(),
          P = o(null),
          F = o(null),
          I = ce(),
          L = le(),
          R = I || L === O.export,
          z = oe(e),
          B = R
            ? `no-autoplay`
            : Me({ playingProp: C, muted: d, loop: l, playsinline: f, controls: s }),
          V = R ? !0 : h(N),
          re = !R && h(N, { margin: `10%`, once: !0 }),
          H = x === 100 ? 99.9 : x,
          { play: U, pause: W, setProgress: G, isPlaying: K } = je(N);
        (m(() => {
          R || (B !== `on-viewport` && (C ? U() : W()));
        }, [B, C]),
          m(() => {
            R || (V && C && B !== `no-autoplay` && U(), B === `on-viewport` && W());
          }, [B, V, C]),
          m(() => {
            !I || S || a || H || !N.current || (N.current.currentTime = 0.01);
          }, [a, S, H]));
        let ue = o(!1);
        (m(() => {
          if (!ue.current) {
            ue.current = !0;
            return;
          }
          let e = g(w) ? w.get() : (w ?? 0) * 0.01;
          G((e ?? 0) || (H ?? 0) / 100);
        }, [H, i, r, w]),
          m(() => {
            if (g(w)) return w.on(`change`, (e) => G(e));
          }, [w]),
          ie(() => {
            P.current !== null && N.current && ((!F && l) || !P.current) && U();
          }),
          ae(() => {
            N.current && ((F.current = N.current.ended), (P.current = N.current.paused), W());
          }));
        let q = n(() => {
          if (t === `URL`) return r + ``;
          if (t === `Upload`) return i + ``;
        }, [t, i, r, H]);
        return (
          m(() => {
            ne && N.current && B === `on-mount` && setTimeout(() => U(), 50);
          }, []),
          m(() => {
            N.current && !d && (N.current.volume = (b ?? 0) / 100);
          }, [b]),
          /*#__PURE__*/ u(`video`, {
            onClick: k,
            onMouseEnter: A,
            onMouseLeave: te,
            onMouseDown: j,
            onMouseUp: M,
            src: q,
            loop: l,
            ref: N,
            onSeeked: (e) => T?.(e),
            onPause: (e) => E?.(e),
            onPlay: (e) => D?.(e),
            onEnded: (e) => ee?.(e),
            autoPlay: K.current || B === `on-mount` || (C && B === `on-viewport` && V),
            preload: K.current
              ? `auto`
              : R && !S
                ? `metadata`
                : B !== `on-mount` && !re
                  ? `none`
                  : `metadata`,
            poster:
              a && !i && r === Le
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : a && S
                  ? S
                  : void 0,
            onLoadedData: () => {
              let e = N.current;
              e &&
                (e.currentTime < 0.3 && H > 0 && G((H ?? 0) * 0.01),
                (K.current || B === `on-mount` || (C && B === `on-viewport` && V)) && U());
            },
            controls: s,
            muted: R ? !0 : d,
            playsInline: f,
            style: {
              cursor: k ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: z,
              display: `block`,
              objectFit: _,
              backgroundColor: v,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (X.displayName = `Video`),
      (ze = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      T(X, {
        srcType: {
          type: F.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: F.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: F.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          description: `Only MP4 and WebM`,
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: F.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...G,
        posterEnabled: {
          type: F.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: F.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: F.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: F.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: F.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: F.Enum, title: `Fit`, options: ze, optionTitles: ze.map(Pe) },
        controls: {
          type: F.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: F.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: F.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: F.EventHandler },
        onSeeked: { type: F.EventHandler },
        onPause: { type: F.EventHandler },
        onPlay: { type: F.EventHandler },
        ...W,
      }));
  }))();
}
function Ve(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Z;
function Ze() {
  return (Ze = e(() => {
    (f(),
      D(),
      x(),
      i(),
      (He = [`kNzSOtz2F`, `oxGuJ0uUV`, `qT8kmOqDi`, `EXbqmRB7V`]),
      (Ue = `framer-qV2QB`),
      (We = {
        EXbqmRB7V: `framer-v-7owl7r`,
        kNzSOtz2F: `framer-v-xlsox6`,
        oxGuJ0uUV: `framer-v-1s04v63`,
        qT8kmOqDi: `framer-v-65lw61`,
      }),
      (Ge = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ke = ({ value: e, children: t }) => {
        let r = s(b),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ u(b.Provider, { value: a, children: t });
      }),
      (qe = _.create(t)),
      (Je = {
        "Pause 01 - Desktop": `kNzSOtz2F`,
        "Pause 01 - Phone": `qT8kmOqDi`,
        "Play 01 - Desktop": `oxGuJ0uUV`,
        "Play 01 - Phone": `EXbqmRB7V`,
      }),
      (Ye = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        I3H7pr6Iv: e ?? i.I3H7pr6Iv,
        variant: Je[i.variant] ?? i.variant ?? `kNzSOtz2F`,
      })),
      (Xe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = z(
        /* @__PURE__ */ d(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: s } = te(),
            c = j(),
            { style: l, className: d, layoutId: f, variant: m, I3H7pr6Iv: h, ...g } = Ye(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: ee,
              variants: O,
            } = w({
              cycleOrder: He,
              defaultVariant: `kNzSOtz2F`,
              ref: r,
              variant: m,
              variantClassNames: We,
            }),
            k = Xe(e, O),
            { activeVariantCallback: A, delay: N } = L(y),
            ne = A(async (...e) => {
              if ((D({ isPressed: !1 }), h && (await h(...e)) === !1)) return !1;
            }),
            F = P(Ue);
          return /*#__PURE__*/ u(v, {
            id: f ?? i,
            children: /*#__PURE__*/ u(qe, {
              animate: O,
              initial: !1,
              children: /*#__PURE__*/ u(Ke, {
                value: Ge,
                children: /*#__PURE__*/ u(_.div, {
                  ...g,
                  ...C,
                  className: P(F, `framer-xlsox6`, d, b),
                  "data-framer-name": `Pause 01 - Desktop`,
                  "data-highlight": !0,
                  layoutDependency: k,
                  layoutId: `kNzSOtz2F`,
                  onTap: ne,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...l,
                  },
                  ...Ve(
                    {
                      EXbqmRB7V: { "data-framer-name": `Play 01 - Phone` },
                      oxGuJ0uUV: { "data-framer-name": `Play 01 - Desktop` },
                      qT8kmOqDi: { "data-framer-name": `Pause 01 - Phone` },
                    },
                    y,
                    T
                  ),
                  children: /*#__PURE__*/ u(M, {
                    background: {
                      alt: `Icon`,
                      fit: `fit`,
                      loading: S((c?.y || 0) + (0 + ((c?.height || 50) - 0 - 18) / 2)),
                      pixelHeight: 14,
                      pixelWidth: 12,
                      positionX: `center`,
                      positionY: `center`,
                      sizes: `18px`,
                      src: `../../assets/images/WNXX0paABnsscMVEOjqE0OWdU.svg`,
                    },
                    className: `framer-8k0dlm`,
                    layoutDependency: k,
                    layoutId: `vJtTd4ccr`,
                    ...Ve(
                      {
                        EXbqmRB7V: {
                          background: {
                            alt: `Icon`,
                            fit: `fit`,
                            loading: S((c?.y || 0) + (0 + ((c?.height || 34) - 0 - 16) / 2)),
                            pixelHeight: 13,
                            pixelWidth: 13,
                            positionX: `center`,
                            positionY: `center`,
                            sizes: `16px`,
                            src: `https://framerusercontent.com/images/ajSBh1UloNjLBRwjtkGxupPjo.svg?width=13&height=13`,
                          },
                        },
                        oxGuJ0uUV: {
                          background: {
                            alt: `Icon`,
                            fit: `fit`,
                            loading: S((c?.y || 0) + (0 + ((c?.height || 50) - 0 - 18) / 2)),
                            pixelHeight: 13,
                            pixelWidth: 13,
                            positionX: `center`,
                            positionY: `center`,
                            sizes: `18px`,
                            src: `https://framerusercontent.com/images/ajSBh1UloNjLBRwjtkGxupPjo.svg?width=13&height=13`,
                          },
                        },
                        qT8kmOqDi: {
                          background: {
                            alt: `Icon`,
                            fit: `fit`,
                            loading: S((c?.y || 0) + (0 + ((c?.height || 34) - 0 - 16) / 2)),
                            pixelHeight: 14,
                            pixelWidth: 12,
                            positionX: `center`,
                            positionY: `center`,
                            sizes: `16px`,
                            src: `../../assets/images/WNXX0paABnsscMVEOjqE0OWdU.svg`,
                          },
                        },
                      },
                      y,
                      T
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-qV2QB.framer-1b0mgi, .framer-qV2QB .framer-1b0mgi { display: block; }`,
          `.framer-qV2QB.framer-xlsox6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 50px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 50px; }`,
          `.framer-qV2QB .framer-8k0dlm { flex: none; height: 18px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 18px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-qV2QB.framer-v-65lw61.framer-xlsox6, .framer-qV2QB.framer-v-7owl7r.framer-xlsox6 { height: 34px; width: 34px; }`,
          `.framer-qV2QB.framer-v-65lw61 .framer-8k0dlm, .framer-qV2QB.framer-v-7owl7r .framer-8k0dlm { height: 16px; width: 16px; }`,
        ],
        `framer-qV2QB`
      )),
      (Z.displayName = `Video Button`),
      (Z.defaultProps = { height: 50, width: 50 }),
      T(Z, {
        variant: {
          options: [`kNzSOtz2F`, `oxGuJ0uUV`, `qT8kmOqDi`, `EXbqmRB7V`],
          optionTitles: [
            `Pause 01 - Desktop`,
            `Play 01 - Desktop`,
            `Pause 01 - Phone`,
            `Play 01 - Phone`,
          ],
          title: `Variant`,
          type: F.Enum,
        },
        I3H7pr6Iv: { title: `Click`, type: F.EventHandler },
      }),
      E(Z, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }))();
}
function Qe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var $e, et, tt, nt, rt, it, at, ot, Q, st, ct, lt, ut, dt, $;
function ft() {
  return (ft = e(() => {
    (f(),
      D(),
      x(),
      i(),
      Be(),
      Ze(),
      ($e = ee(X)),
      (et = ee(Z)),
      (tt = A(X)),
      (nt = [`GWgO0_eD_`, `S9i4G6HRo`, `b_Xr33rnP`, `M0rNm5stZ`]),
      (rt = `framer-qBywq`),
      (it = {
        b_Xr33rnP: `framer-v-q471pj`,
        GWgO0_eD_: `framer-v-ddv32g`,
        M0rNm5stZ: `framer-v-94png4`,
        S9i4G6HRo: `framer-v-1yc1ej9`,
      }),
      (at = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ot = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (st = ({ value: e, children: t }) => {
        let r = s(b),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ u(b.Provider, { value: a, children: t });
      }),
      (ct = {
        "Pause - Desktop": `GWgO0_eD_`,
        "Pause - Phone": `b_Xr33rnP`,
        "Play - Desktop": `S9i4G6HRo`,
        "Play - Phone": `M0rNm5stZ`,
      }),
      (lt = _.create(t)),
      (ut = ({ height: e, id: t, videoFile: n, videoPoster: r, width: i, ...a }) => ({
        ...a,
        gdyota7So: r ??
          a.gdyota7So ?? {
            pixelHeight: 720,
            pixelWidth: 1280,
            src: `../../assets/images/EvkKKiT34zFcqnJwjmciV1oT2CU.jpg`,
            srcSet: `https://framerusercontent.com/images/EvkKKiT34zFcqnJwjmciV1oT2CU.jpg?scale-down-to=512&width=1280&height=720 512w,https://framerusercontent.com/images/EvkKKiT34zFcqnJwjmciV1oT2CU.jpg?scale-down-to=1024&width=1280&height=720 1024w,../../assets/images/EvkKKiT34zFcqnJwjmciV1oT2CU.jpg 1280w`,
          },
        NLj7J7yRX: n ?? a.NLj7J7yRX ?? `../../assets/misc/42XXSmPqon106f0ey08EQkGSyoU.mp4`,
        variant: ct[a.variant] ?? a.variant ?? `GWgO0_eD_`,
      })),
      (dt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = z(
        /* @__PURE__ */ d(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: s } = te(),
            c = j(),
            {
              style: d,
              className: f,
              layoutId: m,
              variant: h,
              NLj7J7yRX: g,
              gdyota7So: y,
              ...b
            } = ut(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: ee,
              setVariant: O,
              variants: k,
            } = w({
              cycleOrder: nt,
              defaultVariant: `GWgO0_eD_`,
              ref: r,
              variant: h,
              variantClassNames: it,
            }),
            A = dt(e, k),
            { activeVariantCallback: M, delay: ne } = L(x),
            F = M(async (...e) => {
              O(`S9i4G6HRo`);
            }),
            I = M(async (...e) => {
              O(`GWgO0_eD_`);
            }),
            z = M(async (...e) => {
              O(`M0rNm5stZ`);
            }),
            B = M(async (...e) => {
              O(`b_Xr33rnP`);
            }),
            V = P(rt);
          return /*#__PURE__*/ u(v, {
            id: m ?? i,
            children: /*#__PURE__*/ u(lt, {
              animate: k,
              initial: !1,
              children: /*#__PURE__*/ u(st, {
                value: at,
                children: /*#__PURE__*/ l(_.section, {
                  ...b,
                  ...T,
                  className: P(V, `framer-ddv32g`, f, S),
                  "data-framer-name": `Pause - Desktop`,
                  layoutDependency: A,
                  layoutId: `GWgO0_eD_`,
                  ref: r,
                  style: { ...d },
                  ...Qe(
                    {
                      b_Xr33rnP: { "data-framer-name": `Pause - Phone` },
                      M0rNm5stZ: { "data-framer-name": `Play - Phone` },
                      S9i4G6HRo: { "data-framer-name": `Play - Desktop` },
                    },
                    x,
                    E
                  ),
                  children: [
                    /*#__PURE__*/ u(_.div, {
                      className: `framer-ijogfq`,
                      "data-framer-name": `Overlay`,
                      layoutDependency: A,
                      layoutId: `sSqa5uiBj`,
                      style: {
                        backgroundColor: `var(--token-5193ac17-06d0-41c0-8684-9ecb585b5e26, rgba(21, 21, 21, 0.6))`,
                      },
                    }),
                    /*#__PURE__*/ u(N, {
                      children: /*#__PURE__*/ u(R, {
                        className: `framer-1ie69c9-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: A,
                        layoutId: `t8xvEqlxV-container`,
                        nodeId: `t8xvEqlxV`,
                        rendersWithMotion: !0,
                        scopeId: `h_v5TeMmo`,
                        children: /*#__PURE__*/ u(X, {
                          backgroundColor: `var(--token-2fa075ef-1418-469d-a2f0-db5136e88649, rgba(21, 21, 21, 0.1))`,
                          borderRadius: 0,
                          bottomLeftRadius: 0,
                          bottomRightRadius: 0,
                          controls: !1,
                          height: `100%`,
                          id: `t8xvEqlxV`,
                          isMixedBorderRadius: !1,
                          layoutId: `t8xvEqlxV`,
                          loop: !0,
                          muted: !0,
                          objectFit: `cover`,
                          playing: !0,
                          poster: ot(y),
                          posterEnabled: !0,
                          srcFile: g,
                          srcType: `Upload`,
                          srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                          startTime: 0,
                          style: { height: `100%`, width: `100%` },
                          topLeftRadius: 0,
                          topRightRadius: 0,
                          volume: 25,
                          width: `100%`,
                          ...Qe({ M0rNm5stZ: { playing: !1 }, S9i4G6HRo: { playing: !1 } }, x, E),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ u(N, {
                      height: 50,
                      width: `50px`,
                      y: (c?.y || 0) + (c?.height || 650) - 80,
                      ...Qe(
                        {
                          b_Xr33rnP: { y: (c?.y || 0) + (c?.height || 600) - 66 },
                          M0rNm5stZ: { y: (c?.y || 0) + (c?.height || 600) - 66 },
                        },
                        x,
                        E
                      ),
                      children: /*#__PURE__*/ u(R, {
                        className: `framer-72we4o-container`,
                        layoutDependency: A,
                        layoutId: `hZIZ6Ev9g-container`,
                        nodeId: `hZIZ6Ev9g`,
                        rendersWithMotion: !0,
                        scopeId: `h_v5TeMmo`,
                        children: /*#__PURE__*/ u(Z, {
                          height: `100%`,
                          I3H7pr6Iv: F,
                          id: `hZIZ6Ev9g`,
                          layoutId: `hZIZ6Ev9g`,
                          style: { height: `100%`, width: `100%` },
                          variant: Q(`kNzSOtz2F`),
                          width: `100%`,
                          ...Qe(
                            {
                              b_Xr33rnP: { I3H7pr6Iv: z, variant: Q(`qT8kmOqDi`) },
                              M0rNm5stZ: { I3H7pr6Iv: B, variant: Q(`EXbqmRB7V`) },
                              S9i4G6HRo: { I3H7pr6Iv: I, variant: Q(`oxGuJ0uUV`) },
                            },
                            x,
                            E
                          ),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ u(_.div, {
                      className: `framer-1ypnxcp`,
                      "data-framer-name": `BG Shadow`,
                      layoutDependency: A,
                      layoutId: `HAlfDZ61g`,
                      style: {
                        background: `linear-gradient(180deg, var(--token-c9461aee-312e-42d9-817a-d2c51b00fe24, rgba(200, 55, 11, 0)) 0%, var(--token-f77bd4e9-b817-4bf0-a253-dffefe6609e4, rgb(158, 50, 17)) 100%)`,
                        filter: `blur(5px)`,
                        WebkitFilter: `blur(5px)`,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-qBywq.framer-ct5vc5, .framer-qBywq .framer-ct5vc5 { display: block; }`,
          `.framer-qBywq.framer-ddv32g { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 650px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-qBywq .framer-ijogfq { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 2; }`,
          `.framer-qBywq .framer-1ie69c9-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-qBywq .framer-72we4o-container { bottom: 30px; flex: none; height: 50px; position: absolute; right: 30px; width: 50px; z-index: 2; }`,
          `.framer-qBywq .framer-1ypnxcp { -webkit-user-select: none; bottom: 0px; flex: none; height: 415px; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; user-select: none; }`,
          `.framer-qBywq.framer-v-q471pj.framer-ddv32g, .framer-qBywq.framer-v-94png4.framer-ddv32g { height: 600px; width: 390px; }`,
          `.framer-qBywq.framer-v-q471pj .framer-72we4o-container, .framer-qBywq.framer-v-94png4 .framer-72we4o-container { bottom: 16px; right: 16px; }`,
        ],
        `framer-qBywq`
      )),
      ($.displayName = `BG Video`),
      ($.defaultProps = { height: 650, width: 1200 }),
      T($, {
        variant: {
          options: [`GWgO0_eD_`, `S9i4G6HRo`, `b_Xr33rnP`, `M0rNm5stZ`],
          optionTitles: [`Pause - Desktop`, `Play - Desktop`, `Pause - Phone`, `Play - Phone`],
          title: `Variant`,
          type: F.Enum,
        },
        NLj7J7yRX: tt?.srcFile && {
          ...tt.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,42XXSmPqon106f0ey08EQkGSyoU.mp4?originalFilename=hero+video.mp4`,
          description: void 0,
          hidden: void 0,
          title: `Video File`,
        },
        onNLj7J7yRXChange: { changes: `NLj7J7yRX`, type: F.ChangeHandler },
        gdyota7So: {
          __defaultAssetReference: `data:framer/asset-reference,EvkKKiT34zFcqnJwjmciV1oT2CU.jpg?originalFilename=hero+video-poster.jpg&width=1280&height=720`,
          title: `Video Poster`,
          type: F.ResponsiveImage,
        },
      }),
      E($, [{ explicitInter: !0, fonts: [] }, ...$e, ...et], { supportsExplicitInterCodegen: !0 }),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([ne(Z, {}, t)])) }));
  }))();
}
function pt(e) {
  let t = o(null),
    n = h(t, { once: !e.animation.replay, amount: `some` }),
    [r, i] = a(``),
    { start: s, end: c, decimals: u, commas: d, rounding: f, fontColor: p, animation: g } = e,
    [v, b] = a(null),
    x = O.current() === O.canvas;
  function S(e) {
    let t = e.toFixed(u);
    return (d && (t = t.replace(/\B(?=(\d{3})+(?!\d))/g, `,`)), t);
  }
  function C() {
    x ||
      (v && v.stop(),
      b(
        y(s, c, {
          ...g.transition,
          onUpdate: (e) => {
            i(S(e));
          },
        })
      ));
  }
  return (
    m(() => {
      (g.trigger == `appear` && C(), i(S(s)));
    }, []),
    m(() => {
      n && g.trigger == `layerInView` && C();
    }, [n]),
    m(() => {
      g.trigger == `layerInView` && (n ? C() : (v && v.stop(), i(S(s))));
    }, [n]),
    /*#__PURE__*/ l(_.p, {
      ref: t,
      style: {
        userSelect: e.textSelect ? `auto` : `none`,
        fontVariantNumeric: `${e.monospace ? `tabular-nums ` : ``}${e.slashedZeros ? `slashed-zero` : ``}`,
        margin: 0,
        ...(p.mode == `solid`
          ? { color: p.color }
          : {
              WebkitBackgroundClip: `text`,
              WebkitTextFillColor: `transparent`,
              backgroundImage: `linear-gradient(${p.angle}deg, ${p.startColor}, ${p.endColor})`,
            }),
        ...e.font,
        ...e.style,
      },
      children: [e.prefix, x ? S(c) : r, e.suffix],
    })
  );
}
function mt() {
  return (mt = e(() => {
    (f(),
      D(),
      x(),
      i(),
      (pt.displayName = `Animated Number Counter`),
      T(pt, {
        start: { type: F.Number, defaultValue: 0 },
        end: { type: F.Number, defaultValue: 100 },
        decimals: { type: F.Number, defaultValue: 0, min: 0, max: 3, step: 1 },
        commas: { type: F.Boolean, defaultValue: !0 },
        fontColor: {
          type: F.Object,
          controls: {
            mode: {
              type: F.Enum,
              defaultValue: `solid`,
              options: [`solid`, `gradient`],
              optionTitles: [`Solid`, `Gradient`],
              displaySegmentedControl: !0,
            },
            color: { type: F.Color, defaultValue: `#000`, hidden: (e) => e.mode != `solid` },
            startColor: {
              type: F.Color,
              defaultValue: `#000`,
              hidden: (e) => e.mode != `gradient`,
            },
            endColor: { type: F.Color, defaultValue: `#FFF`, hidden: (e) => e.mode != `gradient` },
            angle: {
              type: F.Number,
              defaultValue: 180,
              min: -360,
              max: 360,
              unit: `°`,
              hidden: (e) => e.mode != `gradient`,
            },
          },
        },
        font: {
          type: `font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: { fontSize: 16, lineHeight: 1 },
        },
        animation: {
          type: F.Object,
          icon: `effect`,
          controls: {
            trigger: {
              type: F.Enum,
              defaultValue: `layerInView`,
              options: [`appear`, `layerInView`],
              optionTitles: [`Appear`, `Layer in View`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            replay: {
              type: F.Boolean,
              defaultValue: !0,
              hidden(e) {
                return e.trigger !== `layerInView`;
              },
            },
            transition: { type: F.Transition },
          },
        },
        prefix: { type: F.String },
        suffix: { type: F.String },
        textSelect: { type: F.Boolean, defaultValue: !0 },
        display: {
          type: F.Object,
          buttonTitle: `Options`,
          controls: {
            monospace: {
              type: F.Boolean,
              defaultValue: !1,
              description: `Monospaced number characters.`,
            },
            slashedZeros: {
              type: F.Boolean,
              defaultValue: !1,
              description: `Adds a diagonal slash through zeros if your font supports it.`,
            },
          },
        },
      }));
  }))();
}
export { Y as a, ge as c, ft as i, mt as n, ke as o, $ as r, q as s, pt as t };
//# sourceMappingURL=NumberAnimator.Bo2em_sU.mjs.map
