# Antipsyche – Contenuti editoriali

**Guida per la redazione di nuovi contenuti**

Questo repository contiene **esclusivamente** i testi (articoli, recensioni, saggi) destinati alla pubblicazione sul sito **Antipsyché**, scritti come file **Markdown (.md)**.

---

##  1. Struttura del repository

```
antipsyche-post/
├─ assets/  
│  └─ img/
├─ post/
│  ├─ _template.md
│  ├─ filosofia/
│  ├─ letteratura/
│  ├─ linguistica/
|  └─ recensioni
└─ README.md
```

### Significato delle cartelle

- `post/`  
    Contiene **tutti i testi pubblicabili**.
    
- `post/_template.md`  
    **Modello obbligatorio** da copiare per ogni nuovo articolo.
    
- `post/filosofia/`, `post/letteratura/`, ecc.  
    Scegli **una sola cartella tematica** per ogni testo.
    
- `assets/img/`  
    (Opzionale) immagini locali, se non usi immagini esterne. **Preferibile inserimento diretto url da immagine sul web** per non sovraccaricare il repository interno.  
    

---

## 2. Come creare un nuovo articolo (OBBLIGATORIO)

### Duplica il template e sposta il nuovo file nella cartella giusta

- Apri `post/_template.md`
    
- Duplica il file 
	Tasto destro, "Crea una copia".
	
- Rinominalo in **kebab-case**, ad esempio:
    prova-di-post.md
    
- Spostalo nella cartella corretta in base alla tipologia di contenuto.

---

## 3. Compilare il frontmatter (la parte in alto tra `---`)

**Il frontmatter è obbligatorio**.  Il frontmatter contiene tutti i dati necessari perché il post possa essere correttamente "indicizzato" dal sito. Un file senza frontmatter **non può essere pubblicato**.

Esempio:

```yaml
---
title: Le voci del mondo
slug: le-voci-del-mondo
author: Robert Schneider
editor: Claudio Oreste Menafra
date: 2026-01-05


image: https://example.com/immagine.webp
image_alt: Descrizione dell’immagine

excerpt: Breve riassunto di 1–2 frasi dell’articolo.

categories:
  - Recensione
type: 
  - recensione
tags:
  - Letteratura
  - Romanzo
  - Musica

lang: it
draft: true

---
```

---
## 4. Scrivere il testo

- Usa **solo Markdown**. Obsidian ti aiuta a formattare senza stare a pensare a quali sono i caratteri da usare prima e dopo per determinare le strutture.
     
- I simboli più comuni comunque per formattare il testo sono:  
    - `*corsivo*`
        
    - `**grassetto**`
        
    - `>` per citazioni
    
- Le immagini nel testo sono opzionali ma tendezialmente sarebbe auspicabile avere sempre in apertura un'immagine di copertina. (Quelle del frontmatter servono a gestire il contenuto su altre pagine, quindi anche se le inserisci non le vedrai sulla pagina dell'articolo).
	- ``` ![brevissima caption immagine](URL) ```
---
##  5. Usare Obsidian

### Apertura del progetto (una tantum)

1. Clona il repository sul tuo computer
    
2. Apri la cartella `antipsyche-post` come **Vault Obsidian**
### Plugin utili

- **Obsidian Git** → per commit e push
    
- **Templates** → per duplicare `_template.md`

## 6. Come fare commit e push (workflow base)

Quando hai finito di scrivere o aggiornare un testo:

1. Apri Obsidian
    
2. Apri il plugin **Obsidian Git**
    
3. Scrivi un messaggio di commit chiaro, es:
    
    ```
    Aggiunta recensione su Robert Schneider
    ```
    
4. Fai **Commit**
    
5. Fai **Push**. Fine
---

## 7. Cose da NON fare

- Non modificare `_template.md`  
- Non cambiare la struttura delle cartelle  
- Non cancellare file altrui  
- Non usare Word / Google Docs  
- Non rimuovere campi dal frontmatter

---

## 8️⃣ In caso di dubbio

Se non sei sicuro:

- **lascia `draft: true`**
    
- chiedi prima di pubblicare
    
- meglio un campo in più che uno in meno
    

---

Grazie per il tuo lavoro ✍️  
Antipsyche