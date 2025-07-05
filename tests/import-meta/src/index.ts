const packageJSON = JSON.parse(
  (new URL("../package.json", import.meta.url), "utf8")
);

export { packageJSON };
