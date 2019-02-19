using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProvaRodrigoPedidoItens.Models
{
    public class Item
    {
        public int Id { get; set; }
        public Pedido Pedido { get; set; }
        public int Quantidade { get; set; }
        public string Produto { get; set; }
        public Decimal ValorUnitario { get; set; }
    }
}