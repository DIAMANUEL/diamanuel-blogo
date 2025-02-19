window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        palette: {
            popup: { background: "#000" },
            button: { background: "#f1d600" }
        },
        theme: "classic",
        position: "bottom",
        type: "opt-in",
        content: {
            message: "Este sitio usa cookies para mejorar tu experiencia.",
            dismiss: "Aceptar",
            deny: "Rechazar",
            link: "Más info",
            href: "/politica-de-cookies/"
        },
        onInitialise: function (status) {
            if (status === cookieconsent.status.allow) {
                cargarHeapAnalytics();
            }
        },
        onStatusChange: function (status) {
            if (status === cookieconsent.status.allow) {
                cargarHeapAnalytics();
            }
        }
    });
});

function cargarHeapAnalytics() {
    window.heap = window.heap || [], heap.load = function (e, t) {
        window.heap.appid = e, window.heap.config = t = t || {};
        var r = document.createElement("script");
        r.type = "text/javascript", r.async = !0,
            r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js";
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(r, a);
        for (var n = function (e) { return function () { heap.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }, p = ["addEventProperties", "identify", "track"], o = 0; o < p.length; o++)
            heap[p[o]] = n(p[o])
    };

    heap.load("2753226682"); // 🔥 Reemplaza con tu App ID
}
