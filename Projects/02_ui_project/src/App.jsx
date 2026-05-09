import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
      color:'royalblue',
      intro: 'Young customers looking for secure and easy digital banking services for their daily financial activities.',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
      color:'lightseagreen',
      intro: 'Users with limited access to modern financial services who need simple digital banking support.',
      tag: 'Underbanked'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672691612351-7473de67b85c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
      color:'orange',
      intro: 'People living in areas where digital banking awareness and financial accessibility are still developing.',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
      color:'pink',
      intro: 'Professionals managing savings and transactions through modern and efficient digital banking platforms.',
      tag: 'Business'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672691611367-2917c0cbff0d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww',
      color:'black',
      intro: 'Regular users searching for reliable and user-friendly banking solutions for everyday financial needs.',
      tag: 'Average'
    }
  ]

  return (
    <div >
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App