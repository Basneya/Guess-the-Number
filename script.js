let guessnumber = Math.floor(Math.random() * 100) + 1

function checknumber() {
    let val = document.getElementById('in').value
    if (val === '') {
        alert('Type a number')
    } else {
        let num = parseInt(document.getElementById('in').value)
        if (num === guessnumber)
            document.getElementById('out').innerHTML = 'Got the result'
        else if (num > guessnumber)
            document.getElementById('out').innerHTML = 'Guess a Smaller number'
        else
            document.getElementById('out').innerHTML = 'Guess a Bigger number'

    }

}