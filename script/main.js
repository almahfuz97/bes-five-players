const ulList = document.getElementById('select-list-id');

const selects = document.getElementsByClassName('select-btn');
let listLength = ulList.children.length;

for (const select of selects) {

    select.addEventListener('click', function (event) {
        // console.log(listLength)
        if (listLength < 5) {
            // creating list element
            const li = document.createElement('li');
            // finding players name and setting it to li
            li.innerText = select.previousSibling.previousSibling.previousSibling.previousSibling.innerText;
            li.style.color = 'white'
            li.style.marginBottom = '20px'
            select.setAttribute('disabled', 'disabled');
            select.style.backgroundColor = 'gray';
            ulList.appendChild(li);
            listLength = ulList.children.length;
            console.log(listLength);
        }
        else {
            alert('You have already selected 5 best Players!')
        }
    })

}