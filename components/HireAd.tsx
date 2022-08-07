import Typewriter from "typewriter-effect";

export default function HireAd() {
  return (
    <>
      <div className="hire-ads">
        <h3 className="font-bold text-2xl text-blue-800">Hire</h3>
        <div className="text">
          <Typewriter
            options={{
              strings: [
                "Baber",
                "Hairdresser",
                "Yoga",
                "Chiropractor",
                "Makeup Artist",
                "Masseur",
                "Tattoo Expert",
                "Song Writer",
                "Cleaner",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <style jsx>
          {`
            .hire-ads {
              font-size: 25px;
              background-color: white;
              height: 200px;
              width: 200px;
              display: flex;
              flex-direction: column;
              text-align: center;
              margin: auto;
              justify-content: center;
              position: absolute;
              top: 25%;
              left: 25%;
              padding: 10px;
              border-radius: 30px;
            }
            .text {
              text-decoration: underline;
            }
          `}
        </style>
      </div>
    </>
  );
}
