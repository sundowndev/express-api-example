# To do list

### Routes

- PUT /user/me (tous les champs sauf password) (200 ok avec en body le user après édition)
- PUT /user/me (si tu vois password et new password, ou mets une autre route si tu veux) (200 ok avec le user après édition mais sans mot de passe bien sûr)
- POST /auth/rester-password (email) (optionnel si tu te sens pas chaud) (200 ok)

### Other

- ESlint test

## Specs

**Pourvoir s'inscrire, se connecter, réinitialiser mot de passe (non connecté) :**

- POST /auth/register (firstname, lastname, email, password)
        (201 created)
- POST /auth/login (email, password) (200 ok avec en body le user et en header le token d'authentification)
- POST /auth/rester-password (email) (optionnel si tu te sens pas chaud)
        (200 ok)

**Pouvoir voir / modifier / supprimer son profil (connecté):**

- PUT /user/me (tous les champs sauf password) (200 ok avec en body le user après édition)
- PUT /user/me (si tu vois password et new password, ou mets une autre route si tu veux) (200 ok avec le user après édition mais sans mot de passe bien sûr)
- DELETE /users/me (supprimer le profil) (204 no content, car le user est supprimé et tu ne me renvoi rien)
- GET /users/me (renvoi le user) (200 ok avec en body le user) pouvoir gérer les notes (connecté)

**Notes:**

- POST /notes (title optionnel, text optionnel, lié a user connecté) (201 creatred)
- PUT /notes/id (title optionnel, text optionnel) (200 ok avec en body la noté modifiée)
- DELETE /notes/id (supprimer la note) (204 no content)
- GET /user/me/ notes (toutes notes du user connecté)
- GET /notes/id (get la note de cet id si elle appartient au user connecté)

**Finito ! C'est un crud avec un minimum de vérif qui sont :**

- Est-ce que le user est connecté ou non
- Est-ce que le user est propriétaire de la ressource qu'il modifie ou supprime

C'est tout ce qu'il y a besoin de vérifier.

**Pour tout ce qui est erreur il n'y a que 4 règles à respecter :**

- Pas le droit car pas connecté : 401
- Pas le droit car connecté mais ne t'appartient pas : 403
- Ressource n'existe pas : 404
- Erreur de validation (si tu veux en faire) : 400 bad request
