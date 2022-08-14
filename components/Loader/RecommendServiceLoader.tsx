import ContentLoader from "react-content-loader";

function RecommendServiceLoaderItem(props: any) {
  return (
    <ContentLoader
      animate
      speed={2}
      viewBox="0 0 150 90"
      backgroundColor="#e3d9d9"
      foregroundColor="#ada4a4"
      className="w-1/4 mr-4"
      title="loading services..."
      {...props}
    >
      <rect x="0" y="0%" rx="5" ry="5" width="100%" height="90px" />
    </ContentLoader>
  );
}

export default function RecommendServiceLoader() {
  const servicesArray = new Array(4).fill(0);

  return (
    <>
      {servicesArray.map((_, index) => (
        <RecommendServiceLoaderItem key={index} />
      ))}
    </>
  );
}
