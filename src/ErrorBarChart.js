import { useState, useEffect,useContext } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { Store } from './Context';

const ErrorLineChart = () => {
  const { Button1, setButton1, Button2, setButton2,Button3} = useContext(Store)
 const [chart, setChart] = useState()
  useEffect(() => {
    // Set theme
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.logo.disabled = true;

 
    chart.data = [
      { xValue: 1, yValue1: 17.6, yValue2: 17.04,yValue3:17.05, y1ValueSD: 0.30, y2ValueSD: 0.28,y3ValueSD:  0.31, zero: 0 },
      { xValue: 2, yValue1: 16.77, yValue2: 16.28,yValue3:16.33, y1ValueSD: 0.27, y2ValueSD: 0.28,y3ValueSD: 0.29, zero: 0},
      { xValue: 3, yValue1: 17.45, yValue2: 17.35,yValue3:17.07, y1ValueSD: 0.26, y2ValueSD: 0.34,y3ValueSD: .32, zero: 0},
      { xValue: 4, yValue1: 16.54, yValue2: 16.45,yValue3:16.22, y1ValueSD: 0.26, y2ValueSD: 0.31,y3ValueSD: .28, zero: 0},
      { xValue: 5, yValue1: 17.62, yValue2: 17.35,yValue3:17.24, y1ValueSD: 0.28, y2ValueSD: 0.30,y3ValueSD: .31, zero: 0},
      { xValue: 6, yValue1: 16.78, yValue2: 16.51,yValue3:16.07, y1ValueSD: 0.30, y2ValueSD: 0.28,y3ValueSD: .32, zero: 0},    ]

    // Create axes
    const xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.renderer.minGridDistance = 50;
    xAxis.min = 0;
    xAxis.max = 7;
    xAxis.renderer.grid.template.opacity = .2;
    xAxis.maxPrecision = 0;
xAxis.strictMinMax = true;
    xAxis.renderer.labels.template.adapter.add('text', function (text) {
      if (text === "0") {
        return '';
      } else if(text === "7"){
        return " "
      }else if (text % 2 === 0) {
        return 'Hour 0';
      } else if (text % 2 !== 0) {
        return 'Hour 2';
      }
    });

    const yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 15.5;
    yAxis.max = 18;

    const series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueX = Button1 ? 'xValue' : "zero";
    series1.dataFields.valueY = Button1 ? 'yValue1' : "zero";
    series1.name = 'Topical Bimatoprost';
    series1.stroke = am4core.color("black")
    
    // Create error bullets for series 1
    const errorBullet1 = series1.bullets.push(new am4charts.ErrorBullet());
    errorBullet1.tooltipText = '{name}: {valueY} \nError: {y1ValueSD}';
    errorBullet1.width = am4core.percent(100);
    errorBullet1.height = am4core.percent(100);
    errorBullet1.fillOpacity = 0.5;
    errorBullet1.strokeOpacity = 0.5;
    errorBullet1.strokeWidth = 2;
    errorBullet1.adapter.add('pixelHeight', (pixelHeight, target) => {
      return target.dataItem.dataContext.y1ValueSD *100; // scale the height based on SD value
    });
    errorBullet1.adapter.add('pixelWidth', (pixelWidth, target) => {
      return target.dataItem.dataContext.y1ValueSD *100; // scale the width based on SD value
    });

    // Create circle bullets for series 1
    const circleBullet1 = series1.bullets.push(new am4charts.CircleBullet());
    circleBullet1.tooltipText = '{name}: {valueY} \nError: {y1ValueSD}';
    circleBullet1.circle.fill = am4core.color('black');
    circleBullet1.circle.strokeWidth = 2;
    circleBullet1.circle.radius = 4;
    circleBullet1.stroke = am4core.color('black');

    const series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueX = Button2 ? 'xValue' : "zero";
    series2.dataFields.valueY = Button2 ? 'yValue2' : "zero";
    series2.name = 'Bimatoprost Implant';
    series2.stroke = am4core.color("green")

    // Create error bullets for series 2
    const errorBullet2 = series2.bullets.push(new am4charts.ErrorBullet());
    errorBullet2.tooltipText = '{name}: {valueY} \nError: {y2ValueSD}';
    errorBullet2.width = am4core.percent(100);
    errorBullet2.height = am4core.percent(100);
    errorBullet2.fillOpacity = 0.5;
    errorBullet2.strokeOpacity = 0.5;
    errorBullet2.strokeWidth = 2;
    errorBullet2.adapter.add('pixelHeight', (pixelHeight, target) => {
      return target.dataItem.dataContext.y2ValueSD *100; // scale the height based on SD value
    });
    errorBullet2.adapter.add('pixelWidth', (pixelWidth, target) => {
      return target.dataItem.dataContext.y2ValueSD *100; // scale the width based on SD value
    });
    
    // Create circle bullets for series 2
    const circleBullet2 = series2.bullets.push(new am4charts.CircleBullet());
    circleBullet2.tooltipText = '{name}: {valueY} \nError: {y2ValueSD}';
    circleBullet2.circle.fill = am4core.color('green');
    circleBullet2.circle.strokeWidth = 2;
    circleBullet2.circle.radius = 4;
    circleBullet2.stroke = am4core.color('green');



    const series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueX = Button3 ? 'xValue' : "zero";
    series3.dataFields.valueY = Button3 ? 'yValue3' : "zero";
    series3.name = 'Bimatoprost Implant';
    series3.stroke = am4core.color('purple');

    // Create error bullets for series 3
    const errorBullet3 = series3.bullets.push(new am4charts.ErrorBullet());
    errorBullet3.tooltipText = '{name}: {valueY} \nError: {y2ValueSD}';
    errorBullet3.width = am4core.percent(100);
    errorBullet3.height = am4core.percent(100);
    errorBullet3.fillOpacity = 0.5;
    errorBullet3.strokeOpacity = 0.5;
    errorBullet3.strokeWidth = 2;
    errorBullet3.adapter.add('pixelHeight', (pixelHeight, target) => {
      return target.dataItem.dataContext.y3ValueSD *100; // scale the height based on SD value
    });
    errorBullet3.adapter.add('pixelWidth', (pixelWidth, target) => {
      return target.dataItem.dataContext.y3ValueSD *100; // scale the width based on SD value
    });



         // Create circle bullets for series 2
         const circleBullet3 = series3.bullets.push(new am4charts.CircleBullet());
         circleBullet3.tooltipText = '{name}: {valueY} \nError: {y2ValueSD}';
         circleBullet3.circle.fill = am4core.color('purple');
         circleBullet3.circle.strokeWidth = 2;
         circleBullet3.circle.radius = 4;
         circleBullet3.stroke = am4core.color('purple');
     
  

    // Set error values for series 1
    series1.dataItems.each((dataItem) => {
      dataItem.errorValueY = dataItem.dataContext.y1ValueSD
    });

  
  // Set error values for series 2
  series2.dataItems.each((dataItem) => {
    dataItem.errorValueY = dataItem.dataContext.y2ValueSD;
  });

   // Set error values for series 2
   series3.dataItems.each((dataItem) => {
    dataItem.errorValueY = dataItem.dataContext.y3ValueSD;
  });

 // Create legend
// chart.legend = new am4charts.Legend();
// chart.legend.position = 'right';
// chart.legend.labels.template.marker = new am4core.Circle();
// chart.legend.labels.template.marker.strokeWidth = 2;
// chart.legend.labels.template.marker.radius = 5;

  
  // Set chart instance to the state
  setChart(chart);
  
  // Clean up the chart when the component unmounts
  return () => {
    chart.dispose();
  };

}, [Button1 ,Button2,Button3]);

return <div id="chartdiv" style={{ width: '1500px', height: '500px' }} />;
};

export default ErrorLineChart;
