import { Carrossel, SectionText, SectionImg, Button } from "./styles";
import Link from "next/link";
import Lottie from "react-lottie";
import animationData from "../../../lotties/carrossel.json";

export default function CarrosselView() {
  return (
    <>
      <Carrossel>
        <SectionText>
          <div>
            <h1>Luis Ricardo</h1>
            <h3>Programador Full Stack na Tech4Humans Brasil</h3>
          </div>
          <div>
            <p>Entusiasta das melhores tecnologias de desenvolvimento</p>
            <Link href={"#about"}>
              <Button>Sobre</Button>
            </Link>
          </div>
        </SectionText>
        <SectionImg>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            isClickToPauseDisabled
          />
        </SectionImg>
      </Carrossel>
    </>
  );
}
