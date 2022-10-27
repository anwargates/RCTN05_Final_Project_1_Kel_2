import React from 'react'
// import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";

export default function CardButtons(props) {
  // penggunaan useCart untuk mengimplementasikan sistem keranjang belanjaan
  const { addItem, items, removeItem } = useCart();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* button menuju link berita external */}
      <a href={props.props.url}>
        <div className='btn btn-primary'>
          {/* {console.log(props.props)} */}
          Show More
        </div>
      </a>
      <div
        // cek apakah berita sudah di save atau belum (untuk warna button)
        className={items.find(o => o.id === props.props.url) ? 'btn btn-danger' : 'btn btn-success'}
        onClick={() => {
          if (items.find(o => o.id === props.props.url)) {
            // jika sudah disave maka item diremove
            removeItem(props.props.url)
          } else {
            // jika belum disave maka item ditambahkan
            addItem(props.props)
          }
        }}>
        {/* cek apakah berita sudah di save atau belum (untuk teks button) */}
        {items.find(o => o.id === props.props.url) ? 'Unsave' : 'Save'}
      </div>
    </div>
  )
}
