const num00 = document.getElementById('numDisplay')
const operadores = '/*-+%'

if (num00.value == null || num00.value == 0) {
    num00.value = 0
}

if (addEventListener("keypress(w)", num00)) {
    alert('oi')
}

function clearDisplay() {
    num00.value = 0
}

function deleteNumber() {
    num00.value = num00.value.slice(0, -1)
    if (num00.value == null || num00.value == 0) {
        num00.value = 0
    }
}

function sumFunciton(value) {
    if (num00.value.startsWith('0')) {
        num00.value = num00.value.slice(0, -1)
    }
    num00.value += value
}

function calculate() {
    num00.value = eval(num00.value)
}

function valueAdd(paramenter) {
    if (num00.value[num00.value.length - 1] == paramenter){
        return
    }
    num00.value += paramenter

}