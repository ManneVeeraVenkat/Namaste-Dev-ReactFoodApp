import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: "cb1424a6-25ee-4fca-b9a0-6c7116fbec3b",
  clientToken: "pub121aac1858dc6dae63f699533bc74712",
  // `site` refers to the Datadog site parameter of your organization
  // see https://docs.datadoghq.com/getting_started/site/
  site: "us5.datadoghq.com",
  service: "reactapp",
  env: "<ENV_NAME>",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
});
export default datadogRum;
