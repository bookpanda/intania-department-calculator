import { Header } from "$modules/Header";
import { Semester } from "$modules/Semester";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center bg-gray-bg">
      <Header />
      <Semester></Semester>
    </main>
  );
};

export default IndexPage;
