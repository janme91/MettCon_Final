# MettCon Website - Inhaltsverwaltung

Willkommen zur Anleitung für die Inhaltsverwaltung Ihrer statischen MettCon-Website. Da die Seite ohne ein externes CMS (Content-Management-System) gebaut wurde, werden alle Inhalte direkt im Code verwaltet. Diese Datei dient als Ihr Wegweiser, um Änderungen einfach und schnell selbst durchführen zu können.

## Grundstruktur

Die Website ist in wiederverwendbare Komponenten (z.B. Header, Hero, Services) aufgeteilt, die sich im Ordner `src/components` befinden. Die Texte und Daten für diese Komponenten werden zentral in der Hauptdatei der Startseite gesammelt und von dort an die Komponenten übergeben.

---

## Inhalte bearbeiten: Wo finde ich was?

Hier ist eine detaillierte Auflistung, in welcher Datei Sie die verschiedenen Inhalte der Website finden und anpassen können.

### 1. Allgemeine Texte der Startseite

Alle zentralen Texte für die Startseite (Überschriften, Unterüberschriften, Beschreibungen) sind an einem Ort gebündelt.

- **Datei:** `src/pages/HomePage.tsx`
- **Was Sie hier ändern können:**
  - Texte für den **Startbereich (Hero)**
  - Überschriften für den **Leistungsbereich**
  - Texte und Überschriften für den **"Über mich"-Bereich**
  - Texte für den **Kontaktbereich**
  - Ihre **E-Mail-Adresse** und **Telefonnummer**

### 2. Leistungen

Die sechs Kacheln im Leistungsbereich werden ebenfalls hier verwaltet.

- **Datei:** `src/pages/HomePage.tsx`
- **Was Sie hier ändern können:**
  - Suchen Sie nach dem `services`-Array.
  - Für jede Leistung können Sie `title` (Titel) und `description` (Beschreibung) anpassen.

### 3. "Über mich"-Bereich

- **Portraitbild:**
  - **Datei:** `src/components/About.tsx`
  - **Was Sie hier ändern können:** Suchen Sie nach dem `<img>`-Tag. Das Bild wird aus der Datei `public/portrait.png` geladen. Ersetzen Sie diese Datei, um das Bild zu ändern.

- **Texte:**
  - **Datei:** `src/pages/HomePage.tsx` (wie in Punkt 1 beschrieben)

### 4. Logos

Ihr Logo wird an drei verschiedenen Stellen verwendet und aus einer einzigen Datei geladen.

- **Logodatei:** `public/logo.png`
- **Was Sie hier ändern können:** Ersetzen Sie die Datei `public/logo.png` durch Ihr neues Logo, um es auf der gesamten Website zu aktualisieren. Die folgenden Stellen verwenden diese Datei:
  - **Browser-Tab (Favicon):** Gesteuert durch `index.html`
  - **Kopfzeile (Header):** Gesteuert durch `src/components/Header.tsx`
  - **Fußzeile (Footer):** Gesteuert durch `src/components/Footer.tsx`

### 5. Rechtliche Seiten (Impressum & Datenschutz)

Die Inhalte für diese separaten Seiten befinden sich in ihren eigenen Dateien.

- **Impressum:**
  - **Datei:** `src/pages/ImpressumPage.tsx`
  - **Was Sie hier ändern können:** Passen Sie die Adressdaten, Steuernummer und weitere rechtliche Informationen direkt im Text an.

- **Datenschutzerklärung:**
  - **Datei:** `src/pages/DatenschutzPage.tsx`
  - **Was Sie hier ändern können:** Bearbeiten Sie die Texte der Datenschutzerklärung.

### 6. Social-Media-Links & Fußzeile

Die Links zu Ihren Social-Media-Profilen befinden sich in der Fußzeile.

- **Datei:** `src/components/Footer.tsx`
- **Was Sie hier ändern können:**
  - Suchen Sie die `<a>`-Tags für E-Mail, Telefon und LinkedIn.
  - Ersetzen Sie die `href`-Werte mit Ihren korrekten Links (z.B. Ihr LinkedIn-Profil).

---

Nachdem Sie Änderungen am Code vorgenommen haben, wird die Vorschau automatisch aktualisiert. Wenn Sie mit dem Ergebnis zufrieden sind, können Sie die Änderungen veröffentlichen.
