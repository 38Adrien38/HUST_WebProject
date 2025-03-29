public class Produit
{
    public int Id { get; set; }
    public string Nom { get; set; } = null!;
    public string Categorie { get; set; } = null!;
    public string Image { get; set; } = null!;
    public string Description { get; set; } = null!;
    public int Prix { get; set; }
    public List<Commande> Commandes { get; set; } = new();

    public Produit() { }

    public Produit(ProduitDTO produitDTO)
    {
        this.Id = produitDTO.Id;
        this.Nom = produitDTO.Nom;
        this.Prix = produitDTO.Prix;
        this.Categorie = produitDTO.Categorie;
        this.Image = produitDTO.Image;
        this.Description = produitDTO.Description;

    }
}