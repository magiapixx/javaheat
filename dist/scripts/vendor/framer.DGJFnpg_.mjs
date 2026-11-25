import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  B as t,
  C as n,
  D as r,
  E as i,
  F as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  T as p,
  _ as m,
  a as h,
  b as g,
  c as _,
  d as v,
  f as y,
  h as b,
  i as x,
  j as S,
  k as C,
  l as w,
  m as T,
  o as E,
  p as D,
  s as O,
  u as k,
  v as A,
  w as j,
  x as M,
  y as N,
  z as P,
} from "./react.DfujhmXs.mjs";
import {
  $ as F,
  A as I,
  B as ee,
  C as te,
  D as ne,
  E as L,
  F as re,
  G as ie,
  H as ae,
  I as oe,
  J as se,
  K as ce,
  L as le,
  M as ue,
  N as de,
  O as fe,
  P as pe,
  Q as R,
  R as me,
  S as he,
  T as z,
  U as ge,
  V as _e,
  W as B,
  X as ve,
  Y as ye,
  Z as be,
  _ as xe,
  a as Se,
  b as Ce,
  c as we,
  d as Te,
  et as Ee,
  f as De,
  g as Oe,
  h as ke,
  i as Ae,
  j as je,
  k as Me,
  l as Ne,
  m as Pe,
  n as Fe,
  o as Ie,
  p as Le,
  q as Re,
  r as ze,
  s as Be,
  u as Ve,
  v as He,
  x as Ue,
  y as We,
  z as Ge,
} from "./motion.BoJ_50qN.mjs";
function Ke(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function qe(e) {
  return typeof e == `function`;
}
function Je(e) {
  return typeof e == `boolean`;
}
function V(e) {
  return typeof e == `string`;
}
function Ye(e) {
  return Number.isFinite(e);
}
function Xe(e) {
  return Array.isArray(e);
}
function H(e) {
  return typeof e == `object` && !!e && !Xe(e);
}
function Ze(e) {
  for (let t in e) return !1;
  return !0;
}
function Qe(e) {
  return e === void 0;
}
function $e(e) {
  return e === null;
}
function et(e) {
  return e == null;
}
function tt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function nt(e) {
  return H(e) && qe(e.return);
}
function rt(e) {
  return H(e) && qe(e.then);
}
function it(e) {
  return e instanceof Promise;
}
function at(e) {
  return `url('${Ke(e)}')`;
}
function ot(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${e ? `${e}\n` : ``}In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${n ? `:\n${n}` : `.`}`;
}
function U(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function st(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function ct() {
  return kt.location.origin === `https://screenshot.framer.invalid`;
}
function lt(e, t, n = jt) {
  if (e && !n.has(e) && typeof document < `u`) {
    if ((n.add(e), !t)) {
      if (!Mt) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Mt = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = Mt;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function ut(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? K.variable(e) : e === `` ? `""` : e;
}
function dt(e) {
  return e !== Ht && e !== Ut;
}
function ft(e) {
  for (let t in e) if (dt(t) && e?.[t] === !0) return !0;
  return !1;
}
function pt(e, t, n, r, i) {
  let a = M.useRef(null),
    o = M.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = M.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !ft(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = M.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        ft(n) ? o(e) : r?.(e);
      },
      [o, r, t]
    );
  return M.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function mt(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return ht(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return gt(r);
    case `lower-roman`:
    case `upper-roman`:
      return vt(r);
    default:
      return ht(r);
  }
}
function ht(e) {
  return String(e).length;
}
function gt(e) {
  let t = 1;
  for (; _t(t) < e;) t++;
  return t;
}
function _t(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function vt(e) {
  let t = 0;
  for (let n of qt) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function yt(e, t) {
  return K.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function bt(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
var xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  W,
  jt,
  Mt,
  Nt,
  G,
  Pt,
  Ft,
  It,
  Lt,
  K,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn;
function cn() {
  return (cn = e(() => {
    (d(),
      p(),
      (xt = () => {}),
      (St = t !== void 0),
      (Ct =
        St &&
        (P.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(P.userAgent))),
      (wt = St && typeof t.requestIdleCallback == `function`),
      (Tt = wt ? t.requestIdleCallback : setTimeout),
      (Et = () => xt),
      (Dt = () => !0),
      (Ot = () => !1),
      (kt = St
        ? t
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (At = { target: ct() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (W = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => At.target,
        hasRestrictions: () => {
          let e = At.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (jt = /* @__PURE__ */ new Set()),
      (Nt = /* @__PURE__ */ (function (e) {
        return (
          (e.Padding = `--framer-input-padding`),
          (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
          (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
          (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
          (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
          (e.CornerShape = `--framer-input-corner-shape`),
          (e.BorderColor = `--framer-input-border-color`),
          (e.BorderTopWidth = `--framer-input-border-top-width`),
          (e.BorderRightWidth = `--framer-input-border-right-width`),
          (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
          (e.BorderLeftWidth = `--framer-input-border-left-width`),
          (e.BorderStyle = `--framer-input-border-style`),
          (e.Background = `--framer-input-background`),
          (e.FontFamily = `--framer-input-font-family`),
          (e.FontWeight = `--framer-input-font-weight`),
          (e.FontSize = `--framer-input-font-size`),
          (e.FontColor = `--framer-input-font-color`),
          (e.FontStyle = `--framer-input-font-style`),
          (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
          (e.FontTextAlignment = `--framer-input-font-text-alignment`),
          (e.FontLineHeight = `--framer-input-font-line-height`),
          (e.FontOpenType = `--framer-input-font-open-type-features`),
          (e.FontVariationAxes = `--framer-input-font-variation-axes`),
          (e.PlaceholderColor = `--framer-input-placeholder-color`),
          (e.BoxShadow = `--framer-input-box-shadow`),
          (e.FocusedBorderColor = `--framer-input-focused-border-color`),
          (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
          (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
          (e.FocusedBackground = `--framer-input-focused-background`),
          (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
          (e.FocusedTransition = `--framer-input-focused-transition`),
          (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
          (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
          (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
          (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
          (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
          (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
          (e.InvalidTextColor = `--framer-input-invalid-text-color`),
          (e.IconBackgroundImage = `--framer-input-icon-image`),
          (e.IconMaskImage = `--framer-input-icon-mask-image`),
          (e.IconColor = `--framer-input-icon-color`),
          (e.IconContent = `--framer-input-icon-content`),
          (e.WrapperHeight = `--framer-input-wrapper-height`),
          e
        );
      })({})),
      (G = Nt),
      (Pt = `framer-form-input`),
      (Ft = `framer-form-input-wrapper`),
      (It = `framer-form-input-empty`),
      (Lt = `framer-form-input-forced-focus`),
      (K = /* @__PURE__ */ (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (U(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${ut(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            U(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (Rt = [
        K(`.${Pt}`, {
          padding: K.variable(G.Padding),
          background: `transparent`,
          fontFamily: K.variable(G.FontFamily),
          fontWeight: K.variable(G.FontWeight),
          fontSize: K.variable(G.FontSize),
          fontStyle: K.variable(G.FontStyle),
          color: K.variable(G.FontColor),
          fontFeatureSettings: K.variable(G.FontOpenType),
          fontVariationSettings: K.variable(G.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: K.variable(G.WrapperHeight, `100%`),
          letterSpacing: K.variable(G.FontLetterSpacing),
          textAlign: K.variable(G.FontTextAlignment),
          lineHeight: K.variable(G.FontLineHeight),
        }),
        K(`.${Pt}:focus-visible`, { outline: `none` }),
      ]),
      (zt = [K(`.${Ft}`, { overflow: `hidden` })]),
      (Bt = `var(${G.BorderTopWidth}) var(${G.BorderRightWidth}) var(${G.BorderBottomWidth}) var(${G.BorderLeftWidth})`),
      (Vt = [
        `.${Ft}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${G.BorderRadiusTopLeft});
        border-top-right-radius: var(${G.BorderRadiusTopRight});
        border-bottom-right-radius: var(${G.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${G.BorderRadiusBottomLeft});
        corner-shape: var(${G.CornerShape});
        border-color: var(${G.BorderColor});
        border-top-width: var(${G.BorderTopWidth});
        border-right-width: var(${G.BorderRightWidth});
        border-bottom-width: var(${G.BorderBottomWidth});
        border-left-width: var(${G.BorderLeftWidth});
        border-style: var(${G.BorderStyle});
        transition: var(${G.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (Ht = `customError`),
      (Ut = `valid`),
      (Wt = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `16px`,
        maskRepeat: `no-repeat`,
        maskSize: `16px`,
        backgroundColor: K.variable(G.IconColor),
      }),
      (Gt = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `16px`,
        boxSizing: `content-box`,
        padding: K.variable(G.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...Wt,
      }),
      (Kt = `--max-list-digits`),
      (qt = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (Jt = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Yt = { display: `inline-block` }),
      (Xt = `--framer-text-fill-shadow`),
      (Zt = `--framer-text-fill-text-shadow`),
      (Qt = { display: `block` }),
      ($t = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${Jt.display};
            flex-direction: ${Jt.flexDirection};
            justify-content: ${Jt.justifyContent};
            outline: none;
            flex-shrink: 0;
            /* Stops the variables of an outer text layer from reaching the gradient text fills of
               a text layer nested in it that doesn't set its own. */
            ${Xt}: initial;
            ${Zt}: initial;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${yt([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${yt([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${yt([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${Yt.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
            /* An inherited text-shadow would paint on top of the gradient, so layers with shadows
               set these variables to render them as a filter here. Without the variables the
               text-shadow declaration is invalid and keeps inheriting. */
            text-shadow: var(${Zt});
            filter: var(${Xt}, initial);
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${yt([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${yt([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${yt([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${yt([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${yt([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        /* Linked images keep the radius and padding of their image style. */
        a.framer-text:where(:not(.framer-image)):hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${yt([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${yt([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${yt([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${yt([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${yt([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${yt([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${yt([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${yt([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${yt([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${yt([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${yt([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${yt([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${yt([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${yt([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${Qt.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        /* A linked image gets its image style on both the link and the image; only the image draws the border and shadow. */
        a.framer-image.framer-text {
            border: none;
            box-shadow: none;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${Kt}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${bt(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (en = `--text-truncation-display-inline-for-safari-16`),
      (tn = `--text-truncation-display-none-for-safari-16`),
      (nn = `--text-truncation-line-break-for-safari-16`),
      (rn = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (an = `(background: -webkit-named-image(i))`),
      (on = `(contain-intrinsic-size: inherit)`),
      (sn = [
        `@supports ${an} and (not ${on}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${rn.join(`, `)} { display: var(${en}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${rn.map((e) => `${e}::after`).join(`, `)} { content: var(${nn}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${tn}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${en}, ${Yt.display}) }
    }`,
      ]));
  }))();
}
function ln(e, t, n) {
  if (gv.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (gv.set(e, t), t))
    .catch((t) => {
      throw (gv.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(xt), gv.set(e, r));
}
function un(e, t) {
  St && (_v.set(e, t), vv.has(e) && ln(e, t, `registered loader ${e}`));
}
function dn() {
  if (!St) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(yv),
      i = r ? e.slice(1) : e;
    if (!i) continue;
    vv.add(i);
    let a = _v.get(i);
    a
      ? ln(i, a, `registered loader ${i}`)
      : r &&
        ln(
          i,
          () =>
            import(
              /* @vite-ignore */
              n
            ),
          n
        );
  }
}
function fn(e) {
  return typeof e == `object` && !!e && !T(e) && xv in e;
}
function pn(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function mn(e, t = `default`, n) {
  n && un(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !gv.has(n)) return;
      let e = gv.get(n);
      it(e) ? s(() => e) : (i = pn(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = pn(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = D(function (t, r) {
      if (
        (N(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && bv !== void 0 && bv.add(n), !i)) throw s(e);
      return /* @__PURE__ */ E(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function hn(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function gn(e) {
  return e === null || !(Cv in e) ? !1 : typeof e.equals == `function`;
}
function _n(e, t) {
  return e === t || (e !== e && t !== t);
}
function vn(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!_n(e[r], t[r])) return !1;
  return !0;
}
function yn(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Tn(e[r], t[r], !0)) return !1;
  return !0;
}
function bn(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!_n(r, t.get(n))) return !1;
  return !0;
}
function xn(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Tn(r, t.get(n), !0)) return !1;
  return !0;
}
function Sn(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Cn(e, t) {
  let n = Sv(e);
  if (n.length !== Sv(t).length) return !1;
  for (let r of n)
    if (!hn(t, r) || (!(r === `_owner` && hn(e, `$$typeof`) && e.$$typeof) && !_n(e[r], t[r])))
      return !1;
  return !0;
}
function wn(e, t) {
  let n = Sv(e);
  if (n.length !== Sv(t).length) return !1;
  for (let r of n)
    if (!hn(t, r) || (!(r === `_owner` && hn(e, `$$typeof`) && e.$$typeof) && !Tn(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Tn(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? yn(e, t) : vn(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? xn(e, t) : bn(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return Sn(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? gn(e) && gn(t)
        ? e.equals(t)
        : n
          ? wn(e, t)
          : Cn(e, t)
      : !1;
}
function En(e, t, n = !0) {
  try {
    return Tn(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Dn(e) {
  return M.useCallback((t) => e[t], [e]);
}
function On({ api: e, children: t }) {
  return /* @__PURE__ */ E(wv.Provider, { value: e, children: t });
}
function kn() {
  return M.useContext(wv);
}
function An({ routes: e, children: t }) {
  let n = Dn(e),
    r = s(() => ({ getRoute: n }), [n]);
  return /* @__PURE__ */ E(wv.Provider, { value: r, children: t });
}
function jn() {
  let e = kn(),
    t = S(Tv),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = t?.routeId ? void 0 : e.currentCanonicalPathVariables,
    a = n ? e.getRoute?.(n) : void 0;
  return s(() => {
    if (n && a) return { ...a, id: n, pathVariables: r, canonicalPathVariables: i };
  }, [i, n, r, a]);
}
function Mn() {
  let e = jn();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Nn(e) {
  let t = jn(),
    n = M.useRef(t);
  !En(n.current, t) && t && ((n.current = t), e(t));
}
function Pn(e) {
  let t = kn();
  if (e) return t.getRoute?.(e);
}
function Fn(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function In(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Ln(e, t) {
  let n = jn(),
    r = Pn(t) ?? n;
  return M.useMemo(() => (r ? Fn(r, e) : e), [e, r]);
}
function Rn() {
  return jn()?.pathVariables;
}
function zn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > jv);
}
function Bn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Av);
}
function Vn(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function Hn(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function Un(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function Wn(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function Gn(e, t, n) {
  return Kn(JSON.parse(e), t, n);
}
function Kn(e, t, n) {
  let r = Wn(Lv, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === -1) return r.fromPrimitive(void 0);
    if (e === -3) return r.fromPrimitive(NaN);
    if (e === -4) return r.fromPrimitive(1 / 0);
    if (e === -5) return r.fromPrimitive(-1 / 0);
    if (e === -6) return r.fromPrimitive(-0);
    if (n || typeof e != `number`) throw Error(`Invalid input`);
    if (e in a) return a[e];
    if (e >= i.length) throw Error(`Invalid input`);
    let c = i[e];
    if (!c || typeof c != `object`) a[e] = r.fromPrimitive(c);
    else if (Array.isArray(c)) {
      if (typeof c[0] == `string`) {
        let n = c[0],
          l = t && Object.hasOwn(t, n) ? t[n] : void 0;
        if (l) {
          let t = c[1];
          if ((typeof t != `number` && (t = i.push(c[1]) - 1), Object.hasOwn(a, t)))
            return (a[e] = l(a[t]));
          if (((o ??= /* @__PURE__ */ new Set()), o.has(t)))
            throw Error(`Invalid circular reference`);
          return (o.add(t), (a[e] = l(s(t))), o.delete(t), a[e]);
        }
        switch (n) {
          case `Date`:
            a[e] = r.fromISOString(c[1]);
            break;
          case `Set`:
            let t = r.createSet();
            a[e] = t;
            for (let e = 1; e < c.length; e += 1) r.addValue(t, s(c[e]));
            break;
          case `Map`:
            let o = r.createMap();
            a[e] = o;
            for (let e = 1; e < c.length; e += 2) r.addEntry(o, s(c[e]), s(c[e + 1]));
            break;
          case `RegExp`:
            a[e] = r.fromRegExpInfo(c[1], c[2]);
            break;
          case `Object`: {
            let t = c[1];
            if (typeof i[t] == `object` && i[t][0] !== `BigInt`) throw Error(`Invalid input`);
            a[e] = r.box(s(t));
            break;
          }
          case `BigInt`:
            a[e] = r.fromPrimitive(BigInt(c[1]));
            break;
          case `null`:
            let l = r.createNullPrototypeObject();
            a[e] = l;
            for (let e = 1; e < c.length; e += 2) {
              let t = c[e];
              if (typeof t != `string`) throw Error(`Cannot parse an object with a non-string key`);
              if (t === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              r.set(l, t, s(c[e + 1]));
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (i[c[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = s(c[1]);
            a[e] = r.fromViewInfo(n, t, c[2], c[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = c[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            a[e] = r.fromArrayBuffer(Pv(t));
            break;
          }
          case `URL`:
          case `URLSearchParams`:
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`:
            a[e] = r.fromStringValue(n, c[1]);
            break;
          default:
            throw Error(`Unknown type ${n}`);
        }
      } else if (c[0] === -7) {
        let t = c[1];
        if (!Bn(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!zn(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== -2 && r.set(t, e, s(n));
        }
      }
    } else {
      let t = r.createObject();
      a[e] = t;
      for (let e of Object.keys(c)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        r.set(t, e, s(c[e]));
      }
    }
    return a[e];
  }
  return s(0);
}
function qn(e, t, n = `lazy`) {
  switch ((kt.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function Jn(e) {
  return V(e) && (e === `` || Rv.test(e));
}
function Yn() {
  return {
    [zv.QueryCache]: /* @__PURE__ */ new Map(),
    [zv.CollectionUtilsCache]: /* @__PURE__ */ new Map(),
  };
}
function Xn() {
  if (!St) return;
  if (Bv !== void 0) return Bv;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      Bv = Gn(e.text) ?? Yn();
    } catch (e) {
      ((Bv = Yn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      Tt(() => {
        (e?.remove(), (e = null));
      }),
      Bv
    );
  }
}
function Zn(e, t) {
  if (
    (console.warn(
      ot(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    qn(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function Qn(e, t) {
  let n = Xn();
  return n ? n[e].has(t) : !1;
}
function $n(e, t) {
  let n = Xn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function er(e) {
  return e?.id ?? `default`;
}
function tr(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function nr(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Wv.has(n)) return Wv.get(n);
    let r = new Kv(n, t);
    return (Wv.set(n, r), r);
  };
}
function rr({ children: e, collectionUtils: t }) {
  let n = s(() => ({ get: nr(t) }), [t]);
  return /* @__PURE__ */ E(Gv.Provider, { value: n, children: e });
}
function ir() {
  return S(Gv);
}
function ar(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function or() {
  return P === void 0 ? void 0 : P;
}
function sr() {
  let e = or();
  return e ? qv.test(e.platform) : !1;
}
function cr() {
  let e = or();
  return e
    ? Jv.test(e.platform)
      ? !0
      : Yv.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function lr() {
  return sr() || cr();
}
function ur() {
  let e = or();
  return e ? Xv.test(e.userAgent) : !1;
}
function dr() {
  let e = or();
  return e ? Zv.test(e.userAgent) && Qv.test(e.vendor) && !ur() : !1;
}
function fr() {
  let e = or();
  return e ? $v.test(e.userAgent) && ey.test(e.vendor) : !1;
}
function pr() {
  let e = or();
  return e ? ty.test(e.userAgent) : !1;
}
function mr() {
  return typeof document == `object`;
}
function hr() {
  let e = or();
  if (!e) return -1;
  let t = ny.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function gr() {
  let e = or();
  return e ? ry.test(e.userAgent) : !1;
}
function _r() {
  return !1;
}
function vr() {
  let e = or();
  return e && iy.test(e.userAgent) ? `tablet` : e && ay.test(e.userAgent) ? `phone` : `desktop`;
}
function yr() {
  return vr() === `desktop`;
}
function br(e) {
  return lr() ? e.metaKey : e.ctrlKey;
}
function xr() {}
async function Sr() {}
function Cr(e) {
  return typeof e == `function` ? e() : e;
}
function wr(e, t) {
  return ly[e] > ly[t];
}
function Tr() {
  if (typeof scheduler < `u`) return scheduler;
}
function Er(e, t) {
  let n = e?.priority,
    r = Tr();
  return n === `background`
    ? (t?.() ?? ar(1))
    : r?.yield
      ? r.yield(e).catch(xr)
      : r?.postTask
        ? r.postTask(xr, e).catch(xr)
        : t
          ? t()
          : n === `user-blocking`
            ? uy
            : ar(0);
}
function Dr(e, n, r) {
  let i = -1 / 0,
    a,
    o = /* @__PURE__ */ new Set();
  function s() {
    for (let e of o) e();
    o.clear();
  }
  function c() {
    return document.hidden ? (s(), !0) : !1;
  }
  function l() {
    mr() && (document.addEventListener(`visibilitychange`, c), t.addEventListener(`pagehide`, s));
  }
  function u(t) {
    return new Promise((r) => {
      (setTimeout(r, dy),
        e(() => {
          Er(t, n).then(r);
        }));
    });
  }
  function d(e) {
    return mr()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), o.delete(r), t());
            };
          (o.add(r), c() || l(), e.then(r, r));
        })
      : e;
  }
  function f(e, t) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (t ?? r === `paint`) ? u(a) : Er(a, n);
    return i ? d(o) : o;
  }
  function p(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let r = f(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (i = performance.now()),
          n && e.pendingPaintYieldCount--,
          a === e && e.pendingPaintYieldCount === 0 && (a = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      r.then(
        () => c(!0),
        () => c(!0)
      ),
      r
    );
  }
  function m(e, t) {
    let n = a;
    if (!n) {
      let r = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? oy : sy),
        s = mr() && document.hidden ? cy : o;
      if (r - i < s) return;
      ((n = { pendingPaintYieldCount: 0 }), (a = n));
    }
    let o = e.continueAfter === `paint` && (n.pendingPaintYieldCount > 0 || r?.() !== !1);
    return p(n, e, o);
  }
  function h(e) {
    let { batch: t, batchDuration: r, ...i } = e ?? {};
    return !mr() && !n ? (t ? void 0 : uy) : t ? m(i, r) : f(i);
  }
  return h;
}
function Or(e, n = !1) {
  let r = ``;
  if (t !== void 0) {
    if (n) r = t.location.search;
    else {
      let e = t.history?.state?.queryParamBackAnchorSearch;
      r = e === void 0 ? t.location.search : e === `` ? `` : `?${e}`;
    }
  }
  return r ? kr(r, e) : e;
}
function kr(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== my && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Ar(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(hy)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !V(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = it(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = it(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = it(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    t &&
      n &&
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function jr(e, t) {
  return t ? `/${t}${e}` : e;
}
async function Mr({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await Ar(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = jr(u.path, t.slug)),
    o && u.path && (u.path = Or(u.path, !0)),
    u
  );
}
async function Nr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(hy)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (V(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Pr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === "default") return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await Nr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function Fr({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await Pr({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await Mr({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return En(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function Ir() {
  return M.useContext(vy);
}
function Lr() {
  return Ir().activeLocale?.code ?? `en-US`;
}
function Rr() {
  return M.useContext(yy);
}
function zr() {
  let e = ir(),
    { getRoute: t } = kn(),
    { activeLocale: n, locales: r } = Ir();
  return C(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return Vr(
        s,
        {
          routeId: i,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: r,
          collectionUtils: e,
        },
        o
      );
    },
    [t, e, n, r]
  );
}
function Br(e, t = !0) {
  let n = zr();
  N(() => {
    if (t && by) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Vr(e, t, n = {}) {
  if (!by || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !fn(o)) return;
  let s = a && !!t;
  if (!o.getStatus().hasLoaded || s) {
    i && (await py({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await Hr(n, e, t, r));
    } catch {}
  }
}
async function Hr(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await Fr({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === Dv),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function Ur() {
  if (xy) return;
  xy = !0;
  let e = !1,
    n = () => {
      e = !0;
    };
  (t.addEventListener(`popstate`, n, { once: !0 }),
    queueMicrotask(() => {
      if ((t.removeEventListener(`popstate`, n), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), qn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function Wr({ children: e, value: t }) {
  return /* @__PURE__ */ E(Sy.Provider, { value: t, children: e });
}
function Gr() {
  return M.useContext(Sy);
}
function Kr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function qr(e) {
  let t = Cy,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < wy;) ((n = e.next(t)), r.push(n.value), (t += Cy));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Cy }
  );
}
function Jr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Yr(e) {
  let { innerWidth: n, innerHeight: r } = t,
    [i, a] = Jr(e.x),
    [o, s] = Jr(e.y);
  return { x: a === `px` ? i : (i / 100) * n, y: s === `px` ? o : (o / 100) * r };
}
function Xr(e) {
  let [t, n] = Jr(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function Zr(e) {
  let { x: n, y: r } = Yr(e);
  return Math.hypot(Math.max(n, t.innerWidth - n), Math.max(r, t.innerHeight - r));
}
function Qr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function $r(e) {
  return e ? Dy[e] : void 0;
}
function ei(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (ti(t)) {
    let { easing: e, duration: n } = qr(
      ue({ keyframes: [0, 1], ...ni(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = $r(n?.mask?.type),
    o = Qr(n, `start`, e, a),
    s = Qr({ ...Oy, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function ti(e) {
  return e.type === `spring`;
}
function ni(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function ri({ exit: e = Ay, enter: t }) {
  let n = document.createElement(`style`);
  n.id = ky;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += ei(`exit`, e)),
    (r += ei(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function ii() {
  Tt(() => {
    He.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(ky);
      e && document.head.removeChild(e);
    });
  });
}
function ai() {
  return !!document.startViewTransition;
}
function oi(e) {
  return new Promise((t) => {
    He.render(() => {
      (performance.mark(`framer-vt-style`), ri(e), t());
    });
  });
}
async function si(e, t, n) {
  if (!ai()) {
    e();
    return;
  }
  if ((await oi(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(jy),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), ii());
      })
      .catch(jy),
    r
  );
}
function ci() {
  let e = Gr(),
    t = g(void 0);
  return (
    N(() => {
      t.current &&= (t.current(), void 0);
    }),
    C(
      (n, r, i, a) => {
        let o = Kr(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return si(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function li(e, t) {
  Tt(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function ui(e, t) {
  Tt(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function di(e) {
  Tt(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = /* @__PURE__ */ new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = /* @__PURE__ */ new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
//! Credit to Astro | MIT License
function fi(e, t, n, i = r) {
  i(() => {
    let t = async (e) => (await py({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function pi(e) {
  let t = g(/* @__PURE__ */ new Set());
  return (
    fi(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    C(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function mi(e) {
  return H(e) && `routeId` in e;
}
function hi(e = t.history.state) {
  return mi(e) ? e : void 0;
}
function gi(e) {
  return e?.entryId;
}
function _i(e) {
  Py = e;
}
function vi() {
  return Py;
}
function yi() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function bi(e, t) {
  return xi(e, gi(e) ?? gi(t));
}
function xi(e, t = yi()) {
  return { ...e, entryId: t };
}
function Si(e, n) {
  (performance.mark(`framer-history-replace`), _i(bi(e, hi())), n && li(n, t.location.href));
  let r =
    !n || n === t.location.href
      ? t.History.prototype.replaceState.bind(t.history)
      : t.history.replaceState.bind(t.history);
  try {
    r(Py, ``, n);
  } catch {}
}
function Ci(e) {
  (performance.mark(`framer-history-replace`),
    _i(xi(e)),
    History.prototype.replaceState.call(t.history, Py, ``, void 0));
}
function wi(e) {
  let n = t.navigation?.transition;
  if (!n) {
    e();
    return;
  }
  let r = () => {
    let r = t.navigation.transition;
    r && r !== n ? wi(e) : e();
  };
  n.finished.then(r, r);
}
function Ti(e, n) {
  (performance.mark(`framer-history-push`), _i(xi(e)), li(n, t.location.href), Ur());
  try {
    t.history.pushState(Py, ``, n);
  } catch {}
}
function Ei({
  disabled: e,
  routeId: n,
  initialPathVariables: i,
  initialLocaleId: a,
  initialContentLocaleId: o,
  initialCanonicalPathVariables: s,
}) {
  r(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let r = t.location.hash ? t.location.hash.slice(1) : void 0;
    Si({
      ...hi(),
      routeId: n,
      hash: r,
      pathVariables: i,
      localeId: a,
      contentLocaleId: o,
      canonicalPathVariables: s,
    });
  }, []);
}
function Di(e, n, r) {
  let i = ci(),
    a = pi(`framer-route-change`),
    { onHistoryTraversal: o, usesCustomScrollRestoration: s } = e,
    c = s ? `manual` : `after-transition`,
    l = g(void 0),
    u = C(() => {
      (l.current?.resolve(), (l.current = void 0));
    }, []),
    d = C(
      async ({ state: e }) => {
        if (!mi(e)) return;
        let s = a({ popstate: !0 }),
          l = In();
        (s.promise.finally(l), gi(vi()) !== (gi(e) ?? gi(hi())) && o(), _i(e));
        let {
            routeId: d,
            hash: f,
            pathVariables: p,
            localeId: m,
            contentLocaleId: h,
            canonicalPathVariables: g,
          } = e,
          _ = V(f) ? f : t.location.hash ? t.location.hash.slice(1) : void 0,
          v = !1,
          y = () => {
            v ||=
              (r(
                d,
                V(m) ? m : void 0,
                _,
                t.location.pathname + t.location.search + t.location.hash,
                H(p) ? p : void 0,
                h,
                g,
                !0,
                s,
                !1
              ),
              !0);
          },
          b = c === `after-transition`;
        (await Promise.resolve(i(n.current, d, y))
          .then((e) => e?.updateCallbackDone)
          .catch(y)
          .finally(() => {
            b || u();
          }),
          await s.promise,
          b && u(),
          await t.navigation?.transition?.finished.catch(xt),
          Ny(),
          li(t.location.href));
      },
      [n, a, o, u, r, i, c]
    ),
    f = C(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        mi(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                l.current = { resolve: e, reject: t };
              }),
                (l.current = void 0));
            },
            scroll: c,
          });
      },
      [c]
    );
  N(
    () => (
      t.addEventListener(`popstate`, d),
      Fy && t.navigation.addEventListener(`navigate`, f),
      () => {
        (t.removeEventListener(`popstate`, d),
          Fy && t.navigation.removeEventListener(`navigate`, f));
      }
    ),
    [d, f]
  );
}
async function Oi(e) {
  return (
    (await fetch(e, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect` &&
    ((t.location.href = t.location.origin + e), !0)
  );
}
function ki() {
  let e = ir();
  return C((t) => Ai({ ...t, collectionUtils: e }), [e]);
}
async function Ai({ sitePrefix: e, ...t }) {
  let n = await Mr(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!V(n.path)) throw Error(`Expected result.path to be a string`);
      if (
        (n.isMissingInLocale ||
          (t.route.includedLocales && !t.route.includedLocales.includes(t.nextLocale.id))) &&
        (await Oi(e + n.path))
      )
        return;
    } catch {}
    return n;
  }
}
function ji(e, t) {
  let n = gi(hi());
  n &&
    wi(() => {
      let r = hi();
      if (!r || gi(r) !== n) return;
      let i = { ...r.paginationInfo, [e]: t };
      Si({ ...r, paginationInfo: i });
    });
}
function Mi(e) {
  let n = g(Promise.resolve()),
    r = g(),
    i = C(
      (t) => {
        if (t.navigationType === `traverse` || !t.canIntercept) return;
        let i = r.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          t.intercept({ handler: () => n.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return C(
    (e, a, o) => {
      Fy
        ? ((n.current = e),
          (r.current = a),
          t.navigation.addEventListener(`navigate`, i),
          o?.(),
          e.finally(() => {
            n.current === e &&
              ((r.current = void 0), t.navigation.removeEventListener(`navigate`, i));
          }))
        : o?.();
    },
    [i]
  );
}
function Ni(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function Pi(e) {
  return Ni(e.trim().toLowerCase().replace(Iy, `-`));
}
function Fi() {
  let e = kn(),
    t = S(Ly);
  return C(
    (n) => {
      if (e.pageviewEventData?.current) {
        if (!Jn(n)) throw Error(`Invalid tracking ID: ${n}`);
        e.pageviewEventData.current instanceof Promise
          ? e.pageviewEventData.current.then((e) => Ii(e, t, n))
          : Ii(e.pageviewEventData.current, t, n);
      }
    },
    [e, t]
  );
}
function Ii(e, t, n) {
  qn(`published_site_custom_event`, { ...e, nodeId: t, trackingId: n || null }, `eager`);
}
function Li({ children: e, value: t }) {
  return /* @__PURE__ */ E(Ry.Provider, { value: t, children: e });
}
function Ri() {
  return S(Ry);
}
function zi(e, t) {
  let n = m(() => ({ inputs: t, result: e() }))[0],
    r = g(!0),
    i = g(n),
    a =
      r.current || (t && i.current.inputs && En(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    N(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function Bi(e, t) {
  return zi(() => e, t);
}
function Vi() {
  return t.location.search;
}
function Hi() {
  return ``;
}
function Ui(e) {
  return (
    By.add(e),
    t.addEventListener(`popstate`, e),
    () => {
      (By.delete(e), t.removeEventListener(`popstate`, e));
    }
  );
}
function Wi() {
  for (let e of By) e();
}
function Gi({ children: e, routerRenderKey: n, currentRouteId: r, isNavigationCommitPending: i }) {
  let a = Ri() === `preview`,
    [o, s] = m({ routeId: r, search: `` });
  o.routeId !== r && s({ routeId: r, search: `` });
  let c = o.search,
    d = g(n);
  zy(() => {
    d.current = n;
  }, [n]);
  let f = l(Ui, Vi, Hi),
    p = A(f),
    h = n !== A(n),
    _ = a ? c : h ? f : p,
    v = C(
      async (e) => {
        if (a) {
          u(() => {
            s((t) =>
              t.routeId === r
                ? { routeId: r, search: e(new URLSearchParams(t.search)).toString() }
                : t
            );
          });
          return;
        }
        let o = i(),
          c = n;
        if ((await py({ continueAfter: `paint` }), o || i() || d.current !== c)) return;
        let l = hi();
        if (!l) return;
        let f = new URL(t.location.href),
          p = e(f.searchParams).toString();
        f.search = p;
        let m = l.queryParamBackAnchorSearch,
          h = t.location.search.slice(1),
          g = m === void 0 && p !== h,
          _ = m !== void 0 && p === m,
          v = { ...l, queryParamBackAnchorSearch: _ ? void 0 : (m ?? (g ? h : void 0)) },
          y = f.toString();
        (g || _ ? Ti(v, y) : Si(v, y), Wi());
      },
      [r, i, a, n]
    ),
    y = zi(() => ({ urlSearchParams: new URLSearchParams(_), replaceSearchParams: v }), [_, v]);
  return /* @__PURE__ */ E(Vy.Provider, { value: y, children: e });
}
function Ki(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = qi(e),
    [r, i] = qi(t),
    a = Ji(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function qi(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Ji(e, t) {
  if (e === t || ((e = `/` + Yi(e)), (t = `/` + Yi(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Wy(e, 1 + s);
    if (n !== Wy(t, 1 + s)) break;
    n === Uy && (o = s);
  }
  if (s === a) {
    if (i > a) {
      if (Wy(t, 1 + s) === Uy) return Ky(t, 1 + s + 1);
      if (s === 0) return Ky(t, 1 + s);
    } else r > a && (Wy(e, 1 + s) === Uy ? (o = s) : s === 0 && (o = 0));
  }
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Wy(e, s) === Uy) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Ky(t, 1 + o)}`;
}
function Yi(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Wy(e, o);
    else if (Jy(a)) break;
    else a = Uy;
    if (Jy(a)) {
      if (r !== o - 1 && i !== 1) {
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Wy(t, t.length - 1) !== Hy || Wy(t, t.length - 2) !== Hy) {
            if (t.length > 2) {
              let e = Gy(t, qy);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = Ky(t, 0, e)), (n = t.length - 1 - Gy(t, qy))),
                (r = o),
                (i = 0));
              continue;
            }
            if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
        } else
          (t.length > 0 ? (t += `${qy}${Ky(e, r + 1, o)}`) : (t = Ky(e, r + 1, o)),
            (n = o - r - 1));
      }
      ((r = o), (i = 0));
    } else a === Hy && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Xi(e) {
  if (!e) return ``;
  let n;
  try {
    n = new URL(e);
  } catch {
    return ``;
  }
  return n.pathname === `/` || t.location.origin !== n.origin
    ? ``
    : n.pathname.endsWith(`/`)
      ? n.pathname.slice(0, -1)
      : n.pathname;
}
function Zi(e, t) {
  let n = e.replace(hy, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function Qi(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return Zi(i, r);
  }
  if (e.includes(`:`)) return Zi(e, r);
  let i = t.elements?.[e];
  return i ? Zi(i, r) : e;
}
function $i(
  e,
  {
    currentRoutePath: n,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    hashVariables: s,
    relative: c = !0,
    preserveQueryParams: l,
    onlyHash: u = !1,
    siteCanonicalURL: d,
    localeId: f,
    localeSlug: p,
  }
) {
  let m;
  if ((a && e && (m = Qi(a, e, s)), u)) return m ?? ``;
  let h = n ?? `/`;
  (r && f && (h = r[f] ?? h), i && (h = h.replace(hy, (e, t) => String(i[t] || e))));
  let g = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  o && (g = g.replace(hy, (e, t) => String(o[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && o !== void 0 && n !== void 0 && e?.path !== void 0 && n === e.path && h !== g;
  if (c) {
    if (Yy.has(h) && t !== void 0) {
      let e = Xi(d);
      g = Ki(t.location.pathname, e + g);
    } else g = Ki(h, g);
  } else g = jr(g, p);
  let y = _ || v;
  return ((l || y) && (g = Or(g, y)), m && (g = `${g}#${m}`), g);
}
function ea(e, t) {
  let n = document.currentScript?.parentElement;
  n &&
    n.addEventListener(`submit`, (r) => {
      n.hasAttribute(e) || (r.preventDefault(), n.setAttribute(t, ``));
    });
}
function ta() {
  return `(${ea.toString()})("${Qy}","${$y}")`;
}
function na(e, t) {
  N(() => {
    let n = e.current;
    if (!n || (n.setAttribute(Qy, ``), !n.hasAttribute($y))) return;
    n.removeAttribute($y);
    let r = !1;
    return (
      queueMicrotask(() => {
        r || (n.reportValidity() && t(n));
      }),
      () => {
        r = !0;
      }
    );
  }, []);
}
function ra() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[Xy] = 1), e);
}
function ia() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[Xy] = 1), e);
}
function aa(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function oa(e) {
  return Xy in e && e[Xy] === 1;
}
function sa(e) {
  return Zy in e.nativeEvent && e.nativeEvent[Zy] === 1;
}
function ca(e) {
  let t = g(!1),
    n = g(null),
    r = l(Et, Ot, eb);
  return (
    N(() => {
      if (!r) return;
      let i = n.current;
      if (t.current || !i) return;
      t.current = !0;
      let a = aa(i),
        o = i[a];
      if (o === (a === `checked` ? !!e : e)) return;
      if (i.type === `radio` && o === !0) {
        ((i.checked = !1), i.dispatchEvent(ia()));
        return;
      }
      if (a === `checked`) {
        let e = ia();
        ((e[Zy] = 1), i.dispatchEvent(e), i.dispatchEvent(ia()));
        return;
      }
      if (i.nodeName === `SELECT`) {
        i.dispatchEvent(ra());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(i), a)?.set;
      if (!s) return;
      s.call(i, ``);
      let c = ra();
      ((c[Zy] = 1),
        i.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(i, o), i.dispatchEvent(ra()));
        }));
    }, [r]),
    n
  );
}
function la() {
  if (!tb) return;
  ((rb = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  tb.forEach((n) => t.addEventListener(n, nb, e));
}
function ua() {
  return (
    N(() => {
      if (!rb || !tb) return;
      let e = { capture: !0 },
        t = document.body;
      (tb.forEach((n) => t.removeEventListener(n, nb, e)),
        (tb = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function da(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function fa(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function pa() {
  ((ab = new ib()), ab.render.markStart());
}
function ma() {
  (c(() => {
    ab?.useInsertionEffects.markRouterStart();
  }, []),
    r(() => {
      ab?.useLayoutEffects.markRouterStart();
    }, []),
    N(() => {
      ab?.useEffects.markRouterStart();
    }, []));
}
function ha() {
  (c(() => {
    (ab?.render.markEnd(), ab?.useInsertionEffects.markStart());
  }, []),
    r(() => {
      (ab?.useLayoutEffects.markStart(),
        document.visibilityState === `visible`
          ? He.read(() => {
              (ab?.browserRendering.requestAnimationFrame.markStart(),
                ab?.unattributedHydrationOverhead.measure());
            })
          : (ob = !0));
    }, []),
    N(() => {
      (ab?.useEffects.markStart(),
        ab?.browserRendering.hasStarted ||
          (ab?.mutationEffects.measure(), ab?.useEffects.markAreSynchronous()));
    }, []));
}
function ga() {
  (c(() => {
    ab?.useInsertionEffects.markEnd();
  }, []),
    r(() => {
      (ab?.useLayoutEffects.markEnd(),
        !(ob || document.visibilityState !== `visible`) &&
          He.read(() => {
            (ab?.browserRendering.requestAnimationFrame.markEnd(),
              py().then(() => {
                ab?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    N(() => {
      ab?.useEffects.markEnd();
    }, []));
}
function _a() {
  return (ha(), null);
}
function va() {
  return (ga(), null);
}
function ya(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return M.isValidElement(e) ? M.cloneElement(e, n) : /* @__PURE__ */ E(e, { ...n });
}
function ba() {
  return ub;
}
function xa(e) {
  if (db?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      U(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: wa(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          U(t, `localizedPath must be defined`);
          let i = wa(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    db = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: db.pathRoutes,
    paths: db.paths,
    pathRoutesLocalized: db.pathRoutesLocalized,
    pathsLocalized: db.pathsLocalized,
  };
}
function Sa(e, t, n = !0, r = ba()) {
  return Ca(e, t, r, n);
}
function Ca(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = xa(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = Ta(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Ta(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Ta(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Ta(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function wa(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Ta(e, t) {
  let n = [],
    r = Ea(t).replace(hy, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
    } else {
      if (r === void 0) throw Error(`Path variable values cannot be undefined`);
      o[t] = r;
    }
  }
  return { isMatch: !0, pathVariables: o };
}
function Ea(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
async function Da({
  routes: e,
  routeId: t,
  pathVariables: n,
  localeId: r,
  locales: i,
  collectionUtils: a,
}) {
  let o = e[t],
    s = i ?? [],
    c = { get: nr(a) },
    l = s.find(({ id: e }) => e === Dv),
    u = s.find(({ id: e }) => e === (r ?? `default`)) ?? null,
    d = (
      o?.collectionId
        ? Nr({ activeLocale: u, collectionUtils: c, currentRoute: o, pathVariables: n })
        : Promise.resolve(void 0)
    )
      .then((e) => e ?? null)
      .catch(
        (e) => (console.error(ot(`Failed to resolve the initial collection item id.`, e)), null)
      );
  return {
    ...(await Fr({
      activeLocale: u,
      defaultLocale: l,
      collectionUtilsCache: c,
      locales: s,
      pathVariables: n,
      route: o,
      routeId: t,
    })),
    collectionItemId: d,
  };
}
function Oa(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function ka(e) {
  let t = /* @__PURE__ */ new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = Oa(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function Aa(e, t) {
  let n = e.toLowerCase(),
    r = ka(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function ja(e) {
  if (t === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in t)) return;
  let n = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!n || n.length === 0) return;
  let r = n.find((t) => t.name === e);
  if (r) return { name: r.name, description: r.description };
}
function Ma() {
  let e = ja(`abtests`);
  return new URLSearchParams(e?.description);
}
function Na(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0,
    l =
      a.elementPatterns || r.elementPatterns
        ? { ...a.elementPatterns, ...r.elementPatterns }
        : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    elementPatterns: l,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Pa(e, t) {
  for (let [n, r] of t) Na(e, n, r);
}
function Fa(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Ia(e) {
  let t = /* @__PURE__ */ new Map();
  for (let n in e) {
    let r = e[n]?.abTestingVariantId;
    r && !e[r] && t.set(r, n);
  }
  return (e) => t.get(e) ?? e;
}
function La(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0,
    s =
      r?.elementPatterns || a.elementPatterns
        ? { ...r?.elementPatterns, ...a.elementPatterns }
        : void 0;
  e[n] = {
    ...a,
    includedLocales: r?.includedLocales,
    elements: o,
    elementPatterns: s,
    abTestingVariantId: t,
  };
}
function Ra(e, n) {
  if ((n && La(e, n), t === void 0)) return n;
  let r = n;
  if (n) {
    let t = e[n]?.abTestingParentId;
    t && (r = t);
  }
  return (Pa(e, Ma()), Fa(e), r);
}
function za(e) {
  (N(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    c(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Ba(e, ...t) {
  fb.has(e) || (fb.add(e), console.warn(e, ...t));
}
function Va(e, t, n) {
  Ba(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Ha(e) {
  return (
    typeof e == `object` &&
    !!e &&
    hb in e &&
    e[hb] instanceof Function &&
    gb in e &&
    e[gb] instanceof Function
  );
}
function Ua(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = mb(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function Wa(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Ga(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Ka(e) {
  return Math.round(e * 2) / 2;
}
function qa(e, t) {
  return { x: e, y: t };
}
function Ja(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0) {
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  }
  return u;
}
function Ya(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Xa(e) {
  let t = Za(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Za(e) {
  let t = /\d?\.?\d+/u.exec(e);
  if (t) return Number(t[0]);
}
function Qa(e, t, n) {
  return (
    (bb.rgb_r = e / 255),
    (bb.rgb_g = t / 255),
    (bb.rgb_b = n / 255),
    bb.rgbToHsluv(),
    { h: bb.hsluv_h, s: bb.hsluv_s, l: bb.hsluv_l }
  );
}
function $a(e, t, n, r = 1) {
  return (
    (bb.hsluv_h = e),
    (bb.hsluv_s = t),
    (bb.hsluv_l = n),
    bb.hsluvToRgb(),
    { r: bb.rgb_r * 255, g: bb.rgb_g * 255, b: bb.rgb_b * 255, a: r }
  );
}
function eo(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function to(e, t, n) {
  return {
    r: Ya(e) ? co(e, 255) * 255 : 0,
    g: Ya(t) ? co(t, 255) * 255 : 0,
    b: Ya(n) ? co(n, 255) * 255 : 0,
  };
}
function no(e, t, n, r) {
  let i = [
    fo(Math.round(e).toString(16)),
    fo(Math.round(t).toString(16)),
    fo(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function ro(e, t, n) {
  let r,
    i,
    a = co(e, 255),
    o = co(t, 255),
    s = co(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function io(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function ao(e, t, n) {
  let r, i, a;
  if (((e = co(e, 360)), (t = co(t * 100, 100)), (n = co(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = io(s, o, e + 1 / 3)), (i = io(s, o, e)), (a = io(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function oo(e, t, n) {
  ((e = co(e, 255)), (t = co(t, 255)), (n = co(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function so(e, t, n) {
  ((e = co(e, 360) * 6), (t = co(t * 100, 100)), (n = co(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function co(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    lo(e) && (e = `100%`);
    let t = uo(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function lo(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function uo(e) {
  return typeof e == `string` && e.includes(`%`);
}
function fo(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function po(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = vb[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = xb.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = xb.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = xb.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Xa(r[2] ?? ``), l: Xa(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = xb.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Xa(r[2] ?? ``),
              l: Xa(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = xb.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Xa(r[2] ?? ``), v: Xa(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = xb.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Xa(r[2] ?? ``),
                  v: Xa(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = xb.hex8.exec(t))
                ? {
                    r: mo(r[1] ?? ``),
                    g: mo(r[2] ?? ``),
                    b: mo(r[3] ?? ``),
                    a: ho(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = xb.hex6.exec(t))
                  ? {
                      r: mo(r[1] ?? ``),
                      g: mo(r[2] ?? ``),
                      b: mo(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = xb.hex4.exec(t))
                    ? {
                        r: mo(`${r[1]}${r[1]}`),
                        g: mo(`${r[2]}${r[2]}`),
                        b: mo(`${r[3]}${r[3]}`),
                        a: ho(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = xb.hex3.exec(t))
                      ? {
                          r: mo(`${r[1]}${r[1]}`),
                          g: mo(`${r[2]}${r[2]}`),
                          b: mo(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function mo(e) {
  return parseInt(e, 16);
}
function ho(e) {
  return mo(e) / 255;
}
function go(e) {
  let t = Sb.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function _o(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function vo({ r: e, g: t, b: n, a: r }) {
  return { r: _o(e), g: _o(t), b: _o(n), a: r };
}
function yo(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function bo({ r: e, g: t, b: n, a: r }) {
  return { r: yo(e), g: yo(t), b: yo(n), a: r };
}
function xo({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function So(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Co({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = So(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function wo(e) {
  return Eb(Tb(e));
}
function To(e) {
  return wb(Cb(e));
}
function Eo(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = ko({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Do(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? ko(e)
              : Ao(e)),
    i
  );
}
function Do(e) {
  let t = po(e);
  if (t) return t.format === `hsl` ? Ao(t) : t.format === `hsv` ? Oo(t) : ko(t);
}
function Oo(e) {
  let t = so(e.h, e.s, e.v);
  return { ...ro(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : jo(e.a) };
}
function ko(e) {
  let t = to(e.r, e.g, e.b);
  return { ...ro(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : jo(e.a) };
}
function Ao(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Ya(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Ya(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Za(e.s)),
    (r = Ya(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Za(e.l)),
    (i = ao(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function jo(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Mo({ children: e }) {
  if (S(Bb).top) return /* @__PURE__ */ E(_, { children: e });
  let t = g({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = g({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    r = g(/* @__PURE__ */ new Set()).current,
    i = C(({ id: e, name: i, duplicatedFrom: a }) => {
      if (!e) return null;
      let o = i ? `byName` : `byId`,
        s = t.current[o][e];
      if (s) return s;
      let c = i || e;
      if (!a && !r.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
        return (
          t.current.count[o][c] === void 0 &&
            ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
          r.add(c),
          c
        );
      let l;
      if (a?.length)
        for (let s = a.length - 1; s >= 0; s--) {
          let c = a[s];
          U(!!c, `duplicatedId must be defined`);
          let u = t.current[o][c],
            d = t.current.byLastId[c];
          if (d && !l) {
            let e = t.current.byLayoutId[d],
              n = !e || e === i;
            d && !r.has(d) && (!i || n) && (l = [d, c]);
          }
          let f = u ? t.current.byLayoutId[u] : void 0,
            p = !f || f === i;
          if (u && !r.has(u) && (!i || p))
            return ((n.current[o][e] = u), (n.current.byLastId[c] = u), r.add(u), u);
        }
      let u = t.current.byLastId[e];
      if (u && !r.has(u)) return (r.add(u), (n.current.byId[e] = u), u);
      if (l) {
        let [t, i] = l;
        return ((n.current[o][e] = t), (n.current.byLastId[i] = t), r.add(t), t);
      }
      let d = t.current.byPossibleId[e];
      if (d && !r.has(d)) return (r.add(d), (n.current.byId[e] = d), d);
      let f = a?.[0],
        p = i || f || e,
        { layoutId: m, value: h } = No(p, (t.current.count[o][p] ?? -1) + 1, r);
      if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !i)) {
        let e = a[a.length - 1];
        if ((e && (n.current.byLastId[e] = m), a.length > 1))
          for (let e = 0; e < a.length - 1; e++) {
            let t = a[e];
            t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
          }
      }
      return ((n.current.byLayoutId[m] = c), r.add(m), m);
    }, []),
    a = C(() => {
      ((t.current = {
        byId: { ...t.current.byId, ...n.current.byId },
        byLastId: { ...t.current.byLastId, ...n.current.byLastId },
        byPossibleId: { ...t.current.byPossibleId, ...n.current.byPossibleId },
        byName: { ...t.current.byName, ...n.current.byName },
        byLastName: { ...t.current.byLastName, ...n.current.byLastName },
        byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
        count: { ...t.current.count, byName: {} },
      }),
        (n.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        r.clear());
    }, []),
    o = g({ getLayoutId: i, persistLayoutIdCache: a, top: !0, enabled: !0 }).current;
  return /* @__PURE__ */ E(Bb.Provider, { value: o, children: e });
}
function No(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Po({ enabled: e = !0, ...t }) {
  let n = S(Bb),
    r = s(() => ({ ...n, enabled: e }), [e]);
  return /* @__PURE__ */ E(Bb.Provider, { ...t, value: r });
}
function Fo(e) {
  let t = g(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Io(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Lo(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return /* @__PURE__ */ w(`div`, {
    style: Hb,
    children: [
      /* @__PURE__ */ E(`div`, { className: `text`, style: Wb, children: r }),
      i && /* @__PURE__ */ E(`div`, { className: `text`, style: Gb, children: i }),
    ],
  });
}
function Lo(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function Ro() {
  let e = W.current();
  return e === W.canvas || e === W.export;
}
function zo() {
  let [e] = m(() => Ro());
  return e;
}
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function Bo(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Vo(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of rx) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Ho(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function Uo(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < 512) continue;
    let n = Ho(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Ho(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Wo(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of nx) {
    let n = Ho(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Go(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Wo(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  }
  return { src: n, srcSet: Uo(n, t, Vo(t.pixelWidth, t.pixelHeight)) };
}
function Ko() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: at($b.imagePlaceholderSvg),
  };
}
function qo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Jo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Yo(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...tx,
    objectPosition: Jo(e.positionX, e.positionY),
    objectFit: qo(e.fit),
  };
}
function Xo(e) {
  let t = M.useRef(e ? `auto` : `async`),
    n = C((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = C(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = C(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function Zo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = $b.useImageSource(e, t, n),
    s = Yo(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = Xo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Go(e.nodeFixedSize, e, o);
  return /* @__PURE__ */ E(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function Qo({ image: e, containerSize: t, nodeId: n }) {
  let r = M.useRef(null),
    i = $b.useImageElement(e, t, n),
    a = Yo(e);
  return (
    M.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    /* @__PURE__ */ E(`div`, { ref: r, style: { display: `contents`, ...tx } })
  );
}
function $o({ nodeId: e, image: t, containerSize: n }) {
  let r = M.useRef(null),
    i = $b.useImageSource(t, n, e);
  return (
    M.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Yo(t);
      $b.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    /* @__PURE__ */ E(`div`, { ref: r, style: { display: `contents`, ...tx } })
  );
}
function es({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (V(t.src)) {
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = Ye(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Ka(e * (t.pixelWidth / 2)),
        s = $b.useImageSource(t, n);
      ((r = {
        ...ix,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Jo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        W.current() === W.canvas
          ? $b.canRenderOptimizedCanvasImage($b.useImageSource(t))
            ? /* @__PURE__ */ E($o, { image: t, ...n })
            : /* @__PURE__ */ E(Qo, { image: t, ...n })
          : /* @__PURE__ */ E(Zo, { image: t, avoidAsyncDecoding: W.current() === W.export, ...n });
  }
  let o = a ? ix : (r ?? { ...ix, ...Ko() });
  return i
    ? /* @__PURE__ */ E(z.div, {
        layoutId: e,
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      })
    : /* @__PURE__ */ E(`div`, {
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      });
}
function ts(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  (typeof r == `number`
    ? (o = s = c = l = r)
    : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    (o !== 0 || s !== 0 || c !== 0 || l !== 0) &&
      (n && o === s && o === c && o === l
        ? (t.border = `${o}px ${i} ${a}`)
        : ((t.borderStyle = e.borderStyle),
          (t.borderColor = e.borderColor),
          (t.borderTopWidth = `${o}px`),
          (t.borderBottomWidth = `${s}px`),
          (t.borderLeftWidth = `${c}px`),
          (t.borderRightWidth = `${l}px`))));
}
function ns(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...tx,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), /* @__PURE__ */ E(z.div, { style: n }))
    : (ts(e, n, !1), /* @__PURE__ */ E(z.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function rs(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function is(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !ox.isImageObject(t)) return;
  let r = null;
  if (((r = V(n) ? { alt: ``, src: n } : mb.get(t, null)), ox.isImageObject(r))) return rs(r, e);
}
function as(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function os(e) {
  return typeof e != `string` && typeof e != `number`;
}
function ss(e) {
  return e != null && typeof e != `boolean` && !as(e);
}
function q(e) {
  return Number.isFinite(e);
}
function cs(e) {
  return (Math.PI / 180) * e;
}
function ls(e) {
  return Qe(e) ? !1 : e === 2 || e === 5;
}
function us(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function ds(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return fs(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function fs(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      st(e, `unknown constraint key`);
  }
}
function ps(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(ds(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(ds(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function ms(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(ds(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(ds(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function hs(e, t, n, r, i) {
  let a = ms(q(e) ? e : dx, n, r, i),
    o = ps(q(t) ? t : fx, n, r, i);
  return (
    q(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (q(n.left) && q(n.right)
        ? (o = a / n.aspectRatio)
        : (q(n.top) && q(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function gs(e, t) {
  return !q(e) || !q(t) ? null : e + t;
}
function _s(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function vs(e) {
  return !e._constraints || _s(e) ? !1 : e._constraints.enabled;
}
function ys(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    q(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    q(n) && q(r) ? { width: n, height: r } : null
  );
}
function bs(e) {
  let t = ys(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return q(n) && q(r) ? { x: n, y: r, ...t } : null;
}
function xs(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!vs(e) || r) return bs(e);
  let i = Ss(e),
    a = Cs(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return ux.toRect(i, o, null, n, null);
}
function Ss(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = lx.quickfix({
      left: q(t),
      right: q(n),
      top: q(r),
      bottom: q(i),
      widthType: us(c),
      heightType: us(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function Cs(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function ws() {
  return M.useContext(px).parentSize;
}
function Ts(e) {
  return typeof e == `object`;
}
function Es(e) {
  return Ts(e) ? e.width : e;
}
function Ds(e) {
  return Ts(e) ? e.height : e;
}
function Os(e, t) {
  return /* @__PURE__ */ E(mx, { parentSize: t, children: e });
}
function ks(e) {
  return xs(e, ws(), !0);
}
function As({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function js(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Ms(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? z[e] : z.div;
}
function Ns() {
  return !1;
}
function Ps() {
  return ct() ? W.preview : W.current();
}
function Fs() {
  return (Sx ??= import("./chunk.Dy1d_AYg.daPHZv19.mjs").then((e) => {
    if (((Cx = e.getCombinedCSSRules), mr())) for (let e of Cx()) lt(e, void 0);
    return e;
  }));
}
function Is() {
  return Cx ? Cx() : (mr() && Fs(), []);
}
function Ls(e) {
  return yx(e, Is, `framer-lib-combinedCSSRules`);
}
function Rs(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function zs(e, t) {
  let n = {};
  return (
    W.current() === W.canvas &&
      Rs(n, wx ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function Bs(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Vs(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = M.Children.map(t, (e) =>
        M.isValidElement(e) ? M.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function Hs(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function Us(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = S(Bb);
  return s(() => {
    if (!u) return e.layoutId;
    let s = t || e.layoutId;
    if (!s && (c || !i || o)) return;
    let d = s || l({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [u]);
}
function Ws() {
  let [e, t] = M.useState(0);
  return M.useCallback(() => t((e) => e + 1), []);
}
function Gs(e) {
  let t = Ws();
  N(() => {
    let n = e?.current;
    if (n)
      return (
        Dx?.observeElementWithCallback(e.current, t),
        () => {
          Dx?.unobserve(n);
        }
      );
  }, [e, t]);
}
function Ks(e) {
  return [
    ...(e.firstElementChild &&
    e.firstElementChild.hasAttribute(`data-framer-size-compatibility-wrapper`)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(qs)
    .map(Js);
}
function qs(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Js(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(qs);
  return t ? Js(t) : e;
}
function Ys(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = S(Tx),
    l = W.current() === W.canvas;
  zy(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && $b.queueMeasureRequest(Bs(i), t.current, n(t.current)));
  });
}
function Xs(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && $b.queueMeasureRequest(Bs(t.id), t, Ks(t));
}
function Zs(e) {
  e.willChange = `transform`;
  let t = W.current() === W.canvas;
  Ax && t && (e.translateZ = Ox);
}
function Qs(e) {
  ((e.willChange = `transform`), $s(e, !0));
}
function $s(e, t) {
  let n = W.current() === W.canvas;
  if (!Ax || !n) return;
  let r = (V(e.transform) && e.transform) || ``;
  t ? r.includes(kx) || (e.transform = r + kx) : (e.transform = r.replace(kx, ``));
}
function ec(e, t, n, r = !0) {
  if (!e) return;
  let i = Kb(e.style),
    a = n || i[t],
    o = () => {
      tc(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function tc(e) {
  return V(e) || Ye(e) || $e(e);
}
function nc(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function rc(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  nc(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function ic(e, t) {
  let n = [e, t];
  return Px.test(e) ? e : rc(1e3, Fx, n, () => Nx.multiplyAlpha(e, t));
}
function ac(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: ic(e.value, t) }))
  );
}
function oc(e, t) {
  let n = 0;
  return (
    ac(e, t).forEach((e) => {
      n ^= Mx(e.value) ^ e.position;
    }),
    n
  );
}
function sc(e) {
  return e && Ix.every((t) => t in e);
}
function cc(e) {
  return e && Lx.every((t) => t in e);
}
function lc({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || kb(t)
      ? (n.backgroundColor = t)
      : X.isColorObject(e) && (n.backgroundColor = e.initialValue || X.toRgbString(e))
    : e &&
      ((e = mb.get(e, null)),
      typeof e == `string` || kb(e)
        ? (n.background = e)
        : zx.isLinearGradient(e)
          ? (n.background = zx.toCSS(e))
          : Vx.isRadialGradient(e)
            ? (n.background = Vx.toCSS(e))
            : X.isColorObject(e) && (n.backgroundColor = e.initialValue || X.toRgbString(e)));
}
function J(e, t, n, r) {
  (r === void 0 && (r = t), e[t] !== void 0 && (n[r] = e[t]));
}
function uc(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function dc(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function fc(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    he(n)
      ? (t.cornerShape = re(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    J(e, `size`, t),
    J(e, `width`, t),
    J(e, `height`, t),
    J(e, `minWidth`, t),
    J(e, `minHeight`, t),
    J(e, `top`, t),
    J(e, `right`, t),
    J(e, `bottom`, t),
    J(e, `left`, t),
    J(e, `position`, t),
    J(e, `overflow`, t),
    J(e, `opacity`, t),
    e._border?.borderWidth || J(e, `border`, t),
    J(e, `borderRadius`, t),
    J(e, `radius`, t, `borderRadius`),
    J(e, `color`, t),
    J(e, `shadow`, t, `boxShadow`),
    J(e, `x`, t),
    J(e, `y`, t),
    J(e, `z`, t),
    J(e, `rotate`, t),
    J(e, `rotateX`, t),
    J(e, `rotateY`, t),
    J(e, `rotateZ`, t),
    J(e, `scale`, t),
    J(e, `scaleX`, t),
    J(e, `scaleY`, t),
    J(e, `skew`, t),
    J(e, `skewX`, t),
    J(e, `skewY`, t),
    J(e, `originX`, t),
    J(e, `originY`, t),
    J(e, `originZ`, t),
    lc(e, t),
    t
  );
}
function pc(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Kb(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function mc(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (Ux.has(t)) return `pointer`;
}
function hc(e) {
  return gc(e) ? !0 : e.style ? !!gc(e.style) : !1;
}
function gc(e) {
  return Wx in e && (e[Wx] === `scroll` || e[Wx] === `auto`);
}
function _c(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = I(e.minWidth),
    h = I(e.minHeight),
    g = I(e.maxWidth),
    _ = I(e.maxHeight);
  return {
    top: I(n),
    left: I(t),
    bottom: I(r),
    right: I(i),
    width: I(a),
    height: I(o),
    size: I(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function vc(e) {
  let t = S(Tx),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = _c(e),
    s = ks(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: W.current() === W.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !pc(e) && !e.__fromCanvasComponent && !hc(e),
    u = !e.style || !(`pointerEvents` in e.style);
  l && u && (c.pointerEvents = `none`);
  let d = M.Children.count(e.children) > 0 &&
      M.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    f = fc(e);
  (a === void 0 && !i && (uc(f) || (c.width = Gx.width), dc(f) || (c.height = Gx.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let p = {};
  (vs(o) &&
    s &&
    !As(e) &&
    (p = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, d, r, f, p, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    jx.applyWillChange(e, c, !0));
  let m = c;
  c.transform || (m = { x: 0, y: 0, ...c });
  let h = Ro();
  return (
    e.positionSticky
      ? (!h || $b.isOnPageCanvas || t) &&
        ((m.position = `sticky`),
        (m.willChange = `transform`),
        (m.top = e.positionStickyTop),
        (m.right = e.positionStickyRight),
        (m.bottom = e.positionStickyBottom),
        (m.left = e.positionStickyLeft))
      : h &&
        (e.positionFixed
          ? (m.position = $b.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (m.position = `absolute`)),
    `rotate` in m && m.rotate === void 0 && delete m.rotate,
    [m, s]
  );
}
function yc(e) {
  let t = {};
  for (let n in e)
    (te(n) || Jb(n)) && !Kx.has(n)
      ? (t[n] = Kb(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Kb(e)[n] != `boolean` && !e.transition && (t.transition = Kb(e)[n]));
  return t;
}
function bc(e) {
  return `data-framer-name` in e;
}
function xc(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Sc(e) {
  return /* @__PURE__ */ E(z.div, { layoutId: Yx, style: Qx, children: e.children });
}
function Cc(e, t) {
  qe(e) ? e(t) : wc(e) && (e.current = t);
}
function wc(e) {
  return H(e) && `current` in e;
}
function Tc() {
  let e = Fo(() => /* @__PURE__ */ new Set()),
    t = Fo(() => /* @__PURE__ */ new Map());
  return Fo(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      i !== n.current &&
        ((n.current = i),
        r && r(i),
        t.forEach((e, t) => {
          e ? e() : t(null);
        }),
        i === null
          ? (t.clear(), e.clear())
          : e.forEach((e) => {
              let n = e(i);
              t.set(e, n);
            }));
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Ec(e) {
  let t = g(null),
    n = Tc();
  return Fo(() => (wc(e) ? n(e) : qe(e) ? n(t, e) : n(t)));
}
function Dc(e, t, n) {
  let r = g(),
    i = g();
  (zi(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Oc(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new $x({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function kc(e, t, n) {
  let r = Fo(() => `${n.rootMargin}`),
    i = S(eS),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  Dc(
    e,
    (e) => {
      if (a && e !== null) return Oc(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function Ac(e, t, n) {
  let r = M.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n,
    c = M.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Mc(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
        } else if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
        }
      },
      [a, o?.y, t]
    );
  tS(e, c, { threshold: nS, rootMargin: s, enabled: i ?? !0 });
}
function jc(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, kt.innerHeight);
}
function Mc({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && jc(t, e) >= r;
}
function Nc() {
  return S(oS);
}
function Pc() {
  return /* @__PURE__ */ new Map();
}
function Fc() {
  return Fo(Pc);
}
function Ic(e, t = []) {
  let { register: n, deregister: r } = S(sS);
  N(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function Lc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Rc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (q(t.originX) && (r.originX = t.originX),
      q(t.originY) && (r.originY = t.originY),
      q(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (q(n.originX) && (r.originX = n.originX),
      q(n.originY) && (r.originY = n.originY),
      q(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function zc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Bc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return pS.PushLeft;
    case `left`:
      return pS.PushRight;
    case `bottom`:
      return pS.PushUp;
    case `top`:
      return pS.PushDown;
  }
}
function Vc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return pS.OverlayLeft;
    case `left`:
      return pS.OverlayRight;
    case `bottom`:
      return pS.OverlayUp;
    case `top`:
      return pS.OverlayDown;
  }
}
function Hc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return pS.FlipLeft;
    case `left`:
      return pS.FlipRight;
    case `bottom`:
      return pS.FlipUp;
    case `top`:
      return pS.FlipDown;
  }
}
function Uc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return Gc(e, t.transition, t.component);
    case `removeOverlay`:
      return Kc(e);
    case `add`:
      return qc(e, t.key, t.transition, t.component);
    case `remove`:
      return Xc(e);
    case `update`:
      return Wc(e, t.key, t.component);
    case `back`:
      return Jc(e);
    case `forward`:
      return Yc(e);
    default:
      return;
  }
}
function Wc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function Gc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function Kc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function qc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? tl(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = $c(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = Zc(e, t, c),
    p = el(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function Jc(e) {
  let t = { ...e.containers },
    n = Xc(e);
  if (n) return ((n.containers = t), n);
}
function Yc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = qc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function Xc(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (U(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Qc(e, r, n),
    u = el(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function Zc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function Qc(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function $c(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function el(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = nl(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function tl(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).some((t) => t.key === e)
        ? !0
        : !r.slice(0, t - 1).some((t) => t.key === e);
}
function nl(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (e === n || e === r) {
    if (e === n && n > r) {
      let t = i[e];
      return rl(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return rl(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return rl(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return rl(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function rl(e, t, n) {
  let r = {},
    i = {};
  return (
    hS.forEach((e) => {
      ((r[e] = uS[e]), (i[e] = { ...n, from: uS[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Kb(uS)[a]}%` : Kb(uS)[a];
        ((Kb(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function il(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function al({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function ol({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : yS;
}
function sl({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function cl(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function ll(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
  if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  }
  {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function ul(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function dl(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function fl(e, t) {
  let { current: n, history: r } = t;
  if (e !== n) {
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
  }
}
function pl(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return yS;
}
function ml(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function hl(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function gl(e) {
  return M.Children.map(e.component, (t) => {
    if (!ss(t) || !os(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? H(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      M.cloneElement(t, n)
    );
  });
}
function _l(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function vl(e, t) {
  let n = ye(),
    r = _e();
  return /* @__PURE__ */ E(vS, {
    ref: (e) => {
      t && (typeof t == `function` ? t(e) : (t.current = e));
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function yl(e) {
  return H(e) && SS in e;
}
function bl(e) {
  return H(e) || qe(e);
}
function xl(e) {
  return !!e && CS in e && e[CS] === !0;
}
function Sl(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
      case `dimension`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `sharedtype`: {
        if (!(`definition` in e) || !yl(e.definition)) return;
        let { definition: t } = e;
        switch (t.kind) {
          case `enum`:
            return V(e.defaultValue) && t.options.includes(e.defaultValue)
              ? e.defaultValue
              : void 0;
          default:
            t.kind;
            return;
        }
      }
      case `boolean`:
        return Je(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return Qe(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return Ye(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = H(e.defaultValue) ? e.defaultValue : {};
        return (H(e.controls) && Cl(t, e.controls), t);
      }
      case `array`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `motionvalue`:
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `ref`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Cl(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Qe(i) || xl(r)) continue;
    let a = Sl(r);
    Qe(a) || (e[n] = a);
  }
}
function wl(e) {
  if (H(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Tl(e, t) {
  bl(e) && Cl(wl(e), t);
}
function El(e, t) {
  Object.assign(e, { [wS]: t });
}
function Dl(e, t, n) {
  (Object.assign(e, { propertyControls: t }), Ol(t), Tl(e, t), n !== void 0 && El(e, n));
}
function Ol(e) {
  for (let t of Object.values(e))
    t?.type === `sharedtype` &&
      `definition` in t &&
      yl(t.definition) &&
      Object.isExtensible(t) &&
      Object.defineProperty(t, "options", { value: t.definition.options, configurable: !0 });
}
function kl(e) {
  return e.propertyControls;
}
function Al(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function jl(e) {
  return e.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
}
function Ml(e, t) {
  e.shadows && e.shadows.length !== 0 && (t.textShadow = jl(e.shadows));
}
function Nl(e, t) {
  let n = [];
  (q(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    q(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    q(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    q(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    q(e.invert) && n.push(`invert(${e.invert / 100})`),
    q(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    q(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    q(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Al(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Pl(e, t) {
  q(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Fl(e, t) {
  (Pl(e, t), Nl(e, t));
}
function Il(e, t) {
  let n,
    r = (...r) => {
      (kt.clearTimeout(n), (n = kt.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      kt.clearTimeout(n);
    }),
    r
  );
}
function Ll(...e) {
  return e.filter(Boolean).join(` `);
}
function Rl(e) {
  if (e.startsWith(PS)) return e.substr(FS);
}
function zl(e, t, n) {
  let r = i.map(e, (e) => (T(e) ? o(e, t) : e));
  return n ? r : /* @__PURE__ */ E(_, { children: r });
}
function Bl(e) {
  let t = Fo(() => Vl(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Vl(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Hl(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Hl(t)));
    },
    r = !1;
  function a(a, s) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      i.count(a) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      i.map(a, (e) => {
        if (T(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = qe(s) ? s(e.props) : s;
          return o(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let s = function (e, t) {
    return /* @__PURE__ */ E(_, { children: a(e, t) });
  };
  return (
    (s.cloneAsArray = a),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: s,
    }
  );
}
function Hl(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Cc(n, e), Cc(t, e));
  };
}
function Ul(e, t, n, r, i, a, o, s) {
  let c = M.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !M.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !ql(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = Kl([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = Kl([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = /* @__PURE__ */ E(
        LS.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = Gl(e, a, r);
    (f.length
      ? (U(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = /* @__PURE__ */ E(
          `div`,
          { className: `${RS} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : U(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    U(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, /* @__PURE__ */ E(`div`, { className: zS }, `property-overrides-separator`)]
  );
}
function Wl(e) {
  return e.split(`-`)[2];
}
function Gl(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${Wl(a)}`);
  }
  return r;
}
function Kl(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function ql(e, t) {
  for (let n of Object.keys(t)) if (!En(e[n], t[n], !0)) return !0;
  return !1;
}
function Jl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Yl(e) {
  return M.forwardRef(({ optimized: t, ...n }, r) => {
    let i = M.useContext(IS),
      a = M.useContext(LS)?.variants,
      o = n[qS];
    o && !mr() && GS.setAll(o, a, t ? n : null, i);
    let s = YS(n);
    return /* @__PURE__ */ E(e, { ref: r, ...n, ...s });
  });
}
function Xl(e) {
  return V(e) || Array.isArray(e);
}
function Zl(e) {
  return e in QS;
}
function Ql(e, t) {
  let n = Fo(() => ({ values: ZS(t ? e : void 0) }));
  return (
    M.useEffect(() => {
      if (!t)
        for (let e of XS) {
          let t = QS[e];
          Qe(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function $l(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  o
) {
  let c = se(),
    l = Fo(ZS),
    d = g(!1),
    f = nC(),
    p = g(null),
    h = C(async () => {
      if (!i) return;
      let e = n || void 0,
        t = d.current && r === `mirror`,
        a = t ? QS : i,
        o = t ? i : QS;
      return (
        (d.current = !d.current),
        (p.current = Promise.all(
          XS.map((t) => {
            if (!(c && t !== `opacity`))
              return (
                l[t].jump(o[t] ?? QS[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && Pe(l[t], i, r);
                })
              );
          })
        )),
        p.current
      );
    }, [i, r, n, c]),
    [_, v] = m(!1),
    y = g(!1),
    b = C(async () => {
      e && y.current && (await h(), await f(t ?? 0), b());
    }, [h, f, e, t]),
    x = C(() => {
      y.current || ((y.current = !0), u(() => v(!0)), b());
    }, [b]),
    S = C((e = !0) => {
      (XS.forEach((e) => {
        l[e].stop();
      }),
        XS.forEach((e) => {
          l[e].set(QS[e]);
        }),
        (d.current = !1),
        e && ((y.current = !1), u(() => v(!1))));
    }, []),
    w = e && i,
    T = C(() => {
      document.hidden ? S(!1) : y.current && ((y.current = !1), x());
    }, [x, S]);
  (N(() => {
    if (w)
      return (
        document.addEventListener(`visibilitychange`, T),
        () => {
          document.removeEventListener(`visibilitychange`, T);
        }
      );
  }, [w, T]),
    N(() => {
      (w && a) || (w ? x() : S());
    }, [x, S, a, w]),
    N(() => () => S(), [S]));
  let E = g(!1),
    D = C(async () => {
      p.current && (await p.current, !E.current && S());
    }, [S]),
    O = C(
      (e) => {
        e.isIntersecting ? ((E.current = !0), x()) : ((E.current = !1), D());
      },
      [x, D]
    );
  tS(o, O, { enabled: w && a });
  let k = _ || !a;
  return s(() => ({ values: l, style: w && k ? $S : eC }), [w, k]);
}
function eu(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function tu(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = M.useRef(null),
    c = se(),
    l = M.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : eu(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: u } = ve(),
    d = R(u, l),
    f = B(a && s.current === null ? `hidden` : n),
    p = B(0),
    m = S(eS);
  return (
    Dc(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = Oc(m, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            He.update(() => {
              (d.set(l(u.get())), a && f.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    Nn(() => {
      o && d.set(0);
    }),
    { values: { y: c || !o ? p : d }, style: o ? { ...$S, visibility: f } : eC }
  );
}
function nu(e) {
  return typeof e == `object` && !!e;
}
function ru(e) {
  if (nu(e)) return e?.transition;
}
function iu(e, t, n, r, i, a) {
  let o = ru(e);
  return Promise.all(
    XS.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = nu(e) ? (e?.[s] ?? QS[s]) : QS[s];
          if ((he(u) && (u = u.get()), !Ye(u))) return c();
          let d = F.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (V(i) && !l?.hasAnimated && kt.MotionHandoffAnimation) {
            let e = kt.MotionHandoffAnimation(i, s, He);
            e && (f = e);
          } else V(i) && kt.MotionCancelOptimisedAnimation?.(i, s, He);
          a ? l.set(u) : Pe(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function au(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  c,
  l,
  u
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = Re(),
    _ = g({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    v = Fo(() => {
      let e = d ?? l;
      if (!H(e)) return { values: ZS() };
      let t = {};
      for (let n in e) {
        let r = H(e) ? e[n] : void 0;
        Ye(r) && (t[n] = r);
      }
      return { values: ZS(t) };
    });
  Dc(
    o,
    (e) => {
      let { hasMounted: t } = _.current;
      if (t && f) return;
      let n = F.get(e);
      if (n) {
        Object.assign(_.current, { hasMounted: !0 });
        for (let e in v.values) {
          if (!Zl(e)) continue;
          let t = l?.[e];
          n.setBaseTarget(e, Ye(t) ? t : QS[e]);
        }
      }
    },
    [f]
  );
  let y = se();
  Dc(o, (e) => {
    if (!c) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== _.current.lastPresence) {
      (Object.assign(_.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(_.current, { running: !0 }),
            iu(f, v, y, o, u).then(() => Object.assign(_.current, { running: !1 })))
          : p
            ? (Object.assign(_.current, { running: !0 }),
              iu(p, v, y, o, u)
                .then(() => Object.assign(_.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = _.current;
    !En(f, t) &&
      f &&
      (Object.assign(_.current, { lastAnimate: f }),
      iu(f, v, y, o, u, !n).then(() => Object.assign(_.current, { running: !1 })));
  });
  let b = c && f;
  return s(() => ({ values: v.values, style: b ? $S : eC }), [b]);
}
function ou(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function su(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = ou(o.current, document.documentElement) - aC - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function cu(e, t = 0) {
  return e < t ? `up` : `down`;
}
function lu(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Mn();
  M.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return je((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = cu(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < oC) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function uu(e, t, n) {
  let r = su(e, t),
    i = [...cC],
    a = r[0];
  if (!Ye(a)) return lC;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!Ye(e)) return lC;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function du(e) {
  return {
    x: e?.x ?? QS.x,
    y: e?.y ?? QS.y,
    scale: e?.scale ?? QS.scale,
    opacity: e?.opacity ?? QS.opacity,
    transformPerspective: e?.transformPerspective ?? QS.transformPerspective,
    rotate: e?.rotate ?? QS.rotate,
    rotateX: e?.rotateX ?? QS.rotateX,
    rotateY: e?.rotateY ?? QS.rotateY,
    skewX: e?.skewX ?? QS.skewX,
    skewY: e?.skewY ?? QS.skewY,
    transition: e?.transition ?? void 0,
  };
}
function fu({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return M.useMemo(
    () => ({
      initial: r ?? du({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? du({ opacity: t }),
      exit: i ?? du(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function pu(e, t) {
  let n = se(),
    r = fu(e),
    i = e.styleAppearEffectEnabled,
    a = Ql(i ? r.initial : r.animate, i),
    o = M.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = Mn(),
    l = M.useRef(),
    u = M.useCallback(async ({ transition: i, ...o }, s) => {
      let c = i ?? r.animate.transition ?? e.transition;
      await l.current;
      let u = F.get(t.current);
      l.current = Promise.all(
        XS.map((e) => {
          s && a.values[e].set(r.initial[e] ?? QS[e]);
          let t = o[e] ?? QS[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (Ye(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => r() };
                typeof t == `number` && Pe(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && o.current.lastAppearState === !0;
  Ac(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      t
        ? (o.current.scheduledAppearState = e)
        : ((o.current.scheduledAppearState = void 0),
          (o.current.lastAppearState = e),
          n !== e && u(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    M.useEffect(() => {
      if (!f) return;
      let t = { initial: !0 },
        n = `initial`;
      return je((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = uu(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = pe(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = Kb(r)[l];
        d && u(d);
      });
    }, [c, f]),
    lu(e.scrollDirection, (e) => void u(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Nn(() => {
      if (i && (e.targets || e.scrollDirection))
        for (let e of XS) a.values[e].set(r.initial?.[e] ?? QS[e]);
    }),
    s(() => ({ values: a.values, style: i ? $S : eC }), [i])
  );
}
function mu(e, t) {
  let n = M.useRef({});
  M.useEffect(() => {
    if (t !== void 0)
      for (let r of Sv(e)) {
        let i = e[r],
          a,
          o;
        function s() {
          let e = n.current[r];
          (e && e.stop(),
            (n.current[r] = ke({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: a,
            })));
        }
        i.attach((e, t) => ((o = e), (a = t), He.postRender(s), i.get()));
      }
  }, [JSON.stringify(t)]);
}
function hu(e, t) {
  let n = fC();
  return {
    inputRange: su(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of XS) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function gu(e) {
  let t = fC();
  for (let { target: n } of e) for (let e of XS) t[e]?.push(n[e]);
  return t;
}
function _u(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = se(),
    c = Ql(dC(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = Mn();
  return (
    r(() => {
      if (!l && u)
        return je((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = hu(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of XS)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(pe(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    Dc(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = gu(n);
        return je(
          (e, { y: t }) => {
            for (let e of XS)
              (s && e !== `opacity`) ||
                (pC.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(pe(t.progress, pC, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, n, l]
    ),
    mu(c.values, i),
    Nn(() => {
      if (l) return;
      let e = dC(n, s);
      for (let t of XS) c.values[t].set(e?.[t] ?? QS[t]);
    }),
    M.useMemo(() => ({ values: c.values, style: t ? $S : eC }), [t])
  );
}
function vu(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function yu(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Rl(n);
    if (r) {
      for (let i of hC)
        if (mC[i]?.has(r)) {
          t[i][r] = Kb(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Kb(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = vu(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = vu(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function bu(e) {
  return H(e) && vC in e;
}
function xu(e, t) {
  if (!e || !H(e)) return t;
  for (let n in e) {
    let r = e[n];
    he(r) && Zl(n) && Ye(r.get()) && t[n].push(r);
  }
}
function Su(e) {
  return V(e) || Array.isArray(e);
}
function Cu({ presets: e, children: t }) {
  let n = g(e);
  return (
    En(e, n.current, !1) || (n.current = e),
    /* @__PURE__ */ E(bC.Provider, { value: n.current, children: t })
  );
}
function wu({ componentIdentifier: e, children: t }) {
  return t(S(bC)[e] ?? {});
}
function Tu() {
  return M.useContext(xC);
}
function Eu(e) {
  let t = Us(e),
    { layoutIdKey: n, duplicatedFrom: r, ...i } = e;
  return { layoutId: t, ...i };
}
function Du(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Ou() {
  if (t === void 0 || DC)
    return /* @__PURE__ */ E(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw kC;
}
function ku({ children: e }) {
  return S(jC)
    ? /* @__PURE__ */ E(_, { children: e })
    : /* @__PURE__ */ E(b, { fallback: AC, children: e });
}
function Au() {
  return /* @__PURE__ */ E(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function ju(e, t) {
  if (!St || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  qn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Mu(...e) {
  console.error(...e);
}
function Nu() {
  return W.current() !== W.canvas;
}
function Pu({ getErrorMessage: e, fallback: t, children: n }) {
  return Nu()
    ? /* @__PURE__ */ E(Fu, {
        fallback: t,
        children: /* @__PURE__ */ E(NC, { fallback: t, getErrorMessage: e, children: n }),
      })
    : n;
}
function Fu({ children: e, fallback: n = MC }) {
  return t === void 0
    ? /* @__PURE__ */ E(b, { fallback: n, children: e })
    : /* @__PURE__ */ E(ku, { children: e });
}
function Iu() {
  return /* @__PURE__ */ E(`div`, {
    style: {
      padding: `12px 16px`,
      borderWidth: 1,
      borderRadius: 6,
      borderStyle: `solid`,
      borderColor: `rgba(149, 149, 149, 0.15)`,
      backgroundColor: `rgba(149, 149, 149, 0.1)`,
      fontSize: 12,
      color: `#a5a5a5`,
    },
    children: `Code component disabled`,
  });
}
function Lu() {
  return M.useContext(FC);
}
function Ru() {
  let e = Lu();
  return M.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function zu({ children: e, scopeId: t, nodeId: n }) {
  let r = Lu(),
    i = M.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return /* @__PURE__ */ E(FC.Provider, { value: i, children: e });
}
function Bu(e, t) {
  return `${IC}${e}:${t}`;
}
function Vu(e, t) {
  return Uu(`component`, e, t);
}
function Hu(e, t) {
  return Uu(`override`, e, t);
}
function Uu(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor → open Quick Actions (press Cmd+K or Ctrl+K) → paste this: ${Bu(t, n)} → click “Show Layer”.`;
}
function Wu(e, t, n, r, i, a) {
  let o = Ku(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function Gu(e, t, n, r) {
  return Ku(e, t, n, r);
}
function Ku(e, t, n, r) {
  return !!(Qe(n) || (n === 1 && r && e === t));
}
function qu(e, t, n, r, i, a) {
  let o = Lu();
  if (Qe(t) || Qe(n)) return /* @__PURE__ */ E(PC, { children: e });
  let { disableCustomCode: s } = TC();
  return s && r
    ? /* @__PURE__ */ E(Iu, {})
    : (Wu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = /* @__PURE__ */ E(Pu, {
          getErrorMessage: Vu.bind(null, t, n),
          fallback: null,
          children: e,
        })),
      i && (e = /* @__PURE__ */ E(zu, { scopeId: t, nodeId: n, children: e })),
      e);
}
function Ju() {
  if (zC !== void 0 || t === void 0) return;
  let e = kt.matchMedia(`(any-hover: hover)`);
  ((zC = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== zC) {
        zC = t;
        for (let e of BC) e();
      }
    }));
}
function Yu() {
  return (Ju(), Xu());
}
function Xu() {
  return zC ?? !1;
}
function Zu(e) {
  return (
    BC.add(e),
    Ju(),
    () => {
      BC.delete(e);
    }
  );
}
function Qu(e = !1) {
  let [t, n] = m(e);
  return (
    zy(function () {
      function e(e = !0) {
        let t = Xu();
        e ? u(() => n(t)) : n(t);
      }
      let t = Zu(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function $u(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function ed(e) {
  return !(!e || e.placement || e.alignment);
}
function td(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      st(e);
  }
}
function nd(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${td(t)}, -100%`;
    case `right`:
      return `0%, ${td(t)}`;
    case `bottom`:
      return `${td(t)}, 0%`;
    case `left`:
      return `-100%, ${td(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function rd(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(`data-framer-portal-id`)) {
      let e = n.getAttribute(qC);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function id(e) {
  let { registerCursors: t } = S(VC),
    n = Fo(() => e),
    i = j();
  r(() => t(n, i), [t, i]);
}
function ad(e) {
  return !!(e && typeof e == `object` && YC in e);
}
function od(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function sd() {
  return W.current() === W.canvas;
}
function cd(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function ld(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function ud(e, t, n, r) {
  if (V(e)) {
    let i = cd(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = Sa(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function dd(e) {
  return V(e) && e.startsWith(`data:${nw}`);
}
function fd(e) {
  if (dd(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(17),
        r = t.searchParams,
        i = r.has(QC) ? r.get(QC) : void 0,
        a,
        o = r.get($C),
        s = r.get(ew),
        c = r.get(tw);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function pd(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = fd(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function md(e) {
  if (!dd(e)) return e;
  let t = fd(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: hd(i) };
}
function hd(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function gd(e, t, n, r, a, o) {
  let c = S(rw),
    l = Ru(),
    u = s(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: l }), [t, n, l]),
    d = kn(),
    f = jn(),
    { locales: p } = Ir(),
    m = s(() => {
      let e = ad(r) ? r : md(r);
      if (e) return ud(e, d, f, p);
    }, [f, r, d, p]),
    h = !!(!sd() && c?.nodeId && u.nodeId),
    g = C(
      (e) => {
        a.href &&
          (e.preventDefault(),
          e.stopPropagation(),
          br(e) ? yd(a.href, ``, `_blank`) : m ? a.navigate?.() : yd(a.href, a.rel, a.target));
      },
      [a, m]
    ),
    _ = C(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), yd(a.href, ``, `_blank`));
      },
      [a]
    ),
    y = C(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          m ? a.navigate?.() : yd(a.href, a.rel, a.target));
      },
      [a, m]
    );
  Dc(
    o,
    (e) => {
      e !== null && h && (e.dataset.hydrated = `true`);
    },
    [h]
  );
  let b = e;
  return (
    h &&
      (i.forEach(e, (e) => {
        vd(e) &&
          (U(
            _d(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          U(
            _d(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          ZC.collectNestedLink(c, u));
      }),
      (b = i.map(e, (e) => {
        if (!vd(e)) return e;
        let t = bd(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: g,
            onAuxClick: _,
            onKeyDown: y,
            as: r.as && bd(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return v(t, { ...i, ref: a }, n);
      }))),
    /* @__PURE__ */ E(rw.Provider, { value: u, children: b })
  );
}
function _d(e) {
  return !Qe(e?.nodeId);
}
function vd(e) {
  return T(e) && (bd(e.type) !== e.type || bd(e.props.as) !== e.props.as);
}
function yd(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function bd(e) {
  return e === `a` ? `span` : Ue(e) && oe(e) === `a` ? z.span : e;
}
function xd(e) {
  aw = e;
}
function Sd() {
  return aw;
}
function Cd(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Cd(e.parentElement, t)
      : null;
}
function wd({ children: e }) {
  return /* @__PURE__ */ E(ku, { children: e });
}
function Td(e) {
  return D(function (t, n) {
    return /* @__PURE__ */ E(wd, { children: /* @__PURE__ */ E(e, { ...t, ref: n }) });
  });
}
function Ed(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Od(e, t, o, s, a, c, l, i, r);
}
function Dd(e, t, n, r) {
  if (e.routes && e.getRoute && cd(t))
    try {
      let [i, a] = t.split(`#`, 2);
      U(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      U(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = Sa(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function Od(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = $i(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function kd() {
  let e = S(sw),
    t = jn()?.pathVariables;
  return e || t;
}
function Ad(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(ow)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function jd() {
  return !!ja(`ss-only-routes`);
}
function Md(e) {
  if (t === void 0) return;
  let n = t.location.href,
    r;
  try {
    r = new URL(e, n);
  } catch {
    return;
  }
  return ((r.hash = ``), r);
}
function Nd(e) {
  return Aa(`rewrite`, e)?.description === `external`;
}
function Pd() {
  if (!TC().checkServerSideRouter) return !1;
  if (dw === void 0) {
    let e = jd();
    ((fw = !e && fr() && hr() < 16.4), (dw = e || fw));
  }
  return dw;
}
function Fd(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: Nd(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === Sd() ? `client` : `server` };
}
async function Id(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (fw &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((fw = !1), Aa(`ss-only-routes`, t.headers.get(`server-timing`)) || (dw = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return Fd(t, e);
}
function Ld(e, t) {
  cw.has(e) && cw.set(e, t);
}
async function Rd(e) {
  await ar(lw);
  try {
    Ld(e, await Id(e));
  } catch {
    cw.delete(e);
  }
}
async function zd(e) {
  try {
    let t = await Id(e);
    return (Ld(e, t), t);
  } catch {
    return (Rd(e), { decision: `server` });
  }
}
function Bd(e) {
  if (!Pd()) return;
  let n = Md(e);
  if (!n || n.origin !== t.location.origin) return;
  let r = n.href;
  cw.has(r) || cw.set(r, zd(r));
}
function Vd(e) {
  let t = Md(e);
  if (!t) return;
  let n = cw.get(t.href);
  return n && !it(n) ? n : void 0;
}
async function Hd(e) {
  let t = Md(e);
  if (!t) return;
  let n = cw.get(t.href);
  if (n) return it(n) ? Promise.race([n, ar(uw).then(() => void 0)]) : n;
}
function Ud() {
  let e = P.connection || P.mozConnection || P.webkitConnection || {},
    t = P.deviceMemory && P.deviceMemory < hw,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? gw : _w));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: mw }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    Bd(e.navigationUrl);
    let { id: n, preload: a } = e,
      l = bw.get(n);
    if (!l?.size || yw.has(n)) return;
    if (s >= i) {
      setTimeout(() => c(e, t), pw);
      return;
    }
    (++s, yw.add(n));
    let u = a()?.catch(() => {});
    (o.unobserve(t), vw.delete(t));
    for (let e of l) (o.unobserve(e), vw.delete(e));
    (l.clear(), bw.delete(n), await u, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = vw.get(e);
      if (!n || yw.has(n.id)) {
        (o.unobserve(e), vw.delete(e));
        continue;
      }
      let r = n.id,
        i = bw.get(r),
        a = bw.get(r)?.size ?? 0;
      t.isIntersecting
        ? (i ? i.add(e) : bw.set(r, /* @__PURE__ */ new Set([e])), setTimeout(() => c(n, e), pw))
        : (i && i.delete(e), a <= 1 && bw.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!yw.has(n))
      return (
        vw.set(e, { id: n, preload: t, navigationUrl: r }),
        o.observe(e),
        () => {
          (vw.delete(e), o.unobserve(e));
        }
      );
  };
}
function Wd(e, t) {
  let n = cd(e),
    r = {
      href: e === `` || ld(e, n) ? e : `https://${e}`,
      target: Gd(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Or(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Gd(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Kd(e, t) {
  console.warn(
    ot(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function qd(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Kd(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return it(i) ? i.catch(Kd) : i;
  } catch (e) {
    Kd(e);
  }
}
async function Jd(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      U(a, `unresolvedSlug should be defined`);
      let o = qd(a, r, n),
        s = it(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function Yd(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = qd(o, r, n);
      it(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Xd() {
  let e = ir();
  return C((t, n, r, i = []) => Yd(t, n, r, e, i), [e]);
}
function Zd({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = ir();
  return C(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = ad(r) ? r : md(r);
      if (!ad(c))
        return qn(
          `published_site_click`,
          {
            ...s,
            href: o ? Qd(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (V(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (it(n) ? await n : n) ?? null;
        }
      }
      return qn(
        `published_site_click`,
        {
          ...s,
          href: o ? Qd(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function Qd(e) {
  try {
    let t = new URL(e, kt.document.baseURI);
    return t.origin === kt.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function $d(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function ef(e, t, n) {
  return async (r) => {
    let i = br(r),
      a = Cd(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    s
      ? (r.preventDefault(), n(c))
      : (await py({
          priority: `user-blocking`,
          ensureContinueBeforeUnload: !0,
          continueAfter: `paint`,
        }),
        c());
  };
}
function tf(e, t, n) {
  return async (r) => {
    let i = await nf(t);
    i.decision === `client` ? n(r) : rf(t ?? e, r, i.redirectUrl);
  };
}
async function nf(e) {
  return !e || !Pd()
    ? { decision: `client` }
    : Vd(e) || (Bd(e), (await Hd(e)) ?? { decision: `server` });
}
async function rf(e, n, r) {
  (await py({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    n?.(),
    t.location.assign(af(e, r)));
}
function af(e, n) {
  if (!n) return e;
  try {
    let r = new URL(e, t.location.href),
      i = new URL(n);
    return (r.hash && !i.hash && (i.hash = r.hash), i.href);
  } catch {
    return n;
  }
}
function of(e) {
  let n = Xi(e);
  if (n && t.location.pathname === n) {
    let e = new URL(t.location.href);
    return ((e.pathname = `${n}/`), e.href);
  }
  return t.location.href;
}
function sf(e, n, r) {
  if (n || t === void 0) return;
  let i = of(r),
    a;
  try {
    a = new URL(e, i);
  } catch {
    return;
  }
  let o = new URL(i);
  if (a.origin === o.origin && (a.pathname !== o.pathname || a.search !== o.search)) return a.href;
}
function cf(e, t, n, r, i, a, o, s) {
  if (!n) return Wd(e, r);
  let c = Dd(t, e, s, o);
  if (!c) return Wd(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Wd(e, r);
  let m = $i(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !Ct,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Gd(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = sf(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = tf(m, _, (e) =>
      $d(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      )
    );
  return {
    href: m,
    target: h,
    onClick: ef(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Ad(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function lf(e, t, n) {
  let r = uf(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (qe(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (qe(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function uf(e, t) {
  let n = H(e) ? e : void 0,
    r = n && !Ze(n),
    i = t && !Ze(t);
  if (r || i) return { ...n, ...t };
}
function df(e, t, n) {
  if (!(t && cr())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: ff } : { ...i, onTap: r }) : e;
}
function ff(e) {
  let t = Cd(e.target);
  t && t.getAttribute(`target`) !== `_blank` && e.preventDefault();
}
function pf(e, t, n, r, i, a) {
  let o = ad(e) ? e : md(e);
  if (!ad(o)) return V(e) ? Wd(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (it(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return $i(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function mf() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62)
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l;) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function hf() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, mf(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: Cw, difficulty: ww, tokenLength: Tw, maxTime: Ew }));
  });
}
function gf(e) {
  let t = /* @__PURE__ */ new Set();
  for (let n of e.elements)
    _f(n) && !n.disabled && n.name && (n.name.startsWith(`__framer`) || t.add(n.name));
  return Array.from(t);
}
function _f(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function vf(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function yf(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        }
      );
    }
  } catch {}
}
function bf() {
  let e = M.useContext(Bw),
    t = M.useMemo(
      () =>
        kw.map((e) => ({
          inputRef: M.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: M.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${Dw}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: M.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [jw.name]: e.originalName,
                [jw.value]: o,
                [jw.setAttribute]: e.methodsUsed.setAttribute,
                [jw.valueProperty]: e.methodsUsed.valueProperty,
                [jw.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [jw.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [jw.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${Dw}_${Mw.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${Dw}_${Mw.fieldCount}`, r.toString()),
          n.append(`${Dw}_${Mw.fieldFilledCount}`, i.toString()),
          n.append(`${Dw}_${Mw.hpVersion}`, Ow),
          n.append(`${Dw}_${Mw.siteId}`, e || ``),
          n.append(`${Dw}_${Mw.timeToSubmissionSinceModuleLoad}`, Nw()));
      },
      [t, e]
    ),
  };
}
function xf({ states: e }) {
  return /* @__PURE__ */ E(_, {
    children: e.map((e) => /* @__PURE__ */ E(Pw, { inputStateRef: e }, `hp_${e.originalName}`)),
  });
}
function Sf({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          Cf(e, t, n);
        })
      : Cf(e.pageviewEventData.current, t, n));
}
function Cf(e, t, n) {
  return qn(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function wf({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? zw : Rw;
    case `incomplete`:
      return e === `error` ? zw : Lw;
    case `submit`:
      return Fw;
    case `success`:
      return Iw;
    case `error`:
      return zw;
    default:
      st(t);
  }
}
function Tf({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function Ef(e) {
  e.preventDefault();
}
function Df(e, t) {
  let n = ld(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function Of(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (Of(t)) return !0;
  return !1;
}
async function kf(e, t, n, r) {
  let i = await hf();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": vf(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw Af(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function Af(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    H(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function jf({ EditorBar: e, fast: t = !1 }) {
  let n = S(Bw),
    r = l(Et, t ? Ww : Gw, Ot),
    i = TC(),
    a = s(() => {
      let e = {},
        t;
      for (t in i)
        i.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = i[t]);
      return e;
    }, [i]);
  return !e || !n || !r
    ? null
    : /* @__PURE__ */ E(Uw, {
        children: /* @__PURE__ */ E(b, {
          children: /* @__PURE__ */ E(e, { framerSiteId: n, features: a }),
        }),
      });
}
function Mf(e, t) {
  return e.replace(hy, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Nf({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = g(),
    i = g(),
    a = g(t),
    o = g(null);
  ((a.current = t),
    N(() => {
      e && ((r.current ??= /* @__PURE__ */ new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = m(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? /* @__PURE__ */ new Set(),
      getCurrentRoutePath: () =>
        a.current ? Ff(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? Ff(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && Pf(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return /* @__PURE__ */ E(Kw.Provider, { value: s, children: n });
}
async function Pf(e, t) {
  if (!Jn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    qn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Ff(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? Mf(r.path, n) : r.path) : ``;
}
function If(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Lf() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((qw = e.timeZone), (Jw = e.locale));
}
function Rf({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Ti(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: hi()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function zf(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = hi();
  Ti(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function Bf(e, t, n, r) {
  let i = hi();
  t.path &&
    i?.hash !== n.hash &&
    (r?.(),
    Ti(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      $i(t, n)
    ));
}
function Vf() {
  return hr() >= 17 ? Qw : Zw;
}
function Hf(e = Jf) {
  let n = (e) => {
    e.persisted && Zf();
  };
  fr() && (t.addEventListener(`pageshow`, n), (Xw = Date.now() - Vf()));
  let r = Uf(),
    i = Yf(e);
  return function () {
    (t.removeEventListener(`pageshow`, n), r(), i());
  };
}
function Uf() {
  let e = t.history.scrollRestoration;
  return (
    (t.history.scrollRestoration = `manual`),
    function () {
      t.history.scrollRestoration = e;
    }
  );
}
function Wf(e) {
  return H(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Gf() {
  return { x: t.scrollX, y: t.scrollY };
}
function Kf() {
  let e = hi();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (Wf(t)) return t;
}
function qf(e) {
  let t = hi();
  t && (Si({ ...t, scrollPosition: e }), fr() && (Xw = Date.now()));
}
function Jf(e, t = !1) {
  let n = Kf();
  if (!(n && n.x === e.x && n.y === e.y)) {
    if (fr() && !t) {
      let e = Vf();
      if (Date.now() - Xw < e) return;
    }
    qf(e);
  }
}
function Yf(e) {
  let n = () => {
      e(Gf());
    },
    r = () => {
      e(Gf(), !0);
    },
    i = () => {
      document.visibilityState === `hidden` && r();
    };
  (document.addEventListener(`visibilitychange`, i), t.addEventListener(`pagehide`, r));
  let a = () => {
    (document.removeEventListener(`visibilitychange`, i), t.removeEventListener(`pagehide`, r));
  };
  if (!(`onscrollend` in t)) {
    let e = Xf(n);
    return function () {
      (a(), e());
    };
  }
  return (
    t.addEventListener(`scrollend`, n),
    function () {
      (a(), t.removeEventListener(`scrollend`, n));
    }
  );
}
function Xf(e) {
  let n, r;
  function i() {
    (clearTimeout(n), (n = void 0), (r = void 0));
  }
  let a = () => {
      let t = r;
      (i(), t !== void 0 && gi(hi()) === t && e());
    },
    o = () => {
      let e = gi(hi());
      if (e === void 0) {
        i();
        return;
      }
      (clearTimeout(n), (r = e));
      let o = fr() ? Vf() : 100;
      n = t.setTimeout(a, o);
    };
  return (
    t.addEventListener(`scroll`, o),
    function () {
      (t.removeEventListener(`scroll`, o), i());
    }
  );
}
function Zf() {
  let e = Kf();
  return e ? (t.scrollTo(e.x, e.y), !0) : !1;
}
function Qf(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function $f(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Qf(n, t), !0);
}
function ep(e, n, r) {
  r !== `preserve-scroll-position` &&
    He.render(
      () => {
        (r === `restore-scroll-position` && Zf()) || $f(e, n) || t.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function tp(e, n) {
  He.read(() => {
    t.scrollY === 0 &&
      t.scrollX === 0 &&
      He.render(
        () => {
          Zf() || $f(e, n);
        },
        !1,
        !0
      );
  });
}
function np(e) {
  let t = TC().scrollRestoration,
    n = g(void 0),
    i = g(!1),
    a = !(!t || e),
    o = C(
      (e) => {
        ((n.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = C((e, t = !1) => {
      i.current || Jf(e, t);
    }, []),
    c = C(() => {
      a && (i.current = !0);
    }, [a]),
    l = C(() => n.current !== void 0 || i.current, []),
    u = C((e, t) => {
      let r = n.current;
      r &&
        r.routeId === e &&
        r.remountKey === t &&
        ((n.current = void 0), (i.current = !1), ep(r.hash, r.shouldSmoothScroll, r.behavior));
    }, []);
  return (
    r(() => {
      if (a) return Hf(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: u,
    }
  );
}
function rp({ currentRouteId: e, remountKey: n, scrollRestoration: i }) {
  let { commitNavigationScroll: a, usesCustomScrollRestoration: o } = i;
  return (
    r(() => {
      a(e, n);
    }),
    N(() => {
      o && tp(t.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function ip() {
  let [e, t] = M.useState(0);
  return [e, M.useCallback(() => t((e) => e + 1), [])];
}
function ap({ children: e, loadSnippetsModule: t }) {
  return /* @__PURE__ */ E(lT.Provider, { value: t, children: e });
}
function op() {
  return M.useContext(lT);
}
function sp(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function cp(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (U(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (U(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      st(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await lp(a.createContextualFragment(e), r, i));
}
async function lp(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = up(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await lp(r, e, null)));
  }
}
function up(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return dp(r, t, n);
}
function dp(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function fp(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = aT), (n = oT));
      break;
    case `bodyEnd`:
      ((t = sT), (n = cT));
      break;
    case `headStart`:
      ((t = tT), (n = nT));
      break;
    case `headEnd`:
      ((t = rT), (n = iT));
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function pp(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = sp(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function mp(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = fp(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = pp(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((hp(t, o), s)) {
      await cp(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = sp(e.id),
      u = `${c}\n${e.code}\n${l}`,
      d = _p(e.id, n, r, i);
    d ? await cp(u, d, `afterend`) : await cp(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function hp(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (gp(n) && n.remove(), (n = e));
  }
}
function gp(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function _p(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = pp(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function vp() {
  let e = op();
  return C(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById($w)?.dataset[eT] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await mp(t, n, r);
      }
    },
    [e]
  );
}
function yp(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function bp({
  siteCanonicalURL: e,
  activeLocale: n,
  contentLocale: r,
  currentRoute: i,
  currentRouteId: a,
  currentPathVariables: o,
  locales: s,
  collectionUtils: c,
}) {
  if (!e || !n || !r || !i) return;
  let l,
    u = [],
    d = s.find((e) => e.id === Dv),
    { path: f } = await Mr({
      currentLocale: n,
      nextLocale: r,
      defaultLocale: d,
      route: i,
      routeId: a,
      pathVariables: o,
      collectionUtils: c,
      preserveQueryParams: !1,
    });
  f && (l = yp(f, e));
  let p;
  for (let t of s) {
    if (i.includedLocales && !i.includedLocales.includes(t.id)) continue;
    let { path: r, isMissingInLocale: s } = await Mr({
      currentLocale: n,
      nextLocale: t,
      defaultLocale: d,
      route: i,
      routeId: a,
      pathVariables: o,
      collectionUtils: c,
      preserveQueryParams: !1,
    });
    if (!r || s) continue;
    let l = yp(r, e);
    (u.push({ href: l, hrefLang: t.code }), t.id === "default" && (p = l));
  }
  return (
    p && u.push({ href: p, hrefLang: `x-default` }),
    () => {
      (ui(l, t.location.href), di(u));
    }
  );
}
function xp({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = ir(),
    l = vp();
  N(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && ju(e);
        }),
        d)
      : ((e.id === t.id
          ? /* @__PURE__ */ Sr()
          : Mr({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === Dv),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: c,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!u) return;
            let f = d ? d.pathVariables : n;
            if ((await l(i, f ?? {}, t, a), !u)) return;
            let p = await bp({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: c,
            });
            u && p?.();
          })
          .catch((e) => {
            u && ju(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function Sp(e) {
  if (!e) return xt;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Cp(e) {
  let n = Mi(e),
    r = g(void 0),
    i = C(() => {
      (r.current?.abort(), (r.current = void 0));
    }, []);
  return {
    startNavigation: C(
      async (e, a, o, s = !0) => {
        i();
        let c = s ? new AbortController() : void 0;
        r.current = c;
        let l = c?.signal,
          u = In(l);
        if ((a.promise.finally(u), o === void 0)) return (e(l), a.promise);
        let d,
          f = new Promise((e, t) => {
            ((d = e), l?.addEventListener(`abort`, t));
          }).catch(xt);
        if ((n(f, c, o), e(l), await a.promise, l?.aborted)) return;
        let p = t.navigation?.transition;
        d();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        l?.aborted || Ny();
      },
      [i, n]
    ),
    cancelPendingNavigation: i,
  };
}
function wp({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: i,
  initialRoute: o,
  notFoundPage: c,
  collectionUtils: l,
  routes: d,
  initialLocaleId: f,
  initialCollectionItemId: p,
  initialContentLocaleIdOverride: m,
  locales: h = Ev,
  initialCanonicalPathVariables: _,
  preserveQueryParams: v = !1,
  LayoutTemplate: y,
  EditorBar: b,
  siteCanonicalURL: x,
  adaptLayoutToTextDirection: S,
}) {
  ma();
  let T = s(() => Ia(d), [d]),
    D = C((e) => d[T(e)], [d, T]);
  Ei({
    disabled: n,
    routeId: o,
    initialPathVariables: i,
    initialLocaleId: f,
    initialContentLocaleId: m,
    initialCanonicalPathVariables: _,
  });
  let O = ci(),
    [k, A] = ip(),
    j = pi(`framer-route-change`),
    M = s(() => (!TC().synchronousNavigationOnDesktop || !yr() ? u : (e) => e()), []),
    P = g(!0),
    F = g(),
    I = g(0),
    ee = g(o),
    te = g(i),
    ne = g(),
    L = g(f),
    re = np(n),
    { isNavigationCommitPending: ie, usesCustomScrollRestoration: ae } = re,
    { startNavigation: oe, cancelPendingNavigation: se } = Cp(ae),
    ce = ir(),
    le = re.scheduleScroll,
    ue = L.current,
    de = ee.current,
    fe = te.current,
    pe = d[de],
    R = pe?.path;
  if (!pe) throw Error(`Router cannot find route for ${de}`);
  let me = s(() => h.find(({ id: e }) => e === Dv), [h]),
    he = s(() => h.find(({ id: e }) => (ue ? e === ue : e === "default")) ?? null, [ue, h]),
    {
      contentLocale: z,
      currentCanonicalPathVariables: ge,
      pageExistsInCurrentLocale: _e,
      setRouteContentState: B,
    } = Ep({
      activeLocale: he,
      currentRoute: pe,
      initialCanonicalPathVariables: _,
      initialContentLocaleIdOverride: m,
      locales: h,
      routes: d,
    }),
    ve = he?.textDirection ?? `ltr`,
    ye = S ? ve : `ltr`;
  r(() => {
    S && document.documentElement.setAttribute(`dir`, ve);
  }, [ve, S]);
  let be = he?.code;
  r(() => {
    be && document.documentElement.setAttribute(`lang`, be);
  }, [be]);
  let xe = ki(),
    Se = s(
      () => ({
        activeLocale: he,
        contentLocale: z,
        locales: h,
        setLocale: async (e) => {
          let t = ++I.current,
            r = j({ localized: !0 });
          if ((await py({ priority: `user-blocking`, continueAfter: `paint` }), t !== I.current)) {
            r.ignore?.();
            return;
          }
          let i;
          V(e) ? (i = e) : H(e) && (i = e.id);
          let a = h.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = ee.current,
            s = d[o];
          if (!s) {
            r.ignore?.();
            return;
          }
          let c = Xi(x);
          try {
            let e = await xe({
              currentLocale: he,
              nextLocale: a,
              route: s,
              routeId: o,
              defaultLocale: me,
              pathVariables: te.current,
              preserveQueryParams: v,
              sitePrefix: c,
            });
            if (!e || t !== I.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && c + e.path,
              { contentLocaleId: l, canonicalPathVariables: u } = await Fr({
                activeLocale: a,
                defaultLocale: me,
                collectionUtilsCache: ce,
                locales: h,
                pathVariables: e.pathVariables,
                route: s,
                routeId: o,
              });
            if (t !== I.current) {
              r.ignore?.();
              return;
            }
            ((P.current = !1),
              (L.current = a.id),
              (F.current = i),
              (te.current = e.pathVariables),
              B(l, u));
            let d = s.path && e.pathVariables ? Mf(s.path, e.pathVariables) : s.path;
            (le({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              oe(
                () => {
                  O(o, o, () => M(A));
                },
                r,
                n
                  ? void 0
                  : i
                    ? () => {
                        Rf({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: l,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [he, me, z, n, A, h, v, B, d, le, oe, O, j, M, xe, ce, x]
    ),
    Ce = C(
      (e, t, n, r, i, a, o, s, c, l, u) => {
        P.current = !1;
        let f = ee.current,
          p = d[e],
          m = Fn(p, n),
          h = p?.path && i ? Mf(p.path, i) : p?.path;
        ((ee.current = e),
          (L.current = t),
          (te.current = i),
          (ne.current = void 0),
          B(a, o),
          (F.current = r),
          le({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: l ?? !1,
            behavior: s
              ? ae
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          s
            ? (se(), M(A))
            : oe(
                (t) => {
                  O(f, e, () => M(A), t);
                },
                c,
                u,
                !0
              ));
      },
      [A, B, d, ae, le, oe, O, M, se]
    );
  (Di(re, ee, Ce),
    N(() => {
      if (n) return;
      let e = () => {
        let e = hi(),
          n = t.location.hash === `` ? void 0 : t.location.hash.slice(1);
        (e && Fn(d[e.routeId], e.hash) === n) ||
          Ci({
            ...(e ||
              (vi() ?? { routeId: ee.current, pathVariables: te.current, localeId: L.current })),
            hash: n,
            scrollPosition: void 0,
          });
      };
      return (t.addEventListener(`hashchange`, e), () => t.removeEventListener(`hashchange`, e));
    }, [n, d]));
  let we = C(
      async (e, t, r, i, a) => {
        let o = T(e),
          s = d[o],
          c = fn(s?.page) ? s.page.getStatus() : void 0,
          l = c?.hasRendered,
          u = j({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          f = Sp(a);
        if (
          (py({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(f),
          await py({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = /* @__PURE__ */ new Set(),
            t = s?.path ?? `/`;
          for (let n of t.matchAll(hy)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let p = Fn(s, t),
          m = te.current,
          g = L.current;
        if (
          ne.current === void 0 &&
          If({ routeId: ee.current, pathVariables: m }, { routeId: o, pathVariables: r })
        ) {
          let e = ie();
          if (e) {
            let e = s?.path && r ? Mf(s.path, r) : s?.path;
            le({
              routeId: o,
              remountKey: `${g}${e}`,
              hash: p,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else se();
          (u.ignore?.(), !e && ae && ep(p, i, `scroll-to-hash-or-top`));
          let a = d[o];
          (!n &&
            a &&
            Bf(
              o,
              a,
              {
                currentRoutePath: a.path,
                currentRoutePathLocalized: a.pathLocalized,
                currentPathVariables: m,
                pathVariables: r,
                hash: t,
                localeId: g,
                preserveQueryParams: v,
                siteCanonicalURL: x,
              },
              f
            ),
            !e && !ae && ep(p, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!s) return;
        let _ = d[ee.current],
          y =
            Xi(x) +
            $i(s, {
              currentRoutePath: _?.path,
              currentRoutePathLocalized: _?.pathLocalized,
              currentPathVariables: m,
              hash: t,
              pathVariables: r,
              localeId: g,
              localeSlug: h.find(({ id: e }) => e === g)?.slug,
              preserveQueryParams: v,
              relative: !1,
              siteCanonicalURL: x,
            }),
          b = {};
        ne.current = b;
        let { contentLocaleId: S, canonicalPathVariables: C } = await Fr({
          activeLocale: he,
          defaultLocale: me,
          collectionUtilsCache: ce,
          locales: h,
          pathVariables: r,
          route: s,
          routeId: o,
        });
        ne.current === b &&
          Ce(
            o,
            g,
            t,
            y,
            r,
            S,
            C,
            !1,
            u,
            i,
            n
              ? void 0
              : () => {
                  (f(),
                    zf(o, s, {
                      historyPath: y,
                      currentRoutePath: _?.path,
                      hash: t,
                      pathVariables: r,
                      contentLocaleId: S,
                      canonicalPathVariables: C,
                      localeId: g,
                    }));
                }
          );
      },
      [se, T, d, h, Ce, n, v, x, j, ae, ie, le, ce, me, he]
    ),
    Te = F.current,
    Ee = Yw(pe, de, Te, fe, he, p),
    De = P.current;
  xp({
    activeLocale: he,
    contentLocale: z,
    currentPathVariables: fe,
    currentRoute: pe,
    currentRouteId: de,
    isInitialNavigation: De,
    locales: h,
    siteCanonicalURL: x,
  });
  let Oe = s(
      () => ({
        navigate: we,
        getRoute: D,
        currentRouteId: de,
        currentPathVariables: fe,
        currentCanonicalPathVariables: ge,
        routes: d,
        collectionUtils: l,
        preserveQueryParams: v,
        pageviewEventData: Ee,
        siteCanonicalURL: x,
        isInitialNavigation: De,
      }),
      [we, D, de, fe, ge, d, l, v, x, Ee, De]
    ),
    ke = R && fe ? Mf(R, fe) : R,
    Ae = `${ue}${ke}`,
    je = Fo(() => ({ ...e, display: `contents` }));
  return /* @__PURE__ */ E(On, {
    api: Oe,
    children: /* @__PURE__ */ E(vy.Provider, {
      value: Se,
      children: /* @__PURE__ */ E(yy.Provider, {
        value: ye,
        children: /* @__PURE__ */ E(GC, {
          children: /* @__PURE__ */ E(Gi, {
            routerRenderKey: k,
            currentRouteId: de,
            isNavigationCommitPending: re.isNavigationCommitPending,
            children: /* @__PURE__ */ w(Nf, {
              currentRoutePath: ke,
              routerAPI: Oe,
              children: [
                b && /* @__PURE__ */ E(jf, { EditorBar: b, fast: !0 }),
                /* @__PURE__ */ E(OC, {
                  children: /* @__PURE__ */ w(ku, {
                    children: [
                      /* @__PURE__ */ E(sb.Start, {}),
                      /* @__PURE__ */ E(rp, {
                        currentRouteId: de,
                        remountKey: Ae,
                        scrollRestoration: re,
                      }),
                      /* @__PURE__ */ E(lb, {
                        notFoundPage: c,
                        defaultPageStyle: e,
                        routerRenderKey: k,
                        children: /* @__PURE__ */ E(Tp, {
                          LayoutTemplate: y,
                          webPageId: pe?.abTestingVariantId ?? de,
                          style: e,
                          children: (t) =>
                            /* @__PURE__ */ E(
                              a,
                              { children: _e ? ya(pe.page, t ? je : e) : c && ya(c, e) },
                              Ae
                            ),
                        }),
                      }),
                      b && /* @__PURE__ */ E(jf, { EditorBar: b }),
                      /* @__PURE__ */ E(ua, {}),
                      /* @__PURE__ */ E(sb.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function Tp({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? /* @__PURE__ */ E(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function Ep({
  activeLocale: e,
  currentRoute: t,
  initialCanonicalPathVariables: n,
  initialContentLocaleIdOverride: r,
  locales: i,
  routes: a,
}) {
  let o = g(n),
    c = g(r),
    l = c.current,
    u = !e || !t.includedLocales || t.includedLocales.includes(e.id),
    d = s(() => {
      if (!e) return null;
      let n;
      return (
        (n = u
          ? (l ?? t?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(a).find((e) => e.path && Yy.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        n ? (i.find(({ id: e }) => e === n) ?? e) : e
      );
    }, [e, t, i, l, u, a]),
    f = C((e, t) => {
      ((c.current = e), (o.current = t));
    }, []);
  return {
    contentLocale: d,
    currentCanonicalPathVariables: o.current,
    pageExistsInCurrentLocale: u,
    setRouteContentState: f,
  };
}
function Dp(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function Op(e) {
  return typeof e == `object` && !!e;
}
function kp(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Op(r)) return;
    r = r[e];
  }
  return r;
}
function Ap(e) {
  return `${e.credentials}:${e.url}`;
}
function jp(e) {
  return V(e) && !Number.isNaN(Number(e));
}
function Mp(e, t) {
  switch (e) {
    case `string`:
      return V(t) || Ye(t);
    case `color`:
      return V(t);
    case `boolean`:
      return Je(t);
    case `number`:
      return Ye(t) || jp(t);
    case `link`:
    case `image`:
      return V(t) && ld(t, !1);
    default:
      return !1;
  }
}
function Np(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = kp(e.data, t.resultKeyPath);
  if (Qe(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Mp(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Pp(e) {
  return Math.max(e * 1e3, dT);
}
function Fp(e, t) {
  if (W.current() === W.canvas) return !1;
  let n = Pp(t);
  return Date.now() >= e + n;
}
function Ip({ client: e, children: t }) {
  return /* @__PURE__ */ E(_T.Provider, { value: e, children: t });
}
function Lp(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: d,
    isReducedMotion: f = !1,
    skipAnimations: p = !1,
    includeDataObserver: m = !1,
    localeId: h,
    locales: g,
    preserveQueryParams: _,
    EditorBar: v,
    defaultPageStyle: y,
    disableHistory: b,
    LayoutTemplate: x,
    siteCanonicalURL: S,
    adaptLayoutToTextDirection: C,
    loadSnippetsModule: w,
    initialCollectionItemId: T,
    initialContentLocaleIdOverride: D,
  } = e;
  if (
    (M.useEffect(() => {
      n || Rb.start();
    }, []),
    n)
  )
    return /* @__PURE__ */ E(Li, {
      value: r ?? `preview`,
      children: /* @__PURE__ */ E(Se, {
        reducedMotion: p ? `always` : f ? `user` : `never`,
        skipAnimations: p,
        children: /* @__PURE__ */ E(rr, {
          collectionUtils: l,
          children: /* @__PURE__ */ E(Ip, {
            client: u,
            children: /* @__PURE__ */ E(gT, {
              children: /* @__PURE__ */ E(Bw.Provider, {
                value: a,
                children: /* @__PURE__ */ E(ap, {
                  loadSnippetsModule: w,
                  children: /* @__PURE__ */ E(wp, {
                    initialRoute: i,
                    initialPathVariables: o,
                    initialCanonicalPathVariables: s,
                    initialLocaleId: h,
                    initialCollectionItemId: T,
                    initialContentLocaleIdOverride: D,
                    routes: c,
                    collectionUtils: l,
                    notFoundPage: d,
                    locales: g,
                    defaultPageStyle: y ?? { minHeight: `100vh`, width: `auto` },
                    preserveQueryParams: _,
                    EditorBar: v,
                    disableHistory: b,
                    LayoutTemplate: x,
                    siteCanonicalURL: S,
                    adaptLayoutToTextDirection: C,
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  {
    let e = m ? NS : M.Fragment;
    return /* @__PURE__ */ E(e, {
      children: /* @__PURE__ */ E(An, {
        routes: c,
        children: /* @__PURE__ */ E(bS, {
          children: M.isValidElement(t) ? t : M.createElement(t, { key: i }),
        }),
      }),
    });
  }
}
function Rp(e, t) {
  let n = kn(),
    { activeLocale: r } = Ir(),
    i = Xd();
  return zi(() => {
    let t = [],
      a = (e) => {
        if (e)
          return V(e) || ad(e)
            ? pf(e, n, void 0, void 0, r, o)
            : pf(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function zp(e) {
  return {
    trace(...t) {
      return $b.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return $b.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return $b.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return $b.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return $b.getLogger(e)?.error(...t);
    },
    get enabled() {
      return $b.getLogger(e) !== void 0;
    },
  };
}
function Bp() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function Vp() {
  var e =
      typeof SuppressedError == `function`
        ? SuppressedError
        : function (e, t) {
            var n = Error();
            return ((n.name = `SuppressedError`), (n.error = e), (n.suppressed = t), n);
          },
    t = {},
    n = [];
  function r(e, t) {
    if (t != null) {
      if (Object(t) !== t)
        throw TypeError(
          `using declarations can only be used with objects, functions, null, or undefined.`
        );
      if (e) var r = t[Symbol.asyncDispose || Symbol.for(`Symbol.asyncDispose`)];
      if (r === void 0 && ((r = t[Symbol.dispose || Symbol.for(`Symbol.dispose`)]), e)) var i = r;
      if (typeof r != `function`) throw TypeError(`Object is not disposable.`);
      (i &&
        (r = function () {
          try {
            i.call(t);
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        n.push({ v: t, d: r, a: e }));
    } else e && n.push({ d: t, a: e });
    return t;
  }
  return {
    e: t,
    u: r.bind(null, !1),
    a: r.bind(null, !0),
    d: function () {
      var r,
        i = this.e,
        a = 0;
      function o() {
        for (; (r = n.pop());)
          try {
            if (!r.a && a === 1) return ((a = 0), n.push(r), Promise.resolve().then(o));
            if (r.d) {
              var e = r.d.call(r.v);
              if (r.a) return ((a |= 2), Promise.resolve(e).then(o, s));
            } else a |= 1;
          } catch (e) {
            return s(e);
          }
        if (a === 1) return i === t ? Promise.resolve() : Promise.reject(i);
        if (i !== t) throw i;
      }
      function s(n) {
        return ((i = i === t ? n : new e(n, i)), o());
      }
      return o();
    },
  };
}
function Hp() {
  return yT.priority;
}
function Up(e) {
  let t = yT;
  return (
    (yT = e),
    {
      [Bp()]() {
        yT = t;
      },
    }
  );
}
function Wp(e = yT.priority, t = yT.canYield) {
  if (!t || e === void 0) return;
  let n = Cr(e);
  return py({ batch: !0, priority: n });
}
function Gp(e) {
  try {
    var t = Vp();
    t.u(Up({ priority: yT.priority, canYield: !1 }));
    let n = e.next();
    return (U(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    t.e = e;
  } finally {
    t.d();
  }
}
async function Kp(e, t, n = yT.priority, r = yT.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0)
    try {
      var o = Vp();
      (o.u(Up(i)), (a = e.next()));
    } catch (e) {
      o.e = e;
    } finally {
      o.d();
    }
  for (; !a.done;)
    try {
      var s = Vp();
      let t = await a.value,
        o = Wp(n, r);
      (o && (await o), s.u(Up(i)), (a = e.next(t)));
    } catch (e) {
      s.e = e;
    } finally {
      s.d();
    }
  return a.value;
}
function qp(e, t = yT.priority, n = yT.canYield) {
  try {
    var r = Vp();
    r.u(Up({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : Kp(e, i, t, n);
  } catch (e) {
    r.e = e;
  } finally {
    r.d();
  }
}
function* Jp(e, t = yT.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (nt(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Kp(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Yp(e, t = yT.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = Wp(t);
    r && (yield r);
    let o = e[a];
    if (nt(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Kp(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function Xp(e) {
  return $p(e) || nm(e);
}
function Zp(e) {
  return Xe(e) && e.every(H);
}
function Qp(e) {
  return H(e) && qe(e.read) && qe(e.preload);
}
function $p(e) {
  return Zp(e) || Qp(e);
}
function em(e) {
  return H(e) && H(e.schema);
}
function tm(e) {
  return H(e) && H(e.collectionByLocaleId);
}
function nm(e) {
  return em(e) || tm(e);
}
async function rm(e, t) {
  return Qp(e) ? (await e.preload(t), e.read(t)) : e;
}
function im(e) {
  return e.includes(CT);
}
function am(e) {
  if (!nm(e) || !e.id) return;
  let t = xT.get(e.id);
  if (!t) return (xT.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function om(e) {
  let t = am(e);
  if (t) return t;
  let n = ST.get(e);
  if (n) return n;
  let r = `${CT}${Math.random().toString(16).slice(2)}`;
  return (ST.set(e, r), r);
}
function sm(e, t) {
  let n = e.from;
  for (; n?.type === `LeftJoin`;) n = n.left;
  if (n?.type === `Collection`) return cm(n.data, t);
}
function cm(e, t) {
  if ($p(e)) {
    let n = om(e) + (t?.id ?? `default`),
      r = wT.get(n);
    if (r) return r;
    let i = new bT(e, t);
    return (wT.set(n, i), i);
  }
  if (em(e)) return e;
  if (tm(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  st(e, `Unsupported collection type`);
}
function lm(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Rm(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function um(e, t) {
  return e?.type === `array`
    ? { type: `array`, value: e.value.map((e) => TT.cast(e, t.definition)) }
    : null;
}
function dm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function fm(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function pm(e) {
  return fm(e)?.value ?? !1;
}
function mm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function hm(e) {
  return e?.type === `color` ? e : null;
}
function gm(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function _m(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return tt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function vm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ym(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function bm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function xm(e) {
  return e?.type === `file` ? e : null;
}
function Sm(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Cm(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function wm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Tm(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Em(e) {
  return Tm(e)?.value ?? null;
}
function Dm(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = Rm(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function Om(e, t) {
  if (e?.type === `object`) {
    let n = {},
      r = Object.entries(t.definitions);
    for (let [t, i] of r) {
      let r = e.value[t] ?? null;
      n[t] = TT.cast(r, i);
    }
    return { type: `object`, value: n };
  }
  return null;
}
function km(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Am(e) {
  return e?.type === `responsiveimage` ? e : null;
}
function jm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Mm(e) {
  return e?.type === `richtext` ? e : null;
}
function Nm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Pm(e) {
  return e?.type === `vectorsetitem` ? e : null;
}
function Fm(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Im(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Lm(e) {
  return Im(e)?.value ?? null;
}
function Rm(e, t, n) {
  if ($e(e) || $e(t)) return (U(e === t), 0);
  switch (e.type) {
    case `array`:
      return (U(e.type === t.type), lm(e, t, n));
    case `boolean`:
      return (U(e.type === t.type), dm(e, t));
    case `color`:
      return (U(e.type === t.type), mm(e, t));
    case `date`:
      return (U(e.type === t.type), gm(e, t));
    case `enum`:
      return (U(e.type === t.type), vm(e, t));
    case `file`:
      return (U(e.type === t.type), bm(e, t));
    case `link`:
      return (U(e.type === t.type), Sm(e, t));
    case `number`:
      return (U(e.type === t.type), wm(e, t));
    case `object`:
      return (U(e.type === t.type), Dm(e, t, n));
    case `responsiveimage`:
      return (U(e.type === t.type), km(e, t));
    case `richtext`:
      return (U(e.type === t.type), jm(e, t));
    case `vectorsetitem`:
      return (U(e.type === t.type), Nm(e, t));
    case `string`:
      return (U(e.type === t.type), Fm(e, t, n));
    default:
      st(e);
  }
}
function zm(e) {
  return e;
}
function Bm(e) {
  return qe(e.getHash);
}
function Y(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    H(r) && Bm(r) ? (n += r.getHash()) : (n += JSON.stringify(r) ?? ``);
  }
  return zm(`${n})`);
}
function Vm(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function Hm(e) {
  if (e !== void 0) return Cr(e);
}
function Um(e, t) {
  return { collectionId: om(e), pointer: t };
}
function Wm(e) {
  return H(e) && V(e.collectionId);
}
function Gm(e, t) {
  return { collectionId: om(e), pointer: t };
}
function Km(e) {
  return H(e) && V(e.collectionId);
}
function qm(e, t) {
  let n = /* @__PURE__ */ new Map();
  function r(e) {
    if (H(e)) {
      if (e.type === `Collection` && Xp(e.data)) {
        let r = cm(e.data, t),
          i = om(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    } else if (Xe(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Jm(e) {
  return e;
}
function Ym(e) {
  return e;
}
function Xm(e) {
  return e;
}
function Zm() {
  return 25;
}
function Qm() {
  return 12500;
}
function $m(e) {
  return Array(e).fill({ type: `All` });
}
function eh(e) {
  return e;
}
function th(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new NE(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function nh(e) {
  let t = /* @__PURE__ */ new Set();
  if (!e) return t;
  th(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (th(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function rh(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) rh(n, t);
      return;
    case `object`:
      for (let n in e.value) rh(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function ih(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function ah(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function oh(e) {
  return `${e.functionName}(${e.arguments.map((e) => dh(e)).join(`, `)})`;
}
function sh(e) {
  let t = `CASE`;
  e.value && (t += ` ${dh(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${dh(n.when)} THEN ${dh(n.then)}`;
  return (e.else && (t += ` ELSE ${dh(e.else)}`), (t += ` END`), t);
}
function ch(e) {
  let t = dh(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function lh(e) {
  let t = dh(e.left),
    n = dh(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function uh(e) {
  return `CAST(${dh(e.value)} as ${e.dataType})`;
}
function dh(e) {
  switch (e.type) {
    case `Identifier`:
      return ih(e);
    case `LiteralValue`:
      return ah(e);
    case `FunctionCall`:
      return oh(e);
    case `Case`:
      return sh(e);
    case `UnaryOperation`:
      return ch(e);
    case `BinaryOperation`:
      return lh(e);
    case `TypeCast`:
      return uh(e);
    case `Select`:
      return `${gh(e)}`;
    default:
      st(e);
  }
}
function fh(e) {
  return em(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function ph(e) {
  let t = `${mh(e.left)} LEFT JOIN ${mh(e.right)}`;
  return (e.constraint && (t += ` ON ${dh(e.constraint)}`), t);
}
function mh(e) {
  switch (e.type) {
    case `Collection`:
      return fh(e);
    case `LeftJoin`:
      return ph(e);
    default:
      st(e);
  }
}
function hh(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `\n${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `\n\t${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function gh(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = dh(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${mh(e.from)}`),
    e.where && (t += ` WHERE ${dh(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${dh(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${dh(e.limit)}`),
    e.offset && (t += ` OFFSET ${dh(e.offset)}`),
    hh(t)
  );
}
function _h(e) {
  return H(e) && e.type === `Collection`;
}
function vh(e, t) {
  return _h(t) && Xp(t.data) ? om(t.data) : t;
}
function yh(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, vh) + n;
}
function bh(e) {
  if (t === void 0) return;
  let n = hi()?.paginationInfo?.[e]?.currentPage;
  return typeof n == `number` ? n : void 0;
}
function xh(e, t) {
  return e ? 1 : (bh(t) ?? 1);
}
function Sh(e, t, n, r = !1) {
  return wh(Ch(n, r), Math.ceil(e / t));
}
function Ch(e, t) {
  let { isInitialNavigation: r = !0 } = kn(),
    [i, a] = n(),
    o = bh(e),
    s = g(r ? o : void 0),
    [c, l] = m(() => xh(r, e)),
    d = g(c);
  N(
    function () {
      if (!r) return;
      let e = s.current;
      e === void 0 || e === d.current ? (s.current = void 0) : ((d.current = e), u(() => l(e)));
    },
    [r]
  );
  let f = C(
      (t) => {
        let n = s.current;
        (n === void 0 || n === d.current) && ((s.current = void 0), ji(e, t));
      },
      [e]
    ),
    p = sd(),
    h = g(!1);
  return {
    currentPage: c,
    isLoading: i,
    loadNextPage: C(
      async (e) => {
        if (!p && !(d.current >= e) && !h.current) {
          h.current = !0;
          try {
            if ((await py({ priority: `user-blocking`, continueAfter: `paint` }), d.current >= e))
              return;
            let n = Math.min(d.current + 1, e);
            ((d.current = n),
              (t ? a : u)(() => {
                l(n);
              }));
          } finally {
            h.current = !1;
          }
        }
      },
      [t, p]
    ),
    persistToHistory: f,
  };
}
function wh({ currentPage: e, isLoading: t, loadNextPage: n, persistToHistory: r }, i) {
  let a = s(() => ({ currentPage: e, hasNextPage: e < i, totalPages: i, isLoading: t }), [e, i, t]);
  return (
    zy(() => {
      r(a);
    }, [r, a]),
    { paginationInfo: a, loadMore: C(() => n(i), [n, i]) }
  );
}
function Th(e) {
  let { activeLocale: t } = Ir();
  return ZE.get(e, t).use();
}
function Eh(e) {
  return Th({ ...e, select: [] }).length;
}
function Dh(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(Qe(e) || H(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function Oh(e) {
  let t = g(e);
  return (
    c(() => {
      t.current = e;
    }, [e]),
    Bi((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function kh(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function Ah() {
  return /* @__PURE__ */ new Set();
}
function jh(e) {
  let t = Fo(Ah),
    n = Fo(Ah);
  return (
    Ic(() => () => kh(n, t)),
    N(() => () => kh(n, t), []),
    N(() => {
      kh(n, t);
    }, [e]),
    g({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Mh(e, t, n) {
  return M.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Nh(e) {
  for (let [t, n] of Object.entries(e)) if (kt.matchMedia(n).matches) return t;
}
function Ph(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && kt.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Fh(e, t, n = !0) {
  let r = S(_S),
    i = zo(),
    a = ct(),
    o = mr() && (!i || a),
    s = g(o ? (Nh(t) ?? e) : e),
    c = g(n && r ? e : s.current),
    l = Ws(),
    d = ae(),
    f = C(
      (e) => {
        if (e !== s.current || e !== c.current) {
          function t() {
            ((s.current = c.current = e),
              u(() => {
                l();
              }));
          }
          i
            ? t()
            : d(() => {
                t();
              });
        }
      },
      [d, l, i]
    );
  return (
    zy(() => {
      i && f(a ? (Nh(t) ?? e) : e);
    }, [e, a, i, t, f]),
    zy(() => {
      n && r === !0 && f(s.current);
    }, []),
    N(() => {
      if (!o || a) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = kt.matchMedia(r),
          i = (e) => {
            e.matches && f(n);
          };
        (Ih(t, i), e.push([t, i]));
      }
      let n = Nh(t);
      return (n && f(n), () => e.forEach(([e, t]) => Lh(e, t)));
    }, [a, t, f, o]),
    [s.current, c.current]
  );
}
function Ih(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Lh(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Rh(e) {
  setTimeout(e, 1);
}
function zh(e) {
  let t = /* @__PURE__ */ new Set(),
    n = Ph(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Bh(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (wt ? kt.requestIdleCallback : Rh)(() => {
    document.querySelector(QE)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Bh(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Vh(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Bh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Vh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Hh(e) {
  return H(e) && $E in e && e.page !== void 0;
}
function Uh(e, t, n) {
  let { paginationInfo: r, loadMore: i } = Sh(Eh(e), t, n, !0);
  return {
    paginatedQuery: s(() => {
      let n = t * r.currentPage;
      if (e.limit) {
        if (e.limit.type !== `LiteralValue` || typeof e.limit.value != `number`)
          throw Error(`Unexpected type for query limit`);
        n = Math.min(n, e.limit.value);
      }
      return { ...e, limit: { type: `LiteralValue`, value: n } };
    }, [e, t, r]),
    paginationInfo: r,
    loadMore: i,
  };
}
function Wh(e, t) {
  return `${e}-${t}`;
}
function Gh(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (U(r !== void 0, `nextVariant should be defined`), r);
}
function Kh(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function qh(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Jh(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Yh(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Xh() {
  let e = g(),
    t = g(),
    n = C(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    N(
      () => () => {
        n();
      },
      [n]
    ),
    C(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function Zh() {
  let e = g(),
    t = g(!1),
    n = g(),
    r = S(eS);
  return (
    N(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    C(
      (i, a) => {
        if (!a?.current || t.current) {
          i();
          return;
        }
        if (((n.current = i), e.current)) return;
        let o = !1;
        e.current = Oc(r, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [r]
    )
  );
}
function Qh(e) {
  let t = Xh(),
    n = Zh();
  return C(
    (r, i = !1) => {
      Ct ? r() : t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function $h() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (nD = () => {
        (e(), (t = void 0));
      }));
  });
}
function eg(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (tD = $h()));
}
function tg() {
  (performance.mark(`click-received-listener`), (tD = void 0), nD?.(), (nD = void 0));
}
function ng(e = !1) {
  N(() => {
    e &&
      (document.addEventListener(`pointerup`, eg, !0),
      document.__proto__.addEventListener.call(document, `click`, tg, !0));
  }, [e]);
}
function rg({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: c,
}) {
  let l = Ws(),
    d = sd(),
    f = Fo(() => new Set(i));
  ng(TC().yieldOnTap);
  let p = Qh(c),
    m = g({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Yh(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    h = C((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = Yh(e, a, f),
        s = qh(i?.[o], t, n, !1, r);
      return [o, s ? Wh(o, s) : void 0];
    }, []),
    _ = C(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = h(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let c = TC().yieldOnTap && m.current.isPressedHasUpdated;
        (c &&
          tD &&
          (performance.mark(`wait-for-tap-start`),
          await tD,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await py({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: d,
          isPressed: f,
          isHoveredHasUpdated: g,
          isPressedHasUpdated: _,
        } = m.current;
        d || g || f || _ ? u(l) : p(() => u(l), i);
      },
      [h, l, p]
    ),
    v = C(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !d && TC().disableHoverOnMobile && !Yu() && (e = !1);
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_, d]
    ),
    y = C(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = m.current,
          o = e === eD ? Gh(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = C(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => u(l), !0));
    }, [l, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = h(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: O,
      loadedBaseVariant: k,
    } = m.current,
    A = Mh(m.current.baseVariant, m.current.gestureVariant, a);
  return s(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !O && !d && !!t && !k[x],
      r = n ? Wh(x, `loading`) : S;
    r && e.push(r);
    let i = T?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: Kh(m.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: A,
        gestureHandlers: a,
        classNames: Ll(Jh(x, o), qh(i, E, D, n, O)),
      }
    );
  }, [x, S, E, D, k, A, y, w, T, v, b, o]);
}
function ig(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (TC().disableCustomCode) return e;
  if (!Nu()) return og(e, r, t, n);
  let a = ag(e, r, t, n),
    o = !1;
  function s(r, s) {
    let c = Lu();
    if (Gu(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? /* @__PURE__ */ E(Ly.Provider, {
            value: n,
            children: /* @__PURE__ */ E(Pu, {
              getErrorMessage: Hu.bind(null, t, n),
              fallback: /* @__PURE__ */ E(e, { ...r, ref: s }),
              children: /* @__PURE__ */ E(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Mu(a.error), Mu(Hu(t, n)), ju(a.error), !0)),
          /* @__PURE__ */ E(e, { ...r, ref: s }));
    if (a.status === `success`)
      return /* @__PURE__ */ E(Ly.Provider, {
        value: n,
        children: /* @__PURE__ */ E(a.Component, { ...r, ref: s }),
      });
    throw a.error;
  }
  return M.forwardRef(s);
}
function ag(e, t, n, r) {
  try {
    return { status: `success`, Component: og(e, t, n, r) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function og(e, t, n, r) {
  let i = rD.get(t);
  i || ((i = /* @__PURE__ */ new WeakMap()), rD.set(t, i));
  let a = i.get(e);
  a || ((a = /* @__PURE__ */ new Map()), i.set(e, a));
  let o = `${n}:${r}`;
  if (a.has(o)) return a.get(o);
  let s = t(e);
  return (a.set(o, s), s);
}
function sg(e) {
  let t = [];
  return (
    i.forEach(e, (e) => {
      T(e) && e.type === a ? t.push(...sg(e.props.children)) : e && t.push(e);
    }),
    t
  );
}
function cg(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function lg(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = cg(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[Ee(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function ug(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = cg(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[Ee(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function dg() {
  let e = S(iD);
  return (Tg(e, `useTicker must be used within a Ticker component`), e);
}
function fg() {
  let e = S(aD);
  return (Tg(e, `useTickerItem must be used within a TickerItem`), e);
}
function pg(e, n) {
  return (n?.offsetWidth ?? t.innerWidth) - (e.offsetLeft + e.offsetWidth);
}
function mg(e, t) {
  return e === `y` ? cD : t === `ltr` ? sD : lD;
}
function hg({
  children: e,
  offset: t,
  axis: n,
  listSize: r = 0,
  numItems: i,
  itemIndex: a,
  positionInSet: o,
  cloneIndex: s,
  bounds: c,
  alignItems: l,
  reproject: u = !0,
  size: d = `auto`,
  safeMargin: f,
}) {
  let { start: p, end: m } = c,
    { visibleLength: h, direction: g, inset: _ } = dg(),
    { sign: v } = mg(n, g),
    y = R(() => {
      if (!u) return 0;
      let e = t.get();
      if ((!p && !m) || !r) return 0;
      if (e * v + c.end <= -_ - f) return r * v;
      if (f > 0) {
        let t = h - f - _;
        if (e * v + c.start >= t) return -r * v;
      }
      return 0;
    }),
    b = R(() => {
      let e = t.get(),
        n = y.get();
      return (!p && !m) || !r ? 0 : e * v + p + n * v;
    }),
    x =
      s === void 0
        ? {
            "aria-hidden": !1,
            "aria-posinset": o ?? a + 1,
            "aria-setsize": i,
            "data-item-index": a,
          }
        : { "aria-hidden": !0 },
    S = d === `fill`,
    C = l === `stretch` ? `100%` : `fit-content`,
    w = {
      className: s === void 0 ? `ticker-item` : `clone-item`,
      style: {
        flexGrow: 0,
        flexShrink: 0,
        position: `relative`,
        flexBasis: d === `fill` ? `100%` : void 0,
        display: S ? `grid` : void 0,
        gridTemplateColumns: S ? `1fr` : void 0,
        gridTemplateRows: S ? `1fr` : void 0,
        minWidth: S ? 0 : void 0,
        minHeight: S ? 0 : void 0,
        height: n === `x` ? C : void 0,
        width: n === `y` ? C : void 0,
        x: n === `x` ? y : 0,
        y: n === `y` ? y : 0,
      },
      ...x,
    };
  return /* @__PURE__ */ E(aD.Provider, {
    value: { start: p, end: m, offset: b, projection: y, itemIndex: a, cloneIndex: s, props: w },
    children: d === `manual` ? e : /* @__PURE__ */ E(gg, { children: e }),
  });
}
function gg({ children: e }) {
  let { props: t } = fg();
  return /* @__PURE__ */ E(z.li, { ...t, children: e });
}
function _g(e, n, r, i, a) {
  let o = g(!1);
  N(() => {
    let s = e.current;
    if (!s) return;
    let c = !1,
      l = new AbortController(),
      u = { signal: l.signal },
      d = { ...u, capture: !0 },
      f = n === `x` ? `scrollLeft` : `scrollTop`,
      p = n === `x` ? `offsetLeft` : `offsetTop`,
      m = n === `x` ? `ArrowLeft` : `ArrowUp`,
      h = n === `x` ? `ArrowRight` : `ArrowDown`,
      g = [],
      _ = 0,
      v = () => {
        let e = g[_];
        e &&
          (e.focus({ preventScroll: !0 }),
          r.set(-e[p]),
          (s[f] = 0),
          He.render(() => {
            s[f] = 0;
          }));
      },
      y = (e) => {
        if (e.key === `Tab`) {
          (e.preventDefault(), S());
          let t = Array.from(
            document.querySelectorAll(
              `a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`
            )
          ).filter(yg);
          t.sort(vg);
          let n = t[e.shiftKey ? 0 : t.length - 1],
            r = e.shiftKey ? t.length - 1 : 0;
          if (s.contains(n)) {
            t[r].focus();
            return;
          }
          {
            let n = t.indexOf(g[_]),
              r = e.shiftKey ? -1 : 1;
            for (let e = n; e < t.length && e >= 0; e += r) {
              let n = t[e];
              if (!s.contains(n)) {
                n.focus();
                return;
              }
            }
          }
        } else (e.key === m ? _-- : e.key === h && _++, (_ = Ee(0, g.length, _)), v());
      },
      b = () => {
        o.current ||
          ((g = Array.from(
            s.querySelectorAll(
              `.ticker-item a, .ticker-item button, .ticker-item input, .ticker-item textarea, .ticker-item select, .ticker-item [tabindex]:not([tabindex="-1"]), .ticker-item [contenteditable="true"]`
            )
          ).filter(yg)),
          (_ = 0),
          g.length &&
            (a(!0),
            (o.current = !0),
            v(),
            t.addEventListener(`focus`, x, d),
            t.addEventListener(`blur`, x, d),
            s.addEventListener(`keydown`, y, u)));
      },
      x = (e) => {
        (!e.target || !(e.target instanceof HTMLElement) || !s.contains(e.target)) && S();
      },
      S = () => {
        o.current &&
          ((o.current = !1),
          a(!1),
          i.set(r.get()),
          t.removeEventListener(`focus`, x),
          t.removeEventListener(`blur`, x),
          s.removeEventListener(`keydown`, y));
      },
      C = (e) => {
        let { target: t } = e;
        yg(t) && (o.current || b());
      },
      w = () => {
        c || ((c = !0), s.addEventListener(`focus`, C, d), t.addEventListener(`pointermove`, T, u));
      },
      T = () => {
        c &&
          ((c = !1),
          s.removeEventListener(`focus`, C, !0),
          t.removeEventListener(`pointermove`, T, u));
      };
    return (
      t.addEventListener(`keydown`, w, u),
      s.addEventListener(
        `pointerdown`,
        (e) => {
          let t = e.target.closest(`[aria-hidden="true"]`);
          t && t.removeAttribute(`aria-hidden`);
        },
        u
      ),
      s.addEventListener(
        `scroll`,
        () => {
          ((s.scrollLeft = 0), (s.scrollTop = 0));
        },
        u
      ),
      () => {
        (l.abort(), S());
      }
    );
  }, []);
}
function vg(e, t) {
  return e.tabIndex >= 1 && t.tabIndex >= 1
    ? e.tabIndex - t.tabIndex
    : e.tabIndex >= 1 && t.tabIndex <= 0
      ? -1
      : +(t.tabIndex >= 1 && e.tabIndex <= 0);
}
function yg(e) {
  return e instanceof HTMLElement;
}
function bg(e) {
  return e.end - e.start;
}
function xg(e) {
  return e[e.length - 1].end - e[0].start;
}
function Sg(e, t, n) {
  let r = xg(t),
    i = Math.max(...t.map(bg)),
    a = 0,
    o = 0;
  for (; o < e;) ((o = (r + n) * (a + 1) - i), a++);
  return Math.max(a - 1, 0);
}
function Cg(
  {
    items: e,
    velocity: n = 50,
    hoverFactor: r = 1,
    gap: i = 10,
    axis: a = `x`,
    align: o = `center`,
    offset: c,
    isStatic: l = !1,
    itemSize: u = `auto`,
    overflow: d = !1,
    loop: f = !0,
    children: p,
    as: h = `div`,
    snap: _,
    safeMargin: v = 0,
    fade: y = 0,
    fadeTransition: b,
    pageTransition: x,
    ...S
  },
  w
) {
  let T = g(null),
    D = Ge(w, T),
    O = g(null),
    [k, A] = m({
      direction: `ltr`,
      visibleLength: 0,
      inset: 0,
      totalItemLength: 0,
      containerLength: 0,
      itemPositions: [],
      itemBounds: [],
      itemSetPositions: [],
      isMeasured: !1,
      maxInset: null,
    }),
    j = uD[o] || o,
    { sign: M } = mg(a, k.direction);
  if (l) {
    let t = B(0),
      n = s(() => ({ ...k, gap: i, clampOffset: ne, offset: t, renderedOffset: t }), [k, i, t]);
    return /* @__PURE__ */ E(iD.Provider, {
      value: n,
      children: /* @__PURE__ */ E(wg, {
        containerProps: S,
        containerRef: D,
        gap: i,
        axis: a,
        alignItems: j,
        offset: t,
        renderedOffset: t,
        items: e,
        itemSize: u,
        state: k,
        overflow: d,
        safeMargin: v,
        isStatic: !0,
        as: h,
        fade: y,
        sign: M,
        children: p,
      }),
    });
  }
  let [N, P] = m(!1),
    F = B(1),
    I = B(0);
  c ??= I;
  let te = R(() =>
      k.direction === `rtl` && a === `x`
        ? Ee(k.totalItemLength + i + k.inset, k.inset, c.get())
        : Ee(-k.totalItemLength - i - k.inset, -k.inset, c.get())
    ),
    L = B(0),
    re = N ? L : f ? te : c,
    ie = ee(T, { margin: `100px` }),
    ae = ce(),
    oe = ie && ae,
    le = se(),
    ue = () => {
      if (!T.current || !O.current) return;
      let e = t.getComputedStyle(T.current).direction,
        { measureItem: n, lengthProp: r, viewportLengthProp: i, getCumulativeInset: o } = mg(a, e),
        s = a === `x` ? `paddingLeft` : `paddingTop`,
        c = a === `x` ? `paddingRight` : `paddingBottom`,
        l = T.current,
        u = O.current.querySelectorAll(`.ticker-item`);
      if (!u.length) return;
      let p = [],
        m = [],
        h = [];
      for (let e = 0; e < u.length; e++) {
        let t = u[e],
          r = Number(t.dataset.itemIndex),
          i = n(t, l);
        (p.push(i), (m[r] = i), (h[r] = p.length));
      }
      let g = Math.min(l[r], t[i]),
        _ = d ? t[i] : g;
      v > 0 && (_ += v * 2);
      let y = xg(p),
        b = t.getComputedStyle(l),
        x = parseInt(b[s] ?? 0),
        S = parseInt(b[c] ?? 0),
        C = d ? o(u[0]) : x,
        w = t[i];
      d && C > w && ((C = w), (_ += w + g));
      let E = f === !1 ? Math.max(0, y - g + x + S) : null;
      A((t) =>
        e === t.direction &&
        _ === t.visibleLength &&
        y === t.totalItemLength &&
        C === t.inset &&
        g === t.containerLength &&
        E === t.maxInset &&
        p.length === t.itemPositions.length &&
        !m.some((e, n) => {
          let r = t.itemBounds[n];
          return e?.start !== r?.start || e?.end !== r?.end;
        })
          ? t
          : {
              direction: e,
              visibleLength: _,
              itemPositions: p,
              itemBounds: m,
              itemSetPositions: h,
              totalItemLength: y,
              inset: C,
              containerLength: g,
              maxInset: E,
              isMeasured: !0,
            }
      );
    };
  ge(() => {
    if (!oe || !T.current) return;
    ue();
    let e = d ? Me(ue) : void 0,
      t = Me(T.current, ue);
    return () => {
      (e?.(), t());
    };
  }, [e, oe, d]);
  let de = k.totalItemLength > 0;
  me(
    de && oe && c === I && !le
      ? (e, t) => {
          let r = (t / 1e3) * (n * M * F.get());
          c.set(c.get() - r);
        }
      : ne
  );
  let fe = s(
      () => (!de || !k.visibleLength ? 0 : Sg(k.visibleLength, k.itemPositions, i)),
      [de, k, i]
    ),
    pe = k.totalItemLength === 0 ? 0 : (k.totalItemLength + i) * (fe + 1),
    he = [];
  if (f)
    for (let t = 0; t < fe; t++) {
      let n = [];
      e.forEach((r, o) => {
        let s = k.itemBounds[o],
          c = (k.totalItemLength + i) * (t + 1),
          l = s ? { start: s.start + c, end: s.end + c } : fD;
        n.push(
          /* @__PURE__ */ E(
            hg,
            {
              offset: re,
              axis: a,
              listSize: pe,
              itemIndex: o,
              cloneIndex: o,
              bounds: l,
              alignItems: j,
              size: u,
              safeMargin: v,
              numItems: k.isMeasured ? k.itemPositions.length : e.length,
              children: r,
            },
            `clone-${t}-${o}`
          )
        );
      });
      let r = `ticker-group-${t}`;
      he.push(/* @__PURE__ */ E(Ae, { id: r, children: n }, r));
    }
  _g(T, a, L, c, P);
  let z = C((e) => (k.maxInset === null ? e : xe(-k.maxInset, 0, e)), [k.maxInset]),
    _e = s(
      () => ({ ...k, gap: i, clampOffset: z, offset: c, renderedOffset: re }),
      [k, i, z, c, re]
    );
  return /* @__PURE__ */ E(iD.Provider, {
    value: _e,
    children: /* @__PURE__ */ E(wg, {
      containerProps: S,
      containerRef: D,
      listRef: O,
      gap: i,
      axis: a,
      alignItems: j,
      isMeasured: de,
      isInView: oe,
      offset: c,
      renderedOffset: re,
      items: e,
      itemSize: u,
      clonedItems: he,
      clampOffset: z,
      snap: _,
      safeMargin: v,
      onPointerEnter: () => {
        Pe(F, r);
      },
      onPointerLeave: () => {
        Pe(F, 1);
      },
      totalListSize: pe,
      state: k,
      overflow: d,
      loop: f,
      as: h,
      fade: y,
      sign: M,
      fadeTransition: b,
      pageTransition: x,
      children: p,
    }),
  });
}
function wg({
  children: e,
  containerProps: t,
  containerRef: n,
  listRef: r,
  gap: i,
  axis: a,
  alignItems: o,
  isMeasured: c,
  isInView: l,
  isStatic: u,
  items: d,
  offset: f,
  clonedItems: p,
  clampOffset: m,
  renderedOffset: h,
  onPointerEnter: v,
  onPointerLeave: y,
  totalListSize: b,
  itemSize: x,
  overflow: S,
  state: C,
  safeMargin: T,
  snap: D,
  loop: O,
  as: k,
  fade: A,
  sign: j,
  fadeTransition: M = hD,
  pageTransition: N,
}) {
  let P = s(() => z.create(k), [k]),
    F = {},
    { maxInset: I } = C;
  I !== null &&
    (F =
      a === `x`
        ? j > 0
          ? { left: I * -1, right: 0 }
          : { right: I, left: 0 }
        : { top: I * -1, bottom: 0 });
  let {
      drag: ee,
      _dragX: te,
      _dragY: ne,
      dragMomentum: L = !1,
      onDragEnd: re,
      onPointerDown: ae,
      ...oe
    } = t,
    se = re,
    ce = ae,
    le = a === `x` ? te : ne,
    ue = g(null),
    de = () => {
      ue.current &&= (ue.current.stop(), null);
    };
  !se &&
    ee &&
    le &&
    ((ce = () => {
      (le.jump(f.get()), de());
    }),
    (se = (e, { velocity: t }) => {
      let n = f.get();
      (de(),
        He.postRender(() => {
          let e = n + t[a] * (D ? 0.3 : 0.8);
          if (D) {
            if (t[a] < 0) e = -lg(-n, C.itemPositions, i, -e);
            else if (t[a] > 0) e = -ug(-n, C.itemPositions, i, -e, C.containerLength);
            else {
              let t = -lg(-n, C.itemPositions, i, -n),
                r = -ug(-n, C.itemPositions, i, -n, C.containerLength);
              e = Math.abs(n - t) < Math.abs(n - r) ? t : r;
            }
          }
          let r = O
            ? {}
            : j > 0
              ? { max: 0, min: F[a === `x` ? `left` : `top`] }
              : { min: 0, max: F.right };
          ue.current = Pe(
            le,
            m(e * j) * j,
            D
              ? N
              : {
                  type: `inertia`,
                  velocity: t[a],
                  modifyTarget: () => e,
                  bounceDamping: 40,
                  bounceStiffness: 400,
                  ...r,
                }
          );
        }));
    }));
  let fe = B(+!O),
    pe = B(0),
    me = mg(a, C.direction),
    he = typeof A == `number` ? `px` : ``,
    ge = R(
      () =>
        `linear-gradient(to ${me.direction}, rgba(0,0,0,${fe.get()}) 0px, black ${A}${he}, black calc(100% - ${A}${he}), rgba(0,0,0,${pe.get()}) 100%)`
    ),
    _e = A ? { maskImage: ge, WebkitMaskImage: ge } : {},
    ve = g({ start: !0, end: !1 });
  return (
    ie(h, `change`, (e) => {
      if (I === null) return;
      let t = I * -1;
      ((e *= j),
        e < 0
          ? ve.current.start && (Pe(fe, 0, M), (ve.current.start = !1))
          : ve.current.start || (Pe(fe, 1, M), (ve.current.start = !0)),
        e > t
          ? ve.current.end && (Pe(pe, 0, M), (ve.current.end = !1))
          : ve.current.end || (Pe(pe, 1, M), (ve.current.end = !0)));
    }),
    /* @__PURE__ */ w(_, {
      children: [
        /* @__PURE__ */ E(P, {
          ...oe,
          ref: n,
          style: {
            overflowX: !S && a === `x` ? `clip` : void 0,
            overflowY: !S && a === `y` ? `clip` : void 0,
            ...pD,
            ...t.style,
            ..._e,
          },
          onPointerEnter: v,
          onPointerLeave: y,
          drag: ee,
          _dragX: te,
          _dragY: ne,
          dragConstraints: F,
          dragMomentum: L,
          onPointerDown: ce,
          onDragEnd: se,
          children: /* @__PURE__ */ w(z.ul, {
            ref: r,
            style: {
              ...mD,
              flexDirection: a === `x` ? `row` : `column`,
              gap: `${i}px`,
              x: a === `x` ? h : 0,
              y: a === `y` ? h : 0,
              opacity: c || u ? 1 : 0,
              alignItems: o,
              willChange: c && l ? `transform` : void 0,
              width: `100%`,
              height: `100%`,
              maxHeight: `100%`,
              maxWidth: `100%`,
            },
            children: [
              d.map((e, t) =>
                /* @__PURE__ */ E(
                  hg,
                  {
                    axis: a,
                    offset: h,
                    listSize: b,
                    itemIndex: t,
                    bounds: C.itemBounds[t] ?? fD,
                    alignItems: o,
                    size: x,
                    reproject: O,
                    safeMargin: T,
                    positionInSet: C.itemSetPositions[t],
                    numItems: C.isMeasured ? C.itemPositions.length : d.length,
                    children: e,
                  },
                  `original-` + t
                )
              ),
              p || null,
            ],
          }),
        }),
        ` `,
        e,
      ],
    })
  );
}
function Tg(e, t) {
  if (!e) throw Error(t);
}
function Eg(e) {
  return -Math.sign(e);
}
function Dg(
  e,
  {
    axis: t = `y`,
    onWheel: n,
    onSwipe: r,
    swipeThreshold: i = 100,
    swipeTimeout: a = 150,
    jitterThreshold: o = 2,
    lineHeight: s = 16,
  }
) {
  let c = `IDLE`,
    l = 0,
    u = 0,
    d = 0,
    f = !1,
    p = 0,
    m = !1,
    h = null,
    g = (e) => {
      let g = t === `x` && !e.shiftKey ? e.deltaX : e.deltaY,
        _ = t === `x` && !e.shiftKey ? e.deltaY : e.deltaX;
      if (Math.abs(g) < Math.abs(_)) return;
      (n || r) && e.preventDefault();
      let v = -(e.deltaMode === WheelEvent.DOM_DELTA_LINE ? g * s : g);
      if (v === 0) return;
      (h && clearTimeout(h),
        (h = setTimeout(() => {
          ((c = `IDLE`), (m = !1), (l = 0));
        }, a)),
        c === `IDLE` && (c = `WHEELING`));
      let y = Eg(v);
      function b(e, t) {
        ((c = `SWIPING`),
          (m = !0),
          (u = Eg(t)),
          (f = !1),
          (p = 0),
          (d = Math.abs(e)),
          r?.(u),
          (l = (Math.abs(t) % i) * u));
      }
      switch (c) {
        case `WHEELING`: {
          let e = l + v;
          r && !m && Math.abs(e) >= i ? b(v, e) : ((l = e), n?.(v));
          break;
        }
        case `SWIPING`: {
          let e = Math.abs(v),
            t = y !== u,
            a = !1;
          if (d > 0) {
            let t = e - d;
            (t < 0 && (f = !0), f && t > o ? (p++, p > 2 && (a = !0)) : (p = 0));
          }
          if (t || a) {
            m = !1;
            let e = v;
            r && !m && Math.abs(e) >= i ? b(v, e) : ((c = `WHEELING`), (l = e), n?.(v));
            break;
          }
          d = e;
          break;
        }
      }
    };
  return (
    e.addEventListener(`wheel`, g, { passive: !1 }),
    () => {
      (h && clearTimeout(h), e.removeEventListener(`wheel`, g));
    }
  );
}
function Og() {
  let e = S(gD);
  return (Rg(!!e, `useCarousel must be used within a Carousel component`), e);
}
function kg(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function Ag(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = kg(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[Ee(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c >= e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function jg(e, t, n, r, i) {
  return Ag(e, n, r, e - t, i);
}
function Mg(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = kg(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[Ee(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function Ng(e, t, n, r) {
  return Mg(e, n, r, e + t);
}
function Pg(e, t, n, r = !0) {
  let i = { insets: [], visibleLength: t };
  if (e.length === 0) return i;
  let a = [e[0].start];
  for (let r = 1; r < e.length; r++) {
    let { start: i, end: o } = e[r];
    if (a[a.length - 1] + t < o) {
      if (n !== null) {
        if (i <= n) a.push(i);
        else {
          a.push(n);
          break;
        }
      } else a.push(i);
    }
  }
  if (r && n !== null && a.length > 1) {
    let r = a[a.length - 1],
      i = [];
    for (let e = 0; e < a.length - 1; e++) i.push(a[e + 1] - a[e]);
    let o = i.reduce((e, t) => e + t, 0) / i.length;
    if (n - r < o * 0.5) {
      let r = Pg(e, t * 0.75, n, !1);
      if (r.insets.length === a.length) return r;
    }
  }
  return { insets: a, visibleLength: t };
}
function Fg(e, t, n, r, i) {
  let a = -e;
  if (i) {
    let e = t[0] ?? 0,
      i = a + _D,
      o = r === null && n > 0 ? Ee(e, e + n, i) : i,
      s = t.findLastIndex((e) => e <= o);
    return Math.max(0, s);
  }
  let o = r === null ? Math.floor(a / n) : 0,
    s = o * n;
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e] + s,
      i = Ee(0, t.length, e - 1),
      c = (e === 0 ? o - 1 : o) * n,
      l = t[i] + c,
      u = (r - l) / 2,
      d = Ee(0, t.length, e + 1),
      f = (e === t.length - 1 ? o + 1 : o) * n,
      p = t[d] + f;
    if (a < p - (p - r) / 2 && a >= l + u) return e;
  }
  return 0;
}
function Ig({
  children: e,
  offset: t,
  targetOffset: n,
  tugOffset: r,
  loop: i = !0,
  transition: a,
  tickerRef: o,
  axis: c = `x`,
  snap: l = `page`,
  page: u,
  wheelSwipeThreshold: d,
}) {
  let f = g(void 0),
    p = se(),
    {
      clampOffset: h,
      totalItemLength: _,
      itemPositions: v,
      containerLength: y,
      gap: b,
      maxInset: x,
      direction: S,
      isMeasured: C,
    } = dg(),
    w = _ + b,
    { sign: T } = mg(c, S),
    D = i ? w : 0,
    O = s(() => ({ ...Pg(v, y, x), itemPositions: v, sign: T, loopLength: D }), [v, y, x, T, D]),
    k = O.insets.length,
    A = g(null),
    j = g(void 0),
    M = g(void 0),
    P = (e) => ({
      current: Fg(e * T, O.insets, w, x, M.current === e),
      isNextActive: i ? !0 : e * -T < x,
      isPrevActive: i ? !0 : e * -T > 0,
    }),
    [F, I] = m(() => P(n.get())),
    ee = () => {
      let e = P(n.get());
      (e.current !== F.current ||
        e.isNextActive !== F.isNextActive ||
        e.isPrevActive !== F.isPrevActive) &&
        I(e);
    };
  (ie(n, `change`, (e) => {
    (M.current !== e && (M.current = void 0), t.set(e), ee());
  }),
    ge(() => {
      let e,
        n = () => {
          (e?.stop(), (e = void 0));
        };
      return (
        t.attach((r, i) => {
          n();
          let a = f.current;
          ((f.current = void 0),
            a
              ? (e = new ze({
                  keyframes: [t.get(), r],
                  velocity: xe(-2e3, 2e3, t.getVelocity()),
                  ...a,
                  duration: a.duration === void 0 ? void 0 : a.duration * 1e3,
                  delay: a.delay === void 0 ? void 0 : a.delay * 1e3,
                  repeatDelay: a.repeatDelay === void 0 ? void 0 : a.repeatDelay * 1e3,
                  onUpdate: i,
                  onComplete: () => {
                    e = void 0;
                  },
                }))
              : i(r));
        }, n),
        n
      );
    }, [t]),
    ge(() => {
      let e = A.current;
      A.current = C && k > 0 ? O : null;
      let r = n.get(),
        i,
        a;
      if (C && k > 0) {
        if (u !== void 0 && j.current !== u) {
          ((j.current = u), (M.current = void 0));
          let e = xe(0, k - 1, u);
          i = O.insets[e] * -T;
        } else if (e && e !== O) {
          let n = r * -e.sign,
            o = e.loopLength ? Math.floor((n - e.insets[0] + _D) / e.loopLength) : 0,
            s = n - o * e.loopLength;
          if (e.insets.some((e) => Math.abs(s - e) < _D) || M.current === r) {
            let c = Math.max(
                0,
                e.itemPositions.findLastIndex((e) => e.start <= s + _D)
              ),
              l = e.itemPositions[c],
              u = n + (v[Math.min(c, v.length - 1)].start - l.start + o * (D - e.loopLength)),
              d = h(-u) * T;
            if (((M.current = d), d !== r && ((i = d), !p))) {
              let n = t.get() * e.sign + o * (e.loopLength - D);
              a = {
                from: (D ? -u + Ee(-D / 2, D / 2, n + u) : h(n)) * T,
                velocity: t.getVelocity() * e.sign * T,
              };
            }
          }
        }
      }
      (i !== void 0 &&
        (a &&
          (Math.abs(a.from - t.get()) > _D && t.jump(a.from),
          Math.abs(a.from - i) > _D &&
            (f.current = { ...yD, velocity: xe(-2e3, 2e3, a.velocity) })),
        n.jump(i),
        a || t.jump(i)),
        (i === void 0 || i === r) && ee());
    }, [C, u, O, n, t, w, h, p]));
  let te = (e) => {
      let t = h(e);
      (n.stop(), (f.current = a), n.set(t * T), (f.current = void 0));
    },
    ne = (e, t) => {
      let i = -e(-n.get() * T, O.visibleLength, v, b, y),
        a = h(i);
      a * T === n.get() ? Pe(r, 0, { velocity: t * T * 400, ...bD }) : te(a);
    },
    L = () => ne(Ng, -1),
    re = () => ne(jg, 1),
    ae = (e) => {
      let t = (i ? Math.floor((-n.get() * T) / w) : 0) * -w;
      te(-O.insets[e] + t);
    },
    oe = g({ nextPage: L, prevPage: re, clampOffset: h });
  return (
    N(() => {
      oe.current = { nextPage: L, prevPage: re, clampOffset: h };
    }, [L, re, h]),
    N(() => {
      let e = o.current;
      if (e)
        return Dg(e, {
          axis: c,
          swipeThreshold: d,
          onSwipe: l
            ? (e) => {
                let { nextPage: t, prevPage: n } = oe.current;
                e * T === 1 ? t() : n();
              }
            : void 0,
          onWheel: (e) => {
            let { clampOffset: r } = oe.current,
              i = t.get() + e,
              a = T > 0 ? r(i) : xe(0, x, i);
            n.jump(x ? a : i);
          },
        });
    }, [c, l, t, T]),
    /* @__PURE__ */ E(gD.Provider, {
      value: {
        currentPage: F.current,
        isNextActive: F.isNextActive,
        isPrevActive: F.isPrevActive,
        totalPages: k,
        nextPage: L,
        prevPage: re,
        gotoPage: ae,
        offset: t,
        targetOffset: n,
      },
      children: e,
    })
  );
}
function Lg({
  children: e,
  loop: t = !0,
  transition: n = vD,
  axis: r = `x`,
  snap: i = `page`,
  page: a,
  wheelSwipeThreshold: o,
  ...s
}) {
  let c = g(null),
    l = B(0),
    u = B(0),
    d = B(0),
    f = R(() => d.get() + u.get());
  return /* @__PURE__ */ E(dD, {
    role: `region`,
    "aria-roledescription": `carousel`,
    offset: f,
    loop: t,
    ref: c,
    axis: r,
    drag: r,
    _dragX: r === `x` && l,
    _dragY: r === `y` && l,
    snap: i,
    pageTransition: n,
    ...s,
    children: /* @__PURE__ */ E(Ig, {
      tickerRef: c,
      loop: t,
      offset: u,
      tugOffset: d,
      targetOffset: l,
      transition: n,
      snap: i,
      axis: r,
      page: a,
      wheelSwipeThreshold: o,
      children: e,
    }),
  });
}
function Rg(e, t) {
  if (!e) throw Error(t);
}
function zg({ intervalSeconds: e }) {
  let { nextPage: t, currentPage: n, isNextActive: r } = Og();
  return (
    N(() => {
      if (!r) return;
      let n = new ze({ keyframes: [0, 1], duration: e * 1e3, ease: `linear`, onComplete: t });
      return () => n.stop();
    }, [e, n, r, t]),
    null
  );
}
function Bg(e, t) {
  if (typeof e == `number` && Number.isFinite(e)) return e;
  if (!V(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0],
    a = t === `x` ? i : r;
  if (!a) return;
  let o = parseInt(a);
  return Number.isNaN(o) ? void 0 : o;
}
function Vg(e, t) {
  if (q(e)) return e;
  if (!V(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0];
  if (t === `x` && i) return Hg(parseInt(i));
  if (t === `y` && r) return Hg(parseInt(r));
}
function Hg(e) {
  return Number.isNaN(e) ? void 0 : e;
}
function Ug(e) {
  let {
    carouselEffectEnabled: t,
    carouselEffectAlign: n,
    carouselEffectAutoPlay: r,
    carouselEffectControls: i,
    carouselEffectGap: a,
    carouselEffectInterval: o,
    carouselEffectLoop: s,
    carouselEffectOverflow: c,
    carouselEffectSnap: l,
    carouselEffectStackDirection: u,
    carouselEffectTransition: d,
    carouselEffectXOverflow: f,
    carouselEffectYOverflow: p,
    tickerEffectEnabled: m,
    tickerEffectAlign: h,
    tickerEffectDirectionModifier: g,
    tickerEffectDraggable: _,
    tickerEffectGap: v,
    tickerEffectHoverModifier: y,
    tickerEffectIsDataRepeater: b,
    tickerEffectOverflow: x,
    tickerEffectPosition: S,
    tickerEffectStackDirection: C,
    tickerEffectVelocity: w,
    tickerEffectXOverflow: T,
    tickerEffectYOverflow: E,
    ...D
  } = e;
  return {
    carouselEffectProps: {
      carouselEffectAlign: n,
      carouselEffectAutoPlay: r,
      carouselEffectControls: i,
      carouselEffectGap: a,
      carouselEffectInterval: o,
      carouselEffectLoop: s,
      carouselEffectOverflow: c,
      carouselEffectSnap: l,
      carouselEffectStackDirection: u,
      carouselEffectTransition: d,
      carouselEffectXOverflow: f,
      carouselEffectYOverflow: p,
    },
    tickerEffectProps: {
      tickerEffectAlign: h,
      tickerEffectDirectionModifier: g,
      tickerEffectDraggable: _,
      tickerEffectGap: v,
      tickerEffectHoverModifier: y,
      tickerEffectIsDataRepeater: b,
      tickerEffectOverflow: x,
      tickerEffectPosition: S,
      tickerEffectStackDirection: C,
      tickerEffectVelocity: w,
      tickerEffectXOverflow: T,
      tickerEffectYOverflow: E,
    },
    domProps: D,
  };
}
function Wg(e, t, n, r = AD) {
  let [i, a] = M.useState(e),
    [o, s] = M.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      M.useCallback(
        (e) => {
          sa(e) ||
            (t && a(r(e)),
            n &&
              M.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function Gg(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function Kg() {
  return /* @__PURE__ */ E(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: /* @__PURE__ */ E(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function qg(e, n) {
  N(() => {
    function r(t) {
      t.key === `Escape` && e && (t.preventDefault(), t.stopPropagation(), n());
    }
    return (t.addEventListener(`keyup`, r), () => t.removeEventListener(`keyup`, r));
  }, [e, n]);
}
function Jg(e, n, r, i) {
  let a = t.innerHeight - i,
    o = Math.min(t.innerWidth - r, n),
    s = a / e;
  return Math.min(o, s);
}
function Yg(e, { width: n, height: r }) {
  if (!e.src || !e.srcSet) return;
  let i = new t.Image();
  return (
    (i.src = e.src),
    (i.srcset = e.srcSet),
    (i.sizes = e.sizes || ``),
    (i.width = n),
    (i.height = r),
    i.decode()
  );
}
function Xg() {
  return (
    document.getElementById(`template-overlay`) ??
    document.getElementById(`overlay`) ??
    document.body
  );
}
function Zg(e, t) {
  return Ye(e) ? e : (t ?? 0);
}
function Qg(e) {
  return Zg(e?.paddingTop, e?.padding) + Zg(e?.paddingBottom, e?.padding);
}
function $g(e) {
  return Zg(e?.paddingLeft, e?.padding) + Zg(e?.paddingRight, e?.padding);
}
function e_(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - $g(e)}px)`,
      srcSet: Go(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function t_(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in HD)) continue;
    let n = HD[t],
      r = e[t];
    if (Ye(n) && Ye(r) && n !== r) return !0;
  }
  return !1;
}
function n_(e) {
  let t = F.get(e.current);
  if (!t) return !1;
  if (t_(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (t_(e.latestValues)) return !0;
  return !1;
}
function r_(e) {
  return D(function ({ lightbox: t, lightboxClassName: n, onClick: r, ...i }, o) {
    let c = S(Ie),
      l = S(TD),
      d = !!l,
      f = g(null),
      p = o ?? f,
      h = g(),
      v = s(() => e_(t, i.background), [t, i.background]),
      [y, b] = m(!1),
      [T, D] = m(),
      O = C(() => {
        t &&
          (y
            ? u(() => {
                b(!0);
              })
            : He.read(() => {
                if (!p.current) return;
                let e = getComputedStyle(p.current),
                  n =
                    p.current.getAttribute(`data-border`) === `true`
                      ? getComputedStyle(p.current, `::after`)
                      : void 0,
                  r = p.current.offsetWidth ?? 1,
                  i = p.current.offsetHeight ?? 1,
                  a = n_(p) || d ? { duration: 0 } : t.transition;
                u(() => {
                  (D({
                    borderRadius: e.borderRadius,
                    aspectRatio: r / (i || 1),
                    borderTop: n?.borderTopWidth,
                    borderRight: n?.borderRightWidth,
                    borderBottom: n?.borderBottomWidth,
                    borderLeft: n?.borderLeftWidth,
                    borderStyle: n?.borderStyle,
                    borderColor: n?.borderColor,
                    transition: a,
                    imageRendering: e.imageRendering,
                    filter: e.filter,
                  }),
                    b(!0),
                    l?.stop());
                });
              }));
      }, [t, y, p, l?.stop, d]),
      k = T?.aspectRatio ?? 1,
      A = Oh(() => {
        if (!t || !v?.src) return;
        let e = h.current?.[v.src];
        if (e) return e;
        let n = Jg(k, t.maxWidth, $g(t), Qg(t)),
          r = Yg(v, { width: n, height: n * k });
        return ((h.current = { [v.src]: r }), r);
      }),
      M = C(
        async (e) => {
          (r?.(e), !y && t && v && (await A(), O()));
        },
        [r, O, y, v, t, A]
      ),
      P = C((e) => {
        (e?.stopPropagation(),
          u(() => {
            b(!1);
          }));
      }, []);
    (qg(y, P),
      N(() => {
        if (!t) return;
        let e;
        function n() {
          e = setTimeout(() => {
            A();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = p.current;
        return (
          i?.addEventListener(`mouseenter`, n),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, A),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, n),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, A));
          }
        );
      }, [A, p, t]));
    let F = j(),
      I = T?.transition ?? i.transition ?? c.transition,
      ee = T?.borderRadius,
      te = T?.imageRendering,
      ne = T?.filter,
      L = T?.borderTop,
      re = T?.borderRight,
      ie = T?.borderBottom,
      ae = T?.borderLeft,
      oe = T?.borderStyle,
      se = T?.borderColor,
      ce = !!(L || re || ie || ae || oe || se),
      le = ce
        ? {
            "--border-top-width": L,
            "--border-right-width": re,
            "--border-bottom-width": ie,
            "--border-left-width": ae,
            "--border-style": oe,
            "--border-color": se,
          }
        : void 0,
      ue = { [qC]: i.id },
      de = Zg(t?.paddingTop, t?.padding),
      fe = Zg(t?.paddingBottom, t?.padding),
      pe = Zg(t?.paddingLeft, t?.padding),
      R = Zg(t?.paddingRight, t?.padding),
      me = T?.borderRadius ? { ...i.style, borderRadius: T.borderRadius } : i.style,
      he = y ? (i.layoutDependency ? `${i.layoutDependency}-open` : `open`) : i.layoutDependency,
      ge = d && y ? void 0 : (i.layoutId ?? (t ? F : void 0));
    return /* @__PURE__ */ w(_, {
      children: [
        /* @__PURE__ */ E(e, {
          ...i,
          style: me,
          onClick: M,
          layoutId: ge,
          ref: p,
          layoutDependency: he,
          transition: I,
        }),
        /* @__PURE__ */ E(Fe, {
          onExitComplete: () => {
            u(() => {
              (D(void 0), l?.start());
            });
          },
          children:
            y &&
            t &&
            v &&
            /* @__PURE__ */ E(
              a,
              {
                children: x(
                  /* @__PURE__ */ w(_, {
                    children: [
                      /* @__PURE__ */ E(z.div, {
                        ...ue,
                        className: n,
                        onClick: P,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: t.zIndex,
                          backgroundColor: t.backdrop ?? `transparent`,
                        },
                        transition: I,
                        initial: UD,
                        animate: WD,
                        exit: UD,
                      }),
                      /* @__PURE__ */ E(z.div, {
                        ...ue,
                        className: n,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${de}px ${R}px ${fe}px ${pe}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: t.zIndex,
                        },
                        children: /* @__PURE__ */ E(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: k,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: t.maxWidth,
                          },
                          children: /* @__PURE__ */ E(z.div, {
                            layoutId: ge,
                            transition: I,
                            onClick: O,
                            className: `framer-lightbox-container`,
                            "data-border": ce,
                            style: {
                              aspectRatio: k,
                              borderRadius: ee,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: te,
                              filter: ne,
                              ...le,
                            },
                            children: /* @__PURE__ */ E(es, {
                              image: v,
                              alt: v.alt,
                              draggable: i.draggable,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Xg()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function i_(e, t, n) {
  let r = [n, { numeric: t, style: e }],
    i = JSON.stringify(r),
    a = KD.get(i);
  if (a) return a;
  let o = new Intl.RelativeTimeFormat(...r);
  return (KD.set(i, o), o);
}
function a_(e, t, n, r, i, a, o) {
  let s = s_(e, t, n),
    c = c_(e, t, s),
    l = i_(r, i, o).format(c, s);
  return a ? o_(l) : l;
}
function o_(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function s_(e, t, n) {
  if (n !== `auto`) return n;
  let r = u_(e, t);
  if (Math.abs(r) <= 7) return `day`;
  let i = f_(e, t);
  if (Math.abs(i) <= 4) return `week`;
  let a = p_(e, t);
  return Math.abs(a) <= 12 ? `month` : `year`;
}
function c_(e, t, n) {
  let r = e.getTime() - t.getTime();
  switch (n) {
    case `second`:
      return Math.trunc(r / qD);
    case `minute`:
      return Math.trunc(r / JD);
    case `hour`:
      return Math.trunc(r / YD);
    case `day`:
      return u_(e, t);
    case `week`:
      return f_(e, t);
    case `month`:
      return p_(e, t);
    case `quarter`:
      return h_(e, t);
    case `year`:
      return g_(e, t);
  }
}
function l_(e) {
  let t = new Date(e);
  return (t.setUTCHours(0, 0, 0, 0), t);
}
function u_(e, t) {
  let n = l_(e).getTime(),
    r = l_(t).getTime();
  return Math.round((n - r) / XD);
}
function d_(e) {
  let t = new Date(e),
    n = t.getUTCDay(),
    r = (n < 1 ? 7 : 0) + n - 1;
  return (t.setUTCDate(t.getUTCDate() - r), t.setUTCHours(0, 0, 0, 0), t);
}
function f_(e, t) {
  let n = d_(e).getTime(),
    r = d_(t).getTime();
  return Math.round((n - r) / ZD);
}
function p_(e, t) {
  let n = e.getUTCFullYear() - t.getUTCFullYear(),
    r = e.getUTCMonth() - t.getUTCMonth();
  return n * 12 + r;
}
function m_(e) {
  let t = e.getUTCMonth();
  return Math.trunc(t / 3);
}
function h_(e, t) {
  let n = e.getUTCFullYear() - t.getUTCFullYear(),
    r = m_(e) - m_(t);
  return n * 4 + r;
}
function g_(e, t) {
  return e.getUTCFullYear() - t.getUTCFullYear();
}
function __() {
  let e = /* @__PURE__ */ new Date();
  return new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
}
function v_(e, t, n, r, i, a) {
  return `document.currentScript.parentElement.textContent = window.__framer_formatRelativeDate(new Date(${e.getTime()}), new Date(), ${JSON.stringify(t)}, ${JSON.stringify(n)}, ${JSON.stringify(r)}, ${JSON.stringify(i)}, ${JSON.stringify(a)})`;
}
function y_(e) {
  let t = {};
  for (let n in e) (te(n) || Jb(n)) && (t[n] = e[n]);
  return t;
}
function b_(e, t) {
  return eO && !t
    ? Document.parseHTMLUnsafe(e)
    : (($D ??= new DOMParser()), $D.parseFromString(e, t ?? `text/html`));
}
function x_(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function S_(e, t, n, r) {
  return e.replace(tO, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = fd(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!Hh(f) || !Hh(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Fn(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = md(u);
    if (!_ || V(_)) return e;
    Ad(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(ow, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Ki(m, v)), i + o + `"${x_(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function C_(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function w_(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function T_(e, t, n) {
  let r = g([]);
  C_(r.current, e) ||
    ((r.current = e),
    $b.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      t && n.current && W.current() === W.canvas && e > 0 && Xs(n.current);
    }));
}
function E_() {
  return { current: null };
}
async function D_(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        ((n = e), e === null ? t.abort() : r(e));
      },
      configurable: !0,
    }),
    i
  );
}
function O_(e) {
  return e in aO;
}
function k_(e, t) {
  let n = {};
  for (let r in e) {
    if (!O_(r)) continue;
    let i = e[r],
      a = aO[r];
    Qe(i) || Qe(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function A_(e, t = `character`, n, r, i) {
  if (r) {
    let t = E_();
    return (n.add(t), /* @__PURE__ */ E(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r,
          s = e.length <= 12;
        return /* @__PURE__ */ w(
          a,
          {
            children: [
              /* @__PURE__ */ E(`span`, {
                style: { whiteSpace: s ? `nowrap` : `unset` },
                children: e.match(oO)?.map((e, t) => {
                  let r = E_();
                  return (
                    n.add(r),
                    /* @__PURE__ */ E(`span`, { ref: r, style: i, children: e }, e + t)
                  );
                }),
              }),
              o ? null : ` `,
            ],
          },
          e + t + o
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r,
          s = E_();
        return (
          n.add(s),
          /* @__PURE__ */ w(
            a,
            {
              children: [
                /* @__PURE__ */ E(`span`, { ref: s, style: i, children: e }),
                o ? null : ` `,
              ],
            },
            e + t + o
          )
        );
      });
    }
    default:
      return e;
  }
}
function j_(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      st(t);
  }
}
function M_(e) {
  let t = [];
  return (
    Ye(e.x) && t.push(`translateX(${e.x}px)`),
    Ye(e.y) && t.push(`translateY(${e.y}px)`),
    Ye(e.scale) && t.push(`scale(${e.scale})`),
    Ye(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    Ye(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    Ye(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    Ye(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    Ye(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function N_(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : M_(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : M_(n.effect),
              };
      }
    default:
      st(i);
  }
}
function P_(e, t, n) {
  let r = Fo(() => /* @__PURE__ */ new Set()),
    i = Ro(),
    a = n || !i,
    o = se(),
    c = g({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  c.current.effect = e;
  let l = e?.trigger ?? `onMount`,
    u = e?.target,
    d = e?.threshold;
  N(() => {
    if (!a || n) return;
    c.current.hasMounted = !0;
    function e() {
      let { effect: e } = c.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && c.current.hasAnimatedOnce) ||
        (e?.type === `appear` && c.current.isAnimating)
      )
        return;
      Object.assign(c.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            s = { current: void 0 };
          return (
            I_(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(c.current, { isAnimating: !1 });
              },
              s
            ),
            () => s.current?.()
          );
        }
        default:
          st(t);
      }
    }
    switch (l) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? We(n, e, { amount: d ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = u?.ref?.current;
        return t
          ? We(t, e, {
              amount: d ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        st(l);
    }
  }, [a, r, n, t, u, d, l]);
  let f = !!e,
    p = e ? j_(e) : void 0;
  return s(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !f)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = c.current,
          s = N_(a, n || F_(e, t, i), c.current.effect, o);
        return {
          text: (e) => A_(e, p, r, o, s),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = E_();
            return (r.add(t), { ref: t, style: { ...e, ...s } });
          },
        };
      },
      play: () => {
        let { effect: e } = c.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            I_(p, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            st(t);
        }
      },
    }),
    [a, f, r, n, p]
  );
}
function F_(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function I_(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = k_(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await L_(n, u);
      if (
        e === null ||
        (Pe(e, l, { ...r, restDelta: 0.001, delay: de(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Pe(e, n, { ...r, restDelta: 0.001, delay: de(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await D_(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (He.read(() => {
          ((e = R_(n)),
            e.length !== 0 &&
              He.update(() => {
                let t = e.map((e, t) =>
                  Pe(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Pe(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      st(e);
  }
}
async function L_(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await D_(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function R_(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function z_(e) {
  return e.type === a;
}
function B_(e) {
  return e.type === `br`;
}
function V_(e, t, n, r, a = {}, s, c = z_(e) ? -1 : 0) {
  let l = i.toArray(e.props.children);
  Qe(n) || (l = l.slice(0, 1));
  let u = !0;
  l = l.map((e) => {
    if (((!T(e) || !B_(e)) && (u = !1), T(e))) return V_(e, t, n, r, a, s, c + 1);
    let i = Qe(n) ? e : n;
    return V(i) && s ? s.text(i) : i;
  });
  let { "data-preset-tag": d, ...f } = e.props;
  if (V(e.type) || Ue(e.type)) {
    let n = oe(e.type) || e.type,
      o = d || n,
      p = V(o) ? t?.[o] : void 0;
    ((f.className = Ll(`framer-text`, f.className, p)),
      s && c === 0 && !u && Object.assign(f, s.props(f.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = H_(l, a);
      f.id = e;
      let t = Ll(`framer-text`, h),
        n = /* @__PURE__ */ E(`a`, { href: `#${e}`, className: t, children: l });
      ((f.style = { ...f.style, scrollMarginTop: r }), (l = [n]));
    }
    o === `ol` &&
      (f.style = {
        ...f.style,
        [Kt]: W_(f.start ?? 1, i.count(f.children), f.style?.[`--list-style-type`] ?? ``),
      });
  }
  return o(e, f, ...l);
}
function H_(e, t) {
  let n = Pi(e.map(U_).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function U_(e) {
  return V(e) || Ye(e)
    ? e.toString()
    : T(e)
      ? U_(e.props.children)
      : Array.isArray(e)
        ? e.map(U_).join(``)
        : ``;
}
function W_(e, t, n) {
  return mt(Number(e) || 1, t, n);
}
function G_(e) {
  try {
    let t = b_(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function K_(e, t) {
  J_(e, q_(t));
}
function q_(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function J_(e, t) {
  (Y_(e, t),
    Array.from(e.children).forEach((e) => {
      J_(e, t);
    }));
}
function Y_(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function X_(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (t?.[1] !== void 0 && t?.[2] !== void 0 && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (yO[t[2]] || 1));
}
function Z_(e) {
  let t = X_(e.getAttribute(`width`)),
    n = X_(e.getAttribute(`height`));
  if (typeof t == `number` && typeof n == `number` && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Q_({ height: e, width: t, isCarouselControl: n, children: r }) {
  let i = $_();
  if (n) return null;
  if (!i || !r) return r;
  let { props: a } = i;
  return /* @__PURE__ */ E(z.li, {
    ...a,
    style: { ...a.style, width: t ?? `fit-content`, height: e ?? `fit-content` },
    children: r,
  });
}
function $_() {
  try {
    return fg();
  } catch {
    return;
  }
}
function ev(e) {
  return e > bO ? `lazy` : void 0;
}
function tv(e, t, n) {
  let r = av(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function nv(e) {
  return e ? (e.fonts ?? ba()) : ba();
}
function rv(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : av(e);
}
function iv(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : av(e);
}
function av(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    ov(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(sv) })
      : t.fonts.push(sv(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function ov(e) {
  return SO in e;
}
function sv(e) {
  let t = cv(e) || lv(e) ? e : uv(e);
  return lv(t) ? t : dv(t);
}
function cv(e) {
  return `source` in e;
}
function lv(e) {
  return `cssFamilyName` in e;
}
function uv(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function dv(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${xO}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function fv(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
async function pv(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = py({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e })
        )
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function mv(e) {
  return e.loader;
}
function hv(e, t, n) {
  let r = mv(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  X,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  Z,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  Q,
  PT,
  FT,
  IT,
  LT,
  RT,
  $,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO,
  sO,
  cO,
  lO,
  uO,
  dO,
  fO,
  pO,
  mO,
  hO,
  gO,
  _O,
  vO,
  yO,
  bO,
  xO,
  SO;
function CO() {
  return (CO = e(() => {
    (d(),
      Ce(),
      cn(),
      p(),
      O(),
      h(),
      (gv = /* @__PURE__ */ new Map()),
      (_v = /* @__PURE__ */ new Map()),
      (vv = /* @__PURE__ */ new Set()),
      (yv = `:`),
      (bv = St ? void 0 : /* @__PURE__ */ new Set()),
      (xv = `preload`),
      (Sv = Object.keys),
      (Cv = `equals`),
      (wv = /* @__PURE__ */ M.createContext({})),
      (Tv = /* @__PURE__ */ M.createContext({})),
      (Ev = []),
      (Dv = `default`),
      (Ov = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (kv = class e {
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = Ov.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && un(t, e));
        }
        then(e, t) {
          return this.promiseState === Ov.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === Ov.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== Ov.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && bv !== void 0 && bv.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = Ov.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = Ov.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && gv.has(this.cacheHash) ? gv.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!it(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === Ov.Fulfilled) return this.value;
          throw this.promiseState === Ov.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (Av = 2 ** 32 - 1),
      (jv = Av - 1),
      (Mv = typeof Uint8Array.fromBase64 == `function`),
      (Nv = typeof process == `object` && process.versions?.node !== void 0),
      (Pv = Mv ? Vn : Nv ? Hn : Un),
      (Fv = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, `byteLength`).get),
      (Iv =
        typeof SharedArrayBuffer > `u`
          ? void 0
          : Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, `byteLength`).get),
      (Lv = /* @__PURE__ */ Object.freeze({
        fromPrimitive: (e) => e,
        fromISOString: (e) => new Date(e),
        fromStringValue: (e, t) =>
          e === `URL`
            ? new URL(t)
            : e === `URLSearchParams`
              ? new URLSearchParams(t)
              : Temporal[e.slice(9)].from(t),
        fromArrayBuffer: (e) => e,
        fromRegExpInfo: (e, t) => new RegExp(e, t),
        fromViewInfo: (e, t, n, r) => {
          try {
            Fv.call(t);
          } catch (e) {
            if (!Iv) throw e;
            Iv.call(t);
          }
          let i = globalThis[e];
          return n === void 0 ? new i(t) : new i(t, n, r);
        },
        box: (e) => Object(e),
        createArray: (e) => Array(e),
        createSparseArray: (e) => {
          let t = [];
          return ((t[jv] = void 0), delete t[jv], (t.length = e), t);
        },
        createObject: () => ({}),
        createNullPrototypeObject: () => Object.create(null),
        createSet: () => /* @__PURE__ */ new Set(),
        createMap: () => /* @__PURE__ */ new Map(),
        set: (e, t, n) => {
          e[t] = n;
        },
        addValue: (e, t) => {
          e.add(t);
        },
        addEntry: (e, t, n) => {
          e.set(t, n);
        },
      })),
      (Rv = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (zv = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Vv = class {
        payload = Yn();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        getPayload() {
          return this.isEmpty ? void 0 : this.payload;
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (Hv = St ? void 0 : new Vv()),
      (Uv = zv.CollectionUtilsCache),
      (Wv = /* @__PURE__ */ new WeakMap()),
      (Gv = /* @__PURE__ */ k(void 0)),
      (Kv = class {
        collectionId;
        module;
        cacheMap = /* @__PURE__ */ new Map();
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new kv(async () => {
              try {
                let t = await e();
                return (U(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(ot(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = er(n),
            i = tr(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (Hv !== void 0) {
              if (it(e)) return e.then((e) => (Hv.set(Uv, i, e), e));
              Hv.set(Uv, i, e);
            }
            return e;
          }
          if (Qn(Uv, i)) {
            let e = $n(Uv, i);
            return (this.cacheMap.set(i, new kv(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = it(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(ot(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (Hv !== void 0 && Hv.set(Uv, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new kv(async () => {
            try {
              let e = it(s) ? await s : s;
              return (Hv !== void 0 && Hv.set(Uv, i, e), e);
            } catch (e) {
              console.error(ot(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (qv = /Mac/u),
      (Jv = /iPhone|iPod|iPad/iu),
      (Yv = /MacIntel/iu),
      (Xv = /Edg\//u),
      (Zv = /Chrome/u),
      (Qv = /Google Inc/u),
      ($v = /Safari/u),
      (ey = /Apple Computer/u),
      (ty = /Firefox\/\d+\.\d+$/u),
      (ny = /Version\/([\d.]+)/u),
      (ry = /FramerX/u),
      (iy = /tablet|iPad|Nexus 9/iu),
      (ay = /mobi/iu),
      (oy = 1e3 / 60),
      (sy = 40),
      (cy = 500),
      (ly = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (uy = /* @__PURE__ */ Promise.resolve()),
      (dy = 100),
      (fy = (e) => {
        He.read(e, !1, !0);
      }),
      (py = /* @__PURE__ */ Dr(fy)),
      (my = `framer_variant`),
      (hy = /* @__PURE__ */ RegExp(`:([a-z]\\w*)`, `gi`)),
      (gy = async () => {}),
      (_y = { contentLocale: null, activeLocale: null, locales: [], setLocale: gy }),
      (vy = /* @__PURE__ */ (() => {
        let e = M.createContext(_y);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (yy = /* @__PURE__ */ (() => {
        let e = M.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (by = !Ct),
      (xy = !1),
      (Sy = /* @__PURE__ */ M.createContext({ global: void 0, routes: {} })),
      (Cy = 10),
      (wy = 1e4),
      (Ty = (e) => `--view-transition-${e}`),
      (Ey = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${Ty(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${Ty(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${Ty(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (Dy = {
        circle: {
          makeKeyframe: (e, t) => `${Ty(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${Ty(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${Zr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${Ty(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: Ey,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${Xr(e.x)} ${Xr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = Jr(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${Ty(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Ty(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Ty(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${Ty(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Ty(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Ty(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (Oy = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (ky = `view-transition-styles`),
      (Ay = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (jy = () => {}),
      (Ny = () => {
        let e = document.title;
        e &&
          (document.ariaNotify
            ? document.ariaNotify(e, { priority: `high` })
            : (My ||
                ((My = document.createElement(`div`)),
                My.setAttribute(`aria-live`, `assertive`),
                My.setAttribute(`aria-atomic`, `true`),
                (My.style.position = `absolute`),
                (My.style.transform = `scale(0)`),
                document.body.append(My)),
              setTimeout(() => {
                My.textContent = e;
              }, 60)));
      }),
      (Fy =
        St &&
        typeof t.navigation?.back == `function` &&
        !(
          /* @__PURE__ */ (() => {
            if (P === void 0) return !1;
            let e = P.userAgent,
              t = e.indexOf(`Chrome/`),
              n = +e.slice(t + 7, e.indexOf(`.`, t));
            return n > 101 && n < 128;
          })()
        ) &&
        !fr()),
      (Iy = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (Ly = /* @__PURE__ */ M.createContext(null)),
      (Ry = /* @__PURE__ */ (() => {
        let e = k(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (zy = typeof document < `u` ? r : N),
      (By = /* @__PURE__ */ new Set()),
      (Vy = /* @__PURE__ */ (() => {
        let e = k({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Hy = 46),
      (Uy = 47),
      (Wy = (e, t) => e.charCodeAt(t)),
      (Gy = (e, t) => e.lastIndexOf(t)),
      (Ky = (e, t, n) => e.slice(t, n)),
      (qy = `/`),
      (Jy = (e) => e === Uy),
      (Yy = /* @__PURE__ */ new Set([`/404.html`, `/404`, `/404/`])),
      (Xy = `__f_replay`),
      (Zy = `__f_replay_ignore`),
      (Qy = `data-framer-form-hydrated`),
      ($y = `data-framer-form-pending-submit`),
      (eb = () => St),
      (tb =
        /* @__PURE__ */ `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (nb = (e) => {
        e.target?.closest?.(`#main`) &&
          (oa(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (rb = !1),
      (ib = class {
        markRenderStart = da(() => {
          performance.mark(`framer-hydration-start`);
        });
        markRenderEnd = da(() => {
          (performance.mark(`framer-hydration-render-end`),
            fa(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        });
        markUseInsertionEffectsStart = da(() => {
          performance.mark(`framer-hydration-insertion-effects-start`);
        });
        markUseInsertionEffectRouterStart = da(() => {
          performance.mark(`framer-hydration-router-insertion-effect`);
        });
        markUseInsertionEffectsEnd = da(() => {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            fa(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        });
        markUseLayoutEffectsStart = da(() => {
          performance.mark(`framer-hydration-layout-effects-start`);
        });
        markRouterUseLayoutEffectStart = da(() => {
          performance.mark(`framer-hydration-router-layout-effect`);
        });
        markUseLayoutEffectsEnd = da(() => {
          (performance.mark(`framer-hydration-layout-effects-end`),
            fa(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        });
        markUseEffectsStart = da(() => {
          performance.mark(`framer-hydration-effects-start`);
        });
        markUseEffectsRouterStart = da(() => {
          performance.mark(`framer-hydration-router-effect`);
        });
        markUseEffectsAreSynchronous = da(() => {
          performance.mark(`framer-hydration-effects-sync`);
        });
        markUseEffectsEnd = da(() => {
          (performance.mark(`framer-hydration-effects-end`),
            fa(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        });
        markRafStart = da(() => {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        });
        markRafEnd = da(() => {
          (performance.mark(`framer-hydration-browser-raf-end`),
            fa(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        });
        markLayoutStylePaintEnd = da(() => {
          (performance.mark(`framer-hydration-first-paint`),
            fa(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            fa(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        });
        measureMutationEffects = da(() => {
          fa(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        });
        measureUnattributedHydrationOverhead = da(() => {
          fa(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        });
        render = { markStart: () => this.markRenderStart(), markEnd: () => this.markRenderEnd() };
        mutationEffects = { measure: () => this.measureMutationEffects() };
        useInsertionEffects = {
          markStart: () => this.markUseInsertionEffectsStart(),
          markRouterStart: () => this.markUseInsertionEffectRouterStart(),
          markEnd: () => this.markUseInsertionEffectsEnd(),
        };
        useLayoutEffects = {
          markStart: () => this.markUseLayoutEffectsStart(),
          markRouterStart: () => this.markRouterUseLayoutEffectStart(),
          markEnd: () => this.markUseLayoutEffectsEnd(),
        };
        useEffects = {
          markStart: () => this.markUseEffectsStart(),
          markRouterStart: () => this.markUseEffectsRouterStart(),
          markEnd: () => this.markUseEffectsEnd(),
          markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
        };
        browserRendering = {
          hasStarted: !1,
          requestAnimationFrame: {
            markStart: () => this.markRafStart(),
            markEnd: () => this.markRafEnd(),
          },
          layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
        };
        unattributedHydrationOverhead = {
          measure: () => this.measureUnattributedHydrationOverhead(),
        };
      }),
      (ob = !1),
      (sb = { Start: _a, End: va }),
      (cb = class extends Error {}),
      (lb = class extends y {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof cb)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return ya(e, t);
        }
      }),
      (ub = /* @__PURE__ */ Object.freeze([])),
      (fb = /* @__PURE__ */ new Set()),
      (pb = class {
        observers = /* @__PURE__ */ new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (mb = /* @__PURE__ */ (() => {
        function e(e) {
          return (
            Va(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Ha(e) ? e : new _b(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = /* @__PURE__ */ new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : Ha(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              t[n] = Ha(r) ? r.get() : r;
            }
            return t;
          }),
          e
        );
      })()),
      (hb = `onUpdate`),
      (gb = `finishTransaction`),
      (_b = class {
        value;
        observers = new pb();
        constructor(e) {
          this.value = e;
        }
        static interpolationFor(e, t) {
          if (Ha(e)) return Ua(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Ha(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      (function (e) {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Ga(e.x, t.x), y: Ga(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(e) {
          let t = qa.centroid(e),
            n = /* @__PURE__ */ new Map();
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            i && n.set(i, Math.atan2(i.y - t.y, i.x - t.x));
          }
          return e.sort((e, t) => (n.get(e) ?? 0) - (n.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((qa ||= {})),
      (vb = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (yb = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
            (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (yb.hexChars = `0123456789abcdef`),
      (yb.refY = 1),
      (yb.refU = 0.19783000664283),
      (yb.refV = 0.46831999493879),
      (yb.kappa = 903.2962962),
      (yb.epsilon = 0.0088564516),
      (yb.m_r0 = 3.240969941904521),
      (yb.m_r1 = -1.537383177570093),
      (yb.m_r2 = -0.498610760293),
      (yb.m_g0 = -0.96924363628087),
      (yb.m_g1 = 1.87596750150772),
      (yb.m_g2 = 0.041555057407175),
      (yb.m_b0 = 0.055630079696993),
      (yb.m_b1 = -0.20397695888897),
      (yb.m_b2 = 1.056971514242878),
      (bb = /* @__PURE__ */ new yb()),
      (xb = /* @__PURE__ */ (() => {
        let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
          t = `[\\s|\\(]+(` + e + `)[,|\\s]+(` + e + `)[,|\\s]+(` + e + `)\\s*\\)?`,
          n =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)\\s*\\)?`;
        return {
          rgb: RegExp(`rgb` + t),
          rgba: RegExp(`rgba` + n),
          hsl: RegExp(`hsl` + t),
          hsla: RegExp(`hsla` + n),
          hsv: RegExp(`hsv` + t),
          hsva: RegExp(`hsva` + n),
          hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
          hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
          hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
          hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        };
      })()),
      (Sb =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Cb = (e) => {
        let { r: t, g: n, b: r, a: i } = vo(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (wb = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        bo({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Tb = (e) => {
        let { r: t, g: n, b: r, a: i } = vo(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (Eb = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        bo({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Db = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return xo(this);
        }
        rgb() {
          return To(this);
        }
        hsl() {
          return ro(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Co(t));
            case `srgb`:
              return new e(wo(Co(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            wo({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = X(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = go(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!V(t) || !X.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Ob = /* @__PURE__ */ new Map()),
      (X = /* @__PURE__ */ (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Ob.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Ob.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Eo(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          }
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && po(e) !== !1),
          (e.isColorObject = (e) =>
            H(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => no(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && Db.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...Qa(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = oo(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = oo(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = no(e.r, e.g, e.b, !0);
            for (let e of Object.keys(vb)) if (vb[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Ja(i, [0, 1], [t.r, r.r], a),
                g: Ja(i, [0, 1], [t.g, r.g], a),
                b: Ja(i, [0, 1], [t.b, r.b], a),
                a: Ja(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Ja(i, [0, 1], [u, u + f], a),
                s: Ja(i, [0, 1], [c.s, l.s], a),
                l: Ja(i, [0, 1], [c.l, l.l], a),
                a: Ja(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e($a(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => ro(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !(
              (t.toLowerCase().slice(-5) !== `color` && t !== `fill` && t !== `stroke`) ||
              typeof n != `string` ||
              !e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (kb = (e) => e instanceof we),
      (Ab = /* @__PURE__ */ De((e, t) => {
        var n = Object.prototype.hasOwnProperty,
          r = `~`;
        function i() {}
        Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
        function a(e, t, n) {
          ((this.fn = e), (this.context = t), (this.once = n || !1));
        }
        function o(e, t, n, i, o) {
          if (typeof n != `function`) throw TypeError(`The listener must be a function`);
          var s = new a(n, i || e, o),
            c = r ? r + t : t;
          return (
            e._events[c]
              ? e._events[c].fn
                ? (e._events[c] = [e._events[c], s])
                : e._events[c].push(s)
              : ((e._events[c] = s), e._eventsCount++),
            e
          );
        }
        function s(e, t) {
          --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
        }
        function c() {
          ((this._events = new i()), (this._eventsCount = 0));
        }
        ((c.prototype.eventNames = function () {
          var e = [],
            t,
            i;
          if (this._eventsCount === 0) return e;
          for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
          return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
        }),
          (c.prototype.listeners = function (e) {
            var t = r ? r + e : e,
              n = this._events[t];
            if (!n) return [];
            if (n.fn) return [n.fn];
            for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
            return o;
          }),
          (c.prototype.listenerCount = function (e) {
            var t = r ? r + e : e,
              n = this._events[t];
            return n ? (n.fn ? 1 : n.length) : 0;
          }),
          (c.prototype.emit = function (e, t, n, i, a, o) {
            var s = r ? r + e : e;
            if (!this._events[s]) return !1;
            var c = this._events[s],
              l = arguments.length,
              u,
              d;
            if (c.fn) {
              switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                case 1:
                  return (c.fn.call(c.context), !0);
                case 2:
                  return (c.fn.call(c.context, t), !0);
                case 3:
                  return (c.fn.call(c.context, t, n), !0);
                case 4:
                  return (c.fn.call(c.context, t, n, i), !0);
                case 5:
                  return (c.fn.call(c.context, t, n, i, a), !0);
                case 6:
                  return (c.fn.call(c.context, t, n, i, a, o), !0);
              }
              for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
              c.fn.apply(c.context, u);
            } else {
              var f = c.length,
                p;
              for (d = 0; d < f; d++)
                switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                  case 1:
                    c[d].fn.call(c[d].context);
                    break;
                  case 2:
                    c[d].fn.call(c[d].context, t);
                    break;
                  case 3:
                    c[d].fn.call(c[d].context, t, n);
                    break;
                  case 4:
                    c[d].fn.call(c[d].context, t, n, i);
                    break;
                  default:
                    if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                    c[d].fn.apply(c[d].context, u);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (e, t, n) {
            return o(this, e, t, n, !1);
          }),
          (c.prototype.once = function (e, t, n) {
            return o(this, e, t, n, !0);
          }),
          (c.prototype.removeListener = function (e, t, n, i) {
            var a = r ? r + e : e;
            if (!this._events[a]) return this;
            if (!t) return (s(this, a), this);
            var o = this._events[a];
            if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
            else {
              for (var c = 0, l = [], u = o.length; c < u; c++)
                (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
              l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (e) {
            var t;
            return (
              e
                ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                : ((this._events = new i()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = r),
          (c.EventEmitter = c),
          t !== void 0 && (t.exports = c));
      })),
      (jb = Ab().EventEmitter),
      (Mb = class {
        _emitter = new jb();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (Nb = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Pb = kt.requestAnimationFrame || Nb),
      (Fb = (e) => Pb(e)),
      (Ib = 1 / 60),
      (Lb = class extends Mb {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          Ib = e;
        }
        static get TimeStep() {
          return Ib;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return (this._started || ((this._frame = 0), (this._started = !0), Fb(this.tick)), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Ib;
        }
        tick = () => {
          this._started &&
            (Fb(this.tick),
            this.emit(`update`, this._frame, Ib),
            this.emit(`render`, this._frame, Ib),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (Rb = /* @__PURE__ */ new Lb()),
      (zb = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Le({
        borderTopWidth: zb(`y`),
        borderLeftWidth: zb(`x`),
        borderRightWidth: zb(`x`),
        borderBottomWidth: zb(`y`),
      }),
      (Bb = /* @__PURE__ */ M.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Vb = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (Hb = {
        ...Vb,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (Ub = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Wb = { ...Ub, fontWeight: 500 }),
      (Gb = {
        ...Ub,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Kb = (e) => e),
      (qb =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Jb = /* #__PURE__ */ Bo(
        (e) =>
          qb.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (Yb = (e) => () => {
        Ba(e);
      }),
      (Xb = () => () => {}),
      (Zb = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = $b.useImageSource(e, t, n);
          return s(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        fontStore: {
          isSelectorLoaded() {
            return !0;
          },
          async loadFonts() {
            return { newlyLoadedFontCount: 0 };
          },
          async loadWebFontsFromSelectors() {
            return [];
          },
          async loadMissingFonts() {},
        },
        isOnPageCanvas: !1,
      }),
      (Qb = !1),
      ($b = /* @__PURE__ */ new Proxy(Zb, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? Xb()
              : Yb(
                  Qb
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (ex = {
        isSelectorLoaded(e) {
          return $b.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return $b.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return $b.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return $b.fontStore.loadMissingFonts(e, t);
        },
      }),
      (tx = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (nx = [1, 2, 2.2]),
      (rx = [512, 1024, 2048, 4096]),
      (ix = { position: `absolute`, ...tx, top: 0, right: 0, bottom: 0, left: 0 }),
      (ax = `src`),
      (ox = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && ax in e;
        },
      }),
      (sx = /* @__PURE__ */ (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = cs(qa.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(qa(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => qa.distance(e.a, e.b)),
          e
        );
      })()),
      (Z = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => Z.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: Wa(e.x, t),
          y: Wa(e.y, t),
          width: Wa(e.width, t),
          height: Wa(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: Z.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Z.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: qa.distance(t, n), height: qa.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(Z.minX)), y: Math.min(...e.map(Z.minY)) },
            n = { x: Math.max(...e.map(Z.maxX)), y: Math.max(...e.map(Z.maxY)) };
          return Z.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Z.minX(e), y: Z.minY(e) },
          { x: Z.minX(e), y: Z.maxY(e) },
          { x: Z.maxX(e), y: Z.minY(e) },
          { x: Z.maxX(e), y: Z.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < Z.minX(e) ||
            t.x > Z.maxX(e) ||
            t.y < Z.minY(e) ||
            t.y > Z.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Z.points(t)) if (!Z.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= Z.maxX(e) || Z.maxX(t) <= e.x || t.y >= Z.maxY(e) || Z.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = Z.maxX(e),
            r = Z.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Z.maxY(e),
            r = Z.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => !t.some((t) => Z.intersects(t, e)),
        isEqual: (e, t) => Z.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > Z.maxX(e) && (n = t.x - Z.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > Z.maxY(e) && (r = t.y - Z.maxY(e)),
            qa.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Z.minX(e), y: Z.minY(e) },
            r = { x: Z.minX(t), y: Z.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = Z.minX(e),
            r = Z.minY(e),
            i = Z.maxX(e),
            a = Z.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Z.cornerPoints(e);
          return [sx(t, n), sx(n, r), sx(r, i), sx(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  st(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              st(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  st(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              st(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = Z.center(e),
            r = sx(t, n),
            i = Z.edges(e);
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if (t && sx.intersection(r, t, !0)) {
              let n = cx[e];
              return (U(n, () => `Invalid edge name: ${JSON.stringify(cx)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          U(r, `Rect array is empty`);
          let i = Z.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            U(o);
            let s = Z.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (cx = [`top`, `right`, `bottom`, `left`]),
      (lx = {
        quickfix: (e) => (
          (ls(e.widthType) || ls(e.heightType)) && (e.aspectRatio = null),
          q(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || ls(e.widthType) || q(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || ls(e.heightType) || q(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (ux = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = lx.quickfix({
              left: q(t) || Ha(t),
              right: q(n) || Ha(n),
              top: q(r) || Ha(r),
              bottom: q(i) || Ha(i),
              widthType: us(a),
              heightType: us(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = mb.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = mb.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? mb.getNumber(t) : null,
              right: d.right ? mb.getNumber(n) : null,
              top: d.top ? mb.getNumber(r) : null,
              bottom: d.bottom ? mb.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? mb.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? mb.getNumber(t?.sizing.height) : null,
            c = gs(e.left, e.right);
          if (o && q(c)) i = o - c;
          else if (n && ls(e.widthType)) i = n.width;
          else if (q(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                st(e.widthType);
            }
          let l = gs(e.top, e.bottom);
          if (s && q(l)) a = s - l;
          else if (n && ls(e.heightType)) a = n.height;
          else if (q(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                st(e.heightType);
            }
          return hs(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = ux.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? mb.getNumber(l.width) : null,
            d = l ? mb.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? Z.pixelAligned(f) : f;
        },
      }),
      (dx = 200),
      (fx = 200),
      (px = /* @__PURE__ */ M.createContext({ parentSize: 0 })),
      (mx = (e) => {
        let t = ws(),
          { parentSize: n, children: r } = e,
          i = M.useMemo(() => ({ parentSize: n }), [Es(n), Ds(n)]);
        return t === 1
          ? r
            ? /* @__PURE__ */ E(_, { children: r })
            : null
          : /* @__PURE__ */ E(px.Provider, { value: i, children: r });
      }),
      (hx = /* @__PURE__ */ M.createContext(void 0)),
      (gx = `style[data-framer-css-ssr-minified]`),
      (_x = /* #__PURE__ */ (() => {
        if (!mr()) return /* @__PURE__ */ new Set();
        let e = document.querySelector(gx)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : /* @__PURE__ */ new Set();
      })()),
      (vx = `data-framer-css-ssr`),
      (yx = (e, t, n) => (
        Ns() &&
          n !== void 0 &&
          !qe(t) &&
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).filter(Boolean),
        M.forwardRef((r, i) => {
          let { sheet: a, cache: o } = M.useContext(hx) ?? {},
            s = n;
          if (!mr()) {
            qe(t) && (t = t(Ps(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            xx.add(e, s);
          }
          return (
            c(() => {
              (s && _x.has(s)) ||
                (qe(t)
                  ? t(Ps(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && lt(e, a, o));
            }, []),
            /* @__PURE__ */ E(e, { ...r, ref: i })
          );
        })
      )),
      (bx = class {
        styles = /* @__PURE__ */ new Set();
        componentIds = /* @__PURE__ */ new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (xx = /* @__PURE__ */ new bx()),
      (wx = /* @__PURE__ */ dr()),
      (Tx = /* @__PURE__ */ M.createContext(!1)),
      (Ex = class {
        sharedResizeObserver;
        callbacks = /* @__PURE__ */ new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (Dx = mr() ? new Ex() : void 0),
      (Ox = `0.000001px`),
      (kx = ` translateZ(${Ox})`),
      (Ax = gr() || fr() || _r()),
      (jx = /* @__PURE__ */ (() => {
        class e extends y {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? Zs(t) : Qs(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !En(this.props, e);
          }
          componentDidUpdate(e) {
            Kb(this.props).clip &&
              Kb(this.props).radius === 0 &&
              Kb(e).radius !== 0 &&
              ec(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (Mx = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (Nx = {
        hueRotate: (e, t) => X.toHslString(X.hueRotate(X(e), t)),
        setAlpha: (e, t) => X.toRgbString(X.alpha(X(e), t)),
        getAlpha: (e) => {
          let t = po(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => X.toRgbString(X.multiplyAlpha(X(e), t)),
        toHexValue: (e) => X.toHex(X(e)).toUpperCase(),
        toHex: (e) => X.toHexString(X(e)).toUpperCase(),
        toRgb: (e) => X.toRgb(X(e)),
        toRgbString: (e) => X.toRgbString(X(e)),
        toHSV: (e) => X.toHsv(X(e)),
        toHSL: (e) => X.toHsl(X(e)),
        toHslString: (e) => X.toHslString(X(e)),
        toHsvString: (e) => X.toHsvString(X(e)),
        hsvToHSLString: (e) => X.toHslString(X(eo(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => X.toHex(X(eo(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => X.toHexString(X(eo(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => X.toRgbString(X(eo(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => eo(e.h, e.s, e.v),
        rgbaToString: (e) => X.toRgbString(X(e)),
        rgbToHexValue: (e) => X.toHex(X(e)),
        rgbToHexString: (e) => X.toHexString(X(e)),
        hslToString: (e) => X.toHslString(X(e)),
        hslToRgbString: (e) => X.toRgbString(X(e)),
        toColorPickerSquare: (e) => X.toRgbString(X({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => X(e).isValid !== !1,
        equals: (e, t) =>
          X.isP3String(e) || X.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = X(e)),
              typeof t == `string` && (t = X(t)),
              X.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = X(e);
          return t.a === 1 ? X.toHexString(t) : X.toRgbString(t);
        },
        toFormatString: (e) => (X.isP3String(e) ? e : X.toRgbString(X(e))),
      }),
      (Px = /var\(.+\)/u),
      (Fx = /* @__PURE__ */ new Map()),
      (Ix = [`stops`]),
      (Lx = [`start`, `end`]),
      (Rx = [`angle`, `alpha`]),
      (zx = {
        isLinearGradient: (e) => H(e) && Rx.every((t) => t in e) && (cc(e) || sc(e)),
        hash: (e) => e.angle ^ oc(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = ac(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (Bx = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (Vx = {
        isRadialGradient: (e) => H(e) && Bx.every((t) => t in e) && (cc(e) || sc(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ oc(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = ac(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (Hx = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (Ux = /* @__PURE__ */ new Set([...Hx, ...Hx.map((e) => `${e}Capture`)])),
      (Wx = `overflow`),
      (Gx = { x: 0, y: 0, width: 200, height: 200 }),
      (Kx = /* @__PURE__ */ new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (qx = /* @__PURE__ */ D(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = Vs(e),
          l = yc(s),
          u = Us(e),
          d = mc(e),
          f = g(null),
          p = t ?? f,
          m = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": d,
            "data-framer-highlight": d === `pointer` || void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id": Kb(e)[`data-framer-offset-parent-id`],
          };
        !bc(e) && n && (Kb(m)[`data-framer-name`] = n);
        let [h, v] = vc(s),
          y = _c(s),
          b = As(y),
          x = r && !(v && !b && vs(y)) ? r : void 0;
        (x ? (l.transformTemplate ||= Hs(r)) : (l.transformTemplate ||= void 0),
          Object.assign(m, zs(x, s.style)),
          Ys(e, p));
        let C = is(e),
          T = xc(s, y, v, S(Tx)),
          D = Os(
            /* @__PURE__ */ w(_, {
              children: [
                C
                  ? /* @__PURE__ */ E(es, {
                      alt: e.alt ?? ``,
                      image: C,
                      containerSize: v ?? void 0,
                      nodeId: e.id && Bs(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                /* @__PURE__ */ E(ns, { ...a, border: i, layoutId: u }),
              ],
            }),
            T
          ),
          O = Ms(e.as),
          k = js(C);
        return (
          e.fitImageDimension &&
            k &&
            ((h[e.fitImageDimension] = `auto`), (h.aspectRatio = k.width / k.height)),
          /* @__PURE__ */ w(O, { ...m, ...l, layoutId: u, style: h, ref: p, children: [D, o] })
        );
      })),
      (Jx = /* @__PURE__ */ Ls(
        /* @__PURE__ */ D(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? /* @__PURE__ */ E(qx, { ...e, ref: t }) : null;
        })
      )),
      (Yx = `__LAYOUT_TREE_ROOT`),
      (Xx = /* @__PURE__ */ M.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (Zx = class extends y {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity:
                  t.options.layoutId === `__LAYOUT_TREE_ROOT` && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return /* @__PURE__ */ E(Xx.Provider, {
            value: this.sharedLayoutContext,
            children: this.props.children,
          });
        }
      }),
      (Qx = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      ($x = class {
        sharedIntersectionObserver;
        callbacks = /* @__PURE__ */ new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (eS = /* @__PURE__ */ k(/* @__PURE__ */ new Map())),
      (tS = typeof IntersectionObserver > `u` ? xt : kc),
      (nS = /* @__PURE__ */ Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (rS = /* @__PURE__ */ M.createContext(null)),
      (iS = class extends y {
        layoutMaybeMutated = !1;
        projectionNodes = /* @__PURE__ */ new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) =>
          e.options.layoutId === `__LAYOUT_TREE_ROOT` && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return /* @__PURE__ */ E(Ve.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (aS = (e) => {
        let t = M.useContext(Xx);
        return /* @__PURE__ */ E(iS, { ...e, sharedLayoutContext: t });
      }),
      (oS = /* @__PURE__ */ M.createContext(!0)),
      (sS = /* @__PURE__ */ k({ register: () => {}, deregister: () => {} })),
      (cS = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = Fc(),
          i = C(
            (e) => {
              r.has(e)
                ? console.warn(`NavigationTargetWrapper: already registered`)
                : r.set(e, void 0);
            },
            [r]
          ),
          a = C(
            (e) => {
              (r.get(e)?.(), r.delete(e));
            },
            [r]
          ),
          o = g({ register: i, deregister: a }).current;
        return (
          N(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, qe(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          /* @__PURE__ */ E(sS.Provider, { value: o, children: n })
        );
      }),
      (lS = /* @__PURE__ */ M.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: c,
        backfaceVisible: l,
        exitBackfaceVisible: u,
        animation: d,
        exitAnimation: f,
        instant: p,
        initialProps: m,
        exitProps: h,
        position: _ = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: v,
        index: y,
        areMagicMotionLayersPresent: b,
        id: x,
        isInitial: C,
      }) {
        let T = le(),
          D = S(Ne),
          { persistLayoutIdCache: O } = S(Bb),
          k = g({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Rc({}, m, a),
          }),
          A = g(null),
          j = D !== null && !D.isPresent;
        (t && k.current.wasCurrent === void 0 && O(),
          N(() => {
            if (e || !T) return;
            if (j) {
              k.current = { ...k.current, wasBeingRemoved: j };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = k.current,
              o = (t && !i) || (!j && k.current.wasBeingRemoved && t),
              s = n && !r,
              c = Rc(k.current.origins, m, a),
              l = k.current.wasReset;
            (o || s
              ? (T.stop(), T.start({ zIndex: y, ...c, ...a }), (l = !1))
              : l === !1 && (T.stop(), T.set({ zIndex: y, ...uS, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, j]));
        let M = p ? { type: !1 } : `velocity` in d ? { ...d, velocity: 0 } : d,
          P = p ? { type: !1 } : f || d,
          F = { ..._ };
        ((F.left === void 0 || F.right === void 0) && (F.width = `auto`),
          (F.top === void 0 || F.bottom === void 0) && (F.height = `auto`));
        let I = (zc(a) || zc(m)) && (e || t || n) ? 1200 : void 0,
          ee = { ...uS, ...k.current.origins },
          te = e
            ? {
                initial: { ...ee, ...m },
                animate: { ...ee, ...a, transition: M },
                exit: { ...ee, ...h, transition: d },
              }
            : { animate: T, exit: { ...ee, ...h, transition: P } },
          ne = !(j || b === !1),
          L = !!t && ne,
          re = t && C;
        return /* @__PURE__ */ w(Jx, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || j || (t && v) ? y : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: I,
          },
          children: [
            e &&
              /* @__PURE__ */ E(Jx, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: d,
                initial: { opacity: p && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: j ? void 0 : c,
              }),
            /* @__PURE__ */ E(Jx, {
              ...F,
              ...te,
              transition: {
                default: M,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: j ? u : l,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: re || e || (t && v) ? 1 : 0 },
              "data-is-present": ne ? void 0 : !1,
              ref: A,
              children: /* @__PURE__ */ E(rS.Provider, {
                value: A,
                children: /* @__PURE__ */ E(oS.Provider, {
                  value: L,
                  children: /* @__PURE__ */ E(cS, {
                    isCurrent: L,
                    isOverlayed: r,
                    children: /* @__PURE__ */ E(aS, {
                      isLead: t,
                      animatesLayout: !!v,
                      transition: M,
                      isExiting: !ne,
                      isOverlayed: r,
                      id: x,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, Lc)),
      (uS = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (dS = class {
        warning = () => {
          Ba(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (fS = /* @__PURE__ */ k(/* @__PURE__ */ new dS())),
      (pS = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (mS = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (hS = /* @__PURE__ */ Sv(uS)),
      (gS = /* @__PURE__ */ M.createContext(void 0)),
      (_S = /* @__PURE__ */ M.createContext(void 0)),
      (vS = /* @__PURE__ */ (() => {
        class e extends y {
          #e = null;
          state = mS();
          static defaultProps = { enabled: !0 };
          static contextType = gS;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !ss(t) || !os(t)) return;
            let n = { ...pS.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = Uc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!ss(t) || !os(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, pS.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = Uc(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !ss(e) || !os(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, pS.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, pS.Fade, t);
          }
          push(e, t) {
            this.#i(e, Bc(t), t);
          }
          modal(e, t) {
            this.#i(e, pS.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, Vc(t), t);
          }
          flip(e, t) {
            this.#i(e, Hc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, pS.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = il(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              U(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              U(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                /* @__PURE__ */ E(
                  lS,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: ml(o, e),
                    transitionProps: u,
                    animation: pl(o, e),
                    backfaceVisible: dl(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: /* @__PURE__ */ E(Sc, {
                      children: gl({ component: n, transition: l?.transition }),
                    }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              /* @__PURE__ */ E(
                lS,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: ul(n, t),
                  transitionProps: fl(n, t),
                  instant: ml(n, t, !0),
                  animation: pl(n, t),
                  exitProps: e.transition.enter,
                  visible: hl(n, t),
                  backdropColor: cl(e.transition),
                  backfaceVisible: ll(n, t),
                  onTapBackdrop: _l(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: gl({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return /* @__PURE__ */ E(Jx, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: /* @__PURE__ */ E(fS.Provider, {
                value: this,
                children: /* @__PURE__ */ w(_S.Provider, {
                  value: i,
                  children: [
                    /* @__PURE__ */ E(lS, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: al(n),
                      animation: ol(n),
                      backfaceVisible: sl(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: /* @__PURE__ */ E(Mo, {
                        children: /* @__PURE__ */ E(Zx, {
                          children: /* @__PURE__ */ E(Fe, {
                            presenceAffectsLayout: !1,
                            children: a,
                          }),
                        }),
                      }),
                    }),
                    /* @__PURE__ */ E(Fe, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (yS = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (bS = /* @__PURE__ */ Ls(/* @__PURE__ */ M.forwardRef(vl))),
      (xS = /* @__PURE__ */ (function (e) {
        return (
          (e.Boolean = `boolean`),
          (e.Number = `number`),
          (e.MotionValue = `motionvalue`),
          (e.Dimension = `dimension`),
          (e.String = `string`),
          (e.RichText = `richtext`),
          (e.FusedNumber = `fusednumber`),
          (e.Enum = `enum`),
          (e.SegmentedEnum = `segmentedenum`),
          (e.Color = `color`),
          (e.Image = `image`),
          (e.ResponsiveImage = `responsiveimage`),
          (e.File = `file`),
          (e.ComponentInstance = `componentinstance`),
          (e.Slot = `slot`),
          (e.Array = `array`),
          (e.EventHandler = `eventhandler`),
          (e.ChangeHandler = `changehandler`),
          (e.Transition = `transition`),
          (e.BoxShadow = `boxshadow`),
          (e.Link = `link`),
          (e.Date = `date`),
          (e.Object = `object`),
          (e.Font = `font`),
          (e.PageScope = `pagescope`),
          (e.ScrollSectionRef = `scrollsectionref`),
          (e.Ref = `ref`),
          (e.CustomCursor = `customcursor`),
          (e.Border = `border`),
          (e.Cursor = `cursor`),
          (e.Padding = `padding`),
          (e.BorderRadius = `borderradius`),
          (e.Gap = `gap`),
          (e.CollectionReference = `collectionreference`),
          (e.MultiCollectionReference = `multicollectionreference`),
          (e.TrackingId = `trackingid`),
          (e.VectorSetItem = `vectorsetitem`),
          (e.LinkRelValues = `linkrelvalues`),
          (e.Location = `location`),
          (e.SharedType = `sharedtype`),
          e
        );
      })({})),
      (SS = /* @__PURE__ */ Symbol.for(`framer.sharedEnum`)),
      (CS = `optional`),
      (wS = `outputControls`),
      (TS = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (ES = /* @__PURE__ */ Symbol(`private`)),
      (DS = /* @__PURE__ */ (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [ES]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new pb(),
                reset() {
                  for (let t in i)
                    if (TS(i, t)) {
                      let n = TS(e, t) ? Kb(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: /* @__PURE__ */ new Set(),
              },
            },
            i = new Proxy(r, kS);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[ES].reset()),
          (e.addObserver = (e, t) => e[ES].observers.add(t)),
          e
        );
      })()),
      (OS = class {
        set = (e, t, n, r) => {
          if (t === ES) return !1;
          let i = e[ES],
            a,
            o;
          if (
            (Ha(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = mb(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = Kb(e)[t];
          if (l !== void 0) {
            Ha(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Kb(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === ES) return Kb(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[ES].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(ES);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== ES) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (kS = /* @__PURE__ */ new OS()),
      (AS = /* @__PURE__ */ (() => {
        function e(t = {}) {
          let n = DS(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => DS.resetObject(e));
          }),
          (e.addObserver = (e, t) => DS.addObserver(e, t)),
          e
        );
      })()),
      (jS = { update: 0 }),
      (MS = /* @__PURE__ */ M.createContext({ update: NaN })),
      (NS = class extends y {
        observers = [];
        state = jS;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), Rb.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), AS.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            AS._stores.forEach((e) => {
              let t = AS.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            /* @__PURE__ */ E(MS.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      (PS = `__framer__`),
      (FS = 10),
      (IS = /* @__PURE__ */ M.createContext(void 0)),
      (LS = /* @__PURE__ */ M.createContext(void 0)),
      (RS = `ssr-variant`),
      (zS = `ssr-variant-group-separator`),
      (BS = /* @__PURE__ */ M.forwardRef(function (e, t) {
        let n = Bl(t),
          r = M.useContext(LS),
          i = M.useSyncExternalStore(Et, Ot, Dt),
          a = Fo(() => (i ? (mr() ? 1 : 2) : 0)),
          o = M.useContext(IS);
        return zi(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, Jl(t, c, i));
            case 1:
              return Ul(i, s, c, u, l, d, n, t);
            case 2:
              return Ul(i, s, c, u, l, d, zl, void 0);
            default:
              st(a);
          }
        }, [o, r, n, e]);
      })),
      (VS = /* @__PURE__ */ yx(BS, `.${RS} { display: contents }`, `PropertyOverrides`)),
      (HS = `default`),
      (US = /* @__PURE__ */ new Set([HS])),
      (WS = class {
        entries = /* @__PURE__ */ new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (U(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (U(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
          }
        }
        setHash(e, t = HS, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return HS;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = Wl(r)) : HS;
        }
        setAll(e, t = US, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = qe(n.transformTemplate) ? n.transformTemplate?.({}, KS) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: H(a) ? a : void 0,
              animate: H(o) ? o : void 0,
              transformTemplate: V(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (GS = /* @__PURE__ */ new WS()),
      (KS = `__Appear_Animation_Transform__`),
      (qS = `data-framer-appear-id`),
      (JS = `data-framer-appear-animation`),
      (YS = (e) => {
        if (Ro())
          return {
            animate: Xl(e.animate) ? e.animate : void 0,
            initial: Xl(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (XS = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (ZS = (e) => ({
        x: L(e?.x ?? 0),
        y: L(e?.y ?? 0),
        opacity: L(e?.opacity ?? 1),
        scale: L(e?.scale ?? 1),
        rotate: L(e?.rotate ?? 0),
        rotateX: L(e?.rotateX ?? 0),
        rotateY: L(e?.rotateY ?? 0),
        skewX: L(e?.skewX ?? 0),
        skewY: L(e?.skewY ?? 0),
        transformPerspective: L(e?.transformPerspective ?? 0),
      })),
      (QS = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      ($S = /* @__PURE__ */ Object.freeze({ willChange: `transform` })),
      (eC = /* @__PURE__ */ Object.freeze({})),
      (tC = /* @__PURE__ */ new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (nC = () => {
        let e = g();
        return (
          N(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (rC = /* @__PURE__ */ new Set([
        `speed`,
        `adjustPosition`,
        `offset`,
        `parallaxTransformEnabled`,
      ])),
      (iC = /* @__PURE__ */ new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (aC = 1),
      (oC = 4),
      (sC = /* @__PURE__ */ new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (cC = [`animate`, `animate`]),
      (lC = { inputRange: [], outputRange: [] }),
      (uC = /* @__PURE__ */ new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (dC = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (fC = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (pC = [0, 1]),
      (mC = { parallax: rC, styleAppear: sC, styleTransform: uC, loop: tC, presence: iC }),
      (hC = /* @__PURE__ */ Sv(mC)),
      (gC = (e) => e.reduce((e, t) => (e += t), 0)),
      (_C = (e) => e.reduce((e, t) => (e *= t), 1)),
      (vC = `current`),
      (yC = (e) =>
        M.forwardRef((t, n) => {
          let r = !Ue(e);
          if (t.__withFX) {
            let i = { ...t };
            return (
              r || Reflect.deleteProperty(i, `__withFX`),
              /* @__PURE__ */ E(e, { ...i, animate: void 0, initial: void 0, exit: void 0, ref: n })
            );
          }
          let i = YS(t);
          if (i) return /* @__PURE__ */ E(e, { ...yu(t).forwardedProps, ...i, ref: n });
          let {
              parallax: a = {},
              styleAppear: o = {},
              styleTransform: s = {},
              presence: c = {},
              loop: l = {},
              forwardedProps: u,
              targetOpacityValue: d,
              withPerspective: f,
              inSmartComponent: p = !1,
            } = yu(t),
            m = Ec(n),
            { values: h, style: g } = au(
              c,
              m,
              p,
              Qe(d) ? t.style : { ...t.style, opacity: void 0 },
              t[fe]
            ),
            { values: _, style: v } = tu(a, m, t.style?.visibility),
            { values: y, style: b } = _u(s, m),
            { values: x, style: S } = pu(o, m),
            { values: C, style: w } = $l(l, m),
            T = M.useMemo(() => {
              let e = new we(d ?? 1);
              return {
                scale: [x.scale, C.scale, h.scale, y.scale],
                opacity: [x.opacity, C.opacity, h.opacity, e, y.opacity],
                x: [x.x, C.x, h.x, y.x],
                y: [x.y, C.y, _.y, h.y, y.y],
                rotate: [x.rotate, C.rotate, h.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, h.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, h.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, h.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, h.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [d, y, _, x, C, h]);
          xu(t.style, T);
          let D = R(T.scale, _C),
            O = R(T.opacity, _C),
            k = R(T.x, gC),
            A = R(T.y, gC),
            j = R(T.rotate, gC),
            N = R(T.rotateX, gC),
            P = R(T.rotateY, gC),
            F = R(T.skewX, gC),
            I = R(T.skewY, gC),
            ee = R(T.transformPerspective, gC),
            { drag: te, dragConstraints: ne } = u;
          Gs(te && bu(ne) ? ne : void 0);
          let L = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: j,
            rotateX: N,
            rotateY: P,
            skewX: F,
            skewY: I,
          };
          Qe(f) && (L.transformPerspective = ee);
          let re = Su(t.animate) ? t.animate : void 0,
            ie = Su(t.initial) ? t.initial : void 0,
            ae = Su(t.exit) ? t.exit : void 0,
            oe = p && !c.presenceInitial ? { initial: ie, animate: re, exit: ae } : {},
            se = r ? { __withFX: !0 } : {};
          return /* @__PURE__ */ E(e, {
            ...u,
            ...oe,
            ...se,
            style: { ...t.style, ...v, ...b, ...w, ...L, ...S, ...g },
            values: h,
            ref: m,
          });
        })),
      (bC = /* @__PURE__ */ k({})),
      (xC = /* @__PURE__ */ M.createContext({})),
      (SC = /* @__PURE__ */ M.forwardRef(function (
        { width: e, height: t, y: n, children: r, ...i },
        a
      ) {
        let o = M.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Bl(a);
        return /* @__PURE__ */ E(xC.Provider, { value: o, children: s(r, i) });
      })),
      (CC = (e) =>
        M.forwardRef((t, n) => {
          let r = Eu(t);
          return /* @__PURE__ */ E(e, { ...r, ref: n });
        })),
      (wC = {}),
      (TC = () => wC),
      (EC = (e) => {
        wC = e;
      }),
      (DC = !1),
      (OC = class extends y {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Du(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              ot(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          qn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Du(e)) throw e;
          return ((DC = !0), this.props.children);
        }
      }),
      (kC = t === void 0 ? null : new Promise(() => {})),
      (AC = /* @__PURE__ */ E(Ou, {})),
      (jC = /* @__PURE__ */ (() => {
        let e = k(!1);
        return ((e.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`), e);
      })()),
      (MC = /* @__PURE__ */ E(Au, {})),
      (NC = class extends y {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Mu(this.props.getErrorMessage(), t?.componentStack), ju(e, t));
        }
        render() {
          let { children: e, fallback: t = MC } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (PC = class extends y {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            ju(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (FC = /* @__PURE__ */ M.createContext(void 0)),
      (IC = `code-crash:`),
      (LC = /* @__PURE__ */ CC(
        /* @__PURE__ */ M.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            rendersWithMotion: c,
            __withFX: l,
            ...u
          },
          d
        ) {
          let f = Fo(() => (t ? `${t}-container` : void 0)),
            p = Ms(n),
            m = M.useId(),
            h = qu(
              M.Children.map(e, (e) =>
                M.isValidElement(e) ? M.cloneElement(e, { layoutId: t ?? e.props.layoutId }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return /* @__PURE__ */ E(p, {
            layoutId: f,
            ...u,
            ref: d,
            children: /* @__PURE__ */ E(Tx.Provider, {
              value: !0,
              children: /* @__PURE__ */ E(Ly.Provider, {
                value: i ?? null,
                children: /* @__PURE__ */ E(Po, {
                  enabled: !1,
                  children: /* @__PURE__ */ E(Ae, {
                    id: t ?? (s ? m : ``),
                    inherit: u.layout ? !0 : `id`,
                    children: h,
                  }),
                }),
              }),
            }),
          });
        })
      )),
      (RC = /* @__PURE__ */ M.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = qu(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Ms(f);
          return /* @__PURE__ */ E(Ly.Provider, {
            value: a ?? null,
            children: /* @__PURE__ */ E(n, { ...u, ref: t, style: e.style, children: d }),
          });
        }
        {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return /* @__PURE__ */ E(Ly.Provider, {
            value: a ?? null,
            children: /* @__PURE__ */ E(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (BC = /* @__PURE__ */ new Set()),
      (VC = /* @__PURE__ */ k({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (HC = `framer-cursor-none`),
      (UC = `framer-pointer-events-none`),
      (WC = /* @__PURE__ */ f(function ({ children: e }) {
        let t = Fo(() => {
            let e = /* @__PURE__ */ new Set(),
              t = {},
              n = /* @__PURE__ */ new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = $u(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = se();
        return /* @__PURE__ */ w(VC.Provider, {
          value: t,
          children: [e, !n && /* @__PURE__ */ E(JC, {})],
        });
      })),
      (GC = /* @__PURE__ */ yx(
        WC,
        [
          `.${HC}, .${HC} * { cursor: none !important; }`,
          `.${UC}, .${UC} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (KC = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (qC = `data-framer-portal-id`),
      (JC = /* @__PURE__ */ f(function () {
        let { onRegisterCursors: e } = S(VC),
          t = Qu(!1),
          n = B(0),
          i = B(0),
          a = B(0),
          o = g(null),
          s = g({ cursors: {}, cursorHash: void 0 }),
          c = Ws();
        (N(() => {
          if (!t) return;
          let e = 0,
            r = 0;
          function l() {
            (n.set(e), i.set(r), Pe(a, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (Ze(s.current.cursors)) return;
            let t = rd(e, r);
            t !== s.current.cursorHash && ((s.current.cursorHash = t), He.update(() => c()));
          };
          function d(t) {
            t.pointerType === `touch`
              ? Oe(u)
              : (He.read(u, !0), (e = t.clientX), (r = t.clientY), He.update(l));
          }
          function f(e) {
            if (e.target === o.current || !o.current) return;
            let t = new PointerEvent(e.type, {
              bubbles: !0,
              cancelable: e.cancelable,
              pointerType: e.pointerType,
              pointerId: e.pointerId,
              composed: e.composed,
              isPrimary: e.isPrimary,
              buttons: e.buttons,
              button: e.button,
            });
            He.update(() => {
              o.current?.dispatchEvent(t);
            });
          }
          return (
            kt.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            He.read(u, !0),
            () => {
              (kt.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                Oe(u));
            }
          );
        }, [a, n, i, c, t]),
          N(() => {
            if (!t) return;
            function e() {
              Pe(a, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              kt.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), kt.removeEventListener(`blur`, e));
              }
            );
          }, [a, t]),
          r(() => {
            function t(e) {
              ((s.current.cursors = e),
                (s.current.cursorHash = Ze(e) ? null : rd(n.get(), i.get())),
                c());
            }
            let r = e(t);
            return () => {
              (r(), document.body.classList.toggle(HC, !1));
            };
          }, [n, i, e, c]));
        let { cursors: l, cursorHash: u } = s.current,
          d = u ? l[u] : null,
          f = ed(d);
        r(() => {
          t && document.body.classList.toggle(HC, f);
        }, [f, t]);
        let p = d?.component,
          m = d?.transition ?? { duration: 0 },
          h = m.duration === void 0 ? m : { ...m, duration: m.duration * 1e3 },
          _ = be(n, h),
          v = be(i, h),
          y = R(() => _.get() + (d?.offset?.x ?? 0)),
          x = R(() => v.get() + (d?.offset?.y ?? 0)),
          w = d?.alignment,
          T = d?.placement,
          D = C((e, t) => `translate(${nd(T, w)}) ${t}`, [w, T]);
        return !t || !d || !p
          ? null
          : /* @__PURE__ */ E(b, {
              children: /* @__PURE__ */ E(p, {
                transformTemplate: D,
                style: { ...KC, x: y, y: x, opacity: a },
                globalTapTarget: !0,
                variant: d?.variant,
                ref: o,
                className: UC,
              }),
            });
      })),
      (YC = `webPageId`),
      (XC = class {
        collectedLinks = /* @__PURE__ */ new Map();
        nestingInfo = /* @__PURE__ */ new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = /* @__PURE__ */ new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            U(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (U(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((St && !_r()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(od(e), e), this.collectedLinks.set(od(t), t));
          let n = this.nestingInfo.get(od(e)) ?? /* @__PURE__ */ new Set();
          (n.add(od(t)), this.nestingInfo.set(od(e), n));
        }
      }),
      (ZC = /* @__PURE__ */ new XC()),
      (QC = `element`),
      ($C = `collection`),
      (ew = `collectionItemId`),
      (tw = `pathVariables`),
      (nw = `framer/page-link,`),
      (rw = /* @__PURE__ */ k(void 0)),
      (iw = class extends y {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((t.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(ot(Ct ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          qn(`published_site_load_error`, { message: String(e), stack: n });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (Ct && document.getElementById(`main`)?.innerHTML) || ``;
          return /* @__PURE__ */ E(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${ot()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (ow = /:([a-z]\w*)/gi),
      (sw = /* @__PURE__ */ k(void 0)),
      (cw = /* @__PURE__ */ new Map()),
      (lw = 500),
      (uw = 500),
      (fw = !1),
      (pw = 500),
      (mw = 0.9),
      (hw = 1.7),
      (gw = 4),
      (_w = 1 / 0),
      (vw = /* @__PURE__ */ new WeakMap()),
      (yw = /* @__PURE__ */ new Set()),
      (bw = /* @__PURE__ */ new Map()),
      (xw = !by || typeof IntersectionObserver > `u` ? null : /* @__PURE__ */ Ud()),
      (Sw = /* @__PURE__ */ Td(
        /* @__PURE__ */ D(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: c,
            scopeId: l,
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = kn(),
            m = jn(),
            h = kd(),
            { activeLocale: g, locales: _ } = Ir(),
            v = Xd(),
            y = zr(),
            b = sd(),
            x = Zd({ nodeId: c, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            S = s(() => {
              if (!t) return {};
              let e = ad(t) ? t : md(t);
              if (!e) return {};
              if (V(e))
                return cf(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  y,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = v(i, s, g);
              if (it(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = Ed(p, m, e, g, c, h),
                S = Gd(n, !0),
                C = S === `_blank`,
                w = sf(u, C, p.siteCanonicalURL),
                T = { pathVariables: f, locale: b },
                E = tf(u, w, (e) =>
                  $d(
                    p,
                    l,
                    () =>
                      y(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    f,
                    r,
                    e
                  )
                );
              return {
                href: u,
                target: S,
                onClick: ef(u, x, E),
                "data-framer-page-link-current": (m && Ad(m, e, h)) || void 0,
                navigate: E,
                preload: () =>
                  y(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
                _navigationUrl: w,
              };
            }, [t, p, g, h, n, m, r, x, a, _, o, v, y]),
            C = Ec(T(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: w,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              _navigationUrl: A,
              ...j
            } = S;
          Dc(
            C,
            (e) => {
              if (e !== null && D && E && A && !b)
                return xw?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`, A);
            },
            [E, D, O, k, A, b]
          );
          let M = !!w;
          return gd(
            Bl(f).cloneAsArray(e, (e) => lf(e, { ...d, ...df(j, u, M) }, C)),
            l,
            c,
            t,
            S,
            C
          );
        })
      )),
      (Cw = `framer`),
      (ww = 3),
      (Tw = 30),
      (Ew = 1e4),
      (Dw = `__framer`),
      (Ow = `3`),
      (kw = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (Aw = /* @__PURE__ */ Date.now()),
      (jw = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (Mw = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (Nw = () => ((Date.now() - Aw) / 1e3).toFixed(2)),
      (Pw = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          M.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          M.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = Nw())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = Nw()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = Nw()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          /* @__PURE__ */ E(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (Fw = { state: `pending` }),
      (Iw = { state: `success` }),
      (Lw = { state: `incomplete` }),
      (Rw = { state: `complete` }),
      (zw = { state: `error` }),
      (Bw = /* @__PURE__ */ M.createContext(void 0)),
      (Vw = /* @__PURE__ */ M.forwardRef(function (
        {
          action: e,
          children: t,
          redirectUrl: n,
          onSuccess: r,
          onError: i,
          onLoading: a,
          submitTrackingId: o,
          nodeId: s,
          ...c
        },
        l
      ) {
        let d = M.useRef(null),
          f = Ge(l, d),
          {
            states: p,
            convertHoneypotFieldsForSubmission: m,
            replaceHoneypotWithMetadata: h,
          } = bf(),
          g = kn(),
          _ = jn(),
          v = kd(),
          y = ir(),
          [b, x] = M.useReducer(wf, Lw),
          { activeLocale: C, locales: T } = Ir(),
          D = S(Bw),
          O = M.useRef({ onSuccess: r, onError: i, onLoading: a });
        O.current = { onSuccess: r, onError: i, onLoading: a };
        let k = M.useRef(!1);
        async function A(e) {
          if (V(e)) {
            let t = Dd(g, e, v, T);
            if (!t) {
              Df(e, d);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            g.navigate?.(n, r, i);
            return;
          }
          U(
            ad(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await Jd(e.unresolvedPathSlugs, e.unresolvedHashSlugs, C, y),
            { routeId: n, elementId: r, pathVariables: i } = Ed(g, _, e, C, t, v);
          g.navigate?.(n, r, i);
        }
        let j = (e) => {
          (e.preventDefault(), N(e.currentTarget));
        };
        async function N(t) {
          if (!e || !D || k.current) return;
          ((k.current = !0), m());
          let r = new FormData(t),
            i = gf(t);
          (await py({ priority: `user-visible`, continueAfter: `paint` }),
            h(r),
            u(() => x({ type: `submit` })),
            yf(r, kt.document));
          for (let [e, t] of r) t instanceof File && r.delete(e);
          try {
            (O.current.onLoading?.(),
              Sf({ router: g, nodeId: s, submitTrackingId: o, activeLocale: C }),
              await kf(e, r, i, D),
              u(() => x({ type: `success` })),
              O.current.onSuccess?.(),
              n && (await A(n)));
          } catch (e) {
            (u(() => x({ type: `error` })), O.current.onError?.(), console.error(e));
          }
          k.current = !1;
        }
        let P = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), j(e)));
          },
          F = async (e) => {
            let t = e.currentTarget;
            (await py({ priority: `background`, continueAfter: `paint` }),
              u(() => x({ type: Of(t) ? `incomplete` : `complete` })));
          };
        na(d, (e) => void N(e));
        let I = M.useMemo(() => t(b), [t, b]);
        return /* @__PURE__ */ w(z.form, {
          ...c,
          method: `post`,
          "data-framer-form": ``,
          onSubmit: Tf(b) ? j : Ef,
          onKeyDown: P,
          onChange: F,
          ref: f,
          children: [
            I,
            /* @__PURE__ */ E(xf, { states: p }),
            /* @__PURE__ */ E(`script`, { dangerouslySetInnerHTML: { __html: ta() } }),
            /* @__PURE__ */ w(`noscript`, {
              children: [
                /* @__PURE__ */ E(`style`, {
                  children: `[data-framer-form] input[name=framer-noscript] { position: absolute; transform: scale(0); }`,
                }),
                /* @__PURE__ */ E(`input`, {
                  required: !0,
                  pattern: `(?!)`,
                  name: `framer-noscript`,
                  tabIndex: -1,
                  "aria-label": `Enable JavaScript to submit this form`,
                  title: `Enable JavaScript to submit this form`,
                }),
                /* @__PURE__ */ E(`p`, { children: `Enable JavaScript to submit this form.` }),
              ],
            }),
          ],
        });
      })),
      (Hw = `__framer_force_showing_editorbar_since`),
      (Uw = class extends y {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (Ww = () => {
        try {
          return !!localStorage[Hw];
        } catch {
          return !1;
        }
      }),
      (Gw = () => !Ww()),
      (Kw = /* @__PURE__ */ (() => {
        let e = k(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (qw = null),
      (Jw = null),
      Tt(Lf),
      (Yw = (e, n, r, i, a, o) => {
        let s = S(Bw),
          c = g(),
          l = ir(),
          u = g(!0);
        return (
          N(() => {
            function d() {
              (!qw || !Jw) && Lf();
              let t = r ? new URL(r, kt.location.href) : kt.location,
                c = {
                  version: 2,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: qw,
                  locale: Jw,
                },
                d = u.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && l?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && V(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (it(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (c.current = d()),
                t = e instanceof Promise ? await e : e;
              ((c.current = t),
                u.current ? (u.current = !1) : qn(`published_site_pageview`, t, `eager`));
            })();
            let f = async (e) => {
              if (e.persisted) {
                let e = (c.current = d()),
                  t = e instanceof Promise ? await e : e;
                ((c.current = t), qn(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              t.addEventListener(`pageshow`, f),
              () => {
                t.removeEventListener(`pageshow`, f);
              }
            );
          }, [e, n, r, i, a, s, l, o]),
          c
        );
      }),
      (Xw = 0),
      (Zw = 500),
      (Qw = 200),
      ($w = `main`),
      (eT = `framerGeneratedPage`),
      (tT = `<!-- Start of headStart -->`),
      (nT = `<!-- End of headStart -->`),
      (rT = `<!-- Start of headEnd -->`),
      (iT = `<!-- End of headEnd -->`),
      (aT = `<!-- Start of bodyStart -->`),
      (oT = `<!-- End of bodyStart -->`),
      (sT = `<!-- Start of bodyEnd -->`),
      (cT = `<!-- End of bodyEnd -->`),
      (lT = /* @__PURE__ */ M.createContext(void 0)),
      (uT = { status: `loading`, data: void 0 }),
      (dT = 5e3),
      (fT = () => {}),
      (pT = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = /* @__PURE__ */ new Map();
        #e = /* @__PURE__ */ new Map();
        #t = /* @__PURE__ */ new Set();
        #n = /* @__PURE__ */ new Map();
        #r = /* @__PURE__ */ new Map();
        #i = /* @__PURE__ */ new Map();
        #a = /* @__PURE__ */ new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = Ap(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = Ap(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = Math.min(Pp(r), 2 ** 31 - 1),
            a = kt.setInterval(() => {
              if (document.visibilityState === `hidden`) return;
              let n = this.#r.get(t);
              r && n && this.fetchWithCache({ ...e, cacheDuration: r });
            }, i);
          this.#a.set(t, a);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Fp(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = Il(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && Fp(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!mr() || !ld(e.url, !1)) return;
          let t = Ap(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = Np(n, e);
          return (e.resultOutputType === `image` && V(i) && (await Dp(i).catch(fT)), i);
        }
        async fetchWithCache(e) {
          if (!mr()) return;
          let t = Ap(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Fp(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, uT);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: /* @__PURE__ */ Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!t || this.#t.has(e)) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!ld(r, !1)) return fT;
          let a = Ap(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? /* @__PURE__ */ new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n && (n.delete(t), n.size === 0 && (this.#e.delete(a), this.stopQueryRefetching(e)));
            }
          );
        }
      }),
      (mT = /* @__PURE__ */ k(void 0)),
      (hT = /* @__PURE__ */ k(!0)),
      (gT = ({ children: e, client: t }) => {
        let [n] = m(() => t ?? new pT()),
          [r, i] = m(!0);
        return (
          N(
            () => (
              n.hydrateCache(),
              u(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          /* @__PURE__ */ E(hT.Provider, {
            value: r,
            children: /* @__PURE__ */ E(mT.Provider, { value: n, children: e }),
          })
        );
      }),
      (_T = /* @__PURE__ */ (() => {
        let e = k(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (Be.WillChange = class extends Te {
        add(e) {
          e !== `backgroundColor` && super.add(e);
        }
      }),
      (vT = /* @__PURE__ */ Td(
        /* @__PURE__ */ D(function ({ links: e, children: t, ...n }, r) {
          return Bl(r)(t(Rp((t) => e.map(t), [e])), n);
        })
      )),
      (yT = { priority: void 0, canYield: !0 }),
      (bT = class {
        collection;
        locale;
        schema;
        indexes = [];
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = kl(e);
          U(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (U(n !== `array`, `Array properties are not supported`),
              U(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (et(i)) continue;
            let a = this.schema[t];
            Qe(a) ||
              (U(a.type !== `unknown`, `Invalid definition type`),
              (n[t] =
                a.type === `richtext`
                  ? { type: a.type, value: { itemIndex: r, key: t } }
                  : { type: a.type, value: i }));
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await rm(this.collection, this.locale))[t]?.[n];
          return kv.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await rm(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Wp(e);
            i && (await i);
            let a = t[r];
            U(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await rm(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = Wp(t);
            e && (await e);
            let a = n[Number(i)];
            (U(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (xT = /* @__PURE__ */ new Map()),
      (ST = /* @__PURE__ */ new WeakMap()),
      (CT = `$r_`),
      (wT = /* @__PURE__ */ new Map()),
      (TT = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return um(e, t);
            case `boolean`:
              return fm(e);
            case `color`:
              return hm(e);
            case `date`:
              return _m(e);
            case `enum`:
              return ym(e);
            case `file`:
              return xm(e);
            case `link`:
              return Cm(e);
            case `number`:
              return Tm(e);
            case `object`:
              return Om(e, t);
            case `responsiveimage`:
              return Am(e);
            case `richtext`:
              return Mm(e);
            case `string`:
              return Im(e);
            case `vectorsetitem`:
              return Pm(e);
            case `unknown`:
              return e;
            default:
              st(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Je(e)
            ? { type: `boolean`, value: e }
            : tt(e)
              ? { type: `date`, value: e.toISOString() }
              : Ye(e)
                ? { type: `number`, value: e }
                : V(e)
                  ? { type: `string`, value: e }
                  : Xe(e)
                    ? { type: `array`, value: e.map(TT.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && Rm(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && Rm(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && Rm(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && Rm(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && Rm(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => TT.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => TT.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Lm(e),
            i = Lm(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Lm(e),
            i = Lm(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Lm(e),
            i = Lm(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          return e?.type === `array` ? e.value.length : 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(TT.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return V(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              st(e);
          }
        },
      }),
      (ET = { type: `unknown`, isNullable: !0 }),
      (DT = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = qm(e, t)), (this.priority = Vm(n)));
        }
        *resolveArrayValue(e) {
          return yield* Yp(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* Jp(t);
        }
        richTextCache = /* @__PURE__ */ new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          U(Wm(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          U(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? /* @__PURE__ */ new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return rt(t) ? yield t : t;
        }
        vectorSetItemCache = /* @__PURE__ */ new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          U(Km(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (U(n, `Can't find collection for vector set item pointer`),
            U(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? /* @__PURE__ */ new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return rt(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (OT = `index`),
      (kT = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), Y(this.name, ...e));
        }
      }),
      (AT = class {
        id;
        name;
        data;
        indexes = new MT();
        fields = new Q();
        fieldByName = /* @__PURE__ */ new Map();
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (jT = class {
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
      }),
      (MT = class extends kT {
        name = `Indexes`;
      }),
      (NT = class {
        id;
        name;
        definition;
        collection;
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        isProvidedByScan() {
          let e = this.collection?.data.scannedFields;
          return !e || (this.name !== void 0 && this.name in e);
        }
        getValue(e) {
          U(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                U(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Um(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                U(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Gm(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends kT {
        name = `Fields`;
      }),
      (PT = class {
        field;
        direction;
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        getHash() {
          return Y(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (FT = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return Y(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== `index`) return !1;
          return !0;
        }
      }),
      (IT = class {
        ordering;
        resolvedFields;
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        getHash() {
          return Y(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (LT = class e {
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (U(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (U(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = /* @__PURE__ */ new Map();
        constructor(e) {
          this.parent = e;
        }
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new FT();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new IT(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          U(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (U(e, `Field must exist`), e.field);
        }
      }),
      (RT = 1e3),
      ($ = class e {
        network;
        constructor(e) {
          this.network = e;
        }
        static estimate(t, n) {
          let r = Zm(),
            i = Qm(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (zT = class {
        pointers = /* @__PURE__ */ new Map();
        values = /* @__PURE__ */ new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (BT = class e {
        fields;
        tuples;
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = /* @__PURE__ */ new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = /* @__PURE__ */ new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (VT = class {
        isSynchronous;
        constructor(e) {
          this.isSynchronous = e;
        }
      }),
      (HT = class extends VT {
        group;
        getGroup() {
          return (U(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (U(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Gp(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return Kp(this.evaluate(void 0), void 0, e);
        }
      }),
      (UT = class {
        input;
        field;
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        getHash() {
          return Y(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (WT = class e extends HT {
        input;
        projections;
        passthrough;
        inputGroup;
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new IT(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new UT(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Yp(
              n.tuples.map((t) =>
                Yp(
                  this.projections.map((n) => Jp({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new zT();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            U(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (GT = { type: 0 }),
      (KT = class extends VT {
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        evaluateSync() {
          return Gp(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Kp(this.evaluate(void 0, void 0));
        }
      }),
      (qT = { type: 0 }),
      (JT = class {
        when;
        then;
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        getHash() {
          return Y(`CaseCondition`, this.when, this.then);
        }
      }),
      (YT = class e extends KT {
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        getHash() {
          return Y(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new JT(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* Jp({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Yp(
              this.conditions.map((n) =>
                Jp({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (TT.equal(n, e, qT)) return t;
          } else for (let { when: e, then: t } of r) if (pm(e)) return t;
          return i;
        }
      }),
      (XT = class {
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        build() {
          let e = new LT();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new FT();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (Qe(t)) continue;
                a.add(t.field);
                let r = new PT(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new NT(Xm(this.fieldId++), void 0, t.definition, void 0),
                  a = new UT(t, r);
                i.push(a);
                let s = new PT(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (Qe(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              U(n.alias, `Subqueries should have an alias`);
              let r = Xm(this.fieldId++),
                a = n.alias,
                s = new NT(r, a, t.definition, void 0),
                c = new UT(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              st(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = cm(t.data, this.locale),
            i = t.alias,
            a = new AT(Jm(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new NT(Xm(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new NT(Xm(this.fieldId++), OT, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: OT, collectionName: i });
            let t = new FT(),
              r = new PT(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new FT(),
              o = new jT(Ym(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new FT(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              st(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              st(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(ET, null);
        }
        buildLiteralValue(e) {
          let t = TT.parse(e.value);
          return this.normalizer.newScalarConstant(ET, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (U(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                U(n, `Missing argument`),
                U(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                U(n, `Missing argument`),
                U(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              st(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new ZT(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new ZT(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new JT(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              st(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              st(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (ZT = class {
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
        constructor(e) {
          this.inScope = e;
        }
      }),
      (QT = class e extends HT {
        input;
        predicate;
        inputGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new IT(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Yp(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => pm(n[t] ?? null));
        }
      }),
      ($T = class e extends HT {
        index;
        query;
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        getHash() {
          return Y(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return $.estimate(1, e ? 100 * RT : 50 * RT);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, Hp()),
            i = Hp(),
            a = [];
          for (let n of r) {
            let r = Wp(i);
            r && (yield r);
            let o = new zT();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new BT(n, a);
        }
      }),
      (eE = class e extends HT {
        left;
        right;
        leftGroup;
        rightGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return Y(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new IT(new FT(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Jp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (tE = class e extends HT {
        collection;
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        getHash() {
          return Y(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        getScanFields() {
          return this.collection.data.scannedFields
            ? new Q(Array.from(this.collection.fields).filter((e) => e.isProvidedByScan()))
            : this.collection.fields;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.getScanFields());
        }
        optimize() {
          return $.estimate(1, 200 * RT);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = this.getScanFields(),
            r = yield e.data.scanItems(Hp()),
            i = Hp(),
            a = [];
          for (let t of r) {
            let r = Wp(i);
            r && (yield r);
            let o = new zT();
            for (let r of n) {
              let n = r.getValue(t);
              (o.addPointer(e, t.pointer), o.addValue(r, n));
            }
            a.push(o);
          }
          return new BT(t, a);
        }
      }),
      (nE = class e extends HT {
        left;
        right;
        leftGroup;
        rightGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return Y(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new IT(new FT(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Jp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (rE = class e extends KT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Jp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: pm(n) && pm(r) };
        }
      }),
      (iE = class extends KT {
        definition;
        value;
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        getHash() {
          return Y(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (aE = { type: 0 }),
      (oE = class e extends KT {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Jp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: TT.contains(n, r, aE) };
        }
      }),
      (sE = { type: 0 }),
      (cE = class e extends KT {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Jp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: TT.endsWith(n, r, sE) };
        }
      }),
      (lE = class e extends KT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Jp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: TT.equal(n, r, GT) };
        }
      }),
      (uE = class e extends KT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Jp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: TT.greaterThan(n, r, GT) };
        }
      }),
      (dE = class e extends KT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Jp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: TT.greaterThanOrEqual(n, r, GT) };
        }
      }),
      (fE = class e extends KT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Jp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: TT.lessThan(n, r, GT) };
        }
      }),
      (pE = class e extends KT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Jp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: TT.lessThanOrEqual(n, r, GT) };
        }
      }),
      (mE = class e extends KT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Jp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !TT.equal(n, r, GT) };
        }
      }),
      (hE = class e extends KT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Jp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: pm(n) || pm(r) };
        }
      }),
      (gE = { type: 0 }),
      (_E = class e extends KT {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Jp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: TT.startsWith(n, r, gE) };
        }
      }),
      (vE = class {
        normalizer;
        memo;
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof QT) {
            if (e.predicate instanceof rE) {
              let n = new eE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof hE) {
              let n = new nE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof tE)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new $T(n, $m(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof QT) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof tE)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof lE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof iE &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = $m(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new $T(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof mE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof iE &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = $m(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new $T(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof fE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof iE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = $m(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new $T(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof pE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof iE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = $m(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new $T(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof uE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof iE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = $m(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new $T(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof dE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof iE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = $m(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new $T(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof oE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof iE &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = $m(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new $T(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof _E &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof iE &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = $m(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new $T(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof cE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof iE &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = $m(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new $T(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (yE = class {
        id;
        relational;
        nodes = [];
        winners = /* @__PURE__ */ new Map();
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new bE();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          U(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (bE = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (xE = class {
        outputFields;
        constructor(e) {
          this.outputFields = e;
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (SE = class {
        nodes = /* @__PURE__ */ new Map();
        groups = [];
        addGroup(e) {
          let t = new yE(eh(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new xE(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            U(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (CE = class e extends HT {
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return Y(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Q();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new IT(new FT(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = /* @__PURE__ */ new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new BT(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new zT();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Jp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof lE) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new BT(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new zT();
              (n.merge(i),
                n.merge(a),
                pm(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (wE = class e extends HT {
        input;
        limit;
        ordering;
        inputGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields(e) {
          return Array.from(e).every((e) => e.isProvidedByScan());
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new IT(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* Jp({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Em(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (TE = class e extends HT {
        input;
        offset;
        ordering;
        inputGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new IT(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* Jp({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Em(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (EE = class e extends KT {
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return Y(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) Qe(n.collection) || e.add(n);
          return new IT(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new zT();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (DE = class e extends KT {
        input;
        definition;
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            U(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return Y(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return TT.cast(n, this.definition);
        }
      }),
      (OE = class e extends KT {
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return Y(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return (Qe(this.field.collection) || e.add(this.field), new IT(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new zT();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (kE = { type: 0 }),
      (AE = class e extends KT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Jp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: TT.in(n, r, kE) };
        }
      }),
      (jE = { type: 1 }),
      (ME = class e extends KT {
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Jp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: TT.indexOf(n, r, jE) };
        }
      }),
      (NE = class extends Error {}),
      (PE = class e extends KT {
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Jp({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = nh(n),
            a = nh(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (FE = class e extends KT {
        input;
        definition = { type: `number`, isNullable: !1 };
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        getHash() {
          return Y(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: TT.length(n) };
        }
      }),
      (IE = class e extends KT {
        input;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        getHash() {
          return Y(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !pm(yield* this.input.evaluate(e, t)) };
        }
      }),
      (LE = { type: 0 }),
      (RE = class e extends KT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Jp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !TT.in(n, r, LE) };
        }
      }),
      (zE = class extends KT {
        field;
        isOuterField;
        definition;
        constructor(e, t) {
          U(e.name !== OT, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        getHash() {
          return Y(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (U(e, `Context must exist`), e.getValue(this.field))
            : (U(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (BE = class {
        memo;
        constructor(e) {
          this.memo = e;
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new tE(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new $T(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new CE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof iE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof CE && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new QT(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new WT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof WT &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new wE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new TE(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof iE) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new zE(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new iE(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof IE)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof lE) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof mE) return this.newScalarEquals(e.left, e.right);
          if (e instanceof fE) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof pE) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof uE) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof dE) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof rE) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof hE) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new IE(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof iE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof iE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof iE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof iE && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new rE(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof iE && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof iE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof iE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof iE && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new hE(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof zE;
          if (t instanceof zE && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new lE(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof zE;
          if (t instanceof zE && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new mE(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof zE;
          if (t instanceof zE && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new fE(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof zE;
          if (t instanceof zE && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new pE(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof zE;
          if (t instanceof zE && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new uE(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof zE;
          if (t instanceof zE && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new dE(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new AE(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new RE(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new JT(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new YT(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new oE(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new _E(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new cE(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new FE(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new ME(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new EE(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new OE(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new PE(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new DE(e, t);
          return this.finishScalar(n);
        }
      }),
      (VE = class extends HT {}),
      (HE = class e extends VE {
        input;
        fields;
        resolver;
        inputGroup;
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Q();
          return new IT(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * RT).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          U(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = /* @__PURE__ */ new Map();
          for (let e of this.fields) {
            U(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) rh(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                U(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new zT();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (U(s, `Item not found`), U(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (UE = { type: 0 }),
      (WE = class e extends VE {
        input;
        ordering;
        inputGroup;
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== `index` && (Qe(e.collection) || t.add(e));
          return new IT(new FT(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === `index`) {
                let r = n.collection;
                U(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                U(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                U(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!TT.equal(a, o, UE)) {
                if ($e(a) || TT.lessThan(a, o, UE)) return i ? -1 : 1;
                if ($e(o) || TT.greaterThan(a, o, UE)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (GE = class {
        query;
        locale;
        resolver;
        memo = new SE();
        normalizer = new BE(this.memo);
        explorer = new vE(this.normalizer);
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        optimize(e) {
          let t = new XT(this.normalizer, this.query, this.locale).build(),
            n = Wp(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (U(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new HE(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new WE(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (KE = /* @__PURE__ */ zp(`query-engine`)),
      (qE = class {
        async evalQuery(e, t, n, r, i) {
          let a = sm(e, t);
          if (a?.query) {
            let o = await a.query(e, t),
              s = await this.resolveSerializableQueryResult(o, e, t, r, i);
            return n ? [s, o] : s;
          }
          KE.enabled && KE.debug(`Query:\n${gh(e)}`);
          let o = new DT(e, t, r),
            s = new GE(e, t, o),
            c = Wp(o.priority);
          c && (await c);
          let l = s.optimize(r),
            [u, d] = it(l) ? await l : l,
            f = Wp(r);
          f && (await f);
          let p = await u.evaluateAsync(r),
            m = Object.entries(d),
            h = [],
            g = [];
          for (let e of p.tuples) {
            let t = Wp(r);
            t && (await t);
            let i = {},
              a = {};
            for (let [t, r] of m) {
              let s = e.getValue(r);
              ((i[t] = o.resolveValue(s)), n && (a[t] = s));
            }
            (n && h.push(a), g.push(Jp(i, r)));
          }
          let _ = qp(Yp(g, r), r);
          return n ? [it(_) ? await _ : _, h] : _;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n, r) {
          return this.evalQuery(e, t, !1, n, r);
        }
        resolveSerializableQueryResult(e, t, n, r, i) {
          let a = new DT(t, n, r);
          return qp(
            Yp(
              e.map(function* (e) {
                let t = i?.get(e);
                if (t) return t;
                let n = {},
                  r;
                for (r in e) {
                  let t = e[r];
                  n[r] = a.resolveValue(t);
                }
                let o = yield* Jp(n);
                return (i?.set(e, o), o);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (JE = zv.QueryCache),
      (YE = /* @__PURE__ */ zp(`query-cache`)),
      (XE = class {
        queryEngine;
        maxSize;
        cache = /* @__PURE__ */ new Map();
        serializedCache = Hv === void 0 ? void 0 : /* @__PURE__ */ new Map();
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        clear() {
          for (let e of this.cache.values()) (clearTimeout(e.eviction), e.unsubscribe?.());
          (this.cache.clear(), this.serializedCache?.clear());
        }
        async scheduleEviction(e, t) {
          (await t.value.preload(),
            clearTimeout(t.eviction),
            (t.eviction = setTimeout(() => {
              this.cache.get(e) !== t ||
                t.listeners?.size ||
                (t.unsubscribe?.(), this.cache.delete(e), this.serializedCache?.delete(e));
            }, 1e3)));
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.value.state === `pending` ||
                t.listeners?.size ||
                (clearTimeout(t.eviction), this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t, n) {
          return this.getEntry(e, t, yh(e, t), n).value;
        }
        getEntry(e, t, n, r) {
          let i = this.cache.get(n);
          if (i) {
            let a = Hm(r) ?? `user-visible`,
              o = Hm(i.priority);
            if (o === void 0 && r !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(n), this.getEntry(e, t, n, r));
            if (o !== void 0 && wr(a, o) && i.value.state === `pending`)
              return (this.cache.delete(n), this.getEntry(e, t, n, a));
            if (
              (this.cache.delete(n),
              this.cache.set(n, i),
              Hv !== void 0 &&
                this.serializedCache !== void 0 &&
                !im(n) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(n);
              e !== void 0 && Hv.set(JE, n, e);
            }
            return i;
          }
          let a = {
            value: new kv(() => {
              let i = im(n),
                o = i ? void 0 : $n(JE, n);
              if (o)
                try {
                  return this.queryEngine.resolveSerializableQueryResult(o, e, t);
                } catch (e) {
                  Zn(e, n);
                }
              return (
                (a.rows = sm(e, t)?.subscribe ? /* @__PURE__ */ new WeakMap() : void 0),
                a.rows && Promise.resolve().then(() => this.scheduleEviction(n, a)),
                Hv !== void 0 && !i
                  ? this.queryEngine
                      .serializeableQuery(e, t, r)
                      .then(([e, t]) => (this.serializedCache?.set(n, t), Hv.set(JE, n, t), e))
                  : this.queryEngine.query(e, t, r, a.rows)
              );
            }),
            priority: r,
          };
          return (this.cache.set(n, a), this.prune(), a);
        }
        getStore(e, t) {
          let n = yh(e, t),
            r = this.getEntry(e, t, n);
          return (r.store ??= {
            getSnapshot: () => r.value,
            subscribe: (i) => {
              let a = sm(e, t);
              if (!a?.subscribe) return () => {};
              let o = this.cache.get(n) ?? r;
              ((r = o), this.cache.set(n, o), clearTimeout(o.eviction));
              let s = (o.listeners ??= /* @__PURE__ */ new Set());
              if ((s.add(i), s.size === 1)) {
                let r = async () => {
                  let r = (o.revision = (o.revision ?? 0) + 1),
                    i;
                  try {
                    i = await this.queryEngine.query(e, t, void 0, o.rows);
                  } catch (e) {
                    YE.error(e);
                    return;
                  }
                  if (this.cache.get(n) !== o || o.revision !== r || !s.size) return;
                  let a = new kv(() => i);
                  (a.preload(), (o.value = a), this.serializedCache?.delete(n));
                  for (let e of s) e();
                };
                o.unsubscribe = a.subscribe(e, t, () => void r());
              }
              return () => {
                (s.delete(i),
                  s.size ||
                    ((o.revision = (o.revision ?? 0) + 1),
                    o.unsubscribe?.(),
                    (o.unsubscribe = void 0),
                    this.scheduleEviction(n, o)));
              };
            },
          });
        }
      }),
      (ZE = /* @__PURE__ */ new XE(/* @__PURE__ */ new qE())),
      (QE = `style[data-framer-breakpoint-css]`),
      ($E = `page`),
      (eD = /* @__PURE__ */ Symbol(`cycle`)),
      (rD = /* @__PURE__ */ new WeakMap()),
      (iD = /* @__PURE__ */ (() => {
        let e = k(null);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (aD = /* @__PURE__ */ (() => {
        let e = k(void 0);
        return ((e.displayName = `TickerItemContext`), e);
      })()),
      (oD = (e, t, n, r, i) => ({
        sign: 1,
        direction: i,
        lengthProp: t,
        viewportLengthProp: n,
        paddingStartProp: r,
        measureItem: (n) => ({ start: n[e], end: n[e] + n[t] }),
        getCumulativeInset: (t) => {
          let n = 0,
            r = t;
          for (; r;) ((n += r[e]), (r = r.offsetParent));
          return n;
        },
      })),
      (sD = /* @__PURE__ */ oD(`offsetLeft`, `offsetWidth`, `innerWidth`, `paddingLeft`, `right`)),
      (cD = /* @__PURE__ */ oD(`offsetTop`, `offsetHeight`, `innerHeight`, `paddingTop`, `bottom`)),
      (lD = {
        ...sD,
        sign: -1,
        direction: `left`,
        paddingStartProp: `paddingRight`,
        measureItem: (e, t) => {
          let n = e.offsetWidth,
            r = pg(e, t);
          return { start: r, end: r + n };
        },
        getCumulativeInset: (e) => {
          let t = 0,
            n = e;
          for (; n;) ((t += pg(n, n.offsetParent)), (n = n.offsetParent));
          return t;
        },
      }),
      (uD = { start: `flex-start`, end: `flex-end` }),
      (dD = /* @__PURE__ */ D(Cg)),
      (fD = { start: 0, end: 0 }),
      (pD = { display: `flex`, position: `relative` }),
      (mD = {
        display: `flex`,
        position: `relative`,
        willChange: `transform`,
        listStyleType: `none`,
        padding: 0,
        margin: 0,
        justifyContent: `flex-start`,
      }),
      (hD = { duration: 0.2, ease: `linear` }),
      (gD = /* @__PURE__ */ (() => {
        let e = k(null);
        return ((e.displayName = `CarouselContext`), e);
      })()),
      (_D = 0.001),
      (vD = { type: `spring`, stiffness: 200, damping: 40 }),
      (yD = { type: `spring`, stiffness: 700, damping: 53 }),
      (bD = { type: `spring`, stiffness: 80, damping: 10 }),
      (xD = { height: `100%`, width: `100%` }),
      (SD = /* @__PURE__ */ D(function (e, t) {
        let {
            children: n,
            carouselEffectStackDirection: r,
            carouselEffectAlign: i,
            carouselEffectGap: a,
            carouselEffectXOverflow: o,
            carouselEffectYOverflow: c,
            carouselEffectOverflow: l,
            carouselEffectLoop: u,
            carouselEffectAutoPlay: d,
            carouselEffectInterval: f,
            carouselEffectSnap: p,
            carouselEffectTransition: m,
            carouselEffectControls: h,
            as: g,
            ..._
          } = e,
          v = zo(),
          y = r?.startsWith(`column`) ? `y` : `x`,
          b = (y === `x` ? (o ?? l ?? `visible`) : (c ?? l ?? `visible`)) === `visible`,
          x = Bg(a, y),
          S = p === !0 ? `page` : p,
          C = sg(n),
          T = s(() => z.create(g), [g]);
        return /* @__PURE__ */ E(T, {
          ..._,
          ref: t,
          children: /* @__PURE__ */ w(Lg, {
            axis: y,
            align: i ?? `center`,
            gap: x,
            isStatic: v,
            itemSize: `manual`,
            overflow: b,
            loop: u,
            snap: S,
            transition: m,
            items: C,
            style: xD,
            children: [d && /* @__PURE__ */ E(zg, { intervalSeconds: f ?? 1.5 }), h],
          }),
        });
      })),
      (CD = /* @__PURE__ */ D(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? z.div,
          m = zo(),
          h = (d === `paused` ? 0 : (i ?? 100)) * s;
        return /* @__PURE__ */ E(dD, {
          ref: t,
          as: p,
          ...f,
          gap: l,
          axis: o,
          align: a ?? `center`,
          isStatic: m,
          velocity: h,
          hoverFactor: c,
          itemSize: `manual`,
          overflow: u,
        });
      })),
      (wD = /* @__PURE__ */ D(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? z.div,
          m = g(null),
          h = Ge(t, m),
          _ = ee(m, { margin: `100px` }),
          v = ce(),
          y = _ && v,
          b = Rr() === `rtl` && o === `x` ? -1 : 1,
          x = (d === `paused` ? 0 : (i ?? 100)) * s * b,
          S = B(0),
          C = g(0),
          w = g(!1),
          T = g(!1),
          D = g(!1),
          O = (e) => {
            D.current &&
              e.target &&
              e.target !== e.currentTarget &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (
          me(
            y
              ? (e, t) => {
                  let n = Math.abs(S.getVelocity()),
                    r = T.current ? x * c : x;
                  if (performance.now() > C.current && (!w.current || n < Math.abs(r))) {
                    let e = (t / 1e3) * r,
                      n = S.get() - e;
                    ((w.current &&= (S.stop(), !1)), S.set(n));
                  }
                }
              : ne
          ),
          N(() => {
            d === `paused` && S.stop();
          }, [d, S]),
          /* @__PURE__ */ E(dD, {
            ref: h,
            as: p,
            ...f,
            gap: l,
            axis: o,
            align: a ?? `center`,
            itemSize: `manual`,
            overflow: u,
            _dragX: o === `x` ? S : void 0,
            _dragY: o === `y` ? S : void 0,
            offset: S,
            drag: o,
            dragMomentum: !0,
            onClickCapture: O,
            onDragStart: () => {
              D.current = !0;
            },
            onDragEnd: () => {
              ((C.current = performance.now()),
                (w.current = !0),
                setTimeout(() => {
                  D.current = !1;
                }, 5));
            },
            onMouseEnter: () => {
              T.current = !0;
            },
            onMouseLeave: () => {
              T.current = !1;
            },
          })
        );
      })),
      (TD = /* @__PURE__ */ (() => {
        let e = k(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (ED = ({ onPlayStateChange: e, children: t }) => {
        let n = s(
          () => ({ start: () => u(() => e(`running`)), stop: () => u(() => e(`paused`)) }),
          [e]
        );
        return /* @__PURE__ */ E(TD.Provider, { value: n, children: t });
      }),
      (DD = /* @__PURE__ */ D(function (e, t) {
        let {
            children: n,
            tickerEffectDraggable: r,
            tickerEffectStackDirection: i,
            tickerEffectXOverflow: a,
            tickerEffectYOverflow: o,
            tickerEffectOverflow: s,
            tickerEffectGap: c,
            tickerEffectDirectionModifier: l,
            tickerEffectHoverModifier: u,
            tickerEffectPosition: d,
            tickerEffectIsDataRepeater: f,
            style: p,
            ...h
          } = e,
          g = zo(),
          [_, v] = m(`running`),
          y = i?.startsWith(`column`) ? `y` : `x`,
          b = l === `reverse` ? -1 : 1,
          x = q(u) ? u / 100 : 1,
          S = (y === `x` ? (a ?? s ?? `visible`) : (o ?? s ?? `visible`)) === `visible`,
          C = Vg(c, y),
          w = sg(n),
          T = { ...p, "--ticker-cms-total-children": f ? w.length : void 0, position: d };
        return g || !r
          ? /* @__PURE__ */ E(ED, {
              onPlayStateChange: v,
              children: /* @__PURE__ */ E(CD, {
                ...h,
                style: T,
                ref: t,
                axis: y,
                gap: C,
                overflow: S,
                directionModifier: b,
                hoverModifier: x,
                items: w,
                playState: _,
              }),
            })
          : /* @__PURE__ */ E(ED, {
              onPlayStateChange: v,
              children: /* @__PURE__ */ E(wD, {
                ...h,
                style: T,
                ref: t,
                axis: y,
                gap: C,
                overflow: S,
                directionModifier: b,
                hoverModifier: x,
                items: w,
                playState: _,
              }),
            });
      })),
      (OD = (e) => (t) => {
        let { carouselEffectProps: n, tickerEffectProps: r, domProps: i } = Ug(t);
        return t.carouselEffectEnabled
          ? /* @__PURE__ */ E(SD, { ...n, ...i, as: e })
          : t.tickerEffectEnabled
            ? /* @__PURE__ */ E(DD, { ...r, ...i, as: e })
            : /* @__PURE__ */ E(e, { ...i });
      }),
      (kD = (e) =>
        M.forwardRef((t, n) => {
          let {
              flowEffectEnabled: r,
              flowEffectTransition: i,
              isNestedFlowEffect: a,
              transition: o,
              ...c
            } = t,
            l = s(() => (i ? { default: o, layout: i } : o), [o, i]);
          if (!r) return /* @__PURE__ */ E(e, { ...c, ref: n, transition: o });
          let u = /* @__PURE__ */ E(e, { ...c, ref: n });
          return (
            i && (u = /* @__PURE__ */ E(Se, { transition: l, children: u })),
            a || (u = /* @__PURE__ */ E(Ae, { children: u })),
            u
          );
        })),
      (AD = (e) => e.target.value),
      (jD = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (MD = /* @__PURE__ */ D(function (e, t) {
        let {
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            autoFocus: a,
            className: o,
            inputName: s,
            max: c,
            min: l,
            placeholder: d,
            required: f,
            step: p,
            style: m,
            type: h,
            maxLength: g,
            value: _,
            defaultValue: v,
            autofillEnabled: y,
            onChange: b,
            onBlur: x,
            onInvalid: S,
            onFocus: T,
            onValid: D,
            onClear: O,
            ...k
          } = e,
          A = Gg(_ ?? v, h),
          [j, M, N] = Wg(A ?? ``, !0, b),
          P = ca(A),
          F = C(() => {
            (M(``), O && u(() => O()));
          }, [O, M]),
          I = pt(D, S, N, x, T),
          ee = C(
            (e) => {
              e.target === e.currentTarget && P.current?.focus();
            },
            [P]
          );
        if (h === `hidden`)
          return /* @__PURE__ */ E(z.input, { type: `hidden`, name: s, defaultValue: v });
        let te = y === !1 ? jD : void 0,
          ne = !!j,
          L = !!O && ne,
          re = Ll(ND, Ft, o, h === `text` && PD, h === `textarea` && FD);
        return /* @__PURE__ */ w(z.div, {
          ref: t,
          onClick: ee,
          style: m,
          className: re,
          ...k,
          children: [
            h === `textarea`
              ? /* @__PURE__ */ E(z.textarea, {
                  ref: P,
                  ...te,
                  ...I,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  required: f,
                  autoFocus: a,
                  name: s,
                  placeholder: d,
                  className: Pt,
                  value: j,
                  maxLength: g,
                })
              : /* @__PURE__ */ E(z.input, {
                  ref: P,
                  ...te,
                  ...I,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  type: h,
                  required: f,
                  autoFocus: a,
                  name: s,
                  placeholder: d,
                  className: Ll(Pt, !ne && `framer-form-input-empty`),
                  value: j,
                  min: l,
                  max: c,
                  step: p,
                  maxLength: g,
                }),
            L &&
              /* @__PURE__ */ E(`button`, {
                type: `button`,
                className: ID,
                onClick: F,
                "aria-label": `Clear`,
                children: /* @__PURE__ */ E(Kg, {}),
              }),
          ],
        });
      })),
      (ND = `framer-form-text-input`),
      (PD = `framer-form-text-input-type`),
      (FD = `framer-form-textarea-input-type`),
      (ID = `framer-form-text-input-clear`),
      (LD = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (RD = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (zD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (BD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (VD = /* @__PURE__ */ yx(
        MD,
        [
          ...Rt,
          ...Vt,
          ...zt,
          K(`.${Ft}`, {
            boxShadow: K.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: K.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: K.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: K.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: K.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: K.variable(`--framer-input-corner-shape`),
            background: K.variable(`--framer-input-background`),
            transition: K.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          K(`.${ND} .${Pt}::placeholder`, {
            color: K.variable(`--framer-input-placeholder-color`),
          }),
          K(`.${ND}`, {
            display: `flex`,
            alignItems: `center`,
            padding: K.variable(`--framer-input-padding`),
          }),
          K(`.${ND} .${Pt}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          K(`.${ND}.${FD}`, { padding: 0 }),
          K(`.${ND}.${FD} textarea.${Pt}`, {
            width: `100%`,
            padding: K.variable(`--framer-input-padding`),
          }),
          K(`.${ND} .${Pt}[type="date"], .${ND} .${Pt}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          K(`.${ND} .${Pt}::-webkit-date-and-time-value`, { textAlign: `start` }),
          K(`.${ND} textarea`, {
            display: `flex`,
            resize: K.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          K(`.${ND} textarea::-webkit-resizer`, { background: `no-repeat ${at(LD)}` }),
          K(`.${ND}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${at(RD)}` }),
          K(`.${ND} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          K(`.${ND} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          K(`.${ND} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          K(`.${ND} .${Pt}::-webkit-datetime-edit`, {
            height: K.variable(`--framer-input-font-line-height`),
          }),
          K(`.${ND} .${Pt}.${It}::-webkit-datetime-edit`, {
            color: K.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": K.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          K(`.${ND}.${PD}::before`, {
            content: K.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `16px`,
            height: `16px`,
            marginRight: `8px`,
            ...Wt,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: K.variable(`--framer-input-icon-mask-image`),
            backgroundImage: K.variable(`--framer-input-icon-image`),
          }),
          K(`.${ND} .${Pt}[type="date"]::before, .${ND} .${Pt}[type="time"]::before`, {
            ...Gt,
            paddingLeft: `10px`,
            maskPosition: `10px center`,
            backgroundPosition: `10px center`,
          }),
          K(`.${ND} .${Pt}[type="date"]::before`, {
            maskImage: K.variable(`--framer-input-icon-mask-image`, at(zD)),
            backgroundImage: K.variable(`--framer-input-icon-image`),
          }),
          K(`.${ND} .${Pt}[type="time"]::before`, {
            maskImage: K.variable(`--framer-input-icon-mask-image`, at(BD)),
            backgroundImage: K.variable(`--framer-input-icon-image`),
          }),
          K(`.${ND} .${Pt}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: K.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `16px`,
            height: `100%`,
          }),
          K(`.${ND}:focus-within, .${ND}.${Lt}`, {
            boxShadow: K.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: K.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          K(`.${ND}:focus-within::after, .${ND}.${Lt}::after`, {
            borderColor: K.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: K.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: K.variable(`--framer-input-focused-border-width`, Bt),
          }),
          K(`.${ID}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `16px`,
            height: `16px`,
            marginLeft: `8px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: K.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          K(`.${ID}:hover, .${ID}:focus-visible`, {
            color: K.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (HD = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (UD = { opacity: 0 }),
      (WD = { opacity: 1 }),
      (GD = /* @__PURE__ */ r_(
        /* @__PURE__ */ M.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: o,
              style: c,
              ...l
            } = e,
            d = { ...c },
            f = s(() => js(n), [n]),
            [p, h] = m();
          M.useEffect(() => {
            if (!n?.src || !o || f) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                u(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, o, f]);
          let g = f ?? p;
          (o && g && ((d[o] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background);
          let _ = Ms(e.as);
          return /* @__PURE__ */ w(_, {
            ...l,
            style: d,
            ref: t,
            draggable: a,
            children: [n && /* @__PURE__ */ E(es, { image: n, alt: i, draggable: a }), r],
          });
        })
      )),
      (KD = /* @__PURE__ */ new Map()),
      (qD = 1e3),
      (JD = 6e4),
      (YD = 36e5),
      (XD = 864e5),
      (ZD = 6048e5),
      (QD = /* @__PURE__ */ f(function ({
        date: e,
        dateFormat: t = `auto`,
        dateStyle: n = `long`,
        dateNumeric: r = `auto`,
        dateCapitalize: i = !1,
        locale: a,
        ...o
      }) {
        let s = Lr(),
          c = a || s,
          l = e ? new Date(e) : null,
          [d, f] = m(__),
          p = t === `second` ? 1e3 : 6e4;
        if (
          (N(() => {
            let e = setInterval(() => {
              u(() => {
                f(__);
              });
            }, p);
            return () => {
              clearInterval(e);
            };
          }, [p]),
          !tt(l))
        )
          return null;
        let h = l.toLocaleString(c, {
            timeZone: `UTC`,
            dateStyle: `long`,
            timeStyle:
              t === `second` ? `medium` : t === `minute` || t === `hour` ? `short` : void 0,
          }),
          g = a_(l, d, t, n, r, i, c),
          _ = l.toISOString();
        return /* @__PURE__ */ w(`time`, {
          suppressHydrationWarning: !0,
          dateTime: _,
          title: h,
          ...o,
          children: [
            St ? g : h,
            St
              ? null
              : /* @__PURE__ */ E(`script`, {
                  "data-relative-date-script": `inline`,
                  dangerouslySetInnerHTML: { __html: v_(l, t, n, r, i, c) },
                }),
          ],
        });
      })),
      (eO = !pr() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (tO =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (nO = `{{ text-placeholder }}`),
      (rO = `rich-text-wrapper`),
      (iO = /* @__PURE__ */ Ls(
        /* @__PURE__ */ D(function (e, t) {
          let {
              id: n,
              name: r,
              html: i,
              htmlFromDesign: a,
              text: o,
              textFromDesign: c,
              fonts: l = [],
              width: u,
              height: d,
              left: f,
              right: p,
              top: m,
              bottom: h,
              center: _,
              className: v,
              stylesPresetsClassName: y,
              visible: b = !0,
              opacity: x,
              rotation: C = 0,
              verticalAlignment: w = `top`,
              isEditable: T = !1,
              environment: D = W.current,
              withExternalLayout: O = !1,
              positionSticky: k,
              positionStickyTop: A,
              positionStickyRight: j,
              positionStickyBottom: M,
              positionStickyLeft: P,
              __htmlStructure: F,
              __fromCanvasComponent: I = !1,
              _forwardedOverrideId: ee,
              _forwardedOverrides: te,
              _usesDOMRect: ne,
              children: L,
              ...re
            } = e,
            ie = ws(),
            ae = Us(e),
            oe = g(null),
            se = t ?? oe,
            { navigate: ce, getRoute: le } = kn(),
            ue = jn();
          (Br(e.preload ?? []), Ys(e, se));
          let de = S(Tx),
            fe = sd(),
            pe = o,
            R = ee ?? n;
          if (R && te) {
            let e = te[R];
            typeof e == `string` && (pe = e);
          }
          let me = ``;
          if (pe) {
            let e = x_(pe);
            me = F ? F.replace(nO, e) : `<p>${e}</p>`;
          } else if (i) me = i;
          else if (c) {
            let e = x_(c);
            me = F ? F.replace(nO, e) : `<p>${e}</p>`;
          } else a && (me = a);
          let he = kd(),
            ge = s(() => (fe || !le || !ue ? me : S_(me, le, ue, he)), [me, le, ue, he]);
          if (
            (N(() => {
              let e = se.current;
              if (e === null) return;
              function t(e) {
                let t = Cd(e.target, se.current);
                !br(e) &&
                  ce &&
                  t &&
                  t.getAttribute(`target`) !== `_blank` &&
                  pd(ce, t, he) &&
                  e.preventDefault();
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [ce, he]),
            T_(l, I, se),
            !b)
          )
            return null;
          let _e = T && D() === W.canvas,
            B = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: w_(w),
              opacity: _e ? 0 : x,
              flexShrink: 0,
            },
            ve = W.hasRestrictions(),
            ye = xs(e, ie || 0, !1),
            be = ne && (u === `auto` || d === `auto`),
            xe = !!e.transformTemplate || !ye || !ve || I || be,
            Se = xe ? (e.transformTemplate ?? Hs(_)) : void 0;
          if (!O) {
            if (ye && ve && !be) {
              let e = mb.getNumber(C).toFixed(4);
              ((B.transform = `translate(${ye.x}px, ${ye.y}px) rotate(${e}deg)`),
                (B.width = ye.width),
                (B.minWidth = ye.width),
                (B.height = ye.height));
            } else
              ((B.left = f),
                (B.right = p),
                (B.top = m),
                (B.bottom = h),
                (B.width = u),
                (B.height = d),
                (B.rotate = C));
            k
              ? (!fe || de) &&
                ((B.position = `sticky`),
                (B.willChange = `transform`),
                (B.top = A),
                (B.right = j),
                (B.bottom = M),
                (B.left = P))
              : fe && (e.positionFixed || e.positionAbsolute) && (B.position = `absolute`);
          }
          return (
            Fl(e, B),
            Ml(e, B),
            Object.assign(B, e.style),
            /* @__PURE__ */ E(z.div, {
              id: n,
              ref: se,
              ...y_(Kb(re)),
              ...zs(xe ? _ : void 0, e.style),
              style: B,
              layoutId: ae,
              "data-framer-name": r,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": _,
              className: Ll(v, y, rO),
              transformTemplate: Se,
              dangerouslySetInnerHTML: { __html: ge },
            })
          );
        })
      )),
      (aO = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (oO =
        /\p{Regional_Indicator}{2}|\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?(?:\u{200d}\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?)*|./gu),
      (sO = /* @__PURE__ */ D(function (e, t) {
        return /* @__PURE__ */ E(`svg`, { ...e, ref: t, children: e.children });
      })),
      (cO = /* @__PURE__ */ z.create(sO)),
      (lO = /* @__PURE__ */ D(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return /* @__PURE__ */ E(cO, {
          ...r,
          ref: i,
          viewBox: t,
          children: /* @__PURE__ */ E(z.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (uO = []),
      (dO = `RichTextContainer`),
      (fO = /* @__PURE__ */ D(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: o,
            as: c,
            bottom: l,
            center: u,
            children: d,
            environment: f = W.current,
            fonts: p = uO,
            height: m,
            isEditable: h = !1,
            left: _,
            name: v,
            opacity: y,
            positionSticky: b,
            positionStickyBottom: x,
            positionStickyLeft: C,
            positionStickyRight: w,
            positionStickyTop: T,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: M,
            top: N,
            verticalAlignment: P = `top`,
            visible: F = !0,
            width: I,
            withExternalLayout: ee = !1,
            viewBox: te,
            viewBoxScale: ne = 1,
            effect: L,
            ...re
          } = e,
          ie = ws(),
          ae = f(),
          oe = ae === W.canvas,
          se = oe || ae === W.export,
          ce = S(Tx),
          le = Us(e),
          ue = g(null),
          de = t ?? ue;
        (Ys(e, de), T_(p, n, de));
        let fe = P_(L, de),
          pe = s(() => {
            if (d) return V_(d, j, M, o, void 0, fe.getTokenizer());
          }, [d, j, M, o, fe]);
        if (!F) return null;
        let R = { opacity: h && oe ? 0 : y },
          me = w_(P);
        me !== Jt.justifyContent && (R.justifyContent = me);
        let he = {},
          z = W.hasRestrictions(),
          ge = xs(e, ie || 0, !1),
          _e = a && (I === `auto` || m === `auto`),
          B = !!e.transformTemplate || !ge || !z || n || _e,
          ve = B ? (e.transformTemplate ?? Hs(u)) : void 0;
        (ee ||
          (ge && z && !_e
            ? ((he.x = ge.x + (Ye(k?.x) ? k.x : 0)),
              (he.y = ge.y + (Ye(k?.y) ? k.y : 0)),
              (he.left = 0),
              (he.top = 0),
              (R.rotate = mb.getNumber(O)),
              (R.width = ge.width),
              (R.minWidth = ge.width),
              (R.height = ge.height))
            : ((R.left = _),
              (R.right = D),
              (R.top = N),
              (R.bottom = l),
              (R.width = I),
              (R.height = m),
              (R.rotate = O)),
          b
            ? (!se || ce) &&
              ((R.position = `sticky`),
              (R.willChange = `transform`),
              (R.top = T),
              (R.right = w),
              (R.bottom = x),
              (R.left = C))
            : oe && (e.positionFixed || e.positionAbsolute) && (R.position = `absolute`)),
          Fl(e, R),
          Ml(e, R),
          Object.assign(R, A, k, he),
          le && (re.layout = `preserve-aspect`));
        let ye = Ms(e.as),
          be = re[`data-framer-name`] ?? v,
          xe = y_(Kb(re)),
          Se = zs(B ? u : void 0, k);
        return V(e.viewBox)
          ? e.as === void 0
            ? /* @__PURE__ */ E(lO, {
                ...xe,
                ...Se,
                ref: de,
                style: R,
                layoutId: le,
                viewBox: te,
                viewBoxScale: ne,
                transformTemplate: ve,
                "data-framer-name": be,
                "data-framer-component-type": dO,
                children: pe,
              })
            : /* @__PURE__ */ E(ye, {
                ...xe,
                ...Se,
                ref: de,
                style: R,
                layoutId: le,
                transformTemplate: ve,
                "data-framer-name": be,
                "data-framer-component-type": dO,
                children: /* @__PURE__ */ E(lO, {
                  viewBox: te,
                  viewBoxScale: ne,
                  style: { width: `100%`, height: `100%` },
                  children: pe,
                }),
              })
          : /* @__PURE__ */ E(ye, {
              ...xe,
              ...Se,
              ref: de,
              style: R,
              layoutId: le,
              transformTemplate: ve,
              "data-framer-name": be,
              "data-framer-component-type": dO,
              children: pe,
            });
      })),
      (pO = /* @__PURE__ */ Ls(
        /* @__PURE__ */ D(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (V(a)) {
            !r.stylesPresetsClassName &&
              H(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [V(t) ? `html` : `htmlFromDesign`]: a };
            return /* @__PURE__ */ E(iO, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && V(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return /* @__PURE__ */ E(fO, { ...r, ref: i, children: T(a) ? a : void 0 });
        })
      )),
      (mO = /* @__PURE__ */ mr()),
      (hO = class {
        id;
        svg;
        innerHTML;
        viewBox;
        count;
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
      }),
      (gO = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (_O = class {
        entries = /* @__PURE__ */ new Map();
        vectorSetItems = /* @__PURE__ */ new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(Mx(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = G_(e);
            (s &&
              (t && K_(s, n),
              (s.id = n),
              (o = Z_(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (e && e !== ``) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          mO && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = gO),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          mO && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new hO(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !mO) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        mO && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${gO}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (vO = /* @__PURE__ */ new _O()),
      (yO = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 16,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (bO = 1e3),
      (xO = `Variable`),
      (SO = `explicitInter`),
      (we.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = L(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  }))();
}
export {
  ZE as $,
  ex as A,
  OD as At,
  ev as B,
  pO as C,
  rg as Ct,
  Dl as D,
  kD as Dt,
  tv as E,
  yC as Et,
  KS as F,
  $t as Ft,
  dn as G,
  Dh as H,
  vx as I,
  sn as It,
  bv as J,
  CO as K,
  nv as L,
  JS as M,
  W as Mt,
  GS as N,
  cn as Nt,
  xx as O,
  Yl as Ot,
  qS as P,
  lt as Pt,
  Ra as Q,
  iv as R,
  vT as S,
  Fi as St,
  Q_ as T,
  ig as Tt,
  Hv as U,
  kl as V,
  Sa as W,
  pa as X,
  Fs as Y,
  ZC as Z,
  Lp as _,
  Ir as _t,
  LC as a,
  vO as at,
  qE as b,
  Ln as bt,
  Vw as c,
  Tu as ct,
  iw as d,
  id as dt,
  zh as et,
  GD as f,
  Fh as ft,
  Wr as g,
  Lr as gt,
  cb as h,
  Uh as ht,
  SC as i,
  EC as it,
  hv as j,
  py as jt,
  Ll as k,
  fv as kt,
  VD as l,
  Rn as lt,
  Sw as m,
  sd as mt,
  wu as n,
  pv as nt,
  xS as o,
  la as ot,
  kv as p,
  Nc as pt,
  mn as q,
  Cu as r,
  xd as rt,
  Io as s,
  jh as st,
  wd as t,
  Da as tt,
  IS as u,
  jn as ut,
  sw as v,
  za as vt,
  RC as w,
  yx as wt,
  QD as x,
  kn as xt,
  VS as y,
  Th as yt,
  rv as z,
};
//# sourceMappingURL=framer.DGJFnpg_.mjs.map
