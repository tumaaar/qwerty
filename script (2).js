function checkName() {
    const firstnameInp = document.querySelector(`#firstnameInp`)
    const secondname = document.querySelector(`#secondname`)
    for (let lett of firstnameInp.value) {
        if (+lett) {
            alert(`Numbers in the name field cannot be`)
            return false
        } else {
            return true
        }
    }
    for (let lett of secondname.value) {
        if (+lett) {
            alert(`Numbers in the name field cannot be`)
            return false
        } else {
            return true
        }
    }
}
function exactName() {
    const exactName = document.querySelector(`#exactName`).value
    for (let lett of exactName) {
        if (+lett) {
            alert(`Numbers in the name field cannot be`)
            return false
        } else {
            return true
        }
    }
}
const emailInput = document.querySelector(`#emailInput`)

function checkEmail() {
    if (emailInput.value.includes(`@`) && emailInput.value.includes(`.`)) {
        return true
    } else {
        emailInput = ``
        alert(`Wrong mail form`)
        return false
    }
}
function chechPostalAddress() {
    const postalAddress = document.querySelector(`#postalAddress`).value
    if (postalAddress[0] == 0 && postalAddress.split(` `)[0].length == 6 && postalAddress.includes(`Kazakhstan`)) {
        return true
    } else {
        alert(`Wrong form filling address and postal code`)
        return false
    }
}
function checkPhone() {
    const phoneInp = document.querySelector(`#phoneInp`).value
    if (phoneInp[0] == `+` && phoneInp.length == 12) {
        return true
    } else {
        alert(`Incorrect number form`)
        return false
    }
}
function checkContactPhone() {
    const contactPhone = document.querySelector(`#contactPhone`).value
    if (contactPhone[0] == `+` && contactPhone.length == 12) {
        return true
    } else {
        alert(`Incorrect number form`)
        return false
    }
}
function checkFax() {
    const faxInp = document.querySelector(`#faxInp`).value
    if (faxInp[0] == `+` && faxInp.length == 12) {
        return true
    } else {
        alert(`Incorrect number form`)
        return false
    }
}
const numInp = document.querySelector(`#numInp`)
numInp.addEventListener(`change`, () => {
    if (numInp.value < 0) {
        numInp.value = 0
    }
})
function checkLocation(input) {
    const inputValue = document.querySelector(`#${input}`)
    if (inputValue.value.toLowerCase() == `astana` || inputValue.value.toLowerCase() == `almaty`) {
        return true
    } else {
        alert(`Select city Astana/Almaty`)
        return false
    }
}
const birthInp = document.querySelector(`#birthInp`)
birthInp.addEventListener(`change`, function checkDate() {
    if (+birthInp.value.split(`-`)[0] > new Date().getFullYear() - 122) {
        return true
    } else {
        alert(`You entered the wrong year`)
        birthInp.value = ``
        return false
    }
})
const submitBtn = document.querySelector(`#submitBtn`)
submitBtn.addEventListener(`click`, () => {
    if (checkName()
    && exactName()
    && checkEmail()
    && chechPostalAddress()
    && checkPhone()
    && checkContactPhone()
    && checkFax()
    && checkLocation(`issuedInp`)
    && checkLocation(`placeBirthInp`)) {
        alert(`Все УСПЕШНО!`)
    } else {
        alert(`Исправьте ошибки и отправьте заново`)
    }
})
