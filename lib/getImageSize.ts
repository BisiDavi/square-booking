export default function getImageSize(fileSize: number) {
  if (fileSize > 1000 && fileSize < 1000000) {
    return `${fileSize / 1000} kB`;
  } else if (fileSize > 1000000) {
    return `${fileSize / 1000000} MB`;
  }
}
