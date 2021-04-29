import '../App.css';
import PokemonCard from './PokemonCard.js';

const data = [
    {"id":1,"nombre":"fchipriani","url":"https://cdn.discordapp.com/attachments/837433079739842620/837433909200420905/fede.jpg","level":9,"type":{"name":"Rock","color":"#CDBC72"}},{"id":2,"nombre":"Seb","url":"https://media.discordapp.net/attachments/837433079739842620/837433420996673607/18.jpg","level":6,"type":{"name":"Rock","color":"#CDBC72"}},{"id":3,"nombre":"ldella","url":"https://cdn.discordapp.com/attachments/837433079739842620/837433846210887730/IMG-20180305-WA0004.jpg","level":4,"type":{"name":"Ghost","color":"#7874D5"}},{"id":4,"nombre":"fchipriani","url":"https://cdn.discordapp.com/attachments/837433079739842620/837433909200420905/fede.jpg","level":1,"type":{"name":"Steel","color":"#C3C2DA"}},{"id":5,"nombre":"fchipriani","url":"https://cdn.discordapp.com/attachments/837433079739842620/837433909200420905/fede.jpg","level":7,"type":{"name":"Flying","color":"#79A4FF"}},{"id":6,"nombre":"fchipriani","url":"https://cdn.discordapp.com/attachments/837433079739842620/837433909200420905/fede.jpg","level":5,"type":{"name":"Ice","color":"#96F1FF"}},{"id":7,"nombre":"fchipriani","url":"https://cdn.discordapp.com/attachments/837433079739842620/837433909200420905/fede.jpg","level":6,"type":{"name":"Dark","color":"#8F6956"}},{"id":8,"nombre":"fchipriani","url":"https://cdn.discordapp.com/attachments/837433079739842620/837433909200420905/fede.jpg","level":0,"type":{"name":"Water","color":"#56AEFF"}},{"id":9,"nombre":"fchipriani","url":"https://cdn.discordapp.com/attachments/837433079739842620/837433909200420905/fede.jpg","level":9,"type":{"name":"Flying","color":"#79A4FF"}},{"id":10,"nombre":"fchipriani","url":"https://cdn.discordapp.com/attachments/837433079739842620/837433909200420905/fede.jpg","level":4,"type":{"name":"Grass","color":"#87CB4F"}}]

function Entrenadores() {

    return (
        <div className="App">
            <h1>PokeDex</h1>
            <div id="poke_container" className="poke_container">
                {data.map(e => <PokemonCard entrenador={e} detailed={false} />)}
            </div>
        </div>
    );
}

export default Entrenadores;