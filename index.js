function colarTexto() {    
    let name = document.getElementById("name");
    let order = document.getElementById("order");
    let address = document.getElementById("address");
    let price = document.getElementById("price");
    let link = document.getElementById("link");

    let pago = document.getElementById("pago");
    let maquina = document.getElementById("maquina");

    let formaPagamento = "";
    if (pago.checked) {
        formaPagamento = "JÁ PAGO, NÃO COBRAR DO CLIENTE";
    }
    else {
        formaPagamento = "LEVAR MAQUINETA";
    }

    let resume = document.getElementById("resume");
    resume.hidden = !resume.hidden;

    let text = document.getElementById("text");
    //console.log(`${name.value} ${order.value}`);

    text.value = `Pedido: #${order.value}\nNome: ${name.value}\nEndereço: ${address.value}\n\nCobrar: R$${price.value}\nForma de pagamento: ${formaPagamento}\n\nMaps: ${link.value}`;
}

function copiarTexto() {
    let copiedText = document.getElementById("text");
    copiedText.select();
    copiedText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    console.log(copiedText.value);
}

function exec() {
    colarTexto();
    setTimeout(() => {
        copiarTexto();
    }, 10000)
}