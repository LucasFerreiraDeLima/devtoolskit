import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import RegexTesterClient from "./RegexTesterClient";
import RegexTesterHeader from "./RegexTesterHeader";
import RegexTesterInfo from "./RegexTesterInfo";

export const metadata = {
  title: "Regex Tester – Free Online Regular Expression Tester",
  description:
    "Test regular expressions instantly with this free online regex tester. Enter a pattern, add flags and see matches highlighted in real time.",
};

export default function RegexTesterPage() {
  return (
    <ToolLayout
      title={<RegexTesterHeader />}
      description="Test regular expressions and see matches highlighted instantly."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      {/* Tool interface */}
      <RegexTesterClient />
      <hr className="my-8" />
      <RegexTesterInfo />
      <div className="mb-8 mt-8">
        <AdPlaceholder />
      </div>
    </ToolLayout>
  );
}
