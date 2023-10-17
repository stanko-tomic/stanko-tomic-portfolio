import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import Projects from "@/components/Projects";
import { AboutMe } from "@/components/AboutMe";
import axios from "axios";
import Layout from "@/components/Layout";

const Home: React.FC<any> = ({ projects }) => {
  return (
    <Layout>
      <Hero />
      <Projects projectData={projects} />
      <Footer />
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_URL + "/api/project/list?latestThree=true" ||
        "http://localhost:3000/api/project/list?latestThree=true"
    );
    const projects: any[] = response.data.list;
    return {
      props: { projects },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { projects: [] }, // Handle errors gracefully
    };
  }
}
