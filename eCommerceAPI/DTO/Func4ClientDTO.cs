public class Func4ClientDTO
{
    public int Id { get; set; }
    public string Nom { get; set; } = null!;
    public List<Func4ProduitDTO> Produits { get; set; } = new();

    public Func4ClientDTO() { }
}
