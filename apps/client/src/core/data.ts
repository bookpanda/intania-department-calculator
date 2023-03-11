import { ChangeTypeOfKeys } from ".";
import { coursesConst } from "./const";
import { baseCourses } from "./context/appContext";

type weightsType = {
  base: typeof baseCourses;
  [key: string]: Partial<typeof baseCourses>;
};

// export const weights: weightsType = {
//   base: {
//     engDrawing: 3,
//     engMaterials: 3,
//     explEngWorld: 3,
//     comProg: 3,
//     calculusI: 3,
//     calculusII: 3,
//     physicsI: 3,
//     physicsII: 3,
//     chem: 3,
//     expEngI: 3,
//     expEngII: 3,
//     physLabI: 1,
//     physLabII: 1,
//     chemLab: 1,
//   },
//   civil: {},
//   electrical: { calculusI: 6, calculusII: 6, physicsII: 6 },
//   mechanical: {},
//   automobile: {},
//   industrial: {
//     engDrawing: 4,
//     engMaterials: 4,
//     comProg: 5,
//     explEngWorld: 1,
//     calculusI: 5,
//     calculusII: 5,
//     physicsI: 2,
//     physicsII: 2,
//     chem: 2,
//   },
//   chemical: {},
//   petroleum: { comProg: 4, expEngI: 4, expEngII: 4 },
//   environmental: { physLabI: 2, physLabII: 2, chemLab: 2 },
//   survey: { comProg: 6, calculusI: 6, calculusII: 6 },
//   metallurgical: {},
//   computer: { comProg: 9 },
//   nuclear: {},
// };

// export const detailedCourses: ChangeTypeOfKeys<
//   typeof baseCourses,
//   keyof typeof baseCourses,
//   { name: string; credits: number; semester: number }
// > = {
//   engDrawing: {
//     name: "Eng Drawing",
//     credits: weights.base.engDrawing,
//     semester: 2,
//   },
//   engMaterials: {
//     name: "Eng Materials",
//     credits: weights.base.engMaterials,
//     semester: 2,
//   },
//   explEngWorld: {
//     name: "Expl Eng World",
//     credits: weights.base.explEngWorld,
//     semester: 1,
//   },
//   comProg: {
//     name: "Com Prog",
//     credits: weights.base.comProg,
//     semester: 1,
//   },
//   calculusI: {
//     name: "Calculus I",
//     credits: weights.base.calculusI,
//     semester: 1,
//   },
//   calculusII: {
//     name: "Calculus II",
//     credits: weights.base.calculusII,
//     semester: 2,
//   },
//   physicsI: {
//     name: "Gen Phys I",
//     credits: weights.base.physicsI,
//     semester: 1,
//   },
//   physicsII: {
//     name: "Gen Phys II",
//     credits: weights.base.physLabII,
//     semester: 2,
//   },
//   chem: {
//     name: "Gen Chem",
//     credits: weights.base.chem,
//     semester: 2,
//   },
//   expEngI: {
//     name: "Exp English I",
//     credits: weights.base.expEngI,
//     semester: 1,
//   },
//   expEngII: {
//     name: "Exp English II",
//     credits: weights.base.expEngII,
//     semester: 2,
//   },
//   physLabI: {
//     name: "Gen Phys Lab I",
//     credits: weights.base.physLabI,
//     semester: 1,
//   },
//   physLabII: {
//     name: "Gen Phys Lab II",
//     credits: weights.base.physLabII,
//     semester: 2,
//   },
//   chemLab: {
//     name: "Gen Chem Lab",
//     credits: weights.base.chemLab,
//     semester: 2,
//   },
// };

// export const coursesList: {
//   name: string;
//   credits: number;
//   semester: number;
// }[] = [];
// export const nameToKey: { [key: string]: string } = {};
// for (const [key, value] of Object.entries(detailedCourses)) {
//   coursesList.push(value);
//   nameToKey[value.name] = key;
// }

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
    key: "chemical",
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
    credits: coursesConst.engDrawing.credits,
    semester: coursesConst.engDrawing.semester,
  },
  {
    name: coursesConst.engMaterials.name,
    credits: coursesConst.engMaterials.credits,
    semester: coursesConst.engMaterials.semester,
  },
  {
    name: coursesConst.explEngWorld.name,
    credits: coursesConst.explEngWorld.credits,
    semester: coursesConst.explEngWorld.semester,
  },
  {
    name: coursesConst.comProg.name,
    credits: coursesConst.comProg.credits,
    semester: coursesConst.comProg.semester,
  },
  {
    name: coursesConst.calculusI.name,
    credits: coursesConst.calculusI.credits,
    semester: coursesConst.calculusI.semester,
  },
  {
    name: coursesConst.calculusII.name,
    credits: coursesConst.calculusII.credits,
    semester: coursesConst.calculusII.semester,
  },
  {
    name: coursesConst.physicsI.name,
    credits: coursesConst.physicsI.credits,
    semester: coursesConst.physicsI.semester,
  },
  {
    name: coursesConst.physicsI.name,
    credits: coursesConst.physicsI.credits,
    semester: coursesConst.physicsI.semester,
  },
  {
    name: coursesConst.chem.name,
    credits: coursesConst.chem.credits,
    semester: coursesConst.chem.semester,
  },
  {
    name: coursesConst.expEngI.name,
    credits: coursesConst.expEngI.credits,
    semester: coursesConst.expEngI.semester,
  },
  {
    name: coursesConst.expEngII.name,
    credits: coursesConst.expEngII.credits,
    semester: coursesConst.expEngII.semester,
  },
  {
    name: coursesConst.physLabI.name,
    credits: coursesConst.physLabI.credits,
    semester: coursesConst.physLabI.semester,
  },
  {
    name: coursesConst.physLabII.name,
    credits: coursesConst.physLabII.credits,
    semester: coursesConst.physLabII.semester,
  },
  {
    name: coursesConst.chemLab.name,
    credits: coursesConst.chemLab.credits,
    semester: coursesConst.chemLab.semester,
  },
];
