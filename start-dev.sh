#!/bin/bash

echo "Launching .NET backend.."
gnome-terminal -- bash -c "cd eCommerceAPI && dotnet run --launch-profile https; exec bash"

sleep 5

echo "Launching React frontend.."
gnome-terminal -- bash -c "cd ecommerceweb && npm start; exec bash"