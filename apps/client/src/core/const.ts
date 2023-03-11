export const coursesConst = {
  engDrawing: {
    name: "Eng Drawing",
    key: "engDrawing",
    credits: 3,
    semester: 2,
  },
  engMaterials: {
    name: "Eng Materials",
    key: "engMaterials",
    credits: 3,
    semester: 2,
  },
  explEngWorld: {
    name: "Expl Eng World",
    key: "explEngWorld",
    credits: 3,
    semester: 1,
  },
  comProg: {
    name: "Com Prog",
    key: "comProg",
    credits: 3,
    semester: 1,
  },
  calculusI: {
    name: "Calculus I",
    key: "calculusI",
    credits: 3,
    semester: 1,
  },
  calculusII: {
    name: "Calculus II",
    key: "calculusII",
    credits: 3,
    semester: 2,
  },
  physicsI: {
    name: "Gen Phys I",
    key: "physicsI",
    credits: 3,
    semester: 1,
  },
  physicsII: {
    name: "Gen Phys II",
    key: "physicsII",
    credits: 3,
    semester: 2,
  },
  chem: {
    name: "Gen Chem",
    key: "chem",
    credits: 3,
    semester: 2,
  },
  expEngI: {
    name: "Exp English I",
    key: "expEngI",
    credits: 3,
    semester: 1,
  },
  expEngII: {
    name: "Exp English II",
    key: "expEngII",
    credits: 3,
    semester: 2,
  },
  physLabI: {
    name: "Gen Phys Lab I",
    key: "physLabI",
    credits: 1,
    semester: 1,
  },
  physLabII: {
    name: "Gen Phys Lab II",
    key: "physLabII",
    credits: 1,
    semester: 2,
  },
  chemLab: {
    name: "Gen Chem Lab",
    key: "chemLab",
    credits: 1,
    semester: 2,
  },
};

export const nameToKey: { [key: string]: string } = {};
for (const [key, value] of Object.entries(coursesConst)) {
  nameToKey[value.name] = key;
}
