# Piano di test E2E — Oops I Roamed

> Tre journey utente, scritti come specifiche eseguibili.
> Ogni step ha un'azione chiara, uno stato atteso, e un criterio di accettazione.
> Linguaggio: italiano (UI è in italiano).
> Ambiente: prototipo desktop a `prototipo/index.html`, viewport 1440×900.

---

## Stato di copertura

| Journey | Stato del prototipo | Copertura test |
|---|---|---|
| 1. Prenotare un viaggio di gruppo | ✅ Implementato end-to-end | Completa |
| 2. Richiedere un itinerario su misura | ✅ Implementato end-to-end | Completa |
| 3. Inviare foto per il blog | 🟡 **Da costruire** — flow non esiste ancora | Spec di test + brief di prodotto |

---

## Setup comune

**Pre-condizioni** (valide per tutti i journey):
- Apri `prototipo/index.html` in Chrome/Safari recente, viewport ≥ 1280px
- LocalStorage pulito (no utente loggato, no prenotazioni, no save)
- Atterri sulla home: hero "Andiamo dove ti racconteremo dopo"

**Smoke test prima di iniziare** (30s):
1. Header visibile con logo, nav (Diario / Viaggi / Su misura / Chi siamo), bottone "Accedi"
2. Hero animato (titolo italic in serif, CTA "Vedi i viaggi")
3. Footer presente con 4 colonne di link
4. Nessun errore in console

---

## Journey 1 — **Anna prenota Porto**

> *Persona*: Anna, 32, designer milanese. Ha letto un articolo sul Douro l'anno scorso. Vuole un weekend lungo con la sua compagna a fine settembre.

### Pre-condizione
Utente non loggato. Vuole esplorare prima, poi prenotare.

### Flusso

| # | Azione | Stato atteso | ✅ |
|---|---|---|---|
| 1.1 | Click "Vedi i viaggi" nell'hero | Si naviga a `/trips`, lista delle 6 spedizioni con TripCard, animazione `rise` scaglionata | ☐ |
| 1.2 | Click sul card "Porto" | Si naviga a `/trip?id=porto`. Hero con immagine, titolo, dates, posti rimasti, prezzo, badge "FILLING FAST" | ☐ |
| 1.3 | Scrolla la pagina | Sezioni in ordine: overview → **Mappa "La rotta"** → toggle Disegnata/Reale → itinerario per giorni → **Polaroid wall "Chi c'è già stato"** | ☐ |
| 1.4 | Click toggle "Reale" sulla mappa | La mappa SVG editoriale viene sostituita da una mappa Leaflet con tile chiare Carto, marker numerati, route tratteggiata. Animazione `page-enter` | ☐ |
| 1.5 | Click toggle "Disegnata" | Torna alla mappa SVG con sagoma del Portogallo nord, fiume Douro, costa atlantica | ☐ |
| 1.6 | Click su "Giorno 03" nella tab itinerario | L'area del giorno cambia con animazione `page-enter`, mostra time + icona + descrizione di ogni voce | ☐ |
| 1.7 | Hover su una polaroid nella wall | La foto si raddrizza (rotazione → 0deg) e cresce leggermente | ☐ |
| 1.8 | Click sull'icona cuore in alto a destra del card | Toast in basso "Salvato in Diario" (anche se non loggata) | ☐ |
| 1.9 | Click "Prenota questo viaggio" | Si naviga a `/book?id=porto&step=1`, passo 1 di 3: scelta numero viaggiatori | ☐ |
| 1.10 | Seleziona "2 persone" | Counter aggiornato, sidebar destra mostra subtotale aggiornato live | ☐ |
| 1.11 | Click "Continua" | Step 2: form dettagli viaggiatori (nome, email, telefono, richieste speciali) | ☐ |
| 1.12 | Compila campi validi e click "Continua" | Step 3: pagamento finto (carta, scadenza, CVV) | ☐ |
| 1.13 | **Test errore**: inserisci CVV `000` | Campo va in stato error, messaggio "Codice non valido", il bottone "Paga ora" è abilitato ma click → mostra toast rosso | ☐ |
| 1.14 | Inserisci CVV valido `123` e click "Paga ora" | Loader 1.1s, poi schermata conferma con stamp "PRENOTAZIONE CONFERMATA" e titolo "Sei dei nostri." | ☐ |
| 1.15 | **Email modal** appare automaticamente dopo 800ms | Modale a tutta finestra con header "POSTA IN ARRIVO", from "Oops I Roamed", oggetto contestuale, riferimento `OR-XXXXX`, totale, firma manoscritta "Sofia" | ☐ |
| 1.16 | Click "Vai ai miei viaggi" nel modal | Si naviga a `/account`, tab "In arrivo" con il viaggio appena prenotato in cima | ☐ |
| 1.17 | Refresh della pagina | La prenotazione persiste (localStorage), utente ancora loggato | ☐ |

### Criteri di accettazione
- [ ] Nessun errore in console durante l'intero flusso
- [ ] Il prezzo nel form è sempre coerente con quello del trip detail
- [ ] L'email di conferma mostra dati reali (numero viaggiatori, totale formattato `€X.XXX`)
- [ ] La prenotazione appare in `/account` con CTA "Vedi itinerario" funzionante
- [ ] Click su "Annulla" durante il booking → torna alla home senza creare prenotazione

### Edge cases
- Trip "tutto esaurito" → bottone "Tutto esaurito" disabilitato in trip detail (verificabile con `Hokkaido` nel mock se sold out)
- Booking di un trip già salvato → lo stato `saved` rimane attivo
- Utente già loggato → step 2 pre-compila nome/email

---

## Journey 2 — **Marco & Giulia chiedono un itinerario su misura**

> *Persona*: Marco, 38, e Giulia, 36. Cinque anni insieme, vogliono il Giappone a maggio per due settimane. Niente tour pacchettizzati.

### Pre-condizione
Utente non loggato. Arriva da un'email che linka un articolo del diario.

### Flusso

| # | Azione | Stato atteso | ✅ |
|---|---|---|---|
| 2.1 | Atterra sulla home | Hero visibile | ☐ |
| 2.2 | Scrolla fino alla sezione "Roam your way" | Banner verde scuro con titolo italic "Vorresti qualcosa che non c'è qui?" e CTA "Inizia una richiesta" | ☐ |
| 2.3 | Click "Inizia una richiesta" | Si naviga a `/bespoke`. Form a step (1/6 visibile), barra di progresso in alto | ☐ |
| 2.4 | Step 1 — "Dove vorresti andare?" | Campo testo libero + lista paesi suggeriti. Compila "Giappone, Hokkaido o Honshu" | ☐ |
| 2.5 | Click "Continua" | Step 2 — "Quando?" con calendario/dropdown stagioni. Seleziona "Maggio 2025, 14 giorni" | ☐ |
| 2.6 | Step 3 — "In quanti?" | Slider o counter. Imposta 2 viaggiatori | ☐ |
| 2.7 | Step 4 — "Stile di viaggio" | Multi-select chips: Slow living, Food, Wellness & terme, Design & architettura, Fotografia, Spirituale & lento. Seleziona Wellness, Food, Design | ☐ |
| 2.8 | Step 5 — "Budget per persona" | Slider €1500 → €8000+. Imposta €4500 | ☐ |
| 2.9 | Click "Salta" su uno step opzionale | Lo step viene saltato, barra avanza, dati non persistono per quello step | ☐ |
| 2.10 | Step 6 — "Qualcos'altro?" | Textarea libera. Compila "Vogliamo evitare hotel di catena. OK il treno notturno." | ☐ |
| 2.11 | **Test validation**: torna allo step 1, svuota il campo paese, prova a continuare | Inline error "Dicci almeno un paese o una regione" | ☐ |
| 2.12 | Ri-compila e arriva al click finale "Invia richiesta" | Loader ~900ms, poi schermata "Ricevuta. Ti scriviamo entro tre giorni." con stamp + animazione `rise` | ☐ |
| 2.13 | Click "Vedi le mie richieste" | Se utente non loggato → modal di signup (email + nome). Compila e crea account | ☐ |
| 2.14 | Dopo signup → atterra in `/account` tab "Su misura" | Card della richiesta visibile con stato "In attesa" + riassunto (paese, date, budget, persone) | ☐ |
| 2.15 | Click "Torna alla home" invece di "Vedi le mie richieste" | Naviga a `/`, header non mostra utente loggato (richiesta inviata anonima) | ☐ |

### Criteri di accettazione
- [ ] La barra di progresso aggiorna correttamente (step N di 6)
- [ ] "Indietro" preserva i dati già inseriti
- [ ] La richiesta inviata appare nel passaporto (`Passport` component) come timbro "su misura"
- [ ] Lo stato "In attesa" è visualmente distinto da "Confermato" (colore diverso)

### Edge cases
- Tutti gli step opzionali saltati → richiesta inviata comunque (con dati minimi paese + date)
- Budget in fondo allo slider ("€1500") → mostra messaggio "Faremo del nostro meglio" senza bloccare
- Utente già loggato → niente modal di signup, redirect diretto a `/account`

---

## Journey 3 — **Luca invia le sue foto della Puglia per il blog**

> *Persona*: Luca, 45, è andato in Puglia con noi a maggio 2024. Ha 200 foto buone. Vuole condividerle con la community e magari rivederle nel diario di prossima edizione.

### ⚠️ Stato attuale
**Questo flow non esiste nel prototipo.** Il piano qui sotto è sia (a) test plan per quando sarà costruito, sia (b) brief di prodotto su come dovrebbe funzionare.

### Brief — punto di ingresso proposto

Tre punti di accesso ragionevoli, da mettere tutti:
1. **Account → tab "I miei viaggi"** → dopo ogni booking concluso, card con CTA "Condividi le tue foto"
2. **Trip detail → fondo della Polaroid wall** → micro-CTA "Sei stato anche tu? Mandaci le tue foto"
3. **Footer → colonna "Chi siamo"** → link "Manda le tue foto"

### Brief — il flow proposto (5 step)

```
Submit → Upload → Tag → Storia → Conferma
```

1. **Submit (landing)**: spiega cosa cerchiamo (foto vere, alta risoluzione, OK telefono se ben fatte), come le usiamo (polaroid wall, articoli, social con credito), tempistiche (ti rispondiamo in 7 giorni)
2. **Upload**: drag & drop fino a 20 foto, max 10MB cada. Anteprima a griglia con possibilità di rimuovere
3. **Tag**: per ogni foto → quale viaggio (dropdown dei booking dell'utente, o ricerca per destinazione se non loggato), giorno/tappa, didascalia opzionale (max 80 caratteri stile polaroid)
4. **Storia (opzionale)**: textarea "Una cosa che ricordi di quel giorno" — diventa la base per un possibile pezzo del diario
5. **Conferma**: stamp + email modal "Ricevute. Le guardiamo a mano."

### Test plan (per quando esisterà)

| # | Azione | Stato atteso | ✅ |
|---|---|---|---|
| 3.1 | Da `/account` → click "Condividi le tue foto" sulla card di un viaggio passato | Naviga a `/share?bookingId=XXX`, step 1/5 con pre-fill del trip | ☐ |
| 3.2 | Da trip detail di un viaggio passato dell'utente → click "Mandaci le tue foto" | Stesso flow, pre-fill trip | ☐ |
| 3.3 | Da footer (utente non loggato) → click "Manda le tue foto" | Naviga a `/share`, step 1 senza pre-fill, mostra dropdown completo destinazioni | ☐ |
| 3.4 | Step Upload — drag & drop 5 foto JPG da 3MB ciascuna | Anteprima a griglia 3xN, ogni foto con × per rimuovere, contatore "5/20" | ☐ |
| 3.5 | **Test errore**: drop una foto da 15MB | Inline error "Massimo 10MB per foto. Questa pesa 15MB.", foto NON aggiunta | ☐ |
| 3.6 | **Test errore**: drop un PDF | Error "Solo JPG, PNG, HEIC.", file rifiutato | ☐ |
| 3.7 | Aggiungi 21 foto | Dopo la 20esima, dropzone disabilitata + messaggio "Massimo 20 alla volta. Mandane altre con un secondo invio." | ☐ |
| 3.8 | Click "Continua" senza aver caricato nulla | Bottone disabilitato (visivamente diverso) | ☐ |
| 3.9 | Step Tag — per la prima foto, seleziona trip "Puglia · Maggio 2024" | Auto-pre-fill su tutte le foto rimanenti, ogni foto si può ri-taggare individualmente | ☐ |
| 3.10 | Per ogni foto, seleziona giorno (dropdown da itinerario) | Salva live | ☐ |
| 3.11 | Aggiungi didascalia "trulli all'alba" a una foto | Counter caratteri 13/80 visibile | ☐ |
| 3.12 | **Test rate**: prova a digitare 100 caratteri | Si ferma a 80, contatore in rosso negli ultimi 10 | ☐ |
| 3.13 | Step Storia — compila textarea "Marco ci ha portati al campo di olive di suo nonno…" | Salva live | ☐ |
| 3.14 | Click "Salta" sullo step Storia | Step skippato, va a Conferma | ☐ |
| 3.15 | Step Conferma — riepilogo: 5 foto, trip Puglia, 1 storia | Bottone "Invia" + checkbox "Acconsento all'uso editoriale con credito" obbligatoria | ☐ |
| 3.16 | Click "Invia" senza checkbox | Inline error sulla checkbox | ☐ |
| 3.17 | Spunta + "Invia" | Loader ~1.5s (simula upload), poi schermata "Ricevute. Le guardiamo a mano." con stamp | ☐ |
| 3.18 | Email modal automatico dopo 800ms | "Grazie Luca. Le tue foto sono in coda di revisione. Se le pubblichiamo te lo diciamo." | ☐ |
| 3.19 | Naviga a `/account` → tab nuova "Le mie foto" | Mostra le 5 foto inviate con stato "In revisione" + data invio | ☐ |
| 3.20 | (Stato simulato) Una foto viene approvata e pubblicata sulla Polaroid wall del trip Puglia | In `/account` → "Le mie foto" → foto cambia stato a "Pubblicata" + link al trip | ☐ |

### Criteri di accettazione
- [ ] L'upload è resiliente: se l'utente chiude il tab a metà, riapre la pagina e ritrova le foto già caricate (sessionStorage o IndexedDB)
- [ ] Ogni foto inviata ha sempre: trip + giorno + autore (anche se utente anonimo, raccogliere email + nome)
- [ ] Email di ricevuta contiene un riferimento `PHOTO-XXXXX` per future comunicazioni
- [ ] La Polaroid wall del trip mostra solo foto **approvate** (mai upload diretto)
- [ ] Il consenso editoriale è registrato con timestamp

### Edge cases
- Utente non loggato → al click "Invia" chiede email + nome prima di completare
- Foto duplicate (stesso hash) → warning "Questa foto sembra già caricata"
- Foto con EXIF di una destinazione diversa dal trip selezionato → soft warning, non blocca
- Privacy: foto con volti riconoscibili → micro-checkbox "Ho il consenso delle persone ritratte"

---

## Test trasversali (tutti e 3 i journey)

### Stati globali
- [ ] **Loading**: ogni async ha uno spinner o loader, mai una pagina vuota
- [ ] **Empty state**: account vuoto mostra `EmptyState` con CTA contestuale
- [ ] **Error state**: errori di rete simulabili con CVV `000` o paese vuoto in bespoke
- [ ] **Toast**: salva/rimuovi item mostra toast in basso, scompare dopo 2.5s

### Navigazione
- [ ] Click sul logo da qualsiasi pagina → home
- [ ] Browser back → torna al passo precedente del flow (booking step 2 → step 1, non a trip detail)
- [ ] Footer link → tutti portano a una pagina reale (no link rotti)

### Animazioni
- [ ] `page-enter` (220ms cross-fade) tra le pagine
- [ ] `rise` scaglionato sulle card delle liste
- [ ] Mappa SVG: `drawRoute` 2.4s + `popStop` 320ms scaglionato
- [ ] Email modal: scrim fade + modal rise

### Responsive (nice-to-have, non bloccante)
- [ ] @ 1024px → grid 2 colonne dove era 3
- [ ] @ 768px → tutto a colonna singola
- [ ] @ 375px (mobile) → header collassa, hero leggibile

### Accessibilità (audit veloce)
- [ ] Tutti i bottoni hanno testo o `aria-label`
- [ ] Focus visibile su tutti gli elementi interattivi
- [ ] Contrasto testo/sfondo ≥ 4.5:1 (specie clay-700 su cream-50)
- [ ] Tab order logico nei form

---

## Definition of Done

Il prototipo è pronto per una review esterna quando:
- ✅ Journey 1 + 2 passano integralmente senza issue P0/P1
- 🟡 Journey 3 ha almeno il punto di ingresso visibile (anche solo placeholder con "Coming soon")
- ✅ Smoke test pulito su Chrome, Safari, Firefox recenti
- ✅ Nessun warning React in console
- ✅ LocalStorage non cresce indefinitamente tra sessioni

---

*Versione 1.0 — manutenuto da Sofia.*
