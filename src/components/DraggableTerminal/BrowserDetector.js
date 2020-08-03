export default function detectBrowser() {
    try {
      // Opera 8.0+
      var isOpera = (!!window.opr ) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
      // Firefox 1.0+
      var isFirefox = typeof InstallTrigger !== 'undefined';
      // Safari 3.0+ "[object HTMLElementConstructor]" 
      var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined'));
      // Internet Explorer 6-11
      var isIE = /*@cc_on!@*/false || !!document.documentMode;
      // Edge 20+
      var isEdge = !isIE && !!window.StyleMedia;
      // Chrome 1 - 79
      var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
      // Edge (based on chromium) detection
      var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") !== -1);
      // Blink engine detection
      var isBlink = (isChrome && isOpera) && !!window.CSS;
  
      if (isBlink) return "Blink";
      else if (isEdgeChromium) return "Microsoft Edge Chromium";
      else if (isChrome) return "Chrome";
      else if (isEdge) return "Microsoft Edge";
      else if (isIE) return "Internet Explorer (Please upgrade to supported browser)";
      else if (isSafari) return "Safari";
      else if (isFirefox) return "Firefox";
      else if (isOpera) return "Opera";
      else return "Unrecognized Browser";
    }
    catch (e) {}
    return "Unrecognized Browser";
  }