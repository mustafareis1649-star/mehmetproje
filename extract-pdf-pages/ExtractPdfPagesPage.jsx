import ExtractPdfPagesTool from "./components/ExtractPdfPagesTool";
import HowItWorks from "./components/HowItWorks";
import RequireSubscription from '../../shell/components/RequireSubscription';

export default function ExtractPdfPagesPage() {
  return (
    <>
      <RequireSubscription><ExtractPdfPagesTool /></RequireSubscription>
      <HowItWorks />
    </>
  );
}
