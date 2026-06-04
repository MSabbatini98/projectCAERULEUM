import {
    Title,
    Text,
    Image,
    Link,
  } from "@/components/projects/primitives";
  
  export default function Test() {
    return (
      <>
        <Title>TEST</Title>
  
        <Text>
          This page validates rendering and layout consistency.
        </Text>
  
        <Image src="/images/pasta.jpg" />
  
        <Text>
          Quosque tandem abutere, catilina, patentia nostra ? Quamdium nos etiam furor iste tuus eludet ? Quem ad finem sese effrenata jactabit audacia ? nihilne te nocturrnum praesidium palatii, nihil urbis vigiliae, nihil timor populi nihil consensus bonorum omnium nihil hic minitisssimus habendi senatus locus, nihil horum ora vultusque moverunt ?
        </Text>
  
        <Link href="https://example.com">
          External link test
        </Link>
      </>
    );
  }