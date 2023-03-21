import Script from 'next/script';

/**
 * Google Tag Manager 스크립트 추가
 */
const GoogleTagManager = ({ nonce = '' }: Props) => {
  return (
    <Script
      nonce={nonce}
      id="google-tag-manager"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_KEY}');
				`,
      }}
    />
  );
};

/**
 * Google Tag Manager NoScript 추가
 */
export const GoogleTagManagerNoScript = () => (
  <>
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_KEY}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  </>
);

type Props = {
  nonce: string;
};

export default GoogleTagManager;
