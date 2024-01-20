(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    './components/Tooltip.tsx': function (e, t, n) {
      'use strict';
      var r = n('../node_modules/@tippyjs/react/dist/tippy-react.esm.js'),
        a =
          (n('../node_modules/react/index.js'),
          n('../node_modules/tippy.js/animations/scale.css'),
          n('../node_modules/react/jsx-runtime.js')),
        o = function (e) {
          var t = e.children,
            n = e.content,
            o = e.className,
            s = e.contentClassName,
            i = e.placement,
            l = void 0 === i ? 'top' : i;
          return n
            ? (0, a.jsx)(r.ZP, {
                animation: 'scale',
                placement: l,
                appendTo: function () {
                  return document.body;
                },
                maxWidth: '15rem',
                interactive: !0,
                content: (0, a.jsx)('div', {
                  className:
                    'rounded border border-darkGray3 bg-darkGray p-3 text-xs leading-snug text-lavenderGray shadow-md '.concat(
                      o
                    ),
                  children: n,
                }),
                children: (0, a.jsx)('div', {
                  className: ''.concat(s),
                  children: t,
                }),
              })
            : (0, a.jsx)(a.Fragment, { children: t });
        };
      (o.Content = function (e) {
        e.className;
        var t = e.children;
        return (0, a.jsx)('div', { children: t });
      }),
        (t.Z = o);
    },
    './components/panels/components/index.ts': function (e, t, n) {
      'use strict';
      n.d(t, {
        Kk: function () {
          return s;
        },
        _Z: function () {
          return i;
        },
        YW: function () {
          return d;
        },
        dk: function () {
          return f;
        },
        Ar: function () {
          return m;
        },
      });
      n('../node_modules/react/index.js');
      var r = n('../node_modules/react/jsx-runtime.js'),
        a = function () {
          return (0, r.jsxs)('svg', {
            className: 'inline-block h-4  w-4 animate-spin ',
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
            viewBox: '0 0 24 24',
            children: [
              (0, r.jsx)('circle', {
                className: 'opacity-25',
                cx: 12,
                cy: 12,
                r: 10,
                stroke: 'currentColor',
                strokeWidth: 3,
              }),
              (0, r.jsx)('path', {
                className: 'opacity-75',
                fill: 'currentColor',
                d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
              }),
            ],
          });
        },
        o = n('./components/Tooltip.tsx');
      function s(e) {
        var t = e.actionLabel,
          n = e.onAction,
          s = e.isActionDisabled,
          i = e.isActionLoading,
          l = e.tooltipContentOnDisabled;
        return (0, r.jsx)('button', {
          className: 'action-btn text-base ',
          onClick: n,
          disabled: s || i,
          children: i
            ? (0, r.jsx)(a, {})
            : s
            ? (0, r.jsx)(o.Z, { content: l, children: t })
            : t,
        });
      }
      function i(e) {
        var t = e.amount,
          n = e.onAmountChange;
        return (0, r.jsx)('input', {
          type: 'text',
          name: 'amount',
          id: 'amount',
          autoComplete: 'amount',
          value: t,
          onChange: function (e) {
            return n(e.target.value);
          },
          className:
            'input-no-spin mb-8 mt-1 block h-14 w-full rounded-full bg-darkGray4 px-4 text-center text-lg font-semibold  focus:outline-none',
        });
      }
      var l = n('../staking/lib/app/index.js'),
        c = n('../node_modules/bn.js/lib/bn.js'),
        u = n.n(c);
      function d(e) {
        var t = e.setAmount,
          n = e.isBalanceLoading,
          a = e.balance;
        return (0, r.jsxs)('div', {
          className: 'mb-4 flex items-end justify-between md:items-center ',
          children: [
            (0, r.jsx)('label', {
              htmlFor: 'amount',
              className: 'block ',
              children: 'Amount (PYTH)',
            }),
            (0, r.jsxs)('div', {
              className:
                'ml-auto mr-0 flex flex-col-reverse items-end space-x-2 md:flex-row md:items-center',
              children: [
                n
                  ? (0, r.jsx)('div', {
                      className:
                        'h-5 w-14  animate-pulse rounded-lg bg-darkGray4',
                    })
                  : (0, r.jsxs)('p', {
                      className: 'mt-2 md:mt-0',
                      children: [
                        'Balance: ',
                        null === a || void 0 === a ? void 0 : a.toString(),
                      ],
                    }),
                (0, r.jsxs)('div', {
                  className: 'mb-2  flex space-x-2 md:mb-0',
                  children: [
                    (0, r.jsx)('button', {
                      className: 'outlined-btn hover:bg-darkGray4',
                      onClick: function () {
                        a &&
                          t(
                            new l.PythBalance(
                              a.toBN().div(new (u())(2))
                            ).toString()
                          );
                      },
                      children: 'Half',
                    }),
                    (0, r.jsx)('button', {
                      className: 'outlined-btn hover:bg-darkGray4',
                      onClick: function () {
                        a && t(a.toString());
                      },
                      children: 'Max',
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function f(e) {
        var t = e.children;
        return (0, r.jsx)('div', {
          className: 'mb-4 sm:mb-12 md:h-24',
          children: t,
        });
      }
      function m(e) {
        var t = e.children;
        return (0, r.jsx)('div', {
          className: 'mx-auto max-w-xl text-center leading-6',
          children: t,
        });
      }
    },
    './hooks/useStakeAccounts.ts': function (e, t, n) {
      'use strict';
      n.d(t, {
        U: function () {
          return l;
        },
      });
      var r = n(
          '../node_modules/@solana/wallet-adapter-react/lib/esm/useAnchorWallet.js'
        ),
        a = n('../node_modules/react-hot-toast/dist/index.mjs'),
        o = n('./utils/capitalizeFirstLetter.ts'),
        s = n('./hooks/useStakeConnection.ts'),
        i = n('../node_modules/react-query/es/index.js');
      function l() {
        var e = (0, s.D)().data,
          t = (0, r.z)();
        return (0, i.useQuery)(
          [
            'get-stake-accounts',
            null === t || void 0 === t ? void 0 : t.publicKey.toString(),
          ],
          function () {
            return e.getStakeAccounts(t.publicKey);
          },
          {
            onError: function (e) {
              a.ZP.error((0, o.f)(e.message));
            },
            enabled: void 0 !== e && void 0 !== t,
          }
        );
      }
    },
    './pages/index.tsx': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return _t;
          },
        });
      var r = n('./components/Tooltip.tsx'),
        a = n('../node_modules/react/index.js'),
        o = n('../node_modules/@headlessui/react/dist/utils/render.js'),
        s = n('../node_modules/@headlessui/react/dist/internal/open-closed.js'),
        i = n('../node_modules/@headlessui/react/dist/utils/match.js'),
        l = n('../node_modules/@headlessui/react/dist/hooks/use-is-mounted.js'),
        c = n(
          '../node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js'
        ),
        u = n(
          '../node_modules/@headlessui/react/dist/hooks/use-latest-value.js'
        ),
        d = n(
          '../node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js'
        ),
        f = n('../node_modules/@headlessui/react/dist/hooks/use-sync-refs.js');
      var m = n('../node_modules/@headlessui/react/dist/utils/disposables.js');
      function p(e, ...t) {
        e && t.length > 0 && e.classList.add(...t);
      }
      function v(e, ...t) {
        e && t.length > 0 && e.classList.remove(...t);
      }
      function h(e, t, n, r) {
        let a = n ? 'enter' : 'leave',
          o = (0, m.k)(),
          s =
            void 0 !== r
              ? (function (e) {
                  let t = { called: !1 };
                  return (...n) => {
                    if (!t.called) return (t.called = !0), e(...n);
                  };
                })(r)
              : () => {};
        'enter' === a && (e.removeAttribute('hidden'), (e.style.display = ''));
        let l = (0, i.E)(a, { enter: () => t.enter, leave: () => t.leave }),
          c = (0, i.E)(a, { enter: () => t.enterTo, leave: () => t.leaveTo }),
          u = (0, i.E)(a, {
            enter: () => t.enterFrom,
            leave: () => t.leaveFrom,
          });
        return (
          v(
            e,
            ...t.base,
            ...t.enter,
            ...t.enterTo,
            ...t.enterFrom,
            ...t.leave,
            ...t.leaveFrom,
            ...t.leaveTo,
            ...t.entered
          ),
          p(e, ...t.base, ...l, ...u),
          o.nextFrame(() => {
            v(e, ...t.base, ...l, ...u),
              p(e, ...t.base, ...l, ...c),
              (function (e, t) {
                let n = (0, m.k)();
                if (!e) return n.dispose;
                let { transitionDuration: r, transitionDelay: a } =
                    getComputedStyle(e),
                  [o, s] = [r, a].map((e) => {
                    let [t = 0] = e
                      .split(',')
                      .filter(Boolean)
                      .map((e) =>
                        e.includes('ms') ? parseFloat(e) : 1e3 * parseFloat(e)
                      )
                      .sort((e, t) => t - e);
                    return t;
                  }),
                  i = o + s;
                if (0 !== i) {
                  n.group((n) => {
                    n.setTimeout(() => {
                      t(), n.dispose();
                    }, i),
                      n.addEventListener(e, 'transitionrun', (e) => {
                        e.target === e.currentTarget && n.dispose();
                      });
                  });
                  let r = n.addEventListener(e, 'transitionend', (e) => {
                    e.target === e.currentTarget && (t(), r());
                  });
                } else t();
                n.add(() => t()), n.dispose;
              })(
                e,
                () => (
                  v(e, ...t.base, ...l), p(e, ...t.base, ...t.entered), s()
                )
              );
          }),
          o.dispose
        );
      }
      var x = n(
        '../node_modules/@headlessui/react/dist/hooks/use-disposables.js'
      );
      var b = n('../node_modules/@headlessui/react/dist/hooks/use-event.js'),
        g = n('../node_modules/@headlessui/react/dist/utils/class-names.js');
      function k(e = '') {
        return e.split(' ').filter((e) => e.trim().length > 1);
      }
      let y = (0, a.createContext)(null);
      y.displayName = 'TransitionContext';
      var j,
        w = (((j = w || {}).Visible = 'visible'), (j.Hidden = 'hidden'), j);
      let S = (0, a.createContext)(null);
      function P(e) {
        return 'children' in e
          ? P(e.children)
          : e.current
              .filter(({ el: e }) => null !== e.current)
              .filter(({ state: e }) => 'visible' === e).length > 0;
      }
      function C(e, t) {
        let n = (0, u.E)(e),
          r = (0, a.useRef)([]),
          s = (0, l.t)(),
          c = (0, x.G)(),
          d = (0, b.z)((e, t = o.l4.Hidden) => {
            let a = r.current.findIndex(({ el: t }) => t === e);
            -1 !== a &&
              ((0, i.E)(t, {
                [o.l4.Unmount]() {
                  r.current.splice(a, 1);
                },
                [o.l4.Hidden]() {
                  r.current[a].state = 'hidden';
                },
              }),
              c.microTask(() => {
                var e;
                !P(r) && s.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          f = (0, b.z)((e) => {
            let t = r.current.find(({ el: t }) => t === e);
            return (
              t
                ? 'visible' !== t.state && (t.state = 'visible')
                : r.current.push({ el: e, state: 'visible' }),
              () => d(e, o.l4.Unmount)
            );
          }),
          m = (0, a.useRef)([]),
          p = (0, a.useRef)(Promise.resolve()),
          v = (0, a.useRef)({ enter: [], leave: [], idle: [] }),
          h = (0, b.z)((e, n, r) => {
            m.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter(
                  ([t]) => t !== e
                )),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    m.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    Promise.all(v.current[n].map(([e, t]) => t)).then(() =>
                      e()
                    );
                  }),
                ]),
              'enter' === n
                ? (p.current = p.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => r(n)))
                : r(n);
          }),
          g = (0, b.z)((e, t, n) => {
            Promise.all(v.current[t].splice(0).map(([e, t]) => t))
              .then(() => {
                var e;
                null == (e = m.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, a.useMemo)(
          () => ({
            children: r,
            register: f,
            unregister: d,
            onStart: h,
            onStop: g,
            wait: p,
            chains: v,
          }),
          [f, d, r, h, g, v, p]
        );
      }
      function T() {}
      S.displayName = 'NestingContext';
      let A = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave'];
      function E(e) {
        var t;
        let n = {};
        for (let r of A) n[r] = null != (t = e[r]) ? t : T;
        return n;
      }
      let L = o.AN.RenderStrategy;
      let O = (0, o.yV)(function (e, t) {
          let { show: n, appear: r = !1, unmount: i = !0, ...l } = e,
            u = (0, a.useRef)(null),
            m = (0, f.T)(u, t);
          (0, d.H)();
          let p = (0, s.oJ)();
          if (
            (void 0 === n && null !== p && (n = (p & s.ZM.Open) === s.ZM.Open),
            ![!0, !1].includes(n))
          )
            throw new Error(
              'A <Transition /> is used but it is missing a `show={true | false}` prop.'
            );
          let [v, h] = (0, a.useState)(n ? 'visible' : 'hidden'),
            x = C(() => {
              h('hidden');
            }),
            [g, k] = (0, a.useState)(!0),
            j = (0, a.useRef)([n]);
          (0, c.e)(() => {
            !1 !== g &&
              j.current[j.current.length - 1] !== n &&
              (j.current.push(n), k(!1));
          }, [j, n]);
          let w = (0, a.useMemo)(
            () => ({ show: n, appear: r, initial: g }),
            [n, r, g]
          );
          (0, a.useEffect)(() => {
            if (n) h('visible');
            else if (P(x)) {
              let e = u.current;
              if (!e) return;
              let t = e.getBoundingClientRect();
              0 === t.x &&
                0 === t.y &&
                0 === t.width &&
                0 === t.height &&
                h('hidden');
            } else h('hidden');
          }, [n, x]);
          let T = { unmount: i },
            A = (0, b.z)(() => {
              var t;
              g && k(!1), null == (t = e.beforeEnter) || t.call(e);
            }),
            E = (0, b.z)(() => {
              var t;
              g && k(!1), null == (t = e.beforeLeave) || t.call(e);
            });
          return a.createElement(
            S.Provider,
            { value: x },
            a.createElement(
              y.Provider,
              { value: w },
              (0, o.sY)({
                ourProps: {
                  ...T,
                  as: a.Fragment,
                  children: a.createElement(N, {
                    ref: m,
                    ...T,
                    ...l,
                    beforeEnter: A,
                    beforeLeave: E,
                  }),
                },
                theirProps: {},
                defaultTag: a.Fragment,
                features: L,
                visible: 'visible' === v,
                name: 'Transition',
              })
            )
          );
        }),
        N = (0, o.yV)(function (e, t) {
          var n, r;
          let {
              beforeEnter: p,
              afterEnter: v,
              beforeLeave: j,
              afterLeave: w,
              enter: T,
              enterFrom: A,
              enterTo: O,
              entered: N,
              leave: B,
              leaveFrom: R,
              leaveTo: F,
              ...I
            } = e,
            M = (0, a.useRef)(null),
            U = (0, f.T)(M, t),
            D = null == (n = I.unmount) || n ? o.l4.Unmount : o.l4.Hidden,
            {
              show: V,
              appear: _,
              initial: z,
            } = (function () {
              let e = (0, a.useContext)(y);
              if (null === e)
                throw new Error(
                  'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
                );
              return e;
            })(),
            [Z, G] = (0, a.useState)(V ? 'visible' : 'hidden'),
            Y = (function () {
              let e = (0, a.useContext)(S);
              if (null === e)
                throw new Error(
                  'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
                );
              return e;
            })(),
            { register: H, unregister: W } = Y;
          (0, a.useEffect)(() => H(M), [H, M]),
            (0, a.useEffect)(() => {
              if (D === o.l4.Hidden && M.current)
                return V && 'visible' !== Z
                  ? void G('visible')
                  : (0, i.E)(Z, { hidden: () => W(M), visible: () => H(M) });
            }, [Z, M, H, W, V, D]);
          let Q = (0, u.E)({
              base: k(I.className),
              enter: k(T),
              enterFrom: k(A),
              enterTo: k(O),
              entered: k(N),
              leave: k(B),
              leaveFrom: k(R),
              leaveTo: k(F),
            }),
            K = (function (e) {
              let t = (0, a.useRef)(E(e));
              return (
                (0, a.useEffect)(() => {
                  t.current = E(e);
                }, [e]),
                t
              );
            })({
              beforeEnter: p,
              afterEnter: v,
              beforeLeave: j,
              afterLeave: w,
            }),
            q = (0, d.H)();
          (0, a.useEffect)(() => {
            if (q && 'visible' === Z && null === M.current)
              throw new Error(
                'Did you forget to passthrough the `ref` to the actual DOM node?'
              );
          }, [M, Z, q]);
          let $ = _ && V && z,
            J = !q || (z && !_) ? 'idle' : V ? 'enter' : 'leave',
            X = (function (e = 0) {
              let [t, n] = (0, a.useState)(e),
                r = (0, l.t)(),
                o = (0, a.useCallback)(
                  (e) => {
                    r.current && n((t) => t | e);
                  },
                  [t, r]
                ),
                s = (0, a.useCallback)((e) => Boolean(t & e), [t]),
                i = (0, a.useCallback)(
                  (e) => {
                    r.current && n((t) => t & ~e);
                  },
                  [n, r]
                ),
                c = (0, a.useCallback)(
                  (e) => {
                    r.current && n((t) => t ^ e);
                  },
                  [n]
                );
              return {
                flags: t,
                addFlag: o,
                hasFlag: s,
                removeFlag: i,
                toggleFlag: c,
              };
            })(0),
            ee = (0, b.z)((e) =>
              (0, i.E)(e, {
                enter: () => {
                  X.addFlag(s.ZM.Opening), K.current.beforeEnter();
                },
                leave: () => {
                  X.addFlag(s.ZM.Closing), K.current.beforeLeave();
                },
                idle: () => {},
              })
            ),
            te = (0, b.z)((e) =>
              (0, i.E)(e, {
                enter: () => {
                  X.removeFlag(s.ZM.Opening), K.current.afterEnter();
                },
                leave: () => {
                  X.removeFlag(s.ZM.Closing), K.current.afterLeave();
                },
                idle: () => {},
              })
            ),
            ne = C(() => {
              G('hidden'), W(M);
            }, Y);
          !(function ({
            immediate: e,
            container: t,
            direction: n,
            classes: r,
            onStart: a,
            onStop: o,
          }) {
            let s = (0, l.t)(),
              i = (0, x.G)(),
              d = (0, u.E)(n);
            (0, c.e)(() => {
              e && (d.current = 'enter');
            }, [e]),
              (0, c.e)(() => {
                let e = (0, m.k)();
                i.add(e.dispose);
                let n = t.current;
                if (n && 'idle' !== d.current && s.current)
                  return (
                    e.dispose(),
                    a.current(d.current),
                    e.add(
                      h(n, r.current, 'enter' === d.current, () => {
                        e.dispose(), o.current(d.current);
                      })
                    ),
                    e.dispose
                  );
              }, [n]);
          })({
            immediate: $,
            container: M,
            classes: Q,
            direction: J,
            onStart: (0, u.E)((e) => {
              ne.onStart(M, e, ee);
            }),
            onStop: (0, u.E)((e) => {
              ne.onStop(M, e, te),
                'leave' === e && !P(ne) && (G('hidden'), W(M));
            }),
          });
          let re = I,
            ae = { ref: U };
          return (
            $
              ? (re = {
                  ...re,
                  className: (0, g.A)(
                    I.className,
                    ...Q.current.enter,
                    ...Q.current.enterFrom
                  ),
                })
              : ((re.className = (0, g.A)(
                  I.className,
                  null == (r = M.current) ? void 0 : r.className
                )),
                '' === re.className && delete re.className),
            a.createElement(
              S.Provider,
              { value: ne },
              a.createElement(
                s.up,
                {
                  value:
                    (0, i.E)(Z, { visible: s.ZM.Open, hidden: s.ZM.Closed }) |
                    X.flags,
                },
                (0, o.sY)({
                  ourProps: ae,
                  theirProps: re,
                  defaultTag: 'div',
                  features: L,
                  visible: 'visible' === Z,
                  name: 'Transition.Child',
                })
              )
            )
          );
        }),
        B = (0, o.yV)(function (e, t) {
          let n = null !== (0, a.useContext)(y),
            r = null !== (0, s.oJ)();
          return a.createElement(
            a.Fragment,
            null,
            !n && r
              ? a.createElement(O, { ref: t, ...e })
              : a.createElement(N, { ref: t, ...e })
          );
        }),
        R = Object.assign(O, { Child: B, Root: O });
      var F = n(
          '../node_modules/@headlessui/react/dist/components/dialog/dialog.js'
        ),
        I = n('../node_modules/@headlessui/react/dist/hooks/use-id.js');
      function M(e, t) {
        let [n, r] = (0, a.useState)(e),
          o = (0, u.E)(e);
        return (0, c.e)(() => r(o.current), [o, r, ...t]), n;
      }
      var U = n(
        '../node_modules/@headlessui/react/dist/components/keyboard.js'
      );
      var D,
        V =
          (((D = V || {})[(D.First = 0)] = 'First'),
          (D[(D.Previous = 1)] = 'Previous'),
          (D[(D.Next = 2)] = 'Next'),
          (D[(D.Last = 3)] = 'Last'),
          (D[(D.Specific = 4)] = 'Specific'),
          (D[(D.Nothing = 5)] = 'Nothing'),
          D);
      function _(e, t) {
        let n = t.resolveItems();
        if (n.length <= 0) return null;
        let r = t.resolveActiveIndex(),
          a = null != r ? r : -1,
          o = (() => {
            switch (e.focus) {
              case 0:
                return n.findIndex((e) => !t.resolveDisabled(e));
              case 1: {
                let e = n
                  .slice()
                  .reverse()
                  .findIndex(
                    (e, n, r) =>
                      !(-1 !== a && r.length - n - 1 >= a) &&
                      !t.resolveDisabled(e)
                  );
                return -1 === e ? e : n.length - 1 - e;
              }
              case 2:
                return n.findIndex(
                  (e, n) => !(n <= a) && !t.resolveDisabled(e)
                );
              case 3: {
                let e = n
                  .slice()
                  .reverse()
                  .findIndex((e) => !t.resolveDisabled(e));
                return -1 === e ? e : n.length - 1 - e;
              }
              case 4:
                return n.findIndex((n) => t.resolveId(n) === e.id);
              case 5:
                return null;
              default:
                !(function (e) {
                  throw new Error('Unexpected object: ' + e);
                })(e);
            }
          })();
        return -1 === o ? r : o;
      }
      var z = n('../node_modules/@headlessui/react/dist/utils/bugs.js'),
        Z = n(
          '../node_modules/@headlessui/react/dist/utils/focus-management.js'
        );
      function G(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : 'button';
        return 'string' == typeof n && 'button' === n.toLowerCase()
          ? 'button'
          : void 0;
      }
      function Y(e, t) {
        let [n, r] = (0, a.useState)(() => G(e));
        return (
          (0, c.e)(() => {
            r(G(e));
          }, [e.type, e.as]),
          (0, c.e)(() => {
            n ||
              (t.current &&
                t.current instanceof HTMLButtonElement &&
                !t.current.hasAttribute('type') &&
                r('button'));
          }, [n, t]),
          n
        );
      }
      var H = n(
          '../node_modules/@headlessui/react/dist/hooks/use-outside-click.js'
        ),
        W = n('../node_modules/@headlessui/react/dist/internal/hidden.js');
      function Q(e = {}, t = null, n = []) {
        for (let [r, a] of Object.entries(e)) q(n, K(t, r), a);
        return n;
      }
      function K(e, t) {
        return e ? e + '[' + t + ']' : t;
      }
      function q(e, t, n) {
        if (Array.isArray(n))
          for (let [r, a] of n.entries()) q(e, K(t, r.toString()), a);
        else
          n instanceof Date
            ? e.push([t, n.toISOString()])
            : 'boolean' == typeof n
            ? e.push([t, n ? '1' : '0'])
            : 'string' == typeof n
            ? e.push([t, n])
            : 'number' == typeof n
            ? e.push([t, `${n}`])
            : null == n
            ? e.push([t, ''])
            : Q(n, t, e);
      }
      var $ = n('../node_modules/@headlessui/react/dist/utils/owner.js');
      function J(e) {
        return [e.screenX, e.screenY];
      }
      function X() {
        let e = (0, a.useRef)([-1, -1]);
        return {
          wasMoved(t) {
            let n = J(t);
            return (
              (e.current[0] !== n[0] || e.current[1] !== n[1]) &&
              ((e.current = n), !0)
            );
          },
          update(t) {
            e.current = J(t);
          },
        };
      }
      let ee =
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function te(e) {
        var t, n;
        let r = null != (t = e.innerText) ? t : '',
          a = e.cloneNode(!0);
        if (!(a instanceof HTMLElement)) return r;
        let o = !1;
        for (let i of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
          i.remove(), (o = !0);
        let s = o ? (null != (n = a.innerText) ? n : '') : r;
        return ee.test(s) && (s = s.replace(ee, '')), s;
      }
      function ne(e) {
        let t = (0, a.useRef)(''),
          n = (0, a.useRef)('');
        return (0, b.z)(() => {
          let r = e.current;
          if (!r) return '';
          let a = r.innerText;
          if (t.current === a) return n.current;
          let o = (function (e) {
            let t = e.getAttribute('aria-label');
            if ('string' == typeof t) return t.trim();
            let n = e.getAttribute('aria-labelledby');
            if (n) {
              let e = n
                .split(' ')
                .map((e) => {
                  let t = document.getElementById(e);
                  if (t) {
                    let e = t.getAttribute('aria-label');
                    return 'string' == typeof e ? e.trim() : te(t).trim();
                  }
                  return null;
                })
                .filter(Boolean);
              if (e.length > 0) return e.join(', ');
            }
            return te(e).trim();
          })(r)
            .trim()
            .toLowerCase();
          return (t.current = a), (n.current = o), o;
        });
      }
      var re,
        ae =
          (((re = ae || {})[(re.Open = 0)] = 'Open'),
          (re[(re.Closed = 1)] = 'Closed'),
          re),
        oe = ((e) => (
          (e[(e.Single = 0)] = 'Single'), (e[(e.Multi = 1)] = 'Multi'), e
        ))(oe || {}),
        se = ((e) => (
          (e[(e.Pointer = 0)] = 'Pointer'), (e[(e.Other = 1)] = 'Other'), e
        ))(se || {}),
        ie = ((e) => (
          (e[(e.OpenListbox = 0)] = 'OpenListbox'),
          (e[(e.CloseListbox = 1)] = 'CloseListbox'),
          (e[(e.GoToOption = 2)] = 'GoToOption'),
          (e[(e.Search = 3)] = 'Search'),
          (e[(e.ClearSearch = 4)] = 'ClearSearch'),
          (e[(e.RegisterOption = 5)] = 'RegisterOption'),
          (e[(e.UnregisterOption = 6)] = 'UnregisterOption'),
          (e[(e.RegisterLabel = 7)] = 'RegisterLabel'),
          e
        ))(ie || {});
      function le(e, t = (e) => e) {
        let n =
            null !== e.activeOptionIndex
              ? e.options[e.activeOptionIndex]
              : null,
          r = (0, Z.z2)(
            t(e.options.slice()),
            (e) => e.dataRef.current.domRef.current
          ),
          a = n ? r.indexOf(n) : null;
        return -1 === a && (a = null), { options: r, activeOptionIndex: a };
      }
      let ce = {
          1: (e) =>
            e.dataRef.current.disabled || 1 === e.listboxState
              ? e
              : { ...e, activeOptionIndex: null, listboxState: 1 },
          0(e) {
            if (e.dataRef.current.disabled || 0 === e.listboxState) return e;
            let t = e.activeOptionIndex,
              { isSelected: n } = e.dataRef.current,
              r = e.options.findIndex((e) => n(e.dataRef.current.value));
            return (
              -1 !== r && (t = r),
              { ...e, listboxState: 0, activeOptionIndex: t }
            );
          },
          2(e, t) {
            var n;
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let r = le(e),
              a = _(t, {
                resolveItems: () => r.options,
                resolveActiveIndex: () => r.activeOptionIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return {
              ...e,
              ...r,
              searchQuery: '',
              activeOptionIndex: a,
              activationTrigger: null != (n = t.trigger) ? n : 1,
            };
          },
          3: (e, t) => {
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let n = '' !== e.searchQuery ? 0 : 1,
              r = e.searchQuery + t.value.toLowerCase(),
              a = (
                null !== e.activeOptionIndex
                  ? e.options
                      .slice(e.activeOptionIndex + n)
                      .concat(e.options.slice(0, e.activeOptionIndex + n))
                  : e.options
              ).find((e) => {
                var t;
                return (
                  !e.dataRef.current.disabled &&
                  (null == (t = e.dataRef.current.textValue)
                    ? void 0
                    : t.startsWith(r))
                );
              }),
              o = a ? e.options.indexOf(a) : -1;
            return -1 === o || o === e.activeOptionIndex
              ? { ...e, searchQuery: r }
              : {
                  ...e,
                  searchQuery: r,
                  activeOptionIndex: o,
                  activationTrigger: 1,
                };
          },
          4: (e) =>
            e.dataRef.current.disabled ||
            1 === e.listboxState ||
            '' === e.searchQuery
              ? e
              : { ...e, searchQuery: '' },
          5: (e, t) => {
            let n = { id: t.id, dataRef: t.dataRef },
              r = le(e, (e) => [...e, n]);
            return (
              null === e.activeOptionIndex &&
                e.dataRef.current.isSelected(t.dataRef.current.value) &&
                (r.activeOptionIndex = r.options.indexOf(n)),
              { ...e, ...r }
            );
          },
          6: (e, t) => {
            let n = le(e, (e) => {
              let n = e.findIndex((e) => e.id === t.id);
              return -1 !== n && e.splice(n, 1), e;
            });
            return { ...e, ...n, activationTrigger: 1 };
          },
          7: (e, t) => ({ ...e, labelId: t.id }),
        },
        ue = (0, a.createContext)(null);
      function de(e) {
        let t = (0, a.useContext)(ue);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Listbox /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, de), t);
        }
        return t;
      }
      ue.displayName = 'ListboxActionsContext';
      let fe = (0, a.createContext)(null);
      function me(e) {
        let t = (0, a.useContext)(fe);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Listbox /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, me), t);
        }
        return t;
      }
      function pe(e, t) {
        return (0, i.E)(t.type, ce, e, t);
      }
      fe.displayName = 'ListboxDataContext';
      let ve = a.Fragment;
      let he = o.AN.RenderStrategy | o.AN.Static;
      let xe = (0, o.yV)(function (e, t) {
          let {
            value: n,
            defaultValue: r,
            form: l,
            name: u,
            onChange: d,
            by: m = (e, t) => e === t,
            disabled: p = !1,
            horizontal: v = !1,
            multiple: h = !1,
            ...g
          } = e;
          const k = v ? 'horizontal' : 'vertical';
          let y = (0, f.T)(t),
            [j = h ? [] : void 0, w] = (function (e, t, n) {
              let [r, o] = (0, a.useState)(n),
                s = void 0 !== e,
                i = (0, a.useRef)(s),
                l = (0, a.useRef)(!1),
                c = (0, a.useRef)(!1);
              return (
                !s || i.current || l.current
                  ? !s &&
                    i.current &&
                    !c.current &&
                    ((c.current = !0),
                    (i.current = s),
                    console.error(
                      'A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.'
                    ))
                  : ((l.current = !0),
                    (i.current = s),
                    console.error(
                      'A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.'
                    )),
                [
                  s ? e : r,
                  (0, b.z)((e) => (s || o(e), null == t ? void 0 : t(e))),
                ]
              );
            })(n, d, r),
            [S, P] = (0, a.useReducer)(pe, {
              dataRef: (0, a.createRef)(),
              listboxState: 1,
              options: [],
              searchQuery: '',
              labelId: null,
              activeOptionIndex: null,
              activationTrigger: 1,
            }),
            C = (0, a.useRef)({ static: !1, hold: !1 }),
            T = (0, a.useRef)(null),
            A = (0, a.useRef)(null),
            E = (0, a.useRef)(null),
            L = (0, b.z)(
              'string' == typeof m
                ? (e, t) => {
                    let n = m;
                    return (
                      (null == e ? void 0 : e[n]) ===
                      (null == t ? void 0 : t[n])
                    );
                  }
                : m
            ),
            O = (0, a.useCallback)(
              (e) =>
                (0, i.E)(N.mode, {
                  1: () => j.some((t) => L(t, e)),
                  0: () => L(j, e),
                }),
              [j]
            ),
            N = (0, a.useMemo)(
              () => ({
                ...S,
                value: j,
                disabled: p,
                mode: h ? 1 : 0,
                orientation: k,
                compare: L,
                isSelected: O,
                optionsPropsRef: C,
                labelRef: T,
                buttonRef: A,
                optionsRef: E,
              }),
              [j, p, h, S]
            );
          (0, c.e)(() => {
            S.dataRef.current = N;
          }, [N]),
            (0, H.O)(
              [N.buttonRef, N.optionsRef],
              (e, t) => {
                var n;
                P({ type: 1 }),
                  (0, Z.sP)(t, Z.tJ.Loose) ||
                    (e.preventDefault(),
                    null == (n = N.buttonRef.current) || n.focus());
              },
              0 === N.listboxState
            );
          let B = (0, a.useMemo)(
              () => ({ open: 0 === N.listboxState, disabled: p, value: j }),
              [N, p, j]
            ),
            R = (0, b.z)((e) => {
              let t = N.options.find((t) => t.id === e);
              t && z(t.dataRef.current.value);
            }),
            F = (0, b.z)(() => {
              if (null !== N.activeOptionIndex) {
                let { dataRef: e, id: t } = N.options[N.activeOptionIndex];
                z(e.current.value), P({ type: 2, focus: V.Specific, id: t });
              }
            }),
            I = (0, b.z)(() => P({ type: 0 })),
            M = (0, b.z)(() => P({ type: 1 })),
            U = (0, b.z)((e, t, n) =>
              e === V.Specific
                ? P({ type: 2, focus: V.Specific, id: t, trigger: n })
                : P({ type: 2, focus: e, trigger: n })
            ),
            D = (0, b.z)(
              (e, t) => (
                P({ type: 5, id: e, dataRef: t }), () => P({ type: 6, id: e })
              )
            ),
            _ = (0, b.z)(
              (e) => (P({ type: 7, id: e }), () => P({ type: 7, id: null }))
            ),
            z = (0, b.z)((e) =>
              (0, i.E)(N.mode, {
                0: () => (null == w ? void 0 : w(e)),
                1() {
                  let t = N.value.slice(),
                    n = t.findIndex((t) => L(t, e));
                  return (
                    -1 === n ? t.push(e) : t.splice(n, 1),
                    null == w ? void 0 : w(t)
                  );
                },
              })
            ),
            G = (0, b.z)((e) => P({ type: 3, value: e })),
            Y = (0, b.z)(() => P({ type: 4 })),
            K = (0, a.useMemo)(
              () => ({
                onChange: z,
                registerOption: D,
                registerLabel: _,
                goToOption: U,
                closeListbox: M,
                openListbox: I,
                selectActiveOption: F,
                selectOption: R,
                search: G,
                clearSearch: Y,
              }),
              []
            ),
            q = { ref: y },
            $ = (0, a.useRef)(null),
            J = (0, x.G)();
          return (
            (0, a.useEffect)(() => {
              $.current &&
                void 0 !== r &&
                J.addEventListener($.current, 'reset', () => {
                  null == w || w(r);
                });
            }, [$, w]),
            a.createElement(
              ue.Provider,
              { value: K },
              a.createElement(
                fe.Provider,
                { value: N },
                a.createElement(
                  s.up,
                  {
                    value: (0, i.E)(N.listboxState, {
                      0: s.ZM.Open,
                      1: s.ZM.Closed,
                    }),
                  },
                  null != u &&
                    null != j &&
                    Q({ [u]: j }).map(([e, t], n) =>
                      a.createElement(W._, {
                        features: W.A.Hidden,
                        ref:
                          0 === n
                            ? (e) => {
                                var t;
                                $.current =
                                  null !=
                                  (t = null == e ? void 0 : e.closest('form'))
                                    ? t
                                    : null;
                              }
                            : void 0,
                        ...(0, o.oA)({
                          key: e,
                          as: 'input',
                          type: 'hidden',
                          hidden: !0,
                          readOnly: !0,
                          form: l,
                          name: e,
                          value: t,
                        }),
                      })
                    ),
                  (0, o.sY)({
                    ourProps: q,
                    theirProps: g,
                    slot: B,
                    defaultTag: ve,
                    name: 'Listbox',
                  })
                )
              )
            )
          );
        }),
        be = (0, o.yV)(function (e, t) {
          var n;
          let r = (0, I.M)(),
            { id: s = `headlessui-listbox-button-${r}`, ...i } = e,
            l = me('Listbox.Button'),
            c = de('Listbox.Button'),
            u = (0, f.T)(l.buttonRef, t),
            d = (0, x.G)(),
            m = (0, b.z)((e) => {
              switch (e.key) {
                case U.R.Space:
                case U.R.Enter:
                case U.R.ArrowDown:
                  e.preventDefault(),
                    c.openListbox(),
                    d.nextFrame(() => {
                      l.value || c.goToOption(V.First);
                    });
                  break;
                case U.R.ArrowUp:
                  e.preventDefault(),
                    c.openListbox(),
                    d.nextFrame(() => {
                      l.value || c.goToOption(V.Last);
                    });
              }
            }),
            p = (0, b.z)((e) => {
              if (e.key === U.R.Space) e.preventDefault();
            }),
            v = (0, b.z)((e) => {
              if ((0, z.P)(e.currentTarget)) return e.preventDefault();
              0 === l.listboxState
                ? (c.closeListbox(),
                  d.nextFrame(() => {
                    var e;
                    return null == (e = l.buttonRef.current)
                      ? void 0
                      : e.focus({ preventScroll: !0 });
                  }))
                : (e.preventDefault(), c.openListbox());
            }),
            h = M(() => {
              if (l.labelId) return [l.labelId, s].join(' ');
            }, [l.labelId, s]),
            g = (0, a.useMemo)(
              () => ({
                open: 0 === l.listboxState,
                disabled: l.disabled,
                value: l.value,
              }),
              [l]
            ),
            k = {
              ref: u,
              id: s,
              type: Y(e, l.buttonRef),
              'aria-haspopup': 'listbox',
              'aria-controls':
                null == (n = l.optionsRef.current) ? void 0 : n.id,
              'aria-expanded': 0 === l.listboxState,
              'aria-labelledby': h,
              disabled: l.disabled,
              onKeyDown: m,
              onKeyUp: p,
              onClick: v,
            };
          return (0,
          o.sY)({ ourProps: k, theirProps: i, slot: g, defaultTag: 'button', name: 'Listbox.Button' });
        }),
        ge = (0, o.yV)(function (e, t) {
          let n = (0, I.M)(),
            { id: r = `headlessui-listbox-label-${n}`, ...s } = e,
            i = me('Listbox.Label'),
            l = de('Listbox.Label'),
            u = (0, f.T)(i.labelRef, t);
          (0, c.e)(() => l.registerLabel(r), [r]);
          let d = (0, b.z)(() => {
              var e;
              return null == (e = i.buttonRef.current)
                ? void 0
                : e.focus({ preventScroll: !0 });
            }),
            m = (0, a.useMemo)(
              () => ({ open: 0 === i.listboxState, disabled: i.disabled }),
              [i]
            );
          return (0,
          o.sY)({ ourProps: { ref: u, id: r, onClick: d }, theirProps: s, slot: m, defaultTag: 'label', name: 'Listbox.Label' });
        }),
        ke = (0, o.yV)(function (e, t) {
          var n;
          let r = (0, I.M)(),
            { id: l = `headlessui-listbox-options-${r}`, ...c } = e,
            u = me('Listbox.Options'),
            d = de('Listbox.Options'),
            p = (0, f.T)(u.optionsRef, t),
            v = (0, x.G)(),
            h = (0, x.G)(),
            g = (0, s.oJ)(),
            k =
              null !== g ? (g & s.ZM.Open) === s.ZM.Open : 0 === u.listboxState;
          (0, a.useEffect)(() => {
            var e;
            let t = u.optionsRef.current;
            t &&
              0 === u.listboxState &&
              t !== (null == (e = (0, $.r)(t)) ? void 0 : e.activeElement) &&
              t.focus({ preventScroll: !0 });
          }, [u.listboxState, u.optionsRef]);
          let y = (0, b.z)((e) => {
              switch ((h.dispose(), e.key)) {
                case U.R.Space:
                  if ('' !== u.searchQuery)
                    return (
                      e.preventDefault(), e.stopPropagation(), d.search(e.key)
                    );
                case U.R.Enter:
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null !== u.activeOptionIndex)
                  ) {
                    let { dataRef: e } = u.options[u.activeOptionIndex];
                    d.onChange(e.current.value);
                  }
                  0 === u.mode &&
                    (d.closeListbox(),
                    (0, m.k)().nextFrame(() => {
                      var e;
                      return null == (e = u.buttonRef.current)
                        ? void 0
                        : e.focus({ preventScroll: !0 });
                    }));
                  break;
                case (0, i.E)(u.orientation, {
                  vertical: U.R.ArrowDown,
                  horizontal: U.R.ArrowRight,
                }):
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    d.goToOption(V.Next)
                  );
                case (0, i.E)(u.orientation, {
                  vertical: U.R.ArrowUp,
                  horizontal: U.R.ArrowLeft,
                }):
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    d.goToOption(V.Previous)
                  );
                case U.R.Home:
                case U.R.PageUp:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    d.goToOption(V.First)
                  );
                case U.R.End:
                case U.R.PageDown:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    d.goToOption(V.Last)
                  );
                case U.R.Escape:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    d.closeListbox(),
                    v.nextFrame(() => {
                      var e;
                      return null == (e = u.buttonRef.current)
                        ? void 0
                        : e.focus({ preventScroll: !0 });
                    })
                  );
                case U.R.Tab:
                  e.preventDefault(), e.stopPropagation();
                  break;
                default:
                  1 === e.key.length &&
                    (d.search(e.key), h.setTimeout(() => d.clearSearch(), 350));
              }
            }),
            j = M(() => {
              var e, t, n;
              return null !=
                (n = null == (e = u.labelRef.current) ? void 0 : e.id)
                ? n
                : null == (t = u.buttonRef.current)
                ? void 0
                : t.id;
            }, [u.labelRef.current, u.buttonRef.current]),
            w = (0, a.useMemo)(() => ({ open: 0 === u.listboxState }), [u]),
            S = {
              'aria-activedescendant':
                null === u.activeOptionIndex ||
                null == (n = u.options[u.activeOptionIndex])
                  ? void 0
                  : n.id,
              'aria-multiselectable': 1 === u.mode || void 0,
              'aria-labelledby': j,
              'aria-orientation': u.orientation,
              id: l,
              onKeyDown: y,
              role: 'listbox',
              tabIndex: 0,
              ref: p,
            };
          return (0,
          o.sY)({ ourProps: S, theirProps: c, slot: w, defaultTag: 'ul', features: he, visible: k, name: 'Listbox.Options' });
        }),
        ye = (0, o.yV)(function (e, t) {
          let n = (0, I.M)(),
            {
              id: r = `headlessui-listbox-option-${n}`,
              disabled: s = !1,
              value: i,
              ...l
            } = e,
            d = me('Listbox.Option'),
            p = de('Listbox.Option'),
            v =
              null !== d.activeOptionIndex &&
              d.options[d.activeOptionIndex].id === r,
            h = d.isSelected(i),
            x = (0, a.useRef)(null),
            g = ne(x),
            k = (0, u.E)({
              disabled: s,
              value: i,
              domRef: x,
              get textValue() {
                return g();
              },
            }),
            y = (0, f.T)(t, x);
          (0, c.e)(() => {
            if (0 !== d.listboxState || !v || 0 === d.activationTrigger) return;
            let e = (0, m.k)();
            return (
              e.requestAnimationFrame(() => {
                var e, t;
                null ==
                  (t = null == (e = x.current) ? void 0 : e.scrollIntoView) ||
                  t.call(e, { block: 'nearest' });
              }),
              e.dispose
            );
          }, [x, v, d.listboxState, d.activationTrigger, d.activeOptionIndex]),
            (0, c.e)(() => p.registerOption(r, k), [k, r]);
          let j = (0, b.z)((e) => {
              if (s) return e.preventDefault();
              p.onChange(i),
                0 === d.mode &&
                  (p.closeListbox(),
                  (0, m.k)().nextFrame(() => {
                    var e;
                    return null == (e = d.buttonRef.current)
                      ? void 0
                      : e.focus({ preventScroll: !0 });
                  }));
            }),
            w = (0, b.z)(() => {
              if (s) return p.goToOption(V.Nothing);
              p.goToOption(V.Specific, r);
            }),
            S = X(),
            P = (0, b.z)((e) => S.update(e)),
            C = (0, b.z)((e) => {
              S.wasMoved(e) && (s || v || p.goToOption(V.Specific, r, 0));
            }),
            T = (0, b.z)((e) => {
              S.wasMoved(e) && (s || (v && p.goToOption(V.Nothing)));
            }),
            A = (0, a.useMemo)(
              () => ({ active: v, selected: h, disabled: s }),
              [v, h, s]
            );
          return (0,
          o.sY)({ ourProps: { id: r, ref: y, role: 'option', tabIndex: !0 === s ? void 0 : -1, 'aria-disabled': !0 === s || void 0, 'aria-selected': h, disabled: void 0, onClick: j, onFocus: w, onPointerEnter: P, onMouseEnter: P, onPointerMove: C, onMouseMove: C, onPointerLeave: T, onMouseLeave: T }, theirProps: l, slot: A, defaultTag: 'li', name: 'Listbox.Option' });
        }),
        je = Object.assign(xe, {
          Button: be,
          Label: ge,
          Options: ke,
          Option: ye,
        });
      function we({ onFocus: e }) {
        let [t, n] = (0, a.useState)(!0),
          r = (0, l.t)();
        return t
          ? a.createElement(W._, {
              as: 'button',
              type: 'button',
              features: W.A.Focusable,
              onFocus: (t) => {
                t.preventDefault();
                let a,
                  o = 50;
                a = requestAnimationFrame(function t() {
                  if (o-- <= 0) a && cancelAnimationFrame(a);
                  else if (e()) {
                    if ((cancelAnimationFrame(a), !r.current)) return;
                    n(!1);
                  } else a = requestAnimationFrame(t);
                });
              },
            })
          : null;
      }
      var Se = n('../node_modules/@headlessui/react/dist/utils/micro-task.js');
      const Pe = a.createContext(null);
      function Ce({ children: e }) {
        let t = a.useRef({
          groups: new Map(),
          get(e, t) {
            var n;
            let r = this.groups.get(e);
            r || ((r = new Map()), this.groups.set(e, r));
            let a = null != (n = r.get(t)) ? n : 0;
            return (
              r.set(t, a + 1),
              [
                Array.from(r.keys()).indexOf(t),
                function () {
                  let e = r.get(t);
                  e > 1 ? r.set(t, e - 1) : r.delete(t);
                },
              ]
            );
          },
        });
        return a.createElement(Pe.Provider, { value: t }, e);
      }
      function Te(e) {
        let t = a.useContext(Pe);
        if (!t)
          throw new Error(
            'You must wrap your component in a <StableCollection>'
          );
        let n = (function () {
            var e, t, n;
            let r =
              null !=
              (n =
                null ==
                (t =
                  null ==
                  (e = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)
                    ? void 0
                    : e.ReactCurrentOwner)
                  ? void 0
                  : t.current)
                ? n
                : null;
            if (!r) return Symbol();
            let o = [],
              s = r;
            for (; s; ) o.push(s.index), (s = s.return);
            return '$.' + o.join('.');
          })(),
          [r, o] = t.current.get(e, n);
        return a.useEffect(() => o, []), r;
      }
      var Ae = ((e) => (
          (e[(e.Forwards = 0)] = 'Forwards'),
          (e[(e.Backwards = 1)] = 'Backwards'),
          e
        ))(Ae || {}),
        Ee = ((e) => (
          (e[(e.Less = -1)] = 'Less'),
          (e[(e.Equal = 0)] = 'Equal'),
          (e[(e.Greater = 1)] = 'Greater'),
          e
        ))(Ee || {}),
        Le = ((e) => (
          (e[(e.SetSelectedIndex = 0)] = 'SetSelectedIndex'),
          (e[(e.RegisterTab = 1)] = 'RegisterTab'),
          (e[(e.UnregisterTab = 2)] = 'UnregisterTab'),
          (e[(e.RegisterPanel = 3)] = 'RegisterPanel'),
          (e[(e.UnregisterPanel = 4)] = 'UnregisterPanel'),
          e
        ))(Le || {});
      let Oe = {
          0(e, t) {
            var n;
            let r = (0, Z.z2)(e.tabs, (e) => e.current),
              a = (0, Z.z2)(e.panels, (e) => e.current),
              o = r.filter((e) => {
                var t;
                return !(null != (t = e.current) && t.hasAttribute('disabled'));
              }),
              s = { ...e, tabs: r, panels: a };
            if (t.index < 0 || t.index > r.length - 1) {
              let n = (0, i.E)(Math.sign(t.index - e.selectedIndex), {
                [-1]: () => 1,
                0: () =>
                  (0, i.E)(Math.sign(t.index), {
                    [-1]: () => 0,
                    0: () => 0,
                    1: () => 1,
                  }),
                1: () => 0,
              });
              if (0 === o.length) return s;
              let a = (0, i.E)(n, {
                0: () => r.indexOf(o[0]),
                1: () => r.indexOf(o[o.length - 1]),
              });
              return { ...s, selectedIndex: -1 === a ? e.selectedIndex : a };
            }
            let l = r.slice(0, t.index),
              c = [...r.slice(t.index), ...l].find((e) => o.includes(e));
            if (!c) return s;
            let u = null != (n = r.indexOf(c)) ? n : e.selectedIndex;
            return (
              -1 === u && (u = e.selectedIndex), { ...s, selectedIndex: u }
            );
          },
          1(e, t) {
            var n;
            if (e.tabs.includes(t.tab)) return e;
            let r = e.tabs[e.selectedIndex],
              a = (0, Z.z2)([...e.tabs, t.tab], (e) => e.current),
              o = null != (n = a.indexOf(r)) ? n : e.selectedIndex;
            return (
              -1 === o && (o = e.selectedIndex),
              { ...e, tabs: a, selectedIndex: o }
            );
          },
          2: (e, t) => ({ ...e, tabs: e.tabs.filter((e) => e !== t.tab) }),
          3: (e, t) =>
            e.panels.includes(t.panel)
              ? e
              : {
                  ...e,
                  panels: (0, Z.z2)([...e.panels, t.panel], (e) => e.current),
                },
          4: (e, t) => ({
            ...e,
            panels: e.panels.filter((e) => e !== t.panel),
          }),
        },
        Ne = (0, a.createContext)(null);
      function Be(e) {
        let t = (0, a.useContext)(Ne);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, Be), t);
        }
        return t;
      }
      Ne.displayName = 'TabsDataContext';
      let Re = (0, a.createContext)(null);
      function Fe(e) {
        let t = (0, a.useContext)(Re);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, Fe), t);
        }
        return t;
      }
      function Ie(e, t) {
        return (0, i.E)(t.type, Oe, e, t);
      }
      Re.displayName = 'TabsActionsContext';
      let Me = a.Fragment;
      let Ue = o.AN.RenderStrategy | o.AN.Static;
      let De = (0, o.yV)(function (e, t) {
          var n, r;
          let s = (0, I.M)(),
            { id: l = `headlessui-tabs-tab-${s}`, ...u } = e,
            {
              orientation: d,
              activation: m,
              selectedIndex: p,
              tabs: v,
              panels: h,
            } = Be('Tab'),
            x = Fe('Tab'),
            g = Be('Tab'),
            k = (0, a.useRef)(null),
            y = (0, f.T)(k, t);
          (0, c.e)(() => x.registerTab(k), [x, k]);
          let j = Te('tabs'),
            w = v.indexOf(k);
          -1 === w && (w = j);
          let S = w === p,
            P = (0, b.z)((e) => {
              var t;
              let n = e();
              if (n === Z.fE.Success && 'auto' === m) {
                let e = null == (t = (0, $.r)(k)) ? void 0 : t.activeElement,
                  n = g.tabs.findIndex((t) => t.current === e);
                -1 !== n && x.change(n);
              }
              return n;
            }),
            C = (0, b.z)((e) => {
              let t = v.map((e) => e.current).filter(Boolean);
              if (e.key === U.R.Space || e.key === U.R.Enter)
                return (
                  e.preventDefault(), e.stopPropagation(), void x.change(w)
                );
              switch (e.key) {
                case U.R.Home:
                case U.R.PageUp:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    P(() => (0, Z.jA)(t, Z.TO.First))
                  );
                case U.R.End:
                case U.R.PageDown:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    P(() => (0, Z.jA)(t, Z.TO.Last))
                  );
              }
              return P(() =>
                (0, i.E)(d, {
                  vertical: () =>
                    e.key === U.R.ArrowUp
                      ? (0, Z.jA)(t, Z.TO.Previous | Z.TO.WrapAround)
                      : e.key === U.R.ArrowDown
                      ? (0, Z.jA)(t, Z.TO.Next | Z.TO.WrapAround)
                      : Z.fE.Error,
                  horizontal: () =>
                    e.key === U.R.ArrowLeft
                      ? (0, Z.jA)(t, Z.TO.Previous | Z.TO.WrapAround)
                      : e.key === U.R.ArrowRight
                      ? (0, Z.jA)(t, Z.TO.Next | Z.TO.WrapAround)
                      : Z.fE.Error,
                })
              ) === Z.fE.Success
                ? e.preventDefault()
                : void 0;
            }),
            T = (0, a.useRef)(!1),
            A = (0, b.z)(() => {
              var e;
              T.current ||
                ((T.current = !0),
                null == (e = k.current) || e.focus({ preventScroll: !0 }),
                x.change(w),
                (0, Se.Y)(() => {
                  T.current = !1;
                }));
            }),
            E = (0, b.z)((e) => {
              e.preventDefault();
            }),
            L = (0, a.useMemo)(() => ({ selected: S }), [S]),
            O = {
              ref: y,
              onKeyDown: C,
              onMouseDown: E,
              onClick: A,
              id: l,
              role: 'tab',
              type: Y(e, k),
              'aria-controls':
                null == (r = null == (n = h[w]) ? void 0 : n.current)
                  ? void 0
                  : r.id,
              'aria-selected': S,
              tabIndex: S ? 0 : -1,
            };
          return (0,
          o.sY)({ ourProps: O, theirProps: u, slot: L, defaultTag: 'button', name: 'Tabs.Tab' });
        }),
        Ve = (0, o.yV)(function (e, t) {
          let {
            defaultIndex: n = 0,
            vertical: r = !1,
            manual: s = !1,
            onChange: i,
            selectedIndex: l = null,
            ...d
          } = e;
          const m = r ? 'vertical' : 'horizontal',
            p = s ? 'manual' : 'auto';
          let v = null !== l,
            h = (0, f.T)(t),
            [x, g] = (0, a.useReducer)(Ie, {
              selectedIndex: null != l ? l : n,
              tabs: [],
              panels: [],
            }),
            k = (0, a.useMemo)(
              () => ({ selectedIndex: x.selectedIndex }),
              [x.selectedIndex]
            ),
            y = (0, u.E)(i || (() => {})),
            j = (0, u.E)(x.tabs),
            w = (0, a.useMemo)(
              () => ({ orientation: m, activation: p, ...x }),
              [m, p, x]
            ),
            S = (0, b.z)(
              (e) => (g({ type: 1, tab: e }), () => g({ type: 2, tab: e }))
            ),
            P = (0, b.z)(
              (e) => (g({ type: 3, panel: e }), () => g({ type: 4, panel: e }))
            ),
            C = (0, b.z)((e) => {
              T.current !== e && y.current(e), v || g({ type: 0, index: e });
            }),
            T = (0, u.E)(v ? e.selectedIndex : x.selectedIndex),
            A = (0, a.useMemo)(
              () => ({ registerTab: S, registerPanel: P, change: C }),
              []
            );
          (0, c.e)(() => {
            g({ type: 0, index: null != l ? l : n });
          }, [l]),
            (0, c.e)(() => {
              if (void 0 === T.current || x.tabs.length <= 0) return;
              let e = (0, Z.z2)(x.tabs, (e) => e.current);
              e.some((e, t) => x.tabs[t] !== e) &&
                C(e.indexOf(x.tabs[T.current]));
            });
          let E = { ref: h };
          return a.createElement(
            Ce,
            null,
            a.createElement(
              Re.Provider,
              { value: A },
              a.createElement(
                Ne.Provider,
                { value: w },
                w.tabs.length <= 0 &&
                  a.createElement(we, {
                    onFocus: () => {
                      var e, t;
                      for (let n of j.current)
                        if (
                          0 === (null == (e = n.current) ? void 0 : e.tabIndex)
                        )
                          return null == (t = n.current) || t.focus(), !0;
                      return !1;
                    },
                  }),
                (0, o.sY)({
                  ourProps: E,
                  theirProps: d,
                  slot: k,
                  defaultTag: Me,
                  name: 'Tabs',
                })
              )
            )
          );
        }),
        _e = (0, o.yV)(function (e, t) {
          let { orientation: n, selectedIndex: r } = Be('Tab.List'),
            a = (0, f.T)(t);
          return (0,
          o.sY)({ ourProps: { ref: a, role: 'tablist', 'aria-orientation': n }, theirProps: e, slot: { selectedIndex: r }, defaultTag: 'div', name: 'Tabs.List' });
        }),
        ze = (0, o.yV)(function (e, t) {
          let { selectedIndex: n } = Be('Tab.Panels'),
            r = (0, f.T)(t),
            s = (0, a.useMemo)(() => ({ selectedIndex: n }), [n]);
          return (0,
          o.sY)({ ourProps: { ref: r }, theirProps: e, slot: s, defaultTag: 'div', name: 'Tabs.Panels' });
        }),
        Ze = (0, o.yV)(function (e, t) {
          var n, r, s, i;
          let l = (0, I.M)(),
            { id: u = `headlessui-tabs-panel-${l}`, tabIndex: d = 0, ...m } = e,
            { selectedIndex: p, tabs: v, panels: h } = Be('Tab.Panel'),
            x = Fe('Tab.Panel'),
            b = (0, a.useRef)(null),
            g = (0, f.T)(b, t);
          (0, c.e)(() => x.registerPanel(b), [x, b]);
          let k = Te('panels'),
            y = h.indexOf(b);
          -1 === y && (y = k);
          let j = y === p,
            w = (0, a.useMemo)(() => ({ selected: j }), [j]),
            S = {
              ref: g,
              id: u,
              role: 'tabpanel',
              'aria-labelledby':
                null == (r = null == (n = v[y]) ? void 0 : n.current)
                  ? void 0
                  : r.id,
              tabIndex: j ? d : -1,
            };
          return j ||
            (null != (s = m.unmount) && !s) ||
            (null != (i = m.static) && i)
            ? (0, o.sY)({
                ourProps: S,
                theirProps: m,
                slot: w,
                defaultTag: 'div',
                features: Ue,
                visible: j,
                name: 'Tabs.Panel',
              })
            : a.createElement(W._, { as: 'span', ...S });
        }),
        Ge = Object.assign(De, { Group: Ve, List: _e, Panels: ze, Panel: Ze });
      var Ye = a.forwardRef(function (e, t) {
        return a.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 20 20',
              fill: 'currentColor',
              'aria-hidden': 'true',
              ref: t,
            },
            e
          ),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z',
            clipRule: 'evenodd',
          })
        );
      });
      var He = a.forwardRef(function (e, t) {
          return a.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                'aria-hidden': 'true',
                ref: t,
              },
              e
            ),
            a.createElement('path', {
              fillRule: 'evenodd',
              d: 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z',
              clipRule: 'evenodd',
            })
          );
        }),
        We = n(
          '../node_modules/@solana/wallet-adapter-react/lib/esm/useAnchorWallet.js'
        ),
        Qe = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.filter(Boolean).join(' ');
        },
        Ke = n('./components/Layout.tsx'),
        qe = n('./components/SEO.tsx'),
        $e = n('../node_modules/react/jsx-runtime.js'),
        Je = function () {
          return (0, $e.jsxs)('svg', {
            width: 53,
            height: 53,
            viewBox: '0 0 53 53',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, $e.jsx)('circle', {
                cx: '26.5',
                cy: '26.5',
                r: '26.0656',
                stroke: 'currentColor',
                strokeWidth: '0.868852',
              }),
              (0, $e.jsx)('path', {
                d: 'M33.5787 23.1123V18.8775C33.5787 15.0768 30.502 12 26.7012 12C22.9005 12 19.8237 15.0768 19.8237 18.8775V23.1492C18.0859 24.9223 17 27.3119 17 30.0267C17 35.3843 21.3437 39.728 26.7013 39.728C32.0589 39.728 36.4026 35.3843 36.4026 30.0267C36.4026 27.3105 35.3167 24.8856 33.5789 23.1123H33.5787ZM21.2716 18.8775C21.2716 15.8728 23.6965 13.4479 26.7012 13.4479C29.7059 13.4479 32.1308 15.8728 32.1308 18.8775V21.9543C30.5741 20.9052 28.7289 20.2886 26.7012 20.2886C24.7104 20.2886 22.8284 20.9037 21.2716 21.9543V18.8775ZM26.7012 38.2432C22.1396 38.2432 18.4478 34.5514 18.4478 29.9898C18.4478 28.2888 18.954 26.732 19.8236 25.3931C20.2224 24.778 20.7286 24.235 21.2715 23.7642C22.7194 22.4973 24.6014 21.7365 26.7011 21.7365C28.7641 21.7365 30.6829 22.4973 32.1308 23.7642C32.6737 24.235 33.1799 24.8133 33.5787 25.3931C34.4468 26.6968 34.9545 28.2889 34.9545 29.9898C34.9545 34.55 31.2627 38.2432 26.7011 38.2432H26.7012Z',
                fill: 'currentColor',
              }),
              (0, $e.jsx)('path', {
                d: 'M26.7 27.8906C25.9393 27.8906 25.3242 28.5057 25.3242 29.2664C25.3242 29.7726 25.5773 30.1714 25.9761 30.4244V32.1975C25.9761 32.5963 26.3013 32.9215 26.7 32.9215C27.0988 32.9215 27.424 32.5963 27.424 32.1975V30.4244C27.8227 30.1713 28.0758 29.7373 28.0758 29.2664C28.0758 28.5057 27.4607 27.8906 26.7 27.8906Z',
                fill: 'currentColor',
              }),
            ],
          });
        },
        Xe = function () {
          return (0, $e.jsxs)('svg', {
            width: 53,
            height: 53,
            viewBox: '0 0 53 53',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, $e.jsx)('circle', {
                cx: '26.5',
                cy: '26.5',
                r: '26.0656',
                stroke: 'currentColor',
                strokeWidth: '0.868852',
              }),
              (0, $e.jsx)('path', {
                d: 'M26.7938 27.8906C26.033 27.8906 25.418 28.5057 25.418 29.2664C25.418 29.7726 25.6711 30.1714 26.0698 30.4244V32.1975C26.0698 32.5963 26.395 32.9215 26.7938 32.9215C27.1925 32.9215 27.5177 32.5963 27.5177 32.1975V30.4244C27.9165 30.1713 28.1696 29.7373 28.1696 29.2664C28.1696 28.5057 27.5545 27.8906 26.7938 27.8906Z',
                fill: 'currentColor',
              }),
              (0, $e.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M32.9666 16.043C31.8858 13.6621 29.4881 12.0078 26.7012 12.0078C22.9005 12.0078 19.8237 15.0846 19.8237 18.8853V23.157C18.0859 24.9301 17 27.3197 17 30.0345C17 35.3921 21.3437 39.7358 26.7013 39.7358C32.0589 39.7358 36.4026 35.3921 36.4026 30.0345C36.4026 27.3183 35.3167 24.8934 33.5789 23.1201H33.5787V23.091L33.5595 23.0996L32.2021 22.0136L32.0298 21.8949C30.4945 20.8867 28.6852 20.2965 26.7012 20.2965C24.7104 20.2965 22.8284 20.9115 21.2716 21.9621V18.8853C21.2716 15.8807 23.6965 13.4557 26.7012 13.4557C28.8855 13.4557 30.7634 14.7372 31.6261 16.5914L32.9666 16.043ZM26.7011 38.251C22.1395 38.2509 18.4478 34.5592 18.4478 29.9976C18.4478 28.2966 18.954 26.7398 19.8236 25.4009C20.2224 24.7858 20.7286 24.2429 21.2715 23.772C22.7194 22.5051 24.6014 21.7444 26.7011 21.7444C28.7641 21.7444 30.6829 22.5051 32.1308 23.772C32.6737 24.2429 33.1799 24.8211 33.5787 25.4009C34.4468 26.7046 34.9545 28.2967 34.9545 29.9976C34.9545 34.5578 31.2627 38.251 26.7011 38.251Z',
                fill: 'currentColor',
              }),
            ],
          });
        },
        et = function () {
          return (0, $e.jsxs)('svg', {
            width: 53,
            height: 53,
            viewBox: '0 0 53 53',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, $e.jsx)('circle', {
                cx: '26.5',
                cy: '26.5',
                r: '26.0656',
                stroke: 'currentColor',
                strokeWidth: '0.868852',
              }),
              (0, $e.jsx)('path', {
                d: 'M38.7272 31.5156C39.9997 31.1761 41 29.9747 41 28.5566V25.4748C41 24.0567 40.0305 22.8553 38.7272 22.5159V21.6226C38.7272 19.0958 36.6971 17 34.1817 17H17.5456C15.0609 17 13 19.0645 13 21.6226V32.3774C13 34.9042 15.0301 37 17.5456 37H34.1817C36.6663 37 38.7272 34.9355 38.7272 32.3774V31.5156ZM39.4848 25.4747V28.5565C39.4848 29.3883 38.8184 30.0974 37.9696 30.0974H34.9393C33.2726 30.0974 31.9089 28.7106 31.9089 27.0156C31.9089 25.3206 33.2726 23.9338 34.9393 23.9338H37.9696C38.7876 23.9338 39.4848 24.6429 39.4848 25.4747ZM34.1817 35.4904H17.5456C15.8789 35.4904 14.5152 34.1036 14.5152 32.4087V21.6225C14.5152 19.9275 15.8789 18.5408 17.5456 18.5408H34.1817C35.8484 18.5408 37.212 19.9275 37.212 21.6225V22.393H34.9393C32.4546 22.393 30.3937 24.4575 30.3937 27.0156C30.3937 29.5737 32.4238 31.6382 34.9393 31.6382H37.212V32.4087C37.212 34.1036 35.8484 35.4904 34.1817 35.4904Z',
                fill: 'currentColor',
              }),
            ],
          });
        },
        tt = function () {
          return (0, $e.jsx)('svg', {
            width: 13,
            height: 13,
            viewBox: '0 0 13 13',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, $e.jsx)('path', {
              d: 'M12.1934 0L6.5 5.69343L0.806569 0L0 0.806569L5.69343 6.5L0 12.1934L0.806569 13L6.5 7.30657L12.1934 13L13 12.1934L7.30657 6.5L13 0.806569L12.1934 0Z',
              fill: '#E6DAFE',
            }),
          });
        };
      function nt(e) {
        var t = e.isModalOpen,
          n = e.setIsModalOpen,
          r = e.title,
          o = e.children,
          s = function () {
            return n(!1);
          };
        return (0, $e.jsx)(R, {
          appear: !0,
          show: t,
          as: a.Fragment,
          children: (0, $e.jsxs)(F.V, {
            as: 'div',
            className: 'relative z-10',
            onClose: s,
            children: [
              (0, $e.jsx)(R.Child, {
                as: a.Fragment,
                enter: 'ease-out duration-300',
                enterFrom: 'opacity-0',
                enterTo: 'opacity-100',
                leave: 'ease-in duration-200',
                leaveFrom: 'opacity-100',
                leaveTo: 'opacity-0',
                children: (0, $e.jsx)('div', {
                  className: 'fixed inset-0 bg-black bg-opacity-50',
                }),
              }),
              (0, $e.jsx)('div', {
                className: 'fixed inset-0 overflow-y-auto',
                children: (0, $e.jsx)('div', {
                  className:
                    'flex min-h-full items-center justify-center p-4 text-center',
                  children: (0, $e.jsx)(R.Child, {
                    as: a.Fragment,
                    enter: 'ease-out duration-300',
                    enterFrom: 'opacity-0 scale-95',
                    enterTo: 'opacity-100 scale-100',
                    leave: 'ease-in duration-200',
                    leaveFrom: 'opacity-100 scale-100',
                    leaveTo: 'opacity-0 scale-95',
                    children: (0, $e.jsxs)(F.V.Panel, {
                      className: 'diaglogPanel ',
                      children: [
                        (0, $e.jsxs)('button', {
                          className: 'diaglogClose',
                          onClick: s,
                          children: [
                            (0, $e.jsx)('span', {
                              className: 'mr-3',
                              children: 'close',
                            }),
                            ' ',
                            (0, $e.jsx)(tt, {}),
                          ],
                        }),
                        (0, $e.jsxs)('div', {
                          className: 'max-w-md',
                          children: [
                            (0, $e.jsx)(F.V.Title, {
                              as: 'h3',
                              className: 'diaglogTitle',
                              children: r,
                            }),
                            o,
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function rt(e) {
        var t = e.isStakedModalOpen,
          n = e.setIsStakedModalOpen,
          r = e.stakedPythBalance,
          a = e.stakingPythBalance;
        return (0, $e.jsx)($e.Fragment, {
          children: (0, $e.jsxs)(nt, {
            isModalOpen: t,
            setIsModalOpen: n,
            title: 'Staked tokens',
            children: [
              (0, $e.jsx)('p', {
                className: 'mb-8 leading-6 ',
                children:
                  'Staked tokens enable you to participate in Pyth Network governance. Newly-staked tokens become eligible to vote in governance at the beginning of the next epoch. (Epochs start every Thursday at 00:00 UTC).',
              }),
              (0, $e.jsxs)('p', {
                className: 'leading-6 ',
                children: [
                  'You currently have ',
                  null === r || void 0 === r ? void 0 : r.toString(),
                  ' staked tokens.',
                ],
              }),
              a && !a.isZero()
                ? (0, $e.jsxs)('p', {
                    className: 'mt-4 leading-6 ',
                    children: [
                      a.toString(),
                      ' tokens will be staked from the beginning of the next epoch.',
                    ],
                  })
                : null,
            ],
          }),
        });
      }
      function at(e) {
        var t = e.isUnstakedModalOpen,
          n = e.setIsUnstakedModalOpen,
          r = e.unstakedPythBalance,
          a = e.unstakingPythBalance;
        return (0, $e.jsxs)(nt, {
          isModalOpen: t,
          setIsModalOpen: n,
          title: 'Unstaked Tokens',
          children: [
            (0, $e.jsx)('p', {
              className: 'mb-6 leading-6',
              children:
                'Unstaking tokens enables you to withdraw them from the program after a cooldown period of one epoch once the current epoch ends. (Epochs start every Thursday at 00:00 UTC and last 7 days). Unstaked tokens cannot participate in governance.',
            }),
            (0, $e.jsxs)('p', {
              className: 'leading-6',
              children: [
                'You currently have ',
                null === r || void 0 === r ? void 0 : r.toString(),
                ' unstaked tokens.',
              ],
            }),
            a && !a.isZero()
              ? (0, $e.jsxs)('p', {
                  className: 'mt-4 leading-6',
                  children: [
                    a.toString(),
                    ' tokens have to go through a cooldown period for one full epoch before they can be withdrawn.',
                  ],
                })
              : null,
          ],
        });
      }
      var ot = n('./hooks/useStakeAccounts.ts'),
        st = n(
          '../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        it = n(
          '../node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js'
        ),
        lt = n.n(it),
        ct = n('../node_modules/react-query/es/index.js'),
        ut = n('./hooks/useStakeConnection.ts'),
        dt = n('../staking/lib/app/index.js'),
        ft = n('../node_modules/react-hot-toast/dist/index.mjs'),
        mt = n('./utils/capitalizeFirstLetter.ts');
      function pt(e) {
        var t = (0, ut.D)().data;
        return (0, ct.useQuery)(
          ['balance', e],
          (0, st.Z)(
            lt().mark(function n() {
              var r, a, o, s;
              return lt().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if ('NA' !== e) {
                        n.next = 2;
                        break;
                      }
                      return n.abrupt('return', {
                        lockingPythBalance: dt.PythBalance.zero(),
                        lockedPythBalance: dt.PythBalance.zero(),
                        unlockingPythBalance: dt.PythBalance.zero(),
                        unlockedPythBalance: dt.PythBalance.zero(),
                        unvestedTotalPythBalance: dt.PythBalance.zero(),
                        unvestedLockingPythBalance: dt.PythBalance.zero(),
                        unvestedLockedPythBalance: dt.PythBalance.zero(),
                        unvestedPreUnlockingPythBalance: dt.PythBalance.zero(),
                        unvestedUnlockingPythBalance: dt.PythBalance.zero(),
                        unvestedUnlockedPythBalance: dt.PythBalance.zero(),
                      });
                    case 2:
                      return (n.t0 = e), (n.next = 5), t.getTime();
                    case 5:
                      return (
                        (n.t1 = n.sent),
                        (r = n.t0.getBalanceSummary.call(n.t0, n.t1)),
                        (a = r.withdrawable),
                        (o = r.locked),
                        (s = r.unvested),
                        n.abrupt('return', {
                          lockingPythBalance: o.locking,
                          lockedPythBalance: o.locked,
                          unlockingPythBalance: o.unlocking.add(o.preunlocking),
                          unlockedPythBalance: a,
                          unvestedTotalPythBalance: s.total,
                          unvestedLockingPythBalance: s.locking,
                          unvestedLockedPythBalance: s.locked,
                          unvestedPreUnlockingPythBalance: s.preunlocking,
                          unvestedUnlockingPythBalance: s.unlocking,
                          unvestedUnlockedPythBalance: s.unlocked,
                        })
                      );
                    case 11:
                    case 'end':
                      return n.stop();
                  }
              }, n);
            })
          ),
          {
            onError: function (e) {
              ft.ZP.error((0, mt.f)(e.message));
            },
            enabled: void 0 !== t && void 0 !== e,
          }
        );
      }
      function vt(e) {
        var t = (0, ut.D)().data;
        return (0, ct.useQuery)(
          ['vesting-account-state', e],
          (0, st.Z)(
            lt().mark(function n() {
              var r, a;
              return lt().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if ('NA' !== e) {
                        n.next = 2;
                        break;
                      }
                      return n.abrupt('return', void 0);
                    case 2:
                      return (n.next = 4), t.getTime();
                    case 4:
                      return (
                        (r = n.sent),
                        (a = e.getVestingAccountState(r)),
                        n.abrupt('return', a)
                      );
                    case 7:
                    case 'end':
                      return n.stop();
                  }
              }, n);
            })
          ),
          { enabled: void 0 !== t && void 0 !== e }
        );
      }
      var ht = n('../node_modules/bn.js/lib/bn.js'),
        xt = n.n(ht);
      var bt = n('./components/panels/components/index.ts');
      function gt(e) {
        return !!/^\d*\.?\d{0,6}$/.test(e);
      }
      function kt(e, t) {
        return !e || !t || !dt.PythBalance.fromString(e).gt(t);
      }
      function yt(e) {
        var t = e.isModalOpen,
          n = e.setIsModalOpen,
          r = e.mainStakeAccount,
          o = e.title,
          s = e.actionLabel,
          i = e.balance,
          l = e.onAction,
          c = (0, a.useState)(''),
          u = c[0],
          d = c[1],
          f = (0, ut.D)().data,
          m = kt(u, i);
        return (0, $e.jsxs)(nt, {
          title: o,
          isModalOpen: t,
          setIsModalOpen: n,
          children: [
            ' ',
            (0, $e.jsxs)($e.Fragment, {
              children: [
                (0, $e.jsxs)($e.Fragment, {
                  children: [
                    (0, $e.jsx)(bt.YW, {
                      balance: i,
                      isBalanceLoading: !1,
                      setAmount: d,
                    }),
                    (0, $e.jsx)(bt._Z, {
                      amount: u,
                      onAmountChange: function (e) {
                        gt(e) && d(e);
                      },
                    }),
                  ],
                }),
                (0, $e.jsx)(bt.Kk, {
                  actionLabel: s,
                  onAction: function () {
                    l(u);
                  },
                  isActionDisabled: !m || void 0 === r || void 0 === f,
                  isActionLoading: !1,
                  tooltipContentOnDisabled: 'Insufficient balance',
                }),
              ],
            }),
          ],
        });
      }
      function jt(e) {
        var t = e.isLockedModalOpen,
          n = e.setIsLockedModalOpen,
          r = e.currentVestingAccountState,
          o = e.mainStakeAccount,
          s = (0, ut.D)().data,
          i = pt(o),
          l = i.data,
          c = (i.isLoading, null !== l && void 0 !== l ? l : {}),
          u = c.lockedPythBalance,
          d = void 0 === u ? dt.PythBalance.zero() : u,
          f = c.lockingPythBalance,
          m = void 0 === f ? dt.PythBalance.zero() : f,
          p = c.unvestedTotalPythBalance,
          v = void 0 === p ? dt.PythBalance.zero() : p,
          h = c.unvestedLockingPythBalance,
          x = void 0 === h ? dt.PythBalance.zero() : h,
          b = c.unvestedLockedPythBalance,
          g = void 0 === b ? dt.PythBalance.zero() : b,
          k = c.unvestedPreUnlockingPythBalance,
          y = void 0 === k ? dt.PythBalance.zero() : k,
          j = c.unvestedUnlockingPythBalance,
          w = void 0 === j ? dt.PythBalance.zero() : j,
          S = c.unvestedUnlockedPythBalance,
          P = void 0 === S ? dt.PythBalance.zero() : S,
          C = (function (e) {
            var t = (0, ut.D)().data;
            return (0, ct.useQuery)(
              ['next-vesting-event', e],
              (0, st.Z)(
                lt().mark(function n() {
                  var r, a;
                  return lt().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if ('NA' !== e) {
                            n.next = 2;
                            break;
                          }
                          return n.abrupt('return', void 0);
                        case 2:
                          return (n.next = 4), t.getTime();
                        case 4:
                          if (((r = n.sent), !(a = e.getNextVesting(r)))) {
                            n.next = 8;
                            break;
                          }
                          return n.abrupt('return', {
                            nextVestingAmount: new dt.PythBalance(
                              new (xt())(a.amount.toString())
                            ),
                            nextVestingDate: new Date(1e3 * Number(a.time)),
                          });
                        case 8:
                          return n.abrupt('return', void 0);
                        case 9:
                        case 'end':
                          return n.stop();
                      }
                  }, n);
                })
              ),
              { enabled: void 0 !== t && void 0 !== e }
            );
          })(o),
          T = C.data,
          A = null !== T && void 0 !== T ? T : {},
          E = A.nextVestingDate,
          L = A.nextVestingAmount,
          O = void 0 === L ? dt.PythBalance.zero() : L,
          N = (0, a.useState)(!1),
          B = N[0],
          R = N[1],
          F = (0, a.useState)(!1),
          I = F[0],
          M = F[1],
          U = (function () {
            var e = (0, ct.useQueryClient)();
            return (0, ct.useMutation)(
              ['stake-locked-mutation'],
              (function () {
                var e = (0, st.Z)(
                  lt().mark(function e(t) {
                    var n, r, a, o;
                    return lt().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = t.amount),
                              (r = t.stakeConnection),
                              (a = t.mainStakeAccount),
                              n)
                            ) {
                              e.next = 3;
                              break;
                            }
                            throw new Error('Please enter a valid amount!');
                          case 3:
                            if (
                              !(o = dt.PythBalance.fromString(n)).gt(
                                dt.PythBalance.zero()
                              )
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (e.next = 7), r.lockTokens(a, o);
                          case 7:
                            ft.ZP.success('Successfully staked!'),
                              (e.next = 11);
                            break;
                          case 10:
                            throw new Error('Amount must be greater than 0.');
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              {
                onSuccess: function () {
                  e.invalidateQueries({
                    predicate: function (e) {
                      return e.queryKey[0] !== ut.n;
                    },
                  });
                },
                onError: function (e) {
                  ft.ZP.error((0, mt.f)(e.message));
                },
              }
            );
          })(),
          D = (function () {
            var e = (0, ct.useQueryClient)();
            return (0, ct.useMutation)(
              ['unstake-locked-mutation'],
              (function () {
                var e = (0, st.Z)(
                  lt().mark(function e(t) {
                    var n, r, a, o;
                    return lt().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = t.amount),
                              (r = t.mainStakeAccount),
                              (a = t.stakeConnection),
                              n)
                            ) {
                              e.next = 3;
                              break;
                            }
                            throw new Error('Please enter a valid amount!');
                          case 3:
                            if (
                              !(o = dt.PythBalance.fromString(n)).gt(
                                dt.PythBalance.zero()
                              )
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (e.next = 7), a.unlockTokensUnchecked(r, o);
                          case 7:
                            ft.ZP.success('Tokens have started unstaking!'),
                              (e.next = 11);
                            break;
                          case 10:
                            throw new Error('Amount must be greater than 0.');
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              {
                onSuccess: function () {
                  e.invalidateQueries({
                    predicate: function (e) {
                      return e.queryKey[0] !== ut.n;
                    },
                  });
                },
                onError: function (e) {
                  ft.ZP.error((0, mt.f)(e.message));
                },
              }
            );
          })();
        return (0, $e.jsxs)($e.Fragment, {
          children: [
            (0, $e.jsx)(yt, {
              isModalOpen: B,
              setIsModalOpen: R,
              title: 'Stake locked tokens',
              actionLabel: 'Stake',
              mainStakeAccount: o,
              balance: P,
              onAction: function (e) {
                return U.mutate({
                  amount: e,
                  stakeConnection: s,
                  mainStakeAccount: o,
                });
              },
            }),
            (0, $e.jsx)(yt, {
              isModalOpen: I,
              setIsModalOpen: M,
              title: 'Unstake locked tokens',
              actionLabel: 'Unstake',
              mainStakeAccount: o,
              balance: d.add(m).add(g).add(x),
              onAction: function (e) {
                return D.mutate({
                  amount: e,
                  stakeConnection: s,
                  mainStakeAccount: o,
                });
              },
            }),
            (0, $e.jsxs)(nt, {
              title: 'Locked tokens',
              isModalOpen: t,
              setIsModalOpen: n,
              children: [
                (0, $e.jsxs)('p', {
                  className: 'mb-4',
                  children: [
                    'You currently have ',
                    null === v || void 0 === v ? void 0 : v.toString(),
                    ' locked tokens.',
                    ' ',
                    !E || (null !== v && void 0 !== v && v.isZero())
                      ? null
                      : ''
                          .concat(
                            null === O || void 0 === O ? void 0 : O.toString(),
                            ' tokens\n                      will unlock on '
                          )
                          .concat(
                            null === E || void 0 === E
                              ? void 0
                              : E.toLocaleString(),
                            '.'
                          ),
                    (0, $e.jsx)('br', {}),
                    (0, $e.jsx)('br', {}),
                    (0, $e.jsx)(wt, {
                      currentVestingAccountState: r,
                      unvestedLockedPythBalance: g,
                      unvestedLockingPythBalance: x,
                      unvestedUnlockedPythBalance: P,
                      unvestedPreUnlockingPythBalance: y,
                      unvestedUnlockingPythBalance: w,
                      nextVestingAmount: O,
                      nextVestingDate: E,
                    }),
                  ],
                }),
                (0, $e.jsx)('div', {
                  className:
                    'flex flex-col items-center  space-y-4 text-center md:block md:space-x-10',
                  children: (0, $e.jsx)(St, {
                    currentVestingAccountState: r,
                    mainStakeAccount: o,
                    setIsStakeLockedModalOpen: R,
                    setIsUnstakeLockedModalOpen: M,
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function wt(e) {
        var t = e.currentVestingAccountState,
          n = e.unvestedLockedPythBalance,
          r = e.unvestedLockingPythBalance,
          a = e.unvestedUnlockedPythBalance,
          o = e.unvestedPreUnlockingPythBalance,
          s = e.unvestedUnlockingPythBalance,
          i = e.nextVestingAmount,
          l = e.nextVestingDate;
        switch (t) {
          case dt.VestingAccountState.UnvestedTokensPartiallyLocked:
            return (0, $e.jsxs)($e.Fragment, {
              children: [
                n.add(r).toString(),
                ' ',
                'locked tokens are staked in governance. ',
                (0, $e.jsx)('br', {}),
                a.toString(),
                ' locked tokens are unstaked.',
                ' ',
                (0, $e.jsx)('br', {}),
                o.add(s).toString(),
                ' ',
                'locked tokens are in cooldown period.',
                (0, $e.jsx)('br', {}),
                (0, $e.jsx)('br', {}),
                a.gte(i) &&
                  (0, $e.jsxs)($e.Fragment, {
                    children: [
                      'Your ',
                      i.toString(),
                      ' tokens scheduled to unlock on',
                      ' ',
                      null === l || void 0 === l ? void 0 : l.toLocaleString(),
                      ' will be withdrawable.',
                    ],
                  }),
                (0, $e.jsx)('br', {}),
                (0, $e.jsx)('br', {}),
              ],
            });
          case dt.VestingAccountState.UnvestedTokensFullyLockedExceptCooldown:
            return (0, $e.jsxs)($e.Fragment, {
              children: [
                n.add(r).toString(),
                ' ',
                'tokens are staked in governance. ',
                (0, $e.jsx)('br', {}),
                o.add(s).toString(),
                ' ',
                'tokens are in cooldown period.',
              ],
            });
          case dt.VestingAccountState.UnvestedTokensFullyLocked:
            return (0, $e.jsxs)($e.Fragment, {
              children: [
                'Your locked tokens are staked in the contract to participate in governance. On vest, they will become staked tokens, which require a full epoch cooldown to be unstaked. (Epochs start every Thursday at 00:00 UTC and last 7 days)',
                (0, $e.jsx)('br', {}),
                (0, $e.jsx)('br', {}),
                'If you would like to withdraw them immediately on unlock, you may choose to preliminary unstake them now. This action will cause your',
                ' ',
                i.toString(),
                ' tokens scheduled to unstake on',
                ' ',
                null === l || void 0 === l ? void 0 : l.toLocaleString(),
                ' to become withdrawable on unlock.',
                (0, $e.jsx)('br', {}),
                (0, $e.jsx)('br', {}),
                'You may also choose to unstake any number of locked token.',
              ],
            });
          case dt.VestingAccountState.UnvestedTokensFullyUnlocked:
            return (0, $e.jsxs)($e.Fragment, {
              children: [
                'Your locked tokens are not participating in governance. On unlock, they will become withdrawable tokens.',
                (0, $e.jsx)('br', {}),
                (0, $e.jsx)('br', {}),
                'Participating in governance requires you to stake your locked tokens. This means that when your tokens unlock, you will have to manually unstake them by interacting with the UI and wait for a cooldown of one full epoch before being able to withdraw them. (Epochs start every Thursday at 00:00 UTC and last 7 days).',
              ],
            });
          case dt.VestingAccountState.UnvestedTokensFullyUnlockedExceptCooldown:
            return (0, $e.jsx)($e.Fragment, {
              children:
                'All of your locked tokens are currently in cooldown period.',
            });
        }
      }
      function St(e) {
        var t = e.currentVestingAccountState,
          n = e.mainStakeAccount,
          r = e.setIsStakeLockedModalOpen,
          a = e.setIsUnstakeLockedModalOpen;
        if ('NA' === n) return (0, $e.jsx)($e.Fragment, {});
        switch (t) {
          case dt.VestingAccountState.UnvestedTokensFullyLocked:
            return (0, $e.jsxs)($e.Fragment, {
              children: [
                (0, $e.jsx)(Pt, { mainStakeAccount: n }),
                (0, $e.jsx)(Ct, {
                  currentVestingAccountState: t,
                  mainStakeAccount: n,
                  setIsUnstakeLockedModalOpen: a,
                }),
              ],
            });
          case dt.VestingAccountState.FullyVested:
            return null;
          default:
            return (0, $e.jsxs)($e.Fragment, {
              children: [
                (0, $e.jsx)(Tt, {
                  currentVestingAccountState: t,
                  mainStakeAccount: n,
                  setIsStakeLockedModalOpen: r,
                }),
                (0, $e.jsx)(Ct, {
                  currentVestingAccountState: t,
                  mainStakeAccount: n,
                  setIsUnstakeLockedModalOpen: a,
                }),
              ],
            });
        }
      }
      function Pt(e) {
        var t = e.mainStakeAccount,
          n = (0, ut.D)().data,
          r = (function () {
            var e = (0, ct.useQueryClient)();
            return (0, ct.useMutation)(
              ['preunstake-locked-mutation'],
              (function () {
                var e = (0, st.Z)(
                  lt().mark(function e(t) {
                    var n, r;
                    return lt().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t.mainStakeAccount),
                              (r = t.stakeConnection),
                              (e.next = 3),
                              null === r || void 0 === r
                                ? void 0
                                : r.unlockBeforeVestingEvent(n)
                            );
                          case 3:
                            ft.ZP.success('Tokens have started unstaking.');
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              {
                onSuccess: function () {
                  e.invalidateQueries({
                    predicate: function (e) {
                      return e.queryKey[0] !== ut.n;
                    },
                  });
                },
                onError: function (e) {
                  ft.ZP.error((0, mt.f)(e.message));
                },
              }
            );
          })();
        return (0, $e.jsx)('button', {
          type: 'button',
          className:
            'primary-btn min-w-[145px] px-8 py-3 text-base font-semibold  hover:bg-blueGemHover disabled:bg-valhalla',
          onClick: function () {
            return r.mutate({ mainStakeAccount: t, stakeConnection: n });
          },
          disabled: void 0 === t || void 0 === n,
          children: 'Preliminary unstake',
        });
      }
      function Ct(e) {
        var t = e.currentVestingAccountState,
          n = e.mainStakeAccount,
          a = e.setIsUnstakeLockedModalOpen,
          o = (0, ut.D)().data;
        return (0, $e.jsx)('button', {
          type: 'button',
          className:
            'primary-btn min-w-[145px] px-8 py-3 text-base font-semibold  hover:bg-blueGemHover disabled:bg-valhalla',
          onClick: function () {
            return a(!0);
          },
          disabled:
            t == dt.VestingAccountState.UnvestedTokensFullyUnlocked ||
            t ==
              dt.VestingAccountState
                .UnvestedTokensFullyUnlockedExceptCooldown ||
            void 0 === n ||
            void 0 === o,
          children:
            t == dt.VestingAccountState.UnvestedTokensFullyUnlocked ||
            t ==
              dt.VestingAccountState.UnvestedTokensFullyUnlockedExceptCooldown
              ? (0, $e.jsx)(r.Z, {
                  content:
                    t == dt.VestingAccountState.UnvestedTokensFullyUnlocked
                      ? "You don't have any locked tokens to unstake."
                      : 'Your tokens are in the process of being unstaked.',
                  className: 'm-4',
                  children: 'Unstake',
                })
              : 'Unstake',
        });
      }
      function Tt(e) {
        var t = e.currentVestingAccountState,
          n = e.mainStakeAccount,
          a = e.setIsStakeLockedModalOpen,
          o = (0, ut.D)().data;
        return (0, $e.jsx)('button', {
          type: 'button',
          className:
            'primary-btn min-w-[145px] px-8 py-3 text-base font-semibold  hover:bg-blueGemHover disabled:bg-valhalla',
          onClick: function () {
            return a(!0);
          },
          disabled:
            t ==
              dt.VestingAccountState.UnvestedTokensFullyLockedExceptCooldown ||
            t ==
              dt.VestingAccountState
                .UnvestedTokensFullyUnlockedExceptCooldown ||
            void 0 === n ||
            void 0 === o,
          children:
            t ==
              dt.VestingAccountState.UnvestedTokensFullyLockedExceptCooldown ||
            t ==
              dt.VestingAccountState.UnvestedTokensFullyUnlockedExceptCooldown
              ? (0, $e.jsx)(r.Z, {
                  content: 'Your tokens are in the process of being unstaked.',
                  className: 'm-4',
                  children: 'Stake',
                })
              : 'Stake',
        });
      }
      var At = n(
          '../node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js'
        ),
        Et = n('../node_modules/@solana/web3.js/lib/index.browser.esm.js'),
        Lt = n('../node_modules/@solana/spl-token/lib/index.browser.esm.js'),
        Ot = (function () {
          var e = (0, st.Z)(
            lt().mark(function e(t, n, r) {
              var a, o, s;
              return lt().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = new Lt.Token(
                            t,
                            r,
                            Lt.TOKEN_PROGRAM_ID,
                            new Et.Keypair()
                          )),
                          (e.next = 3),
                          Lt.Token.getAssociatedTokenAddress(
                            Lt.ASSOCIATED_TOKEN_PROGRAM_ID,
                            Lt.TOKEN_PROGRAM_ID,
                            r,
                            n,
                            !0
                          )
                        );
                      case 3:
                        return (
                          (o = e.sent),
                          (e.prev = 4),
                          (e.next = 7),
                          a.getAccountInfo(o)
                        );
                      case 7:
                        return (
                          (s = e.sent),
                          e.abrupt('return', new dt.PythBalance(s.amount))
                        );
                      case 11:
                        (e.prev = 11), (e.t0 = e.catch(4)), console.error(e.t0);
                      case 14:
                        return e.abrupt(
                          'return',
                          new dt.PythBalance(new ht.BN(0))
                        );
                      case 15:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 11]]
              );
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })();
      var Nt,
        Bt = n(
          '../node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js'
        ),
        Rt = n(
          '../node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletModalButton.js'
        );
      function Ft() {
        return (0, $e.jsx)(Rt.e, {
          style: {
            padding: '0 64px',
            border: 'solid',
            borderWidth: '1px',
            borderColor: 'rgb(113 66 207)',
            borderRadius: '9999px',
            whiteSpace: 'nowrap',
            background: 'rgb(113 66 207)',
            height: '45px',
          },
        });
      }
      function It(e) {
        var t = e.mainStakeAccount,
          n = (0, Bt.O)().connected,
          r = (function () {
            var e = (0, ct.useQueryClient)();
            return (0, ct.useMutation)(
              ['deposit-mutation'],
              (function () {
                var e = (0, st.Z)(
                  lt().mark(function e(t) {
                    var n, r, a, o;
                    return lt().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = t.amount),
                              (r = t.stakeConnection),
                              (a = t.mainStakeAccount),
                              n)
                            ) {
                              e.next = 3;
                              break;
                            }
                            throw new Error('Please enter a valid amount!');
                          case 3:
                            if (
                              !(o = dt.PythBalance.fromString(n)).gt(
                                dt.PythBalance.zero()
                              )
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (
                              (e.next = 7),
                              null === r || void 0 === r
                                ? void 0
                                : r.depositAndLockTokens(
                                    'NA' === a ? void 0 : a,
                                    o
                                  )
                            );
                          case 7:
                            ft.ZP.success(
                              'Deposit and locked '.concat(n, ' PYTH tokens!')
                            ),
                              (e.next = 11);
                            break;
                          case 10:
                            throw new Error('Amount must be greater than 0.');
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              {
                onSuccess: function () {
                  e.invalidateQueries({
                    predicate: function (e) {
                      return e.queryKey[0] !== ut.n;
                    },
                  });
                },
                onError: function (e) {
                  ft.ZP.error(e.message);
                },
              }
            );
          })(),
          o = (0, ut.D)(),
          s = o.data,
          i = o.isLoading,
          l = (function () {
            var e = (0, At.R)().connection,
              t = (0, We.z)(),
              n = (0, ut.D)().data;
            return (0, ct.useQuery)(
              [
                'pyth-balance',
                null === t || void 0 === t ? void 0 : t.publicKey.toString(),
              ],
              (0, st.Z)(
                lt().mark(function r() {
                  return lt().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (void 0 !== t && void 0 !== n) {
                            r.next = 2;
                            break;
                          }
                          return r.abrupt('return', void 0);
                        case 2:
                          return (
                            (r.next = 4),
                            Ot(e, t.publicKey, n.config.pythTokenMint)
                          );
                        case 4:
                          return r.abrupt('return', r.sent);
                        case 5:
                        case 'end':
                          return r.stop();
                      }
                  }, r);
                })
              ),
              {
                onError: function (e) {
                  ft.ZP.error((0, mt.f)(e.message));
                },
                enabled: void 0 !== t && void 0 !== n,
              }
            );
          })(),
          c = l.data,
          u = l.isLoading,
          d = vt(t).data,
          f =
            void 0 !== d &&
            d != dt.VestingAccountState.FullyVested &&
            d != dt.VestingAccountState.UnvestedTokensFullyLocked,
          m = (0, a.useState)(''),
          p = m[0],
          v = m[1],
          h = kt(p, c);
        return (0, $e.jsx)($e.Fragment, {
          children: (0, $e.jsxs)(bt.Ar, {
            children: [
              (0, $e.jsx)(bt.dk, {
                children:
                  'Deposit and stake PYTH. Staking tokens enables you to participate in Pyth Network governance. Newly-staked tokens become eligible to vote in governance at the beginning of the next epoch. (Epochs start every Thursday at 00:00 UTC and last 7 days).',
              }),
              n &&
                (0, $e.jsxs)($e.Fragment, {
                  children: [
                    (0, $e.jsx)(bt.YW, {
                      balance: c,
                      isBalanceLoading: i || u,
                      setAmount: v,
                    }),
                    (0, $e.jsx)(bt._Z, {
                      amount: p,
                      onAmountChange: function (e) {
                        gt(e) && v(e);
                      },
                    }),
                  ],
                }),
              (0, $e.jsx)('div', {
                className: 'flex items-center justify-center ',
                children: n
                  ? (0, $e.jsx)(bt.Kk, {
                      actionLabel: 'Stake',
                      onAction: function () {
                        return (function (e) {
                          return r.mutate({
                            amount: e,
                            mainStakeAccount: t,
                            stakeConnection: s,
                          });
                        })(p);
                      },
                      isActionDisabled: !h || void 0 === t || void 0 === s || f,
                      isActionLoading: r.isLoading,
                      tooltipContentOnDisabled: h
                        ? f
                          ? 'You are currently not enrolled in governance.'
                          : void 0
                        : 'Insufficient Balance',
                    })
                  : (0, $e.jsx)(Ft, {}),
              }),
            ],
          }),
        });
      }
      function Mt(e) {
        var t = e.mainStakeAccount,
          n = (0, Bt.O)().connected,
          r = (function () {
            var e = (0, ct.useQueryClient)();
            return (0, ct.useMutation)(
              ['unlock-mutation'],
              (function () {
                var e = (0, st.Z)(
                  lt().mark(function e(t) {
                    var n, r, a, o;
                    return lt().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = t.amount),
                              (r = t.stakeConnection),
                              (a = t.mainStakeAccount),
                              n)
                            ) {
                              e.next = 3;
                              break;
                            }
                            throw new Error('Please enter a valid amount!');
                          case 3:
                            if (
                              !(o = dt.PythBalance.fromString(n)).gt(
                                dt.PythBalance.zero()
                              )
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (e.next = 7), r.unlockTokens(a, o);
                          case 7:
                            ft.ZP.success('Unlock successful!'), (e.next = 11);
                            break;
                          case 10:
                            throw new Error('Amount must be greater than 0.');
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              {
                onSuccess: function () {
                  e.invalidateQueries({
                    predicate: function (e) {
                      return e.queryKey[0] !== ut.n;
                    },
                  });
                },
                onError: function (e) {
                  ft.ZP.error((0, mt.f)(e.message));
                },
              }
            );
          })(),
          o = (0, ut.D)(),
          s = o.data,
          i = o.isLoading,
          l = (0, ot.U)().isLoading,
          c = pt(t),
          u = c.data,
          d = c.isLoading,
          f = (null !== u && void 0 !== u ? u : {}).lockedPythBalance,
          m = vt(t).data,
          p =
            void 0 !== m &&
            m != dt.VestingAccountState.FullyVested &&
            m != dt.VestingAccountState.UnvestedTokensFullyLocked,
          v = (0, a.useState)(''),
          h = v[0],
          x = v[1],
          b = kt(h, f);
        return (0, $e.jsxs)(bt.Ar, {
          children: [
            (0, $e.jsx)(bt.dk, {
              children:
                'Unstake PYTH. Unstaking tokens enables you to withdraw them from the program after a cooldown period of one epoch once the current epoch ends. (Epochs start every Thursday at 00:00 UTC and last 7 days). Unstaked tokens cannot participate in governance.',
            }),
            n &&
              (0, $e.jsxs)($e.Fragment, {
                children: [
                  (0, $e.jsx)(bt.YW, {
                    isBalanceLoading: i || l || d,
                    balance: f,
                    setAmount: x,
                  }),
                  (0, $e.jsx)(bt._Z, {
                    amount: h,
                    onAmountChange: function (e) {
                      gt(e) && x(e);
                    },
                  }),
                ],
              }),
            (0, $e.jsx)('div', {
              className: 'flex items-center justify-center ',
              children: n
                ? (0, $e.jsx)(bt.Kk, {
                    actionLabel: 'Unstake',
                    onAction: function () {
                      return r.mutate({
                        amount: h,
                        mainStakeAccount: t,
                        stakeConnection: s,
                      });
                    },
                    isActionDisabled:
                      !b || void 0 === t || 'NA' === t || void 0 === s || p,
                    isActionLoading: r.isLoading,
                    tooltipContentOnDisabled: b
                      ? p
                        ? 'You are currently not enrolled in governance.'
                        : void 0
                      : 'Insufficient Balance',
                  })
                : (0, $e.jsx)(Ft, {}),
            }),
          ],
        });
      }
      function Ut(e) {
        var t = e.mainStakeAccount,
          n = (0, Bt.O)().connected,
          r = (function () {
            var e = (0, ct.useQueryClient)();
            return (0, ct.useMutation)(
              ['withdraw-mutation'],
              (function () {
                var e = (0, st.Z)(
                  lt().mark(function e(t) {
                    var n, r, a, o;
                    return lt().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = t.amount),
                              (r = t.stakeConnection),
                              (a = t.mainStakeAccount),
                              n)
                            ) {
                              e.next = 3;
                              break;
                            }
                            throw new Error('Please enter a valid amount!');
                          case 3:
                            if (
                              !(o = dt.PythBalance.fromString(n)).gt(
                                dt.PythBalance.zero()
                              )
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (
                              (e.next = 7),
                              null === r || void 0 === r
                                ? void 0
                                : r.withdrawTokens(a, o)
                            );
                          case 7:
                            ft.ZP.success('Withdraw successful!'),
                              (e.next = 11);
                            break;
                          case 10:
                            throw new Error('Amount must be greater than 0.');
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              {
                onSuccess: function () {
                  e.invalidateQueries({
                    predicate: function (e) {
                      return e.queryKey[0] !== ut.n;
                    },
                  });
                },
                onError: function (e) {
                  ft.ZP.error((0, mt.f)(e.message));
                },
              }
            );
          })(),
          o = (0, ut.D)(),
          s = o.data,
          i = o.isLoading,
          l = (0, ot.U)().isLoading,
          c = pt(t),
          u = c.data,
          d = c.isLoading,
          f = (null !== u && void 0 !== u ? u : {}).unlockedPythBalance,
          m = (0, a.useState)(''),
          p = m[0],
          v = m[1],
          h = kt(p, f);
        return (0, $e.jsxs)(bt.Ar, {
          children: [
            (0, $e.jsx)(bt.dk, {
              children:
                'Withdraw PYTH. Transfer tokens from the program to your wallet.',
            }),
            n &&
              (0, $e.jsxs)($e.Fragment, {
                children: [
                  (0, $e.jsx)(bt.YW, {
                    balance: f,
                    isBalanceLoading: i || l || d,
                    setAmount: v,
                  }),
                  (0, $e.jsx)(bt._Z, {
                    amount: p,
                    onAmountChange: function (e) {
                      gt(e) && v(e);
                    },
                  }),
                ],
              }),
            (0, $e.jsx)('div', {
              className: 'flex items-center justify-center ',
              children: n
                ? (0, $e.jsx)(bt.Kk, {
                    actionLabel: 'Withdraw',
                    onAction: function () {
                      r.mutate({
                        amount: p,
                        mainStakeAccount: t,
                        stakeConnection: s,
                      });
                    },
                    isActionDisabled:
                      !h || void 0 === t || 'NA' === t || void 0 === s,
                    isActionLoading: r.isLoading,
                    tooltipContentOnDisabled: h
                      ? void 0
                      : 'Insufficient Balance',
                  })
                : (0, $e.jsx)(Ft, {}),
            }),
          ],
        });
      }
      function Dt(e, t) {
        var n =
          ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return Vt(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Vt(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var o,
          s = !0,
          i = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (i = !0), (o = e);
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          },
        };
      }
      function Vt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      !(function (e) {
        (e[(e.Stake = 0)] = 'Stake'),
          (e[(e.Unstake = 1)] = 'Unstake'),
          (e[(e.Withdraw = 2)] = 'Withdraw');
      })(Nt || (Nt = {}));
      var _t = function () {
        var e,
          t,
          n,
          o = (0, a.useState)(!1),
          s = o[0],
          i = o[1],
          l = (0, a.useState)(!1),
          c = l[0],
          u = l[1],
          d = (0, a.useState)(!1),
          f = d[0],
          m = d[1],
          p = (0, a.useState)(!1),
          v = p[0],
          h = p[1],
          x = (0, a.useState)(),
          b = x[0],
          g = x[1],
          k = void 0 !== (0, We.z)(),
          y = (0, ut.D)().isLoading,
          j = (0, ot.U)(),
          w = j.data,
          S = j.isLoading,
          P = (0, a.useState)(),
          C = P[0],
          T = P[1];
        (0, a.useEffect)(
          function () {
            if (void 0 !== w)
              if (1 === w.length) T(w[0]);
              else if (w.length > 1)
                if (void 0 !== C && 'NA' !== C) {
                  var e,
                    t = Dt(w);
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var n = e.value;
                      n.address.toBase58() === C.address.toBase58() && T(n);
                    }
                  } catch (r) {
                    t.e(r);
                  } finally {
                    t.f();
                  }
                } else i(!0), g(w[0]);
              else T('NA'), g(void 0);
            else T(void 0), g(void 0);
          },
          [w]
        );
        var A = pt(C),
          E = A.data,
          L = A.isLoading,
          O = (0, a.useState)(Nt.Stake),
          N = O[0],
          B = O[1],
          I = vt(C).data,
          M = y || S || L;
        return (0, $e.jsxs)(Ke.Z, {
          children: [
            (0, $e.jsx)(qe.Z, { title: 'Staking' }),
            (0, $e.jsx)(R, {
              appear: !0,
              show: s,
              as: a.Fragment,
              children: (0, $e.jsxs)(F.V, {
                as: 'div',
                className: 'relative z-10',
                onClose: function () {},
                children: [
                  (0, $e.jsx)(R.Child, {
                    as: a.Fragment,
                    enter: 'ease-out duration-300',
                    enterFrom: 'opacity-0',
                    enterTo: 'opacity-100',
                    leave: 'ease-in duration-200',
                    leaveFrom: 'opacity-100',
                    leaveTo: 'opacity-0',
                    children: (0, $e.jsx)('div', {
                      className: 'fixed inset-0 bg-black bg-opacity-50',
                    }),
                  }),
                  (0, $e.jsx)('div', {
                    className: 'fixed inset-0 overflow-y-auto',
                    children: (0, $e.jsx)('div', {
                      className:
                        'flex min-h-full items-center justify-center p-4 text-center',
                      children: (0, $e.jsx)(R.Child, {
                        as: a.Fragment,
                        enter: 'ease-out duration-300',
                        enterFrom: 'opacity-0 scale-95',
                        enterTo: 'opacity-100 scale-100',
                        leave: 'ease-in duration-200',
                        leaveFrom: 'opacity-100 scale-100',
                        leaveTo: 'opacity-0 scale-95',
                        children: (0, $e.jsxs)(F.V.Panel, {
                          className:
                            'w-full max-w-md transform rounded-2xl border-2 border-purpleHeart bg-jaguar p-10 text-left align-middle shadow-xl transition-all',
                          children: [
                            (0, $e.jsx)(F.V.Title, {
                              as: 'h3',
                              className:
                                'text-md font-inter font-bold leading-6 ',
                              children: 'Select stake account',
                            }),
                            (0, $e.jsx)('div', {
                              className: 'mt-3',
                              children: (0, $e.jsx)('p', {
                                className: ' text-sm ',
                                children:
                                  'Please choose the stake account you wish to connect to.',
                              }),
                            }),
                            (0, $e.jsx)(je, {
                              value: b,
                              onChange: g,
                              children: (0, $e.jsxs)('div', {
                                className: 'relative mt-1',
                                children: [
                                  (0, $e.jsxs)(je.Button, {
                                    className:
                                      'focus-visible:border-indigo-500 focus-visible:ring-white focus-visible:ring-offset-orange-300 relative my-4 w-full cursor-default rounded-lg bg-cherryPie py-2 pl-3 pr-10 text-left  shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm',
                                    children: [
                                      (0, $e.jsx)('span', {
                                        className: 'block truncate',
                                        children:
                                          (null === b || void 0 === b
                                            ? void 0
                                            : b.address
                                                .toBase58()
                                                .slice(0, 8)) +
                                          '..' +
                                          (null === b || void 0 === b
                                            ? void 0
                                            : b.address.toBase58().slice(-8)),
                                      }),
                                      (0, $e.jsx)('span', {
                                        className:
                                          'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2',
                                        children: (0, $e.jsx)(Ye, {
                                          className: 'text-gray-400 h-5 w-5',
                                          'aria-hidden': 'true',
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, $e.jsx)(R, {
                                    as: a.Fragment,
                                    leave: 'transition ease-in duration-100',
                                    leaveFrom: 'opacity-100',
                                    leaveTo: 'opacity-0',
                                    children: (0, $e.jsx)(je.Options, {
                                      className:
                                        'absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-cherryPie py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
                                      children:
                                        null === w || void 0 === w
                                          ? void 0
                                          : w.map(function (e, t) {
                                              return (0, $e.jsx)(
                                                je.Option,
                                                {
                                                  className: function (e) {
                                                    var t = e.active;
                                                    return 'relative cursor-default select-none py-2 pl-10 pr-4 '.concat(
                                                      t ? 'bg-pythPurple ' : ''
                                                    );
                                                  },
                                                  value: e,
                                                  children: function (t) {
                                                    var n = t.selected;
                                                    return (0, $e.jsxs)(
                                                      $e.Fragment,
                                                      {
                                                        children: [
                                                          (0, $e.jsx)('span', {
                                                            className:
                                                              'block truncate '.concat(
                                                                n
                                                                  ? 'font-medium'
                                                                  : 'font-normal'
                                                              ),
                                                            children:
                                                              e.address
                                                                .toBase58()
                                                                .slice(0, 8) +
                                                              '..' +
                                                              e.address
                                                                .toBase58()
                                                                .slice(-8),
                                                          }),
                                                          n
                                                            ? (0, $e.jsx)(
                                                                'span',
                                                                {
                                                                  className:
                                                                    'absolute inset-y-0 left-0 flex items-center pl-3 ',
                                                                  children: (0,
                                                                  $e.jsx)(He, {
                                                                    className:
                                                                      'h-5 w-5',
                                                                    'aria-hidden':
                                                                      'true',
                                                                  }),
                                                                }
                                                              )
                                                            : null,
                                                        ],
                                                      }
                                                    );
                                                  },
                                                },
                                                t
                                              );
                                            }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, $e.jsx)('div', {
                              className: 'mt-4',
                              children: (0, $e.jsx)('button', {
                                type: 'button',
                                className:
                                  'primary-btn px-8 py-3 text-base font-semibold  hover:bg-blueGemHover',
                                onClick: function () {
                                  T(b), i(!1);
                                },
                                children: 'Connect',
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, $e.jsx)(rt, {
              setIsStakedModalOpen: u,
              isStakedModalOpen: c,
              stakedPythBalance:
                null === E || void 0 === E ? void 0 : E.lockedPythBalance,
              stakingPythBalance:
                null === E || void 0 === E ? void 0 : E.lockingPythBalance,
            }),
            (0, $e.jsx)(at, {
              isUnstakedModalOpen: f,
              setIsUnstakedModalOpen: m,
              unstakedPythBalance:
                null === E || void 0 === E ? void 0 : E.unlockedPythBalance,
              unstakingPythBalance:
                null === E || void 0 === E ? void 0 : E.unlockingPythBalance,
            }),
            (0, $e.jsx)(jt, {
              isLockedModalOpen: v,
              setIsLockedModalOpen: h,
              mainStakeAccount: C,
              currentVestingAccountState: I,
            }),
            (0, $e.jsx)('div', {
              className: 'mb-10 px-8  md:mb-20  ',
              children: (0, $e.jsxs)('div', {
                className: 'mx-auto mt-2 w-full max-w-[796px]',
                children: [
                  (0, $e.jsx)('div', {
                    className: ' sm:mt-12 ',
                    children: (0, $e.jsxs)('div', {
                      className: 'grid grid-cols-3 gap-2.5',
                      children: [
                        (0, $e.jsx)('button', {
                          className: Qe(
                            'bg-darkGray text-center transition-colors  md:text-left',
                            k && E ? 'hover:bg-darkGray2' : ''
                          ),
                          onClick: function () {
                            return u(!0);
                          },
                          disabled: !k || !E,
                          children: (0, $e.jsxs)('div', {
                            className:
                              'flex flex-col items-center py-6 sm:px-6 md:flex-row md:items-start',
                            children: [
                              (0, $e.jsx)('div', {
                                className: 'mb-2  md:mb-0 md:mr-6',
                                children: (0, $e.jsx)(Je, {}),
                              }),
                              (0, $e.jsxs)('div', {
                                className:
                                  'flex flex-col justify-between py-2 text-sm',
                                children: [
                                  (0, $e.jsx)('div', {
                                    className: 'mb-1 font-bold ',
                                    children: 'Staked ',
                                  }),
                                  M
                                    ? (0, $e.jsx)('div', {
                                        className:
                                          'mx-auto h-5 w-14 animate-pulse rounded-lg bg-darkGray4 md:m-0',
                                      })
                                    : void 0 === E
                                    ? (0, $e.jsx)('div', { children: '-' })
                                    : (0, $e.jsxs)('div', {
                                        className: '',
                                        children: [
                                          null === (e = E.lockedPythBalance) ||
                                          void 0 === e
                                            ? void 0
                                            : e.toString(),
                                          ' ',
                                          E.lockingPythBalance &&
                                          !E.lockingPythBalance.isZero()
                                            ? (0, $e.jsx)('div', {
                                                children: (0, $e.jsx)(r.Z, {
                                                  content:
                                                    'These tokens will be staked from the beginning of the next epoch.',
                                                  children: (0, $e.jsxs)(
                                                    'div',
                                                    {
                                                      className: '',
                                                      children: [
                                                        '(+',
                                                        E.lockingPythBalance.toString(),
                                                        ')',
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              })
                                            : null,
                                        ],
                                      }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, $e.jsx)('button', {
                          className: Qe(
                            'bg-darkGray text-center transition-colors  md:text-left',
                            k && E ? 'hover:bg-darkGray2' : ''
                          ),
                          onClick: function () {
                            return m(!0);
                          },
                          disabled: !k || !E,
                          children: (0, $e.jsxs)('div', {
                            className:
                              'flex flex-col items-center py-6 sm:px-6 md:flex-row md:items-start',
                            children: [
                              (0, $e.jsx)('div', {
                                className: 'mb-2  md:mb-0 md:mr-6',
                                children: (0, $e.jsx)(Xe, {}),
                              }),
                              (0, $e.jsxs)('div', {
                                className:
                                  'flex flex-col justify-between py-2 text-sm',
                                children: [
                                  (0, $e.jsx)('div', {
                                    className: 'mb-1 font-bold',
                                    children: 'Unstaked ',
                                  }),
                                  M
                                    ? (0, $e.jsx)('div', {
                                        className:
                                          'mx-auto h-5 w-14 animate-pulse rounded-lg bg-darkGray4 md:m-0',
                                      })
                                    : void 0 === E
                                    ? (0, $e.jsx)('div', { children: '-' })
                                    : (0, $e.jsxs)('div', {
                                        className: '',
                                        children: [
                                          null ===
                                            (t = E.unlockedPythBalance) ||
                                          void 0 === t
                                            ? void 0
                                            : t.toString(),
                                          ' ',
                                          E.unlockingPythBalance &&
                                          !E.unlockingPythBalance.isZero()
                                            ? (0, $e.jsx)('div', {
                                                children: (0, $e.jsx)(r.Z, {
                                                  content:
                                                    'These tokens have to go through a cool-down period for 2 epochs before they can be withdrawn.',
                                                  children: (0, $e.jsxs)(
                                                    'div',
                                                    {
                                                      className: '',
                                                      children: [
                                                        '(+',
                                                        E.unlockingPythBalance.toString(),
                                                        ')',
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              })
                                            : null,
                                        ],
                                      }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, $e.jsx)('button', {
                          className: Qe(
                            'bg-darkGray text-center transition-colors  md:text-left',
                            k && E ? 'hover:bg-darkGray2' : ''
                          ),
                          onClick: function () {
                            return h(!0);
                          },
                          disabled: !k || !E,
                          children: (0, $e.jsxs)('div', {
                            className:
                              'flex flex-col items-center py-6 sm:px-6 md:flex-row md:items-start',
                            children: [
                              (0, $e.jsx)('div', {
                                className: 'mb-2  md:mb-0 md:mr-6',
                                children: (0, $e.jsx)(et, {}),
                              }),
                              (0, $e.jsxs)('div', {
                                className:
                                  'flex flex-col justify-between py-2 text-sm',
                                children: [
                                  (0, $e.jsx)('div', {
                                    className: 'mb-1 font-bold',
                                    children: 'Locked',
                                  }),
                                  M
                                    ? (0, $e.jsx)('div', {
                                        className:
                                          'mx-auto h-5 w-14 animate-pulse rounded-lg bg-darkGray4 md:m-0',
                                      })
                                    : void 0 === E
                                    ? (0, $e.jsx)('div', { children: '-' })
                                    : (0, $e.jsx)('div', {
                                        className: '',
                                        children:
                                          null ===
                                            (n = E.unvestedTotalPythBalance) ||
                                          void 0 === n
                                            ? void 0
                                            : n.toString(),
                                      }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, $e.jsx)('div', {
                    className: 'mt-2 bg-darkGray px-4 sm:px-14 md:px-5',
                    children: (0, $e.jsx)('div', {
                      className: 'py-8',
                      children: (0, $e.jsxs)(Ge.Group, {
                        onChange: function (e) {
                          B(e);
                        },
                        children: [
                          (0, $e.jsx)(Ge.List, {
                            className:
                              'mx-auto grid max-w-[526px] grid-cols-3 gap-1 text-center sm:gap-2.5',
                            children: Object.values(Nt)
                              .slice(3)
                              .map(function (e) {
                                return (0, $e.jsx)(
                                  Ge,
                                  {
                                    className: function (e) {
                                      var t = e.selected;
                                      return Qe(
                                        'bg-darkGray2 py-3  text-xs  font-semibold uppercase  outline-none  transition-colors md:text-base',
                                        t
                                          ? 'bg-darkGray3'
                                          : ' hover:bg-darkGray3'
                                      );
                                    },
                                    children: Nt[e],
                                  },
                                  e
                                );
                              }),
                          }),
                          (0, $e.jsx)(Ge.Panels, {
                            className: 'mt-4 sm:mt-11',
                            children: Object.keys(Nt)
                              .slice(3)
                              .map(function (e, t) {
                                return (0,
                                $e.jsx)(Ge.Panel, { children: N === Nt.Stake ? (0, $e.jsx)(It, { mainStakeAccount: C }) : N === Nt.Unstake ? (0, $e.jsx)(Mt, { mainStakeAccount: C }) : (0, $e.jsx)(Ut, { mainStakeAccount: C }) }, t);
                              }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    '../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=private-next-pages%2Findex.tsx&page=%2F!':
      function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          '/',
          function () {
            return n('./pages/index.tsx');
          },
        ]);
      },
    '../node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletModalButton.js':
      function (e, t, n) {
        'use strict';
        n.d(t, {
          e: function () {
            return s;
          },
        });
        var r = n('../node_modules/react/index.js'),
          a = n(
            '../node_modules/@solana/wallet-adapter-react-ui/lib/esm/Button.js'
          ),
          o = n(
            '../node_modules/@solana/wallet-adapter-react-ui/lib/esm/useWalletModal.js'
          );
        const s = ({ children: e = 'Select Wallet', onClick: t, ...n }) => {
          const { visible: s, setVisible: i } = (0, o.h)(),
            l = (0, r.useCallback)(
              (e) => {
                t && t(e), e.defaultPrevented || i(!s);
              },
              [t, i, s]
            );
          return r.createElement(
            a.z,
            { ...n, className: 'wallet-adapter-button-trigger', onClick: l },
            e
          );
        };
      },
  },
  function (e) {
    e.O(
      0,
      [337, 467, 482, 976, 30, 837, 490, 534, 881, 99, 774, 888, 179],
      function () {
        return (
          (t =
            '../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=private-next-pages%2Findex.tsx&page=%2F!'),
          e((e.s = t))
        );
        var t;
      }
    );
    var t = e.O();
    _N_E = t;
  },
]);
