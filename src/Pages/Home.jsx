import React from 'react'
import './Home.css';

const Home = () => {
 const kategoriyasi = [
  { name: 'iPhone', img: 'https://support.apple.com/content/dam/edam/applecare/images/homepage/nav_icons/iphone_nav_icon_2x.png' },
    { name: 'Mac', img: 'https://support.apple.com/content/dam/edam/applecare/images/homepage/nav_icons/mac_nav_icon_2x.png' },
    { name: 'iPad', img: 'https://support.apple.com/content/dam/edam/applecare/images/homepage/nav_icons/ipad_nav_icon_2x.png' },
    { name: 'Watch', img: 'https://support.apple.com/content/dam/edam/applecare/images/homepage/nav_icons/watch_nav_icon_2x.png' },
    { name: 'Vision', img: 'https://support.apple.com/content/dam/edam/applecare/images/homepage/nav_icons/vision_pro_nav_icon_2x.png' },
    { name: 'AirPods', img: 'https://support.apple.com/content/dam/edam/applecare/images/homepage/nav_icons/airpods_nav_icon_2x.png' },
    { name: 'TV', img: 'https://support.apple.com/content/dam/edam/applecare/images/homepage/nav_icons/tv_nav_icon_2x.png' },
 ]; 

 
  return (
  <div className="home">
    
    <section className="kategoriler">
      {kategoriyasi.map((item) => (
        <div className="kategori-kart" key={item.name}>
          <img src={item.img} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </section>

    
    <section className="hizli-kartlar">
      <a href="#" className="hizli-kart">
        <span className="ikon">✍️</span>
        <p>Forgot Apple ID password</p>
      </a>
      <a href="#" className="hizli-kart">
        <span className="ikon">🛠️</span>
        <p>Apple Repair</p>
      </a>
      <a href="#" className="hizli-kart">
        <span className="ikon">🧾</span>
        <p>Billing and subscriptions</p>
      </a>
    </section>

    <section className="arama">
      <h2>Search for more topics</h2>
      <input type="text" placeholder="Search Support" />
    </section>

    <section className="blok">
      <h2>Apple Support on YouTube</h2>
      <p>
        Check out our official YouTube channel to help you get the most from
        your Apple devices and services.
      </p>
      <a href="https://www.youtube.com/@AppleSupport" target="_blank" rel="noreferrer">
        Visit Apple Support on YouTube ↗
      </a>
    </section>


    <section className="blok">
      <h2>Join free sessions at your Apple Store</h2>
      <p>Learn about the latest features and how to go further with your Apple devices.</p>
      <a href="#">Sign up ›</a>
    </section>
  </div>


)


const Home = () => {
  return (
    <div className="home-container">
      <section className="top-grid">
        <div className="card get-support">
          <h2>Get Support</h2>
          <p>Give us a few details and we’ll offer the best solution. Connect by phone, chat, email, and more.</p>
          <button className="btn-dark">Start now</button>
          <img src="" alt="Get Support" className="card-img" />
        </div>

        <div className="card support-app">
          <h2>Apple Support app</h2>
          <p>Get help for all of your Apple products in one place, or connect with an expert.</p>
          <a href="#download" className="blue-link">Download ↗</a>
          <a href="#know" className="blue-link">Get to know the Apple Support app ↗</a>
          <img src="" alt="Support App" className="card-img" />
        </div>
      </section>

    
      <section className="center-stack">
        
        <div className="card text-center">
          <h2>My Support</h2>
          <p>Get warranty information, check your coverage status, or look up an existing repair.</p>
          <a href="#signin" className="blue-link">Sign in with your Apple ID &gt;</a>
        </div>

        
        <div className="card text-center">
          <h2>AppleCare+</h2>
          <p>Get unlimited repairs for accidental damage protection, 24/7 priority access to Apple experts, and more.</p>
          <a href="#applecare" className="blue-link">Learn more &gt;</a>
          <img src="" alt="AppleCare+" className="card-img-large" />
        </div>

       
        <div className="card text-center">
          <h2>Apple Trade In</h2>
          <p>Turn an eligible device into credit towards a new one, or recycle it for free.</p>
          <a href="#tradein" className="blue-link">Learn more &gt;</a>
          <img src="" alt="Apple Trade In" className="card-img-large" />
        </div>

     
        <div className="card text-center">
          <h3>Designing for longevity</h3>
          <p className="small-text">
            At Apple, we are always working to create the best experience for our customers...
            <a href="#pdf" className="blue-link"> View (PDF)</a>
          </p>
        </div>

        
        <div className="bottom-grid">
          <div className="card text-left">
            <h3>Beware of counterfeit parts</h3>
            <p className="small-text">
              Some counterfeit and third party power adapters and batteries may not be designed properly...
            </p>
          </div>

          <div className="card text-left">
            <span className="gift-icon">🎁</span>
            <h3>Be aware of gift card scams</h3>
            <p className="small-text">
              Be aware of scams involving Apple Gift Cards, App Store & iTunes Gift Cards...
            </p>
            <a href="#scams" className="blue-link">Learn more &gt;</a>
          </div>
        </div>
      </section>
    </div>
  );
};
}

export default Home
