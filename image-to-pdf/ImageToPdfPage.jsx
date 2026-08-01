import ImageToPdfTool from "./components/ImageToPdfTool";
import HowItWorks from "./components/HowItWorks";
import RequireSubscription from '../../shell/components/RequireSubscription';

export default function ImageToPdfPage() {
  return (
    <>
      <RequireSubscription><ImageToPdfTool /></RequireSubscription>
      <HowItWorks />
    </>
  );
}
