public class Client
{
    public int Id { get; set; }
    public string Nom { get; set; } = null!;
    public string Prenom { get; set; } = null!;
    public string Mail { get; set; } = null!;
    public string Password { get; set; } = null!;
    public string Adresse { get; set; } = null!;
    public List<Commande> Commandes { get; set; } = new();
    public Client() { }

    public Client(ClientDTO clientDTO)
    {
        this.Id = clientDTO.Id;
        this.Nom = clientDTO.Nom;
        this.Prenom = clientDTO.Prenom;
        this.Mail = clientDTO.Mail;
        this.Password = clientDTO.Password;
        this.Adresse = clientDTO.Adresse;
    }
}