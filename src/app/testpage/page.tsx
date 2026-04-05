import ExpandingPanel from "@/components/utils/expandCTA";


export default function TestPage() {
  return (
    <div className="main_content test_page">
      <ExpandingPanel color="red" CTAtext="Open">
        <p>Anything goes here</p>
        <p>Anything goes here</p>
        <p>Anything goes here</p>
      </ExpandingPanel>
    </div>
  );
}
