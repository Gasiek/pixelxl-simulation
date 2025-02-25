# Interaktywny symulator maty PIXEL XL

Ten projekt przedstawia prostą symulację maty PIXEL XL w środowisku Node.js. Symuluje matę o wymiarach 14x28, gdzie zapalony piksel jest symbolizowany przez `1` a zgaszony przez `0`. Symulacja przedstawia animowany piksel poruszający się po okręgu o danym promieniu i środku.

Algorytm użyty do generowania ścieżki piksela to zmodyfikowany Mid-Point Circle Drawing Algorithm, użyty w celu osiągnięcia idealnych i symetrycznych okręgów, w których każdy kolejny piksel zapala się co dany interwał, bez duplikatów.

## Spis treści
1. [Sposób uruchomienia](#sposób-uruchomienia)
2. [Struktura projektu](#struktura-projektu)
3. [Konfiguracja symulacji](#konfiguracja-symulacji)
3. [Czas pracy](#czas-pracy)

## Sposób uruchomienia
1. Upewnić się że Node.js (wersja 14 lub nowsza) jest zainstalowany na komputerze.
2. Sklonować to repozytorium.
3. Otworzyć terminal i przejść do lokalizacji projektu.
4. Uruchomić symulację poniższą komendą:
```
npm start
```

## Struktura projektu
- `mat.js` odpowiada za inicjalizację maty oraz funkcjonalność zapalania i gaszenia pikseli.
- `animation.js` odpowiada za poruszanie zapalonego piksela po okręgu.
- `main.js` rozpoczyna animację i wyświetla symulację w konsoli.

## Konfiguracja symulacji
W pliku `main.js` stała `DISPLAY_REFRESH_RATE` odpowiada za częstotliwość odświeżania wizualizacji w milisekundach. Użytkownik oprócz rozpoczynania jednej animacji o domyślnej konfiguracji, może również uruchomić kilka animacji na raz, przekazując dane okręgu i prędkość animacji w parametrach metody:

`startAnimation(centerX?: number, centerY?: number, newRadius?: number, interval?: number)`

W pliku `mat.js` użytkownik może zmienić wymiary maty:
- `ROWS` liczba wierszy
- `COLS` liczba kolumn

W pliku `animation.js` użytkownik może skonfigurować animację piksela poruszającego się po okręgu:
- `CENTER_X` współrzędna x środka okręgu
- `CENTER_Y` współrzędna y środka okręgu
- `RADIUS` promień okręgu
- `SHOULD_STAY_IN_BOUNDS` jeśli `true` to promień okręgu zostanie zmniejszony jeśli powodowałby, że któryś z pikseli do zapalenia znajdował się poza granicami maty. Jeśli `false`, program będzie ignorował piksele znajdujące się poza granicami maty.

### Czas pracy
Na projekt przeznaczyłem około 1h 35min. Na to złożyo się napisanie wszystkich funkcjonalności, testowanie przypadków brzegowych, ulepszanie algorytmu oraz pisanie README.