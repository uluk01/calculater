let submit = document.getElementById('submit');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    let from = document.getElementById('inputFrom').value;
    let where = document.getElementById('inputWhere').value;
    let weight = document.getElementById('inputWeight').value;
    let length = document.getElementById('inputLength').value;
    let width = document.getElementById('inputWidth').value;
    let height = document.getElementById('inputHeight').value;
    let star = document.getElementsByClassName('star');
    let all = document.getElementsByClassName('form-control');
    let descriptions = document.getElementById('inputDescriptions').value;
    if (from === '' || where === '' || weight === '' || length === '' || width === '' || height === '' || all[0].value === all[1].value) {
        for (let i = 0; i < all.length; i++) {
            if (all[i].value === '' || all[i].value <= 0.5) {
                star[i].style.color = "red";
                all[i].style.border = "1px solid red"
            } else if (all[0].value === all[1].value) {
                star[0].style.color = "red";
                star[1].style.color = "red";
                all[0].style.border = "1px solid red";
                all[1].style.border = "1px solid red"
            } else {
                star[i].style.color = "black";
                all[i].style.border = "1px solid #ced4da"
            }
        }

    } else {
        document.getElementsByClassName('price')[0].style.display = "block";
        let standard = Math.floor(((length * width * height) / 7000) * (weight * 20));
        let express = Math.floor(((length * width * height) / 7000) * (weight * 40));
        let office = Math.floor((((length * width * height) / 7000) * (weight * 20)) + 150);
        let door = Math.floor((((length * width * height) / 7000) * (weight * 20)) + 300);
        if (from === 'Баткен, Кыргызстан' || where === 'Баткен, Кыргызстан') {
            standard = standard + 150;
            express = express + 150;
            office = office + 150;
            door = door + 150
        }
        document.getElementsByClassName('priceMoney')[0].innerHTML = standard.toString();
        document.getElementsByClassName('priceMoney')[1].innerHTML = office.toString();
        document.getElementsByClassName('priceMoney')[2].innerHTML = door.toString();
        document.getElementsByClassName('priceMoney')[3].innerHTML = express.toString();

    }
});

let priceLink = document.getElementsByClassName('priceLink');
let priceMoney = document.getElementsByClassName('priceMoney');
let priceDay = document.getElementsByClassName('priceDay');
for (let i = 0; i < priceLink.length; i++) {
    priceLink[i].addEventListener('click', function (e) {
        e.preventDefault();
        console.log(e.target);
        for (let j = 0; j < priceLink.length; j++) {
        if(priceLink[i] === priceLink[j]){
            priceLink[j].style.backgroundColor = '#FFC107';
            priceMoney[j].style.backgroundColor = 'red';
            priceDay[j].style.backgroundColor = 'red';
        }else {
            priceLink[j].style.backgroundColor = 'white';
            priceMoney[j].style.backgroundColor = 'white';
            priceDay[j].style.backgroundColor = 'white';
        }
        }
    });
}

