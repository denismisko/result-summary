import "./sass/App.scss";


import data from "./data.json";

function App() {
  return (
    <>
      <main>
        <div className="flex">
          <div className="results">
            <h2>Your Result</h2>
            <p className="circle">
              <span className="big-number">76</span>
              <span className="small-number">of 100</span>
            </p>
            <div className="message">
              <h3>Great</h3>
              <p>
                You scored higher than 65% of <br />
                the people who have taken <br />
                these tests.
              </p>
            </div>
          </div>
          <div className="summary">
            <h2>Summary</h2>
            <ul id="summary-score">
              {data.map((item, index) => (
                <li className={`summary-box${index + 1}`} key={item.category}>
                  <span className={`category${index + 1}`}>
                    <img src={item.icon} alt="" /> {item.category}
                  </span>
                  <span>
                    <span className="player-score">{item.score}</span>
                    <span className="full-score"> / 100</span>
                  </span>
                </li>
              ))}
            </ul>
            <button> Continue</button>
          </div>
        </div>
      </main>
      <footer className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by 
        <a href="#" rel="noreferrer">
          Denis Miškolci
        </a>
        .
      </footer>
    </>
  );
}

export default App;
