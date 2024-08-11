let userList = document.getElementById('userList')
userList.addEventListener('click', deleteUser)

function deleteUser(event) {
    if(event.target.nodeName !== "BUTTON"){
        return
    }
    if(event.target.classList = 'deleteButton') {
        let userItem = event.target.closest('li')
        userItem.remove()
    }
}