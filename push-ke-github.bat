@echo off
setlocal enabledelayedexpansion

echo ====================================================================
echo   AUTOMATIC GIT PUSH KE REPO GITHUB:
echo   https://github.com/daffatradejournal-cmyk/jualan-tiktok.git
echo ====================================================================
echo.

:: 1. Build Vite
echo [1/4] Menjalankan Vite Build...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Build gagal! Periksa error di atas.
    pause
    exit /b 1
)

:: 2. Cek git
echo [2/4] Memeriksa status Git...
where git >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Git belum terpasang di sistem!
    pause
    exit /b 1
)

:: 3. Git add & commit
echo [3/4] Melakukan git add & git commit...
git add .
git commit -m "Upgrade UI/UX: Vite + React + Tailwind + Framer Motion, perbaikan foto sampul tablet, dan Taste Skill"

:: 4. Push ke GitHub
echo [4/4] Melakukan push ke origin main...
git push origin main

echo.
echo ====================================================================
echo   [SUKSES] Seluruh perubahan berhasil dipush ke GitHub!
echo ====================================================================
pause
