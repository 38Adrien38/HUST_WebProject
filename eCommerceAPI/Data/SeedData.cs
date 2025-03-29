public static class SeedData
{
    public static void Init()
    {
        using var context = new ECommerceContext();
        // Look for existing content
        if (context.Clients.Any())
        {
            return; // DB already filled
        }

        Client c1 = new()
        {
            Nom = "martin",
            Prenom = "patrick",
            Adresse = "13 chemin à bordeaux",
            Mail = "aaaa@gmail.com",
            Password = "azerty"
        };
        Client c2 = new()
        {
            Nom = "bernard",
            Prenom = "tibo",
            Adresse = "4 impasse des champs",
            Mail = "bbbb@gmail.com",
            Password = "123456"
        };
        Client c3 = new()
        {
            Nom = "bon",
            Prenom = "jean",
            Adresse = "1 rue talence",
            Mail = "cccc@gmail.com",
            Password = "nbvcx"
        };
        context.AddRange(c1, c2, c3);

        Produit p1 = new()
        {
            Nom = "table",
            Prix = 50,
            Categorie = "meuble",
            Image = "lien_image",
            Description = "table en bois"
        };
        Produit p2 = new()
        {
            Nom = "ordinateur",
            Prix = 590,
            Categorie = "informatique",
            Image = "lien_image",
            Description = "ordinateur portable"
        };
        Produit p3 = new()
        {
            Nom = "bureau",
            Prix = 100,
            Categorie = "meuble",
            Image = "lien_image",
            Description = "bureau en bois"
        };
        context.AddRange(p1, p2, p3);

        Commande cm1 = new()
        {
            Quantite = 3,
            DateCommande = DateTime.Parse("2019-03-11"),
            Client = c2,
            Produit = p1,
        };
        Commande cm2 = new()
        {
            Quantite = 1,
            DateCommande = DateTime.Parse("2019-09-01"),
            Client = c1,
            Produit = p3,
        };
        Commande cm3 = new()
        {
            Quantite = 1,
            DateCommande = DateTime.Parse("2019-09-9"),
            Client = c3,
            Produit = p2,
        };
        context.AddRange(cm1, cm2, cm3);

        context.SaveChanges();
    }
}
