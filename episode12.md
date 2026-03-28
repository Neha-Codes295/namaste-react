<!-- ***Episode 12 - Part 1***  -->
<!-- Building our own store
Redux Store
Redux works in the Data Layer
used for state management

Redux is not mandatory, use only when req
Redux & React r separate libraries

Zustand can also be used

Redux offers easy debugging

 -->





<!-- ***Episode 12 - Part 2***  -->
<!-- 
React & Redux is great combo

2 other libs:
1. React-Redux
2. Redux Toolkit(RTK: std way to write Redux logic)

 -->





<!-- ***Episode 12 - Part 3***  -->
<!-- let's build cart
to store itmes in cart, use Redix Store

RTK is a big JS object , kept in global central place
SLices are there inside store, small porttion of store, to keep data separate
cartSlice, useSlice

Write Data
when we click on add to cart on menu  , it dispatches an icon-> calls fxn(Reducer) which modifies cart

Read Data
Use a selector & then selector gives data to cart
i.e. called subscribing to the store(using selector)

### Working flow (Redux cart )
```
        ||================================||
        ||  UI — menu item  [ ADD ]      ||
        ||================================||
                      |
                      |  user clicks ADD
                      v
        ||================================||
        ||  dispatch (action)            ||
        ||================================||
                      |
                      v
        ||================================||
        ||  reducer  —  fn()             ||
        ||================================||
                      |
                      |  updates state
                      v
        ||================================||
        ||           STORE               ||
        ||  ||------------------------|| ||
        ||  ||  Cart slice  (changed) || ||
        ||  ||------------------------|| ||
        ||  ||  User slice             || ||
        ||  ||------------------------|| ||
        ||  ||  …other slices          || ||
        ||  ||------------------------|| ||
        ||================================||
                      |
                      |  read state
                      v
        ||================================||
        ||  selector                     ||
        ||  (subscribing to the store)   ||
        ||================================||
                      |
                      v
        ||================================||
        ||  UI — header  [ Cart  (3) ]   ||
        ||================================||
```


1. **click** on **ADD**
2. **dispatch (action)** — box **A**
3. **reducer** **fn()** runs on that action
4. **Store** holds a **Slice**; reducer updates it
5. UI is **subscribed**; **Selector** pulls the new slice data
6. **Cart** on screen is **updated** (count / items)

-->




<!-- ***Episode 12 - Part 4***  -->
<!-- 
Selectore is justa hook

build whole cart
 -->




<!-- ***Episode 12 - Part 5***  -->
<!-- imp notes
when using selectors, make sure to subscribe right/correct portion of store
else big performance loss

 -->




<!-- ***Episode 12 - Part 6***  -->
<!-- mistake of reducers
when making appStore: use Reducer(1 for whole app) & it can have multiple small reducers

when making slice: use Reducers as it uses multiple small reducers
exporting time only one reduer
 -->



<!-- ***Episode 12 - Part 7***  -->
<!-- 
in vanilla redux, there was big problem with state in slice
don't mutate state there , in older redux    , return was mandatory

In RTK, we can & we have to , no forcing to return
Redux uses immer in BTS

RTK: either mutate the existing State or return a new State
 -->





<!-- ***Episode 12 - Part 8***  -->
<!-- 
Redux Dev Tools

go to Redux tool kit web & study RTK Query





 -->