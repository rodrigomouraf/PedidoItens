using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;
using ProvaRodrigoPedidoItens.Models;

namespace ProvaRodrigoPedidoItens.Contexto
{
    public class DBContext: DbContext
    {
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<Item> Itens{ get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

    }
}