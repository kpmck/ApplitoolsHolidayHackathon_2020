module.exports = {
  concurrency: 1,
  appName: "AppliFashion",
  batchName: "Holiday Shopping",
  apiKey: "YOUR_APPLITOOLS_API_KEY_HERE",
  browser: [
    { width: 1200, height: 800, name: "chrome" },
    { width: 1200, height: 800, name: "firefox" },
    { width: 1200, height: 800, name: "edgechromium" },
    { width: 1200, height: 800, name: "safari" },
    { deviceName: "iPhone X", screenOrientation: "portrait" },
  ],
};
