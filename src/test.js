import { Store } from './Context';
import { useState, useEffect, useContext, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const StackedColumnChart = () => {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4} = useContext(Store)

  const chartRef = useRef(null);

  useEffect(() => {
    // Set theme
    am4core.useTheme(am4themes_animated);
    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);

    chart.logo.disabled = true;

    chart.data = [
      { group: 'w4', treatmentGroup: 'Bimatoprost implant 6 µg ( n = 18)', value: 94.4 },
      { group: 'w4', treatmentGroup: 'Bimatoprost implant 10 µg ( n = 21)', value: 100 },
      { group: 'w4', treatmentGroup: 'Bimatoprost implant 15 µg ( n = 21)', value: 100 },
      { group: 'w4', treatmentGroup: 'Bimatoprost implant 20 µg ( n = 15)', value: 100 },
      { group: 'w12', treatmentGroup: 'Bimatoprost implant 6 µg ( n = 18)', value: 94.4 },
      { group: 'w12', treatmentGroup: 'Bimatoprost implant 10 µg ( n = 21)', value: 100 },
      { group: 'w12', treatmentGroup: 'Bimatoprost implant 15 µg ( n = 21)', value: 100 },
      { group: 'w12', treatmentGroup: 'Bimatoprost implant 20 µg ( n = 15)', value: 80 },
      { group: 'm6', treatmentGroup: 'Bimatoprost implant 6 µg ( n = 18)', value: 72.2 },
      // { group: 'm6', treatmentGroup: 'Bimatoprost implant 10 µg ( n = 21)', value: 66.7 },
      // { group: 'm6', treatmentGroup: 'Bimatoprost implant 15 µg ( n = 21)', value: 66.7 },
      // { group: 'm6', treatmentGroup: 'Bimatoprost implant 20 µg ( n = 15)', value: 66.7 },
      // { group: 'm9', treatmentGroup: 'Bimatoprost implant 6 µg ( n = 18)', value: 66.7 },
      // { group: 'm9', treatmentGroup: 'Bimatoprost implant 10 µg ( n = 21)', value: 47.6 },
      // { group: 'm9', treatmentGroup: 'Bimatoprost implant 15 µg ( n = 21)', value: 47.6 },
      // { group: 'm9', treatmentGroup: 'Bimatoprost implant 20 µg ( n = 15)', value: 53.3 },
      // { group: 'm12', treatmentGroup: 'Bimatoprost implant 6 µg ( n = 18)', value: 50 },
      // { group: 'm12', treatmentGroup: 'Bimatoprost implant 10 µg ( n = 21)', value: 33.3 },
      // { group: 'm12', treatmentGroup: 'Bimatoprost implant 15 µg ( n = 21)', value: 38.1 },
      // { group: 'm12', treatmentGroup: 'Bimatoprost implant 20 µg ( n = 15)', value: 40 },
      // { group: 'm18', treatmentGroup: 'Bimatoprost implant 6 µg ( n = 18)', value: 38.9 },
      // { group: 'm18', treatmentGroup: 'Bimatoprost implant 10 µg ( n = 21)', value: 23.8 },
      // { group: 'm18', treatmentGroup: 'Bimatoprost implant 15 µg ( n = 21)', value: 23.8 },
      // { group: 'm18', treatmentGroup: 'Bimatoprost implant 20 µg ( n = 15)', value: 33.3 },
      // { group: 'm24', treatmentGroup: 'Bimatoprost implant 6 µg ( n = 18)', value: 33.3 },
      // { group: 'm24', treatmentGroup: 'Bimatoprost implant 10 µg ( n = 21)', value: 23.8 },
      // { group: 'm24', treatmentGroup: 'Bimatoprost implant 15 µg ( n = 21)', value: 23.8 },
      // { group: 'm24', treatmentGroup: 'Bimatoprost implant 20 µg ( n = 15)', value: 33.3 },
    ];
    
    

    // Create x-axis
    const xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = 'group';
    xAxis.renderer.minGridDistance = 30;
    xAxis.renderer.grid.template.location = 0;
    xAxis.title.text = 'Study Visit';
    

    // xAxis.renderer.labels.template.adapter.add("text", function (text) {
    //     if (text === "0") {
    //       return "Week 4";
    //     } else if (text === "w12") {
    //       return "Week 12";
    //     } else if (text === "m6") {
    //       return "Month 6";
    //     } else if (text === "m9") {
    //       return "Month 9";
    //     } else if (text === "m12") {
    //       return "Month 12";
    //     } else if (text === "m18") {
    //       return "Month 18";
    //     } else if (text === "m24") {
    //       return "Month 24";
    //     }
    //     return ;
    //   });


    //Create y-axis
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.minGridDistance = 20;
    valueAxis.renderer.grid.template.opacity = 1;
    valueAxis.title.text = 'Study eyes not rescued or re-treated (%)';
    

    
    // Create series
    const series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = 'value';
    series1.dataFields.categoryX = 'group';
    series1.name = 'Bimatoprost implant 6 µg ( n = 18)';
    series1.columns.template.width = am4core.percent(20);
    series1.columns.template.tooltipText = '{name}: {valueY}%';
    series1.strokeWidth = 0;
    series1.fill = am4core.color('blue');
    series1.columns.template.width = am4core.percent(50);
    
    const series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = 'value';
    series2.dataFields.categoryX = 'group';
    series2.name = 'Bimatoprost implant 6 µg ( n = 18)';
    series2.columns.template.width = am4core.percent(20);
    series2.columns.template.tooltipText = '{name}: {valueY}%';
    series2.strokeWidth = 0;
    series2.fill = am4core.color('red');
    series2.columns.template.width = am4core.percent(50);
    

    // //Create series
    // const series2 = chart.series.push(new am4charts.ColumnSeries());
    // series2.dataFields.valueY = 'value';
    // series2.dataFields.categoryX = 'group';
    // series2.name = 'Bimatoprost implant 10 µg ( n = 21)';
    // series2.columns.template.width = am4core.percent(20);
    // series2.columns.template.tooltipText = '{name}: {valueY}%';
    // series2.strokeWidth = 0;
    // series2.fill = am4core.color('green');
    // series2.columns.template.width = am4core.percent(50);
    
    // //Create series
    //   const series3 = chart.series.push(new am4charts.ColumnSeries());
    //   series3.dataFields.valueY = 'value';
    //   series3.dataFields.categoryX = 'group';
    //   series3.name = 'Bimatoprost implant 15 µg ( n = 21)';
    //   series3.columns.template.width = am4core.percent(20);
    //   series3.columns.template.tooltipText = '{name}: {valueY}%';
    //   series3.strokeWidth = 0;
    //   series3.fill = am4core.color('purple');
    //   series3.columns.template.width = am4core.percent(50);
    

    // //Create series
    // const series4 = chart.series.push(new am4charts.ColumnSeries());
    // series4.dataFields.valueY = 'value';
    // series4.dataFields.categoryX = 'group';
    // series4.name = 'Bimatoprost implant 6 µg ( n = 18)';
    // series4.columns.template.width = am4core.percent(20);
    // series4.columns.template.tooltipText = '{name}: {valueY}%';
    // series4.strokeWidth = 0;
    // series4.fill = am4core.color('orange');
    // series4.columns.template.width = am4core.percent(50);
    
    
   
    
   
    
    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'right';
    chart.legend.maxWidth = 400;
    chart.legend.markers.template.width = 20;
    chart.legend.markers.template.height = 20;
    
    // Set chart instance to the ref
    chartRef.current = chart;
    
    // Clean up the chart when the component unmounts
    return () => {
    chart.dispose();
    };
    }, []);
    
    return <div id="chartdiv" style={{ width: '1500px', height: '500px' }} />
    
    }

    export default StackedColumnChart