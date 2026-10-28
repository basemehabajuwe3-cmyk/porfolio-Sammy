const endpointPattern = /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/;

function getEndpoint(name: string): string | undefined {
  const endpoint = import.meta.env[name]?.trim();

  if (endpoint && !endpointPattern.test(endpoint)) {
    throw new Error(
      `${name} must be a Formspree endpoint such as https://formspree.io/f/yourFormId`,
    );
  }

  return endpoint || undefined;
}

export const formspreeEndpoints = {
  fr: getEndpoint('PUBLIC_FORMSPREE_ENDPOINT_FR'),
  en: getEndpoint('PUBLIC_FORMSPREE_ENDPOINT_EN'),
};
