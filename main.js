// main.js
(function() {
    var gtmId = 'GTM-PRUEBA'; // <-- Cambiar por el ID real

    // 1. INYECTAR EL SCRIPT EN EL HEAD
    var gtmScript = document.createElement('script');
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');`;
    document.head.prepend(gtmScript); // Lo pone al principio del head

    // 2. INYECTAR EL NOSCRIPT EN EL BODY
    // Esperamos a que el body exista para no dar error
    window.addEventListener('DOMContentLoaded', function() {
        var gtmNoScript = document.createElement('noscript');
        gtmNoScript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
        document.body.prepend(gtmNoScript); // Lo pone justo al abrir el body
    });
})();
