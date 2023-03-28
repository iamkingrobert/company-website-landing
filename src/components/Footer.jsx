import React from 'react'

export default function Footer() {
  return (
    <div>
         <div className="container-fluid bg-black">
          <div className="footer__container">
            <div className="col-md-4 marg">
                <h3>Ghana</h3>
                <p>Accra</p>
                <p>Office Address:</p><a href="/">Coderain Africa, Parsnip, East Legon, Accra</a>
            </div>
            <div className="col-md-4 marg">
                <h3>Nigeria</h3>
                <p>Lagos</p>
                <p>Office Address:</p><a href="/">4th Floor, Epic Tower, 235 Ikorodu-Ososun Rd. Lagos</a>
            </div>
            <div className="col-md-4 marg">
                <h3>Kenya</h3>
                <p>Nairobi</p>
                <p>Office Address:</p><a href="/">Crescent Business Centre, The Crescent, Nairobi</a>
           </div>
          </div>
         </div>
    </div>
    
  )
}
