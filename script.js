const formSearch = document.querySelector('.form-search'), //search
    inputCitiesFrom = document.querySelector('.input__cities-from'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'), //list
    inputCitiesTo = document.querySelector('.input__cities-to'),
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart');

const city = ['Minsk', 'Grodno', 'Warshaw', 'Moscow', 'London'];

const showCity = (input, list) => {
    list.textContent = ''; //clear input string every new symbol

    if (inputCitiesFrom.value === '') { return; } //unnecessary
    if (input.value !== '') {
        const cityFilter = city.filter((item) => {
            const fixItem = item.toLowerCase();
            return fixItem.includes(input.value.toLowerCase());
        });

        cityFilter.forEach((item) => {
            const lielements = document.createElement('li'); //add element in dynamic searching

            lielements.classList.add('dropdown__city');
            lielements.textContent = item;

            list.append(lielements); //displaying
        });
    }
};

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom)
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
        inputCitiesFrom.value = target.textContent;
        dropdownCitiesFrom.textContent = '';
    }
});