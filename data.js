let colorTomcat = {
  "background": "#FF9800",
  "border": "#616161",
  "hover": {
    "background": "#F57C00",
    "border": "#424242"
  },
  "highlight": {
    "background": "#E65100",
    "border": "#212121"
  }
};
let colorSocketRmi = {
  "background": "#f44336",
  "border": "#616161",
  "hover": {
    "background": "#d32f2f",
    "border": "#424242"
  },
  "highlight": {
    "background": "#b71c1c",
    "border": "#212121"
  }       
};
let colorGlassfish = {
  "background": "#03A9F4",
  "border": "#616161",
  "hover": {
    "background": "#0288D1",
    "border": "#424242"
  },
  "highlight": {
    "background": "#01579B",
    "border": "#212121"
  }
};
let colorDependencies = {
  "background": "#607D8B",
  "border": "#616161",
  "hover": {
    "background": "#455A64",
    "border": "#424242"
  },
  "highlight": {
    "background": "#263238",
    "border": "#212121"
  }
};
let colorDesktop = {
  "background": "#8BC34A",
  "border": "#616161",
  "hover": {
    "background": "#689F38",
    "border": "#424242"
  },
  "highlight": {
    "background": "#33691E",
    "border": "#212121"
  }
};
let colorUndefined = {
  "background": "#BDBDBD",
  "border": "#616161",
  "hover": {
    "background": "#9E9E9E",
    "border": "#424242"
  },
  "highlight": {
    "background": "#757575",
    "border": "#212121"
  }
};

let aplicacoes = [
  { "id": "ACID", "label": "ACID\n1.0.6", "color": colorDependencies },
  { "id": "APPGUIMENU", "label": "APPGUIMENU", "color": colorDesktop },
  { "id": "APPWEBFACES", "label": "APPWEBFACES", "color": colorTomcat },
  { "id": "EAAtendimento", "label": "EAAtendimento-EJB", "color": colorGlassfish },
  { "id": "EABatch", "label": "EABatch", "color": colorGlassfish },
  { "id": "FCCargoAtendRMI", "label": "FCCargoAtendRMI\n0010203", "color": colorSocketRmi },
  { "id": "ICFBMODRMI", "label": "ICFBMODRMI\n0010502", "color": colorSocketRmi },
  { "id": "ICFBusiness", "label": "ICFBusiness\n0011004", "color": colorSocketRmi },
  { "id": "ICFBusinessRMIServer", "label": "ICFBusinessRMIServer\n0010602", "color": colorSocketRmi },
  { "id": "IPOSBMOD003", "label": "IPOSBMOD003", "color": colorSocketRmi },
  { "id": "InterfaceOracle", "label": "InterfaceOracle\n0010301", "color": colorDependencies },
  { "id": "InterfaceXML", "label": "InterfaceXML\n1.0.0", "color": colorDependencies },
  { "id": "POSBrowserTP", "label": "POSBrowserTP", "color": colorGlassfish },
  { "id": "POSBrowserWeb", "label": "POSBrowserWeb", "color": colorGlassfish },
  { "id": "RMIAutorizationBCT", "label": "RMIAutorizationBCT\n001012654", "color": colorSocketRmi },
  { "id": "ServerPefAntt", "label": "ServerPefAntt", "color": colorSocketRmi },
  { "id": "Util", "label": "Util\n2.1.0", "color": colorDependencies },
  { "id": "UtilANTT", "label": "UtilANTT", "color": colorDependencies },
  { "id": "UtilBoleto", "label": "UtilBoleto\n0010103", "color": colorDependencies },
  { "id": "WSAntt", "label": "WSAntt\n0011003", "color": colorDependencies },
  { "id": "WSFCUNIKCAD", "label": "WSFCUNIKCAD\n0010103", "color": colorDependencies },
  { "id": "WSFretePortal", "label": "WSFretePortal\n0011666", "color": colorTomcat },
  { "id": "WSFrete_Unik", "label": "WSFrete_Unik\n0010804", "color": colorTomcat },
  { "id": "WebExtratoTransporte", "label": "WebExtratoTransporte", "color": colorGlassfish },
  { "id": "WebLoginPef", "label": "WebLoginPef", "color": colorGlassfish },
  { "id": "WebPef", "label": "WebPef", "color": colorGlassfish },
  { "id": "WebProxyClient", "label": "WebProxyClient", "color": colorUndefined },
  { "id": "FretePortalCli", "label": "FretePortal-CLI", "color": colorUndefined },
  { "id": "ArarasCli", "label": "Araras-CLI", "color": colorUndefined },
  { "id": "WSPedagio", "label": "WSPedagio", "color": colorTomcat },
  { "id": "Valepedagio", "label": "Valepedagio", "color": colorDependencies },
  { "id": "WSPedagioPortal", "label": "WSPedagioPortal", "color": colorTomcat },
];
let relacionamentos = [
  { "from": "APPGUIMENU", "to": "EAAtendimento", "label": "" },
  { "from": "APPGUIMENU", "to": "FCCargoAtendRMI", "label": "" },
  { "from": "APPGUIMENU", "to": "Util", "label": "" },
  { "from": "APPGUIMENU", "to": "UtilANTT", "label": "" },
  { "from": "APPGUIMENU", "to": "WSFCUNIKCAD", "label": "" },
  { "from": "APPWEBFACES", "to": "FretePortalCli", "label": "" },
  { "from": "APPWEBFACES", "to": "ArarasCli", "label": "" },
  { "from": "EABatch", "to": "IPOSBMOD003", "label": "" },
  { "from": "EAAtendimento", "to": "WSFCUNIKCAD", "label": "" },
  { "from": "EAAtendimento", "to": "Util", "label": "" },
  { "from": "FCCargoAtendRMI", "to": "EAAtendimento", "label": "" },
  { "from": "FCCargoAtendRMI", "to": "InterfaceOracle", "label": "" },
  { "from": "FCCargoAtendRMI", "to": "Util", "label": "" },
  { "from": "FCCargoAtendRMI", "to": "WSFCUNIKCAD", "label": "" },
  { "from": "ICFBMODRMI", "to": "ICFBusinessRMIServer", "label": "" },
  { "from": "ICFBMODRMI", "to": "Util", "label": "" },
  { "from": "ICFBMODRMI", "to": "UtilANTT", "label": "" },
  { "from": "ICFBMODRMI", "to": "UtilBoleto", "label": "" },
  { "from": "ICFBMODRMI", "to": "WSAntt", "label": "" },
  { "from": "ICFBusiness", "to": "ACID", "label": "" },
  { "from": "ICFBusiness", "to": "WSFCUNIKCAD", "label": "" },
  { "from": "ICFBusiness", "to": "RMIAutorizationBCT", "label": "" },
  { "from": "ICFBusinessRMIServer", "to": "WSFCUNIKCAD", "label": "" },
  { "from": "ICFBusinessRMIServer", "to": "WebProxyClient", "label": "" },
  { "from": "IPOSBMOD003", "to": "RMIAutorizationBCT", "label": "" },
  { "from": "InterfaceOracle", "to": "WebProxyClient", "label": "" },
  { "from": "InterfaceOracle", "to": "Util", "label": "" },
  { "from": "InterfaceXML", "to": "Util", "label": "" },
  { "from": "POSBrowserTP", "to": "InterfaceOracle", "label": "" },
  { "from": "POSBrowserTP", "to": "RMIAutorizationBCT", "label": "" },
  { "from": "POSBrowserTP", "to": "Util", "label": "" },
  { "from": "POSBrowserTP", "to": "WSFCUNIKCAD", "label": "" },
  { "from": "POSBrowserTP", "to": "WebProxyClient", "label": "" },
  { "from": "POSBrowserWeb", "to": "InterfaceOracle", "label": "" },
  { "from": "POSBrowserWeb", "to": "RMIAutorizationBCT", "label": "" },
  { "from": "POSBrowserWeb", "to": "Util", "label": "" },
  { "from": "POSBrowserWeb", "to": "WSFCUNIKCAD", "label": "" },
  { "from": "POSBrowserWeb", "to": "WebProxyClient", "label": "" },
  { "from": "RMIAutorizationBCT", "to": "Util", "label": "" },
  { "from": "RMIAutorizationBCT", "to": "WSFCUNIKCAD]", "label": "" },
  { "from": "RMIAutorizationBCT", "to": "InterfaceOracle", "label": "" },
  { "from": "RMIAutorizationBCT", "to": "WebProxyClient", "label": "" },
  { "from": "ServerPefAntt", "to": "UtilANTT", "label": "" },
  { "from": "ServerPefAntt", "to": "WSAntt", "label": "" },
  { "from": "WSAntt", "to": "UtilANTT", "label": "" },
  { "from": "WSFCUNIKCAD", "to": "WebProxyClient", "label": "" },
  { "from": "WSFretePortal", "to": "ACID", "label": "" },
  { "from": "WSFretePortal", "to": "EAAtendimento", "label": "" },
  { "from": "WSFretePortal", "to": "ICFBusiness", "label": "" },
  { "from": "WSFretePortal", "to": "UtilANTT", "label": "" },
  { "from": "WSFretePortal", "to": "UtilBoleto", "label": "" },
  { "from": "WSFretePortal", "to": "WSAntt", "label": "" },
  { "from": "WSFretePortal", "to": "WSFCUNIKCAD", "label": "" },
  { "from": "WSFretePortal", "to": "WebProxyClient", "label": "" },
  { "from": "WSFrete_Unik", "to": "ACID", "label": "" },
  { "from": "WSFrete_Unik", "to": "ICFBusiness", "label": "" },
  { "from": "WSFrete_Unik", "to": "RMIAutorizationBCT", "label": "" },
  { "from": "WSFrete_Unik", "to": "UtilANTT", "label": "" },
  { "from": "WSFrete_Unik", "to": "WSAntt", "label": "" },
  { "from": "WSFrete_Unik", "to": "WSFCUNIKCAD", "label": "" },
  { "from": "WebExtratoTransporte", "to": "Util", "label": "" },
  { "from": "WebExtratoTransporte", "to": "WSAntt", "label": "" },
  { "from": "WebLoginPef", "to": "Util", "label": "" },
  { "from": "WebPef", "to": "Util", "label": "" },
  { "from": "WebPef", "to": "UtilANTT", "label": "" },
  { "from": "WebPef", "to": "WSAntt", "label": "" },
  { "from": "WSPedagio", "to": "Valepedagio",  "label": ""}
];