var banners = ["Do lixo ao luxo!", "Reaproveitar é aproveitar!"];
var banner = 0;

function trocarBanner(){
    banner = (banner + 1) % 2;
    document.querySelector("h2#mensagem").textContent = banners[banner];
}

setInterval(trocarBanner, 1000);