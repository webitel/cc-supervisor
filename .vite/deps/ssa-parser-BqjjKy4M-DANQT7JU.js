import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  E,
  V
} from "./chunk-SJBVCNRV.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/dist/ssa-parser-BqjjKy4M.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var F = Object.defineProperty;
var A = (c, t, s) => t in c ? F(c, t, { enumerable: true, configurable: true, writable: true, value: s }) : c[t] = s;
var u = (c, t, s) => A(c, typeof t != "symbol" ? t + "" : t, s);
var S = /^Format:[\s\t]*/;
var O = /^Style:[\s\t]*/;
var _ = /^Dialogue:[\s\t]*/;
var d = /[\s\t]*,[\s\t]*/;
var w = /\{[^}]+\}/g;
var I = /\\N/g;
var x = /^\[(.*)[\s\t]?Styles\]$/;
var k = /^\[(.*)[\s\t]?Events\]$/;
var $ = class {
  constructor() {
    u(this, "h");
    u(this, "O", 0);
    u(this, "c", null);
    u(this, "l", []);
    u(this, "m", []);
    u(this, "N", null);
    u(this, "f");
    u(this, "P", {});
  }
  async init(t) {
    this.h = t, t.errors && (this.f = (await import("./errors-DCJKAXTz-676J52DR.js")).ParseErrorBuilder);
  }
  parse(t, s) {
    var e, a;
    if (this.O)
      switch (this.O) {
        case 1:
          if (t === "")
            this.O = 0;
          else if (O.test(t))
            if (this.N) {
              const i = t.replace(O, "").split(d);
              this.S(i);
            } else
              this.g((e = this.f) == null ? void 0 : e.T("Style", s));
          else S.test(t) ? this.N = t.replace(S, "").split(d) : k.test(t) && (this.N = null, this.O = 2);
          break;
        case 2:
          if (t === "")
            this.Q();
          else if (_.test(t))
            if (this.Q(), this.N) {
              const i = t.replace(_, "").split(d), r = this.U(i, s);
              r && (this.c = r);
            } else
              this.g((a = this.f) == null ? void 0 : a.T("Dialogue", s));
          else this.c ? this.c.text += `
` + t.replace(w, "").replace(I, `
`) : S.test(t) ? this.N = t.replace(S, "").split(d) : x.test(t) ? (this.N = null, this.O = 1) : k.test(t) && (this.N = null);
      }
    else t === "" || (x.test(t) ? (this.N = null, this.O = 1) : k.test(t) && (this.N = null, this.O = 2));
  }
  done() {
    return {
      metadata: {},
      cues: this.l,
      regions: [],
      errors: this.m
    };
  }
  Q() {
    var t, s;
    this.c && (this.l.push(this.c), (s = (t = this.h).onCue) == null || s.call(t, this.c), this.c = null);
  }
  S(t) {
    let s = "Default", e = {}, a, i = "center", r = "bottom", f, n = 1.2, o, p, h = 3, b = [];
    for (let g = 0; g < this.N.length; g++) {
      const M = this.N[g], l = t[g];
      switch (M) {
        case "Name":
          s = l;
          break;
        case "Fontname":
          e["font-family"] = l;
          break;
        case "Fontsize":
          e["font-size"] = `calc(${l} / var(--overlay-height))`;
          break;
        case "PrimaryColour":
          const E2 = N(l);
          E2 && (e["--cue-color"] = E2);
          break;
        case "BorderStyle":
          h = parseInt(l, 10);
          break;
        case "BackColour":
          p = N(l);
          break;
        case "OutlineColour":
          const R = N(l);
          R && (o = R);
          break;
        case "Bold":
          parseInt(l) && (e["font-weight"] = "bold");
          break;
        case "Italic":
          parseInt(l) && (e["font-style"] = "italic");
          break;
        case "Underline":
          parseInt(l) && (e["text-decoration"] = "underline");
          break;
        case "StrikeOut":
          parseInt(l) && (e["text-decoration"] = "line-through");
          break;
        case "Spacing":
          e["letter-spacing"] = l + "px";
          break;
        case "AlphaLevel":
          e.opacity = parseFloat(l);
          break;
        case "ScaleX":
          b.push(`scaleX(${parseFloat(l) / 100})`);
          break;
        case "ScaleY":
          b.push(`scaleY(${parseFloat(l) / 100})`);
          break;
        case "Angle":
          b.push(`rotate(${l}deg)`);
          break;
        case "Shadow":
          n = parseInt(l, 10) * 1.2;
          break;
        case "MarginL":
          e["--cue-width"] = "auto", e["--cue-left"] = parseFloat(l) + "px";
          break;
        case "MarginR":
          e["--cue-width"] = "auto", e["--cue-right"] = parseFloat(l) + "px";
          break;
        case "MarginV":
          f = parseFloat(l);
          break;
        case "Outline":
          a = parseInt(l, 10);
          break;
        case "Alignment":
          const m = parseInt(l, 10);
          switch (m >= 4 && (r = m >= 7 ? "top" : "center"), m % 3) {
            case 1:
              i = "start";
              break;
            case 2:
              i = "center";
              break;
            case 3:
              i = "end";
              break;
          }
      }
    }
    if (e.R = r, e["--cue-white-space"] = "normal", e["--cue-line-height"] = "normal", e["--cue-text-align"] = i, r === "center" ? (e["--cue-top"] = "50%", b.push("translateY(-50%)")) : e[`--cue-${r}`] = (f || 0) + "px", h === 1 && (e["--cue-padding-y"] = "0"), (h === 1 || p) && (e["--cue-bg-color"] = h === 1 ? "none" : p), h === 3 && o && (e["--cue-outline"] = `${a}px solid ${o}`), h === 1 && typeof a == "number") {
      const g = p ?? "#000";
      e["--cue-text-shadow"] = [
        o && T(a * 1.2, n * 1.2, o),
        o ? T(a * (a / 2), n * (a / 2), g) : T(a, n, g)
      ].filter(Boolean).join(", ");
    }
    b.length && (e["--cue-transform"] = b.join(" ")), this.P[s] = e;
  }
  U(t, s) {
    const e = this.V(t), a = this.q(e.Start, e.End, s);
    if (!a)
      return;
    const i = new V(a[0], a[1], ""), r = { ...this.P[e.Style] || {} }, f = e.Name ? `<v ${e.Name}>` : "", n = r.R, o = e.MarginL && parseFloat(e.MarginL), p = e.MarginR && parseFloat(e.MarginR), h = e.MarginV && parseFloat(e.MarginV);
    return o && (r["--cue-width"] = "auto", r["--cue-left"] = o + "px"), p && (r["--cue-width"] = "auto", r["--cue-right"] = p + "px"), h && n !== "center" && (r[`--cue-${n}`] = h + "px"), i.text = f + t.slice(this.N.length - 1).join(", ").replace(w, "").replace(I, `
`), delete r.R, Object.keys(r).length && (i.style = r), i;
  }
  V(t) {
    const s = {};
    for (let e = 0; e < this.N.length; e++)
      s[this.N[e]] = t[e];
    return s;
  }
  q(t, s, e) {
    var r, f, n;
    const a = E(t), i = E(s);
    if (a !== null && i !== null && i > a)
      return [a, i];
    a === null && this.g((r = this.f) == null ? void 0 : r.s(t, e)), i === null && this.g((f = this.f) == null ? void 0 : f.t(s, e)), a != null && i !== null && i > a && this.g((n = this.f) == null ? void 0 : n.u(a, i, e));
  }
  g(t) {
    var s, e;
    if (t) {
      if (this.m.push(t), this.h.strict)
        throw this.h.cancel(), t;
      (e = (s = this.h).onError) == null || e.call(s, t);
    }
  }
};
function N(c) {
  const t = parseInt(c.replace("&H", ""), 16);
  if (t >= 0) {
    const e = (t >> 24 & 255 ^ 255) / 255, a = t >> 16 & 255, i = t >> 8 & 255;
    return "rgba(" + [t & 255, i, a, e].join(",") + ")";
  }
  return null;
}
function T(c, t, s) {
  const e = Math.ceil(2 * Math.PI * c);
  let a = "";
  for (let i = 0; i < e; i++) {
    const r = 2 * Math.PI * i / e;
    a += c * Math.cos(r) + "px " + t * Math.sin(r) + "px 0 " + s + (i == e - 1 ? "" : ",");
  }
  return a;
}
function v() {
  return new $();
}
export {
  $ as SSAParser,
  v as default
};
//# sourceMappingURL=ssa-parser-BqjjKy4M-DANQT7JU.js.map
