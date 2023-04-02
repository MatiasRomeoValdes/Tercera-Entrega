import indicadorUf from './components/indicadorUf.js';
import indicadorDolar from './components/indicadorDolar.js';
import indicadorBitcoin from './components/indicadorBitcoin.js';
import indicadorEuro from './components/indicadorEuro.js';


const ctx= document.getElementById('indicators')


const dolar = document.getElementById('dolar')
const uf = document.getElementById('uf')
const bitcoin = document.getElementById('bitcoin')
const euro = document.getElementById('euro')


const ufPerDay = ( await indicadorUf() ).serie
const dolarPerDay = (await indicadorDolar()).serie
const bitcoinPerDay = ( await indicadorBitcoin() ).serie
const euroPerDay = (await indicadorEuro()).serie



dolar.addEventListener('click', async function() {
  if(window.myChart != undefined) {
    window.myChart.destroy();
  }

  await createChart(dolarPerDay);
});


uf.addEventListener('click', async function() {
  if(window.myChart != undefined) {
    window.myChart.destroy();
  }

  await createChart(ufPerDay);
});


euro.addEventListener('click', async function() {
  if(window.myChart != undefined) {
    window.myChart.destroy();
  }

  await createChart(euroPerDay);
});

bitcoin.addEventListener('click', async function() {
  if(window.myChart != undefined) {
    window.myChart.destroy();
  }

  await createChart(bitcoinPerDay);
});


async function createChart(currencyData) {
  const labels = currencyData.map(data => new Date(data.fecha).toLocaleDateString()).reverse();

  window.myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'precio',
        data:  currencyData.map(data => data.valor).reverse(), 
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      width: 500,
      height: 700,


      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
