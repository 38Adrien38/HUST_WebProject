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
            Nom = "Delaye",
            Prenom = "Adrien",
            Adresse = "12 clos de chapicolle, 38300 Montbonnot",
            Mail = "ajn.delaye@gmail.com",
            Password = "azerty"
        };
        Client c2 = new()
        {
            Nom = "Govaere",
            Prenom = "Camille",
            Adresse = "4 rue de la paix, Paris",
            Mail = "camille.govaere@gmail.com",
            Password = "123Camilletravaille!"
        };
        Client c3 = new()
        {
            Nom = "Portal ",
            Prenom = "Lancelot",
            Adresse = "1 rue talence, 33400 Talence",
            Mail = "lancelot.portal@gmail.com",
            Password = "azerty"
        };
        context.AddRange(c1, c2, c3);

        Produit p1 = new()
        {
            Nom = "wooden table",
            Prix = 75,
            Categorie = "Furnitures",
            Image = "images/table.jpg",
            Description = "Solid oak wooden dining table"
        };

        Produit p2 = new()
        {
            Nom = "basketball",
            Prix = 25,
            Categorie = "Sport",
            Image = "images/basketball.jpg",
            Description = "Official size and weight basketball"
        };

        Produit p3 = new()
        {
            Nom = "running shoes",
            Prix = 60,
            Categorie = "Clothes",
            Image = "images/running_shoes.jpg",
            Description = "Lightweight running shoes with breathable mesh"
        };

        Produit p4 = new()
        {
            Nom = "smartphone",
            Prix = 499,
            Categorie = "Mobiles",
            Image = "images/smartphone.jpg",
            Description = "Latest model smartphone with 128GB storage"
        };

        Produit p5 = new()
        {
            Nom = "gaming laptop",
            Prix = 1200,
            Categorie = "Computer",
            Image = "images/gaming_laptop.jpg",
            Description = "High-performance gaming laptop with RTX graphics"
        };

        Produit p6 = new()
        {
            Nom = "face moisturizer",
            Prix = 15,
            Categorie = "Beauty",
            Image = "images/moisturizer.jpg",
            Description = "Hydrating face moisturizer for daily use"
        };

        Produit p7 = new()
        {
            Nom = "office chair",
            Prix = 90,
            Categorie = "Furnitures",
            Image = "images/office_chair.jpg",
            Description = "Ergonomic office chair with lumbar support"
        };

        Produit p8 = new()
        {
            Nom = "yoga mat",
            Prix = 20,
            Categorie = "Sport",
            Image = "images/yoga_mat.jpg",
            Description = "Non-slip yoga mat with carrying strap"
        };

        Produit p9 = new()
        {
            Nom = "denim jacket",
            Prix = 45,
            Categorie = "Clothes",
            Image = "images/denim_jacket.jpg",
            Description = "Stylish blue denim jacket"
        };

        Produit p10 = new()
        {
            Nom = "wireless earbuds",
            Prix = 70,
            Categorie = "Mobiles",
            Image = "images/earbuds.jpg",
            Description = "Noise-canceling wireless earbuds with case"
        };

        Produit p11 = new()
        {
            Nom = "mechanical keyboard",
            Prix = 85,
            Categorie = "Computer",
            Image = "images/keyboard.jpg",
            Description = "RGB mechanical keyboard with blue switches"
        };

        Produit p12 = new()
        {
            Nom = "lipstick set",
            Prix = 25,
            Categorie = "Beauty",
            Image = "images/lipstick.jpg",
            Description = "Matte lipstick set with 6 shades"
        };

        // Furnitures
        Produit p13 = new()
        {
            Nom = "wooden chair",
            Prix = 45,
            Categorie = "Furnitures",
            Image = "images/wooden_chair.jpg",
            Description = "Comfortable wooden chair with padded seat"
        };

        Produit p14 = new()
        {
            Nom = "bookshelf",
            Prix = 80,
            Categorie = "Furnitures",
            Image = "images/bookshelf.jpg",
            Description = "Stylish bookshelf with adjustable shelves"
        };

        // Sport
        Produit p15 = new()
        {
            Nom = "soccer ball",
            Prix = 20,
            Categorie = "Sport",
            Image = "images/soccer_ball.jpg",
            Description = "Official size soccer ball for professional play"
        };

        Produit p16 = new()
        {
            Nom = "dumbbells",
            Prix = 40,
            Categorie = "Sport",
            Image = "images/dumbbells.jpg",
            Description = "Pair of adjustable dumbbells for home workouts"
        };

        // Clothes
        Produit p17 = new()
        {
            Nom = "sweater",
            Prix = 50,
            Categorie = "Clothes",
            Image = "images/sweater.jpg",
            Description = "Warm and cozy sweater made of cotton blend"
        };

        Produit p18 = new()
        {
            Nom = "jeans",
            Prix = 35,
            Categorie = "Clothes",
            Image = "images/jeans.jpg",
            Description = "Slim-fit denim jeans in dark blue wash"
        };

        // Mobiles
        Produit p19 = new()
        {
            Nom = "tablet",
            Prix = 300,
            Categorie = "Mobiles",
            Image = "images/tablet.jpg",
            Description = "10-inch tablet with 64GB storage and high-resolution display"
        };

        Produit p20 = new()
        {
            Nom = "smartwatch",
            Prix = 120,
            Categorie = "Mobiles",
            Image = "images/smartwatch.jpg",
            Description = "Smartwatch with fitness tracking and heart rate monitor"
        };

        // Computer
        Produit p21 = new()
        {
            Nom = "laptop stand",
            Prix = 30,
            Categorie = "Computer",
            Image = "images/laptop_stand.jpg",
            Description = "Adjustable laptop stand for better ergonomics"
        };

        Produit p22 = new()
        {
            Nom = "external hard drive",
            Prix = 100,
            Categorie = "Computer",
            Image = "images/external_hard_drive.jpg",
            Description = "1TB external hard drive for data storage and backup"
        };

        // Beauty
        Produit p23 = new()
        {
            Nom = "shampoo",
            Prix = 12,
            Categorie = "Beauty",
            Image = "images/shampoo.jpg",
            Description = "Moisturizing shampoo for dry and damaged hair"
        };

        Produit p24 = new()
        {
            Nom = "eyeliner",
            Prix = 18,
            Categorie = "Beauty",
            Image = "images/eyeliner.jpg",
            Description = "Long-lasting liquid eyeliner for defined eyes"
        };



        context.AddRange(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12,
            p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24);

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
