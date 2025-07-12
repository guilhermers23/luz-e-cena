import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import * as S from "./Newsletter.styled";

const Newsletter = () => (
    <S.Newsletter>
        <S.Titulo>Inscreva-se para receber grandes descontos!</S.Titulo>
        <S.Form>
            <Fieldset>
                <InputText placeholder="Digite seu e-mail" />
            </Fieldset>
            <Button variant="default" type="submit">Inscrever-se</Button>
        </S.Form>
    </S.Newsletter>
);

export default Newsletter;
