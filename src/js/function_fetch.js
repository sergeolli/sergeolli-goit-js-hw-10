import Notiflix from 'notiflix';
import templatesCard from '../templates/country-card.hbs'
import templatesCard_2 from '../templates/country-card_2.hbs'

const refs = {
    countryCard: document.querySelector(".country-list"),
    countryCardTwo: document.querySelector(".country-info"),
    input: document.querySelector('input#search-box')
}

export function fetchCountries(name) {
    if (name === '' && refs.input.value.length !== name.length) {
        return;
    } 
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return Notiflix.Notify.failure("Oops, there is no country with that name")
            }
                
        }).then(country => {
               
            if (country.length > 1 && country.length <= 10) {
               refs.countryCardTwo.innerHTML = ' '
                country.forEach(e => {
                    const markup = templatesCard(e)
                    refs.countryCard.innerHTML += markup
                   //console.log(markup)
                })
                
            } else if (country.length <= 1) {
                refs.countryCard.innerHTML = ' '
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
                    //console.log(markupTwo)
                    
                   
                })
            } else {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
            }
         
        })
        
        .catch(error => {
            console.log(error)
        })
}
