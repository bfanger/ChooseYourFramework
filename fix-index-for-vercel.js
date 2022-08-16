const fs = require("fs-extra");
const path = require("path");

const distDir = path.join(__dirname, "dist");
const indexPath = path.join(distDir, "index.html");

// 1. Replace "../node_modules/"" paths with "./" in index.html
fs.writeFileSync(
    indexPath,
    fs.readFileSync(indexPath).toString().replaceAll("../node_modules", "./")
);

// 2. Mess with dist/index.html's message
fs.writeFileSync(indexPath, fixIndexContents(fs.readFileSync(indexPath).toString()));

/** @param {string} contents */
function fixIndexContents(contents) {
    const lines = contents.split("\n");

    lines.splice(
        25,
        9,
        `<section id="social" class="section-text">
        A fun little experiment by
    <a class="link-github" href="http://joshuakgoldberg.com">Josh Goldberg</a>
    (<a class="link-github" href="https://twitter.com/joshuakgoldberg">@JoshuaKGoldberg</a>) based on some
    <a class="link-github" href="https://github.com/JoshuaKGoldberg/ChooseYourFramework">very old code</a
    >. 💖
    </section>`
    );

    return lines
        .join("\n")
        .replaceAll("ChooseYourFramework,", "Choose Your Framework,")
        .replaceAll(">ChooseYourFramework<", ">Choose Your Framework<");
}

// 3. Copy required node_modules/* packages into dist/
const nodeModulesToCopy = [
    // Scaffolding
    "requirejs",
    // EightBittr modules
    "actorhittr",
    "areaspawnr",
    "audioplayr",
    "autofieldr",
    "battlemovr",
    "classcyclr",
    "devicelayr",
    "eightbittr",
    "flagswappr",
    "fpsanalyzr",
    "frametickr",
    "groupholdr",
    "inputwritr",
    "itemsholdr",
    "mapscreatr",
    "mapscreenr",
    "menugraphr",
    "modattachr",
    "numbermakr",
    "objectmakr",
    "pixeldrawr",
    "pixelrendr",
    "quadskeepr",
    "sceneplayr",
    "stateholdr",
    "stringfilr",
    "timehandlr",
    "touchpassr",
    "userwrappr",
    // UI
    "mobx",
    "mobx-react",
    "react",
    "react-dom",
];

for (const packageName of nodeModulesToCopy) {
    fs.copySync(
        path.join(__dirname, "node_modules", packageName),
        path.join(distDir, packageName),
        {
            filter: (src) => !src.includes(".bin"),
        }
    );
}
