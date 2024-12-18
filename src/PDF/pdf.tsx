import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { /*PDFDownloadLink*/, PDFViewer } from '@react-pdf/renderer';
import { useMy_solicitudMutation } from '../redux/userApiSlices';
import { useEffect, useState, Suspense } from 'react';

// Create styles

const styles = StyleSheet.create({
    page: {
        fontSize: 12,
        padding: "60px",
    },
    logo: {
        width: 170,
        height: 45
    },
    fecha: {
        paddingTop: 25,
        textAlign: "right",
    },
    usuario: {
        paddingTop: '50px'
    },
    usuario2: {
        paddingTop: '50px',
        textAlign: 'right',
    },
    presente: {
        paddingTop: '15px'
    },
    texto1: {
        paddingTop: '60px'
    },
    texto2: {
        paddingTop: '20px'
    },
    gerente: {
        paddingTop: '45px',
        textAlign: 'center'
    },
    gerente2: {
        textAlign: 'center'
    },
    AS: {
        paddingTop: '80px'
    },
    footer: {
        paddingTop: '25px',
        textAlign: 'center',
        fontSize: 10.8

    },
    telf: {
        textAlign: 'center',
        fontSize: 10.8
    },
    titulo: {
        paddingTop: '30px',
        textAlign: 'center',
    },
    table: {
        width: 'auto',
        margin: 10,
        fontSize: '8px',
        border: "1px solid black",
        borderBottom: "none",
        borderLeft: "none",
    },
    tableRow: {
        flexDirection: 'row',
        borderBottom: "1px solid black",
    },
    tableCol: {
        width: '25%',
        borderLeft: "1px solid black",
    },
    tableCell: {
        padding: 5,
        fontSize: 8,
    },
    nota: {
        fontSize: "9.2px",
        paddingTop: "20px",
        gap: '15px'
    }
});

function TableInf(props: { tipo: string }) {
    return (
        <View style={styles.tableRow}>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}> {props.tipo} </Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Dato 2</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Dato 3</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Dato 4</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Dato 4</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Dato 4</Text>
            </View>
        </View>
    )

}

// Create Document Component
function MyDocument(props: { datos: any }) {
    const { tipo, iniGerente, _id, cargo, shortFecha, fecha, name, lastname, cedula, gerente, analista } = props.datos


    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Image src="src\img\Ine-black-logo.png" style={styles.logo} />

                <View style={styles.fecha}>
                    <Text>N° xx-00{_id}</Text>
                    <Text>Caracas, {fecha} </Text>
                </View>

                <Text style={styles.usuario}>Ciudadano(a) </Text>

                <Text>{name} {lastname}</Text>

                <Text>C.I N° {cedula}</Text>

                <Text style={styles.presente}>Presente.-</Text>

                <Text style={styles.texto1}>
                    Tengo el agrado de dirigirme a usted, en la oportunidad de dar respuesta a su solicitud de
                    fecha {fecha}, en la cual requiere información sobre los habitantes de los
                    Centros Poblados del país.
                </Text>

                <Text style={styles.texto2}>
                    A este respecto cumplo con remitirle anexo a la presente, un cuadro contentivo de
                    la información por usted solicitada.
                </Text>

                <Text style={styles.gerente}>Atentamente,</Text>

                <Text style={styles.gerente}>{gerente}</Text>
                <Text style={styles.gerente2}> {cargo} </Text>

                <Text style={styles.AS}>
                    {iniGerente}/{analista} {shortFecha}
                </Text>

                <Text style={styles.footer}>
                    Av. José Félix Sosa, entre Av. Sur Altamira y Av. del Ávila, Torre Británica,
                    Mezzanina 2, Oficina Servicio de Atención al Usuario, Altamira, Caracas -
                    Distrito Capital.
                </Text>
                <Text style={styles.telf}>(0212) 201-02-74 / 02-75 / 02-16 </Text>

            </Page>

            <Page size="A4" style={styles.page}>
                <Image src="src\img\Ine-black-logo.png" style={styles.logo} />
                <Text style={styles.titulo}>POBLACIÓN DE CENTROS POBLADOS</Text>

                <View style={styles.fecha}>
                    <Text>XXXXXXXXXXXXXXXX</Text>
                    <Text>Caracas, XXXX</Text>
                </View>

                <View style={styles.usuario2}>
                    <Text>Nombre y Apellido: XXXXXXXXXXXXXXXX</Text>
                    <Text>C.I N° X.XXX.XXX</Text>
                </View>

                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Centro Poblado</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Entidad</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Municipio</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Parroquia</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Poblacion</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Censo</Text>
                        </View>
                    </View>

                    <TableInf tipo={tipo} />

                </View>

                <View style={styles.nota}>
                    <Text>Nota: Hasta el XI Censo de Población y Vivienda (1981), se entiende como Población Rural
                        la población residente en centros poblados de menos de 1.000 habitantes, desde el XII Censo de Población y
                        Vivienda (1990), hasta el XIII Censo de Población y Vivienda (2001) la de menos de 2.500 habitantes.
                    </Text>
                    <Text>
                        Fuente: Nomenclador de centros poblados y comunidades indígenas, INE.
                    </Text>

                </View>

                <Text style={styles.gerente}>Atentamente,</Text>

                <Text style={styles.gerente}>{gerente}</Text>
                <Text style={styles.gerente2}> {cargo} </Text>

                <Text style={styles.AS}>
                    {iniGerente}/{analista} {shortFecha}
                </Text>

            </Page>
        </Document>
    )
};

let datosU = {
    _id: 50000,
    fecha: "06 de diciembre del 2024",
    shortFecha: "20241206",
    name: "juan carlos",
    lastname: "gomez",
    cedula: "34228595",
    gerente: "Arold Santana",
    iniGerente: "AS",
    analista: "sg",
    cargo: "Gerente de Servicios de Atención al Usuario",
}


export default function PDF() {
    const [Soli, setSoli] = useState<{}>(datosU)
    const [my_soli] = useMy_solicitudMutation()

    useEffect(() => {
        my_soli("").unwrap()
            .then(solicitud => setSoli({  ...solicitud[0], ...datosU }))
    }, [])


    return (
        <>
            {/* <PDFDownloadLink document={<MyDocument />} fileName='prueva.pdf'>
                <button> Descargame </button>
            </PDFDownloadLink> */}
            <Suspense >
                <PDFViewer style={{ width: "100%", height: "100dvh" }}>
                    <MyDocument datos={Soli} />
                </PDFViewer>
            </Suspense>
        </>
    )
}