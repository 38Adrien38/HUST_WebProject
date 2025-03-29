public class ProduitDTO
{
    public int Id { get; set; }
    public string Nom { get; set; } = null!;
    public string Categorie { get; set; } = null!;
    public string Image { get; set; } = null!;
    public string Description { get; set; } = null!;
    public int Prix { get; set; }



    public ProduitDTO() { }

    public ProduitDTO(Produit produit)
    {
        this.Id = produit.Id;
        this.Nom = produit.Nom;
        this.Prix = produit.Prix;
        this.Categorie = produit.Categorie;
        this.Image = produit.Image;
        this.Description = produit.Description;

    }
}