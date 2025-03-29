public class Commande
{
    public int Id { get; set; }
    public int ClientId { get; set; }
    public int ProduitId { get; set; }
    public int Quantite { get; set; }
    public DateTime DateCommande { get; set; }
    public Client Client { get; set; } = null!;
    public Produit Produit { get; set; } = null!;
    public Commande() { }

    public Commande(CommandeDTO commandeDTO)
    {
        this.Id = commandeDTO.Id;
        this.ClientId = commandeDTO.ClientId;
        this.ProduitId = commandeDTO.ProduitId;
        this.Quantite = commandeDTO.Quantite;
        this.DateCommande = commandeDTO.DateCommande;
    }
}