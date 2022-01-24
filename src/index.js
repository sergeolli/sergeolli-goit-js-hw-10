import './css/styles.css'
import { fetchCountries } from './js/function_fetch'
import lodash from 'lodash.debounce'
const DEBOUNCE_DELAY = 300

const refs = {
    countryCard: document.querySelector(".country-list"),
    countryCardTwo: document.querySelector(".country-info"),
    input: document.querySelector('input#search-box')
}


refs.input.addEventListener('input', lodash(onSearch, DEBOUNCE_DELAY))

function onSearch() {
    //if (refs.input.value === ' ' || refs.input.value ==='') {
     //   return;
   // } 
    refs.countryCardTwo.innerHTML = ' '
    refs.countryCard.innerHTML = ' '

    fetchCountries(refs.input.value.trim())
}

//const refs = {
   // valueInput: document.querySelector('#search-box'),
   // countryList:document.querySelector('.country-list'),
   // countryInfo:document.querySelector('.country-info'),
//}
//refs.valueInput.addEventListener('input', lodash((e) => {
 //  e.preventDefault();
  //  const nameCoutry = e.target.value.trim()
   // if (nameCoutry === '' || refs.valueInput.value.length !== nameCoutry.length) {
     //   return;
    //} 
     //   fetch(`https://restcountries.com/v3.1/name/${nameCoutry}?fields=name,capital,population,flags,languages`)
       //     .then(response => {
              //  return response.json();
            //})
           // .then(country => {
             //   console.log(country)
             //   if (country.length > 1 && country.length <= 10) {
                     
                    

                //    country.forEach(element => {
                        
                       
///const itemWrapperOne = document.createElement('li')
//const itemImg = document.createElement('img')
//const itemTitle = document.createElement('h1')
 //   itemWrapperOne.append(itemImg,itemTitle)
  //  itemWrapperOne.classList.add('cantry__item__two');
   // itemTitle.classList.add('country__title');
    //itemTitle.textContent = element.name.common
    //itemImg.src = element.flags.svg
    //itemImg.width = 30
    //itemImg.height = 30
                        
                      //  refs.countryList.append(itemWrapperOne) 
                     //    itemWrapperOne.remove()
                     //   console.log('ok remuve Info')
                //    });
                    
              
               // }
                
               // else if (country.length <= 1) {
               //     country.forEach(element => { 
//const onWrapper = document.createElement('div')
//const itemWrapper = document.createElement('lu')
//const itemImg = document.createElement('img')
//const itemTitle = document.createElement('h1')
//const itemParCapital = document.createElement('p') 
//const itemParPopulation = document.createElement('p') 
//const itemParLanguages = document.createElement('p')

                        
    // onWrapper.append(itemImg, itemTitle)
    // itemWrapper.append(onWrapper, itemParCapital, itemParPopulation, itemParLanguages)
                        
   // onWrapper.classList.add('country__name');
  //  itemParCapital.classList.add('cantry__text');
  //  itemParPopulation.classList.add('cantry__text');
  //  itemParLanguages.classList.add('cantry__text');

    //itemTitle.textContent = element.name.common
                        
   // itemImg.src = element.flags.svg
  //  itemImg.width = 30
  //  itemImg.height = 30
                        
  //  itemTitle.classList.add('country__title');
                        
  //  itemParCapital.textContent = `Capital: ${ element.capital}`
 //   itemParPopulation.textContent = `Population: ${ element.population }`
 //   itemParLanguages.textContent = `Languages: ${ Object.values(element.languages) }`
                    
                        
       //                 const ingredientsEl = refs.countryInfo
                      //  ingredientsEl.append(itemWrapper)
                     //   itemWrapper.remove()
                    //    console.log('ok remuve List')
                                 
                  //  });
                   
// }; 
// })
        //    .catch(error => {
        //        console.log(error)
        //    })
    
///},DEBOUNCE_DELAY))


    
 //refs.countryList.innerHTML =
              // `<li class = cantry__item__two><img src = ${country[0].flags.svg} alt = '' width=50 haigth=50/>
                //    <h1 class = country__title >${country[0].name.common}</h1></li>
               // <li class = cantry__item__two><img src = ${country[1].flags.svg} alt = '' width=50 haigth=50/>
                //    <h1 class = country__title >${country[1].name.common}</h1></li>
                //<li class = cantry__item__two><img src = ${country[3].flags.svg} alt = '' width=50 haigth=50/>
                //    <h1 class = country__title >${country[3].name.common}</h1></li>
               // <li class = cantry__item__two><img src = ${country[4].flags.svg} alt = '' width=50 haigth=50/>
                //    <h1 class = country__title >${country[4].name.common}</h1></li>
               //<li class = cantry__item__two><img src = ${country[5].flags.svg} alt = '' width=50 haigth=50/>
               //     <h1 class = country__title >${country[6].name.common}</h1></li>
              // <li class = cantry__item__two><img src = ${country[7].flags.svg} alt = '' width=50 haigth=50/>
               //     <h1 class = country__title >${country[7].name.common}</h1></li>
               // <li class = cantry__item__two><img src = ${country[8].flags.svg} alt = '' width=50 haigth=50/>
               //     <h1 class = country__title >${country[8].name.common}</h1></li>
               // <li class = cantry__item__two><img src = ${country[9].flags.svg} alt = '' width=50 haigth=50/>
               //     <h1 class = country__title >${country[9].name.common}</h1></li>`
               
               //const allLanguages = Object.values(country[0].languages)
                //const allName = country[0].name.common
                //const allCapital = country[0].capital
                //const allPopulation = country[0].population
                //const allFlags = country[0].flags.svg
                //refs.countryInfo.innerHTML = 
                //`<div class = "country__name">
//<img src = ${allFlags} alt = '' width=50 haigth=50/> 
//<h1 class = country__title >${allName}</h1>
//</div>
//<ul class = country-list>
//<li class = cantry__item>
//<p class = cantry__text ><span class = cantry__span>Capital:</span> ${allCapital}</p>
//</li>
//<li class = cantry__item>
//<p class = cantry__text ><span class = cantry__span>Population:</span> ${allPopulation}</p>
//</li>
//<li class = cantry__item>
//<p class = cantry__text><span class = cantry__span>Languages:</span> ${allLanguages}</p>
//</li>
//</ul>`