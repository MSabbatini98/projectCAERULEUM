import ExpandingPanel from "@/components/utils/expandCTA";


export default function TestPage() {
  return (
    <div className="main_content test_page">
      <h1>Test Page</h1>
      <p>This is a simple test page for the expanding CTA component.</p>
      <p>content Before</p>
      <ExpandingPanel color="red" CTAtext="Open">
        <div className="fake_content">
          <p>Anything goes here</p>
        </div>
      </ExpandingPanel>
      <p>content After  </p>
    </div>
  );
} 
