var rndNmb;
var zaehler = 5;

function initialisiere() {
  eingabe1.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      ausgeben();
      klick();
    }
  })
}

function klick() {
  if (document.getElementById('eingabe1').value == ''){
    alert('Bitte eine Zahl eingeben :)');
    zaehler++;
  }
  if(zaehler>0)
  {
    zaehler--;
    document.getElementById("zaehlen").innerHTML = zaehler;
    if ((zaehler == 0) && (rndNmb != document.getElementById('eingabe1').value))
    {
      document.getElementById("deadscreen").style.backgroundImage = "url('youdied.png')";
      document.getElementById("imgchange").style.backgroundImage = 'none';
      document.getElementById("alles").style.display = 'none';
      document.getElementById('tryAgain').style.display = 'block';
    }
  }
  document.getElementById('eingabe1').value = '';
}

function Randnmb() {
  rndNmb = Math.floor(Math.random() *(30) + 1);
}

function clearAll() {
  document.getElementById("zuklein").innerHTML = '&nbsp;';
  document.getElementById("zuhoch").innerHTML = '&nbsp;';
}

function ausgeben() {
  var eingabebenutzer = document.getElementById("eingabe1").value;
  if (zaehler > 0) {
    if (eingabebenutzer == rndNmb) {
      document.getElementById("deadscreen").style.backgroundImage = "url('winscreen.jpg')";
      document.getElementById("imgchange").style.backgroundImage = 'none';
      document.getElementById("alles").style.display = 'none';
      document.getElementById('tryAgain').style.display = 'block';
    } else if (eingabebenutzer < rndNmb) {
      document.getElementById("zuklein").innerHTML = 'zu klein :(';
      setTimeout(clearAll, 2000);
    } else if ((eingabebenutzer > 30) || (eingabebenutzer < 1)) {
      alert('Bitte eine Zahl von 1 - 30 eingeben.');
      zaehler++;
    } else {
      document.getElementById("zuhoch").innerHTML = 'zu hoch :(';
      setTimeout(clearAll, 2000);
    }
  }
}

function neustart(){
  location.reload();
}
window.onload = Randnmb();
