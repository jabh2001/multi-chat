import React, { useEffect, useState } from 'react';
import styles from './index.module.css'
interface qrType {
    nombre: string,
    contenido: string,
    user:boolean
}

const QrPage: React.FC = () => {
    const [codigos, establecerCodigos] = useState<qrType[]>()
    useEffect(() => {
        fetch('http://localhost:3000/api/test/all').then((r)=>{
            if(r.status==200){
                console.log('conexion estable')
            }
        })
        const socket = new WebSocket('ws://localhost:3000/ws/qr');

        socket.onopen = () => {
            console.log('conectado');
        };
        socket.onmessage = (m) => {
            console.log(m)
            const nuevosCodigos = JSON.parse(m.data);
            establecerCodigos(nuevosCodigos);
        };

        // Cleanup WebSocket connection on component unmount

    }, []); // Empty dependency array to run the effect only once on component mount

    return (
        <div className={styles.divPrincipal}>
            {
                codigos?.map((m) => {
                    return <div key={m.contenido}>
                        <img src={`data:image/png;base64,${m.contenido}`} alt="" />
                        <p>
                            {m.nombre}
                            <span>{"  "}</span>
                            {m.user ? "activo" : "debe scannear"}
                        </p>
                    </div>
                })
            }
        </div>
    );
};

export default QrPage;
