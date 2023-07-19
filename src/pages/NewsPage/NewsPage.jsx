import React from 'react'
import "./NewsPage.css"

const NewsPage = () => {
  return (
    <div className='NewsPage'>
        <div className='NewsPage__main'>
            <img src="https://cdn.marvel.com/content/1x/news_articles-mas_dsk_01.jpg" alt="" srcset="" />
            <p className='NewsPage__main'>Marvel News</p>
        </div>
          <div className='movieNews-container'>
          <p>Latest Movies news</p>
          <div className='movieNews'>
            <a href="/">
                <img src="https://cdn.marvel.com/content/1x/guardians_15.png" alt="" />
            </a>
            <p>Movies</p>
            <p>Guardians of the Galaxy Vol.3' Blasts Onto Disney+ on August 2 </p>
          </div>
          </div>

          <div className='comicsNews-container'>
          <p>Latest Comics news</p>
          <div className='comicsNews'>
            <a href="/">
                <img src="https://cdn.marvel.com/content/1x/avengers_unlimited_card_image_4.jpg" alt="" />
            </a>
            <p>Movies</p>
            <p>Guardians of the Galaxy Vol.3' Blasts Onto Disney+ on August 2 </p>
          </div>
          </div>
    </div>
  )
}

export default NewsPage