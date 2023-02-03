import figlet from "figlet"
const { textSync } = figlet
import axios from "axios"

const randomNum = () => Math.floor(Math.random() * 1008) + 1;

axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum()}`)
    .then(function (res) {
        console.log(textSync(res.data.name, {
            font: 'bubble',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }))
    })
    .catch(function (err) {
        console.log(err);
    })