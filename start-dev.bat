@echo off
echo Launching .NET backend..
start ".NET Backend" cmd /k "cd eCommerceAPI && dotnet run --launch-profile https"

timeout /t 5 >nul

echo 🚀 Démarrage du frontend dans un nouveau terminal...
start "React Frontend" cmd /k "cd ecommerceweb && npm start"