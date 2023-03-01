import figlet from "figlet"
const { textSync } = figlet
import axios from "axios"

const randomNum = () => Math.floor(Math.random() * 1008) + 1;

// axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum()}`)
//     .then(function (res) {
//         console.log(textSync(res.data.name, {
//             font: 'bubble',
//             horizontalLayout: 'default',
//             verticalLayout: 'default',
//             width: 80,
//             whitespaceBreak: true
//         }))
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
let randNum = getRandomInt(1, 1009)

async function getRandPokemon(num) {
    try {

        let url = 'https://pokeapi.co/api/v2/pokemon/' + num
        const response = await axios.get(url);
        let name = response.data.num
        figlet.text(name, {
            font: '3D-ASCII'
        }, function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
        })
    } catch (err) {
        console.log(err)
    }
}

getRandPokemon(randNum)
