1. Envoie de données par "get"
   ==> on retrouve les données envoyé pa le formulaire dans l'onglet

2. Envoie de données par "post"
   ==> les données sont envoyées mais pas visibles dans l'onglet
   ===> Plus sécurisé et utiliser JS pour l'envoie des données

3. Si notre formulaire envoie des "fichiers", pas seulement des données
==> il faudra mettre : (s'utilise qd on fera du react et des API)
<form method="post" action="javascript:void(0)" enctype="multipart/form-data">

4. Les input : plusieurs types
   a) Text
   b) Number
   c) Email (logique quand on doit demander à l'utilisateur de rentrer une adresse mail)
   !!! Qd on a près d'un mot de passe, un petit oeil, c'est en js, on change le type de l'input et il passe en "texte""  
    d) tel (pour un téléphone)
   !!! Cela ouvrira le paver numérique sur le téléphone (sur ordi fonctionne pas)
   !!!
   e) File
   ==> on peut sélectionné qu'un fichier à la fois
   ==> ou alors sélectionné tous les fichiers que l'on veut en 1 fois
   ==> et si on veut supprimer une des images ou fichier (on doit tout recommencer)
   ==> si on met :
   accept="image/\*" ==> accepte tous les fichiers images par défaut, et qd on clique sur "parcourir", il n'y aura aucun fichier pdf qui sera visible, car pas accepté
   f) Date
   ==> Là aussi, on en refait un soi-même car celui de base pas très customisable
   g) les "radio" :
   ==> il faut qu'ils partagent le même "name", car ausinon, on peut cocher plusieurs bouton sà la fois.
   Et il faut une value différente pour tous
   h) Textarea :
   Pour les grosses zones de texte
   nombre de lignes : rows = 3 (après 3 colonnes; ca devient scrollable)
   nombre de caractère : cols = 50 (après 50 caractères, retour à la ligne)
   i) Select :
   Menu déroulant (il y a pas de placeholder)
   ==> 1ere option, pas value (car c'est le titre qui permet après de choisir dans la liste)

5) Les attributs :
   a) placeholder :
   Pour définir un petit texte pour montrer à l'utilisateur ce qu'il doit mettre
   b) required:
   ==> on doit le spécifié pour dire qu'un champ doit être complété pour être envoyé
   c) readonly :
   ==> ce sont des boutons qui sont remplis avant, mais on pourra pas changer les données (exemple, on reprend les données d'un utilisateur et ses données sont reprises et les champs pré-remplis)
   d) disabled :
   ==> le champ est complètement désactivé, on peut plus intéragir avec l'input etc
   f) autocomplete:
   ==> permettre de faire en sorte que la personne qui met met sur son ordi toujours la même adresse mail, elle se mettre directement à la place
   g) maxlength :
   Nombre de caractères maximum que l'on peut mettre
   h) step :
   Dans les input de type (number) permet avec les fleches sur le côté, et faire augmenter les chiffres pas de 1 à 2 mais de 5 à 10 par exemple.
   i) checked :
   C'est pour par exemple, sur un site, ou qd on scanne des données, tout est coché à l'avance. Et donc on est abonné à plein de newsletter à la fois (UE interdit)
   j) spellcheck :
   Permet d'activer le correcteur d'orthographe automatique (exemple sur le textarea)
   on doit mettre spellcheck = true ou false
   k) autofocus :
   Mis sur un champ et que ce champ ai le focus sur le champ (ca veut dire que l'input sera déjà prêt pour être rempli).
   On le fait sur le 1er et 1 fois seulement (très bien pour personne avec handicap)
   l) tabindex :
   Tabindex par défaut est le 0 (tous les boutons et input on un tabindex de 0), pas une div etc ==> eux un tabindex de -1.
   Grâce à cela, cela permet de rentre des éléments sélectionnable.

   /**********************************\*\*\***********************************/
   /********\*\*\*\*********/
   /-- Les sélecteurs --/
   /********\*\*\*\*********/

   1. A:out-of-range :
      il faut mettre un max et un min sur un input (min = 0 et max = 10)
      ==> et bien qd je mettrai une valeur en-dessous de 0 et au-dessus de 10, l'input sera rouge (si on met la css ==> border red etc)
   2. A:valid et a:invald ==> permet de voir ce qui est valide ou invalide
