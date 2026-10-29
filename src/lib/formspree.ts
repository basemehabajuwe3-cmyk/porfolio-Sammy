const endpointPattern = /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/;
const defaultEndpoint = 'https://formspree.io/f/mnppzlrq';

function getEndpoint(name: string): string | undefined {
  const endpoint = import.meta.env[name]?.trim() || defaultEndpoint;

  if (endpoint && !endpointPattern.test(endpoint)) {
    throw new Error(
      `${name} must be a Formspree endpoint such as https://formspree.io/f/yourFormId`,
    );
  }

  return endpoint;
}

export const formspreeEndpoints = {
  fr: getEndpoint('PUBLIC_FORMSPREE_ENDPOINT_FR'),
  en: getEndpoint('PUBLIC_FORMSPREE_ENDPOINT_EN'),
};
