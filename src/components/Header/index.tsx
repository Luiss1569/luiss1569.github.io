import { ThemesContext } from "@/src/contexts/themeContext";
import { memo, useContext, useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import { Container, ListItems, Item } from "./style";
import animationData from "@/src/lotties/darkLigthToogle.json";

function CardComponent() {
  const { theme, toggleTheme } = useContext(ThemesContext);
  const [isDark, setIsDark] = useState(theme.title);
  const lottieRef = useRef(null);

  const animate = async () => {
    if (lottieRef.current) {
      setIsDark((prev) => !prev);
      setTimeout(() => {
        toggleTheme();
      }, 600);
    }
  };

  useEffect(() => {
    if (lottieRef.current && isDark) {
      lottieRef.current.play();
    }
  }, [lottieRef.current, isDark]);

  return (
    <Container>
      <ListItems>
        <Item onClick={() => animate()}>
          <Lottie
            options={{
              loop: false,
              autoplay: false,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            isClickToPauseDisabled
            ref={lottieRef}
            direction={isDark ? 1 : -1}
          />
        </Item>
      </ListItems>
    </Container>
  );
}

export default memo(CardComponent);
