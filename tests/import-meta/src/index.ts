const packageJSONPath = new URL("../package.json", import.meta.url);

console.info(packageJSONPath);

export { packageJSONPath };
