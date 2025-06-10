var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Swagger setup
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Database context
builder.Services.AddDbContext<ECommerceContext>();

// CORS setup
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:3000",
                            "https://localhost:3000") // <-- Your React dev server
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddHttpsRedirection(options =>
{
    options.HttpsPort = 7149;
});

var app = builder.Build();

// Seed database
SeedData.Init();

// Development tools
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enable HTTPS redirection
app.UseHttpsRedirection();

// Enable CORS (must come before `UseAuthorization`, if you add auth)
app.UseCors("ReactPolicy");

app.MapControllers();
app.Run();
