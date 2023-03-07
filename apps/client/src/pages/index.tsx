import { Header } from "$modules/Header";
import { Semester } from "$modules/Semester";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <main className="h-screen w-screen bg-gray-bg">
      <Header />
      {/* <Container sx={{ className: "flex justify-center" }}> */}
      <Semester></Semester>
      {/* </Container> */}
    </main>
  );
};

export default IndexPage;
