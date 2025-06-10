#!/bin/bash

# Personnalise ces chemins si besoin
BACKEND_DIR="eCommerceAPI"
FRONTEND_DIR="ecommerceweb"

# Fonction pour détecter l'OS
start_backend() {
    echo "Launching .NET Backend.."

    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS : ouvre Terminal.app
        osascript <<EOF
tell application "Terminal"
    do script "cd \"$(pwd)/$BACKEND_DIR\" && dotnet run --launch-profile https"
    activate
end tell
EOF
    else
        # Linux avec gnome-terminal
        gnome-terminal -- bash -c "cd \"$BACKEND_DIR\" && dotnet run --launch-profile https; exec bash"
    fi
}

start_frontend() {
    echo "Launching React Frontend.."

    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS : ouvre Terminal.app
        osascript <<EOF
tell application "Terminal"
    do script "cd \"$(pwd)/$FRONTEND_DIR\" && npm start"
    activate
end tell
EOF
    else
        # Linux avec gnome-terminal
        gnome-terminal -- bash -c "cd \"$FRONTEND_DIR\" && npm start; exec bash"
    fi
}

# Lancer les deux
start_backend
sleep 5
start_frontend