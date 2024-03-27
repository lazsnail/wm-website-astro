import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_CTereJSx.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/about.DfFRsJhn.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/about.DfFRsJhn.css"}],"routeData":{"route":"/clients","isIndex":false,"type":"page","pattern":"^\\/clients\\/?$","segments":[[{"content":"clients","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/clients.astro","pathname":"/clients","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/about.DfFRsJhn.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/about.DfFRsJhn.css"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/about.DfFRsJhn.css"}],"routeData":{"route":"/success","isIndex":false,"type":"page","pattern":"^\\/success\\/?$","segments":[[{"content":"success","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/success.astro","pathname":"/success","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.uo3kT7Hm.js"}],"styles":[{"type":"external","src":"/_astro/about.DfFRsJhn.css"},{"type":"inline","content":".gif[data-astro-cid-j7pv25f6]{width:100%}.hide[data-astro-cid-j7pv25f6]{transform:scale(.75)}.width-100[data-astro-cid-j7pv25f6]{transform:scale(1)}.width-90[data-astro-cid-j7pv25f6]{transform:scale(.95)}.width-80[data-astro-cid-j7pv25f6]{transform:scale(.9)}.width-70[data-astro-cid-j7pv25f6]{transform:scale(.85)}.width-60[data-astro-cid-j7pv25f6]{transform:scale(.8)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/code/wm-website-astro/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["C:/code/wm-website-astro/src/pages/clients.astro",{"propagation":"in-tree","containsHead":true}],["C:/code/wm-website-astro/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["C:/code/wm-website-astro/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/code/wm-website-astro/src/pages/services.astro",{"propagation":"in-tree","containsHead":true}],["C:/code/wm-website-astro/src/pages/success.astro",{"propagation":"in-tree","containsHead":true}],["C:/code/wm-website-astro/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/clients@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/services@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/success@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/clients.astro":"chunks/pages/clients_15j0Jupd.mjs","/src/pages/contact.astro":"chunks/pages/contact_CHxSls_v.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_C6h45xXR.mjs","/src/pages/index.astro":"chunks/pages/index_DaUYBQKF.mjs","/src/pages/services.astro":"chunks/pages/services_BWaSUFPt.mjs","/src/pages/success.astro":"chunks/pages/success_B6teTRMo.mjs","\u0000@astrojs-manifest":"manifest_Bhr33vDk.mjs","C:/code/wm-website-astro/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CkT9ELBf.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_CXzpcwfS.mjs","\u0000@astro-page:src/pages/clients@_@astro":"chunks/clients_BAE3IZtw.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_ClZPmE4m.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_emn6WQNU.mjs","\u0000@astro-page:src/pages/success@_@astro":"chunks/success_Dp7cwBXC.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_V76IGcNq.mjs","C:/code/wm-website-astro/src/components/NavFlyout":"_astro/NavFlyout.dpHYKRr9.js","C:/code/wm-website-astro/src/components/NavHamburger":"_astro/NavHamburger.DFdBXZ6n.js","C:/code/wm-website-astro/src/components/NavLogo":"_astro/NavLogo.uAfamBUM.js","/astro/hoisted.js?q=0":"_astro/hoisted.uo3kT7Hm.js","/astro/hoisted.js?q=1":"_astro/hoisted.CaREk9lS.js","@astrojs/react/client.js":"_astro/client.DbokQZWz.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/connor_profile.DJzkchem.jpg","/_astro/bongs_logo.FHupgyV2.png","/_astro/jericho_logo.C34-Kjnw.png","/_astro/larry_profile.CaET0GWJ.jpg","/_astro/wm_logo_white.D2cnjAVP.png","/_astro/wm_logo_black.WcZTnh8R.png","/_astro/dino.DBaIEE1a.gif","/_astro/cursors.BYuZJPoG.gif","/_astro/about.DfFRsJhn.css","/bongs-website.png","/bongs_logo.png","/connor_profile.jpg","/cursors.gif","/dino.gif","/favicon-modified.png","/favicon.ico","/jericho-website.png","/jericho_logo.png","/larry_profile.jpg","/next.svg","/vercel.svg","/wm_logo_black.png","/wm_logo_white.png","/_astro/client.DbokQZWz.js","/_astro/hoisted.CaREk9lS.js","/_astro/hoisted.uo3kT7Hm.js","/_astro/index.D0_IWN4f.js","/_astro/index.NEDEFKed.js","/_astro/NavFlyout.dpHYKRr9.js","/_astro/NavHamburger.DFdBXZ6n.js","/_astro/NavLogo.uAfamBUM.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
