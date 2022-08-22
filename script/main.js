// function for getting input value
function getValueFromInput(inputId) {
    const inputField = document.getElementById(inputId);
    const fieldValue = inputField.value;
    if (fieldValue !== '') {
        return fieldValue;
    }
    else {
        alert('please provide a valid number!')
        inputField.value = '';
        return '';
    }
}

// selecting players-section
const ulList = document.getElementById('select-list-id');
let listLength = ulList.children.length;
const selects = document.getElementsByClassName('select-btn');
// getting select buttons,and implementing click eventListener
for (const select of selects) {
    select.addEventListener('click', function (event) {
        // console.log(listLength)
        if (listLength < 5) {
            // creating list element
            const li = document.createElement('li');
            // finding targeted players name and setting it to li
            li.innerText = select.previousSibling.previousSibling.previousSibling.previousSibling.innerText;
            li.style.color = 'white'
            li.style.marginBottom = '16px'
            select.setAttribute('disabled', 'disabled');
            select.style.backgroundColor = 'gray';
            ulList.appendChild(li);
            listLength = ulList.children.length;
        }
        else {
            alert('You have already selected 5 best Players!')
        }
    })
}

// calculate Button
const playersExpenses = document.getElementById('players-expenses');
document.getElementById('calculate-btn').addEventListener('click', function () {
    // calling function to get inputvalue
    const inputValue = getValueFromInput('per-player');

    if (inputValue !== '') {
        playersExpenses.innerText = listLength * parseFloat(inputValue);
    }
    else {
        playersExpenses.innerText = '000';

    }
})

// calculate total button
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    // calling function to get input value
    const inputValueManger = getValueFromInput('manager-input');
    const inputValueCoach = getValueFromInput('coach-input');

    if (inputValueManger !== '' && inputValueCoach !== '') {
        const total = document.getElementById('total');
        total.innerText = parseFloat(inputValueManger) + parseFloat(inputValueCoach) + parseFloat(playersExpenses.innerText);
    }
    else {
        total.innerText = '000';

    }
})


