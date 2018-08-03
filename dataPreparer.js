// create an array with nodes
/*
let aplicacoes = new vis.DataSet(options);
let dependencias = new vis.DataSet(options);

let appRef = database.child("aplicacoes");
let depRef = database.child("dependencies");

appRef.on("value", function(snap) {
  let app = snap.val();
  aplicacoes.add(app);
});

depRef.on("child_added", snap => {
    let dep = snap.val();
    dependencias.add(dep);
});
//*/
let aplicacoes = new vis.DataSet(options);
let dependencias = new vis.DataSet(options);

axios.get('https://dependencies-manager.firebaseio.com/aplicacoes.json').then(resp => {
    console.log(resp.data);
    var data = resp.data;
    aplicacoes.add(data);
});

axios.get('https://dependencies-manager.firebaseio.com/dependencies.json').then(resp => {
    console.log(resp.data);
    var data = resp.data;
    dependencias.add(data);
});
//*/
//*/
/*
let aplicacoes = new vis.DataSet([
    { id: "ACID", label: 'ACID\n1.0.6' },
    { id: "APPGUIMENU", label: 'APPGUIMENU' },
    { id: "APPWEBFACES", label: 'APPWEBFACES' },
    { id: "EAAtendimento", label: 'EAAtendimento-EJB' },
    { id: "EABatch", label: 'EABatch' },
    { id: "FCCargoAtendRMI", label: 'FCCargoAtendRMI' },
    { id: "ICFBMODRMI", label: 'FCCargoAtendRMI' },
    { id: "ICFBusiness", label: 'ICFBusiness' },
    { id: "ICFBusinessRMIServer", label: 'ICFBusinessRMIServer' },
    { id: "IPOSBMOD003", label: 'IPOSBMOD003' },
    { id: "InterfaceOracle", label: 'InterfaceOracle' },
    { id: "InterfaceXML", label: 'InterfaceXML' },
    { id: "POSBrowserTP", label: 'POSBrowserTP' },
    { id: "POSBrowserWeb", label: 'POSBrowserWeb' },
    { id: "RMIAutorizationBCT", label: 'RMIAutorizationBCT\n001012654' },
    { id: "ServerPefAntt", label: 'ServerPefAntt' },
    { id: "Util", label: 'Util' },
    { id: "UtilANTT", label: 'UtilANTT' },
    { id: "UtilBoleto", label: 'UtilBoleto' },
    { id: "WSAntt", label: 'WSAntt' },
    { id: "WSFCUNIKCAD", label: 'WSFCUNIKCAD' },
    { id: "WSFretePortal", label: 'WSFretePortal' },
    { id: "WSFrete_Unik", label: 'WSFrete_Unik' },
    { id: "WebExtratoTransporte", label: 'WebExtratoTransporte' },
    { id: "WebLoginPef", label: 'WebLoginPef' },
    { id: "WebPef", label: 'WebPef' },
    { id: "WebProxyClient", label: 'WebProxyClient' },
    { id: "FretePortalCli", label: 'FretePortal-CLI' },
    { id: "ArarasCli", label: 'Araras-CLI' },
]);

// create an array with edges

let dependencias = new vis.DataSet([
  { from: "APPGUIMENU", to: "EAAtendimento", label: "" },
  { from: "APPGUIMENU", to: "FCCargoAtendRMI", label: "" },
  { from: "APPGUIMENU", to: "Util", label: "" },
  { from: "APPGUIMENU", to: "UtilANTT", label: "" },
  { from: "APPGUIMENU", to: "WSFCUNIKCAD", label: "" },
  { from: "APPWEBFACES", to: "FretePortalCli", label: "" },
  { from: "APPWEBFACES", to: "ArarasCli", label: "" },
  { from: "EABatch", to: "IPOSBMOD003", label: "" },
  { from: "EAAtendimento", to: "WSFCUNIKCAD", label: "" },
  { from: "EAAtendimento", to: "Util", label: "" },
  { from: "FCCargoAtendRMI", to: "EAAtendimento", label: "" },
  { from: "FCCargoAtendRMI", to: "InterfaceOracle", label: "" },
  { from: "FCCargoAtendRMI", to: "Util", label: "" },
  { from: "FCCargoAtendRMI", to: "WSFCUNIKCAD", label: "" },
  { from: "ICFBMODRMI", to: "ICFBusinessRMIServer", label: "" },
  { from: "ICFBMODRMI", to: "Util", label: "" },
  { from: "ICFBMODRMI", to: "UtilANTT", label: "" },
  { from: "ICFBMODRMI", to: "UtilBoleto", label: "" },
  { from: "ICFBMODRMI", to: "WSAntt", label: "" },
  { from: "ICFBusiness", to: "ACID", label: "" },
  { from: "ICFBusiness", to: "WSFCUNIKCAD", label: "" },
  { from: "ICFBusiness", to: "RMIAutorizationBCT", label: "" },
  { from: "ICFBusinessRMIServer", to: "WSFCUNIKCAD", label: "" },
  { from: "ICFBusinessRMIServer", to: "WebProxyClient", label: "" },
  { from: "IPOSBMOD003", to: "RMIAutorizationBCT", label: "" },
  { from: "InterfaceOracle", to: "WebProxyClient", label: "" },
  { from: "InterfaceOracle", to: "Util", label: "" },
  { from: "InterfaceXML", to: "Util", label: "" },
  { from: "POSBrowserTP", to: "InterfaceOracle", label: "" },
  { from: "POSBrowserTP", to: "RMIAutorizationBCT", label: "" },
  { from: "POSBrowserTP", to: "Util", label: "" },
  { from: "POSBrowserTP", to: "WSFCUNIKCAD", label: "" },
  { from: "POSBrowserTP", to: "WebProxyClient", label: "" },
  { from: "POSBrowserWeb", to: "InterfaceOracle", label: "" },
  { from: "POSBrowserWeb", to: "RMIAutorizationBCT", label: "" },
  { from: "POSBrowserWeb", to: "Util", label: "" },
  { from: "POSBrowserWeb", to: "WSFCUNIKCAD", label: "" },
  { from: "POSBrowserWeb", to: "WebProxyClient", label: "" },
  { from: "RMIAutorizationBCT", to: "Util", label: "" },
  { from: "RMIAutorizationBCT", to: "WSFCUNIKCAD]", label: "" },
  { from: "RMIAutorizationBCT", to: "InterfaceOracle", label: "" },
  { from: "RMIAutorizationBCT", to: "WebProxyClient", label: "" },
  { from: "ServerPefAntt", to: "UtilANTT", label: "" },
  { from: "ServerPefAntt", to: "WSAntt", label: "" },
  { from: "WSAntt", to: "UtilANTT", label: "" },
  { from: "WSFCUNIKCAD", to: "WebProxyClient", label: "" },
  { from: "WSFretePortal", to: "ACID", label: "" },
  { from: "WSFretePortal", to: "EAAtendimento", label: "" },
  { from: "WSFretePortal", to: "ICFBusiness", label: "" },
  { from: "WSFretePortal", to: "UtilANTT", label: "" },
  { from: "WSFretePortal", to: "UtilBoleto", label: "" },
  { from: "WSFretePortal", to: "WSAntt", label: "" },
  { from: "WSFretePortal", to: "WSFCUNIKCAD", label: "" },
  { from: "WSFretePortal", to: "WebProxyClient", label: "" },
  { from: "WSFrete_Unik", to: "ACID", label: "" },
  { from: "WSFrete_Unik", to: "ICFBusiness", label: "" },
  { from: "WSFrete_Unik", to: "RMIAutorizationBCT", label: "" },
  { from: "WSFrete_Unik", to: "UtilANTT", label: "" },
  { from: "WSFrete_Unik", to: "WSAntt", label: "" },
  { from: "WSFrete_Unik", to: "WSFCUNIKCAD", label: "" },
  { from: "WebExtratoTransporte", to: "Util", label: "" },
  { from: "WebExtratoTransporte", to: "WSAntt", label: "" },
  { from: "WebLoginPef", to: "Util", label: "" },
  { from: "WebPef", to: "Util", label: "" },
  { from: "WebPef", to: "UtilANTT", label: "" },
  { from: "WebPef", to: "WSAntt", label: "" }
]);
//*/
// provide the data in the vis format
var data = {
  nodes: aplicacoes,
  edges: dependencias
};
