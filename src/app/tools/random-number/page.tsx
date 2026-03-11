import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import RandomNumberClient from "./RandomNumberClient";
import RandomNumberHeader from "./RandomNumberHeader";
import RandomNumberInfo from "./RandomNumberInfo";

export const metadata = {
  title: "Random Number Generator – Generate Random Numbers Online",
  description:
    "Generate random numbers instantly with this free online random number generator. Choose a range and generate single or multiple numbers.",
};

export default function RandomNumberPage() {
  return (
    <ToolLayout title={<RandomNumberHeader />} description="Generate random numbers instantly within a custom range.">
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      <RandomNumberClient />
      <hr className="my-8" />
      <RandomNumberInfo />
    </ToolLayout>
  );
}
