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
  B as m,
  Ct as h,
  E as g,
  K as _,
  _t as v,
  ct as y,
  f as b,
  k as x,
  wt as S,
} from "./framer.DGJFnpg_.mjs";
var C, w, T, E, D, O, k, A;
function j() {
  return (j = e(() => {
    (c(),
      _(),
      p(),
      r(),
      (C = `framer-09QRt`),
      (w = { dlvW1ol3g: `framer-v-d53hjv` }),
      (T = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (E = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          s = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ o(f.Provider, { value: s, children: t });
      }),
      (D = u.create(t)),
      (O = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (k = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (A = S(
        /* @__PURE__ */ s(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = l(),
            { activeLocale: s, setLocale: c } = v(),
            u = y(),
            { style: f, className: p, layoutId: g, variant: _, ...S } = O(e),
            {
              baseVariant: A,
              classNames: j,
              clearLoadingGesture: M,
              gestureHandlers: N,
              gestureVariant: P,
              isLoading: F,
              setGestureState: I,
              setVariant: L,
              variants: R,
            } = h({ defaultVariant: `dlvW1ol3g`, ref: r, variant: _, variantClassNames: w }),
            z = k(e, R),
            B = x(C);
          return /*#__PURE__*/ o(d, {
            id: g ?? a,
            children: /*#__PURE__*/ o(D, {
              animate: R,
              initial: !1,
              children: /*#__PURE__*/ o(E, {
                value: T,
                children: /*#__PURE__*/ o(b, {
                  ...S,
                  ...N,
                  background: {
                    alt: `BG Noice`,
                    backgroundSize: 1,
                    fit: `tile`,
                    loading: m(u?.y || 0),
                    pixelHeight: 360,
                    pixelWidth: 480,
                    positionX: `left`,
                    positionY: `top`,
                    sizes: u?.width || `100vw`,
                    src: `../../assets/images/kelEr6s1qyt801dQcO45jKcaNkk.gif`,
                  },
                  className: x(B, `framer-d53hjv`, p, j),
                  "data-framer-name": `BG Noice`,
                  layoutDependency: z,
                  layoutId: `dlvW1ol3g`,
                  ref: r,
                  style: { opacity: 0.08, ...f },
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-09QRt.framer-1gn018w, .framer-09QRt .framer-1gn018w { display: block; }`,
          `.framer-09QRt.framer-d53hjv { -webkit-user-select: none; height: 560px; overflow: var(--overflow-clip-fallback, clip); position: relative; user-select: none; width: 1200px; will-change: var(--framer-will-change-filter-override, filter); }`,
        ],
        `framer-09QRt`
      )),
      (A.displayName = `BG Noice`),
      (A.defaultProps = { height: 560, width: 1200 }),
      g(A, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }))();
}
export { j as n, A as t };
//# sourceMappingURL=t0GRKkwHB.4mSMwzSd.mjs.map
