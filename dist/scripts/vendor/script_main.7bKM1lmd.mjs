import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  B as t,
  D as n,
  F as r,
  P as i,
  R as a,
  S as o,
  T as s,
  _ as c,
  a as l,
  b as u,
  d,
  g as f,
  h as p,
  i as m,
  k as h,
  n as g,
  r as _,
  t as v,
  y,
  z as b,
} from "./react.DfujhmXs.mjs";
import {
  G as x,
  K as S,
  Q as C,
  W as w,
  X as T,
  Y as E,
  _ as D,
  _t as O,
  d as ee,
  et as te,
  g as ne,
  it as re,
  jt as ie,
  kt as ae,
  ot as k,
  p as A,
  q as j,
  rt as M,
  s as N,
  tt as P,
  ut as F,
  xt as I,
} from "./framer.DGJFnpg_.mjs";
import { n as L, t as R } from "./toplevel-deps.XDVeXK4X.mjs";
function z({ webPageId: e, children: t, style: n, ...r }) {
  let i = { M85UHxc9v: `sFWfGvYlz`, PNpNnOHV1: `Kvn3A7sau`, yEqxtL7bi: `J3XaE2r2n` },
    a = { ...i, M85UHxc9v: `IHFOTx03b`, PNpNnOHV1: `qWLQfTQnr`, yEqxtL7bi: `mEx0wet0A` },
    o = { ...i, M85UHxc9v: `x12hvQNkz`, PNpNnOHV1: `VPMiLZJkD`, yEqxtL7bi: `toZfsNNIK` },
    s = { ...i, M85UHxc9v: `pBugXSoxw`, PNpNnOHV1: `v3OD9IUjN`, yEqxtL7bi: `L_r0kaLWe` },
    c =
      {
        augiA20Il: i,
        B7oZ2fVBR: o,
        bSiIVuvYs: o,
        cw4t799ht: { ...i, M85UHxc9v: `H7bF22RlR`, PNpNnOHV1: `aV6L9xZyS`, yEqxtL7bi: `ykUqvz2qI` },
        Jy642OCMC: a,
        k5_IbRC7H: o,
        L_B7D5dU4: { ...i, M85UHxc9v: `kFAPRb3ci`, PNpNnOHV1: `luk9b5Dyz`, yEqxtL7bi: `EnAzdeegK` },
        LC6KZ5P6V: o,
        qXUyfUzHH: o,
        UUF_p9mVZ: s,
        WW4UflwWd: o,
        Xs_UfQc0Y: o,
        YgUT9_9zQ: o,
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `Jy642OCMC`:
    case `B7oZ2fVBR`:
    case `UUF_p9mVZ`:
    case `YgUT9_9zQ`:
    case `k5_IbRC7H`:
    case `Xs_UfQc0Y`:
    case `cw4t799ht`:
    case `L_B7D5dU4`:
    case `LC6KZ5P6V`:
    case `bSiIVuvYs`:
    case `qXUyfUzHH`:
    case `WW4UflwWd`:
      return d(R, { ...c, key: `Main`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function B(e) {
  switch (e) {
    case `augiA20Il`:
    case `Jy642OCMC`:
    case `B7oZ2fVBR`:
    case `UUF_p9mVZ`:
    case `YgUT9_9zQ`:
    case `k5_IbRC7H`:
    case `Xs_UfQc0Y`:
    case `cw4t799ht`:
    case `L_B7D5dU4`:
    case `LC6KZ5P6V`:
    case `bSiIVuvYs`:
    case `qXUyfUzHH`:
    case `WW4UflwWd`:
      return [
        { hash: `157lpka`, mediaQuery: `(min-width: 1200px)` },
        { hash: `ktiw53`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `10l2pix`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
function V({ routeId: e, pathVariables: t, localeId: n }) {
  return (
    (Q ??= P({
      routes: G,
      routeId: e,
      pathVariables: t,
      localeId: n,
      locales: K,
      collectionUtils: q,
    })),
    Q
  );
}
async function H({
  routeId: e,
  pathVariables: i,
  canonicalPathVariables: a,
  localeId: s,
  collectionItemId: l,
  contentLocaleId: f,
  shouldResolveInitialRouteContentState: p = !1,
}) {
  (re({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    M(Y));
  let g = !X && G[e].abTestingParentId ? { ...G } : G;
  g !== G && C(g, e);
  let _ = G[e].page.preload(),
    v = G[e];
  if (p && l === void 0 && v.collectionId) {
    let t = await V({ routeId: e, pathVariables: i, localeId: s });
    ((f ??= t.contentLocaleId), (a ??= t.canonicalPathVariables));
  }
  let b = d(D, {
      isWebsite: !0,
      environment: `site`,
      routeId: e,
      pathVariables: i,
      canonicalPathVariables: a,
      routes: g,
      collectionUtils: q,
      serverDatabaseClient: J,
      framerSiteId: Y,
      notFoundPage: j(() => import("./pJq4IenVSM2HH2WicYWQ8pytYZeh1FBsge3P4gIlJqA.fgUJVivM.mjs")),
      isReducedMotion: void 0,
      localeId: s,
      locales: K,
      preserveQueryParams: void 0,
      siteCanonicalURL: void 0,
      EditorBar:
        t === void 0
          ? void 0
          : (() => {
              if (Z) console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
              else
                return j(async () => {
                  t.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: F, useLocaleInfo: O, useRouter: I },
                    react: {
                      createElement: d,
                      Fragment: r,
                      memo: o,
                      useCallback: h,
                      useEffect: y,
                      useRef: u,
                      useState: c,
                      useLayoutEffect: n,
                    },
                    "react-dom": { createPortal: m },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
            })(),
      adaptLayoutToTextDirection: !0,
      LayoutTemplate: z,
      loadSnippetsModule: new A(
        () => import("./wJukwbpjDF-KxwhcTlZalrWpT19QPE_Hv2-f6C7X2Z0.U1APg39v.mjs")
      ),
      initialCollectionItemId: l,
      initialContentLocaleIdOverride: f,
    }),
    x = d(ee, { children: b }),
    S = d(ne, { children: x, value: { routes: {} } });
  return (await _, S);
}
function U() {
  X && t.__framer_events.push(arguments);
}
async function W(e, n) {
  function r(e, n, r = !0) {
    if (e.caught || t.__framer_hadFatalError) return;
    let i = n?.componentStack;
    if (r) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          i
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        i
      );
    U(r ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: i,
      stack: i ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let a, o, s, c, l, u, d;
    if (e)
      ((d = JSON.parse(n.dataset.framerHydrateV2)),
        (a = d.routeId),
        (o = d.localeId),
        (s = d.contentLocaleId),
        (c = d.pathVariables),
        (l = d.canonicalPathVariables),
        (u = d.breakpoints),
        (a = C(G, a)));
    else {
      C(G, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((a = t.get(`id`)), (o = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((c ??= {}), (c[e.slice(4)] = n));
      }
      if (!a || !o) {
        let e = w(G, decodeURIComponent(location.pathname), !0, K);
        ((a = e.routeId), (o = e.localeId), (c = e.pathVariables));
      }
    }
    let f = H({
      routeId: a,
      localeId: o,
      contentLocaleId: s,
      pathVariables: c,
      canonicalPathVariables: l,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    t !== void 0 &&
      (async () => {
        let e = G[a],
          n = K.find(({ id: e }) => (o ? e === o : e === "default")).code,
          r;
        r =
          d?.collectionItemId === void 0
            ? e?.collectionId
              ? await (
                  await V({ routeId: a, pathVariables: c, localeId: o })
                ).collectionItemId
              : null
            : d.collectionItemId;
        let i = Intl.DateTimeFormat().resolvedOptions(),
          s = i.timeZone,
          l = i.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          t.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Y,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: r,
              framerLocale: n || null,
              webPageId: e?.abTestingVariantId ?? a,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: t.location.href,
              hostname: t.location.hostname || null,
              pathname: t.location.pathname || null,
              hash: t.location.hash || null,
              search: t.location.search || null,
              timezone: s,
              locale: l,
            },
            `eager`,
          ]),
          await ie({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: n || null } })
          ));
      })();
    let p = await f;
    e
      ? (ae(`framer-rewrite-breakpoints`, () => {
          (te(u), t.__framer_onRewriteBreakpoints?.(u));
        }),
        (Z ? (e) => e() : i)(() => {
          (T(), k(), v(n, p, { onRecoverableError: r }));
        }))
      : (await E(), _(n, { onRecoverableError: r }).render(p));
  } catch (e) {
    throw (r(e, void 0, !1), e);
  }
}
var G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    if (
      (a(),
      S(),
      s(),
      l(),
      g(),
      L(),
      (G = {
        augiA20Il: {
          elements: { lGZHRSmRF: `about` },
          page: j(() => import("./FOW8SSS_LVaw2_IZG7cBovFT5IbXvVm8zdDUsvGaPyU.qqBpXrmg.mjs")),
          path: `/`,
        },
        Jy642OCMC: {
          elements: {},
          page: j(() => import("./THzjvX-Ku96lTrmb2x30Pymxq516N0i2aRSG9JtxwDE.-jA13YgU.mjs")),
          path: `/blog`,
        },
        B7oZ2fVBR: {
          elements: {},
          page: j(() => import("./Bn4LVculHE3WIcTCRFTlr30HPEhDtO-6ukCDHaqDorU.CrfmgrTU.mjs")),
          path: `/case-study`,
        },
        UUF_p9mVZ: {
          elements: {},
          page: j(() => import("./gLcVjgk_OVV3QPfBDYSWOdgt6f1OXKu5zjPu5s3YPB8.ClTNa6Xg.mjs")),
          path: `/contact`,
        },
        YgUT9_9zQ: {
          elements: {},
          page: j(() => import("./pJq4IenVSM2HH2WicYWQ8pytYZeh1FBsge3P4gIlJqA.fgUJVivM.mjs")),
          path: `/404`,
        },
        k5_IbRC7H: {
          elements: {},
          page: j(() => import("./8NiwqOQCS3jBTZsGWzHCwXrGhwBDeCLlTZC6-_G_LHc.CmNEZZSH.mjs")),
          path: `/faq`,
        },
        Xs_UfQc0Y: {
          elements: {},
          page: j(() => import("./uoliLsEXuWEmLGF8juKjSL8De5HM_aNygIceWbKtxEQ.CLsCOSBv.mjs")),
          path: `/product`,
        },
        cw4t799ht: {
          elements: {},
          page: j(() => import("./BShEkwSNE7rSscrfNlfwUWmp3G5VLdM45601Ozt2maQ.CbcS_uGV.mjs")),
          path: `/service`,
        },
        L_B7D5dU4: {
          elements: { kHn4h2prn: `team` },
          page: j(() => import("./d_dHQTIGiqE-WyqWpSZM80CfhMPkt-vvOVxLV36pKIw.Db4IG6Ui.mjs")),
          path: `/about`,
        },
        LC6KZ5P6V: {
          collectionId: `n0JwbvZ2A`,
          elements: {},
          page: j(() => import("./AYLeWISilrgdDVjgikDp3iXLRMa5nOb6NPibN9ZC7HE.n-Wg9hhQ.mjs")),
          path: `/service/:NPodIY0by`,
        },
        bSiIVuvYs: {
          collectionId: `zBTWiSfRK`,
          elements: {},
          page: j(() => import("./bRWaxBJJn_jJy_pSP7FonjRVkVErI-yv4kjYpTLAIII.C7O3EqGw.mjs")),
          path: `/case-study/:GEnNpt0Iw`,
        },
        qXUyfUzHH: {
          collectionId: `QPz26w_mL`,
          elements: {},
          page: j(() => import("./nq3fVYn3hqUuw1kVyIH_LMW6oB5ngwVw53oWAN53NnI.zpUZZow8.mjs")),
          path: `/blog/:je6JvlZZ8`,
        },
        WW4UflwWd: {
          collectionId: `WCK9shr5c`,
          elements: {},
          page: j(() => import("./Q8ToWAfIRBnhNejKiCdGUBwNiGKwwrDhHVlkasQgp2A.IeRyKbgp.mjs")),
          path: `/legal-pages/:PR_b8CvLT`,
        },
      }),
      (K = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
      (q = {
        n0JwbvZ2A: async () =>
          (await import("./tUxQQGhe-cQ9HdA1C1DL60iBsMhxVQD8nyoKvDjBZc8.DveCvVSY.mjs"))?.utils,
        QPz26w_mL: async () =>
          (await import("./uls2T3la9dU_fB2UsgY4-d3cwDaFVfRq0gQcZsP9v14.BnnCwR6x.mjs"))?.utils,
        WCK9shr5c: async () =>
          (await import("./UwbrVe-PR-k2XS8mfL4iWlFumVRDIo3a7MQS7m4VmA8.CBnmOYuH.mjs"))?.utils,
        zBTWiSfRK: async () =>
          (await import("./aBb31_SAFNVMiANX9_kkmc9KRIE_Wq0oTS0OZEafIWs.Di5H8sec.mjs"))?.utils,
      }),
      (J = void 0),
      (Y = `57cd42ebfa217c2d352d8355fca3e70dc2be0dec0a5b00ce1b6e060bbb8f2770`),
      (X = typeof document < `u`),
      (Z = X && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(b.userAgent)),
      X)
    ) {
      ((t.__framer_importFromPackage = (e, t) => () =>
        d(N, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
        (t.__framer_events = t.__framer_events || []),
        x());
      let e = document.getElementById(`main`);
      `framerHydrateV2` in e.dataset ? W(!0, e) : W(!1, e);
    }
  }))();
}
$();
export { B as getLayoutTemplateBreakpoints, H as getPageRoot };
//# sourceMappingURL=script_main.7bKM1lmd.mjs.map
