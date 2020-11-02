import "./styles.css";

document.getElementById("app").innerHTML = `
<div id="wrapper">
<div>Hello Vanilla!</div>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
</div>
`;

const getCSSRuleBySelector = (id) => {
  let sheets = document.styleSheets[0];
  return []
    .concat(...(sheets.cssRules ? sheets.cssRules : sheets.rules))
    .find((rule) => rule.selectorText.toLowerCase() === id);
};

const setCSSRuleBySelector = (id, key, value) => {
  getCSSRuleBySelector(id).style[key] = value;
};

const setCSSRule = (rule, key, value) => {
  rule.style[key] = value;
};

document.addEventListener("mousedown", function (e) {
  setCSSRuleBySelector("#wrapper", "transitionDuration", "1250ms");
  setCSSRuleBySelector("#wrapper", "backgroundColor", "blue");
  setCSSRuleBySelector("#wrapper", "padding", "0em 0em 0em 0em");
});

document.addEventListener("mouseup", function (e) {
  setCSSRuleBySelector("#wrapper", "transitionDuration", "250ms");
  setCSSRuleBySelector("#wrapper", "padding", "10em 10em 10em 10em");
  setCSSRuleBySelector("#wrapper", "backgroundColor", "red");
});
