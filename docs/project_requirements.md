# Wymaganie projektowe

1. Prezentacja oferty dostępnych miejsc turystycznych destynacji
2. Wyszukiwanie wycieczki na podstawie następujących kryteriów: cel podróży, data wyjazdu, miejsce wyjazdu, liczba
   osób (z rozróżnieniem na osoby dorosłe i dzieci - do 3 lat, do 10 lat, do 18 lat)
3. Informowanie o dostępności oferty (oferta to wyjazd dla określonej konfiguracji: liczba i rodzaj osób, wybrany hotel
   w miejscu docelowym, wybrane rodzaje i ilość pokoi (mały, średni, duży, apartament, studio), wybrany rodzaj
   transportu (własny, pociąg, autobus, samolot), wybrany termin wyjazdu, ilość dni, wybrane posiłki, skorzystanie z
   dostępnej promocji)- dostępność ofert może się zmieniać w czasie rzeczywistym; jeżeli oferta dotyczy samolotu, to
   jest to konkretny lot i dysponujemy ograniczoną liczbą miejsc; jeden samolot może być związany z kilkoma podróżami –
   bo leci na jedno lotnisko w kraju docelowym – więc w samolocie może zabraknąć miejsc
4. Kalkulacja ceny dla wybranej oferty -.zaproponować w dokumentacji kalkulację ceny, algorytm, który uwzględnia
   atrybuty wymienione w opisie oferty
5. Możliwość rezerwacji wybranej oferty (automatycznie zasoby związane z konfiguracją powinny stać się niedostępne dla
   innych klientów przez 1 minutę; po tym czasie, jeśli nie zostanie wykupiona, zarezerwowane zasoby wracają do puli) z
   symulacją oczekiwania na zaliczkę kartą (dla losowych transakcji należy zwrócić odpowiedź, że płatność nie powiodła
   się)
6. Możliwość zakupu wybranej oferty co oznacza trwałe zmniejszenie zasobów związanych z daną ofertą. Ma być symulacja
   oczekiwania na płatność kartą. Komunikat o zakupie konkretnej oferty powinien być wystawiony do dodatkowej kolejki,
   przeznaczonej do komunikacji z systemem TO(implementacja tego systemu nie jest wymagana).
7. Możliwość prezentowania informacji w czasie rzeczywistym na stronie internetowej informacji, że ktoś inny zakupił
   ofertę ofertę związaną z aktualnie oglądaną wycieczką.
8. Prezentacja informacji (w czasie rzeczywistym) o preferencjach klientów, którzy dokonują rezerwacji lub zakupu
   oferty (preferencje dotyczące kierunku wyjazdu).kierunków).
9. Prezentacja informacji (w czasie rzeczywistym) o preferencji klientów dokonujących rezerwacji lub zakupu oferty (
   preferencje dotyczące hoteli zakupu oferty (preferencje dotyczące hoteli rodzajów pokoi, rodzaju transportu)
10. Przygotowanie mechanizmu importu w czasie rzeczywistym danych o zmianach w ofercie TO. Proces importu ma być
    asynchroniczny. Należy stworzyć dodatkowy generator danych w celu symulacji zmiany danych po stronie TO po stronie
    TO. Należy pamiętać, że TO może zmienić dostępność oferty przeglądanej / rezerwowanej / kupowanej przez klienta.
    Cena takiej oferty również może się zmienić w czasie rzeczywistym. Zarejestrowane zmiany w ofercie powinny być
    prezentowane w czasie rzeczywistym. Dodatkowo, dla testów utwórz w interfejsie użytkownika stronę, która będzie
    prezentować listę 10 ostatnich zmian.
