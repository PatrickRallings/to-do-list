const listofToDoItems = document.getElementById('listActual')
const listInput = document.querySelector('input')
const inputButton = document.getElementById('addButton')
const showButton = document.getElementById('showButton')
let newItem = document.createElement('li')

showButton.addEventListener('click', function() {
    if (showButton.innerText === 'Show Daily Items') {
        showButton.innerText = 'Hide Daily Items'
        document.querySelectorAll('.permItem').forEach(a=>a.style.display = 'block');
    } else {
            showButton.innerText = 'Show Daily Items'
            document.querySelectorAll('.permItem').forEach(a=>a.style.display = 'none');
    }
})

inputButton.addEventListener('click', function() {
    let newItem = document.createElement('li')
    let removeListItem = () => {
        newItem.remove()
    }
    newItem.innerHTML = listInput.value
    listofToDoItems.appendChild(newItem)
    listInput.value = ''
    newItem.addEventListener('click', function(){
        newItem.style.textDecoration = 'line-through'
    })
    newItem.addEventListener('click', function() {
        setTimeout(removeListItem, 1000)
    })
})
