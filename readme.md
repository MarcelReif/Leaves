
  
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
Dieser einfache Befehl reicht jedoch nicht aus. Der Webserver an sich ist nun für SSI konfiguriert, die Befehle in den ``.html``-Dateien jedoch werden noch nicht verarbeitet. Die Option ``+Includes`` muss noch in Deine vHost-Konfiguration eingetragen werden.  
```  
<Directory /nur/ein/beispiel>  
 Options +Includes</Directory>  
```  
  
#### NGINX  
Um SSI unter NGINX zu aktivieren reicht eine einzelne Zeile Code in deiner Konfiguration aus:  
```  
location / {  
 ssi on;
}  
```  
Durchgeführt? Perfekt! Du kannst Leaves nun für deine Verwendungszwecke benutzen.  
  
  
## Strukturierung  
Das komplette Theme basiert auf der Inkludierung über SSI. Um das Bearbeiten einzelner Dateien für den Developer einfacher zu gestalten, werden nicht nur HTML-Dateien einzeln zusammengeführt, sondern auch LESS-Stylesheets.  
  
#### HTML  
Eine Hauptdatei, die über den Webbrowser aufgerufen wird, inkludiert somit viele kleine Dateien aus dem Ordner ``templates/``. Dies geschieht über den oben genannten SSI-Befehl.   
  
#### LESS  
Über die ``@include``-Funktion in LESS werden einzelne templatebezogene Stylesheets  aus dem Ordner ``assets/stylesheets/templates/`` in ``all.less`` importiert und letztlich kompiliert. Dies geschieht beispielsweise so:  
```less  
@include "templates/dashboard.less";
```  
Weiterhin basieren alle verwendeten UI-Elemente auf einem eigens für Leaves entwickeltem Mini-Framework (``assets/stylesheets/ui_elements.less``).  
  
## UI-Aufbau  
Das Interface basiert auf drei Hauptkomponenten:  
  
 - Die Sidebar  
 - Der Main-Container  
 - Das Flex-System  
  
Kein Element wird außerhalb dieser Container platziert. Die Navigation befindet sich standardmäßig in der Sidebar, der Inhalt hingegen im Main-Container, welcher sich durch das Flex-System in viele kleine von einander jedoch abhängige Container unterteilen lässt.  


![UI-Struktur](https://msr-webdesign.de/files/images/markup/leaves/ui_structure.png)
