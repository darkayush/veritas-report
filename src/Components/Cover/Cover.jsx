import React from 'react'

const Cover = () => {
  return (
    <div>
      {/* <img src="./public/home/demo-cov.webp" alt="" /> */}
      <video autoPlay muted loop
          style={{width:"100%",
          }}
        >
            <source src='./home/Gulf (1).webm' />
        </video>
    </div>
  )
}

export default Cover