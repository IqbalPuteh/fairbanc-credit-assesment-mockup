
import PageContainer from "@/components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <PageContainer className="py-8 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Financial Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Credit Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">720</div>
              <p className="text-xs text-green-600 mt-1">+15 pts from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Credit Limit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">Rp 50,000,000</div>
              <p className="text-xs text-green-600 mt-1">Approved on May 20, 2023</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Application Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold text-green-600">Approved</div>
              <p className="text-xs text-gray-500 mt-1">Final review completed</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">AI-Powered Insights</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-fairbanc-blue">Strong Cash Flow Management</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Your business demonstrates consistent positive cash flow over the last 6 months,
                    which contributes positively to your credit assessment.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-fairbanc-blue">Inventory Optimization Opportunity</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Consider optimizing your inventory levels. Current data suggests you may be
                    carrying excess inventory that ties up working capital.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-fairbanc-blue">Seasonal Business Pattern Detected</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Your business shows strong seasonal patterns. Plan your credit usage to align
                    with these cycles for optimal financial management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <Card>
            <CardContent className="p-6">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Sign your credit agreement via the link sent to your email</li>
                <li>Complete business verification (if not already done)</li>
                <li>Set up automatic payments for your credit account</li>
                <li>Schedule a call with your dedicated financial advisor</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};

export default DashboardPage;
