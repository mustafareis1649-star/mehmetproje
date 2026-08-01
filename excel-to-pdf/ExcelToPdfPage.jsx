import ExcelToPdfTool from './components/ExcelToPdfTool';
import HowItWorks from './components/HowItWorks';
import RequireSubscription from '../../shell/components/RequireSubscription';

export default function ExcelToPdfPage() {
  return (
    <>
      <RequireSubscription><ExcelToPdfTool /></RequireSubscription>
      <HowItWorks />
    </>
  );
}
