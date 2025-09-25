/_ ---------------- _/
/_ Liens utiles _/
/_ ---------------- _/

1. Lien vers le tuto en ligne "statique"
   1.a) https://css-tricks.com/snippets/css/a-guide-to-flexbox

2. ?Lien vers tuto intéractif "dynamique"
   2.a)https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/

/_ ---------------- _/
/_ A retenir _/
/_ ---------------- _/

1. vh - lvh :
   ==> On peut décider de faire une homepage avec max-height: 100vh;
   ===> Mais au scroll sur mobile, la barre de recherche part et si on met pas "lvh"
   ====> ca permet de ne pas avoir de sautement à la ligne
   =====> Mais si on fait un min-height: 100vh (pas besoin)

2. display : flex
   ==> par défaut ==> flex-direction: row (mais commence au début)

3. Row-reverse
   ==> Les éléments vont se mettre (commencer à la fin)
   ===> Les éléments vont être aussi invrsés de sens

4. height: fit-content
   ==> Cela revient à dire que la hauteur prend la hauteur de l'élement et ses paddings, pas plus

5. align-items
   ==> Par défaut ==> en stretch (donc les éléments peuvent paraître étirés).

6. align-items : baseline
   ==> Il ne fonctionne que si on est en flex-direction : row
   ===> Si un des éléments que l'on doit aligner a une font-size +élevée... ils restent alignés sur la même ligne

/_ ---------------------- _/
/_ Les notions + avancées _/
/_ -----------------------_/

1. Flex-wrap :wrap
   ==> Si les éléments débordent, on peut mettre flex-wrap : wrap (permettent qu'aucun élément ne sortent de son container)

2. Align-content : start/end/center
   ==> Permet de pouvoir gérer l'espacement entre les différents éléments (et ça on peut pas faire avec le wrap)
   ===> Et donc là, le gap, va permettre de directement mettre un espacement au lieu d'utiliser (margin et padding)
   ====>

3. Align-self : start/end etc
   ==> Là, si on veut cibler 1 élément et lui le bouger et le mettre en start ou en end.

4. Order :
   ==> S'il y a 12 images, changer l'ordre des images de manière aléatoire (pour pas toujours avoir la même chose, on fait un random de 1 à 12).
