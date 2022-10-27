import React from "react";
import CardSource from "./CardSource";
import CardTitle from "./CardTitle";
import CardDesc from "./CardDesc";
import CardButtons from "./CardButtons";
import CardAuthor from "./CardAuthor";


// function template cards yang digunakan untuk tampilan berita di menu utama
function Card(props) {

  return (
    <div className="card-deck" style={{ gap: '2rem' }}>
      {/* {console.log(props.props)} */}
      {props.props.map((news, id) => {
        // menyalin objek dari API ke objek baru untuk ditambahkan id dan price
        let newsCopy = JSON.parse(JSON.stringify(news))
        newsCopy.id = news.url
        newsCopy.price = news.author
        // newsCopy.isSaved = false

        // elemen cards dengan atomize
        return (
          <div key={id} className="card" style={{ minWidth: '15vw' }}>
            <div className="card-body">
              <CardSource props={newsCopy} />
              <CardTitle props={newsCopy} />
              <CardAuthor props={newsCopy} />
              <CardDesc props={newsCopy} />
            </div>
            <div className="card-footer">
              <CardButtons props={newsCopy} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
