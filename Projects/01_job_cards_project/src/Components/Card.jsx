import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = ({ brandLogo, company, datePosted, post, tag1, tag2, pay, location }) => {  //using props destructuring 

    console.log({company});

  return (
        <div className="card">

            <div>                
                <div className="top">
                    <img src={brandLogo} alt="a" />
                    <button>Save <Bookmark size={18} /> </button>
                </div>

                <div className="center">
                    <h3>{company} <span>{datePosted}</span> </h3>
                    <h2>{post} </h2>
                    <div className='tag'>
                        <h4>{tag1}</h4>
                        <h4>{tag2}</h4>
                    </div>
                </div>

            </div>

            <div className="bottom">
                <div>
                    <h3>{pay}</h3>
                    <p>{location}</p>
                </div>
                <button>Apply Now</button>
            </div>

        </div>
  )
}

export default Card