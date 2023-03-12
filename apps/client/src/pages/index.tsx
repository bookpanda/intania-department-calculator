import { Department } from "$modules/Department";
import { Header } from "$modules/Header";
import { Result } from "$modules/Result";
import { Semester } from "$modules/Semester";
import { Container } from "@mui/material";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <main className="flex h-screen w-screen max-w-[100vw] flex-col items-center overflow-x-hidden bg-gray-bg">
      <Header />
      <Container sx={{ height: "100vh" }}>
        <div className="flex h-full w-full flex-col lg:flex-row">
          <div className="lg:mr-4 lg:w-3/5">
            <Department />
            <Semester></Semester>
          </div>
          <div className="lg:w-2/5">
            <Result />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default IndexPage;
