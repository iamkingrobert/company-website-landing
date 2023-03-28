import React from 'react'
import Card from './Card'

export default function Black() {
  return (
    <div>
        <div className="container ">
        <div className="row">
            <div className="col-md-12 text-center culture"><h1>WHAT IS BLACK</h1></div>
        </div>
        <div className="card__container">
        <Card imgSrc="Images/CA New.png" title="Black Is Beauty" description="My black roots stops me from being uprooted Ain't just colour for an outer layer." className="card-title card-text" />
        <Card imgSrc="Images/Beautifully Flawed.png" title="Beautifully Flawed" description="Beautiful as a bed of milky white clouds. Black is as beautiful as soft as a newborn baby hair." className="card-title card-text" />
        <Card imgSrc="Images/mandela.png" title="Black Is Exellence" description="I'm an African king. My black skin is a symbol of strength! My black skin is a symbol of beauty" className="card-title card-text" />
        <Card imgSrc="Images/Afro.jpg" title="Black Is Pride" description="Being black is my pride and this I will not hide as I ride on the fertile land." className="card-title card-text" />
        </div>
        </div>
    </div>
  )
}
