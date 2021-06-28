import Head from 'next/head'
import React from 'react'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
           <meta name='viewport' content='width=device-width, initial-scale=1' />
           <meta name='Keywords' content={keywords} />
           <meta name='description' content={description} />
           <meta charSet='utf-8' />
           <link rel='icon' href='/favicon.ico' />
           <title>{title}</title>
        </Head>
    )
}


Meta.defaultProps = {
    title: 'WebDev Newz',
    keywords: 'Web development Programming',
    description: 'Get the latest news in web dev'
}

export default Meta
