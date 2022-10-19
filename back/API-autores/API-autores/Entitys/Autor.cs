using System.ComponentModel.DataAnnotations;

namespace API_autores.Entitys
{
    public class Autor
    {
        //Definimos clave primaria
        [Key]
        public int codigo { get; set;}
        //Definimos valores no nulos
        [Required]
        //Definimos el tamaño del campo
        [StringLength(maximumLength:100, ErrorMessage ="Se tiene que ingresar un nombre")]
        public string nombre { get; set;}
        [Required]
        public bool estado { get; set;}
    }
}
