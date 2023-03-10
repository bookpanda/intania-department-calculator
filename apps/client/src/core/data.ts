import { ChangeTypeOfKeys } from ".";
import { baseCourses } from "./context/appContext";

type weightsType = {
  base: typeof baseCourses;
  [key: string]: Partial<typeof baseCourses>;
};

export const weights: weightsType = {
  base: {
    engDrawing: 3,
    engMaterials: 3,
    explEngWorld: 3,
    comProg: 3,
    calculusI: 3,
    calculusII: 3,
    physicsI: 3,
    physicsII: 3,
    chem: 3,
    expEngI: 3,
    expEngII: 3,
    physLabI: 1,
    physLabII: 1,
    chemLab: 1,
  },
  civil: {},
  electrical: { calculusI: 6, calculusII: 6, physicsII: 6 },
  mechanical: {},
  automobile: {},
  industrial: {
    engDrawing: 4,
    engMaterials: 4,
    comProg: 5,
    explEngWorld: 1,
    calculusI: 5,
    calculusII: 5,
    physicsI: 2,
    physicsII: 2,
    chem: 2,
  },
  chemical: {},
  petroleum: { comProg: 4, expEngI: 4, expEngII: 4 },
  environmental: { physLabI: 2, physLabII: 2, chemLab: 2 },
  survey: { comProg: 6, calculusI: 6, calculusII: 6 },
  metallurgical: {},
  computer: { comProg: 9 },
  nuclear: {},
};

export const detailedCourses: ChangeTypeOfKeys<
  typeof baseCourses,
  keyof typeof baseCourses,
  { name: string; credits: number; semester: number }
> = {
  engDrawing: {
    name: "Eng Drawing",
    credits: weights.base.engDrawing,
    semester: 2,
  },
  engMaterials: {
    name: "Eng Materials",
    credits: weights.base.engMaterials,
    semester: 2,
  },
  explEngWorld: {
    name: "Expl Eng World",
    credits: weights.base.explEngWorld,
    semester: 1,
  },
  comProg: {
    name: "Com Prog",
    credits: weights.base.comProg,
    semester: 1,
  },
  calculusI: {
    name: "Calculus I",
    credits: weights.base.calculusI,
    semester: 1,
  },
  calculusII: {
    name: "Calculus II",
    credits: weights.base.calculusII,
    semester: 2,
  },
  physicsI: {
    name: "Gen Phys I",
    credits: weights.base.physicsI,
    semester: 1,
  },
  physicsII: {
    name: "Gen Phys II",
    credits: weights.base.physLabII,
    semester: 2,
  },
  chem: {
    name: "Gen Chem",
    credits: weights.base.chem,
    semester: 2,
  },
  expEngI: {
    name: "Exp English I",
    credits: weights.base.expEngI,
    semester: 1,
  },
  expEngII: {
    name: "Exp English II",
    credits: weights.base.expEngII,
    semester: 2,
  },
  physLabI: {
    name: "Gen Phys Lab I",
    credits: weights.base.physLabI,
    semester: 1,
  },
  physLabII: {
    name: "Gen Phys Lab II",
    credits: weights.base.physLabII,
    semester: 2,
  },
  chemLab: {
    name: "Gen Chem Lab",
    credits: weights.base.chemLab,
    semester: 2,
  },
};

export const coursesList: {
  name: string;
  credits: number;
  semester: number;
}[] = [];
export const nameToKey: { [key: string]: string } = {};
for (const [key, value] of Object.entries(detailedCourses)) {
  coursesList.push(value);
  nameToKey[value.name] = key;
}

export const departmentsList = [
  { name: "🏗️🧱 Civil", key: "civil" },
  { name: "🪛⚙️ Mechanical", key: "mechanical" },
  { name: "🚗🔧 Automobile", key: "automobile" },
  { name: "💼📈 Industrial", key: "industrial" },
  { name: "🧪⚗️ Chemical", key: "chemical" },
  { name: "🛢️⛽ Petroleum", key: "petroluem" },
  { name: "🌍🌳 Environmental", key: "environmental" },
  { name: "🔭📐 Survey", key: "survey" },
  { name: "🪨⛓️ Metallurgical", key: "metallurgical" },
  { name: "💻🥗 Computer", key: "computer" },
  { name: "☢️⚠️ Nuclear", key: "nuclear" },
];
