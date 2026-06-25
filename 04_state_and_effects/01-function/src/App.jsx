import React from 'react'

const App = () => {

  function btnClicked(){
    console.log("btn is clicked");    // 1. External fn.
    document.title = "Clicked";
  }
      
    // fn. to print input val.
  let inputChanging = (val) => {
    console.log(val);    
  }

    // fn to cature scrolling farword or backword?
  const pageScrolling = (elem) => {
    if(elem>0){
      console.log("farword scrolling...");      
    } else{
      console.log("backword scrolling...");      
    }
  }

  return (
    <div>       {/* 1. External fn. call */}
      <button onClick={btnClicked}>  {/* fn name with bracket -> btnClicked() will */}
        Click Me                     {/* call & run fn without click*/}
      </button>

                {/* 2. inline arrow fn. */}
      <button onDoubleClick={() => console.log("btn is dbl clicked.")}> 
        double click on me
      </button>

                {/* 3. inline fn. without name. */}
      <button onClick={function(){
        console.log('hello guys');        
      }}>
        Say hello
      </button> <br />


            {/* "Input Section" => to store input value */}
      <input type="text" placeholder='Enter your name'
          onChange={(elem) => 
            inputChanging(elem.target.value)
          } 
      />

          {/* Page scrolling section */}
      <div className="box" onWheel={(elem) => {
        ;pageScrolling(elem.deltaY)
      }}>
        <div className="pase1"></div>
        <div className="pase2"></div>
        <div className="pase3"></div>
      </div>

    </div>
  )
}

export default App