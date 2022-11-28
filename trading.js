const p = document.getElementById("p");
let button = document.getElementById("button");

let notationContainer = document.getElementById("notation-container");
let gananciaContainer = document.getElementById("id-ganada");
let perdidaContainer = document.getElementById("id-perdida");

let i1 = document.getElementById("i1").value;
let i2 = document.getElementById("i2").value;
let num = prompt("Ingese el capital inicial");
let tradeNúmero = 0;
let tradeArray = [0];
let tradePrice = [];

let ganadas = 0;
let perdidas = 0;


const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{
            label: 'Trades history',
            data: [],
            backgroundColor: [
                'rgb(0, 162, 255)'
            ],
            borderColor: [
              'rgb(0, 162, 255)'
            ],
            borderWidth: 1
        }]
    }
});

myChart.data.datasets[0].data.push(parseFloat((num)));

const ganancia = () => {
  let a = document.createElement("h3")
  let i1 = document.getElementById("i1").value
  let ganancia = num;
  
  ganadas = ganadas + 1
  gananciaContainer.innerText = `${ganadas}`

  num = ((parseFloat(num) / 100) * parseFloat(i1)) + parseFloat(num)
  notationContainer.appendChild(a);
  a.innerHTML = `<b>Trade número: ${tradeNúmero = tradeNúmero + 1}
  </b><b style="color: rgb(0, 162, 255)">Ganancia: </b> ${num.toFixed(2)}
  <b style = "color: rgb(0, 162, 255)">+ ${i1}%
  $${(num - ganancia).toFixed(2)}</b><br>`

  myChart.data.datasets[0].data.push(parseFloat((num)));
  myChart.data.labels.push(myChart.data.labels.slice(-1).pop() + parseFloat(1))
  myChart.update();
 

  tradeArray.push(tradeArray.slice(-1).pop() + parseFloat(1));
  tradePrice.push(num.toFixed(2));

}

const perdida = () => {
    let a = document.createElement("h3")
    let i2 = document.getElementById("i2").value
    let pérdida = num;

    perdidas = perdidas + 1
    perdidaContainer.innerText = `${perdidas}`

    num = parseFloat(num)-(((parseFloat(num) / 100) * parseFloat(i2) ));
    a.innerHTML = 
    `<b>Trade número: ${tradeNúmero = tradeNúmero + 1}
    </b><b style="color:rgb(239, 102, 44)"> Pérdida:  </b> ${num.toFixed(2)}
    <b style="color: rgb(239, 102, 44)">- ${i2}%
    $${(pérdida - num).toFixed(2)}</b><br>`

    notationContainer.appendChild(a);


    myChart.data.datasets[0].data.push(parseFloat((num)));
    myChart.data.labels.push(myChart.data.labels.slice(-1).pop() + parseFloat(1))
    myChart.update();



    tradeArray.push(tradeArray.slice(-1).pop() + parseFloat(1));
    tradePrice.push(num.toFixed(2));
}



