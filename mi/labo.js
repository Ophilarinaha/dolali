function createChartConfig() {
  return {
    encoding: {
      x: { field: 'X_Axis_Field', type: 'quantitative' },
      y: { field: 'Y_Axis_Field', type: 'quantitative' }
    },
    mark: 'bar'
  };
}

// Example usage
const chartConfig = createChartConfig();

// Assuming a hypothetical function to render the chart
renderChart(chartConfig);

function renderChart(config) {
  // Implementation to render a chart using the provided configuration
  console.log('Rendering chart with config:', config);
}
