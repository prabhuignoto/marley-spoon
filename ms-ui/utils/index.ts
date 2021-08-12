const ImageLoader = ({ src, width, quality }) => {
  return `https://ctfassets.net/${src}?w=${width}&q=${quality || 75}`
}

export { ImageLoader }
