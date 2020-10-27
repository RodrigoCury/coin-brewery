const ndAtenuacao = document.getElementById("atenuacao-disp");
const atenuacao = document.getElementById("atenuacao");


ndAtenuacao.addEventListener("change", () => {
    if (ndAtenuacao.checked) {
        atenuacao.classList.add("none")
        atenuacao.value = "N/D"
    } else {
        atenuacao.classList.remove("none")
        atenuacao.value = "0"
    }
});