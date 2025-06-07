import Silk from "./components/Silk";
import GooeyNav from "./components/GooeyNav";
import EnterAnimation from "./components/EnterAnimation";

const pieces: string[] = [
    "/comp1.png",
    "/comp3.png",
    "/comp4.png",
    "/comp6.png",
];

const QuoteCallout = ({
  quote,
  author,
}: {
  quote: string;
  author?: string;
}) => (
  <div className="bg-gray-50 border-l-4 border-blue-600 p-6 my-6 rounded-md shadow-sm">
    <blockquote className="text-lg md:text-xl italic text-gray-800">
      “{quote}”
    </blockquote>
    {author && (
      <cite className="block mt-4 text-right text-sm text-gray-600 not-italic">
        — {author}
      </cite>
    )}
  </div>
);


function App() {

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Rules", href: "#contact" },
  ];

  return (
    <div style={{ position: "relative", width: "100vw", minHeight: "100vh" }}>
      {/* Silk Background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
      >
        <Silk />
      </div>

      {/* GooeyNav */}

       <div style={{ position: "fixed", top: 20, left: 580, zIndex: 2 }}>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      {/* Page Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "2rem",
          color: "white",
          textAlign: "center",
        }}
      >
        <EnterAnimation />
        {/* HERO SECTION */}
        <div
          style={{
            marginTop: "-13rem",
            marginBottom: "4rem",
            fontFamily: "'Libre Baskerville', sans-serif",
          }}
        >
          <h1 className="hero-title">
            fishersmen's wives
          </h1>
        </div> 

        {/* Photo Embed Section */}
        <section
          id="photo-embed"
          style={{
            marginTop: "15rem",
            width: "100vw",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "4rem 0 2rem 0",
            boxSizing: "border-box",
            overflow: "visible",
            opacity: "0.9",
          }}
        >
          {/* Left Text Box */}
          <div style={{
            flex: "1",
            maxWidth: "600px",
            textAlign: "left",
            padding: "2rem",
          }}>
            <h2 style={{
              fontSize: "5rem",
              fontWeight: "600",
              lineHeight: "1.2",
              marginBottom: "2rem",
              letterSpacing: "0.02em",
              background: "linear-gradient(90deg,#BC3012,rgb(58, 19, 19))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              borderRadius: "8px",
            }}>
              take control of your destiny
            </h2>
            <p style={{
              fontSize: "2rem",
              lineHeight: "1",
              opacity: "0.8",
              maxWidth: "500px",
              fontStyle: "italic",
              fontFamily: "'KoPub Batang', serif",
              color: "#BC3012",
            }}>
              every choice matters in this dark tale of revenge and redemption
            </p>
          </div>
         
          <div style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: 0,
          }}>
            <img
              src="/cards.png"
              alt="Featured"
              style={{
                width: "100%",
                maxWidth: "700px",
                height: "auto",
                borderRadius: "24px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </section>
        {/* About Section */}
        <section id="about" style={{ height: "100vh", padding: "2rem", justifyContent: "left"}}>
          <div style={{ marginTop: "2rem" }}>
            {/* Curved Info Box */}
            <div style={{
              backdropFilter: "blur(10px)",
              borderRadius: "30px",
              padding: "2rem",
              maxWidth: "500px",
              width: "90%",
              display: "flex",
              flexDirection: "column",
              gap: "0rem",
              margin: "0 auto",
              background: "rgba(255, 255, 255, 0.05)",

            }}>
              <h2 style={{
                fontSize: "5rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                fontFamily: "'Libre Baskerville', sans-serif",
                marginBottom: "1rem",
                color: "#BC3012",
                opacity: "0.9",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",

              }}>about</h2>
            
              <p style={{
                fontSize: "3rem",
                fontWeight: "300",
                lineHeight: "1.8",
                opacity: "0.9",
                font: "600 1.2rem '', sans-serif",
                textShadow: "10px 5px 2px rgba(0, 0, 0, 0.2)",
                
              }}>
                Fishermen’s Wives is a roll-and-move board game in which players, who take on the role of wives of fishermen, must kill their respective husbands for their inheritances. 
              </p>
              
               <p style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                opacity: "0.9",
                font: "500 1.2rem 'Libre Baskerville', sans-serif",
                textShadow: "10px 5px 2px rgba(0, 0, 0, 0.2)",
                
              }}>
They do so by traversing the board to gain wealth and reputation in any of the six locations on the board. As they travel, they must also strategically spend their fish and reputation to complete the three “kill conditions” for their husbands, which are also each located in different locations on the board. As they play, players develop relationships with one another: 
some may choose to form sapphic alliances with other players, co-conspiring to kill each other’s husbands and split the share. Others may choose to betray each other, having affairs with each other’s husbands to swindle their inheritances away. In this game where the material stakes are high and the emotional stakes even higher, players discover who they truly are—and what the costs of patriarchal takedown are. 
              </p>
              
            </div>
          </div>
        
        {/* Pieces Section */}
        <section style={{ marginTop: "2rem", padding: "2rem" }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            borderRadius: "30px",
            padding: "2rem",
          }}>
            {pieces.map((img, i) => (
              <img 
          key={i} 
          src={img} 
          alt={`Game Piece ${i + 1}`}
          style={{
            width: "100px",
            height: "auto",
            borderRadius: "12px",
            transition: "transform 0.3s ease",
            cursor: "pointer",
            
          }}
              />
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <div style={{ marginTop: "-20rem", fontSize: "2rem", borderRadius: "20px", padding: "2rem", background: "rgba(255, 255, 255, 0)", backdropFilter: "blur(10px)", border: "5px solid rgba(8, 4, 72, 0.58)", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.73)", maxWidth: "800px", margin: "2rem auto", textAlign: "center", fontFamily: "'Libre Baskerville', sans-serif", color: "white", opacity: "0.9", fontStyle: "italic" }}>
        <QuoteCallout
          quote="Refreshingly original and fun, Fishermen’s Wives is a game that will have you laughing and scheming with friends for hours."
          author="Stanford CS247G Student"
        />  
        </div>

           {/* Pieces Section */}
        <section style={{ marginTop: "2rem", padding: "2rem" }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            borderRadius: "30px",
            padding: "2rem",
          }}>
            {pieces.map((img, i) => (
              <img 
          key={i} 
          src={img} 
          alt={`Game Piece ${i + 1}`}
          style={{
            width: "100px",
            height: "auto",
            borderRadius: "12px",
            transition: "transform 0.3s ease",
            cursor: "pointer",
            
          }}
              />
            ))}
          </div>
        </section>

        </section>
        {/* Rules Section */}
        <section id="contact" style={{
          minHeight: "100vh",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          marginTop: "35rem",

        }}>
          <div
            style={{
              position: "relative",
              paddingTop: "max(60%,324px)",
              width: "70%",
              height: 0,
              margin: "2rem auto",
              display: "block",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                border: "none",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                overflow: "hidden"
              }}
              src="https://player.flipsnack.com?hash=RUJGN0JCQzlFOEMreGNzYjg4NXVuZg=="
              allow="autoplay; clipboard-read; clipboard-write"
              scrolling="no"
              frameBorder="0"
              seamless
              allowFullScreen
              title="Flipbook"
            ></iframe>
          </div>
          {/* Pieces Section */}
        <section style={{ marginTop: "-15rem", padding: "2rem" }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            borderRadius: "30px",
            padding: "2rem",
          }}>
            {pieces.map((img, i) => (
              <img 
          key={i} 
          src={img} 
          alt={`Game Piece ${i + 1}`}
          style={{
            width: "100px",
            height: "auto",
            borderRadius: "12px",
            transition: "transform 0.3s ease",
            cursor: "pointer",
            
          }}
              />
            ))}
          </div>
        </section>
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: "300",
            letterSpacing: "0.1em",
            marginTop: "3rem"
          }}>Our Team</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            width: "100vw",
            maxWidth: "95vw"
          }}>
            {[
              { name: "Gracielly Abreu", role: "Computer Science '26 | Developer", image: "/gracielly.jpeg" },
              { name: "Ingrid Nordberg", role: "Design '25 | Designer", image: "/ingrid.jpeg" },
              { name: "Izzy Meyerson", role: "Computer Science '25 | Designer", image: "/izzy.jpeg" },
              { name: "Stella Li", role: "Design '25 | Designer", image: "/gracielly.png" }
            ].map((member, index) => (
                <div key={index} style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)", 
                borderRadius: "20px",
                padding: "2rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                transition: "transform 0.3s ease",
                cursor: "pointer"
                }}>
                <div style={{
                  width: "120px",
                  height: "120px", 
                  borderRadius: "60px",
                  background: `url('${member.image}') no-repeat center center / cover`,
                  marginBottom: "1rem"
                }} />
                <h3 style={{
                  fontSize: "1.8rem",
                  fontWeight: "300",
                  marginBottom: "0.5rem"
                }}>{member.name}</h3>
                <p style={{
                  opacity: "0.8",
                  fontSize: "1.1rem", 
                  marginBottom: "1rem"
                }}>{member.role}</p>
                </div>
            ))}
          </div>
        </section>
      </div>
      {/* Move footer outside the inner content div */}
      <footer
        style={{
          width: "100vw",
          padding: "4rem 0",
          background: "rgba(0,0,0,0.12)",
          color: "#fff",
          textAlign: "center",
          fontSize: "1.1rem",
          letterSpacing: "0.04em",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          marginTop: "4rem"
        }}
      >
        © {new Date().getFullYear()} Fishermen’s Wives. All rights reserved.
      </footer>
    </div>
  );
}

export default App;