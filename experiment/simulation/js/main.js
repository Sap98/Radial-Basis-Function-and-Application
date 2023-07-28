const userInputData = [];

    // Chart.js instance for user input graph
    const userInputCtx = document.getElementById('userInputChart').getContext('2d');
    const userInputChart = new Chart(userInputCtx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'User Input Data',
          data: userInputData,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.4)',
          pointRadius: 5,
          showLine: false,
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'linear', // Use 'linear' scale for continuous x-axis
            position: 'bottom',
          },
          y: {
            type: 'linear', // Use 'linear' scale for continuous y-axis
          }
        },
        onClick: handleChartClick // Attach the onClick event handler
      }
    });

    

    function resetGraphs() {
        userInputData.length = 0;
        userInputChart.update();
        updateBasisFunctionGraph();
      }

function handleChartClick(event, chartElements)
{
    const clickedDataPoint = chartElements[0];

        // Get the x and y values of the clicked data point
        const xValue = clickedDataPoint.x;
        const yValue = clickedDataPoint.y;
        alert(xValue+" "+yValue);
        
}