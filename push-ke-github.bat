@echo off
setlocal enabledelayedexpansion

echo ====================================================================
echo   AUTOMATIC GIT PUSH KE REPO GITHUB:
echo   https://github.com/daffatradejournal-cmyk/jualan-tiktok.git
echo ====================================================================
echo.

:: 1. Salin gambar ke folder assets/images
echo [1/5] Memastikan gambar tersalin ke assets/images...
if not exist "assets\images" mkdir "assets\images"

copy /Y "C:\Users\Asus\.gemini\antigravity\brain\01cde7f3-b60b-4928-bbcf-ec006f8247b7\.user_uploaded\media_1793261354493_19bd935e.jpg" "assets\images\wps-cover.jpg" >nul 2>&1
copy /Y "C:\Users\Asus\.gemini\antigravity\brain\01cde7f3-b60b-4928-bbcf-ec006f8247b7\.user_uploaded\media_1793261378267_915570d2.jpg" "assets\images\wps-desktop.jpg" >nul 2>&1
copy /Y "C:\Users\Asus\.gemini\antigravity\brain\01cde7f3-b60b-4928-bbcf-ec006f8247b7\.user_uploaded\media_1793261378284_cc2e75c7.jpg" "assets\images\wps-word.jpg" >nul 2>&1
copy /Y "C:\Users\Asus\.gemini\antigravity\brain\01cde7f3-b60b-4928-bbcf-ec006f8247b7\.user_uploaded\media_1793261378287_84c27c36.jpg" "assets\images\wps-ppt.jpg" >nul 2>&1
copy /Y "C:\Users\Asus\.gemini\antigravity\brain\01cde7f3-b60b-4928-bbcf-ec006f8247b7\.user_uploaded\media_1793261378647_550a41af.jpg" "assets\images\wps-excel.jpg" >nul 2>&1
echo       -> Gambar siap di assets/images/.

:: 2. Cek apakah git terpasang
echo [2/5] Memeriksa instalasi Git...
where git >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Git belum terpasang atau belum masuk PATH!
    echo Silakan pasang Git dari https://git-scm.com/ lalu coba lagi.
    pause
    exit /b 1
)

:: 3. Inisialisasi Git
echo [3/5] Mempersiapkan repository Git...
if not exist ".git" (
    git init
)

git remote remove origin >nul 2>&1
git remote add origin https://github.com/daffatradejournal-cmyk/jualan-tiktok.git
git branch -M main

:: 4. Tambah file & commit
echo [4/5] Melakukan git add & git commit...
git add .
git commit -m "Update landing page: Taste skill design, galeri WPS PC Level, dan fitur interaktif"

:: 5. Push ke GitHub
echo [5/5] Melakukan push ke origin main...
echo (Jika jendela login browser / popup GitHub muncul, silakan klik Authorize)
git push -u origin main

echo.
echo ====================================================================
echo   SELESAI! Periksa repository Anda di:
echo   https://github.com/daffatradejournal-cmyk/jualan-tiktok
echo ====================================================================
echo.
pause
