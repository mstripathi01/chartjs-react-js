import './App.css';
import React,{useState, useEffect} from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

const data = {
 datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(137, 102, 192)',
      'rgb(218, 102, 192)',
      'rgb(240, 196, 85)'
    ],
    hoverOffset: 4
  }], 

  labels: [
 'Purple',
 'Pink',
 'Yellow',
],

};

function App() {
  const [data,setData] = useState({
    datasets: [{
      data: [10, 20, 30],
      backgroundColor:[
        'Purple',
        'Pink',
        'Yellow',
      ]
  },
],
labels: [
  'Purple',
  'Pink',
  'Yellow',
], 
  })
  useEffect(()=> {
    const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => {
    const res = data.json();
    return res
    }).then((res) => {
      console.log("ress",res)
      const label = [];
      const data = [];
      for (var i of res) {
        label.push(i.name);
        data.push(i.id);
       
      }
      setData({
        datasets: [{
          data:data,
          backgroundColor:[
            'Purple',
            'Pink',
            'Yellow',
          ]
      },
    ],
    labels:label,
      })
    }).catch(e => {
      console.log("error", e)
    })
  }
  fetchData();
},[])
  return (
    <div className="App" style = {{width: '30%', height: '30%'}}> 
    <Doughnut data = {data} />
    <Pie data = {data} />
    </div>
  );
}

export default App;
