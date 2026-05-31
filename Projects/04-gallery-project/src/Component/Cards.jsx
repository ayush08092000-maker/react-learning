import React from 'react'

const Cards = (props) => {

  return (
    <div>

      {/* Open original image in new tab when card is clicked */}
      <a href={props.elem.url} target='_blank'>

        {/* Image Container */}
        <div className='h-45 w-49 overflow-hidden bg-white rounded-xl'>

          {/* Image */}
          <img
            className='h-full w-full object-cover'
            src={props.elem.download_url}
            alt=""
          />
        </div>

        {/* Photographer/Author Name */}
        <h2 className='font-bold w-49 text-lg'>
          {props.elem.author}
        </h2>

      </a>

    </div>
  )
}

export default Cards