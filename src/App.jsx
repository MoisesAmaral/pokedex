import React from 'react'
import {Switch, Route } from "react-router-dom"
import './styles/global.css'
import Home from './pages/Home'
import PokedexPage from './pages/PokedexPage'
import Lendarios from './pages/Lendarios'
import Documentations from './pages/Documentations'


export default function App() {
  return (
    <>
    <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/Pokedex"><PokedexPage/></Route>
        <Route path="/Lendarios"><Lendarios/></Route>
        <Route path="/Documentations"><Documentations/></Route>
    </Switch>
    </>
  )
}