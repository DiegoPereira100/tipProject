function calcTip(e) {
  e.preventDefault();
  let bill = document.getElementById('bill').value;
  console.log(bill);
  let service = document.getElementById('service').value;
  console.log(service);
  let peopleSplit = document.getElementById('peopleSplit').value;
  console.log(peopleSplit);

  if(bill == "" || service == 0) {
    alert("Por favor, preencha os campos.")
    return;
  }

  if(peopleSplit == "" || peopleSplit <= 1) {
    peopleSplit = 1;
    document.getElementById('each').style.display = "none";
  } else {
    document.getElementById('each').style.display = "block";
  }

  let total = (bill * service) / peopleSplit;
  total = total.toFixed(2);

  document.getElementById('result').innerHTML = total;
  document.getElementById('totalTip').style.display = "block";
  console.log(total)
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";
document.getElementById('tipForms').addEventListener('submit', calcTip);