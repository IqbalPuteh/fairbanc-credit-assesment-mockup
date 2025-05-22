
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import FormCard from "@/components/ui/form-card";
import { CardOption } from "@/components/ui/card-option";
import { Button } from "@/components/ui/button";

const BankDataOptionsPage = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedOption === "direct_access" || selectedOption === "upload_statement") {
      // Both options lead to bank selection now
      navigate("/bank-selection");
    }
  };

  return (
    <PageContainer className="flex items-center justify-center p-4">
      <FormCard
        title="Connect Your Bank for a Seamless Credit Assessment"
        subtitle="Link your bank account securely to provide instant access to your transaction history, or upload your bank statement (minimum 6 months) to proceed. Your data remains confidential and is only used for accurate credit evaluation."
      >
        <div className="mt-4">
          <h3 className="text-center font-medium mb-6">Choose How to Share Your Financial Data:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
            <CardOption
              id="direct_access"
              name="bank_data_option"
              value="direct_access"
              selected={selectedOption}
              onChange={setSelectedOption}
              icon={
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src="/icons/bank-connect-icon.svg" alt="Direct Access" className="w-8 h-8" />
                </div>
              }
              label="Direct Access"
              className="h-full"
            />
            <CardOption
              id="upload_statement"
              name="bank_data_option"
              value="upload_statement"
              selected={selectedOption}
              onChange={setSelectedOption}
              icon={
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src="/icons/bank-statement-icon.svg" alt="Upload Bank Statement" className="w-8 h-8" />
                </div>
              }
              label="Upload Bank Statement"
              className="h-full"
            />
          </div>
          
          {selectedOption === "direct_access" && (
            <div className="text-center text-sm text-gray-600 mt-2 mb-6">
              Connect your bank securely for instant data retrieval
            </div>
          )}
          
          {selectedOption === "upload_statement" && (
            <div className="text-center text-sm text-gray-600 mt-2 mb-6">
              Manually upload a 6-month statement for assessment
            </div>
          )}
          
          <div className="flex justify-center">
            <Button 
              onClick={handleContinue} 
              disabled={!selectedOption}
              className="px-10"
            >
              Continue
            </Button>
          </div>
        </div>
      </FormCard>
    </PageContainer>
  );
};

export default BankDataOptionsPage;
