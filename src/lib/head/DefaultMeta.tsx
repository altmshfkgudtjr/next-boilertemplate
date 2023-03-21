/** Default 메타 데이터 */
const DefaultMeta = () => {
  return (
    // eslint-disable-next-line @next/next/no-head-element
    <head>
      <meta name="description" content={`프로젝트 설명`} />
      <meta name="keywords" content={`키워드1, 키워드2, 키워드3`} />
			<meta name="copyright" content={`© 2023 ${process.env.NEXT_PUBLIC_BRAND_KOR}. All rights reserved.`} />
      <meta name="author" content={process.env.NEXT_PUBLIC_BRAND_ENG} />
      {/* ------------------------ Default ------------------------ */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_DEFAULT_HOST} />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_BRAND_ENG} />
      <meta property="og:title" content={`${process.env.NEXT_PUBLIC_BRAND_ENG}`} />
      <meta property="og:description" content={`프로젝트 설명`} />
      <meta property="og:image" content={`/og_thumbnail.png`} />
      {/* ------------------------ Twitter ------------------------ */}
      <meta name="twitter:card" content={`프로젝트 설명`} />
      <meta name="twitter:domain" content={process.env.NEXT_PUBLIC_DEFAULT_HOST} />
      <meta name="twitter:title" content={`${process.env.NEXT_PUBLIC_BRAND_ENG}`} />
      <meta name="twitter:description" content={`프로젝트 설명`} />
      <meta name="twitter:image" content={`/og_thumbnail.png`} />
      {/* ------------------------ Facebook ----------------------- */}
      <meta name="facebook:card" content={`프로젝트 설명`} />
      <meta name="twitter:domain" content={process.env.NEXT_PUBLIC_DEFAULT_HOST} />
      <meta name="facebook:title" content={`${process.env.NEXT_PUBLIC_BRAND_ENG}`} />
      <meta name="facebook:description" content={`프로젝트 설명`} />
      <meta name="facebook:image" content={`/og_thumbnail.png`} />
    </head>
  );
};

export default DefaultMeta;