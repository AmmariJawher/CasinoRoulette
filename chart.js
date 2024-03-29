function getAllEvents() {
    axios.get('http://localhost:8000/tickets')
    .then(res => {updateStats(res.data)})
    .catch(err => {console.log(err)})
}

function updateStats(data) {
    let results = Array.apply(null, Array(37)).map(function () {return 0})
    let selectionsArr = []
    // Note: Fix arr adding
    data.forEach((element) => {
        let selectArr = element.choiceList;
        selectionsArr.push.apply(selectionsArr, selectArr);
    })
    console.log(selectionsArr)
    // Number
    const numbers = [0, 2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35, 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
    // Colors
    const black = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]
    const red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
    
    // Twelves
    const colOne = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const colTwo = [ 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    const colThree = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

    // Sections
    const sectionA = [2, 21, 4, 19, 15, 32]
    const sectionB = [13, 27, 6, 34, 17, 25]
    const sectionC = [10, 23, 8, 30, 11, 36]
    const sectionD = [20, 1, 33, 16, 5, 24]
    const sectionE = [29, 18, 22, 9, 31, 14]
    const sectionF = [7, 28, 12, 35, 3, 26]
    selectionsArr.forEach((element) => {
        if (numbers.includes(Number(element.choice))) {
            results[Number(element.choice)] += 1
        } else {
            switch (element.choice) {
                case 'ROUGE':
                    results.forEach((e, i) => { 
                        if(red.includes(i)) {results[i] += 1}
                    })
                    break;
                case 'NOIR':
                    results.forEach((e, i) => { 
                        if(black.includes(i)) {results[i] += 1}
                    })
                    break;
                case 'VERT':
                    results[0] += 1
                    break;
                case '1-12':
                    results.forEach((e, i) => { 
                        if(colOne.includes(i)) {results[i] += 1}
                    })
                    break;
                case '13-24':
                    results.forEach((e, i) => { 
                        if(colTwo.includes(i)) {results[i] += 1}
                    })                    
                    break;
                case '25-36':
                    results.forEach((e, i) => { 
                        if(colThree.includes(i)) {results[i] += 1}
                    })
                    break;
                case 'A':
                    results.forEach((e, i) => { 
                        if(sectionA.includes(i)) {results[i] += 1}
                    })
                    break;
                case 'B':
                    results.forEach((e, i) => { 
                        if(sectionB.includes(i)) {results[i] += 1}
                    })
                    break;
                case 'C':
                    results.forEach((e, i) => { 
                        if(sectionC.includes(i)) {results[i] += 1}
                    })
                    break;
                case 'D':
                    results.forEach((e, i) => { 
                        if(sectionD.includes(i)) {results[i] += 1}
                    })
                    break;
                case 'E':
                    results.forEach((e, i) => { 
                        if(sectionE.includes(i)) {results[i] += 1}
                    })
                    break;
                case 'F':
                    results.forEach((e, i) => { 
                        if(sectionF.includes(i)) {results[i] += 1}
                    })
            }
        }
    })
    
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36'],
            datasets: [{
                label: 'number',
                data: results,
                backgroundColor: [
                    'rgba(60, 179, 113,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)',
                    'rgba(0, 0, 0,0.7)',
                    'rgba(255, 0, 0,0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            /*
            title: {
            display: true,
            text: 'number of selected'},
            */
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}  

const winChoice = document.querySelectorAll(".win-choice");
for (let i = 0; i < winChoice.length; i++) {
    winChoice[i].addEventListener("click", function (element) {
        winningResult = winChoice[i].textContent;
        console.log(winningResult);
        axios.get('http://localhost:8000/event')
        .then(res => {
            axios.put('http://localhost:8000/event', {number: res.data.number,result: winningResult})
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)})
        })
        .catch(err => {console.log(err)})
    })
}