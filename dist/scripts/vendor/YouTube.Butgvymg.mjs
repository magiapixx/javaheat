import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { I as t, T as n, _ as r, c as i, l as a, o, s } from "./react.DfujhmXs.mjs";
import { D as c, K as l, o as u } from "./framer.DGJFnpg_.mjs";
import {
  h as d,
  i as f,
  m as p,
  n as m,
  o as h,
  p as g,
  t as _,
} from "./OIjZRBmWDcIE2B6qgG1j.BAVd3HYt.mjs";
function v() {
  return (v = e(() => {
    _();
  }))();
}
function y({
  url: e,
  play: n,
  shouldMute: s,
  thumbnail: c,
  isRed: l,
  onClick: u,
  border: d,
  boxShadow: p,
  onMouseEnter: m,
  onMouseLeave: g,
  onMouseDown: _,
  onMouseUp: v,
  title: y,
  ...x
}) {
  let E = h(),
    D = n !== `Off`,
    O = E || (c !== `Off` && !D),
    [A, M] = t(() => !0, !1),
    [N, P] = t(() => !0, !O),
    [F, I] = r(!1),
    L = f(x),
    R = L !== `0px 0px 0px 0px` && L !== `0px`;
  if (e === ``) return /*#__PURE__*/ o(C, {});
  let z = b(e);
  if (z === void 0) return /*#__PURE__*/ o(w, { message: `Invalid Youtube URL.` });
  let [B, V, H] = z,
    U = V.searchParams;
  if (H) for (let [e, t] of H) (U.set(e, t), e === `t` && U.set(`start`, t));
  (U.set(`iv_load_policy`, `3`),
    U.set(`rel`, `0`),
    U.set(`modestbranding`, `1`),
    U.set(`playsinline`, `1`),
    N ? (D || (O && N)) && U.set(`autoplay`, `1`) : U.set(`autoplay`, `0`),
    D && s && U.set(`mute`, `1`),
    n === `Loop` && (U.set(`loop`, `1`), U.set(`playlist`, B)),
    l || U.set(`color`, `white`));
  let W = {
    title: y || `Youtube Video`,
    allow: `presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`,
    src: V.href,
    frameBorder: `0`,
    onClick: u,
    onMouseEnter: m,
    onMouseLeave: g,
    onMouseDown: _,
    onMouseUp: v,
  };
  return /*#__PURE__*/ a(`article`, {
    onPointerEnter: () => I(!0),
    onPointerLeave: () => I(!1),
    onPointerOver: M,
    onKeyDown: P,
    onClick: P,
    style: {
      ...k,
      borderRadius: L,
      boxShadow: p,
      transform: R && (N || E) ? `translateZ(0.000001px)` : `unset`,
      cursor: `pointer`,
      overflow: `hidden`,
    },
    role: `presentation`,
    children: [
      O &&
        /*#__PURE__*/ a(i, {
          children: [
            /*#__PURE__*/ o(`link`, { rel: `preconnect`, href: `https://i.ytimg.com` }),
            /*#__PURE__*/ o(`img`, {
              decoding: `async`,
              src: S(B, c),
              style: { ...j, objectFit: `cover` },
            }),
          ],
        }),
      A &&
        /*#__PURE__*/ a(i, {
          children: [
            /*#__PURE__*/ o(`link`, { rel: `dns-prefetch`, href: `https://i.ytimg.com` }),
            /*#__PURE__*/ o(`link`, { rel: `preconnect`, href: `https://www.youtube.com` }),
            /*#__PURE__*/ o(`link`, { rel: `dns-prefetch`, href: `https://www.google.com` }),
          ],
        }),
      E
        ? null
        : /*#__PURE__*/ o(`iframe`, {
            loading: N ? void 0 : `lazy`,
            style: N ? j : { ...j, display: `none` },
            ...W,
          }),
      d &&
        /*#__PURE__*/ o(`div`, {
          style: {
            position: `absolute`,
            inset: 0,
            pointerEvents: `none`,
            boxSizing: `border-box`,
            borderRadius: L,
            ...d,
          },
        }),
      N ? null : /*#__PURE__*/ o(T, { onClick: P, isHovered: F, isRed: l }),
    ],
  });
}
function b(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return [e, x(e), null];
  }
  let n = t.searchParams;
  if (
    t.hostname === `youtube.com` ||
    t.hostname === `www.youtube.com` ||
    t.hostname === `youtube-nocookie.com` ||
    t.hostname === `www.youtube-nocookie.com`
  ) {
    let e = t.pathname.slice(1).split(`/`),
      r = e[0];
    if (r === `watch`) {
      let e = t.searchParams.get(`v`);
      return [e, x(e), n];
    }
    if (r === `embed`) return [e[1], t, n];
    if (r === `shorts` || r === `live`) {
      let t = e[1];
      return [t, x(t), n];
    }
  }
  if (t.hostname === `youtu.be`) {
    let e = t.pathname.slice(1);
    return [e, x(e), n];
  }
}
function x(e) {
  return new URL(`https://www.youtube.com/embed/${e}`);
}
function S(e, t) {
  let n = `https://i.ytimg.com/vi_webp/`,
    r = `webp`;
  switch (t) {
    case `Low Quality`:
      return `${n}${e}/hqdefault.${r}`;
    case `Medium Quality`:
      return `${n}${e}/sddefault.${r}`;
    case `High Quality`:
      return `${n}${e}/maxresdefault.${r}`;
    default:
      return `${n}${e}/0.${r}`;
  }
}
function C() {
  return /*#__PURE__*/ o(`div`, {
    style: { ...d, overflow: `hidden` },
    children: /*#__PURE__*/ o(`div`, {
      style: A,
      children: `To embed a Youtube video, add the URL to the properties\xA0panel.`,
    }),
  });
}
function w({ message: e }) {
  return /*#__PURE__*/ o(`div`, {
    className: `framerInternalUI-errorPlaceholder`,
    style: { ...g, overflow: `hidden` },
    children: /*#__PURE__*/ a(`div`, { style: A, children: [`Error: `, e] }),
  });
}
function T({ onClick: e, isHovered: t, isRed: n }) {
  return /*#__PURE__*/ o(`button`, {
    onClick: e,
    "aria-label": `Play`,
    style: O,
    children: /*#__PURE__*/ a(`svg`, {
      height: `100%`,
      version: `1.1`,
      viewBox: `0 0 68 48`,
      width: `100%`,
      children: [
        /*#__PURE__*/ o(`path`, {
          d: `M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z`,
          fill: t ? (n ? `#f00` : `#000`) : `#212121`,
          fillOpacity: t && n ? 1 : 0.8,
          style: {
            transition: `fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)`,
          },
        }),
        /*#__PURE__*/ o(`path`, { d: `M 45,24 27,14 27,34`, fill: `#fff` }),
      ],
    }),
  });
}
var E, D, O, k, A, j, M;
function N() {
  return (N = e(() => {
    (s(),
      n(),
      l(),
      v(),
      (function (e) {
        ((e.Normal = `Off`), (e.Auto = `On`), (e.Loop = `Loop`));
      })((E ||= {})),
      (function (e) {
        ((e.High = `High Quality`),
          (e.Medium = `Medium Quality`),
          (e.Low = `Low Quality`),
          (e.Off = `Off`));
      })((D ||= {})),
      (y.displayName = `YouTube`),
      c(y, {
        url: { type: u.String, title: `Video` },
        play: { type: u.Enum, title: `Autoplay`, options: Object.values(E) },
        shouldMute: {
          title: `Mute`,
          type: u.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hidden(e) {
            return e.play === `Off`;
          },
        },
        thumbnail: {
          title: `Thumbnail`,
          description: `Showing a thumbnail improves performance.`,
          type: u.Enum,
          options: Object.values(D),
          hidden(e) {
            return e.play !== `Off`;
          },
        },
        isRed: { title: `Color`, type: u.Boolean, enabledTitle: `Red`, disabledTitle: `White` },
        ...m,
        border: { type: u.Border, optional: !0 },
        boxShadow: { type: u.BoxShadow, optional: !0, title: `Shadows` },
        ...p,
      }),
      (y.defaultProps = {
        url: `https://youtu.be/8AHPXm9Y6mI`,
        play: `Off`,
        shouldMute: !0,
        thumbnail: `Medium Quality`,
        isRed: !0,
        boxShadow: null,
        border: null,
      }),
      (O = {
        position: `absolute`,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        width: 68,
        height: 48,
        padding: 0,
        border: `none`,
        background: `transparent`,
        cursor: `pointer`,
      }),
      (k = { position: `relative`, width: `100%`, height: `100%` }),
      (A = { textAlign: `center`, minWidth: 140 }),
      (j = { position: `absolute`, top: 0, left: 0, height: `100%`, width: `100%` }),
      (M = {
        exports: {
          Youtube: {
            type: `reactComponent`,
            name: `Youtube`,
            slots: [],
            annotations: {
              framerSupportedLayoutHeight: `fixed`,
              framerIntrinsicWidth: `560`,
              framerComponentPresetProps: `isRed, borderRadius, border, boxShadow`,
              framerIntrinsicHeight: `315`,
              framerContractVersion: `1`,
              framerSupportedLayoutWidth: `fixed`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
N();
export { y as Youtube, M as __FramerMetadata__ };
//# sourceMappingURL=YouTube.Butgvymg.mjs.map
