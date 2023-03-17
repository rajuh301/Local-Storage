
let count = 0;
const data = document.getElementById('btn').addEventListener('click', function(){

    count ++

    const pValue = document.getElementById('p-tag')
    pValue.innerText = count
    console.log(count)


    localStorage.setItem('Clicked',count)

     
})


const result = localStorage.getItem('Clicked')

const pValue = document.getElementById('p-tag').innerText = result;













// const getStrogeShoppingCard = ()=>{

//     let card = {}
//     const storeCard = localStorage.getItem('card');

//     if(storeCard){
//         card = JSON.parse(storeCard);
//     }

//     return card ;

// }


// const result = getStrogeShoppingCard()

// console.log(result)
