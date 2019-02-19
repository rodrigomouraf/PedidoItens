using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Web.Mvc;
using ProvaRodrigoPedidoItens.Contexto;
using ProvaRodrigoPedidoItens.Models;

namespace ProvaRodrigoPedidoItens.Controllers
{
    public class ItensController : Controller
    {
        DBContext db = new DBContext();

        public ActionResult ListarItens(int id)
        {
            var lista = db.Itens.Where(m => m.Pedido.Id == id);
            ViewBag.Pedido = id;
            return PartialView(lista);
        }
        /*
        public ActionResult SalvarItens(int quantidade, string produto, int valorunitario, int idPedido)
        {
            var item = new Item()
            {

            }

        }*/
    }
}