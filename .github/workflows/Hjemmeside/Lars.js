// LARS CLICKER 







var mp =0
var mpperclick =1
var clickBoost = 1
var mpboost=1
var mppersecond = 0
var gains =0

var prisGains = 20

var elever = 0
var elevboost = 1
var prisElever = 50
var elevAdd = 0

var medarbejdere =0
var medarbejderboost =1
var prisMedarbejdere = 500

var Landmænd=0
var Landmændboost=1
var prisLandmænd = 20000

var prisElevupgrade=200

var prisLøn = 7500

var prisWilly = 100000

var prisLars = 200000

var prisFitness = 250000
var fitVar = 0

var prisTshirt = 5000000

var prisDanfoss = 500000
var danfoss =0


//formatting
var ranges = [
    { divider: 1e21 , suffix: 'Sx'},
    { divider: 1e18 , suffix: 'Qi' },
    { divider: 1e15 , suffix: 'Qu' },
    { divider: 1e12 , suffix: 'T' },
    { divider: 1e9 , suffix: 'B' },
    { divider: 1e6 , suffix: 'M' },
    { divider: 1e3 , suffix: 'k' }
  ];
  
  function formatNumber(n) {    
    for (var i = 0; i < ranges.length; i++) {
      if (n >= ranges[i].divider) {
        return (n / ranges[i].divider).toFixed(2).toString() + ranges[i].suffix;
        
    }
    }
    return n.toString();
  }

// Pris opdatering + formatting
function update(){
    document.getElementById("GainsM").innerHTML = "Du har: " + (`${gains}`) + " gains"
    document.getElementById("mp").innerHTML = "Du har: " + formatNumber(`${mp.toFixed(2)}`) + " mælk🥛 " 
    document.getElementById("mps").innerHTML = "Du får: " + formatNumber(`${mppersecond.toFixed(2)}`) + " mælk per sekund"
    document.getElementById("Gains-pris").innerHTML ="Koster "+ formatNumber(`${prisGains.toFixed(2)}`)+" mælk"
    document.getElementById("Elev-upgrade-pris").innerHTML ="Koster "+ formatNumber(`${prisElevupgrade.toFixed(2)}`)+" mælk"
    document.getElementById("prisLøn").innerHTML = "Koster " +formatNumber(`${prisLøn}`)+" mælk"
    document.getElementById("Elev-pris").innerHTML ="Koster "+ formatNumber(`${prisElever.toFixed(2)}`)+" mælk"
    document.getElementById("Medarbejder-pris").innerHTML = "Koster " +formatNumber(`${prisMedarbejdere}`)+" mælk"
    document.getElementById("T-shirt-pris").innerHTML = "Koster " +formatNumber(`${prisTshirt}`)+" mælk"
    document.getElementById("Arla-pris").innerHTML = "Koster " +formatNumber(`${prisLandmænd}`)+" mælk"
    document.getElementById("Fitness-pris").innerHTML = "Koster " +formatNumber(`${prisFitness}`)+" mælk"
    document.getElementById("prisDanfoss").innerHTML = "Koster " +formatNumber(`${prisDanfoss}`)+" mælk"

}   
setInterval(update,10)

// Mælk per sekund
function mppersecondGet() {
    mppersecond = (elever * (elevAdd + 1)*elevboost) + (medarbejdere * medarbejderboost * 5) + (Landmænd * Landmændboost*20) + (danfoss * 500) * mpboost
    mp += mppersecond
}
setInterval(mppersecondGet, 1000)


// Click
function Mælk(){
mpperclick = gains * clickBoost + 1
mp += mpperclick
}
// Køb af gains upgrade
function GainsUpgrade(){
    if(mp>=prisGains){
        mp-=prisGains
        gains += 1
        prisGains*=1.2
}
}
//Køb af elev upgrade
function LektieUpgrade(){
if(mp>=prisElevupgrade){
    mp-=prisElevupgrade
    elevboost *= 2
    prisElevupgrade*=69
  
}
}
function LønForhøjelse(){
if(mp>=prisLøn){
    mp -=prisLøn
    medarbejderboost*=2
    prisLøn*=69
}
}
function Kok(){
    if(mp>=prisWilly){
        mp-=prisWilly
        elevboost*=1.5
        medarbejderboost*=1.5

        document.getElementById("Villy").remove()
    }
}
function Lars(){
    if (mp>=prisLars){
        mp-=prisLars
        Landmændboost *=5

        document.getElementById("Lars>Arla").remove()
    }
}
function Fitness(){
    if(mp>=prisFitness){
    mp -= prisFitness
    fitVar+=1
    document.getElementById("fitty").remove()
    }

// Elev base værdi plus 0.1 per medarbejder
    elevAdd = (0.1 * medarbejdere * fitVar)
}


function FjernTshirt(){
if(mp>=prisTshirt){
    mp -=prisTshirt
    elevboost *= 3
    medarbejderboost*=3
    clickBoost*=3
    Landmændboost*=3

    document.getElementById("pappi").src='Img/Gokkem.jpg'
    document.getElementById("pappi").style.height = "340px";
    document.getElementById("pappi").style.width= "450px"
    
    document.getElementById("T-shirt").remove()

}
}

// Køb af malkere
function ElevKøb(){
    if (mp>=prisElever){
        mp-=prisElever
        elever += 1
        prisElever*=1.2
    }
}
function MedarbejderKøb(){
    if(mp>=prisMedarbejdere){
        mp -= prisMedarbejdere
        medarbejdere += 1
        prisMedarbejdere *=1.2
    }
}
function ArlaKøb(){
    if(mp>=prisLandmænd){
        mp-=prisLandmænd
        Landmænd+=1
        prisLandmænd*=1.2
    }
}
function DanfossKøb(){
    if(mp>=prisDanfoss){
        mp -=prisDanfoss
        prisDanfoss*1.2
        danfoss+=1
    }
}

