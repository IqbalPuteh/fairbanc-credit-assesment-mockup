
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import FormCard from "@/components/ui/form-card";
import { Button } from "@/components/ui/button";

interface BankOption {
  id: string;
  name: string;
  logo: string;
}

const BankSelectionPage = () => {
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const banks: BankOption[] = [
    { id: "bca", name: "BCA", logo: "/banks/bca.png" },
    { id: "mandiri", name: "Mandiri", logo: "/banks/mandiri.png" },
    { id: "bni", name: "BNI", logo: "/banks/bni.png" },
    { id: "bri", name: "BRI", logo: "/banks/bri.png" },
    { id: "permata", name: "Permata Bank", logo: "/banks/permata.png" },
    { id: "muamalat", name: "Bank Muamalat", logo: "/banks/muamalat.png" },
    { id: "danamon", name: "Danamon", logo: "/banks/danamon.png" },
    { id: "bsi", name: "BSI", logo: "/banks/bsi.png" },
    { id: "cimb", name: "CIMB", logo: "/banks/cimb.png" },
  ];

  const handleContinue = () => {
    navigate("/bank-login");
  };

  const handleUploadStatement = () => {
    navigate("/upload-bank-statement");
  };

  return (
    <PageContainer className="flex items-center justify-center p-4">
      <FormCard
        title="Select Your Bank to Get Started"
        subtitle="Choose your bank to connect securely and provide access to your financial data for a fast, accurate credit assessment. Don't see your bank? You can still upload your statement."
      >
        <div className="mt-2">
          <h3 className="text-lg font-medium mb-6">Choose your bank:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {banks.map((bank) => (
              <div
                key={bank.id}
                className={`border rounded-lg p-4 flex items-center justify-center cursor-pointer transition-all h-24 ${
                  selectedBank === bank.id
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-primary/60"
                }`}
                onClick={() => setSelectedBank(bank.id)}
              >
                <input
                  type="radio"
                  id={bank.id}
                  name="bank"
                  value={bank.id}
                  checked={selectedBank === bank.id}
                  onChange={() => setSelectedBank(bank.id)}
                  className="sr-only"
                />
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-4">
                    <div
                      className={`w-4 h-4 rounded-full border ${
                        selectedBank === bank.id ? "border-primary" : "border-gray-300"
                      } flex items-center justify-center`}
                    >
                      {selectedBank === bank.id && (
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                  </div>
                  <img src={bank.logo} alt={bank.name} className="h-10 max-w-[100px]" />
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
            <Button onClick={handleContinue} disabled={!selectedBank} className="px-10">
              Continue
            </Button>
          </div>
        </div>
      </FormCard>
    </PageContainer>
  );
};

export default BankSelectionPage;
