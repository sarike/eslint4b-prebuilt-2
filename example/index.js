import Linter from "../";

console.info(Linter);

const linter = new Linter();

const config = {
  parserOptions: { ecmaVersion: 11, sourceType: "script" },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  rules: {
    "no-useless-escape": "off",
  },
};

linter.getRules().forEach((desc, name) => {
  if (desc.meta.docs.recommended && !(name in config.rules))
    config.rules[name] = "error";
});

const code = `
function name(a) {
  const b = 1;
  return a ?? 2;
}
name('\\n');
`;

const messages = linter.verify(code, config, {
  filename: "foo.js",
});

document.body.innerHTML = `<pre>${JSON.stringify(
  {
    messages,
    config,
  },
  4,
  null
)}</pre>`;
