import Silk from "./components/Silk";
import GooeyNav from "./components/GooeyNav";
import EnterAnimation from "./components/EnterAnimation";
import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

      {/* GooeyNav (Fixed to the top-right) */}
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
        <div style={{ marginTop: "-13rem", marginBottom: "4rem" }}>
          <h1 className="hero-title">
            fishersmans wives
          </h1>
        </div>

        {/* Game Box Section */}
        <section
          id="game-box"
          style={{
            height: "60vh",
            marginTop: "20rem", // reduced for less gap
            marginBottom: 0,
            marginLeft: "-1rem",
            padding: "0 4vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            maxWidth: "100vw",
            boxSizing: "border-box",
            gap: "4vw",
          }}
        >
          <div style={{
            transform: `
              rotateX(${isVisible ? '0' : '-30'}deg) 
              rotateY(${isVisible ? '0' : '-30'}deg)
              translateZ(${isVisible ? '0' : '-150px'})
            `,
            opacity: isVisible ? 1 : 0,
            transition: "all 10.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
            position: "relative"
          }}>
            <div style={{
              position: "relative",
              animation: "float 10s ease-in-out infinite"
            }}>
              <img 
                src="/src/assets/box.png" 
                alt="Game Box"
              />
            </div>
          </div>
          {/* Available At Box */}
          <div style={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "2rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            minWidth: "600px",
            minHeight: "300px",
            gap: "1.5rem",
          }}>
            <span style={{
              fontWeight: 500,
              fontSize: "1.2rem",
              letterSpacing: "0.04em",
              color: "#fff",
              marginBottom: "0.5rem"
            }}>
              Available at
            </span>
            <div style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center"
            }}>
              <img
                src="src/assets/target.png"
                alt="Target"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  padding: "4px"
                }}
              />
              <img
                src="src/assets/amazon.png"
                alt="Amazon"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  padding: "4px"
                }}
              />
              <img
                src="src/assets/walmart.png"
                alt="Walmart"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  padding: "4px"
                }}
              />
            </div>
          </div>
        </section>
        
        {/* Photo Embed Section */}
        <section
          id="photo-embed"
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
            padding: "4rem 0 2rem 0",
            background: "rgba(0,0,0,0.04)",
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
              fontSize: "6rem",
              fontWeight: "300",
              lineHeight: "1.2",
              marginBottom: "2rem",
              letterSpacing: "0.02em",
            }}>
              Take control of your destiny
            </h2>
            <p style={{
              fontSize: "3rem",
              lineHeight: "1.6",
              opacity: "0.8",
              maxWidth: "500px"
            }}>
              Every choice matters in this dark tale of revenge and redemption
            </p>
          </div>

          <img
            src="src/assets/cards.png"
            alt="Featured"
            style={{
              maxWidth: "700px",
              width: "90vw",
              borderRadius: "24px",
              objectFit: "cover"
            }}
          />
        </section>

        {/* About Section */}
        <section id="about" style={{ height: "100vh", padding: "2rem" }}>
          <div style={{ marginTop: "5rem" }}>
            {/* Curved Info Box */}
            <div style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              borderRadius: "30px",
              padding: "3rem",
              maxWidth: "800px",
              width: "90%",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              margin: "0 auto",
            }}>
              <h2 style={{
                fontSize: "5rem",
                fontWeight: "300",
                letterSpacing: "0.1em"
              }}>About</h2>
              <p style={{
                fontSize: "1.8rem",
                lineHeight: "1.8",
                opacity: "0.9",
                font: "300 1.2rem 'Arial', sans-serif",
              }}>
                Fishermen’s Wives is a darkly humorous, strategy-based board game where players scheme, seduce, and slay their way to freedom and inheritance. 
                Build your reputation, collect exotic fish as currency, and form (or betray) relationships as you move through the twisted underbelly of a 
                coastal town teeming with secrets. Will you poison his ale? Burn down his church? Or push him off the cliffs with a gentle nudge?  
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                marginTop: "1rem"
              }}>
                <div style={{
                  padding: "1.5rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "15px",
                }}>
                  <h3 style={{ 
                    fontSize: "1.9rem", 
                    marginBottom: "0.5rem",
                    fontWeight: "300"
                  }}>★★★★★</h3>
                  <p style={{ opacity: "0.8" }}>"best game ever"</p>
                </div>
                <div style={{
                  padding: "1.5rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "15px",
                }}>
                  <h3 style={{ 
                    fontSize: "1.9rem", 
                    marginBottom: "0.5rem",
                    fontWeight: "600"
                  }}>Subscribe to our 
                  newsletter</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

               {/* Rules Section */}
        <section id="contact" style={{
          minHeight: "100vh",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem"
        }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "200",
            letterSpacing: "0.1em",
            fontFamily: "Arial, sans-serif",
          }}></h2>

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
              src="https://online.fliphtml5.com/omzjn/sqaq/"
              allowTransparency={true}
              allowFullScreen
              title="Flipbook"
            ></iframe>
          </div>

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
            width: "100%",
            maxWidth: "1200px"
          }}>
            {[
              { name: "Gracielly Abreu", role: "Computer Science", quote: "i love fish" },
              { name: "Ingrid Nordberg", role: "Design", quote: "i love kombucha" },
              { name: "Izzy Meyerson", role: "Computer Science", quote: "i love paris" },
              { name: "Stella Li", role: "Design", quote: "i love tiger parents" }
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
                  background: `url('src/assets/team/gracielly.png') no-repeat center center / cover`,
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
                <p style={{
                  opacity: "0.6",
                  fontStyle: "italic"
                }}>"{member.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            width: "100%",
            padding: "5rem 0",
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
    </div>
  );
}

export default App;
