public class ClientDTO
{
    public int Id { get; set; }
    public string Nom { get; set; } = null!;
    public string Prenom { get; set; } = null!;
    public string Adresse { get; set; } = null!;
    public string Mail { get; set; } = null!;
    public string Password { get; set; } = null!;

    public ClientDTO() { }

    public ClientDTO(Client client)
    {
        this.Id = client.Id;
        this.Nom = client.Nom;
        this.Prenom = client.Prenom;
        this.Adresse = client.Adresse;
        this.Mail = client.Mail;
        this.Password = client.Password;
    }
}
