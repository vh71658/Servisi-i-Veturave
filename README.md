# Servisi i Veturave

Projekt i thjeshte per regjistrimin dhe menaxhimin e veturave ne nje servis.

## Teknologjite
- Frontend: Angular 17 dhe PrimeNG
- Backend: Node.js dhe Express

## Nisja e projektit
Duhet te jene te instaluara Node.js dhe npm.

Hap terminalin e pare:
```bash
cd backend
npm install
npm start
```
Backend-i hapet ne http://localhost:3000

Hap terminalin e dyte:
```bash
cd frontend
npm install
npm start
```
Frontend-i hapet ne http://localhost:4200

## Funksionet e perfunduara
- Shfaqja e veturave (GET /api/veturat)
- Shtimi i vetures (POST /api/veturat)
- Shikimi i nje veture (GET /api/veturat/:id)
- Fshirja e vetures (DELETE /api/veturat/:id)
- Lazy loading per faqet kryesore

## Planifikuar per vazhdim
- Klientet
- Sherbimet

Te dhenat per momentin ruhen ne memorie. Kur ndalet backend-i, veturat e shtuara fshihen dhe kthehen shembujt fillestare.

## Si kalon nje kerkese
Te forma e vetures plotesohen marka, modeli dhe targa. VeturaService dergon kerkesen POST ne `/api/veturat`. Backend-i e pranon ne `routes`, e dergon ne `controller`, pastaj ne `service` dhe `model`. Ne fund, pergjigjja kthehet ne frontend dhe shfaqet lista e veturave.
