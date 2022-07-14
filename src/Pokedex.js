import React, {Component} from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css'

class Pokedex extends Component {


    render(){
        let title;
        if(this.props.isWinner){
            title=<span>
                    <h1 className="Pokedex-winner">Winning Hand</h1>
                    <h4 className="Pokedex-winner">Total Experience: {this.props.exp}</h4>
                </span>
        } else {
            title=<span>
                    <h1 className="Pokedex-looser">Loosing Hand</h1>
                    <h4 className="Pokedex-looser">Total Experience: {this.props.exp}</h4>
                </span>
        }
        
        
        return(
            <div className="Pokedex">
                {title}
                <div className="Pokedex-card">{this.props.pokemon.map((p)=>(<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>))}</div>
            </div>
        )
    }
}

export default Pokedex