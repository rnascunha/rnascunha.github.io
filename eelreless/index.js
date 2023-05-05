import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";

const ip = document.querySelector("#ip-connect");
const connect = document.querySelector("#btn-connect");
const error = document.querySelector("#error");
const data_el = document.querySelector("#data");
const graph_el = document.querySelector("#graph");
const ips_el = document.querySelector("#ips");

function time() {
  const date = new Date();
  let mili = `.${date.getMilliseconds()}`;
  return `${date.getHours()}`.padStart(2, '0') +
          `:${date.getMinutes()}`.padStart(2, '0') +
          `:${date.getSeconds()}`.padStart(2, '0') +
          mili.padStart(3, '0');
}

const data = [];

connect.addEventListener('click', async ev => {
  try {
    const response = await fetch(`http://${ip.value}/current`);
    // const response = await fetch(`http://192.168.0.87/current`);
    const op = document.createElement('option');
    op.value = ip.value;
    // ips_el.appendChild(op);
    // const current = await response.text();
    error.innerHTML = "";
    data.push({'date': new Date(), value: +current});
    graph_el.innerHTML = '';
    graph_el.appendChild(graph());
    data_el.textContent += `${ip.value}/${time()}: ${current}A\n`;
  } catch(e) {
    error.innerHTML = e;    
  }
});

function graph() {
  return Plot.plot({
    marks: [
      Plot.dot(data, {x: 'date', y: 'value', fill: 'black', title: d => `${d.date}: ${d.value}`}),
      Plot.line(data, {x: 'date', y: 'value'})
    ],
    width: 3 * window.innerWidth / 4
  });
}