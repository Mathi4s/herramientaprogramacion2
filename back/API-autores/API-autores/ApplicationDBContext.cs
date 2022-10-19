using API_autores.Entitys;
using Microsoft.EntityFrameworkCore;

namespace API_autores
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions options) : base(options)
        {
        }

        //Configurando las tablas de las bases de datos
        public DbSet<Autor> Autor { get; set; }
    }
}
