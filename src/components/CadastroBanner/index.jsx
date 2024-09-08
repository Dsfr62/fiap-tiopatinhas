import Button from "../Button";
import { Banner } from "../Banner";
import { useNavigate } from "react-router-dom";

const CadastroBanner = () => {
  const navigate = useNavigate();

  function handleNavigateToForm() {
    navigate("/#form-cadastro");
  }

  return (
    <Banner.Container
      variantSize="md"
      variantColor="negative"
      textPosition="center"
    >
      <Banner.Title>Cadastro grátis durante 30 dias</Banner.Title>
      <Banner.Text>
        Clique no botão abaixo e fale conosco para se cadastrar e experimentar nossa ferramenta.
      </Banner.Text>
      <Button
        type="button"
        variantStyle="tertiary"
        width="w-full md:w-52"
        onClick={handleNavigateToForm}
      >
        Quero experimentar
      </Button>
    </Banner.Container>
  );
};

export default CadastroBanner;
