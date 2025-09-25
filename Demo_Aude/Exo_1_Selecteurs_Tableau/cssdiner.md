# Réponses CSS Diner
## 1) Select the plates :
HTML :
```html
    <div class="table">
        <plate />
        <plate />
    </div>
```

Selecteur par balise
CSS : 
```css
    plate {
    }
```

## 2) Select the bento boxes :
HTML :
```html
    <div class="table">
        <bento />
        <plate />
        <bento />
    </div>
```

Selecteur par balise
CSS :
```css
    bento {

    }
```

## 3) Select the fancy plate :
HTML : 
```html
    <div class="table">
        <plate id="fancy" />
        <plate />
        <bento />
    </div>
```

Selecteur via id 
CSS : 
```css
    #fancy {

    }
    /* Ok aussi mais pas utilisé */
    plate#fancy {

    }
```

## 4) Select the apple on the plate :
HTML :
```html
    <div class="table">
        <bento />
        <plate>
            <apple />
        </plate>
        <apple />
    </div>
```

Selecteur descendant (parent/enfant)
CSS : 
```css
    plate apple {

    }
```

## 5) Select the pickle on the fancy plate :
HTML :
```html
    <div class="table">
        <bento>
            <orange />
        </bento>
        <plate id="fancy">
            <pickle />
        </plate>
        <plate>
            <pickle />
        </plate>
    </div>
```

CSS :
```css
    #fancy pickle {

    }
    /* works too mais pas le plus utilisé */
    plate#fancy pickle {

    }
```

## 6) Select the small apples :
HTML :
```html
    <div class="table">
        <apple />
        <apple class="small" />
        <plate>
            <apple class="small" />
        </plate>
        <plate />
    </div>
```

Selecteur par nom de classe :
CSS : 
```css
    .small {

    }
    /* Plus précis mais c'est pas ce qu'il attend */
    apple.small {

    }

```

## 7) Select the small oranges :
HTML :
```html
    <div class="table">
        <apple />
        <apple class="small" />
        <bento>
            <orange class="small" />
        </bento>
        <plate>
            <orange />
        </plate>
        <plate>
            <orange class="small" />
        </plate>
    </div>
```
CSS : 
```css
    orange.small {

    }
```

## 8) Select the small oranges in the bentos :
HTML :
```html
    <div class="table">
        <bento>
            <orange />
        </bento>
        <orange class="small" />
        <bento>
            <orange class="small" />
        </bento>
        <bento>
            <apple class="small" />
        </bento>
        <bento>
            <orange class="small" />
        </bento>
    </div>
```

CSS : 
```css
    bento orange.small {

    }
```

## 9) Select all the plates and bentos :
HTML :
```html
    <div class="table">
        <pickle class="small" />
        <pickle />
        <plate>
            <pickle />
        </plate>
        <bento>
            <pickle />
        </bento>
        <plate>
            <pickle />
        </plate>
        <pickle />
        <pickle class="small" />
    </div>
```
CSS :
```css
    plate, bento {
        
    }
```

## 10) Select all the things! :
HTML :
```html
    <div class="table">
        <apple />
        <plate>
            <orange class="small" />
        </plate>
        <bento />
        <bento>
            <orange />
        </bento>
        <plate id="fancy" />
    </div>
```
CSS :
```css
    * {

    }
```

## 11) Select everything on a plate :
HTML : 
```html
    <div class="table">
        <plate id="fancy">
            <orange class="small" />
        </plate>
        <plate>
            <pickle />
        </plate>
        <apple class="small" />
        <plate>
            <apple />
        </plate>
    </div>
```

CSS : 
```css
    plate * {

    }
```
 
## 12) Select every apple that's next to a plate :
HTML :
```html
    <div class="table">
        <bento>
            <apple class="small" />
        </bento>
        <plate />
        <apple class="small" />
        <plate />
        <apple />
        <apple class="small" />
        <apple class="small" />
    </div>
```

CSS :
```css
    plate + apple{

    }
```

## 13) Select the pickles beside the bento :
HTML :
```html
    <div class="table">
        <pickle />
        <bento>
            <orange class="small" />
        </bento>
        <pickle class="small" />
        <pickle />
        <plate>
            <pickle />
        </plate>
        <plate>
            <pickle class="small" />
        </plate>
    </div>
```
CSS :
```css
    bento ~ pickle{

    }
```

## 14) Select the apple directly on a plate :
HTML :
```html
    <div class="table">
        <plate>
            <bento>
                <apple />
            </bento>
        </plate>
        <plate>
            <apple />
        </plate>
        <plate />
        <apple />
        <apple class="small" />
    </div>
```

CSS :
```css
    plate > apple {

    }
```

## 15) Select the top orange :
HTML :
```html
    <div class="table">
        <bento />
        <plate />
        <plate>
            <orange />
            <orange />
            <orange />
        </plate>
        <pickle class="small" />
    </div>
```

CSS :
```css
    orange:first-child {

    }

```

## 16) Select the apple and the pickle on the plates :
HTML :
```html
    <div class="table">
        <plate>
            <apple />
        </plate>
        <plate>
            <pickle />
        </plate>
        <bento>
            <pickle />
        </bento>
        <plate>
            <orange class="small" />
            <orange />
        </plate>
        <pickle class="small" />
    </div>
```
CSS : 
```css
    apple,plate pickle:only-child {

    }
    plate apple:only-child, plate pickle:only-child {

    }
```

## 17) Select the small apple and the pickle :
HTML :
```html
    <div class="table">
        <plate id="fancy">
            <apple class="small" />
        </plate>
        <plate />
        <plate>
            <orange class="small" />
            <orange />
        </plate>
        <pickle class="small" />
    </div>
```

CSS :
```css
   apple.small , pickle:last-child{

   }
```

## 18) Select the 3rd plate :
HTML :
```html
    <div class="table">
        <plate />
        <plate />
        <plate />
        <plate id="fancy" />
    </div>
```

CSS :
```css
    plate:nth-child(3) {
        
    }
```

## 19) Select the 1st bento :
HTML :
```html
    <div class="table">
        <plate />
        <bento />
        <plate>
            <orange />
            <orange />
            <orange />
        </plate>
        <bento />
    </div>
```

CSS :
```css
    bento:nth-last-child(3){

    }
    bento:nth-child(2){

    }
```

## 20) Select first apple :
HTML:
```html
    <div class="table">
        <orange class="small" />
        <apple />
        <apple class="small" />
        <apple />
        <apple class="small" />
        <plate>
            <orange class="small" />
            <orange />
        </plate>
    </div>
```
CSS :
```css
   apple:first-of-type {

   } 
```

## 21) Select all even plates :
HTML :
```html
    <div class="table">
        <plate />
        <plate />
        <plate />
        <plate />
        <plate id="fancy" />
        <plate />
    </div>
```

CSS :
```css
    plate:nth-of-type(even) {

    }
```

## 22) Select every 2nd plate, starting from the 3rd :
HTML :
```html
    <div class="table">
        <plate />
        <plate>
            <pickle class="small" />
        </plate>
        <plate>
            <apple class="small" />
        </plate>
        <plate />
        <plate>
            <apple />
        </plate>
        <plate />
    </div>
```

CSS :
```css
    plate:nth-of-type(2n+3){

    }
```

## 23) Select the apple on the middle plate :
HTML :
```html
    <div class="table">
        <plate id="fancy">
            <apple class="small" />
            <apple />
        </plate>
        <plate>
            <apple class="small" />
        </plate>
        <plate>
            <pickle />
        </plate>
    </div>
```

CSS :
```css
    apple:only-of-type {

    }
```

## 24) Select the last apple and orange :
HTML :
```html
    <div class="table">
        <orange class="small" />
        <orange class="small" />
        <pickle />
        <pickle />
        <apple class="small" />
        <apple class="small" />
    </div>
```

CSS :
```css
    orange:last-of-type, apple:last-of-type {

    }
```

## 25) Select the empty bentos :
HTML :
```html
    <div class="table">
        <bento />
        <bento>
            <pickle class="small" />
        </bento>
        <plate />
        <bento />
    </div>
```

CSS : 
```css
    bento:empty {

    }
```

## 26) Select the big apples :
HTML :
```html
    <div class="table">
        <plate id="fancy">
            <apple class="small" />
        </plate>
        <plate>
            <apple />
        </plate>
        <apple />
        <plate>
            <orange class="small" />
        </plate>
        <pickle class="small" />
    </div>
```

CSS :
```css
    apple:not(.small){

    }
```

## 27) Select the items for someone :
HTML :
```html
    <div class="table">
        <bento>
            <apple class="small" />
        </bento>
            <apple for="Ethan" />
        <plate for="Alice">
            <pickle />
        </plate>
        <bento for="Clara">
            <orange />
        </bento>
        <pickle />
    </div>
```

CSS 
```css
    [for] {

    }
```
 
## 28) Select the plates for someone :
HTML:
```html
    <div class="table">
        <plate for="Sarah">
            <pickle />
        </plate>
        <plate for="Luke">
            <apple />
        </plate>
        <plate />
        <bento for="Steve">
            <orange />
        </bento>
    </div>
```

CSS : 
```css
    plate[for] {

    }
```

## 29) Select Vitaly's meal :
HTML :
```html
    <div class="table">
        <apple for="Alexei" />
        <bento for="Albina">
            <apple />
        </bento>
        <bento for="Vitaly">
            <orange />
        </bento>
        <pickle />
    </div>
```

CSS :
```css
    [for="Vitaly"]{

    }
```

## 30) Select the items for names that start with 'Sa'
HTML :
```html
    <div class="table">
        <plate for="Sam">
            <pickle />
        </plate>
        <bento for="Sarah">
            <apple class="small" />
        </bento>
        <bento for="Mary">
            <orange />
        </bento>
    </div>
```

CSS :
```css
    [for^="Sa"]{

    }
```

## 31) Select the items for names that end with 'ato'
HTML :
```html
    <div class="table">
        <apple class="small" />
        <bento for="Hayato">
            <pickle />
        </bento>
        <apple for="Ryota" />
        <plate for="Minato">
            <orange />
        </plate>
        <pickle class="small" />
    </div>
```

CSS :
```css
    [for$="ato"]{

    }
```

## 32) Select the meals for names that contain 'obb'
HTML :
```html
    <div class="table">
        <bento for="Robbie">
            <apple />
        </bento>
        <bento for="Timmy">
            <pickle />
        </bento>
        <bento for="Bobby">
            <orange />
        </bento>
    </div>
```

CSS :
```css
    [for*="obb"]{
        
    }
```