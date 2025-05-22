
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import FormCard from "@/components/ui/form-card";
import { CardOption } from "@/components/ui/card-option";
import { Button } from "@/components/ui/button";

const DataOptionsPage = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedOption === "erp_connect") {
      navigate("/erp-selection");
    } else if (selectedOption === "upload_report") {
      navigate("/upload-monthly");
    }
  };

  return (
    <PageContainer className="flex items-center justify-center p-4">
      <FormCard
        title="Seamless Data Integration for Accurate Assessment"
        subtitle="Connect directly to your ERP for real-time access to sales, payment, and inventory reports — or upload your monthly reports to proceed. The choice is yours."
      >
        <div className="mt-4">
          <h3 className="text-center font-medium mb-6">Choose How to Share Your Financial Data:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
            <CardOption
              id="erp_connect"
              name="data_option"
              value="erp_connect"
              selected={selectedOption}
              onChange={setSelectedOption}
              icon={
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src="/icons/erp-icon.svg" alt="ERP Connect" className="w-8 h-8" />
                </div>
              }
              label="ERP Connect"
              className="h-full"
            />
            <CardOption
              id="upload_report"
              name="data_option"
              value="upload_report"
              selected={selectedOption}
              onChange={setSelectedOption}
              icon={
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src="/icons/upload-icon.svg" alt="Upload Monthly Report" className="w-8 h-8" />
                </div>
              }
              label="Upload Monthly Report"
              className="h-full"
            />
          </div>
          
          {selectedOption === "erp_connect" && (
            <div className="text-center text-sm text-gray-600 mt-2 mb-6">
              Connect instantly for seamless data integration
            </div>
          )}
          
          {selectedOption === "upload_report" && (
            <div className="text-center text-sm text-gray-600 mt-2 mb-6">
              Manually upload sales, payment, and inventory data
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

export default DataOptionsPage;
