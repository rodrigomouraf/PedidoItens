function SalvarPedido() {
    debugger;
    var data = $("#Data").val();
    var cliente = $("#Cliente").val();
    var valor = $("#Valor").val();

    
    var token = $('input[name="__RequestVerificationToken"]').val();
    var tokenadr = $('form[action="/Pedido/Create"] input[name="__RequestVerificationToken"]').val();
    var headers = {};
    var headersadr = {};
    headers['__RequestVerificationToken'] = token;
    headersadr['__RequestVerificationToken'] = tokenadr;
   

    var url = "/Pedido/Create";
    $.ajax({
        url: url
        , type: "POST"
        , dataType: "json"
        , headers: headersadr
        , data: { Id: 0, Data: data, Cliente: cliente, Valor: valor, __RequestVerificationToken: token }
        , success: function(data) {
            if (data.Resultado > 0) {
                ListarItens(data.Resultado)
            }
        }
    });
}

function ListarItens(idPedido) {
    var url = "/Itens/ListarItens";

    $.ajax({
        url: url
        , type: "GET"
        , data: { Id: idPedido}
        , dataType: "html"
        , success: function (data) {
            var divItens = $("#divItens");
            divItens.empty();
            divItens.show();
            divItens.html(data);
        }
    });
}

function SalvarItens() {

    var quantidade = $("#Quantidade").val();
    var produto = $("#Produto").val();
    var valorunitario = $("#ValorUnitario").val();
    var idpedido = $("#idPedido").val();

    var url = "/Itens/SalvarItens";

    $.ajax({
        url: url
        , type: "GET"
        , dataType: "html"
        , data: { Quantidade: quantidade, Produto: produto, ValorUnitario: valorunitario, idPedido: idpedido}
        , success: function (data) {
            if (data.Resultado > 0) {
                ListarItens(idPedido)
            }
        }
    });
}
