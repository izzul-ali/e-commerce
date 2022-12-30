import Head from 'next/head'

export default function SetTitle({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
