
# Willkommen zu Leaves
Herzlich Willkommen bei Leaves. In diesem Readme werden Dir grundlegende Features, Anforderungen sowie Änderungs- und Anpassungsmöglichkeiten aufgezeigt. Sofern Dir nicht weitergeholfen werden kann und Fragen / Probleme offen stehen, kannst Du Dich gerne an mich wenden.

## Anforderungen
Damit Leaves einwandfrei funktioniert ist es dringends von Nöten, dass **SSI** (Server Side Includes) auf Deinem Webserver aktiviert ist und einwandfrei funktioniert. Das Ganze hat den einfachen Grund, dass mehrere kleine Dateien in der Bearbeitung einfacher zu handhaben sind als eine Große mit vielen hunderten Zeilen Code. 
Die Inkludierung einer HTML-Datei erfolgt beispielsweise so:
```
<!--#include FILE="templates/index.html" -->
```

Je nach Webserver variiert das Einschalten dieser Funktion.

#### Apache
```
sudo a2enmod include
```
Dieser einfache Befehl reicht jedoch nicht aus. Der Webserver an sich ist nun für SSI konfiguriert, die Befehle in den ``.html``-Dateien jedoch werden noch nicht verarbeitet. Die Option ``+Includes`` muss noch als Option in Deine vHost-Konfiguration eingetragen werden.
```
<Directory /nur/ein/beispiel>
	Options +Includes
</Directory>
```

#### NGINX
Um SSI unter NGINX zu aktivieren reicht eine einzelne Zeile Code in deiner Konfiguration aus:
```
location / {
    ssi on;
}
```
Durchgeführt? Perfekt! Du kannst Leaves nun für deine Verwendungszwecke benutzen.
