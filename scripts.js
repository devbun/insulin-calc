var InsulinList = []

class Insulin {
    constructor(name, varname, concentration, volume, unit, form, note, color) {
      this.name = name;
      this.varname = varname;
      this.concentration = concentration;
      this.volume = volume;
      this.unit = unit;
      this.form = form;
      this.note = note; //add additional notes like needle tips or pack sizes
      this.color = color ? color : "#FEFAE4";

      InsulinList.push(this)
    }

    calculateQuantity = () => {
      let quantity = document.getElementById('quantity').value;
      let interval = document.getElementById('Daily').checked ? 1 : (1/7) 
      let days = document.getElementById('days').value;

      let resultNum = document.getElementById('result-number');
      let resultRest = document.getElementById('result-rest');

      let total = ((quantity * days * interval) / (this.concentration * this.volume))

      resultNum.textContent = (total == Math.ceil(total)) ? total : total.toFixed(2)
      resultRest.textContent = this.name + " " + this.form + "s"

      let notes = document.getElementById('notes');
      if (this.note) {
        notes.textContent = "Note: " + this.note;
      } else {
        notes.textContent = ""
      }
    } 

    calculateSupply = () => { 
        let quantity = document.getElementById('quantitySupply').value;
        let interval = document.getElementById('DailySupply').checked ? 1 : (1/7) ;
        let dosageSupply = document.getElementById('dosageSupply').value;
        // let measurement = document.getElementById('Units').checked ? "units" : "mls"; //not used yet
  
        let resultNum = document.getElementById('result-number-Supply');
        let resultRest = document.getElementById('result-rest-Supply');

        let total = (this.concentration * this.volume * quantity) / (dosageSupply * interval)


        resultNum.textContent = (total == Math.ceil(total)) ? total : total.toFixed(2)
        resultRest.textContent = "days supply of " + this.name + " " + this.form + "s"
  
        let notes = document.getElementById('notes-supply');
        if (this.note) {
          notes.textContent = "Note: " + this.note;
        } else {
          notes.textContent = ""
        }
      } 

  }

  function addButtons(){
        for(let i = 0; i < InsulinList.length; i++) {
            const btn = document.createElement('span');
            btn.setAttribute('value', InsulinList[i].name);
            btn.setAttribute('id', InsulinList[i].name);
            btn.textContent = InsulinList[i].name;
            btn.setAttribute('type', 'button');
            btn.setAttribute('class', 'btn');
            btn.setAttribute('onclick', InsulinList[i].varname + ".calculateQuantity()");
            btn.style.backgroundColor = InsulinList[i].color;
            document.getElementById('buttons').appendChild(btn)
        }
    }

    function addButtons2(){
        for(let i = 0; i < InsulinList.length; i++) {
            const btn = document.createElement('input');
            btn.setAttribute('value', InsulinList[i].name);
            btn.setAttribute('id', InsulinList[i].name);
            btn.setAttribute('type', 'button');
            btn.setAttribute('class', 'btn');
            btn.setAttribute('onclick', InsulinList[i].varname + ".calculateSupply()");
            btn.style.backgroundColor = InsulinList[i].color;
            document.getElementById('buttonsSupply').appendChild(btn)
        }
    }

  const humalog = new Insulin("Humalog Vial", "humalog", 100, 10, "mg", "vial", "", "#E3FEC8")
  const humalogpen = new Insulin("Humalog Kwikpen", "humalogpen", 100, 3, "mg", "vial", "There's also a high dose version", "#E3FEC8")
  const humaloghighpen = new Insulin("Humalog High C", "humaloghighpen", 200, 3, "mg", "vial", "There's also a low dose version", "#E3FEC8")
  const trulicity = new Insulin("Trulicity 1.5/0.5", "trulicity", 1.5, 1, "mg", "pen", 'Boxes of 4 - usually need 3 boxes (12 pens)', "#FAC1C1")
  const trulicitysmall = new Insulin("Trulicity 0.75/0.5", "trulicitysmall", 0.75, 1, "mg", "pen", 'Boxes of 4 - usually need 3 boxes (12 pens)', "#FAC1C1")
  const toujeo = new Insulin("Toujeo Solostar", "toujeo", 300, 1.5, "ml", "pen", "Not the MAX version", "#F6E9FD")
  const toujeomax = new Insulin("Toujeo Max Solostar", "toujeomax", 300, 3, "ml", "pen", "there is also non-Max version", "#F6E9FD")
  const novolog = new Insulin("Novolog Flexpen", "novolog", 100, 3, "ml", "pen", '', "#C4F1F1")
  const novologfill = new Insulin("Novolog Penfill", "novologfill", 100, 3, "ml", "pen", "", "#C4F1F1")
  const novologvial = new Insulin("Novolog 10ml Vial", "novologvial", 100, 10, "ml", "pen", "", "#C4F1F1")
  const tresiba300 = new Insulin("Tresiba 300IU", "tresiba300", 100, 3, "ml", "pen", "There is also 600IU version", "#f9f9f9")
  const tresiba600 = new Insulin("Tresiba 600IU", "tresiba600", 200, 3, "ml", "pen", "There is also 300IU version", "#f9f9f9")
  const levemir = new Insulin("Levemir Flextouch", "levemir", 100, 3, "ml", "pen")
  const lantus = new Insulin("Lantus Solostar", "lantus", 100, 3, "ml", "pen")
  const basaglar = new Insulin("Basaglar Kwikpen", "basaglar", 100, 3, "ml", "pen")
  const victoza = new Insulin("Victoza", "victoza", 6, 3, "ml", "pen")

  //Don't pout these; too expensive/complicated
  // const Humira = new Insulin("Humira", "Humira", 40, "ml", "pen", "suuuuper untested")

    //Make these functions one function that loops through

  function quantityCalcPage() {
    localStorage.setItem("startPage", "quantity");
    console.log("quantity page load")
    startPage = "quantity"
    document.getElementById("quantity-calc").classList.add('.btn-selected');  //doesnt work
    document.getElementById("supply-calc").classList.remove('.btn-selected');

    document.getElementById("main").style.visibility = 'visible';
    document.getElementById("main").style.height = '500px';

    document.getElementById("main2").style.visibility = 'hidden';
    document.getElementById("main2").style.height = '0px';

    document.getElementById("quantity-calc").classList.add("tab-selected");
    document.getElementById("supply-calc").classList.remove("tab-selected");
    
  }

  function supplyCalcPage() {
    localStorage.setItem("startPage", "supply");
    console.log("supply page load")
    startPage = "supply"
    document.getElementById("quantity-calc").classList.remove('.btn-selected'); //doesnt work
    document.getElementById("supply-calc").classList.add('.btn-selected');

    document.getElementById("main").style.visibility = 'hidden';
    document.getElementById("main").style.height = '0px';

    document.getElementById("main2").style.visibility = 'visible';
    document.getElementById("main2").style.height = '500px';

    document.getElementById("supply-calc").classList.add("tab-selected");
    document.getElementById("quantity-calc").classList.remove("tab-selected");
  }

  var startPage = ""

  function startUp() {

    addButtons()
    addButtons2()

    startPage = localStorage.getItem("startPage") || "quantity";

    if (startPage == "quantity") {
      quantityCalcPage()
    } else if (startPage == "supply") {
      supplyCalcPage()
    } else {
      alert("error what page")
    }

  }

  startUp()
