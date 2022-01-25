import './css/styles.css'
import { fetchCountries } from './js/fetchCountries'
import templatesCard from './templates/country-card.hbs'
import templatesCard_2 from './templates/country-card_2.hbs'
import Notiflix from 'notiflix';
import lodash from 'lodash.debounce'
const DEBOUNCE_DELAY = 300

const refs = {
    countryCard: document.querySelector(".country-list"),
    countryCardTwo: document.querySelector(".country-info"),
    input: document.querySelector("input#search-box")
}
 
refs.input.addEventListener('input', lodash(() => {   
    if (refs.input.value.trim() === '' ) {
        return;
    } 
    refs.countryCardTwo.innerHTML = ' '
    refs.countryCard.innerHTML = ' '
    fetchCountries(refs.input.value.trim())
    .then(renderCountry)
        .catch(onFetchError)
    
},DEBOUNCE_DELAY))

function renderCountry(country) {
    if (country.length > 1 && country.length <= 10) {
                country.forEach(e => {
                    const markup = templatesCard(e)
                    refs.countryCard.insertAdjacentHTML("afterBegin", markup)
                    console.log(markup)
                })
                
            } else if (country.length <= 1) {
                country.forEach(e => {
                     const newObject = {
                        flags: e.flags.svg,
                        official: e.name.official,
                        name: e.name.common,
                        capital: e.capital,
                        population: e.population,
                        languages: Object.values(e.languages)
                    }
                    const markupTwo = templatesCard_2(newObject) 
                    refs.countryCardTwo.innerHTML = markupTwo
                    console.log(markupTwo) 
                })
            } else {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
            }
         

}
function onFetchError(error) {
    console.log(error)
}