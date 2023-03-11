import { coursesConst } from "./const";

export const departments = [
  {
    name: "🏗️🧱 Civil",
    key: "civil",
    weights: [],
  },
  {
    name: "💡📡 Electrical",
    key: "electrical",
    weights: [
      { name: coursesConst.calculusI.name, credits: 6 },
      { name: coursesConst.calculusII.name, credits: 6 },
      { name: coursesConst.physicsII.name, credits: 6 },
    ],
  },
  { name: "🪛⚙️ Mechanical", key: "mechanical", weights: [] },
  { name: "🚗🔧 Automobile", key: "automobile", weights: [] },
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
  },
  { name: "🧪⚗️ Chemical", key: "chemical", weights: [] },
  {
    name: "🛢️⛽ Petroleum",
    key: "petroleum",
    weights: [
      { name: coursesConst.comProg.name, credits: 4 },
      { name: coursesConst.expEngI.name, credits: 4 },
      { name: coursesConst.expEngII.name, credits: 4 },
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
  },
  {
    name: "🔭📐 Survey",
    key: "survey",
    weights: [
      { name: coursesConst.comProg.name, credits: 6 },
      { name: coursesConst.calculusI.name, credits: 6 },
      { name: coursesConst.calculusII.name, credits: 6 },
    ],
  },
  { name: "🪨⛓️ Metallurgical", key: "metallurgical", weights: [] },
  {
    name: "💻🥗 Computer",
    key: "computer",
    weights: [{ name: coursesConst.comProg.name, credits: 9 }],
  },
  { name: "☢️⚠️ Nuclear", key: "nuclear", weights: [] },
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
