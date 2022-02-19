class Cat {
    constructor(nickname, name, number, breed, food, sex, comment) {
        this.nickname = nickname;
        this.name = name;
        this.number = number;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
        this.comment = comment;
    }
}
document.querySelector('button').onclick = () => {
    let myCat = new Cat()
    myCat.nickname = document.querySelector('#nickname').value;
    myCat.name = document.querySelector('#name').value;
    myCat.number = document.querySelector('#number').value;
    let sel = document.querySelector('#breed').options.selectedIndex;
    myCat.breed = document.querySelector('#breed').options[sel].text;
    //let checkboxFood = document.querySelector('.food').checkedIndex;
    //myCat.food = document.querySelector ('.food') [checkboxFood].value;
    myCat.sex = document.querySelector('input[name="sex"]:checked').value;

    let checkboxFood = document.querySelectorAll('.food');
    let foodChecked = [];
    for (i = 0; i <= foodChecked.length; i++) {
        if (checkboxFood[i].checked) {
            foodChecked.push(checkboxFood[i].value);
        }
    }
    myCat.food = foodChecked;
    console.log (myCat)
}