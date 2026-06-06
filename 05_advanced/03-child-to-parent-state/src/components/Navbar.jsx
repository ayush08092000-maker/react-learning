import React from 'react'

const Navbar = ({theme, setTheme}) => {  
    
    const changeTheme = ()=> {
        setTheme(theme === 'Light' ? 'Dark' : 'Light');
    }

  return (
    <div>

        <div className="nav" >

            <h2>AyushXploit</h2>
            <div >
                <a href="">Home</a>
                <a href="">Product</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>

        </div>

      <button onClick={changeTheme} ><h3>Change Theme</h3></button>

    </div>
  )
}

export default Navbar