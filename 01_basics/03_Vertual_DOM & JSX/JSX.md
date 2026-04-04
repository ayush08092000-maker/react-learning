<!-- ------------------------ JSX ---------------------------------->
                JSX = JavaScript + HTML 

👉 Tum JavaScript ke andar HTML jaisa code likh sakte ho.

<!-- EX. -->
❌ Normal JavaScript (without JSX):
        const element = document.createElement("h1");
        element.innerText = "Hello Ayush";

✅ JSX (React style): 
        const element = <h1>Hello Ayush</h1>;


🔥 JSX kyu use karte hain?
        ✔ Code clean hota hai
        ✔ HTML jaisa feel
        ✔ Easy to read
        ✔ React me fast development

<!------------ ⚠️ Important Rules ------------->

1️⃣ Single parent element:
        return (
            <div>
                <h1>Hello, frainds</h1>
                <p>Welcome</p>
            </div>
        );

2️⃣ class nahi, className use hota hai:
        <h1 className="title">Hello</h1>

3️⃣ JS inside {}:
        <h1>{5 + 5}</h1>


<!-- 🔥 How to create multiple nodes in JSX -->

1✅ using <div> :
        return (
          <div>
              <h1>Hello</h1>
              <p>Welcome</p>
          </div>
        );

2✅ using Fragment (Better way) 
        return (
          <>
            <h1>Hello</h1>
            <p>Welcome</p>
          </>
        );

3✅ Another way (React Fragment):
        -> import React from "react";

        return (
          <React.Fragment>
                <h1>Hello</h1>
                <p>Welcome</p>
          </React.Fragment>
        );


NOTE 👉 
"To create multiple nodes in JSX, wrap them inside a single parent element like <div> or React.Fragment."





