import { useState } from 'react'
import Person from './Q1'
import Button from './Q2'
import Header from './Q3'
import List from './Q4'
import './App.css'

function App() {
    function onClick(){
    alert("Onclick fuction called")
  }
const mylist = ['item1','item2','item3'];

  return (
    <>
      <nav>
      <Header text = "Header (from Component)"></Header>
      </nav>
      <div>
      <Person name = "Akash" age = "20"></Person>
      <Button text = "Submit"  OnClick = {onClick}></Button>
      <List items = {mylist}></List>
      </div>
    </>
  )
}

export default App
