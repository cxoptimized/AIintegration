import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI Integration Assessment</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>Welcome to the AI Integration Tool</h1>
        <p>This is your starting point for auditing CX systems and integrating AI solutions.</p>
      </main>
    </div>
  );
}