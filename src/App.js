// import logo from "./logo.svg";
import "./App.css";
import A from "././image/A.jpg";
import { useState } from "react";

const App = () => {
  const [showForm, setShowForm] = useState(true);
  const [currentCard, setCurrentCard] = useState(1);
  const pesanWhatsapp = "Makasih Sayang😍😍😍";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name === "nur") {
      setShowForm(false);
    } else if (name !== "nur") {
      alert("EH Kamu Bukan Pacar Aku Kamu Impostor!!!!🗿🗿🗿🗿");
    }
  };

  const handleCardClose = () => {
    setCurrentCard(currentCard + 1);
  };

  const openWa = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=6282296831858&text =" +
        pesanWhatsapp,
      "&type=phone_number&app_absent=0"
    );
  };
  return (
    <div>
      <div className="container center">
        <div className="card">
          {showForm ? (
            <form onSubmit={handleFormSubmit}>
              <label>
                <input
                  placeholder="Enter Your Fullname❤️"
                  type="text"
                  name="name"
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div>
              {currentCard === 1 && (
                <div>
                  <h3>Hai Sayang❤️</h3>
                  <p>
                    Aku sayang kamu banyak-banyak maaf yah akhir-akhir ini
                    sering berantem aku tetap sayang kamu kok meskipun kamunya
                    ngambek mulu🗿
                  </p>
                  <button onClick={handleCardClose}>Close</button>
                </div>
              )}
              {currentCard === 2 && (
                <div>
                  <h3>❤️</h3>
                  <p>
                    Semangat terus yah sayang aku bakal dukung kamu terus,
                    sayang sama kamu dan bakal selalu ada buat kamu, makasih
                    banyak buat aku jadi yang lebih baik dari sebelumnya{" "}
                  </p>
                  <button onClick={handleCardClose}>Close</button>
                </div>
              )}
              {currentCard === 3 && (
                <div className="image">
                  <h3>Aku sayang kamu😍😍</h3>
                  <img className="img" src={A} alt="gambar" />
                  <button className="button" onClick={openWa}>
                    Balas Pesan Pacar❤️
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
