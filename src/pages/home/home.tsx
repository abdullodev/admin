import { PageWrapper } from "@/components";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <PageWrapper>
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p className="mt-4">Welcome to the home page!</p>
      <p className="mt-2">This is where you can find the latest updates.</p>
      <div className="flex gap-3">
        <Button submitting>Save</Button>
        <Button variant={"secondary"}>Save</Button>
      </div>
    </PageWrapper>
  );
};

export default Home;
