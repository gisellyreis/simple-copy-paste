function showChange() {
    let change_div = document.getElementById("change_div");
    change_div.hidden = !change_div.hidden;
}

function showTroco() {
    let troco = document.getElementById("troco");
    troco.hidden = !troco.hidden;
}

function colarTexto() {    
    let name = document.getElementById("name");
    let order = document.getElementById("order");
    let address = document.getElementById("address");
    let price = document.getElementById("price");
    let link = document.getElementById("link");

    let pago = document.getElementById("pago");
    let dinheiro = document.getElementById("dinheiro");
    let maquina = document.getElementById("maquina");

    let formaPagamento = "";
    let change = 0.0;
    if (pago.checked) {
        formaPagamento = "JÁ PAGO, NÃO COBRAR DO CLIENTE";
    }
    else if (dinheiro.checked) {
        let sim = document.getElementById("sim");
        if(sim.checked){
            change = document.getElementById("change");
            formaPagamento = `DINHEIRO , LEVAR TROCO DE R$ ${change.value}`;
        }
        else {
            formaPagamento = "DINHEIRO , SEM TROCO";
        }
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