import { coursesConst } from "./const";

export const departments = [
  {
    name: "🏗️🧱 Civil",
    key: "civil",
    weights: [],
    record: [
      { year: 2561, accept: 100, gpax: 2.18, score: 78.5 },
      { year: 2562, accept: 103, gpax: 2.43, score: 87.5 },
      { year: 2563, accept: 88, gpax: 2.5, score: 90.0 },
      { year: 2564, accept: 91, gpax: 2.07, score: 74.5 },
    ],
  },
  {
    name: "💡📡 Electrical",
    key: "electrical",
    weights: [
      { name: coursesConst.calculusI.name, credits: 6 },
      { name: coursesConst.calculusII.name, credits: 6 },
      { name: coursesConst.physicsII.name, credits: 6 },
    ],
    record: [
      { year: 2561, accept: 117, gpax: 2.31, score: 107.0 },
      { year: 2562, accept: 119, gpax: 2.63, score: 118.5 },
      { year: 2563, accept: 110, gpax: 2.67, score: 121.0 },
      { year: 2564, accept: 119, gpax: 2.56, score: 110.0 },
    ],
  },
  {
    name: "🪛⚙️ Mechanical",
    key: "mechanical",
    weights: [],
    record: [
      { year: 2561, accept: 73, gpax: 2.78, score: 100.0 },
      { year: 2562, accept: 95, gpax: 2.75, score: 99.0 },
      { year: 2563, accept: 75, gpax: 2.85, score: 102.5 },
      { year: 2564, accept: 85, gpax: 2.44, score: 88.0 },
    ],
  },
  {
    name: "🚗🔧 Automobile",
    key: "automobile",
    weights: [],
    record: [
      { year: 2561, accept: 20, gpax: 2.13, score: 76.5 },
      { year: 2562, accept: 15, gpax: 2.44, score: 88.0 },
      { year: 2563, accept: 20, gpax: 2.43, score: 87.5 },
      { year: 2564, accept: 15, gpax: 1.99, score: 71.5 },
    ],
  },
  {
    name: "💼📈 Industrial",
    key: "industrial",
    weights: [
      { name: coursesConst.calculusI.name, credits: 5 },
      { name: coursesConst.calculusII.name, credits: 5 },
      { name: coursesConst.physicsI.name, credits: 2 },
      { name: coursesConst.physicsII.name, credits: 2 },
      { name: coursesConst.chem.name, credits: 2 },
      { name: coursesConst.engDrawing.name, credits: 4 },
      { name: coursesConst.engMaterials.name, credits: 4 },
      { name: coursesConst.comProg.name, credits: 5 },
      { name: coursesConst.explEngWorld.name, credits: 1 },
    ],
    record: [
      { year: 2561, accept: 82, gpax: 2.54, score: 98.0 },
      { year: 2562, accept: 65, gpax: 2.72, score: 107.0 },
      { year: 2563, accept: 78, gpax: 2.94, score: 115.5 },
      { year: 2564, accept: 80, gpax: 2.83, score: 112.0 },
    ],
  },
  {
    name: "🧪⚗️ Chemical",
    key: "chemical",
    weights: [],
    record: [
      { year: 2561, accept: 76, gpax: 2.15, score: 77.5 },
      { year: 2562, accept: 80, gpax: 1.75, score: 63.0 },
      { year: 2563, accept: 78, gpax: 1.15, score: 41.5 },
      { year: 2564, accept: 80, gpax: 0.94, score: 34.0 },
    ],
  },
  {
    name: "🛢️⛽ Petroleum",
    key: "petroleum",
    weights: [
      { name: coursesConst.comProg.name, credits: 4 },
      { name: coursesConst.expEngI.name, credits: 4 },
      { name: coursesConst.expEngII.name, credits: 4 },
    ],
    record: [
      { year: 2561, accept: 9, gpax: 2.42, score: 94.5 },
      { year: 2562, accept: 10, gpax: 2.32, score: 90.0 },
      { year: 2563, accept: 10, gpax: 2.18, score: 87.5 },
      { year: 2564, accept: 10, gpax: 1.88, score: 74.0 },
    ],
  },
  {
    name: "🌍🌳 Environmental",
    key: "environmental",
    weights: [
      { name: coursesConst.physLabI.name, credits: 2 },
      { name: coursesConst.physLabII.name, credits: 2 },
      { name: coursesConst.chemLab.name, credits: 2 },
    ],
    record: [
      { year: 2561, accept: 22, gpax: 2.01, score: 82.0 },
      { year: 2562, accept: 26, gpax: 1.88, score: 76.5 },
      { year: 2563, accept: 14, gpax: 2.25, score: 90.0 },
      { year: 2564, accept: 17, gpax: 1.94, score: 80.5 },
    ],
  },
  {
    name: "🔭📐 Survey",
    key: "survey",
    weights: [
      { name: coursesConst.comProg.name, credits: 6 },
      { name: coursesConst.calculusI.name, credits: 6 },
      { name: coursesConst.calculusII.name, credits: 6 },
    ],
    record: [
      { year: 2561, accept: 9, gpax: 1.6, score: 69.0 },
      { year: 2562, accept: 11, gpax: 1.6, score: 66.5 },
      { year: 2563, accept: 5, gpax: 1.93, score: 84.5 },
      { year: 2564, accept: 2, gpax: 2.31, score: 101.0 },
    ],
  },
  {
    name: "🪨⛓️ Metallurgical",
    key: "metallurgical",
    weights: [],
    record: [
      { year: 2561, accept: 46, gpax: 0.97, score: 35.0 },
      { year: 2562, accept: 30, gpax: 1.63, score: 58.5 },
      { year: 2563, accept: 34, gpax: 0.97, score: 35.0 },
      { year: 2564, accept: 7, gpax: 1.78, score: 64.0 },
    ],
  },
  {
    name: "💻🥗 Computer",
    key: "computer",
    weights: [{ name: coursesConst.comProg.name, credits: 9 }],
    record: [
      { year: 2561, accept: 56, gpax: 2.82, score: 125.0 },
      { year: 2562, accept: 33, gpax: 3.17, score: 136.0 },
      { year: 2563, accept: 58, gpax: 3.22, score: 140.0 },
      { year: 2564, accept: 62, gpax: 3.28, score: 142.0 },
    ],
  },
  {
    name: "☢️⚠️ Nuclear",
    key: "nuclear",
    weights: [],
    record: [
      { year: 2561, accept: 5, gpax: 1.97, score: 71.0 },
      { year: 2562, accept: 0, gpax: 0, score: 0 },
      { year: 2563, accept: 0, gpax: 0, score: 0 },
      { year: 2564, accept: 3, gpax: 1.79, score: 64.5 },
    ],
  },
];

export const coursesList = [
  {
    name: coursesConst.engDrawing.name,
    key: coursesConst.engDrawing.key,
    credits: coursesConst.engDrawing.credits,
    semester: coursesConst.engDrawing.semester,
  },
  {
    name: coursesConst.engMaterials.name,
    key: coursesConst.engMaterials.key,
    credits: coursesConst.engMaterials.credits,
    semester: coursesConst.engMaterials.semester,
  },
  {
    name: coursesConst.explEngWorld.name,
    key: coursesConst.explEngWorld.key,
    credits: coursesConst.explEngWorld.credits,
    semester: coursesConst.explEngWorld.semester,
  },
  {
    name: coursesConst.comProg.name,
    key: coursesConst.comProg.key,
    credits: coursesConst.comProg.credits,
    semester: coursesConst.comProg.semester,
  },
  {
    name: coursesConst.calculusI.name,
    key: coursesConst.calculusI.key,
    credits: coursesConst.calculusI.credits,
    semester: coursesConst.calculusI.semester,
  },
  {
    name: coursesConst.calculusII.name,
    key: coursesConst.calculusII.key,
    credits: coursesConst.calculusII.credits,
    semester: coursesConst.calculusII.semester,
  },
  {
    name: coursesConst.physicsI.name,
    key: coursesConst.physicsI.key,
    credits: coursesConst.physicsI.credits,
    semester: coursesConst.physicsI.semester,
  },
  {
    name: coursesConst.physicsII.name,
    key: coursesConst.physicsII.key,
    credits: coursesConst.physicsII.credits,
    semester: coursesConst.physicsII.semester,
  },
  {
    name: coursesConst.chem.name,
    key: coursesConst.chem.key,
    credits: coursesConst.chem.credits,
    semester: coursesConst.chem.semester,
  },
  {
    name: coursesConst.expEngI.name,
    key: coursesConst.expEngI.key,
    credits: coursesConst.expEngI.credits,
    semester: coursesConst.expEngI.semester,
  },
  {
    name: coursesConst.expEngII.name,
    key: coursesConst.expEngII.key,
    credits: coursesConst.expEngII.credits,
    semester: coursesConst.expEngII.semester,
  },
  {
    name: coursesConst.physLabI.name,
    key: coursesConst.physLabI.key,
    credits: coursesConst.physLabI.credits,
    semester: coursesConst.physLabI.semester,
  },
  {
    name: coursesConst.physLabII.name,
    key: coursesConst.physLabII.key,
    credits: coursesConst.physLabII.credits,
    semester: coursesConst.physLabII.semester,
  },
  {
    name: coursesConst.chemLab.name,
    key: coursesConst.chemLab.key,
    credits: coursesConst.chemLab.credits,
    semester: coursesConst.chemLab.semester,
  },
];
