function cookies_fun(){
    document.getElementById('cookies_text').hidden = true;
    document.getElementById('cookies').hidden = true;
}

function isEmpty(){
    if (document.getElementById('name').value == "") {
        document.getElementById('name').classList.add('empty');
    }
    if (document.getElementById('venue_name').value == "") {
        document.getElementById('venue_name').classList.add('empty');
    }
    if (document.getElementById('venue_city').value == "") {
        document.getElementById('venue_city').classList.add('empty');
    }
    if (document.getElementById('state_city').value == "") {
        document.getElementById('state_city').classList.add('empty');
    }
    if (document.getElementById('email').value == "") {
        document.getElementById('email').classList.add('empty');
    }
    if (document.getElementById('subject').value == "") {
        document.getElementById('subject').classList.add('empty');
    }
    if (document.getElementById('message').value == "") {
        document.getElementById('message').classList.add('empty');
    }
}
