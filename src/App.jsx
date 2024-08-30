import { useState, useEffect } from "react";
function App() {

  const toppings = [
    {
      name: "Capsicum",
      price: 1.2
    },
    {
      name: "Paneer",
      price: 2.0
    },
    {
      name: "Red Paprika",
      price: 2.5
    },
    {
      name: "Onions",
      price: 3.0
    },
    {
      name: "Extra Cheese",
      price: 3.5
    },
    {
      name: "Baby Corns",
      price: 3.0
    },
    {
      name: "Mushroom",
      price: 2.0
    }
  ];
  const [sum, setSum] = useState(0)
  const [input, setInput] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  })
  console.log(input)

  useEffect(() => {
    const arr = (Object.values(input))
    let sum2 = 0;
    arr.map((el, index) => {
      if (el) {
        sum2 += toppings[index].price
      }
    })
    setSum(sum2)
  }, [input])
  return (
    <>
      <p className="text-pink-600 text-5xl font-bold font-serif w-8/12 text-center mb-5 ">Select Topping</p>

      <div className="w-8/12 border-2 rounded-lg">
        {
          toppings.map((el, index) => {

            return (<div className="flex justify-between p-4 m-4 font-serif text-2xl">
              <div className="flex" >
                <label>
                  <input className="w-5 h-5"
                    type="checkbox"
                    name={index}
                    checked={input.index}
                     //value={el.price}      // เพื่อให้ fn ล่างทำงาน
                    onChange={e => {
                      //check box html it have one attibute

                      //<input type="checkbox"    // attbของhtml
                      //this event(e) e.target.checked    //ถ้ามันถูกเช็ค จะทำการ setState value
                      // if(e.target.checked) setTotal(prev=> prev + e.target.value)    // ถ้าเกิด event ค่าก็บวกกัน 
                      // else setTotal(prev => prev - e.target.value)      // ถ้าไม่ได้ติ๊กค่าก็มาลบกัน
 
                      setInput(prv => ({ ...prv, [index]: !prv[index] }))
                    }} />

                </label>
                <p className="ml-2">{el.name}</p>
              </div>
              <p>฿{el.price.toFixed(2)}</p>
            </div>)
          })
        }
        <div className="flex justify-between p-4 m-4 border rounded-lg">
          <p className="font-serif text-2xl font-bold ">Total</p>
          <p className="font-serif text-2xl font-bold">฿{sum.toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}

export default App
