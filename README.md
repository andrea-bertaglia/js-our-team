# Esercizio: Our Team

### repo: js-our-team

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

> Wayne Barnett Founder & CEO wayne-barnett-founder-ceo.jpg
> Angela Caroll Chief Editor angela-caroll-chief-editor.jpg
> Walter Gordon Office Manager walter-gordon-office-manager.jpg
> Angela Lopez Social Media Manager angela-lopez-social-media-manager.jpg
> Scott Estrada Developer scott-estrada-developer.jpg
> Barbara Ramos Graphic Designer barbara-ramos-graphic-designer.jpg

## MILESTONE 0

Creare l’array di oggetti con le informazioni fornite.

### Svolgimento

- creo l'array di oggetti

## MILESTONE 1

Stampare su console le informazioni di nome, ruolo e la stringa della foto per ogni membro del team

### Svolgimento

- per ogni elemento dell'array
  stampo i dati in console

## MILESTONE 2

Stampare le stesse informazioni su DOM sottoforma di stringhe

### Svolgimento

- prelevo l'elemento body
- creo un elemento ul e lo aggiungo al body
- per ogni elemento dell'array
  - creo un elemento li
  - aggiungo i dati nell'elemento (nome, ruolo, immagine)
  - aggiungo gli elementi li all'elemento ul

## BONUS 1

Trasformare la stringa foto in una immagine effettiva

### Svolgimento

- modifico il template literal dell'elemento li aggiungendo un div che contenga a sua volta l'immagine
- aggiungo il path ./img alla stringa relativa al nome del file

## BONUS 2

Organizzare i singoli membri in card/schede.

### Svolgimento

- modifico il layout generale su HTML/CSS
- prelevo l'elemento row dal DOM
- per ogni elemento dell'array
  - creo un elemento col
  - aggiungo nell'HTML tramite template literal le immagini e la descrizione
  - aggiungo l'elemento col all'elemento row
