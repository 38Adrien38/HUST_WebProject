public class CommandeDTO
{
    public int Id { get; set; }
    public int ClientId { get; set; }
    public int ProduitId { get; set; }
    public int Quantite { get; set; }
    public DateTime DateCommande { get; set; }

    public CommandeDTO() { }

    public CommandeDTO(Commande commande)
    {
        this.Id = commande.Id;
        this.ClientId = commande.ClientId;
        this.Quantite = commande.Quantite;
        this.ProduitId = commande.ProduitId;
        this.DateCommande = commande.DateCommande;
    }
}
