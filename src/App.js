import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import datas from "./data";

export default function App() {
   const cardData = datas.map((data) => {
      return <Card key={data.id} {...data} />;
   });
   return (
      <div>
         <Navbar />
         <Hero />
         <section className="card-list">{cardData}</section>
      </div>
   );
}
