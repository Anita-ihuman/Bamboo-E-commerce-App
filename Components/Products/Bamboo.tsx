// import React, { useState } from 'react'
// import styles from './Featured.module.css'

// interface Content {
//   image: string
// }

// const App = () => {
//   const [Chair, setChair] = useState([
//     {
//       image: '/images/cabinet1.png',
//     },
//     {
//       image: '/images/cabinet2.png',
//     },
//     {
//       image: '/images/cabinet3.png',
//     },
//   ])
//   const [Cabinet, setCabinet] = useState([
//     {
//       image: '/images/cabinet1.png',
//     },
//     {
//       image: '/images/cabinet2.png',
//     },
//     {
//       image: '/images/cabinet3.png',
//     },
//   ])
//   const [Sofa, setSofa] = useState([
//     {
//       image: '/images/cabinet1.png',
//     },
//     {
//       image: '/images/cabinet2.png',
//     },
//     {
//       image: '/images/cabinet3.png',
//     },
//   ])
//   const [Bench, setBench] = useState([
//     {
//       image: '/images/cabinet1.png',
//     },
//     {
//       image: '/images/cabinet2.png',
//     },
//     {
//       image: '/images/cabinet3.png',
//     },
//   ])

//   return (
//     <>
//       <section className={styles.section}>
//         <h2>Bamboo Products</h2>
//         <ul>
//           <li onClick={}>CHAIR</li>
//           <li onClick={}>CABINET</li>
//           <li onClick={}>SOFA</li>
//           <li onClick={}>BENCH</li>
//         </ul>
//         <div className={styles.container}>
//           {Content.map((img, index) => (
//             <div key={index} className={styles.slider_content}>
//               <img src={img.image} alt="" className={styles.img} />
//             </div>
//           ))}
//         </div>
//         <div className={styles.loader}>
//           <img />
//         </div>
//       </section>
//     </>
//   )
// }

// export default App
