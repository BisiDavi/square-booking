export default function SevicesBanner() {
  return (
    <div className="w-1/2 order-1 lg:order-2 bg-gray-500 flex">
      <video autoPlay loop muted playsInline width="100%" height="30px">
        <source src="/services.mp4" type="video/webm" />
        <source src="/services.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
