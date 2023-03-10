import { FC, PropsWithChildren, useState } from "react";

import { AppContext, IAppContext, baseCourses } from "./appContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [department, setDepartment] = useState<IAppContext["department"]>(null);
  const [courses, setCourses] = useState<IAppContext["courses"]>(baseCourses);

  return (
    <AppContext.Provider
      value={{ department, setDepartment, courses, setCourses }}
    >
      {children}
    </AppContext.Provider>
  );
};
