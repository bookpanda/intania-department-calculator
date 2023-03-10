import { Header } from "$modules/Header";
import { Semester } from "$modules/Semester";
import { Container } from "@mui/material";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center bg-gray-bg">
      <Header />
      <Container sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        <Semester></Semester>
      </Container>
    </main>
  );
};

export default IndexPage;
