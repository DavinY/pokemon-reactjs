import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MyPokemon from '../pages/MyPokemon';
import Home from '../pages/Home';
import PokemonDetail from '../pages/PokemonDetail';
import MyPokemonDetail from '../pages/MyPokemonDetail';

export default class MainRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/pokemon/:id' component={PokemonDetail} />
                <Route exact path='/myPokemon' component={MyPokemon} />
                <Route exact path='/myPokemon/:id' component={MyPokemonDetail} />
            </Switch>
        )
    }
}