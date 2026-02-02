@echo off
echo ========================================
echo      INICIANDO SISTEMA DE PIZZARIA
echo ========================================
echo.

echo Abrindo Backend (porta 5000)...
start "Backend - Pizzaria" cmd /k "cd backend && npm start"
timeout /t 3 /nobreak > nul

echo Abrindo Frontend (porta 3000)...
start "Frontend - Pizzaria" cmd /k "cd frontend && npm start"

echo.
echo ========================================
echo Sistema iniciado!
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo ========================================
