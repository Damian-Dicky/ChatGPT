import Example from "./Example";
import ModelSelect from "./ModelSelect";

export default function Welcom() {
    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-20">
            <ModelSelect />
            <h1 className="font-sm mt-20 text-4xl font-bold">
                玩原神玩的GENSHIN IMPACT
            </h1>
            <Example />
        </div>
    );
}
