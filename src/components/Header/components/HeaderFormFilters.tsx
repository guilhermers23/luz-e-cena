import SelectorGroup from "../../Selector/SelectorGroup";
import SelectorOption from "../../Selector/SelectorOption";
import { FaLocationDot } from "react-icons/fa6";

const cidades = [
    { id: 1, nome: "São Paulo" },
    { id: 2, nome: "Rio de Janeiro" },
    { id: 3, nome: "Belo Horizonte" },
    { id: 4, nome: "Curitiba" },
    { id: 5, nome: "Porto Alegre" },
    { id: 6, nome: "Vitória" }
];

const HeaderFormFilters = () => {
    return (
        <form>
            <SelectorGroup id="cidade" icon={<FaLocationDot />}>
                <SelectorOption label="Escolha sua cidade..." value="" />
                {cidades.map((cidade) => {
                    return (
                        <SelectorOption
                            key={cidade.id}
                            label={cidade.nome}
                            value={cidade.nome} />
                    )
                })}
            </SelectorGroup>
        </form>
    )
};

export default HeaderFormFilters;