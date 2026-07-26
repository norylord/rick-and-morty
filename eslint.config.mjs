import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Слои FSD, разделённые на слайсы: публичный API — index.ts самого слайса
// (@/entities/character), всё, что глубже, — обход публичного API.
const SLICED_LAYERS = ["entities", "features", "widgets", "views"];

const slicedLayerPatterns = SLICED_LAYERS.flatMap((layer) => [
  `@/${layer}/*/*`,
  `@/${layer}/*/*/**`,
]);

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: slicedLayerPatterns,
              message:
                "Обход публичного API слайса. Импортируй из index.ts слайса, например '@/entities/character'. Внутри своего слайса используй относительные пути ('../model/type').",
            },
            {
              // shared не делится на слайсы: публичный API — index.ts сегмента
              // (@/shared/api), но не файлы внутри него.
              group: ["@/shared/*/*", "@/shared/*/*/**"],
              message:
                "Обход публичного API сегмента shared. Импортируй '@/shared/api', а не файлы внутри сегмента.",
            },
            {
              // Внутри слайса дальше одного уровня вверх подниматься незачем:
              // '../../' — это уже выход в чужой слайс мимо его index.ts.
              group: ["../../*", "../../**"],
              message:
                "Относительный импорт за пределы слайса. Используй алиас и публичный API чужого слайса ('@/entities/character').",
            },
          ],
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
