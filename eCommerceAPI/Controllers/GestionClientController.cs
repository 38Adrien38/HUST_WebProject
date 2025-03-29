using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/gestion/client")]
public class GestionClientController : ControllerBase
{
    private readonly ECommerceContext _context;

    public GestionClientController(ECommerceContext context)
    {
        _context = context;
    }

    // GET: api/client
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Func4ClientDTO>>> GetClients()
    {
        // Étape 1 : Récupérer les données nécessaires en une seule requête SQL
        var commandes = await _context
            .Commandes.Include(c => c.Client)
            .Include(c => c.Produit)
            .ToListAsync();

        // Étape 2 : Traiter les données en mémoire
        var clients = commandes
            .GroupBy(c => c.Client)
            .Select(clientGroup => new Func4ClientDTO
            {
                Id = clientGroup.Key.Id,
                Nom = clientGroup.Key.Nom,
                Produits = clientGroup
                    .GroupBy(c => new
                    {
                        c.Produit.Id,
                        c.Produit.Nom,
                        c.Produit.Prix,
                    })
                    .Select(produitGroup => new Func4ProduitDTO
                    {
                        Id = produitGroup.Key.Id,
                        Nom = produitGroup.Key.Nom,
                        Total = produitGroup.Sum(c => c.Quantite * produitGroup.Key.Prix),
                    })
                    .ToList(),
            })
            .ToList();

        return Ok(clients);
    }
}
