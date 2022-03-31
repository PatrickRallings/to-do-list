const listofToDoItems = document.getElementById('listActual')
const listInput = document.querySelector('input')
const inputButton = document.getElementById('addButton')
let newItem = document.createElement('li')

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