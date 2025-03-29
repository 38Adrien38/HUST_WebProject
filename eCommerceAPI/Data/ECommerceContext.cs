using Microsoft.EntityFrameworkCore;
public class ECommerceContext : DbContext
{
    public DbSet<Client> Clients { get; set; } = null!;
    public DbSet<Commande> Commandes { get; set; } = null!;
    public DbSet<Produit> Produits { get; set; } = null!;
    public string DbPath { get; private set; }


    public ECommerceContext()
    {
        DbPath = "EFeCommerceAPI.db"; // Path to SQLite database file
    }
    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlite($"Data Source={DbPath}");
    }
}
