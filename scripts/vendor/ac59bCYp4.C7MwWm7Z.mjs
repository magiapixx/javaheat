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
  D as g,
  E as _,
  K as v,
  _t as y,
  ct as b,
  f as x,
  k as S,
  o as C,
  wt as w,
} from "./framer.DGJFnpg_.mjs";
function T(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var E, D, O, k, A, j, M, N, P, F, I;
function L() {
  return (L = e(() => {
    (c(),
      v(),
      p(),
      r(),
      (E = [`mkXB0VhJw`, `fr0cVp952`, `UsusRl9Ip`]),
      (D = `framer-OIa7A`),
      (O = {
        fr0cVp952: `framer-v-1indncb`,
        mkXB0VhJw: `framer-v-1hh1wak`,
        UsusRl9Ip: `framer-v-emwqgw`,
      }),
      (k = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (A = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (j = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          s = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ o(f.Provider, { value: s, children: t });
      }),
      (M = u.create(t)),
      (N = { Default: `mkXB0VhJw`, Light: `fr0cVp952`, Phone: `UsusRl9Ip` }),
      (P = ({ height: e, id: t, image: n, width: r, ...i }) => ({
        ...i,
        qeYLOypnx: n ??
          i.qeYLOypnx ?? {
            alt: `Client Logo`,
            pixelHeight: 28,
            pixelWidth: 108,
            src: `../../assets/images/XWAlPb58nstaS4Qe2V64MPJ3oEg.svg`,
          },
        variant: N[i.variant] ?? i.variant ?? `mkXB0VhJw`,
      })),
      (F = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (I = w(
        /* @__PURE__ */ s(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = l(),
            { activeLocale: s, setLocale: c } = y(),
            f = b(),
            { style: p, className: g, layoutId: _, variant: v, qeYLOypnx: C, ...w } = P(e),
            {
              baseVariant: N,
              classNames: I,
              clearLoadingGesture: L,
              gestureHandlers: R,
              gestureVariant: z,
              isLoading: B,
              setGestureState: V,
              setVariant: H,
              variants: U,
            } = h({
              cycleOrder: E,
              defaultVariant: `mkXB0VhJw`,
              ref: r,
              variant: v,
              variantClassNames: O,
            }),
            W = F(e, U),
            G = S(D);
          return /*#__PURE__*/ o(d, {
            id: _ ?? a,
            children: /*#__PURE__*/ o(M, {
              animate: U,
              initial: !1,
              children: /*#__PURE__*/ o(j, {
                value: k,
                children: /*#__PURE__*/ o(u.div, {
                  ...w,
                  ...R,
                  className: S(G, `framer-1hh1wak`, g, I),
                  "data-framer-name": `Default`,
                  layoutDependency: W,
                  layoutId: `mkXB0VhJw`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    ...p,
                  },
                  variants: {
                    fr0cVp952: {
                      backgroundColor: `var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, rgb(246, 246, 246))`,
                    },
                    UsusRl9Ip: {
                      backgroundColor: `var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, rgb(246, 246, 246))`,
                    },
                  },
                  ...T(
                    {
                      fr0cVp952: { "data-framer-name": `Light` },
                      UsusRl9Ip: { "data-framer-name": `Phone` },
                    },
                    N,
                    z
                  ),
                  children: /*#__PURE__*/ o(x, {
                    background: {
                      alt: `Client Logo`,
                      fit: `fit`,
                      loading: m((f?.y || 0) + (0 + ((f?.height || 126) - 0 - 26) / 2)),
                      pixelHeight: 28,
                      pixelWidth: 108,
                      sizes: `100px`,
                      ...A(C),
                      positionX: `center`,
                      positionY: `center`,
                    },
                    className: `framer-1x5yszz`,
                    layoutDependency: W,
                    layoutId: `De2vkgM_W`,
                    ...T(
                      {
                        UsusRl9Ip: {
                          background: {
                            alt: `Client Logo`,
                            fit: `fit`,
                            loading: m((f?.y || 0) + (0 + ((f?.height || 100) - 0 - 23) / 2)),
                            pixelHeight: 28,
                            pixelWidth: 108,
                            sizes: `88.4615px`,
                            ...A(C),
                            positionX: `center`,
                            positionY: `center`,
                          },
                        },
                      },
                      N,
                      z
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-OIa7A.framer-1gqasmi, .framer-OIa7A .framer-1gqasmi { display: block; }`,
          `.framer-OIa7A.framer-1hh1wak { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 126px; justify-content: center; padding: 0px; position: relative; width: 220px; }`,
          `.framer-OIa7A .framer-1x5yszz { flex: none; height: 26px; overflow: visible; position: relative; width: 100px; }`,
          `.framer-OIa7A.framer-v-emwqgw.framer-1hh1wak { height: 100px; }`,
          `.framer-OIa7A.framer-v-emwqgw .framer-1x5yszz { height: 23px; width: 88px; }`,
        ],
        `framer-OIa7A`
      )),
      (I.displayName = `Client Card`),
      (I.defaultProps = { height: 126, width: 220 }),
      g(I, {
        variant: {
          options: [`mkXB0VhJw`, `fr0cVp952`, `UsusRl9Ip`],
          optionTitles: [`Default`, `Light`, `Phone`],
          title: `Variant`,
          type: C.Enum,
        },
        qeYLOypnx: {
          __defaultAssetReference: `data:framer/asset-reference,XWAlPb58nstaS4Qe2V64MPJ3oEg.svg?originalFilename=Client+image+%281%29.svg&width=108&height=28`,
          __vekterDefault: {
            alt: `Client Logo`,
            assetReference: `data:framer/asset-reference,XWAlPb58nstaS4Qe2V64MPJ3oEg.svg?originalFilename=Client+image+%281%29.svg&width=108&height=28`,
          },
          title: `Image`,
          type: C.ResponsiveImage,
        },
      }),
      _(I, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }))();
}
export { L as n, I as t };
//# sourceMappingURL=ac59bCYp4.C7MwWm7Z.mjs.map
