@echo off
echo ========================================================
echo  Menyalin Gambar Layanan WPS Office ke assets/images...
echo ========================================================

if not exist "assets\images" mkdir "assets\images"

copy /Y "C:\Users\Asus\.gemini\antigravity\brain\01cde7f3-b60b-4928-bbcf-ec006f8247b7\.user_uploaded\media_1793261354493_19bd935e.jpg" "assets\images\wps-cover.jpg"
copy /Y "C:\Users\Asus\.gemini\antigravity\brain\01cde7f3-b60b-4928-bbcf-ec006f8247b7\.user_uploaded\media_1793261378267_915570d2.jpg" "assets\images\wps-desktop.jpg"
copy /Y "C:\Users\Asus\.gemini\antigravity\brain\01cde7f3-b60b-4928-bbcf-ec006f8247b7\.user_uploaded\media_1793261378284_cc2e75c7.jpg" "assets\images\wps-word.jpg"
copy /Y "C:\Users\Asus\.gemini\antigravity\brain\01cde7f3-b60b-4928-bbcf-ec006f8247b7\.user_uploaded\media_1793261378287_84c27c36.jpg" "assets\images\wps-ppt.jpg"
copy /Y "C:\Users\Asus\.gemini\antigravity\brain\01cde7f3-b60b-4928-bbcf-ec006f8247b7\.user_uploaded\media_1793261378647_550a41af.jpg" "assets\images\wps-excel.jpg"

echo.
echo [SUKSES] Semua 5 gambar berhasil disalin ke folder assets/images/ !
echo.
pause
