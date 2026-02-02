@echo off
echo ========================================
echo    INSTALADOR - SISTEMA DE PIZZARIA
echo ========================================
echo.

echo [1/2] Instalando dependencias do BACKEND...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ERRO ao instalar dependencias do backend!
    pause
    exit /b 1
)
echo Backend instalado com sucesso!
echo.

echo [2/2] Instalando dependencias do FRONTEND...
cd ..\frontend
call npm install
if %errorlevel% neq 0 (
    echo ERRO ao instalar dependencias do frontend!
    pause
    exit /b 1
)
echo Frontend instalado com sucesso!
echo.

cd ..
echo ========================================
echo    INSTALACAO CONCLUIDA COM SUCESSO!
echo ========================================
echo.
echo Para iniciar o projeto:
echo.
echo 1. Abra um terminal e execute:
echo    cd backend
echo    npm start
echo.
echo 2. Abra outro terminal e execute:
echo    cd frontend
echo    npm start
echo.
pause
