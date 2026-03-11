import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import RandomStringClient from "./RandomStringClient";
import RandomStringHeader from "./RandomStringHeader";
import RandomStringInfo from "./RandomStringInfo";

export const metadata = {
  title: "Random String Generator – Generate Random Strings Online",
  description:
    "Generate random strings instantly with this free online random string generator. Customize length, characters, numbers and symbols.",
};

export default function RandomStringPage() {
  return (
    <ToolLayout title={<RandomStringHeader />} description="Generate random strings instantly for testing, tokens, or IDs.">
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      <RandomStringClient />
      <hr className="my-8" />
      <RandomStringInfo />
    </ToolLayout>
  );
}
