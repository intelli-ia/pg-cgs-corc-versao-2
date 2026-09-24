import Script from "next/script";

// Script de rastreamento Hubla — conteúdo mantido exatamente como fornecido.
// Propaga os parâmetros UTM da URL para todos os <a> que apontam para hub.la.
// Ele roda uma única vez: todo link de checkout precisa estar no DOM desde o
// primeiro render (inclusive o da barra fixa, que só é ocultada visualmente).
const HUBLA_SCRIPT = `var _prefixDomains=["https://pay.hub.la", "https://invoice.hub.la", "https://app.hub.la", "https://hub.la"];function _getUtmParams(){var a="",r=window.top.location.href,e=new URL(r);if(null!==e){var t=e.searchParams.get("utm_source"),n=e.searchParams.get("utm_medium"),m=e.searchParams.get("utm_campaign"),o=e.searchParams.get("utm_term"),s=e.searchParams.get("utm_content");-1!==r.indexOf("?")&&(a="&sck="+t+"|"+n+"|"+m+"|"+o+"|"+s,console.log("[hubla][utms]",a))}return a}!function(){var a=new URLSearchParams(window.location.search);a.toString()&&document.querySelectorAll("a").forEach((function(r){for(var e=0;e<_prefixDomains.length;e++)-1!==r.href.indexOf(_prefixDomains[e])&&(-1===r.href.indexOf("?")?r.href+="?"+a.toString()+_getUtmParams():r.href+="&"+a.toString()+_getUtmParams())}))}();`;

export function HublaTracking() {
  return (
    <Script
      id="hubla-utm"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: HUBLA_SCRIPT }}
    />
  );
}
