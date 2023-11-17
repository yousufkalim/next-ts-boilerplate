export { Home as default } from '@layouts/Home';

export function getStaticProps(): {
  props: { title: string; description: string; author: string };
} {
  const title = 'Home Page';
  const description = 'Website created using Next.js boilerplate by Yousuf Kalim';
  const author = 'Yousuf Kalim';

  return {
    props: { title, description, author },
  };
}
