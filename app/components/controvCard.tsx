import "./components.css";
interface Props {
    titulo: string;
    descripcion: string;
    contexto: string;
    fuente: string;
    link: string;
    controversia?: boolean;
}

export default function ControversiaCard({ titulo, descripcion, contexto, fuente, controversia, link }: Props) {
    return (
        <div className="bg-orange-200 border-l-4 border-orange-600 rounded-lg p-6 text-center" id="controversiaCard">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
                {titulo}
            </h3>
            <p className="text-slate-700 leading-relaxed mb-3">
                {descripcion}
            </p>
            <div className="bg-yellow-200 rounded p-3 mb-3">
                <p className="text-sm text-slate-600">
                    <strong>Contexto:</strong> {contexto}
                </p>
            </div>
            <a href={link} target="blank" className="text-sm text-slate-500 italic">
                {fuente}
            </a>
        </div>)
}