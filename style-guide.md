# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Blue: hsl(246, 80%, 60%)

- Light red (work): hsl(15, 100%, 70%)
- Soft blue (play): hsl(195, 74%, 62%)
- Light red (study): hsl(348, 100%, 68%)
- Lime green (exercise): hsl(145, 58%, 55%)
- Violet (social): hsl(264, 64%, 52%)
- Soft orange (self care): hsl(43, 84%, 65%)

### Neutral

- Very dark blue: hsl(226, 43%, 10%)
- Dark blue: hsl(235, 46%, 20%)
- Desaturated blue: hsl(235, 45%, 61%)
- Pale Blue: hsl(236, 100%, 87%)

## Typography

### Body Copy

- Font size: 18px (card titles e.g. Work, Play)

### Font

- Family: [Rubik](https://fonts.google.com/specimen/Rubik)
- Weights: 300, 400, 500

- Report for
  Jeremy Robson

  Daily
  Weekly
  Monthly

  Work
  5hrs <!-- daily -->
  Previous - 7hrs <!-- daily -->
  32hrs <!-- weekly -->
  Previous - 36hrs <!-- weekly -->
  103hrs <!-- monthly -->
  Previous - 128hrs <!-- monthly -->

  Play
  1hr <!-- daily -->
  Previous - 2hrs <!-- daily -->
  10hrs <!-- weekly -->
  Previous - 8hrs <!-- weekly -->
  23hrs <!-- monthly -->
  Previous - 29hrs <!-- monthly -->

  Study
  0hrs <!-- daily -->
  Previous - 1hr <!-- daily -->
  4hrs <!-- weekly -->
  Previous - 7hrs <!-- weekly -->
  13hrs <!-- monthly -->
  Previous - 19hrs <!-- monthly -->

  Exercise
  1hr <!-- daily -->
  Previous - 1hr <!-- daily -->
  4hrs <!-- weekly -->
  Previous - 5hrs <!-- weekly -->
  11hrs <!-- monthly -->
  Previous - 18hrs <!-- monthly -->

  Social
  1hr <!-- daily -->
  Previous - 3hrs <!-- daily -->
  5hrs <!-- weekly -->
  Previous - 10hrs <!-- weekly -->
  21hrs <!-- monthly -->
  Previous - 23hrs <!-- monthly -->

  Self Care
  0hrs <!-- daily -->
  Previous - 1hr <!-- daily -->
  2hrs <!-- weekly -->
  Previous - 2hrs <!-- weekly -->
  7hrs <!-- monthly -->
  Previous - 11hrs <!-- monthly -->


<!-- @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
/* ==========================================================================================
Body Area
========================================================================================== */
body{
font-family: 'Rubik';
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: hsl(226, 43%, 10%);
}

/* ==========================================================================================
Grid Content Area
========================================================================================== */
.container{
    width: 65%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
}

/* ==========================================================================================
Profile Area
========================================================================================== */
.profile{
    /* grid-row-start: 1;
    grid-row-end: 3; */
    grid-row: span 2;
    /* display: flex;
    flex-direction: column; */
    display: grid;
    grid-template-rows: repeat(3, 1fr);
}

.profile > .report{
    filter: drop-shadow(0 5px 0 hsl(246, 80%, 60%));
    /* height: 54%; */
    grid-row: span 2;
    padding: 30px;
    background-color: hsl(246, 80%, 60%);
    border-radius: 10px;
    color: white;
    cursor:default;
}

.profile > .report > img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: solid 3px white;
    margin-bottom: 45px;
}

.profile > .report > p{
    font-size: 12px;
    margin: 0 0 5px 0 ;
    color: hsl(236, 100%, 87%);
} 

 .profile > .report > h1{
    font-weight: 300;
    margin: 0;
}

.profile > .timeframe{
    padding: 20px 30px;
    background-color:hsl(235, 46%, 20%);
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    border-radius: 0 0 10px 10px;
}

.profile > .timeframe > a{
    font-size: 15px;
    text-decoration: none;
    color: hsl(235, 45%, 61%);
}

.profile > .timeframe > a:hover{
    color: white;
    cursor: pointer;
}

.profile > .timeframe > a:focus{
    color: white;
}

/* ==========================================================================================
cards Area
========================================================================================== */
.items{
    border-radius: 10px;
}

.items h1{
    font-weight: 300;
    font-size: 48px;
    margin-top: 0.5em;
}

.icon{
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    height:70px;
}

.work>.icon{
    background-color: hsl(15, 100%, 70%);
}

.play>.icon{
    background-color: hsl(195, 74%, 62%);
}

.study>.icon{
    background-color: hsl(348, 100%, 68%);
}

.exercise>.icon{
    background-color: hsl(145, 58%, 55%);
}

.social>.icon{
    background-color: hsl(264, 64%, 52%);
}

.self-care>.icon{
    background-color: hsl(43, 84%, 65%);
}

.items>.icon> svg{
    position: relative;
    height: 4rem;
    margin-left: 55%;
    bottom: 11px;
}
.exercise>.icon>svg{
    position: relative;
    bottom: 5px;
}

.item-content{
    padding: 0 20px 30px 20px;
    background-color: hsl(235, 46%, 20%);
    color: white;
    border-radius: 10px;
    filter: drop-shadow(0 -25px hsl(235, 46%, 20%));
}

.item-content p{
    margin-top: 0;
    margin-bottom: 0;
    position: relative;
    width: 100%;
}

.item-content>p{
    display: inline;
}

.dot-group{
    display: inline-flex;
    float: right;
    justify-content: space-around;
    align-items: center;
    height: 1vh;
}
.dot{
    width: 4px;
    height: 4px;
    border-radius:50%;
    background: hsl(236, 100%, 87%);
    margin-right: 2px;
}

.item-content h1{
    margin-bottom: 8px;
}

.time{
    font-size: 13px;
    outline: none;
    text-decoration: none;
    color:hsl(236, 100%, 87%);
} -->