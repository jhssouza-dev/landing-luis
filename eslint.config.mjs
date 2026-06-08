import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [
      ".next/**",
      "dist/**",
      "node_modules/**",
      "src/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
