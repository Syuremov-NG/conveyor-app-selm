export default {
  division: "Дивизион тракторной техники",
  area: "Главный конвейер сборки тракторов",
  plan: 100,
  fact: "95",
  shiftEnds: "16:00",
  table: {
    day: {
      plan: 6,
      planCurr: 0,
      factCurr: "1",
    },
    month: {
      plan: "110",
      planCurr: 80,
      factCurr: 78,
    },
  },
  install: [{ code: "63", equip: "2375.01.00.000-04", number: "000306" }],
  conv: [
    { code: "65", equip: "2375.01.00.000-04", number: "000305" },
    { code: "62", equip: "2375.01.00.000-04", number: "000304" },
    { code: "63", equip: "2375.01.00.000-04", number: "000303" },
    { code: "93", equip: "3000.01.00.000-03", number: "000031" },
  ],
  build: [
    { code: "Z02", equip: "3000.01.00.000-03", number: "000030" },
    { code: "65", equip: "2375.01.00.000-04", number: "000302" },
    { code: "63", equip: "2375.01.00.000-04", number: "000301" },
    { code: "Z05", equip: "3000.01.00.000-03", number: "000029" },
    { code: "63", equip: "2375.01.00.000-04", number: "000300" },
  ],
};
