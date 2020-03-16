let submit = document.getElementById('submit');
let priceMoney = document.getElementsByClassName('priceMoney');
console.log(priceMoney);

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let from = document.getElementById('inputFrom').value;
    let where = document.getElementById('inputWhere').value;
    let weight = document.getElementById('inputWeight').value;
    let length = document.getElementById('inputLength').value;
    let width = document.getElementById('inputWidth').value;
    let height = document.getElementById('inputHeight').value;
    let descriptions = document.getElementById('inputDescriptions').value;
    if (from === '' || where === '' || weight === '' || length === '' || width === '' || height === '') {
        let star = document.getElementsByClassName('star');
        let all = document.getElementsByClassName('form-control');
        for (let i = 0; i < all.length; i++) {
            if (all[i].value === '' || all[i].value <= 0.5) {
                star[i].style.color = "red";
                all[i].style.border = "1px solid red"
            } else {
                star[i].style.color = "black";
                all[i].style.border = "1px solid #ced4da"
            }
        }
    } else {
        document.getElementsByClassName('price')[0].style.display = "block";
        let standard = Math.floor(((length * width * height) / 7000) * 20);
        let express = Math.floor(((length * width * height) / 7000) * 40);
        let office = Math.floor((((length * width * height) / 7000) * 20) + 150);
        let door = Math.floor((((length * width * height) / 7000) * 20) + 300);
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


    console.log(weight)
});