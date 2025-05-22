
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import FormCard from "@/components/ui/form-card";
import { Button } from "@/components/ui/button";

interface ERPOption {
  id: string;
  name: string;
  logo: string;
}

const ERPSelectionPage = () => {
  const [selectedERP, setSelectedERP] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const erpSystems: ERPOption[] = [
    { id: "zahir", name: "Zahir", logo: "/erp/zahir.png" },
    { id: "hashmicro", name: "HashMicro", logo: "/erp/hashmicro.png" },
    { id: "bee", name: "BEE Accounting", logo: "/erp/bee.png" },
    { id: "zoho", name: "Zoho", logo: "/erp/zoho.png" },
    { id: "oracle", name: "Oracle", logo: "/erp/oracle.png" },
    { id: "jurnal", name: "Mekari Jurnal", logo: "/erp/jurnal.png" },
    { id: "accurate", name: "Accurate Online", logo: "/erp/accurate.png" },
    { id: "nd6", name: "ND6", logo: "/erp/nd6.png" },
    { id: "dynamics", name: "Microsoft Dynamics", logo: "/erp/dynamics.png" },
  ];

  const handleContinue = () => {
    navigate("/erp-login");
  };

  const handleUploadStatement = () => {
    navigate("/upload-monthly");
  };

  return (
    <PageContainer className="flex items-center justify-center p-4">
      <FormCard
        title="Connect Your ERP for Seamless Data Integration"
        subtitle="Select your ERP system to effortlessly sync financial data and accelerate your credit assessment"
      >
        <div className="mt-2">
          <h3 className="text-lg font-medium mb-6">Choose your ERP: <span className="text-red-500">*</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {erpSystems.map((erp) => (
              <div
                key={erp.id}
                className={`border rounded-lg p-4 flex items-center justify-center cursor-pointer transition-all h-24 ${
                  selectedERP === erp.id
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-primary/60"
                }`}
                onClick={() => setSelectedERP(erp.id)}
              >
                <input
                  type="radio"
                  id={erp.id}
                  name="erp"
                  value={erp.id}
                  checked={selectedERP === erp.id}
                  onChange={() => setSelectedERP(erp.id)}
                  className="sr-only"
                />
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-4">
                    <div
                      className={`w-4 h-4 rounded-full border ${
                        selectedERP === erp.id ? "border-primary" : "border-gray-300"
                      } flex items-center justify-center`}
                    >
                      {selectedERP === erp.id && (
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                  </div>
                  <img src={erp.logo} alt={erp.name} className="h-10 max-w-[100px]" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Don't see your bank?</p>
            <Button variant="outline" onClick={handleUploadStatement} className="mb-6">
              Upload Bank Statement
            </Button>
          </div>

          <div className="flex justify-center">
            <Button onClick={handleContinue} disabled={!selectedERP} className="px-10">
              Continue
            </Button>
          </div>
        </div>
      </FormCard>
    </PageContainer>
  );
};

export default ERPSelectionPage;
