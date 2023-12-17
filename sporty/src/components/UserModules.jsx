import { useMemo, useState } from "react";
import { ModuleButton } from "./ModuleButton";
import { useNavigate } from "react-router-dom";
import { CirclesFour, IdentificationCard, Trophy } from "@phosphor-icons/react";

export function UserModules() {
    const navigation = useNavigate();
    // const session = useCache(state => state.session);
    const [module] = useState([
        {
            name: "tournaments",
            render: (key) => <ModuleButton key={key}
                Icon={Trophy}
                label="Torneios"
                comment="Gerencie seus Torneios"
                onClick={() => navigation("/tournament")}
            />
        },
        {
            name: "categories",
            render: (key) => <ModuleButton key={key}
                Icon={CirclesFour}
                label="Categorias"
                comment="Gerencie suas Categorias"
                onClick={() => navigation("/categories")}
            />
        },
        {
            name: "inscriptions",
            render: (key) => <ModuleButton key={key}
                Icon={IdentificationCard}
                label="Inscrições"
                comment="Gerencie suas Inscrições"
                onClick={() => navigation("/inscriptions")}
            />
        },

    ]);

    const modules = useMemo(() => {
        return module.map(mod => {
            return mod.render(mod.name)
        })

    }, [module]);

    return modules;

}