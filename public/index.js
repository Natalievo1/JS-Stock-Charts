async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

main() {

        const response = await fetch("https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX,TRP:TSX&interval=1min&apikey=9b07f38668e84a77901476ef8972a46a");
        const stocks = await response.json();
        console.log(stocks);
      
      
}
