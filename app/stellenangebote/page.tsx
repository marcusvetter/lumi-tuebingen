import PdfViewer from "../components/PdfViewer"

export default function Page() {
    return <div>
        <h1>Unsere Stellenangebote</h1>

        <h2>Pädagogische Fachkraft</h2>

        <div className="max-w-2xl mb-8">
            <PdfViewer
                pdfPath="/Paedagogische_Fachkraft_(mwd)_gesucht.pdf"
                title="Pädagogische Fachkraft (m/w/d) gesucht"
            />
        </div>

        {/* <h2>Aushilfskräfte</h2>
        <p>
            Wir suchen immer wieder Aushilfskräfte für unsere Einrichtung, die uns bei der Arbeit
            mit den Kindern unterstützen.
        </p>
        <div className="mb-6">
            <u>Du passt zu uns, wenn Du:</u>
            <ul>
                <li>Lust hast, mit Kindern von 1 bis 3 Jahren zu arbeiten</li>
                <li>Freude daran hast, die pädagogischen Fachkräfte in ihrer Arbeit zu unterstützen</li>
                <li>eine sinnvolle und bereichernde Tätigkeit suchst</li>
                <li>Spontan, motiviert und flexibel bist</li>
                <li>Gerne draußen bist und Lastenrad fahren kannst</li>
            </ul>
        </div>
        <div className="mb-6">
            <u>Wir bieten Dir:</u>
            <ul>
                <li>eine Aushilfstätigkeit auf Basis der steuerfreien Übungsleiterpauschale</li>
                <li>Einsätze flexibel nach Absprache</li>
                <li>viele Einblicke in den pädagogischen Alltag</li>
            </ul>
        </div>
        <p>
            Wenn wir Dein Interesse geweckt haben und Du Teil des LUMI-Teams werden
            möchtest, freuen wir uns sehr auf Deine Bewerbung, gerne per Mail, an: info at lumi-tuebingen punkt de
        </p>

        <h2>FSJ (freiwilliges soziales Jahr)</h2>
        <p>
            Wir freuen uns über Interessierte für ein FSJ in unserer Einrichtung.
        </p>
        <p>
            Melde dich gerne direkt bei uns oder informiere dich direkt beim <a href="https://www.dachverband-tuebingen.de/" target="_blank">FSJ-Träger</a> des Dachverbands der kleinen freien Kita-Träger Tübingen e.V.
        </p>

        <h2>Praktikum</h2>
        <p>
            Auch Praktikantinnen und Praktikanten jeglicher Art begrüßen wir immer gerne im LUMI.
        </p>
        <p>
            Frag einfach direkt bei uns an, ob wir derzeit bzw. für deinen benötigten Zeitraum Kapazitäten frei haben.
        </p> */}
    </div>
}
