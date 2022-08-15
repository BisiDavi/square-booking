export default function BannerAnimation() {
  const listArray = new Array(10).fill(0);
  return (
    <>
      <div className="context">
        <div className="area">
          <ul className="circles">
            {listArray.map((_, index) => (
              <li key={index}></li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .typewriter {
            position: relative;
          }
          .context {
            position: absolute;
            top: 0;
            width: 50%;
            height: 100%;
          }
          .context h1 {
            text-align: center;
            color: #fff;
            font-size: 50px;
          }
          .context .area {
            background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
            width: 100%;
            display: flex;
            height: 100%;
          }

          .circles {
            position: absolute;
            top: 0;
            left: 0;j
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index:100;
          }

          .circles li {
            position: absolute;
            display: block;
            list-style: none;
            width: 20px;
            height: 20px;
            background: rgba(255, 255, 255, 0.2);
            animation: animate 25s linear infinite;
            bottom: -150px;
            z-index:200;
          }

          .circles li:nth-child(1) {
            left: 25%;
            width: 80px;
            height: 80px;
            animation-delay: 0s;
          }

          .circles li:nth-child(2) {
            left: 10%;
            width: 20px;
            height: 20px;
            animation-delay: 2s;
            animation-duration: 12s;
          }

          .circles li:nth-child(3) {
            left: 70%;
            width: 20px;
            height: 20px;
            animation-delay: 4s;
          }

          .circles li:nth-child(4) {
            left: 40%;
            width: 60px;
            height: 60px;
            animation-delay: 0s;
            animation-duration: 18s;
          }

          .circles li:nth-child(5) {
            left: 65%;
            width: 20px;
            height: 20px;
            animation-delay: 0s;
          }

          .circles li:nth-child(6) {
            left: 75%;
            width: 110px;
            height: 110px;
            animation-delay: 3s;
          }

          .circles li:nth-child(7) {
            left: 35%;
            width: 150px;
            height: 150px;
            animation-delay: 7s;
          }

          .circles li:nth-child(8) {
            left: 50%;
            width: 25px;
            height: 25px;
            animation-delay: 15s;
            animation-duration: 45s;
          }

          .circles li:nth-child(9) {
            left: 20%;
            width: 15px;
            height: 15px;
            animation-delay: 2s;
            animation-duration: 35s;
          }

          .circles li:nth-child(10) {
            left: 85%;
            width: 150px;
            height: 150px;
            animation-delay: 0s;
            animation-duration: 11s;
          }

          @keyframes animate {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
              border-radius: 0;
            }

            100% {
              transform: translateY(-1000px) rotate(720deg);
              opacity: 0;
              border-radius: 50%;
            }
          }
        `}
      </style>
    </>
  );
}