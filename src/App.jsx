import React from "react";
import { useState } from "react";

// Task-1----------------------------------------------------------------

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const upCount = () => {
//     setCount(count + step);
//   };
//   const downCount = () => {
//     if (count > 0) {
//     setCount(count - step);
//     }
//   };
//   const upStep = () => {
//     setStep(step + 1);
//   };
//   const downStep = () => {
//     if (step > 0) {
//     setStep(step - 1);
//     }
//   };

//   return (
//     <div div className='text-center mt-[200px]'>
//       <div className='mb-[20px]'>
//         <h1 className=' text-[#2f5b9e] text-[36px]'>{count} metr</h1>
//         <button className=' btn btn-danger mr-2' onClick={downCount}>Ortga yurish</button>
//         <button className=' btn btn-success' onClick={upCount}>Oldinga yurish</button>
//       </div>
//       <div>
//         <h1 className=' text-[36px] text-[#47efd6]'>Qadam kattaligi: {step} metr</h1>
//         <button className=' btn btn-danger mr-2' onClick={downStep}>-</button>
//         <button className=' btn btn-success' onClick={upStep}>+</button>
//       </div>
//     </div>
//   )
// };

//Task-2------------------------------------------------------------------

// export default function App() {

//     const [active, setActive] = useState(false);
//     const [text, setText] = useState("Please enter!");
//     const [btn, setBtn] = useState("Log In");

//     const changeActive = () => {
//         setActive(!active);
//         if(active) {
//             setText("Please enter!");
//             setBtn("Log In");
//         }else {
//             setText("Welcome!");
//             setBtn("Log Out");
//         }
//     };

//   return (
//     <div className=' text-center mt-[200px]'>
//       <button onClick={changeActive} className=' btn btn-warning mb-[20px]'><span className='text-[#fff] text-[20px]'>{btn}</span></button>
//         <h1 className=' text-[36px] text-[#55d787]'>{text}</h1>
//     </div>
//   )
// };

// Task-3------------------------------------------------------------------

// export default function App() {
//     const [counters, setCounters] = useState([0])

//     const addCounter = () => {
//         const item = counters[counters.length - 1] + 1
//         counters.push(item)
//         setCounters([...counters])
//     }

//     const increaseItem = (index) => {
//         counters[index] += 1
//         setCounters([...counters])
//     }
//     const decreaseItem = (index) => {
//         if (counters[index] > 0) {
//             counters[index] -= 1
//             setCounters([...counters])
//         }
//     };

//   return (
//     <div className=' text-center'>
//       <button onClick={addCounter} className=' btn btn-success mt-[20px] mb-[30px]'>Add Counter</button>
//       {
//         counters.map((item, index) => {
//           return (
//             <div key={index} className='flex justify-center items-center gap-2'>
//               <button onClick={()=> increaseItem(index)} className=' btn btn-success'>+</button>
//               <span className=' text-[32px]'>{item}</span>
//               <button onClick={()=> decreaseItem(index)} className=' btn btn-danger'>-</button>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// };

// +Task-boolean----------------------------------------------------------------

// export default function App() {

//     const [active, setActive] = useState(true);

//     const changeActive = () => {
//         setActive(!active);
//     };

//   return (
//     <div className=' text-center mt-[200px]'>
//       <button onClick={changeActive} className=' btn btn-warning mb-[20px]'><span className='text-[#fff] text-[20px]'>Change active</span></button>
//       {
//         active? <h1 className=' text-[36px] text-[#55d787]'>Active</h1> : <h1 className=' text-[36px] text-[#ff4e4e]'>Passive</h1>
//       }
//     </div>
//   )
// }

// Task input element ----------------------------------------------------------------

// export default function App() {
//   const [number, setNumber] = useState();
//   const [counter, setCounter] = useState([]);

//   const addCounter = () => {
//     if (number) {
//         counter.push(number);
//     setCounter([...counter]);
//     }
//   };

//   const increaseItem = (index) => {
//     counter[index] += 1;
//     setCounter([...counter]);
//   };

//   const decreaseItem = (index) => {
//     if (counter[index] > 0) {
//       counter[index] -= 1;
//       setCounter([...counter]);
//     }
//   };

//   const handleChange = (event) => {
//     event.preventDefault();
//     setNumber(+event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         className=" form-control my-3"
//         placeholder="Add your number"
//         onChange={handleChange}
//       />
//       <button className=" btn btn-info text-[20px] text-white" onClick={addCounter}>
//         Add counter
//       </button>
//       {counter.map((item, index) => {
//         return (
//           <div key={index} className="flex items-center gap-2">
//             <button
//               className=" btn btn-success"
//               onClick={() => increaseItem(index)}
//             >
//               +
//             </button>
//             <span className=" text-[32px]">{item}</span>
//             <button
//               className=" btn btn-danger"
//               onClick={() => decreaseItem(index)}
//             >
//               -
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// React-Lesson-3 Homework ----------------------------------------------------------------

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target[0].value.length && event.target[1].value.length && event.target[2].value.length && event.target[3].value.length) {
      let user = {
        name: event.target[0].value,
        age: event.target[1].value,
        phone: event.target[2].value,
        address: event.target[3].value
      }
      users.push(user);
      setUsers([...users]);
      event.target[0].value = "";
      event.target[1].value = "";
      event.target[2].value = "";
      event.target[3].value = "";
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td>T/R</td>
                  <td>Name</td>
                  <td>Age</td>
                  <td>Phone</td>
                  <td>Address</td>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td >{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className=" text-center">Add user</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} id="todo">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control my-[10px]"
                  />
                  <input
                    type="number"
                    placeholder="Age"
                    className="form-control my-[10px]"
                    max={80}
                    min={18}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="form-control my-[10px]"
                    minLength={9}
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control my-[10px]"
                  />
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" form="todo">
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
