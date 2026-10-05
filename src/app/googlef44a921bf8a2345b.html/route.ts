export async function GET() {
  return new Response('google-site-verification: googlef44a921bf8a2345b.html', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
