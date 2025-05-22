
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageContainer from "@/components/layout/PageContainer";

const GetStartedPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <PageContainer>
      <div className="bg-fairbanc-blue text-white py-20 px-4 bg-[url('/pattern-bg.png')] bg-cover">
        <div className="container mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <img src="/fairbanc-white-logo.png" alt="Fairbanc" className="h-12" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Unlock Smarter Credit Decisions
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-in">
            with AI-Powered InsightHub CoPilot
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 animate-fade-in">
            Accelerate your credit assessment process with the intelligence of
            AI. Make data-driven decisions confidently and efficiently. Start your
            AI-driven credit assessment today.
          </p>
          <Button 
            size="lg" 
            onClick={handleLoginClick} 
            className="rounded-full text-lg px-8 py-6 animate-fade-in"
          >
            START NOW
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default GetStartedPage;
