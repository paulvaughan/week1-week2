// Initial attempts solve assignment:

// let name = ['Paul Vaughan', 'Leul Scott', 'Ben Johnson', 'Lake Blae', 'Oliver Stone']

// let name = ['Paul', 'Vaughan', 'Leul','Scott']

// let olEl = document.createElement(ol)
// const divEl = document.getElementById('loop-content')

// for (let i=0; i<name.length; i++){
//   let liEl = document.createElement('li')
//   liEl.textContent = name[0]+ ' '+name[1]
//   olEl.appendChild(liEl)
// }

// divEl.appendChild(olEl)

// Assignment# 1: Using a do-while loop to illustrate a countdown sequence

// let count=11
// do {
//   count--
//   console.log('The countdown clock is at: ' + count +' '+'seconds')
// } while (count>0)

//Solution

let name = [
  ['First Name', 'Janae', 'Wenesh', 'JD', 'Paul'],
['Last Name', 'Leonard', 'Wolde', 'Hamilton', 'Vaughan']
]

// function createTable(arr){
//   let tbl = document.createElement('table')
//   for (let i=0; i<arr.length; i++){
//     let td = document.createElement('td')
//     for(let j=0; j<arr[i].length; j++)
//     {let tr = document.createElement('tr')
//     tr.textContent = arr[i][j]
//     td.appendChild(tr)
//     }
//     tbl.appendChild(td)
//   }
//   // We selected the html body element to append a table// 
//   document.querySelector('body').appendChild(tbl)
// }
// createTable(name)

// I created an alternate table layout

function createTable(arr){
  let tbl = document.createElement('table')
  for (let i=0; i<arr.length; i++){
    let tr = document.createElement('tr')
    for(let j=0; j<arr[i].length; j++){
      let td =document.createElement('td')
      td.textContent = arr[i][j]
      tr.appendChild(td)
    }
    tbl.appendChild(tr)
  }
  document.querySelector('body').appendChild(tbl)
}
createTable(name)