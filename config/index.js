

export function getConfig() {
  return JSON.parse(process.env.FRONT_VISIBILITY_CONFIG || "");
}
