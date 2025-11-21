interface Props {
    titulo : string;
    descripcion : string;
    fuente : string;
    logro?: boolean;
    link: string;
}

const LogrosCard : any = ({titulo, descripcion, fuente, logro, link} : Props) => {
    return (
         <div className="w-[screen/2] h-[screen/2] bg-green-200 rounded-lg p-6 gap-4 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
                {titulo}
            </h3>
            <p className="text-slate-700 leading-relaxed mb-3">
            {descripcion}
            </p>
            <a href={link} target="blank" className="text-sm text-slate-500 italic">
                {fuente}
            </a>
    </div>);}

export default LogrosCard