import ContentLoader from "react-content-loader";

function RecommendServiceLoaderItem(props: any) {
  return (
    <ContentLoader
      animate
      speed={2}
      uniqueKey="serviceLoader"
      viewBox="0 0 150 90"
      backgroundColor="#e3d9d9"
      foregroundColor="#ada4a4"
      className={props.className}
      title="loading services..."
      {...props}
    >
      <rect x="0" y="0%" rx="5" ry="5" width="100%" height="90px" />
    </ContentLoader>
  );
}

export default function RecommendServiceLoader() {
  const servicesArray = new Array(8).fill(0);

  return (
    <div className="loader grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
      {servicesArray.map((_, index) => (
        <RecommendServiceLoaderItem className="w-full" key={index} />
      ))}
    </div>
  );
}
