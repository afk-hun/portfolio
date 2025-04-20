export function shimmer(width: number, height: number) {
  return `
	  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
		<defs>
		  <linearGradient id="g">
			<stop stop-color="#ccc" offset="20%" />
			<stop stop-color="#ddd" offset="50%" />
			<stop stop-color="#ccc" offset="70%" />
		  </linearGradient>
		</defs>
		<rect width="${width}" height="${height}" fill="#ccc" />
		<rect id="r" width="${width}" height="${height}" fill="url(#g)" />
		<animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
	  </svg>`;
}

export function toBase64(str: string) {
  return Buffer.from(str).toString('base64');
}
