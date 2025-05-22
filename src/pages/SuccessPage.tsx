
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageContainer from "@/components/layout/PageContainer";
import { CheckCircle } from "lucide-react";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/dashboard");
  };

  return (
    <PageContainer className="flex items-center justify-center p-4">
      <div className="w-full max-w-lg text-center">
        <div className="bg-green-100 rounded-full p-4 mx-auto w-24 h-24 flex items-center justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Success!</h1>
        <p className="text-gray-600 mb-8">
          Your information has been submitted successfully. Our team will review your data 
          and get back to you shortly.
        </p>
        <Button size="lg" onClick={handleContinue} className="px-8">
          Continue to Dashboard
        </Button>
      </div>
    </PageContainer>
  );
};

export default SuccessPage;
