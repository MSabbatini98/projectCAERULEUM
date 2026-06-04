import {
  Title,
  Subtitle,
  Text,
  Image,
  Link,
} from "@/components/projects/primitives";

export default function Pasta() {
  return (
    <>
      <Title>Pasta Project</Title>

      <Subtitle>Your pasta project details here</Subtitle>

      <Text>
        This is where your pasta project content goes. You can use the primitives components to structure your content.
      </Text>

      <Text>
        Add images, links, and formatted text using the primitives components.
      </Text>

      <Link href="https://example.com">
        Project link
      </Link>
    </>
  );
}