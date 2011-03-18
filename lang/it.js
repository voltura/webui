var LANG_STR = [
	  "File torrent||*.torrent||Tutti i file (*.*)||*.*||"
	, "OK"
	, "Annulla"
	, "Applica"
	, "Sì"
	, "No"
	, "Chiudi"
	, "Impostazioni"
	, "Lingua"
	, "Lingua:"
	, "Privacy"
	, "Controllo automatico aggiornamenti"
	, "Auto-aggiornamento a versioni beta"
	, "Invia informazioni anonime durante il controllo aggiornamenti"
	, "Durante il download"
	, "Aggiungi .!ut ai file incompleti"
	, "Pre-alloca tutti i file"
	, "Non entrare in standby se ci sono torrent attivi"
	, "Opzioni di visualizzazione"
	, "Conferma su eliminazione torrent"
	, "Conferma su eliminazione tracker"
	, "Conferma su uscita"
	, "Alterna il colore di sfondo della lista"
	, "Velocità attuale sulla barra del titolo"
	, "Limiti velocità nella barra di stato"
	, "All'aggiunta di file torrent"
	, "Non iniziare il download automaticamente"
	, "Attiva la finestra del programma"
	, "Mostra una finestra con i file all'interno del torrent"
	, "Azioni per doppio clic"
	, "Per il seeding dei torrent:"
	, "Per il download dei torrent:"
	, "Posizione file ricevuti"
	, "Metti i nuovi download in:"
	, "Chiedi sempre su aggiunta manuale"
	, "Sposta i download completati in:"
	, "Aggiungi l'etichetta del torrent"
	, "Sposta solo dalla cartella predefinita di download"
	, "Archivio file torrent"
	, "Archivia i files .torrent in:"
	, "Sposta i .torrent per i download completati in:"
	, "Carica automaticamente i torrent da:"
	, "Cancella i .torrent caricati"
	, "Porta in ascolto"
	, "Porta usata per le connessioni in entrata:"
	, "Porta casuale"
	, "Sel. casuale della porta ad ogni avvio"
	, "Abilita mappatura porte UPnP"
	, "Abilita mappatura porte NAT-PMP"
	, "Server proxy"
	, "Tipo:"
	, "Proxy:"
	, "Porta:"
	, "Autenticazione"
	, "Utente:"
	, "Password:"
	, "Risolvi i nomi host attraverso il proxy"
	, "Usa il server proxy per le connessioni peer-to-peer"
	, "Agg. un'eccezione al Firewall di Windows"
	, "Privacy proxy"
	, "Disabilita tutte le ricerche DNS locali"
	, "Disabilita le impostazioni che fanno trapelare informazioni di identità"
	, "Disabilita le connessioni non supportate dal proxy"
	, "Limitazione banda globale"
	, "Velocità massima di UL (kB/s): [0: Illimitata]"
	, "Automatica"
	, "Vel. di UL alternativa quando non si sta scaricando (kB/s):"
	, "Limitazione globale di download"
	, "Velocità massima di DL (kB/s): [0: Illimitata]"
	, "Numero di connessioni"
	, "Numero massimo di connessioni globali:"
	, "Numero massimo di peer connessi per torrent:"
	, "Numero di slot di upload per torrent:"
	, "Aggiungi slot se la velocità di upload è < 90%"
	, "Global Rate Limit Options"
	, "Applica limite all'overhead di trasporto"
	, "Applica limite alle connessioni uTP"
	, "Opzioni base di BitTorrent"
	, "Abilita rete DHT"
	, "Chiedi al tracker informazioni scrape"
	, "Abilita DHT per i nuovi torrent"
	, "Abilita scambio peer"
	, "Abilita scoperta peer locali"
	, "Limite banda peer locali"
	, "IP/Nome host da riportare al tracker:"
	, "Cifratura protocollo"
	, "In uscita:"
	, "Permetti conn. in arrivo non cifrate"
	, "Abilita la gestione della banda [uTP]"
	, "Abilita supporto al tracker UDP"
	, "Abilita Limite Trasferimento"
	, "Impostazioni Limite"
	, "Tipo di limite:"
	, "Cap banda:_"
	, "Periodo di tempo (giorni):"
	, "Cronologia d'uso per il periodo selezionato:"
	, "Inviati:"
	, "Scaricati:"
	, "Inviati + Scaricati:"
	, "Periodo di tempo:"
	, "Ultimi %d giorni"
	, "Azzera Cronologia"
	, "Impostazioni coda"
	, "Numero massimo di torrent attivi (in upload o download):"
	, "Numero massimo di download attivi:"
	, "Condividi finché [valori predefiniti]"
	, "Ratio massimo (%):"
	, "Tempo min seeding (minuti):"
	, "Usa una priorità maggiore per il seeding rispetto ai downloads"
	, "Quando µTorrent ha raggiunto la quota di seeding impostata"
	, "Limita l'upload a [0: ferma il torrent]"
	, "Abilita pianificatore"
	, "Tabella pianificatore"
	, "Impostazioni pianificatore"
	, "Upload limitato a (kB/s):"
	, "Download limitato a (kB/s):"
	, "Disabilita DHT quando spento"
	, "Abilita interfaccia web"
	, "Autenticazione"
	, "Utente:"
	, "Password:"
	, "Abilita account ospite con nome utente:"
	, "Connettività"
	, "Porta in ascolto alternativa (la porta bt è la predefinita):"
	, "Limita l'accesso ai seguenti IP (separa i valori con una virgola):"
	, "Opzioni avanzate [ATTENZIONE: Non modificare!]"
	, "Valore:"
	, "Vero"
	, "Falso"
	, "Imposta"
	, "Popup limitazione banda [Separa valori multipli con una virgola]"
	, "Scavalca impostazioni automatiche"
	, "Velocità upload:"
	, "Velocità download:"
	, "Etichette persistenti [Separa etichette multiple con il carattere | ]"
	, "Motori di ricerca [Formato: nome|URL]"
	, "Opzioni base cache"
	, "La cache del disco tiene i dati con gli accessi più frequenti in memoria per ridurre il numero di letture e scritture dal disco rigido. La gestione è automatica ma è possibile cambiarne il comportamento modificando queste impostazioni."
	, "Scavalca il dimens. auto. della cache e specificala manualmente:"
	, "Riduci l'uso della memoria quando la cache non è necessaria"
	, "Opzioni avanzate cache"
	, "Abilita la cache in scrittura"
	, "Scrivi i blocchi di dati non toccati ogni 2 minuti"
	, "Scrivi subito le parti completate"
	, "Abilita la cache in lettura"
	, "Spegni la cache in lettura se la velocità di upload è lenta"
	, "Rimuovi i vecchi blocchi dalla cache"
	, "Aumenta la dimensione della cache quando necessario"
	, "Disabilita la cache in scrittura di Windows"
	, "Disabilita la cache in lettura di Windows"
	, "Esegui programma"
	, "Esegui questo programma quando un torrent finisce:"
	, "Esegui questo programma quando un torrent cambia stato"
	, "Puoi usare questi comandi:\r\n%F - Nome del download (per un singolo file)\r\n%D - Cartella dove verranno salvati i file\r\n%N - Titole del torrent\r\n%S - Stato del torrent\r\n%L - Label\r\n%T - Tracker\r\n%M - Stringa messaggio di stato (la stessa della colonna di stato)\r\n%I - hex encoded info-hash\r\n\r\nLo stato è una combinazione di:\r\navviato = 1, controllo = 2, avvio dopo il controllo = 4,\r\ncontrollato = 8, errore = 16, messo in pausa = 32, auto = 64, caricato = 128"
	, "Proprietà torrent"
	, "Tracker (separa i gruppi con una linea vuota)"
	, "Impostazioni banda"
	, "Velocità massima di UL (kB/s): [0: predefinito]"
	, "Velocità massima di DL (kB/s): [0: predefinito]"
	, "Numero slot di upload: [0: predefinito]"
	, "Condividi finché"
	, "Scavalca le impost. predef."
	, "Rapporto minimo (%):"
	, "Tempo minimo seeding (minuti)"
	, "Altre impostazioni"
	, "Seeding iniziale"
	, "Abilita DHT"
	, "Scambio peer"
	, "Sorgente"
	, "URL sorgente:"
	, "Alias Personalizzato:"
	, "Sottoscrizione"
	, "Non scaricare automaticamente tutti i file"
	, "Scarica automaticamente tutti i file pubblicati nella sorgente"
	, "Usa filtro ep. intellig."
	, "Sorgenti RSS||Preferiti||Cronologia||"
	, "All Feeds"
	, "Impostazioni filtro"
	, "Nome:"
	, "Filtro:"
	, "Non:"
	, "Salva in:"
	, "Sorgente:"
	, "Qualità:"
	, "Numero episodio: [es. 1x12-14]"
	, "Abbina il filtro al nome orig. anziché al nome decodificato"
	, "Non iniziare i download automaticamente"
	, "Filtro ep. intellig."
	, "Dai priorità massima al download"
	, "Intervallo minimo:"
	, "Etichetta per i nuovi torrent:"
	, "Aggiungi sorgente RSS..."
	, "Modifica sorgente..."
	, "Disabilita sorgente"
	, "Abilita sorgente"
	, "Aggiorna sorgente"
	, "Elimina sorgente"
	, "Download"
	, "Apri URL nel browser"
	, "Aggiungi ai preferiti"
	, "Aggiungi"
	, "Elimina"
	, "TUTTI"
	, "(tutte)"
	, "(controlla sempre)||(controlla solo 1 volta)||12 ore||1 giorno||2 giorni||3 giorni||4 giorni||1 settimana||2 settimane||3 settimane||1 mese||"
	, "Aggiungi sorgente RSS"
	, "Modifica sorgente RSS"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "Vuoi davvero eliminare la sorgente RSS \"%s\"?"
	, "Nome completo"
	, "Nome"
	, "Episodio"
	, "Formato"
	, "Codec"
	, "Date"
	, "Sorgente"
	, "URL sorgente"
	, "IP"
	, "Porta"
	, "Client"
	, "Flag"
	, "%"
	, "Rilevanza"
	, "Velocità DL"
	, "Velocità UL"
	, "Richieste"
	, "Attesa"
	, "Inviati"
	, "Ricevuti"
	, "Errori hash"
	, "DL peer"
	, "UL massimo"
	, "DL massimo"
	, "In coda"
	, "Inattivo da"
	, "Completati"
	, "Prima parte"
	, "Nome"
	, "# Parti"
	, "%"
	, "Priorità"
	, "Dimensione"
	, "salta"
	, "bassa"
	, "normale"
	, "alta"
	, "Ricevuti:"
	, "Inviati:"
	, "Seed:"
	, "Tempo rimasto:"
	, "Velocità DL:"
	, "Velocità UL:"
	, "Peer:"
	, "Rapp. condiv.:"
	, "Salva con nome:"
	, "Hash:"
	, "Generale"
	, "Trasferimento"
	, "%d di %d connessi (%d visibili)"
	, "D:%s U:%s - %s"
	, "Copia"
	, "Colonne Predefinite"
	, "Illimitato"
	, "Risolvi gli IP"
	, "Get File(s)"
	, "Non scaricare"
	, "Priorità alta"
	, "Priorità bassa"
	, "Priorità normale"
	, "Copia URI magnetico"
	, "Elimina dati"
	, "Elimina .torrent"
	, "Elimina .torrent + dati"
	, "Forza ricontrollo"
	, "Forza avvio"
	, "Etichetta"
	, "Pausa"
	, "Proprietà"
	, "Muovi verso l'inizio della coda"
	, "Muovi verso la fine della coda"
	, "Rimuovi"
	, "Rimuovi e"
	, "Avvia"
	, "Arresta"
	, "Attivi"
	, "Tutti"
	, "Completati"
	, "In download"
	, "Inattivi"
	, "Nessuna etichetta"
	, "||Disp.||Disponibilità"
	, "Aggiunto in data"
	, "Data completamento"
	, "Completati"
	, "Ricevuti"
	, "Velocità DL"
	, "ETA"
	, "Etichetta"
	, "Nome"
	, "#"
	, "Peer"
	, "Rimasti"
	, "Seed"
	, "Seed/Peer"
	, "Rapporto"
	, "Dimensione"
	, "URL sorgente"
	, "Stato"
	, "Inviati"
	, "Velocità UL"
	, "Sei sicuro di voler rimuovere i %d torrent selezionati e tutti i dati associati ad essi?"
	, "Sei sicuro di voler rimuovere il torrent selezionato e tutti i dati associati ad esso?"
	, "Sei sicuro di voler rimuovere i %d torrent selezionati?"
	, "Sei sicuro di voler rimuovere il torrent selezionato?"
	, "Vuoi davvero eliminare il filtro RSS \"%s\"?"
	, "Controllato al %:.1d%%"
	, "In download"
	, "Errore: %s"
	, "Completato"
	, "In pausa"
	, "In coda"
	, "Seeding in coda"
	, "In seeding"
	, "Arrestato"
	, "Inserisci etichetta"
	, "Inserisci la nuova etichetta per i torrent selezionati:"
	, "Nuova etichetta..."
	, "Rimuovi etichetta"
	, "Generale||Tracker||Peer||Parti||File||Velocità||Registro Eventi||"
	, "Aggiungi torrent"
	, "Aggiungi torrent da URL"
	, "Pausa"
	, "Impostazioni"
	, "Muovi verso l'inizio della coda"
	, "Muovi verso la fine della coda"
	, "Rimuovi"
	, "Gestore RSS"
	, "Avvia"
	, "Arresta"
	, "File"
	, "Aggiungi torrent..."
	, "Aggiungi torrent da URL..."
	, "Opzioni"
	, "Impostazioni"
	, "Mostra elenco categorie"
	, "Mostra informazioni dettagliate"
	, "Mostra barra di stato"
	, "Mostra barra strumenti"
	, "Icone sulle schede"
	, "Aiuto"
	, "Pagina web µTorrent"
	, "Forums di µTorrent"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Torrents"
	, "Pausa tutti i torrent"
	, "Riprendi tutti i torrent"
	, "D: %s%z/s"
	, " L: %z/s"
	, " O: %z/s"
	, " T: %Z"
	, "U: %s%z/s"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Avanzate"
	, "Banda"
	, "Connessione"
	, "Cache disco"
	, "Cartelle"
	, "Generale"
	, "Pianificatore"
	, "Coda"
	, "Extras IU"
	, "Impostazioni Interfaccia Utente"
	, "BitTorrent"
	, "Interfaccia web"
	, "Limite Trasferimento"
	, "Esegui programma"
	, "Mostra proprietà||Avvia/Arresta||Apri cartella||Mostra barra download||"
	, "disabilitata||abilitata||forzata||"
	, "(nessuno)||Socks4||Socks5||HTTPS||HTTP||"
	, "Uploads||Downloads||Uploads + Downloads||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Nome"
	, "Valore"
	, "Lun||Mar||Mer||Gio||Ven||Sab||Dom||"
	, "Lunedì||Martedì||Mercoledì||Giovedì||Venerdì||Sabato||Domenica||"
	, "Vel. piena"
	, "Vel. piena - Usa i normali limiti di banda globali"
	, "Vel. limitata"
	, "Vel. limitata - Usa i limiti di banda specificati nel pianificatore"
	, "Solo seeding"
	, "Solo seeding - Invia solo dati (inclusi blocchi incompleti)"
	, "Spento"
	, "Spento - Arresta tutti i torrents che non sono stati forzati"
	, "<= %d ore"
	, "(ignora)"
	, "<= %d minuti"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dw %dd"
	, "%dy %dw"
];
