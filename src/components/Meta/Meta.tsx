import Head from 'next/head';
import { useRouter } from 'next/router';
import { APP_NAME, WEB_URL } from '@config';

const defaultOgImage = `${WEB_URL}/og-image.png`;

export const Meta = ({
  title = '',
  description = 'Website created using Next.js boilerplate by Yousuf Kalim',
  prefix = APP_NAME,
  ogImage = defaultOgImage,
}) => {
  const { asPath } = useRouter();
  const titleText = [prefix, title].filter(Boolean).join(' | ');

  return (
    <Head>
      <title key="title">{titleText}</title>
      <meta key="description" name="description" content={description} />
      <meta name="author" content={APP_NAME} />

      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Banner for the site" />
      <meta property="og:image:type" content="image/png" />

      <meta property="og:title" content={titleText} />
      <meta property="og:site_name" content={APP_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={WEB_URL + asPath} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content={WEB_URL?.replace('https://', '')} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={titleText} />
      <meta name="twitter:url" content={WEB_URL + asPath} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};
