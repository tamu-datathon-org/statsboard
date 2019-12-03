import NextHead from 'next/head'

// This tells next js what needs to go in the head html element
const Head = (props) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title || ''}</title>
        <meta name="description" content={props.description || ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="32x32" href="/static/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/favicon.ico" />
        <link rel="icon" href="/static/favicon.ico" />
        <meta property="og:url" content={props.url || ""} />
        <meta property="og:title" content={props.title || ''} />
        <meta property="og:description" content={props.description || ""} />
        <meta name="twitter:site" content={props.url || ""} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={props.ogImage || ""} />
        <meta property="og:image" content={props.ogImage || ""} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
    </NextHead>
)

export default Head