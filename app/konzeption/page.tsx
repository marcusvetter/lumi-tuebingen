import Link from 'next/link'

export default function Page() {
    return <div>
        <h1>
            Unsere Konzeption
        </h1>
        <p>
            <Link className="underline" target='_blank' href={'/konzeption.pdf'} prefetch={false}>
                Download als PDF
            </Link>
        </p>
    </div>
}
