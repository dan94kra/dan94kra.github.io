let url_params = {
    "autostart": "1",
    "camera": "0",
    "ui_color": "129494",
    "ui_infos": "0",
    "ui_watermark_link": "0",
    "ui_watermark": "0"
};

let url_search_params = new URLSearchParams(url_params).toString();

let url_iframe = document.getElementById("sketchfab-iframe");
let url_new = url_iframe.getAttribute("src") + "?" + url_search_params;

url_iframe.setAttribute("src", url_new);