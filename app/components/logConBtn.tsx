import { useState } from "react";
import React from "react";

interface ChildProps {
    logro?: boolean;
    controversia?: boolean;
    children?: React.ReactNode;
}

interface Props {
    children: React.ReactNode;
}

const LogConBtn: React.FC<Props> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<'logros' | 'controversias'>('logros');

    const filteredChildren = React.Children.toArray(children).filter((child) => {
        if (React.isValidElement<ChildProps>(child)) {
            // Acceder a las props directamente del elemento
            const props = child.props as ChildProps;
            if (activeTab === 'logros') return props.logro === true;
            if (activeTab === 'controversias') return props.controversia === true;
        }
        return false;
    });

    return (
        <>
            <div className="flex gap-4 mb-8 border-b justify-center items-center">
                <button
                    onClick={() => setActiveTab('logros')}
                    className={`px-6 py-3 font-semibold transition ${
                        activeTab === 'logros'
                            ? 'text-green-600 border-b-2 border-green-600'
                            : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                    ✅ Logros y Aportes
                </button>
                <button
                    onClick={() => setActiveTab('controversias')}
                    className={`px-6 py-3 font-semibold transition ${
                        activeTab === 'controversias'
                            ? 'text-orange-600 border-b-2 border-orange-600'
                            : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                    ⚠️ Controversias
                </button>
            </div>
            
            <div className="grid grid-rows-4 gap-4" style={{gridTemplateColumns : 'repeat(auto-fit, minmax(40rem, 1fr))'}}>
                {filteredChildren.length > 0 ? (
                    filteredChildren
                ) : (
                    <div className="text-center p-8 text-slate-500">
                        No hay {activeTab === 'logros' ? 'logros' : 'controversias'} para mostrar
                    </div>
                )}
            </div>
        </>
    );
};

export default LogConBtn;